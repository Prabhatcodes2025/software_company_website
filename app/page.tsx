import { CTA } from "@/components/CTA";
import { CaseStudies } from "@/components/CaseStudies";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HoverLift } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGrid } from "@/components/ServiceGrid";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { industries, process } from "@/lib/site";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-24" id="services">
        <Container>
          <SectionHeader
            eyebrow="What we build"
            title="End-to-end software services for companies that need product quality."
            text="Strategy, design, engineering, cloud, and optimization work together as one delivery system."
          />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </Container>
      </section>
      <TechStack />
      <WhyChooseUs />
      <section className="border-y border-white/10 bg-white/[0.03] py-24">
        <Container>
          <SectionHeader
            eyebrow="Delivery model"
            title="A proven operating rhythm from idea to scale."
            text="Every engagement is structured around measurable outcomes, crisp communication, and technology choices that hold up after launch."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <HoverLift key={step.title} delay={index * 0.05}>
                  <article className="h-full rounded-2xl border border-white/10 bg-ink/60 p-6">
                    <div className="flex items-center justify-between">
                      <div className="grid size-12 place-items-center rounded-xl bg-mint/15 text-mint"><Icon size={23} /></div>
                      <span className="text-sm font-black text-slate-500">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 text-xl font-black text-white">{step.title}</h3>
                    <p className="mt-3 leading-7 text-slate-400">{step.text}</p>
                  </article>
                </HoverLift>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <SectionHeader
            eyebrow="Industries"
            title="Domain fluency for complex software."
            text="We bring product engineering patterns from regulated, data-heavy, and high-growth markets."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <HoverLift key={industry.title} delay={index * 0.04}>
                  <Link href="/industries" className="premium-card group block h-full rounded-2xl p-6">
                    <Icon className="text-cyanfire" size={29} />
                    <h3 className="mt-5 text-xl font-black text-white">{industry.title}</h3>
                    <p className="mt-3 leading-7 text-slate-400">{industry.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-mint transition group-hover:gap-3">Explore <ArrowRight size={16} /></span>
                  </Link>
                </HoverLift>
              );
            })}
          </div>
        </Container>
      </section>
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
