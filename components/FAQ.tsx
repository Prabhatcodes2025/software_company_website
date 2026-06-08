"use client";

import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Motion";
import { useLanguage } from "./LanguageProvider";

export function FAQ() {
  const { t } = useLanguage();
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow={t.sections.faq.eyebrow}
            title={t.sections.faq.title}
            text={t.sections.faq.text}
          />
          <Reveal className="grid min-w-0 gap-4">
            {t.faqs.map((faq) => (
              <details key={faq.question} className="group max-w-full overflow-hidden rounded-2xl border border-white/10 bg-ink/60 p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 break-words text-base font-bold text-white">
                  <span className="min-w-0">{faq.question}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-cyanfire/12 text-cyanfire transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl break-words leading-7 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
