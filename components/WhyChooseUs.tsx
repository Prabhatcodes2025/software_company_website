"use client";

import { whyChooseUs } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { HoverLift } from "./Motion";
import { useLanguage } from "./LanguageProvider";

export function WhyChooseUs() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-y-20 right-0 w-1/3 bg-gradient-to-l from-cyanfire/8 to-transparent" />
      <Container>
        <SectionHeader
          eyebrow={t.sections.why.eyebrow}
          title={t.sections.why.title}
          text={t.sections.why.text}
          align="center"
        />
        <div className="relative mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            const copy = t.whyChooseUs[index] ?? item;
            return (
              <HoverLift key={copy.title} delay={index * 0.04} className="h-full max-w-full">
                <article className="premium-card flex h-full max-w-full flex-col overflow-hidden rounded-2xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-12 place-items-center rounded-xl border border-cyanfire/25 bg-cyanfire/12 text-cyanfire shadow-[0_0_35px_rgba(56,213,255,0.16)]">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-white/25">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 break-words text-xl font-black text-white">{copy.title}</h3>
                  <p className="mt-3 flex-1 break-words leading-7 text-slate-300">{copy.text}</p>
                </article>
              </HoverLift>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
