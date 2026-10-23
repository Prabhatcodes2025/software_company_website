import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { insightArticles } from "@/lib/content";

export const metadata: Metadata = { title: "Engineering Insights", description: "Practical perspectives from LetsFygure on product architecture, accountable AI automation and web performance.", alternates: { canonical: "/insights" } };

export default function InsightsPage() {
  return <><PageHero eyebrow="Engineering notes" title="Useful thinking for consequential digital decisions." text="Practical frameworks for scoping products, designing accountable automation and protecting experience quality." cta={false} /><section className="section section-light"><div className="shell editorial-index">{insightArticles.map((article, index) => <article key={article.slug} className={index === 0 ? "editorial-featured" : ""}><div className="editorial-meta"><span>{String(index + 1).padStart(2, "0")}</span><p>{article.category}</p><small><Clock3 />{article.readTime}</small></div><h2>{article.title}</h2><p>{article.summary}</p><div className="editorial-topics">{article.sections.map(section => <span key={section.heading}>{section.heading}</span>)}</div><Link href={`/insights/${article.slug}`} className="lf-link-arrow">Read the article <ArrowUpRight /></Link></article>)}</div></section></>;
}
