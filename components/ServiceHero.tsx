import Link from "next/link";
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";
import { ProjectMedia } from "@/components/ProjectMedia";

type ServiceHeroProps = {
  service: { title: string; category: string; intro: string; icon: LucideIcon };
  promise: string;
  architecture: string[];
};

const evidenceProject: Record<string, [string, string]> = {
  "Web Development": ["ongole-property", "Ongole Property"],
  "Mobile App Development": ["naystrip", "Naystrip"],
  "Custom Software Development": ["ongole-property", "Ongole Property"],
  "UI/UX & Product Design": ["mozno-wealth", "Mozno Wealth"],
  "eCommerce Development": ["naystrip", "Naystrip"],
  "SEO Services": ["snow-feather-adventure", "Snow Feather Adventure"],
  "Performance & Social Marketing": ["mozno-wealth", "Mozno Wealth"],
  "API & Third-Party Integrations": ["continental-mercantile", "Continental Mercantile Corporation"],
};

export function ServiceHero({ service, promise, architecture }: ServiceHeroProps) {
  const Icon = service.icon;
  const evidence = evidenceProject[service.title];
  return <section className="service-hero section-dark"><div className="shell service-hero-layout"><div><p className="eyebrow"><span />{service.category}</p><h1>{service.title}</h1><p>{promise}</p><div className="service-hero-actions"><Link href="/contact" className="button">Discuss Your Project <ArrowRight /></Link><Link href="/case-studies" className="button button-secondary">Explore related work</Link></div></div>{evidence ? <div><ProjectMedia slug={evidence[0]} client={evidence[1]} /><small className="service-evidence-label">Related public client work</small></div> : <div className="service-blueprint" aria-label={`Illustrative ${service.title} delivery system`}><div className="service-blueprint-head"><span><Icon /> ILLUSTRATIVE DELIVERY BLUEPRINT</span><CheckCircle2 /></div><p>{service.intro}</p><ol>{architecture.slice(0, 5).map((node, index) => <li key={node}><span>{String(index + 1).padStart(2, "0")}</span><strong>{node}</strong>{index < Math.min(architecture.length, 5) - 1 && <i aria-hidden />}</li>)}</ol></div>}</div></section>;
}
