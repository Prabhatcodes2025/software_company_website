"use client";

import { clientLogos, proofBadges } from "@/lib/site";
import { Container } from "./Container";
import { HoverLift, Reveal } from "./Motion";
import { useLanguage } from "./LanguageProvider";

export function TrustSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#04101f]/90 py-16">
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-cyanfire/10 to-transparent" />
      <Container>
        <Reveal className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyanfire">{t.trust.eyebrow}</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">{t.trust.text}</p>
          </div>
          <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4 lg:w-auto">
            {clientLogos.map((logo) => (
              <span key={logo} className="max-w-full break-words rounded-xl border border-white/10 bg-slate-950/55 px-3 py-2 text-center text-xs font-black text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:text-sm">
                {logo}
              </span>
            ))}
          </div>
        </Reveal>
        <div className="relative mt-8 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proofBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <HoverLift key={badge.title} delay={index * 0.04} className="h-full max-w-full">
                <article className="flex h-full max-w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,0.88),rgba(2,8,23,0.72))] p-5 shadow-[0_24px_76px_rgba(0,0,0,0.26)] transition hover:border-cyanfire/35">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-cyanfire/20 bg-cyanfire/10">
                      <Icon className="text-cyanfire" size={22} />
                    </span>
                    <span className="break-words text-xl font-black text-white">{badge.value}</span>
                  </div>
                  <h3 className="mt-5 break-words font-black text-white">{badge.title}</h3>
                  <p className="mt-2 flex-1 break-words text-sm leading-6 text-slate-400">{badge.text}</p>
                </article>
              </HoverLift>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
