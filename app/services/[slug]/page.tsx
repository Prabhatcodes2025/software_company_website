import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ServiceVisual } from "@/components/ServiceVisual";
import { QuoteTrigger } from "@/components/QuoteLauncher";
import { serviceDetails } from "@/lib/content";
import { serviceEditorial, type ServiceEditorial } from "@/lib/service-editorial";
import { caseStudies, company, services } from "@/lib/site";
import { socialMetadata } from "@/lib/social-metadata";

type Props = { params: Promise<{ slug: string }> };
type Detail = (typeof serviceDetails)[string];
const proofMap: Record<string, string[]> = {
  "web-development": ["snow-feather-adventure", "rs-constructions"],
  "custom-software-development": ["ongole-property"],
  "mobile-app-development": ["rs-constructions"],
};
const releaseChecks: Record<string, string> = {
  "web-development": "Before the site goes live",
  "mobile-app-development": "Before a mobile release",
  "custom-software-development": "Before teams depend on it",
  "ai-development": "Before AI answers users",
  "ai-automation": "Before a workflow runs unattended",
  "ui-ux-design": "Before design moves into build",
  "ecommerce-development": "Before shoppers reach checkout",
  seo: "Before search changes are published",
  "digital-marketing": "Before a campaign spends budget",
  "api-integrations": "Before systems exchange live data",
};

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  const editorial = serviceEditorial[slug];
  if (!service || !editorial) return {};
  return { title: service.title, description: editorial.intro, alternates: { canonical: "/services/" + slug }, ...socialMetadata(service.title, editorial.intro, "/services/" + slug) };
}

function Situation({ editorial, detail }: { editorial: ServiceEditorial; detail: Detail }) {
  return <section className="section service-situation"><div className="shell service-situation-grid"><div><p className="corrective-kicker">Where this helps</p><h2>{editorial.situationHeading}</h2><p>{editorial.situation}</p></div><ol>{detail.outcomes.map((outcome, index) => <li key={outcome}><span>0{index + 1}</span><strong>{outcome}</strong></li>)}</ol></div></section>;
}

function Scope({ editorial, detail }: { editorial: ServiceEditorial; detail: Detail }) {
  return <section className={"section service-delivery service-delivery-" + editorial.visualKind}><div className="shell"><div className="service-section-head"><p className="corrective-kicker">Delivery scope</p><div><h2>{editorial.scopeHeading}</h2><p>{editorial.scopeIntro}</p></div></div><div className="service-delivery-items">{detail.deliverables.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  const detail = serviceDetails[slug];
  const editorial = serviceEditorial[slug];
  if (!service || !detail || !editorial) notFound();
  const cases = (proofMap[slug] ?? []).map(caseSlug => caseStudies.find(item => item.slug === caseSlug)).filter((item): item is (typeof caseStudies)[number] => Boolean(item));
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: editorial.intro, provider: { "@type": "Organization", name: company.name, url: company.url }, url: company.url + "/services/" + slug };

  return <div className={"service-editorial-page service-page-" + editorial.visualKind}>
    <section className="service-editorial-hero"><div className="shell service-editorial-hero-grid"><div><p className="corrective-kicker">{editorial.eyebrow}</p><h1>{editorial.headline}</h1><p>{editorial.intro}</p><div className="service-editorial-actions"><Link href="/contact" className="button">Discuss Your Project <ArrowUpRight /></Link><Link href="/services" className="service-back-link">All services <ArrowRight /></Link></div></div><ServiceVisual editorial={editorial} /></div></section>
    {editorial.storyFirst ? <><Situation editorial={editorial} detail={detail} /><Scope editorial={editorial} detail={detail} /></> : <><Scope editorial={editorial} detail={detail} /><Situation editorial={editorial} detail={detail} /></>}
    <section className="section service-approach"><div className="shell service-approach-grid"><div><p className="corrective-kicker">How we approach it</p><h2>{editorial.approachHeading}</h2><p>{editorial.approachIntro}</p></div><div><p className="service-approach-label">System responsibilities to plan</p><ol>{detail.architecture.slice(0, 5).map((node, index) => <li key={node}><span>{String(index + 1).padStart(2, "0")}</span><strong>{node}</strong></li>)}</ol></div></div></section>
    <section className="section service-quality"><div className="shell service-quality-grid"><div><p className="corrective-kicker">Delivery checks</p><h2>{releaseChecks[slug]}</h2></div><div>{detail.standards.slice(0, 5).map(item => <span key={item}><Check />{item}</span>)}</div></div></section>
    <section className="section service-context"><div className="shell service-context-grid"><div><p className="corrective-kicker">Practical context</p><h2>{cases.length ? "Related public work" : detail.faqs[0][0]}</h2>{cases.length > 0 ? <><p>The public projects below show relevant delivery; the hero study is illustrative.</p>{cases.map(study => <Link key={study.slug} href={"/case-studies/" + study.slug} className="service-context-case"><strong>{study.client}</strong><span>{study.industry}</span><ArrowUpRight /></Link>)}</> : <p>{detail.faqs[0][1]}</p>}</div><div className="service-context-faq"><h3>Decisions to make</h3>{detail.faqs.slice(1, 3).map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="service-editorial-cta"><div className="shell"><p className="corrective-kicker">Discuss the work</p><h2>{editorial.ctaHeading}</h2><div><p>{editorial.ctaText}</p><div className="quote-cta-row"><Link href="/contact" className="button button-white">Start a Project Enquiry <ArrowUpRight /></Link><QuoteTrigger className="button quote-outline-button" service={service.title}>Get a Free Quote</QuoteTrigger></div></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </div>;
}

