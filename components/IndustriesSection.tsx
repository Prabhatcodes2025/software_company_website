"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { HoverLift } from "./Motion";
import { useLanguage } from "./LanguageProvider";

export function IndustriesSection() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanfire/35 to-transparent" />
      <Container>
        <SectionHeader
          eyebrow={t.sections.industries.eyebrow}
          title={t.sections.industries.title}
          text={t.sections.industries.text}
        />
        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const copy = t.industries[index] ?? industry;
            return (
              <HoverLift key={copy.title} delay={index * 0.035} className="h-full max-w-full">
                <Link href="/industries" className="premium-card group flex h-full min-h-[260px] max-w-full flex-col justify-between overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyanfire/40 hover:shadow-[0_24px_76px_rgba(0,0,0,0.34)] sm:p-6">
                  <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyanfire/65 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="grid size-12 place-items-center overflow-hidden rounded-xl border border-cyanfire/20 bg-cyanfire/12 text-cyanfire">
                      <Icon size={25} />
                      </div>
                      <span className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.16em] text-slate-400">
                        Domain pod
                      </span>
                    </div>
                    <h3 className="mt-6 break-words text-xl font-black text-white">{copy.title}</h3>
                    <p className="mt-3 break-words leading-7 text-slate-400">{copy.text}</p>
                  </div>
                  <span className="mt-6 inline-flex max-w-full items-center gap-2 border-t border-white/10 pt-5 text-sm font-black text-mint transition group-hover:gap-3">
                    <span>Explore</span> <ArrowRight size={16} className="shrink-0" />
                  </span>
                </Link>
              </HoverLift>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
