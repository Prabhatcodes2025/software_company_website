import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HomepageSections } from "@/components/HomepageSections";
import { TrustMarquee } from "@/components/TrustMarquee";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "LetsFygure | Technology, Figured Out",
  description: "LetsFygure designs and develops high-performance websites, mobile apps, custom software and AI-powered solutions for growing businesses.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "WebSite", name: company.name, url: company.url };
  return (
    <>
      <Hero />
      <TrustMarquee />
      <HomepageSections />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
