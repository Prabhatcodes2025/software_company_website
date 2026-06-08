import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "./Container";
import { deliveryHighlights, partners, stats, trustBadges } from "@/lib/site";
import { Reveal } from "./Motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(27,168,255,0.28),transparent_28rem),radial-gradient(circle_at_82%_20%,rgba(56,213,255,0.2),transparent_30rem),linear-gradient(135deg,#030815_0%,#071832_48%,#0a3d86_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:80px_80px] opacity-25" />
      <div className="hero-glow absolute -left-24 top-24 size-80 rounded-full bg-cyanfire/20 blur-3xl" />
      <div className="hero-glow absolute -right-16 bottom-20 size-96 rounded-full bg-mint/12 blur-3xl" />
      <Container className="relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <Reveal>
          <div className="inline-flex max-w-full items-center gap-2 rounded-xl border border-cyanfire/30 bg-cyanfire/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyanfire sm:text-sm">
            <Sparkles size={16} />
            Global software development partner
          </div>
          <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.98] text-white sm:text-7xl lg:text-8xl">
            Build digital products that feel expensive, scale fast, and convert.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Nexora designs and engineers premium web, mobile, AI, blockchain, and SaaS platforms for ambitious teams that need senior ownership from strategy to launch.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyanfire to-mint px-7 py-4 text-base font-black text-ink shadow-[0_0_45px_rgba(56,213,255,0.28)] transition hover:scale-[1.02]"
            >
              Get a Project Estimate <ArrowRight size={19} />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.045] px-7 py-4 text-base font-black text-white transition hover:border-cyanfire/50 hover:bg-white/10"
            >
              <Play size={18} /> View Case Studies
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            {trustBadges.map((item) => (
              <span key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2">
                <ShieldCheck size={17} className="text-mint" /> {item}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.12} className="relative min-h-[500px] lg:min-h-[680px]">
          <div className="hero-orbit absolute left-1/2 top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanfire/20 sm:size-[560px]" />
          <div className="absolute left-[15%] top-10 size-4 rounded-full bg-mint shadow-[0_0_32px_rgba(67,243,182,0.8)]" />
          <div className="absolute right-[12%] top-24 size-3 rounded-full bg-cyanfire shadow-[0_0_32px_rgba(56,213,255,0.8)]" />
          <div className="float-slow glass absolute inset-x-0 top-12 overflow-hidden rounded-2xl ring-1 ring-cyanfire/20">
            <Image
              src="/images/hero-command-center.png"
              alt="Enterprise software command center showing dashboards, AI analytics, mobile interfaces, and blockchain network visuals"
              width={1400}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-4">
              {deliveryHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-white/12 bg-ink/65 p-3 backdrop-blur-xl">
                    <Icon size={18} className="text-cyanfire" />
                    <p className="mt-2 text-xs font-bold text-white">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="glass absolute bottom-8 left-0 w-64 rounded-2xl p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-300"><CheckCircle2 size={16} className="text-mint" /> Delivery velocity</p>
            <p className="mt-2 text-4xl font-black text-white">4.9/5</p>
            <div className="pulse-line mt-4 h-2 origin-left rounded-full bg-gradient-to-r from-mint to-cyanfire" />
          </div>
          <div className="glass absolute bottom-24 right-0 hidden w-60 rounded-2xl p-5 sm:block">
            <p className="text-sm text-slate-300">Cloud uptime target</p>
            <p className="mt-2 text-3xl font-black text-white">99.95%</p>
          </div>
        </Reveal>
      </Container>
      <Container className="relative -mt-6 pb-12">
        <div className="glass grid gap-6 rounded-2xl p-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="p-3">
              <p className="text-4xl font-black text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-bold text-slate-400">
          {partners.map((partner) => <span key={partner}>{partner}</span>)}
        </div>
      </Container>
    </section>
  );
}
