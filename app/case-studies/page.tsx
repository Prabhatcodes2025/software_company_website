import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Software case studies covering AI automation, ecommerce modernization, and SaaS workflow platforms."
};

export default function CaseStudiesPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Case studies"
          title="Selected work with measurable outcomes."
          text="A look at how thoughtful architecture, strong product design, and disciplined execution translate into business performance."
          align="center"
        />
        <div className="mt-12 grid gap-6">
          {caseStudies.map((study) => (
            <article key={study.title} className="glass grid gap-6 rounded-2xl p-7 lg:grid-cols-[0.8fr_1.2fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyanfire">{study.industry}</p>
                <h2 className="mt-3 text-2xl font-black text-white">{study.title}</h2>
              </div>
              <p className="leading-7 text-slate-300">{study.text}</p>
              <p className="text-3xl font-black text-mint">{study.result}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
