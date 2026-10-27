import type { Metadata } from "next";
import { EditorialHomepage } from "@/components/EditorialHomepage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website, Software, Mobile App & AI Development | LetsFygure",
  description: "LetsFygure designs and builds websites, custom software, mobile apps and practical AI automation. Explore services, real client work and our delivery approach.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "WebSite", name: company.name, url: company.url };
  return (
    <>
      <EditorialHomepage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
