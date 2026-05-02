"use client";

import { useEffect, useRef } from "react";

const defaultMode = "default";
const defaultLabel = "DTP";

export default function TeamCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursorElement = cursorRef.current;
    const labelElement = labelRef.current;

    if (!cursorElement || !labelElement) {
      return;
    }

    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointerQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let animationFrame = 0;
    let activeMode = defaultMode;
    let activeLabel = defaultLabel;

    cursorElement.dataset.mode = defaultMode;
    cursorElement.dataset.visible = "false";
    labelElement.textContent = defaultLabel;

    const setCursorTarget = (sourceElement: Element | null) => {
      const teamSurface = sourceElement?.closest(".team-page-shell");

      if (!teamSurface) {
        cursorElement.dataset.visible = "false";
        return;
      }

      const targetElement = sourceElement?.closest<HTMLElement>("[data-cursor]");
      const nextMode = targetElement?.dataset.cursor || defaultMode;
      const nextLabel = targetElement?.dataset.cursorLabel || defaultLabel;

      if (nextMode === "native") {
        cursorElement.dataset.visible = "false";
        cursorElement.dataset.pressed = "false";
        cursorElement.dataset.mode = defaultMode;
        labelElement.textContent = defaultLabel;
        activeMode = defaultMode;
        activeLabel = defaultLabel;
        return;
      }

      cursorElement.dataset.visible = "true";

      if (nextMode !== activeMode) {
        cursorElement.dataset.mode = nextMode;
        activeMode = nextMode;
      }

      if (nextLabel !== activeLabel) {
        labelElement.textContent = nextLabel;
        activeLabel = nextLabel;
      }
    };

    const getElementAtPointer = () => {
      const pointedElement = document.elementFromPoint(targetX, targetY);

      return pointedElement instanceof Element ? pointedElement : null;
    };

    const resolveCursorSource = (eventElement: Element | null) => {
      const pointedElement = getElementAtPointer();

      if (eventElement?.closest("[data-cursor]")) {
        return eventElement;
      }

      if (pointedElement?.closest("[data-cursor]")) {
        return pointedElement;
      }

      return eventElement || pointedElement;
    };

    const animateCursor = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      cursorElement.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      animationFrame = window.requestAnimationFrame(animateCursor);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setCursorTarget(resolveCursorSource(event.target instanceof Element ? event.target : null));
    };

    const handlePointerOver = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setCursorTarget(resolveCursorSource(event.target instanceof Element ? event.target : null));
    };

    const handleScroll = () => {
      setCursorTarget(getElementAtPointer());
    };

    const handlePointerDown = () => {
      cursorElement.dataset.pressed = "true";
    };

    const handlePointerUp = () => {
      cursorElement.dataset.pressed = "false";
    };

    const handlePointerLeave = () => {
      cursorElement.dataset.visible = "false";
      cursorElement.dataset.pressed = "false";
    };

    animationFrame = window.requestAnimationFrame(animateCursor);
    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={cursorRef} className="team-cursor" aria-hidden="true">
      <span className="team-cursor-ring" />
      <span className="team-cursor-dot" />
      <span ref={labelRef} className="team-cursor-label" />
    </div>
  );
}