"use client";

import { awards, technologyPartners } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Motion";
import { useLanguage } from "./LanguageProvider";

export function AwardsPartners() {
  const { t } = useLanguage();
  return (
    <section className="border-y border-white/10 bg-[#061426]/90 py-20 sm:py-24">
      <Container>
        <div className="grid min-w-0 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader
            eyebrow={t.sections.awards.eyebrow}
            title={t.sections.awards.title}
            text={t.sections.awards.text}
          />
          <Reveal className="grid min-w-0 grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
            <div className="premium-card flex h-full max-w-full flex-col overflow-hidden rounded-2xl p-5 sm:p-6">
              <p className="break-words text-sm font-black uppercase tracking-[0.22em] text-cyanfire">Awards</p>
              <div className="mt-5 grid gap-3">
                {awards.map((award) => (
                  <span key={award} className="max-w-full break-words rounded-xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm font-bold text-slate-200">
                    {award}
                  </span>
                ))}
              </div>
            </div>
            <div className="premium-card flex h-full max-w-full flex-col overflow-hidden rounded-2xl p-5 sm:p-6">
              <p className="break-words text-sm font-black uppercase tracking-[0.22em] text-cyanfire">Technology partners</p>
              <div className="mt-5 grid gap-3">
                {technologyPartners.map((partner) => (
                  <span key={partner} className="max-w-full break-words rounded-xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm font-bold text-slate-200">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
