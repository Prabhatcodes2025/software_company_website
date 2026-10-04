import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = { title: "Digital Product & Technology Services", description: "Explore LetsFygure services for web development, mobile apps, custom software, AI automation, UI/UX, eCommerce, SEO and digital growth.", alternates: { canonical: "/services" } };
export default function ServicesPage() { return <><PageHero eyebrow="Capabilities" title="Technology services connected by one clear product vision." text="Strategy, design, engineering, automation and growth support for businesses building something new—or making an existing product work harder." /><section className="section section-light"><div className="shell services-page-grid">{services.map((service,index) => { const Icon=service.icon; return <article key={service.slug}><span>0{index+1}</span><Icon /><p>{service.category}</p><h2>{service.title}</h2><strong>{service.short}</strong><p>{service.intro}</p><Link href={`/services/${service.slug}`}>Explore service <ArrowRight size={16} /></Link></article>; })}</div></section></>; }
