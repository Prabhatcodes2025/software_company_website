"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { megaGroups, navItems, services } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); setServicesOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return <header className="site-header"><div className="shell header-inner">
    <Link href="/" className="brand" aria-label="LetsFygure home"><Image src="/images/letsfygure-logo.png" alt="" width={1280} height={1280} priority className="brand-mark" /><span><strong>LetsFygure</strong><small>TECHNOLOGY</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">
      <div className="nav-mega" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
        <button className={pathname.startsWith("/services") ? "active" : ""} aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}>Services <ChevronDown size={15} /></button>
        {servicesOpen && <div className="mega-panel"><div className="mega-intro"><span className="eyebrow">Capabilities</span><h2>Design. Build. Automate. Grow.</h2><p>One connected technology partner from product thinking through launch and evolution.</p><Link href="/services">Explore all services →</Link></div><div className="mega-groups">{megaGroups.map(group => <div key={group.title}><h3>{group.title}</h3>{group.slugs.map(slug => { const service = services.find(item => item.slug === slug)!; return <Link key={slug} href={`/services/${slug}`}>{service.title}</Link>; })}</div>)}</div></div>}
      </div>
      {navItems.slice(1).map(item => <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>{item.label}</Link>)}
    </nav>
    <Link href="/contact" className="button button-small desktop-cta">Start a Project <span aria-hidden>↗</span></Link>
    <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation"><Link href="/">Home</Link>{navItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}<div className="mobile-service-links">{services.slice(0, 6).map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}</div><Link href="/contact" className="button">Start a Project</Link></nav>}</header>;
}
