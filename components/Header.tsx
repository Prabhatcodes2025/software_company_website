"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { industries, megaGroups, services } from "@/lib/site";

type MenuName = "services" | "industries" | null;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuName>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); setActiveMenu(null); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setActiveMenu(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);
    return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("pointerdown", onPointerDown); };
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) window.requestAnimationFrame(() => firstMobileLinkRef.current?.focus());
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const shouldRestore = mobileOpen;
      setActiveMenu(null); setMobileOpen(false);
      if (shouldRestore) window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [mobileOpen]);

  function reveal(menu: Exclude<MenuName, null>) { if (closeTimer.current) clearTimeout(closeTimer.current); setActiveMenu(menu); }
  function queueClose() { closeTimer.current = setTimeout(() => setActiveMenu(null), 180); }
  function toggleMenu(menu: Exclude<MenuName, null>) { setActiveMenu(current => current === menu ? null : menu); }

  return <header ref={headerRef} className={`site-header${scrolled ? " is-scrolled" : ""}`}>
    <div className="shell header-inner">
      <Link href="/" className="brand" aria-label="LetsFygure home"><Image src="/images/letsfygure-logo.png" alt="" width={1280} height={1280} priority className="brand-mark" /><span><strong>LetsFygure</strong><small>TECHNOLOGY</small></span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <div className="nav-mega" onMouseEnter={() => reveal("services")} onMouseLeave={queueClose} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) queueClose(); }}><button className={pathname.startsWith("/services") ? "active" : ""} aria-expanded={activeMenu === "services"} aria-controls="mega-services" onClick={() => toggleMenu("services")}>Services <ChevronDown /></button></div>
        <div className="nav-mega" onMouseEnter={() => reveal("industries")} onMouseLeave={queueClose} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) queueClose(); }}><button className={pathname === "/industries" ? "active" : ""} aria-expanded={activeMenu === "industries"} aria-controls="mega-industries" onClick={() => toggleMenu("industries")}>Industries <ChevronDown /></button></div>
        <Link href="/case-studies" className={pathname.startsWith("/case-studies") ? "active" : ""}>Work</Link><Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link><Link href="/insights" className={pathname.startsWith("/insights") ? "active" : ""}>Insights</Link><Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
      </nav>
      <Link href="/contact" className="button button-small lf-button-sweep desktop-cta">Discuss Your Project <ArrowUpRight /></Link>
      <button ref={menuButtonRef} className="menu-toggle" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(open => !open)}>{mobileOpen ? <X /> : <Menu />}</button>
    </div>
    <div className={`mega-shell ${activeMenu ? "is-open" : ""}`} onMouseEnter={() => activeMenu && reveal(activeMenu)} onMouseLeave={queueClose} aria-hidden={!activeMenu}>
      {activeMenu === "services" && <div className="shell mega-panel" id="mega-services"><div className="mega-feature"><span className="eyebrow">Capabilities</span><h2>Engineering a useful advantage.</h2><p>Strategy, product design, software engineering and automation—connected by one accountable team.</p><Link className="lf-link-arrow" href="/services">View all services <ArrowUpRight /></Link></div><div className="mega-groups">{megaGroups.map(group => <div key={group.title}><h3>{group.title}</h3>{group.slugs.map(slug => { const service = services.find(item => item.slug === slug)!; return <Link key={slug} href={`/services/${slug}`}><span>{service.title}</span><ArrowUpRight /></Link>; })}</div>)}</div></div>}
      {activeMenu === "industries" && <div className="shell mega-panel mega-panel-industries" id="mega-industries"><div className="mega-feature"><span className="eyebrow">Industry context</span><h2>Built around how the work really works.</h2><p>Customer journeys, operating constraints and business risk shape every product decision.</p><Link className="lf-link-arrow" href="/industries">Explore industries <ArrowUpRight /></Link></div><div className="industry-menu">{industries.map(item => { const Icon = item.icon; return <Link href="/industries" key={item.title}><Icon /><span><strong>{item.title}</strong><small>{item.text}</small></span></Link>; })}</div></div>}
    </div>
    {mobileOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"><div className="mobile-nav-top"><span>Explore LetsFygure</span><small>Technology , Figured Out</small></div><Link ref={firstMobileLinkRef} href="/services"><span>01</span>Services<ArrowUpRight /></Link><Link href="/industries"><span>02</span>Industries<ArrowUpRight /></Link><Link href="/case-studies"><span>03</span>Work<ArrowUpRight /></Link><Link href="/about"><span>04</span>About<ArrowUpRight /></Link><Link href="/insights"><span>05</span>Insights<ArrowUpRight /></Link><Link href="/contact"><span>06</span>Contact<ArrowUpRight /></Link><Link href="/contact" className="button lf-button-sweep">Discuss Your Project <ArrowUpRight /></Link></nav>}
  </header>;
}
