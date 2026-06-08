"use client";

import { Quote, Star } from "lucide-react";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "./LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();
  const loop = [...t.testimonials, ...t.testimonials];

  return (
    <section className="overflow-hidden py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow={t.sections.testimonials.eyebrow}
          title={t.sections.testimonials.title}
          text={t.sections.testimonials.text}
          align="center"
        />
      </Container>
      <div className="testimonial-rail mt-12 overflow-hidden">
        <div className="testimonial-track flex gap-5 px-4 sm:px-6 lg:px-8">
          {loop.map((review, index) => (
            <article key={`${review.name}-${index}`} className="premium-card flex h-auto w-[calc(100vw-2rem)] max-w-full shrink-0 flex-col overflow-hidden rounded-2xl bg-slate-950/35 p-5 sm:w-[24rem] sm:p-6 lg:w-[27rem]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl border border-cyanfire/20 bg-cyanfire/10">
                    <Quote className="text-cyanfire" size={22} />
                  </span>
                  <span className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-slate-500">Client review</span>
                </div>
                <div className="flex gap-1 text-amberline">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="mt-6 flex-1 break-words text-base leading-8 text-slate-200">
                <span aria-hidden="true">&quot;</span>
                {review.quote}
                <span aria-hidden="true">&quot;</span>
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
                <div className="grid size-11 shrink-0 place-items-center rounded-full border border-white/10 bg-cyanfire/10 text-sm font-black text-cyanfire">
                  {review.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <div className="min-w-0">
                  <p className="break-words font-black text-white">{review.name}</p>
                  <p className="mt-1 break-words text-sm text-slate-400">{review.role}</p>
                </div>
              </div>
              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                Verified delivery engagement
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
