import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { company } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: "LetsFygure Technology | Web, Software, Mobile & AI", template: "%s | LetsFygure" },
  description: "LetsFygure designs and develops high-performance websites, mobile apps, custom software and practical AI automation for growing businesses.",
  alternates: { canonical: "/" },
  openGraph: { title: "LetsFygure Technology — Figured Out.", description: "Web, mobile, custom software and AI solutions built around business outcomes.", url: company.url, siteName: company.name, images: [{ url: "/images/letsfygure-logo.png", width: 1280, height: 1280, alt: "LetsFygure Technology" }], locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title: "LetsFygure Technology — Figured Out.", description: "Web, mobile, custom software and AI solutions built around business outcomes.", images: ["/images/letsfygure-logo.png"] },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", name: company.name, alternateName: company.shortName,
  url: company.url, logo: `${company.url}/images/letsfygure-logo.png`, telephone: company.phone,
  sameAs: [company.instagram, company.clutch], description: "Digital transformation and technology company for web, mobile, custom software and AI solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={manrope.variable}><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /><FloatingWidgets /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} /></body></html>;
}
