"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Motion";
import { useLanguage } from "./LanguageProvider";

export function CTA() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-cyanfire/12 to-transparent" />
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-cyanfire/20 bg-[radial-gradient(circle_at_20%_20%,rgba(56,213,255,0.24),transparent_22rem),radial-gradient(circle_at_90%_20%,rgba(67,243,182,0.12),transparent_20rem),linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.045))] p-7 shadow-[0_30px_120px_rgba(0,0,0,0.35)] md:p-12">
            <div className="absolute -right-20 -top-20 size-72 rounded-full bg-cyanfire/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyanfire">{t.cta.eyebrow}</p>
                <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-6xl">
                  {t.cta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  {t.cta.text}
                </p>
                <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                  {t.cta.points.map((item) => (
                    <span key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/42 px-3 py-2">
                      <CheckCircle2 size={17} className="text-mint" /> {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyanfire to-mint px-7 py-4 font-black text-ink shadow-[0_0_42px_rgba(56,213,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_0_58px_rgba(56,213,255,0.38)]">
                  {t.cta.primary} <CalendarDays size={18} />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:border-cyanfire/50 hover:bg-white/10">
                  {t.cta.secondary} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
