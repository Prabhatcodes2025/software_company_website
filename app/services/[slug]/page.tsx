import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ServiceHero } from "@/components/ServiceHero";
import { serviceDetails } from "@/lib/content";
import { caseStudies, company, process, services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) return {};
  return { title: service.title, description: `${service.short} ${service.intro}`, alternates: { canonical: `/services/${slug}` }, openGraph: { title: `${service.title} | LetsFygure`, description: service.short, url: `${company.url}/services/${slug}` } };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();
  const related = detail.relatedCases.map(caseSlug => caseStudies.find(item => item.slug === caseSlug)).filter((item): item is (typeof caseStudies)[number] => Boolean(item));
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.intro, provider: { "@type": "Organization", name: company.name, url: company.url }, url: `${company.url}/services/${service.slug}` };

  return <>
    <ServiceHero service={service} promise={detail.promise} architecture={detail.architecture} />
    <section className="section section-light"><div className="shell service-outcome-layout"><div className="service-outcome-copy"><p className="eyebrow dark">The operating problem</p><h2>{service.problem}</h2><p className="lead">The engagement is organized around what needs to change in the business—not a pre-filled feature list.</p></div><ol className="service-outcomes">{detail.outcomes.map((outcome, index) => <li key={outcome}><span>0{index + 1}</span><p>{outcome}</p></li>)}</ol></div></section>
    <section className="section section-paper"><div className="shell"><div className="section-heading"><div><p className="eyebrow dark">Delivery scope</p><h2>Concrete work, connected end to end.</h2></div><p>Every workstream has a clear purpose in the finished product and operating model.</p></div><div className="service-deliverables">{detail.deliverables.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
    <section className="section service-architecture-section"><div className="shell"><div className="service-architecture-copy"><p className="eyebrow">System architecture</p><h2>The visible experience and the layers beneath it.</h2><p>Exact technology is selected during discovery. This is the responsibility map the solution must connect.</p></div><div className="architecture-path" role="img" aria-label={`${service.title} architecture: ${detail.architecture.join(" to ")}`}>{detail.architecture.map((node, index) => <div key={node}><span>{String(index + 1).padStart(2, "0")}</span><strong>{node}</strong>{index < detail.architecture.length - 1 && <i aria-hidden />}</div>)}</div></div></section>
    <section className="section section-light"><div className="shell standards-layout"><div><p className="eyebrow dark">Engineering standards</p><h2>Quality is a delivery responsibility.</h2><p className="lead">These practices are applied at the depth the project and risk require; they are not presented as unsupported certifications.</p></div><div className="standards-list">{detail.standards.map(item => <span key={item}><Check />{item}</span>)}</div></div></section>
    <section className="section section-dark methodology-section"><div className="shell"><div className="section-heading light"><div><p className="eyebrow">Development methodology</p><h2>Decisions become visible before risk becomes expensive.</h2></div><p>Six stages, with working software and review points replacing long periods of hidden delivery.</p></div><ol className="methodology-line">{process.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>
    {(related.length > 0 || detail.relatedIndustries.length > 0) && <section className="section section-paper"><div className="shell related-work-layout"><div><p className="eyebrow dark">Applied context</p><h2>Relevant industries</h2><div className="industry-tags">{detail.relatedIndustries.map(item => <span key={item}>{item}</span>)}</div></div><div className="service-related-cases">{related.length > 0 ? related.map(study => <Link href={`/case-studies/${study.slug}`} key={study.slug}><small>{study.industry}</small><strong>{study.client}</strong><span>{study.title}</span><ArrowUpRight /></Link>) : <p>Relevant delivery examples will be added only when a verified project is available.</p>}</div></div></section>}
    <section className="section section-light"><div className="shell service-faq-layout"><div><p className="eyebrow dark">Frequently asked</p><h2>Practical questions before delivery begins.</h2></div><div className="service-faqs">{detail.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="final-cta"><div className="shell"><div><p className="eyebrow">A clear next step</p><h2>Let’s scope your {service.title.toLowerCase()} project.</h2></div><div><p>Share the users, current system and operating outcome. We’ll help frame the right engagement.</p><Link href="/contact" className="button button-white">Discuss Your Project <ArrowRight /></Link></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
