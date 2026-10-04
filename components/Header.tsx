"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { industries, megaGroups, services } from "@/lib/site";

type MenuName = "services" | "solutions" | "industries" | null;
const solutionGroups = [
  { title: "Build", text: "Launch a focused digital product", href: "/services/custom-software-development" },
  { title: "Modernize", text: "Improve an existing platform", href: "/services/web-development" },
  { title: "Automate", text: "Connect workflows and AI", href: "/services/ai-automation" },
  { title: "Grow", text: "Turn product attention into demand", href: "/services/digital-marketing" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuName>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  useEffect(() => { setMobileOpen(false); setActiveMenu(null); }, [pathname]);
  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobileOpen]);
  useEffect(() => { const close = (event: KeyboardEvent) => event.key === "Escape" && (setActiveMenu(null), setMobileOpen(false)); document.addEventListener("keydown", close); return () => document.removeEventListener("keydown", close); }, []);
  function reveal(menu: Exclude<MenuName, null>) { if (closeTimer.current) clearTimeout(closeTimer.current); setActiveMenu(menu); }
  function queueClose() { closeTimer.current = setTimeout(() => setActiveMenu(null), 160); }

  return <header className="site-header"><div className="shell header-inner">
    <Link href="/" className="brand" aria-label="LetsFygure home"><Image src="/images/letsfygure-logo.png" alt="" width={1280} height={1280} priority className="brand-mark" /><span><strong>LetsFygure</strong><small>TECHNOLOGY</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {(["services", "solutions", "industries"] as const).map(menu => <div className="nav-mega" key={menu} onMouseEnter={() => reveal(menu)} onMouseLeave={queueClose} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) queueClose(); }}><button className={(menu === "services" && pathname.startsWith("/services")) || (menu === "industries" && pathname === "/industries") ? "active" : ""} aria-expanded={activeMenu === menu} aria-controls={`mega-${menu}`} onClick={() => setActiveMenu(menu)}>{menu[0].toUpperCase() + menu.slice(1)} <ChevronDown /></button></div>)}
      <Link href="/case-studies" className={pathname === "/case-studies" ? "active" : ""}>Work</Link><Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link><Link href="/insights" className={pathname === "/insights" ? "active" : ""}>Insights</Link><Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
    </nav>
    <Link href="/contact" className="button button-small lf-button-sweep desktop-cta">Start a Project <ArrowUpRight /></Link>
    <button className="menu-toggle" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
  </div>
  <div className={`mega-shell ${activeMenu ? "is-open" : ""}`} onMouseEnter={() => activeMenu && reveal(activeMenu)} onMouseLeave={queueClose}>
    {activeMenu === "services" && <div className="shell mega-panel" id="mega-services"><div className="mega-feature"><span className="eyebrow">Capabilities</span><Sparkles /><h2>Design, engineering and intelligence—connected.</h2><p>One accountable product team from the first system map to continuous improvement.</p><Link className="lf-link-arrow" href="/services">Explore every capability <ArrowUpRight /></Link></div><div className="mega-groups">{megaGroups.map(group => <div key={group.title}><h3>{group.title}</h3>{group.slugs.map(slug => { const service = services.find(item => item.slug === slug)!; return <Link key={slug} href={`/services/${slug}`}><span>{service.title}</span><ArrowUpRight /></Link>; })}</div>)}</div></div>}
    {activeMenu === "solutions" && <div className="shell mega-panel mega-panel-solutions" id="mega-solutions"><div className="mega-feature"><span className="eyebrow">By ambition</span><h2>Start with the change you need to create.</h2><p>We shape the right mix of product strategy, design, engineering and automation around the outcome.</p></div><div className="solution-links">{solutionGroups.map((item, index) => <Link href={item.href} key={item.title}><span>0{index + 1}</span><strong>{item.title}</strong><small>{item.text}</small><ArrowUpRight /></Link>)}</div></div>}
    {activeMenu === "industries" && <div className="shell mega-panel mega-panel-industries" id="mega-industries"><div className="mega-feature"><span className="eyebrow">Market context</span><h2>Products that respect how the industry works.</h2><p>Customer expectations, operating constraints and risk inform every product decision.</p><Link className="lf-link-arrow" href="/industries">Explore industries <ArrowUpRight /></Link></div><div className="industry-menu">{industries.map(item => { const Icon = item.icon; return <Link href="/industries" key={item.title}><Icon /><span><strong>{item.title}</strong><small>{item.text}</small></span></Link>; })}</div></div>}
  </div>
  {mobileOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><div className="mobile-nav-top"><span>Explore LetsFygure</span><small>Product · Engineering · AI</small></div><Link href="/services"><span>01</span>Services<ArrowUpRight /></Link><Link href="/services/ai-automation"><span>02</span>Solutions<ArrowUpRight /></Link><Link href="/industries"><span>03</span>Industries<ArrowUpRight /></Link><Link href="/case-studies"><span>04</span>Work<ArrowUpRight /></Link><Link href="/about"><span>05</span>About<ArrowUpRight /></Link><Link href="/insights"><span>06</span>Insights<ArrowUpRight /></Link><Link href="/contact"><span>07</span>Contact<ArrowUpRight /></Link><Link href="/contact" className="button lf-button-sweep">Start a Project <ArrowUpRight /></Link></nav>}
  </header>;
}
