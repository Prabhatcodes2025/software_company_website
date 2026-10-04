import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, MessageCircle, Star } from "lucide-react";
import { company, navItems, services } from "@/lib/site";

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid">
    <div className="footer-brand"><Link href="/" className="brand"><Image src="/images/letsfygure-logo.png" alt="" width={1280} height={1280} className="brand-mark" /><span><strong>LetsFygure</strong><small>TECHNOLOGY</small></span></Link><p>We design, engineer and scale digital products around real business goals.</p><strong className="footer-line">Complex digital challenges.<br /><span>Figured Out.</span></strong></div>
    <div><h2>Services</h2>{services.slice(0, 6).map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}</div>
    <div><h2>Company</h2>{navItems.slice(1).map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/career">Careers</Link></div>
    <div><h2>Connect</h2><a href={company.clutch} target="_blank" rel="noreferrer"><Star size={16} /> 5.0 on Clutch <ArrowUpRight size={14} /></a><a href={company.instagram} target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram <ArrowUpRight size={14} /></a><a href={company.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp <ArrowUpRight size={14} /></a><a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} LetsFygure Technology.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></footer>;
}
