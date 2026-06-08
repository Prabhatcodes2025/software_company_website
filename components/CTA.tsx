import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Motion";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cyanfire/10 to-transparent" />
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-cyanfire/20 bg-[radial-gradient(circle_at_20%_20%,rgba(56,213,255,0.22),transparent_22rem),linear-gradient(135deg,rgba(255,255,255,0.13),rgba(255,255,255,0.045))] p-7 shadow-[0_30px_120px_rgba(0,0,0,0.35)] md:p-12">
            <div className="absolute -right-20 -top-20 size-72 rounded-full bg-cyanfire/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyanfire">Launch with confidence</p>
                <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-6xl">
                  Ready to build your next digital product?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Get a senior technical team, a clear delivery roadmap, and a polished product experience built for growth.
                </p>
                <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                  {["Discovery plan", "Technical estimate", "Launch roadmap"].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={17} className="text-mint" /> {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyanfire to-mint px-7 py-4 font-black text-ink shadow-[0_0_42px_rgba(56,213,255,0.25)] transition hover:scale-[1.02]">
                  Book a Consultation <CalendarDays size={18} />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-black text-white transition hover:border-cyanfire/50 hover:bg-white/10">
                  See Results <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
