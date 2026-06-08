import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Container } from "./Container";
import { partners, stats } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <Container className="relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-cyanfire/30 bg-cyanfire/10 px-3 py-2 text-sm font-semibold text-cyanfire">
            <span className="size-2 rounded-full bg-mint" />
            Product engineering for ambitious companies
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Build smarter software with a senior technology partner.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {`From MVPs to enterprise platforms, ${"Nexora"} designs, engineers, and scales high-performance web, mobile, AI, blockchain, and SaaS products.`}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyanfire px-6 py-4 font-bold text-ink transition hover:bg-mint">
              Discuss Your Project <ArrowRight size={18} />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-4 font-bold text-white transition hover:bg-white/10">
              <Play size={18} /> View Work
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {["SEO-ready architecture", "Fast Core Web Vitals", "Secure cloud delivery"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-mint" /> {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative min-h-[420px] lg:min-h-[620px]">
          <div className="hero-orbit absolute left-1/2 top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanfire/20 sm:size-[520px]" />
          <div className="float-slow glass absolute inset-x-0 top-8 overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-command-center.png"
              alt="Enterprise software command center showing dashboards, AI analytics, mobile interfaces, and blockchain network visuals"
              width={1400}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="glass absolute bottom-8 left-0 w-64 rounded-xl p-5">
            <p className="text-sm text-slate-300">Delivery velocity</p>
            <p className="mt-2 text-3xl font-black text-white">4.9/5</p>
            <div className="pulse-line mt-4 h-2 origin-left rounded-full bg-gradient-to-r from-mint to-cyanfire" />
          </div>
          <div className="glass absolute bottom-24 right-0 hidden w-56 rounded-xl p-5 sm:block">
            <p className="text-sm text-slate-300">Cloud uptime target</p>
            <p className="mt-2 text-3xl font-black text-white">99.95%</p>
          </div>
        </div>
      </Container>
      <Container className="relative -mt-6 pb-12">
        <div className="glass grid gap-6 rounded-2xl p-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="p-3">
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-400">
          {partners.map((partner) => <span key={partner}>{partner}</span>)}
        </div>
      </Container>
    </section>
  );
}
