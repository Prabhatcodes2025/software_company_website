import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Software Development Company`,
    template: `%s | ${company.name}`
  },
  description:
    "Premium IT software company for web development, mobile apps, AI/ML, blockchain, SaaS platforms, UI/UX design, and enterprise modernization.",
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "AI ML development",
    "blockchain development",
    "SaaS development",
    "UI UX design"
  ],
  openGraph: {
    title: `${company.name} | Software Development Company`,
    description: "Build fast, scalable, and secure digital products with a senior software engineering partner.",
    url: company.url,
    siteName: company.name,
    images: [{ url: "/images/hero-command-center.png", width: 1400, height: 900 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Software Development Company`,
    description: "Web, mobile, AI/ML, blockchain, SaaS, and UI/UX product engineering."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
