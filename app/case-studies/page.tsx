import type { Metadata } from "next";
import { withSocial } from "@/lib/social-metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProjectVisual } from "@/components/ProductVisuals";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = withSocial({ title: "Work & Case Studies", description: "Explore how LetsFygure approaches web, mobile, custom software, eCommerce and digital transformation projects.", alternates: { canonical: "/case-studies" } });
export default function CaseStudiesPage() { return <><PageHero eyebrow="Our Work" title="Digital products, shown through real project evidence." text="Six public client platforms presented around the business requirement, delivered scope and authentic interface—not unsupported vanity metrics." /><section className="section section-light"><div className="shell case-list">{caseStudies.map((study,index) => { const category = study.slug === "ongole-property" ? "Web Application" : "Custom Website"; return <article key={study.title}><ProjectVisual index={index} label={study.industry} /><div className="case-content"><div className="case-index">CASE / 0{index+1}</div><p className="eyebrow dark">{category} · {study.industry}</p><h2>{study.client}</h2><p className="case-project-title">{study.title}</p><div><h3>Challenge</h3><p>{study.challenge}</p></div><div><h3>Solution</h3><p>{study.solution}</p></div><div><h3>Business value</h3><p>{study.outcome}</p></div><ul>{(study.technology.length ? study.technology : study.services).map(item => <li key={item}>{item}</li>)}</ul><small>{study.source}</small><div className="case-actions"><Link className="lf-link-arrow" href={`/case-studies/${study.slug}`}>View Case Study <ArrowUpRight /></Link><a className="lf-link-arrow" href={study.url} target="_blank" rel="noreferrer">Visit live site <ArrowUpRight /></a></div></div></article>; })}</div></section></>; }
