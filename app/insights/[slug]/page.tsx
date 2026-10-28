import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { insightArticles } from "@/lib/content";
import { company } from "@/lib/site";
import { socialMetadata } from "@/lib/social-metadata";

type Props = { params: Promise<{ slug: string }> };
const articleFraming: Record<string, { lead: string; principle: string }> = {
  "ai-automation-human-approval": {
    lead: "The first useful AI workflow is usually narrow. It handles a recognizable task, shows its evidence and gives a person a clear point to review or intervene.",
    principle: "Define the handoff to a person before automating the routine path.",
  },
  "custom-software-outcomes": {
    lead: "A custom application should make a real workflow easier to run. That starts with the roles, decisions and records involved, before a screen is designed.",
    principle: "Release one complete workflow before adding secondary features.",
  },
  "web-performance-details": {
    lead: "A polished page can still feel slow or unstable. Loading order, responsive images and the amount of JavaScript all shape the experience people actually get.",
    principle: "Measure the first useful view, interaction delay and visual stability on real devices.",
  },
};
export function generateStaticParams() { return insightArticles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const article = insightArticles.find(item => item.slug === slug); if (!article) return {}; const social = socialMetadata(article.title, article.summary, `/insights/${slug}`); return { title: article.title, description: article.summary, alternates: { canonical: `/insights/${slug}` }, ...social, openGraph: { ...social.openGraph, type: "article" } }; }

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = insightArticles.find(item => item.slug === slug);
  if (!article) notFound();
  const schema = { "@context": "https://schema.org", "@type": "TechArticle", headline: article.title, description: article.summary, author: { "@type": "Organization", name: company.name }, publisher: { "@type": "Organization", name: company.name }, mainEntityOfPage: `${company.url}/insights/${slug}` };
  return <><article className="insight-article"><header className="insight-article-hero section-dark"><div className="hero-grid" aria-hidden /><div className="shell"><Link href="/insights" className="article-back"><ArrowLeft />All insights</Link><p className="eyebrow"><span />{article.category}</p><h1>{article.title}</h1><p>{article.summary}</p><small><Clock3 />{article.readTime} read</small></div></header><div className="shell article-layout"><aside aria-label="Article sections"><p>In this article</p>{article.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}><span>0{index + 1}</span>{section.heading}</a>)}</aside><div className="article-body"><p className="article-lead">{articleFraming[slug].lead}</p>{article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><span>0{index + 1}</span><h2>{section.heading}</h2><p>{section.body}</p></section>)}<div className="article-principle"><strong>Working principle</strong><p>{articleFraming[slug].principle}</p></div></div></div></article><section className="final-cta"><div className="shell"><div><p className="eyebrow">Apply the thinking</p><h2>Bring the real operating problem.</h2></div><div><p>We’ll help turn it into a focused product or engineering plan.</p><Link href="/contact" className="button button-white">Discuss Your Project <ArrowRight /></Link></div></div></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
