"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site";
import { HoverLift } from "./Motion";
import { useLanguage } from "./LanguageProvider";
export function ServiceGrid() {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;
        const copy = t.services[index] ?? service;
        return (
          <HoverLift key={copy.title} delay={index * 0.04} className="h-full max-w-full">
            <article className="premium-card group relative isolate flex h-full min-h-[330px] max-w-full flex-col justify-between overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyanfire/45 hover:shadow-[0_28px_88px_rgba(0,0,0,0.36)] sm:p-6">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyanfire/70 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-cyanfire/10 blur-2xl transition group-hover:bg-cyanfire/16" />
              <div className="absolute right-4 top-4 grid size-20 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950/35 text-cyanfire/18 transition group-hover:scale-[1.04] group-hover:text-cyanfire/45 sm:right-6 sm:top-6 sm:size-24">
                <Icon size={54} strokeWidth={1.15} />
              </div>
              <div>
                <div className="relative grid size-12 place-items-center overflow-hidden rounded-xl border border-cyanfire/25 bg-cyanfire/12 text-cyanfire shadow-[0_0_18px_rgba(56,213,255,0.12)]">
                  <Icon size={25} />
                </div>
                <p className="relative mt-7 break-words text-xs font-black uppercase tracking-[0.2em] text-mint">{copy.model}</p>
                <h3 className="relative mt-3 max-w-[14rem] break-words text-2xl font-black leading-tight text-white sm:max-w-sm">{copy.title}</h3>
                <p className="relative mt-2 break-words text-sm font-bold text-cyanfire">{copy.outcome}</p>
                <p className="relative mt-4 max-w-full break-words leading-7 text-slate-300">{copy.summary}</p>
                <ul className="relative mt-6 grid gap-2.5 text-sm text-slate-400">
                  {copy.points.map((point) => (
                    <li key={point} className="flex gap-2 break-words">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mint shadow-[0_0_14px_rgba(67,243,182,0.75)]" />
                      <span className="min-w-0">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="relative mt-7 inline-flex max-w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm font-black text-cyanfire transition hover:border-cyanfire/40 hover:bg-slate-950/70">
                <span className="min-w-0 break-words">{copy.cta}</span> <ArrowRight size={16} className="shrink-0 transition group-hover:translate-x-0.5" />
              </Link>
            </article>
          </HoverLift>
        );
      })}
    </div>
  );
}
