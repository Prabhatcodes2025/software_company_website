import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HomepageSections } from "@/components/HomepageSections";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "LetsFygure Technology | Web, Software, Mobile & AI",
  description: "LetsFygure designs and develops high-performance websites, mobile apps, custom software and AI-powered solutions for growing businesses.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "WebSite", name: company.name, url: company.url };
  return (
    <>
      <Hero />
      <HomepageSections />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
