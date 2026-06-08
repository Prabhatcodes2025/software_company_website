import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGrid } from "@/components/ServiceGrid";

export const metadata: Metadata = {
  title: "Services",
  description: "Web development, mobile app development, AI/ML, blockchain, SaaS, and UI/UX services."
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="Digital product teams for every stage of growth."
            text="Choose a focused service or combine strategy, design, engineering, and cloud delivery into one product partnership."
            align="center"
          />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
