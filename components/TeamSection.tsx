"use client";

import { team } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { HoverLift } from "./Motion";
import { useLanguage } from "./LanguageProvider";

export function TeamSection() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-mint/8 blur-3xl" />
      <Container>
        <SectionHeader
          eyebrow={t.sections.team.eyebrow}
          title={t.sections.team.title}
          text={t.sections.team.text}
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <HoverLift key={member.name} delay={index * 0.04} className="h-full max-w-full">
              <article className="premium-card group flex h-full max-w-full flex-col overflow-hidden rounded-2xl p-5 transition duration-300 hover:border-cyanfire/35 sm:p-6">
                <div className="relative grid aspect-[4/4.35] place-items-center overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(56,213,255,0.24),transparent_14rem),linear-gradient(135deg,#071427,#082f71)]">
                  <div className="absolute inset-x-10 top-10 h-24 rounded-full bg-cyanfire/18 blur-2xl" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/55 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.16em] text-cyanfire">
                    Senior oversight
                  </div>
                  <div className="relative grid size-28 place-items-center rounded-full border border-white/15 bg-white/[0.06] shadow-[0_30px_80px_rgba(0,0,0,0.28)] transition group-hover:scale-[1.03]">
                    <span className="text-4xl font-black text-white/90">{member.name.split(" ").map((part) => part[0]).join("")}</span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-ink/70 p-3 backdrop-blur-xl">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyanfire">Engagement owner</p>
                  </div>
                  <span className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-cyanfire to-transparent" />
                </div>
                <h3 className="mt-5 break-words text-xl font-black text-white">{member.name}</h3>
                <p className="mt-1 break-words text-sm font-bold text-cyanfire">{member.role}</p>
                <p className="mt-4 flex-1 break-words leading-7 text-slate-400">{member.focus}</p>
              </article>
            </HoverLift>
          ))}
        </div>
      </Container>
    </section>
  );
}
