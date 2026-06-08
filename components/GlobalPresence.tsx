"use client";

import Link from "next/link";
import { ArrowRight, Globe2, MapPin, ShieldCheck } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { useLanguage } from "./LanguageProvider";

export function GlobalPresence() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#030a17] py-20 sm:py-24">
      <div className="absolute left-1/2 top-0 h-96 w-[90rem] -translate-x-1/2 rounded-full bg-cyanfire/10 blur-3xl" />
      <Container className="relative">
        <Reveal className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyanfire">{t.global.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl break-words text-4xl font-black leading-tight text-white sm:text-5xl">
              {t.global.title}
            </h2>
            <p className="mt-5 max-w-2xl break-words text-lg leading-8 text-slate-300">{t.global.text}</p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.global.badges.map((badge) => (
                <span key={badge} className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm font-bold text-slate-200">
                  <ShieldCheck size={17} className="shrink-0 text-mint" />
                  <span className="min-w-0 break-words">{badge}</span>
                </span>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex max-w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyanfire to-mint px-6 py-4 font-black text-ink shadow-[0_0_46px_rgba(56,213,255,0.24)] transition hover:-translate-y-0.5">
              <span className="min-w-0 break-words">{t.global.cta}</span>
              <ArrowRight size={18} className="shrink-0" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(56,213,255,0.22),transparent_22rem),linear-gradient(145deg,rgba(15,23,42,0.88),rgba(2,8,23,0.72))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.34)] sm:p-7">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:54px_54px] opacity-18" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              {t.global.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-5">
                  <p className="text-4xl font-black text-white"><AnimatedCounter value={stat.value} /></p>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <div className="flex items-center gap-3">
                <Globe2 size={22} className="text-cyanfire" />
                <p className="font-black text-white">{t.global.regionsTitle}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.global.regions.map((region) => (
                  <span key={region} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-300">
                    <MapPin size={13} className="text-cyanfire" />
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
