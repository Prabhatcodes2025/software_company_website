import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Enterprise software case studies covering AI automation, ecommerce modernization, and SaaS workflow platforms."
};

export default function CaseStudiesPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Case studies"
          title="Selected enterprise platforms with ROI metrics."
          text="A look at how architecture, product design, and disciplined delivery translate into measurable business performance."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6">
          {caseStudies.map((study) => (
            <article key={study.title} className="premium-card max-w-full overflow-hidden rounded-3xl p-5 sm:p-7">
              <div className="grid min-w-0 gap-7 lg:grid-cols-[0.7fr_1.3fr]">
                <div className="min-w-0">
                  <p className="break-words text-sm font-black uppercase tracking-[0.2em] text-cyanfire">{study.industry}</p>
                  <h2 className="mt-4 break-words text-3xl font-black text-white">{study.title}</h2>
                  <p className="mt-6 break-words text-4xl font-black text-mint">{study.results}</p>
                  <p className="mt-2 break-words font-bold text-slate-300">{study.metric}</p>
                </div>
                <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">Problem</p>
                    <p className="mt-3 break-words leading-7 text-slate-300">{study.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">Solution</p>
                    <p className="mt-3 break-words leading-7 text-slate-300">{study.solution}</p>
                  </div>
                </div>
              </div>
              <div className="mt-7 grid grid-cols-1 items-stretch gap-3 sm:grid-cols-3">
                {study.roi.map((item) => (
                  <span key={item} className="h-full max-w-full break-words rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-white">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
