import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { industries } from "@/lib/site";

export const metadata: Metadata = { title: "Industries", description: "Digital product, software and AI solutions for real estate, healthcare, education, travel, eCommerce, professional services and SaaS.", alternates: { canonical: "/industries" } };
export default function IndustriesPage() { return <><PageHero eyebrow="Industries" title="Digital products shaped around how your market actually works." text="Every industry brings its own customers, workflows, risks and operating realities. We learn that context before defining the technology." /><section className="section section-light"><div className="shell industry-page-grid">{industries.map((item,index) => {const Icon=item.icon; return <article key={item.title}><span>0{index+1}</span><Icon /><h2>{item.title}</h2><p>{item.text}</p><ul><li>Customer-facing experiences</li><li>Operational workflows</li><li>Data and system integrations</li></ul></article>})}</div></section><section className="section section-dark compact-cta"><div className="shell"><div><p className="eyebrow">Your context matters</p><h2>Tell us what is different about your business.</h2></div><Link className="button" href="/contact">Discuss Your Idea <ArrowRight size={18} /></Link></div></section></>; }
