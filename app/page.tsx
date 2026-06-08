import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGrid } from "@/components/ServiceGrid";
import { caseStudies, industries, process } from "@/lib/site";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-20" id="services">
        <Container>
          <SectionHeader
            eyebrow="What we build"
            title="End-to-end technology services for digital growth."
            text="Strategy, design, engineering, cloud, and optimization work together as one delivery system."
          />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </Container>
      </section>
      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <Container>
          <SectionHeader
            eyebrow="Delivery model"
            title="A senior team that moves from idea to scale."
            text="Every engagement is structured around measurable outcomes, crisp communication, and technology choices that hold up after launch."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="rounded-2xl border border-white/10 bg-ink/55 p-6">
                  <div className="flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-lg bg-mint/15 text-mint"><Icon size={23} /></div>
                    <span className="text-sm font-black text-slate-500">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{step.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Industries"
            title="Domain fluency for complex software."
            text="We bring product engineering patterns from regulated, data-heavy, and high-growth markets."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link key={industry.title} href="/industries" className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyanfire/50 hover:bg-white/[0.07]">
                  <Icon className="text-cyanfire" size={27} />
                  <h3 className="mt-5 text-xl font-bold text-white">{industry.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{industry.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-mint">Explore <ArrowRight size={16} /></span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="bg-[#04101f] py-20">
        <Container>
          <SectionHeader
            eyebrow="Case studies"
            title="Business results, not just beautiful interfaces."
            text="Selected engagements across AI automation, commerce modernization, and SaaS operations."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="glass rounded-2xl p-6">
                <p className="text-sm font-bold text-cyanfire">{study.industry}</p>
                <h3 className="mt-4 text-2xl font-black text-white">{study.title}</h3>
                <p className="mt-4 text-3xl font-black text-mint">{study.result}</p>
                <p className="mt-4 leading-7 text-slate-300">{study.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
