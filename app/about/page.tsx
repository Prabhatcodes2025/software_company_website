import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { stats, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Nexora Technologies, a premium software development company for high-growth digital products."
};

export default function AboutPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="About"
            title="A product engineering partner with senior ownership."
            text="Nexora blends strategy, design, software engineering, cloud operations, and emerging technology expertise into one accountable delivery team."
          />
          <div className="glass rounded-2xl p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/[0.05] p-5">
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {values.map((value) => (
            <article key={value} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-bold text-white">{value}</h2>
              <p className="mt-3 leading-7 text-slate-400">
                We keep decisions grounded in user needs, business value, and a technical foundation that remains healthy after the first launch.
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
