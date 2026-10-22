import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProjectVisual } from "@/components/ProductVisuals";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = { title: "Work & Case Studies", description: "Explore how LetsFygure approaches web, mobile, custom software, eCommerce and digital transformation projects.", alternates: { canonical: "/case-studies" } };
export default function CaseStudiesPage() { return <><PageHero eyebrow="Work" title="The challenge, the thinking and the path forward." text="Six real client platforms, presented around the business problem and delivered scope—not unsupported vanity metrics." /><section className="section section-light"><div className="shell case-list">{caseStudies.map((study,index) => <article key={study.title}><ProjectVisual index={index} label={study.industry} /><div className="case-content"><div className="case-index">CASE / 0{index+1}</div><p className="eyebrow dark">{study.industry}</p><h2>{study.title}</h2><div><h3>Challenge</h3><p>{study.challenge}</p></div><div><h3>Solution</h3><p>{study.solution}</p></div><div><h3>Business value</h3><p>{study.outcome}</p></div><ul>{study.services.map(item => <li key={item}>{item}</li>)}</ul><small>{study.source}</small><div className="case-actions"><Link className="lf-link-arrow" href={`/case-studies/${study.slug}`}>Read case study <ArrowUpRight /></Link><a className="lf-link-arrow" href={study.url} target="_blank" rel="noreferrer">Visit live site <ArrowUpRight /></a></div></div></article>)}</div></section></>; }
