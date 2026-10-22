import Link from "next/link";
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";

type ServiceHeroProps = {
  service: { title: string; category: string; intro: string; icon: LucideIcon };
  promise: string;
  architecture: string[];
};

export function ServiceHero({ service, promise, architecture }: ServiceHeroProps) {
  const Icon = service.icon;
  return <section className="service-hero section-dark"><div className="hero-grid" aria-hidden /><div className="shell service-hero-layout"><div><p className="eyebrow"><span />{service.category}</p><h1>{service.title}</h1><p>{promise}</p><div className="service-hero-actions"><Link href="/contact" className="button">Discuss Your Project <ArrowRight /></Link><Link href="/case-studies" className="button button-secondary">Explore related work</Link></div></div><div className="service-blueprint" aria-label={`${service.title} delivery system`}><div className="service-blueprint-head"><span><Icon /> DELIVERY BLUEPRINT</span><CheckCircle2 /></div><p>{service.intro}</p><ol>{architecture.slice(0, 5).map((node, index) => <li key={node}><span>{String(index + 1).padStart(2, "0")}</span><strong>{node}</strong>{index < Math.min(architecture.length, 5) - 1 && <i aria-hidden />}</li>)}</ol></div></div></section>;
}
