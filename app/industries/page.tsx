import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { industryProfiles } from "@/lib/content";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = { title: "Industries", description: "Digital product systems for real estate, travel, recruitment, finance, construction, commerce, SaaS and enterprise operations.", alternates: { canonical: "/industries" } };

export default function IndustriesPage() {
  return <>
    <PageHero eyebrow="Industry systems" title="Market context changes the product architecture." text="We connect customer expectations, operating workflows and technical constraints instead of repeating the same solution across industries." />
    <section className="section section-light"><div className="shell industry-navigator"><p>Jump to a market</p><nav aria-label="Industry sections">{industryProfiles.map(item => <a href={`#${item.slug}`} key={item.slug}>{item.number} {item.title}</a>)}</nav></div></section>
    <div className="industry-stories">{industryProfiles.map((profile, index) => {
      const projects = profile.caseSlugs.map(slug => caseStudies.find(study => study.slug === slug)).filter((item): item is (typeof caseStudies)[number] => Boolean(item));
      return <section className={index % 2 === 0 ? "section section-paper" : "section section-light"} id={profile.slug} key={profile.slug}><div className="shell industry-story"><div className="industry-story-title"><span>{profile.number}</span><p className="eyebrow dark">{profile.title}</p><h2>{profile.thesis}</h2></div><div className="industry-system"><h3>Product system</h3><ol>{profile.flow.map((step, stepIndex) => <li key={step}><span>{String(stepIndex + 1).padStart(2, "0")}</span><strong>{step}</strong>{stepIndex < profile.flow.length - 1 && <i aria-hidden />}</li>)}</ol></div><div className="industry-solutions"><h3>Relevant capabilities</h3>{profile.solutions.map(item => <p key={item}>{item}</p>)}</div><div className="industry-proof"><h3>{projects.length ? "Related real work" : "Evidence boundary"}</h3>{projects.length ? projects.map(project => <Link href={`/case-studies/${project.slug}`} key={project.slug}><span>{project.client}</span><strong>{project.title}</strong><ArrowUpRight /></Link>) : <p>No client project is currently published for this market. The capabilities above describe offered work, not a fabricated case study.</p>}</div></div></section>;
    })}</div>
    <section className="section section-dark compact-cta"><div className="shell"><div><p className="eyebrow">Your operating context</p><h2>Show us where the customer journey and the workflow disconnect.</h2></div><Link className="button" href="/contact">Discuss Your Project <ArrowRight /></Link></div></section>
  </>;
}
