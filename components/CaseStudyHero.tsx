import Link from "next/link";
import { ArrowRight, Building2, CalendarDays, MapPin, Search, ShieldCheck, UsersRound, WalletCards } from "lucide-react";

type Study = {
  slug: string; client: string; title: string; industry: string; challenge: string; services: string[];
};

const visualCopy: Record<string, { label: string; primary: string; secondary: string; nodes: string[] }> = {
  "ongole-property": { label: "Property journey", primary: "Search by place, type and need", secondary: "Role-aware listing operations", nodes: ["Discovery", "Owner", "Operator", "Admin"] },
  naystrip: { label: "Travel platform", primary: "Package to itinerary", secondary: "Customer and partner workflows", nodes: ["Explore", "Plan", "Enquire", "Partner"] },
  "mozno-wealth": { label: "Advisory journey", primary: "Understand before consulting", secondary: "High-trust service discovery", nodes: ["Learn", "Assess", "Consult", "Follow up"] },
  "snow-feather-adventure": { label: "Adventure discovery", primary: "Destination to detailed trek", secondary: "Mobile-first enquiry journey", nodes: ["Discover", "Itinerary", "Gallery", "Enquire"] },
  "rs-constructions": { label: "Capability showcase", primary: "Services and project evidence", secondary: "Direct business enquiries", nodes: ["Services", "Projects", "Capability", "Contact"] },
  "continental-mercantile": { label: "Recruitment journey", primary: "Candidate and employer paths", secondary: "International service clarity", nodes: ["Services", "Apply", "Employers", "Operations"] },
};

function VisualIcon({ slug }: { slug: string }) {
  if (slug === "ongole-property") return <Search />;
  if (slug === "naystrip") return <CalendarDays />;
  if (slug === "mozno-wealth") return <WalletCards />;
  if (slug === "snow-feather-adventure") return <MapPin />;
  if (slug === "rs-constructions") return <Building2 />;
  return <UsersRound />;
}

export function CaseStudyHero({ study, index }: { study: Study; index: number }) {
  const visual = visualCopy[study.slug];
  return <section className={`case-hero case-hero-${index + 1} section-dark`}><div className="hero-grid" aria-hidden /><div className="shell case-hero-layout">
    <div className="case-hero-copy"><p className="eyebrow"><span />CASE {String(index + 1).padStart(2, "0")} · {study.industry}</p><p className="case-client">{study.client}</p><h1>{study.title}</h1><p>{study.challenge}</p><div className="case-hero-actions"><Link className="button" href="/contact">Discuss a similar project <ArrowRight /></Link><Link className="button button-secondary" href="/case-studies">All work</Link></div></div>
    <div className="case-system" aria-label={`${study.client} project scope map`}><div className="case-system-head"><span><VisualIcon slug={study.slug} />{visual.label}</span><small>DELIVERED SCOPE</small></div><div className="case-system-primary"><span>01</span><strong>{visual.primary}</strong><small>{visual.secondary}</small></div><div className="case-system-flow">{visual.nodes.map((node, nodeIndex) => <div key={node}><i>{String(nodeIndex + 1).padStart(2, "0")}</i><span>{node}</span>{nodeIndex < visual.nodes.length - 1 && <b aria-hidden />}</div>)}</div><div className="case-system-foot"><ShieldCheck /><span>Scope represented from owner-supplied project information</span></div></div>
  </div></section>;
}
