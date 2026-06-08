import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { HoverLift } from "./Motion";

export function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-[#04101f] py-24">
      <div className="absolute left-1/2 top-0 h-72 w-[70rem] -translate-x-1/2 rounded-full bg-cyanfire/10 blur-3xl" />
      <Container className="relative">
        <SectionHeader
          eyebrow="Case studies"
          title="Proof that premium engineering creates measurable business lift."
          text="Selected outcomes across AI automation, commerce modernization, and SaaS operations."
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <HoverLift key={study.title} delay={index * 0.06}>
              <article className="premium-card group flex h-full flex-col overflow-hidden rounded-2xl p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="rounded-lg border border-cyanfire/25 bg-cyanfire/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyanfire">
                    {study.industry}
                  </p>
                  <span className="text-sm font-bold text-mint">{study.metric}</span>
                </div>
                <h3 className="mt-7 text-2xl font-black leading-tight text-white">{study.title}</h3>
                <p className="mt-5 text-4xl font-black tracking-normal text-transparent bg-gradient-to-r from-mint to-cyanfire bg-clip-text">
                  {study.result}
                </p>
                <p className="mt-5 flex-1 leading-7 text-slate-300">{study.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="rounded-lg bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/case-studies"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-black text-cyanfire transition group-hover:gap-3"
                >
                  View Case Study <ArrowRight size={16} />
                </Link>
              </article>
            </HoverLift>
          ))}
        </div>
      </Container>
    </section>
  );
}
