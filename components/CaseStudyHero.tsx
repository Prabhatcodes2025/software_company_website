import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectDesktop } from "@/components/ProjectMedia";
import { caseEditorial } from "@/lib/case-editorial";

type Study = { slug: string; client: string; title: string; industry: string; url: string };

export function CaseStudyHero({ study, index }: { study: Study; index: number }) {
  const editorial = caseEditorial[study.slug];
  return <section className={"case-redesign-hero case-redesign-" + (index + 1)}><div className="shell case-redesign-hero-grid">
    <div><p className="corrective-kicker">Case {String(index + 1).padStart(2, "0")} · {study.industry}</p><h1>{study.client}</h1><p className="case-project-type">{study.title}</p><p className="case-hero-opening">{editorial.opening}</p><div className="case-hero-links"><a href={study.url} target="_blank" rel="noreferrer">Visit the live website <ArrowUpRight /></a><Link href="/case-studies">All case studies <ArrowRight /></Link></div></div>
    <div className="case-hero-image"><ProjectDesktop slug={study.slug} client={study.client} priority /><p>Authentic public website capture · desktop</p></div>
  </div></section>;
}

