import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { stats, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Clickmyze Technologies Pvt Ltd, a premium software development company for high-growth digital products."
};

export default function AboutPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="About"
            title="A product engineering partner with senior ownership."
            text="Clickmyze blends strategy, design, software engineering, cloud operations, and emerging technology expertise into one accountable delivery team."
          />
          <div className="glass max-w-full overflow-hidden rounded-2xl p-5 sm:p-7">
            <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="flex h-full flex-col rounded-xl bg-white/[0.05] p-5">
                  <p className="break-words text-3xl font-black text-white">{stat.value}</p>
                  <p className="mt-2 break-words text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <article key={value} className="flex h-full max-w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <h2 className="break-words text-xl font-bold text-white">{value}</h2>
              <p className="mt-3 flex-1 break-words leading-7 text-slate-400">
                We keep decisions grounded in user needs, business value, and a technical foundation that remains healthy after the first launch.
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
