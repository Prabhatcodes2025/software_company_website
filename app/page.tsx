import type { Metadata } from "next";
import { EditorialHomepage } from "@/components/EditorialHomepage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Website & Mobile App Development Company | LetsFygure",
  description: "LetsFygure engineers custom websites, scalable web applications and mobile apps for ambitious businesses in India and international markets.",
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
