import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { ProjectVisual } from "@/components/ProductVisuals";
import { caseStudies, company, process } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find(item => item.slug === slug);
  if (!study) return {};
  return {
    title: `${study.client} Case Study`,
    description: `${study.title}: ${study.solution}`,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: { title: `${study.title} | LetsFygure`, description: study.challenge, url: `${company.url}/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex(item => item.slug === slug);
  if (index < 0) notFound();
  const study = caseStudies[index];
  const schema = { "@context": "https://schema.org", "@type": "CreativeWork", name: study.title, about: study.industry, creator: { "@type": "Organization", name: company.name }, url: `${company.url}/case-studies/${study.slug}` };

  return <>
    <CaseStudyHero study={study} index={index} />
    <section className="section section-light"><div className="shell case-detail-hero"><ProjectVisual index={index} label={study.industry} /><div><p className="eyebrow dark">Engagement overview</p><h2>A focused platform built around a real operating need.</h2><p className="lead">{study.solution}</p><div className="case-scope">{study.services.map(item => <span key={item}><Check />{item}</span>)}</div><a href={study.url} target="_blank" rel="noreferrer" className="button">Visit live website <ArrowUpRight /></a></div></div></section>
    <section className="section section-paper"><div className="shell case-detail-grid"><article><span>01</span><h2>Business context</h2><p>{study.challenge}</p></article><article><span>02</span><h2>Solution</h2><p>{study.solution}</p></article><article><span>03</span><h2>Business value</h2><p>{study.outcome}</p></article></div><div className="shell evidence-note"><strong>Evidence note</strong><p>{study.source}. Detailed metrics and interface screenshots will only be added when client-approved evidence is available.</p></div></section>
    <section className="section section-dark"><div className="shell"><div className="section-heading light"><div><p className="eyebrow">Delivery discipline</p><h2>Designed as a system, delivered in clear stages.</h2></div></div><ol className="process-grid dark-process">{process.map(([n,t,x]) => <li key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></li>)}</ol></div></section>
    <section className="final-cta"><div className="shell"><div><p className="eyebrow">Build the next platform</p><h2>Bring us the business problem.</h2></div><div><p>We’ll help frame the product, architecture and clearest path to delivery.</p><Link href="/contact" className="button button-white">Discuss Your Project <ArrowUpRight /></Link><Link href="/case-studies" className="case-back"><ArrowLeft /> All work</Link></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
