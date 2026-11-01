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
};

const coreDepth = {
  "web-development": {
    eyebrow: "What we build",
    title: "Web platforms matched to the way your business operates.",
    intro: "Each engagement is scoped around its users, content, workflows and long-term ownership—not a fixed template.",
    items: [
      ["Custom Business Websites", "Professional service and company websites with clear content architecture, conversion paths and manageable publishing."],
      ["E-commerce Platforms", "Storefronts that connect product discovery, checkout, payments and the operational work after an order."],
      ["Web Applications", "Secure browser-based products for customer journeys, internal workflows and data-backed services."],
      ["SaaS Platforms", "Multi-role product foundations with authentication, subscriptions or permissions planned around the operating model."],
      ["Booking & Reservation Systems", "Availability, enquiry and reservation journeys integrated with the business rules behind them."],
      ["Admin Dashboards & Customer Portals", "Role-aware interfaces that give teams and customers the right information and actions."],
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PHP", "PostgreSQL", "MySQL", "Supabase"],
    faqs: [
      ["How long does a custom website take?", "Timing depends on page count, content readiness, integrations and application complexity. We define milestones after discovery rather than promise a generic schedule."],
      ["Can you build custom functionality?", "Yes. We scope custom workflows, portals, dashboards, booking logic and integrations around explicit business requirements."],
      ["Who owns the source code?", "Source-code ownership and handover terms are documented in the project agreement before development begins."],
      ["Do we need a CMS?", "Only when the publishing workflow benefits from one. We recommend a content approach around who will maintain the site and how often it changes."],
      ["Can you arrange hosting?", "We can recommend and configure suitable hosting or deploy into an approved client-owned account."],
      ["Do you provide maintenance?", "Yes. Maintenance can cover security updates, monitoring, fixes, content support and planned feature development."],
      ["Can you integrate our existing systems?", "Often yes. We review API access, authentication, data ownership and failure handling before confirming an integration."],
      ["How is project pricing determined?", "Pricing reflects scope, application logic, design depth, integrations, content needs and the required testing and support."],
    ],
  },
  "mobile-app-development": {
    eyebrow: "Mobile development capabilities",
    title: "Mobile products designed around repeat use.",
    intro: "The app, backend, authentication and release path are planned as one product. The visual showcase above is conceptual and is not presented as delivered client work.",
    items: [
      ["Android App Development", "Focused Android experiences planned around device behavior, permissions and release requirements."],
      ["iOS App Development", "iPhone and iPad journeys designed with platform conventions and store preparation in mind."],
      ["Cross-platform Development", "Shared React Native foundations where product requirements make cross-platform delivery appropriate."],
      ["Business Applications", "Role-aware mobile tools for teams, field operations, approvals and customer service workflows."],
      ["E-commerce Applications", "Mobile commerce journeys connected to catalog, account, payment and order systems."],
      ["Booking Applications", "Search, availability, reservation and notification flows built around real operating rules."],
      ["Customer Applications", "Secure self-service experiences for accounts, requests, updates and ongoing engagement."],
      ["Backend & API Integration", "Authentication, data synchronization, notifications and resilient error handling across systems."],
    ],
    technologies: ["React Native", "TypeScript", "JavaScript", "Node.js", "REST APIs"],
    faqs: [
      ["Should we build for Android, iOS or both?", "The choice follows your users, required device capabilities, release priorities and budget. We confirm the platform plan during discovery."],
      ["When is cross-platform development suitable?", "It can be effective when the core experience and device requirements can share an architecture without compromising essential platform behavior."],
      ["How long does mobile app development take?", "Timing depends on user roles, backend readiness, integrations, device features and release scope. We estimate after defining the first useful release."],
      ["Does the app need a backend?", "Most account-based or data-driven apps do. We can connect an existing backend or scope the required APIs and data services."],
      ["Who owns the source code?", "Ownership, repository access and handover terms are agreed in writing before delivery begins."],
      ["Do you support App Store submission?", "Release preparation and submission support can be included. Final approval remains controlled by Apple and Google."],
      ["Can you maintain the app after launch?", "Yes. Support can include monitoring, dependency updates, issue resolution and planned product improvements."],
      ["What affects mobile app pricing?", "Pricing reflects platforms, feature depth, backend work, integrations, device capabilities, design requirements and QA scope."],
    ],
  },
} as const;
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

function CoreServiceDepth({ slug }: { slug: keyof typeof coreDepth }) {
  const content = coreDepth[slug];
  return <>
    <section className="section core-service-depth" aria-labelledby={`${slug}-builds`}><div className="shell"><div className="service-section-head"><p className="corrective-kicker">{content.eyebrow}</p><div><h2 id={`${slug}-builds`}>{content.title}</h2><p>{content.intro}</p></div></div><div className="core-service-build-grid">{content.items.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="core-service-tech"><div className="shell"><div><p className="corrective-kicker">Technology expertise</p><h2>Tools selected around the product.</h2><p>We use technologies supported by our published capability set and choose the final architecture around the requirements.</p></div><ul>{content.technologies.map(item => <li key={item}>{item}</li>)}</ul></div></section>
    <section className="section core-service-faq" aria-labelledby={`${slug}-faq`}><div className="shell"><div><p className="corrective-kicker">Practical questions</p><h2 id={`${slug}-faq`}>Frequently asked questions.</h2></div><div>{content.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
  </>;
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
    {(slug === "web-development" || slug === "mobile-app-development") && <CoreServiceDepth slug={slug} />}
    <section className="section service-context"><div className="shell service-context-grid"><div><p className="corrective-kicker">Practical context</p><h2>{cases.length ? "Related public work" : detail.faqs[0][0]}</h2>{cases.length > 0 ? <><p>The public projects below show relevant delivery; the hero study is illustrative.</p>{cases.map(study => <Link key={study.slug} href={"/case-studies/" + study.slug} className="service-context-case"><strong>{study.client}</strong><span>{study.industry}</span><ArrowUpRight /></Link>)}</> : <p>{detail.faqs[0][1]}</p>}</div><div className="service-context-faq"><h3>Decisions to make</h3>{detail.faqs.slice(1, 3).map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="service-editorial-cta"><div className="shell"><p className="corrective-kicker">Discuss the work</p><h2>{editorial.ctaHeading}</h2><div><p>{editorial.ctaText}</p><div className="quote-cta-row"><Link href="/contact" className="button button-white">Start a Project Enquiry <ArrowUpRight /></Link><QuoteTrigger className="button quote-outline-button" service={service.title}>Get a Free Quote</QuoteTrigger></div></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </div>;
}

