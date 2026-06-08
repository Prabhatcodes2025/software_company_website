"use client";

import { AwardsPartners } from "@/components/AwardsPartners";
import { BlogPreview } from "@/components/BlogPreview";
import { CaseStudies } from "@/components/CaseStudies";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { GlobalPresence } from "@/components/GlobalPresence";
import { Hero } from "@/components/Hero";
import { IndustriesSection } from "@/components/IndustriesSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGrid } from "@/components/ServiceGrid";
import { TeamSection } from "@/components/TeamSection";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { TrustSection } from "@/components/TrustSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <Hero />
      <TrustSection />
      <GlobalPresence />
      <section className="py-20 sm:py-24" id="services">
        <Container>
          <SectionHeader
            eyebrow={t.sections.services.eyebrow}
            title={t.sections.services.title}
            text={t.sections.services.text}
          />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </Container>
      </section>
      <IndustriesSection />
      <CaseStudies />
      <ProcessTimeline />
      <TechStack />
      <WhyChooseUs />
      <TeamSection />
      <Testimonials />
      <AwardsPartners />
      <BlogPreview />
      <FAQ />
      <CTA />
    </>
  );
}
