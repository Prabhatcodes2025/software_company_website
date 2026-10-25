import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectMedia } from "@/components/ProjectMedia";

type Study = {
  slug: string; client: string; title: string; industry: string; challenge: string; services: string[];
};

export function CaseStudyHero({ study, index }: { study: Study; index: number }) {
  return <section className={`case-hero editorial-case-hero case-hero-${index + 1} section-dark`}><div className="shell case-hero-layout">
    <div className="case-hero-copy"><p className="eyebrow"><span />CASE {String(index + 1).padStart(2, "0")} · {study.industry}</p><p className="case-client">{study.client}</p><h1>{study.title}</h1><p>{study.challenge}</p><div className="case-hero-actions"><Link className="button" href="/contact">Discuss a similar project <ArrowRight /></Link><Link className="button button-secondary" href="/case-studies">All work</Link></div></div>
    <ProjectMedia slug={study.slug} client={study.client} priority />
  </div></section>;
}
