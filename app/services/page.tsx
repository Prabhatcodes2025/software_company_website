import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = { title: "Digital Product & Technology Services", description: "Explore LetsFygure services for web development, mobile apps, custom software, AI automation, UI/UX, eCommerce, SEO and digital growth.", alternates: { canonical: "/services" } };

const groups = [
  { name: "Product engineering", description: "Customer-facing and operational software built as maintainable systems.", categories: ["Engineering", "Enterprise"] },
  { name: "AI & automation", description: "Accountable assistance and workflow orchestration connected to real business tasks.", categories: ["AI & Automation"] },
  { name: "Experience & growth", description: "Product clarity, discoverability and demand connected to the experience itself.", categories: ["Experience", "Growth"] },
];

export default function ServicesPage() {
  return <><PageHero eyebrow="Capabilities" title="Different disciplines. One accountable product system." text="Strategy, design, engineering, automation and growth support for businesses building something new—or making an existing product work harder." /><section className="section section-light"><div className="shell service-index">{groups.map((group, groupIndex) => <section key={group.name} className="service-index-group"><header><span>0{groupIndex + 1}</span><div><p className="eyebrow dark">{group.name}</p><h2>{group.description}</h2></div></header><div>{services.filter(service => group.categories.includes(service.category)).map(service => { const Icon = service.icon; return <Link href={`/services/${service.slug}`} key={service.slug}><Icon /><span><strong>{service.title}</strong><small>{service.short}</small></span><ArrowUpRight /></Link>; })}</div></section>)}</div></section></>;
}
