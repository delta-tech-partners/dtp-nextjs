import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { IndustryPageConfig } from "@/data/industries";

type IndustryPageTemplateProps = {
  industry: IndustryPageConfig;
};

export default function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  const themeStyle = {
    "--industry-accent": industry.theme.accent,
    "--industry-accent-strong": industry.theme.accentStrong,
    "--industry-panel": industry.theme.panel,
    "--industry-border": industry.theme.border,
    "--industry-muted": industry.theme.muted,
  } as CSSProperties;

  const heroHeadlineStyle = {
    backgroundImage: `linear-gradient(120deg, var(--color-heading) 5%, ${industry.theme.accent} 95%)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  } as CSSProperties;

  const HeroIcon = industry.hero.icon;

  return (
    <div style={themeStyle}>
      <Navbar />

      <main>
        <section className="py-24 px-6 md:py-28 theme-section">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-14 items-center">
            <div>
              <div className="mono text-(--industry-accent) text-xs font-bold tracking-[0.3em] mb-4 uppercase">
                Industries / {industry.navLabel}
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8 animate-fade-in-up" style={heroHeadlineStyle}>
                {industry.hero.headline}
              </h1>
              <p className="text-lg md:text-xl theme-muted leading-relaxed mb-10 max-w-3xl">
                {industry.hero.body}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="px-8 py-4 bg-(--industry-accent) hover:bg-(--industry-accent-strong) text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all text-center">
                  {industry.hero.primaryCta}
                </Link>
                <a href="#industry-value" className="px-8 py-4 border theme-secondary-button font-bold uppercase tracking-widest text-xs rounded-full transition-all text-center">
                  {industry.hero.secondaryCta}
                </a>
              </div>
            </div>

            <div className="relative min-h-130 overflow-hidden rounded-3xl border border-(--industry-border) bg-[#111] shadow-2xl">
              <div
                className="absolute inset-0 bg-cover opacity-75"
                style={{
                  backgroundImage: `url('${industry.hero.image}')`,
                  backgroundPosition: industry.hero.imagePosition,
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/5" />
              <div className="image-overlay-copy absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <HeroIcon className="w-12 h-12 text-(--industry-accent) mb-6" />
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                  {industry.hero.insightTitle}
                </h2>
                <p className="overlay-muted leading-relaxed mb-6">
                  {industry.hero.insightBody}
                </p>
                <div className="overlay-chip grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs uppercase tracking-widest font-bold">
                  {industry.hero.badges.map((badge) => (
                    <div key={badge} className="border border-white/15 bg-black/45 p-4">
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="industry-value" className="py-24 px-6 theme-section-alt border-t theme-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-14">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-6">
                {industry.value.headline}
              </h2>
              <p className="theme-muted text-lg leading-relaxed">
                {industry.value.body}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.value.pillars.map(({ title, description, icon: Icon }) => (
                <div key={title} className="bento-card industry-card p-8 rounded-3xl relative overflow-hidden group">
                  <Icon className="w-12 h-12 text-(--industry-accent) mb-8" />
                  <h3 className="text-xl font-bold uppercase mb-4">{title}</h3>
                  <p className="theme-muted text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t theme-border theme-section">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-8">
                {industry.systems.headline}
              </h2>
              <p className="theme-muted text-lg leading-relaxed">
                {industry.systems.body}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {industry.systems.stackTags.map((tag) => (
                  <span key={tag} className="theme-chip border px-4 py-2 text-xs font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {industry.systems.bullets.map((item) => (
                <div key={item} className="flex items-start gap-4 bento-card industry-card rounded-2xl p-5">
                  <ArrowRight className="w-5 h-5 text-(--industry-accent) shrink-0 mt-1" />
                  <p className="theme-text font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 theme-section-panel border-t theme-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-14">
              <div className="mono text-(--industry-accent) text-xs font-bold tracking-[0.3em] mb-4 uppercase">
                {industry.useCases.eyebrow}
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-6">
                {industry.useCases.headline}
              </h2>
              <p className="theme-muted text-lg leading-relaxed">
                {industry.useCases.body}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.useCases.cards.map(({ title, description, icon: Icon }) => (
                <div key={title} className="bento-card industry-card p-8 rounded-3xl">
                  <Icon className="w-11 h-11 text-(--industry-accent) mb-8" />
                  <h3 className="text-xl font-bold uppercase mb-4">{title}</h3>
                  <p className="theme-muted text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 theme-section-alt border-t theme-border">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mono text-(--industry-accent) text-xs font-bold tracking-[0.3em] mb-4 uppercase">
              {industry.finalCta.eyebrow}
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
              {industry.finalCta.headline}
            </h2>
            <p className="theme-muted text-lg leading-relaxed mb-10">
              {industry.finalCta.body}
            </p>
            <Link href="/#contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-(--industry-accent) hover:bg-(--industry-accent-strong) text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all">
              {industry.finalCta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}
