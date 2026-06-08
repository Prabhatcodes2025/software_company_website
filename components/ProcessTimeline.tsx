"use client";

import { processTimeline } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Motion";
import { useLanguage } from "./LanguageProvider";

export function ProcessTimeline() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
      <div className="absolute left-1/2 top-0 h-80 w-[72rem] -translate-x-1/2 rounded-full bg-cyanfire/10 blur-3xl" />
      <Container>
        <SectionHeader
          eyebrow={t.sections.process.eyebrow}
          title={t.sections.process.title}
          text={t.sections.process.text}
          align="center"
        />
        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyanfire via-white/20 to-mint md:block lg:left-1/2" />
          <div className="grid gap-7">
            {processTimeline.map((step, index) => {
              const Icon = step.icon;
              const copy = t.processTimeline[index] ?? step;
              const isLeft = index % 2 === 0;
              return (
                <Reveal key={copy.title} delay={index * 0.04} className={isLeft ? "lg:pr-[54%]" : "lg:pl-[54%]"}>
                  <article className="premium-card relative rounded-2xl p-6">
                    <span
                      className={[
                        "absolute top-8 hidden size-4 rounded-full border-4 border-ink bg-cyanfire shadow-[0_0_28px_rgba(56,213,255,0.95)] md:block",
                        isLeft ? "left-[18px] lg:left-auto lg:right-[-10.1%]" : "left-[18px] lg:left-[-10.1%]"
                      ].join(" ")}
                    />
                    <div className="flex items-start gap-4">
                      <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-cyanfire/12 text-cyanfire">
                        <Icon size={23} />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">0{index + 1}</p>
                        <h3 className="mt-2 text-2xl font-black text-white">{copy.title}</h3>
                        <p className="mt-3 leading-7 text-slate-300">{copy.text}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
