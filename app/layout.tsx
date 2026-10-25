import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { EditorialHeader } from "@/components/EditorialHeader";
import { EditorialFooter } from "@/components/EditorialFooter";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { company } from "@/lib/site";
import "./globals.css";
import "./editorial.css";
import "./details.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: "LetsFygure | Technology, Figured Out", template: "%s | LetsFygure" },
  description: "LetsFygure designs and develops high-performance websites, mobile apps, custom software and practical AI automation for growing businesses.",
  alternates: { canonical: "/" },
  openGraph: { title: "LetsFygure — Technology, Figured Out", description: "Web, mobile, custom software and AI solutions built around business outcomes.", url: company.url, siteName: company.name, images: [{ url: "/images/letsfygure-logo.png", width: 1280, height: 1280, alt: "LetsFygure" }], locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title: "LetsFygure — Technology, Figured Out", description: "Web, mobile, custom software and AI solutions built around business outcomes.", images: ["/images/letsfygure-logo.png"] },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", name: company.name, alternateName: company.shortName,
  url: company.url, logo: `${company.url}/images/letsfygure-logo.png`, telephone: company.phone, email: company.email,
  address: { "@type": "PostalAddress", streetAddress: "124, Ashoka Garden", addressLocality: "Bhopal", addressCountry: "IN" },
  sameAs: [company.linkedin, company.instagram, company.clutch], description: "Digital product engineering company for web, mobile, custom software and practical AI automation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={manrope.variable}><body><a className="skip-link" href="#main-content">Skip to content</a><EditorialHeader /><main id="main-content">{children}</main><EditorialFooter /><FloatingWidgets /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} /></body></html>;
}
