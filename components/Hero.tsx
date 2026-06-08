"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "./Container";
import { deliveryHighlights, partners } from "@/lib/site";
import { Reveal } from "./Motion";
import { HeroBackground } from "./HeroBackground";
import { AnimatedCounter } from "./AnimatedCounter";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[linear-gradient(135deg,#020817_0%,#061426_45%,#082f71_100%)]">
      <HeroBackground />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:84px_84px] opacity-20" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />

      <Container className="relative grid min-h-[calc(100vh-80px)] items-center gap-10 py-12 sm:py-14 lg:grid-cols-[0.94fr_1.06fr] lg:py-10">
        <Reveal>
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyanfire/35 bg-slate-950/55 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-cyanfire shadow-[0_0_32px_rgba(56,213,255,0.12)] backdrop-blur-xl sm:text-sm">
            <ShieldCheck size={16} />
            {t.hero.badge}
          </div>
          <h1 className="mt-7 max-w-5xl text-[3rem] font-black leading-[0.96] text-white sm:text-7xl lg:text-[5.5rem] xl:text-[6rem]">
            {t.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-xl">
            {t.hero.text}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyanfire to-mint px-7 py-4 text-base font-black text-ink shadow-[0_0_50px_rgba(56,213,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(56,213,255,0.42)]"
            >
              {t.hero.primaryCta} <ArrowRight size={19} />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.055] px-7 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:border-cyanfire/50 hover:bg-white/10"
            >
              <Play size={18} /> {t.hero.secondaryCta}
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            {t.hero.highlights.map((item) => (
              <span key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/42 px-3 py-2 backdrop-blur-xl">
                <CheckCircle2 size={17} className="text-mint" /> {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[680px]">
          <div className="absolute left-8 right-8 top-8 h-[75%] rounded-[2rem] bg-cyanfire/10 blur-3xl" />
          <div className="float-slow glass absolute inset-x-0 top-6 overflow-hidden rounded-[1.5rem] border-cyanfire/25 shadow-[0_40px_140px_rgba(0,0,0,0.42)] sm:top-10">
            <div className="flex items-center gap-2 border-b border-white/10 bg-ink/70 px-4 py-3 sm:px-5 sm:py-4">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-amberline" />
              <span className="size-3 rounded-full bg-mint" />
              <span className="ml-2 truncate text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-400 sm:ml-4 sm:text-xs">{t.hero.commandCenter}</span>
            </div>
            <Image
              src="/images/hero-command-center.png"
              alt="Enterprise software command center showing dashboards, AI analytics, mobile interfaces, and blockchain network visuals"
              width={1400}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2 sm:bottom-5 sm:left-5 sm:right-5 sm:grid-cols-4 sm:gap-3">
              {deliveryHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-white/12 bg-ink/72 p-2.5 backdrop-blur-xl sm:p-3">
                    <Icon size={18} className="text-cyanfire" />
                    <p className="mt-2 text-[0.68rem] font-bold text-white sm:text-xs">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="glass absolute bottom-4 left-0 w-56 rounded-2xl bg-slate-950/75 p-4 sm:bottom-8 sm:w-64 sm:p-5">
            <p className="text-sm font-semibold text-slate-300">{t.hero.deliveryHealth}</p>
            <p className="mt-2 text-3xl font-black text-white sm:text-4xl">98%</p>
            <div className="pulse-line mt-4 h-2 origin-left rounded-full bg-gradient-to-r from-mint to-cyanfire" />
          </div>
          <div className="glass absolute bottom-24 right-0 hidden w-64 rounded-2xl bg-slate-950/75 p-5 sm:block">
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-300"><Sparkles size={16} className="text-cyanfire" /> {t.hero.activePods}</p>
            <p className="mt-2 text-3xl font-black text-white">12 squads</p>
          </div>
        </Reveal>
      </Container>

      <Container className="relative -mt-4 pb-10">
        <div className="glass grid gap-3 rounded-2xl bg-slate-950/50 p-3 sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
          {t.global.stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/5 bg-white/[0.035] p-4">
              <p className="text-3xl font-black text-white sm:text-4xl"><AnimatedCounter value={stat.value} /></p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-black uppercase tracking-[0.16em] text-slate-500">
          {partners.map((partner) => <span key={partner}>{partner}</span>)}
        </div>
      </Container>
    </section>
  );
}
