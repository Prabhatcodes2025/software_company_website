import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { insightArticles } from "@/lib/content";
import { company } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return insightArticles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const article = insightArticles.find(item => item.slug === slug); if (!article) return {}; return { title: article.title, description: article.summary, alternates: { canonical: `/insights/${slug}` }, openGraph: { title: `${article.title} | LetsFygure`, description: article.summary, url: `${company.url}/insights/${slug}`, type: "article" } }; }

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = insightArticles.find(item => item.slug === slug);
  if (!article) notFound();
  const schema = { "@context": "https://schema.org", "@type": "TechArticle", headline: article.title, description: article.summary, author: { "@type": "Organization", name: company.name }, publisher: { "@type": "Organization", name: company.name }, mainEntityOfPage: `${company.url}/insights/${slug}` };
  return <><article className="insight-article"><header className="insight-article-hero section-dark"><div className="hero-grid" aria-hidden /><div className="shell"><Link href="/insights" className="article-back"><ArrowLeft />All insights</Link><p className="eyebrow"><span />{article.category}</p><h1>{article.title}</h1><p>{article.summary}</p><small><Clock3 />{article.readTime} read</small></div></header><div className="shell article-layout"><aside><p>In this article</p>{article.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}><span>0{index + 1}</span>{section.heading}</a>)}</aside><div className="article-body"><p className="article-lead">The most useful technical decisions begin with the operating reality: the people doing the work, the information they trust and the constraints the product cannot ignore.</p>{article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><span>0{index + 1}</span><h2>{section.heading}</h2><p>{section.body}</p></section>)}<div className="article-principle"><strong>Working principle</strong><p>Prefer a smaller system with explicit boundaries and observable behavior over a larger promise that cannot be tested.</p></div></div></div></article><section className="final-cta"><div className="shell"><div><p className="eyebrow">Apply the thinking</p><h2>Bring the real operating problem.</h2></div><div><p>We’ll help turn it into a focused product or engineering plan.</p><Link href="/contact" className="button button-white">Discuss Your Project <ArrowRight /></Link></div></div></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
