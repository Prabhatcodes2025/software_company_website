"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Motion";
import { useLanguage } from "./LanguageProvider";

export function CaseStudies() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-[#030a17] py-20 sm:py-24">
      <div className="absolute left-1/2 top-0 h-80 w-[80rem] -translate-x-1/2 rounded-full bg-cyanfire/10 blur-3xl" />
      <Container className="relative">
        <SectionHeader
          eyebrow={t.sections.caseStudies.eyebrow}
          title={t.sections.caseStudies.title}
          text={t.sections.caseStudies.text}
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6">
          {caseStudies.map((study, index) => {
            const copy = t.caseStudies[index] ?? study;
            return (
            <Reveal key={copy.title} delay={index * 0.05}>
              <article className="premium-card grid max-w-full overflow-hidden rounded-3xl bg-slate-950/40 transition duration-300 hover:border-cyanfire/35 hover:shadow-[0_30px_96px_rgba(0,0,0,0.38)] lg:grid-cols-[0.82fr_1.18fr]">
                <div className="relative min-h-[280px] border-b border-white/10 bg-[radial-gradient(circle_at_22%_18%,rgba(56,213,255,0.3),transparent_18rem),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(6,20,38,0.72))] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyanfire/70 to-transparent" />
                  <p className="w-fit rounded-xl border border-cyanfire/25 bg-cyanfire/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyanfire">
                    {copy.industry}
                  </p>
                  <h3 className="mt-7 break-words text-3xl font-black leading-tight text-white lg:text-4xl">{copy.title}</h3>
                  <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/55 p-5">
                    <p className="break-words text-4xl font-black text-transparent bg-gradient-to-r from-mint to-cyanfire bg-clip-text sm:text-5xl">{copy.results}</p>
                    <p className="mt-3 break-words text-lg font-bold text-slate-300">{copy.metric}</p>
                  </div>
                  <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-slate-500">Confidential enterprise delivery snapshot</p>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">Business challenge</p>
                      <p className="mt-3 break-words leading-7 text-slate-300">{copy.problem}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">Solution delivered</p>
                      <p className="mt-3 break-words leading-7 text-slate-300">{copy.solution}</p>
                    </div>
                  </div>
                  <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {copy.roi.map((item) => (
                      <div key={item} className="flex h-full gap-3 rounded-2xl border border-white/10 bg-slate-950/45 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-mint" />
                        <p className="break-words text-sm font-black text-white">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 flex-wrap gap-2">
                      {copy.tags.map((tag) => (
                        <span key={tag} className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-300">{tag}</span>
                      ))}
                    </div>
                    <Link href="/case-studies" className="inline-flex max-w-full items-center justify-center gap-2 rounded-xl border border-cyanfire/25 bg-cyanfire/10 px-4 py-3 text-sm font-black text-cyanfire transition hover:border-cyanfire/45 hover:bg-cyanfire/15">
                      <span>View Case Study</span> <ArrowRight size={16} className="shrink-0" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
