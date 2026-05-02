import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Layers3, Linkedin, Radar, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TeamCursor from "@/components/TeamCursor";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Team | Delta Tech Partners",
  description: "Meet the Delta Tech Partners team bringing product strategy, platform engineering, and frontend architecture to owner-led technology decisions."
};

const operatingModel = [
  {
    icon: Radar,
    title: "Diagnose the real constraint",
    text: "We separate symptoms from root causes across product, operations, vendors, architecture, and delivery rhythm."
  },
  {
    icon: Layers3,
    title: "Design the right system",
    text: "We turn ambition into a roadmap, technical architecture, user experience, and implementation path that teams can execute."
  },
  {
    icon: ShieldCheck,
    title: "Represent the owner",
    text: "We bring independent technical judgment into build decisions, AI initiatives, modernization work, and vendor conversations."
  }
];

const decisionStack = ["Discovery", "Architecture", "Experience", "Delivery", "Governance"];

const getTeamMemberAnchor = (name: string) => name.toLowerCase().replaceAll(" ", "-").replaceAll("'", "").replaceAll("è", "e");

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <div className="team-page-shell">
        <TeamCursor />
        <main className="theme-section overflow-hidden">
        <section className="relative px-6 py-24 md:py-32 border-b theme-border">
          <div className="team-grid-surface" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-14 items-center">
            <div className="team-reveal">
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">About Us / Team</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none max-w-5xl text-balance">
                Technical judgment for owners who need software to perform in the real world.
              </h1>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start max-w-4xl">
                <p className="theme-muted leading-relaxed text-lg">
                  Delta Tech Partners combines product strategy, platform engineering, and user experience craft into one owner-aligned team. We help clients make better technical decisions, build stronger systems, and turn AI ambition into workflows that can survive contact with operations.
                </p>
                <div className="team-command-pill">
                  <Sparkles size={16} /> Human judgment, AI-era systems
                </div>
              </div>
            </div>

            <div className="team-portrait-deck" aria-label="Delta Tech Partners founding team profile images">
              {teamMembers.map((member, index) => (
                <Link href={`#${getTeamMemberAnchor(member.name)}`} key={member.name} className={`team-portrait-card team-portrait-card-${index + 1}`} data-cursor="portrait" data-cursor-label="View bio">
                  <span className="team-portrait-media">
                    <Image
                      src={member.profileImage}
                      alt={`${member.name} profile image`}
                      width={320}
                      height={400}
                      loading="eager"
                      sizes="(min-width: 1024px) 220px, 44vw"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="team-portrait-name">{member.name}</span>
                </Link>
              ))}
              <div className="team-deck-console">
                <Workflow size={18} /> Strategy to systems to interface
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-18 theme-section-panel border-b theme-border">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-stretch">
            <div className="team-system-panel rounded-lg p-6" data-cursor="system" data-cursor-label="Map stack">
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-5">Decision Stack</p>
              <div className="space-y-3">
                {decisionStack.map((item, index) => (
                  <div key={item} className="team-stack-row">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="team-operating-grid">
              {operatingModel.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className={`bento-card team-operating-card team-delay-${index} rounded-lg p-6`} data-cursor="scan" data-cursor-label="Inspect">
                  <div className="team-icon-box">
                    <Icon size={22} />
                  </div>
                  <h2 className="text-lg font-bold uppercase tracking-tight mb-3">{item.title}</h2>
                  <p className="theme-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 theme-section-alt">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16 team-reveal team-delay-1">
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">Founding Team</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-5">Three disciplines, staged like a delivery system.</h2>
              <p className="theme-muted leading-relaxed">
                Strategy opens the aperture. Experience makes the workflow usable. Infrastructure closes the loop with production-grade systems.
              </p>
            </div>

            <div className="team-member-stage">
              {teamMembers.map((member, index) => (
                <div key={member.name} className="team-member-anchor-group">
                  <span id={getTeamMemberAnchor(member.name)} className="team-anchor-offset" aria-hidden="true" />
                  <article className={`bento-card team-member-card team-member-card-${index + 1} rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-[360px_1fr]`} data-cursor="member" data-cursor-label={member.role}>
                    <div className="team-member-image relative min-h-92 lg:min-h-full theme-section-panel border-b lg:border-b-0 lg:border-r theme-border">
                      <Image
                        src={member.profileImage}
                        alt={`${member.name} profile image`}
                        fill
                        sizes="(min-width: 1024px) 360px, 100vw"
                        className="object-cover team-profile-image"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="team-image-scan" aria-hidden="true" />
                      <div className="absolute top-5 left-5 team-member-index">{String(index + 1).padStart(2, "0")}</div>
                      <Link
                        href={member.profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute left-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur transition hover:bg-black"
                        data-cursor="native"
                      >
                        <Linkedin size={14} /> LinkedIn
                      </Link>
                    </div>

                    <div className="p-7 md:p-10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-7">
                        <div>
                          <h3 className="text-3xl font-black uppercase tracking-tight">{member.name}</h3>
                          <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mt-2">{member.role}</p>
                        </div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest theme-soft">
                          <BadgeCheck size={16} className="text-blue-500" /> Owner aligned
                        </div>
                      </div>

                      <p className="text-2xl md:text-3xl font-bold tracking-tight theme-heading max-w-4xl mb-7 text-balance">{member.headline}</p>

                      <div className="grid grid-cols-1 xl:grid-cols-[1fr_0.9fr] gap-8">
                        <div className="space-y-4 theme-muted leading-relaxed">
                          {member.bio.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest theme-soft mb-3">Where they go deep</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.strengths.map((strength) => (
                                <span key={strength} className="theme-chip border rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-wider team-skill-chip">
                                  {strength}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest theme-soft mb-3">Questions they clarify</h4>
                            <ul className="space-y-3">
                              {member.clientQuestions.map((question) => (
                                <li key={question} className="flex gap-3 theme-muted text-sm leading-relaxed">
                                  <ArrowRight size={16} className="text-blue-500 mt-0.5 shrink-0" />
                                  <span>{question}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="team-closeout-card rounded-lg mt-14 p-7 md:p-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">How the team works</p>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">No handoff theater. One room, one plan, one accountable technical read.</h3>
                <p className="theme-muted leading-relaxed max-w-3xl">
                  The page ends with infrastructure because that is where promises become durable. Product direction and interface quality matter most when the underlying system can support the operating model.
                </p>
              </div>
              <Link href="/#contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all" data-cursor="native">
                Start the conversation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        </main>
        <Contact />
        <Footer />
      </div>
    </>
  );
}