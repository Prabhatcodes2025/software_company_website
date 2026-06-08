import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description: "Software development expertise for fintech, healthcare, retail, education, enterprise, and cybersecurity."
};

export default function IndustriesPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Industries"
          title="Built for markets where reliability matters."
          text="Our teams bring reusable architecture patterns and domain sensitivity to product launches, platform rebuilds, and automation programs."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article key={industry.title} className="glass rounded-2xl p-7">
                <Icon className="text-cyanfire" size={30} />
                <h2 className="mt-6 text-2xl font-black text-white">{industry.title}</h2>
                <p className="mt-4 leading-7 text-slate-300">{industry.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
