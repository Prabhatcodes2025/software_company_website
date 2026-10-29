"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { industries, megaGroups, services } from "@/lib/site";

type MenuName = "services" | "industries" | "insights" | null;

export function EditorialHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuName>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastClickedMenu = useRef<MenuName>(null);

  useEffect(() => { setMobileOpen(false); setActiveMenu(null); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) { setActiveMenu(null); lastClickedMenu.current = null; }
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
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const restore = mobileOpen;
      setActiveMenu(null); setMobileOpen(false); lastClickedMenu.current = null;
      if (restore) window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const reveal = (menu: Exclude<MenuName, null>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };
  const queueClose = () => { closeTimer.current = setTimeout(() => setActiveMenu(null), 160); };
  const toggleMenu = (menu: Exclude<MenuName, null>, event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.detail === 0 || lastClickedMenu.current === menu) {
      setActiveMenu(current => current === menu ? null : menu);
      lastClickedMenu.current = null;
    } else {
      lastClickedMenu.current = menu;
      setActiveMenu(menu);
    }
  };
  const mobileCurrent = (matches: boolean) => matches ? { className: "active", "aria-current": "page" as const } : {};
  const menuProps = (menu: Exclude<MenuName, null>) => ({
    onMouseEnter: () => reveal(menu),
    onMouseLeave: queueClose,
    onBlur: (event: React.FocusEvent<HTMLDivElement>) => { if (!event.currentTarget.contains(event.relatedTarget)) queueClose(); },
  });

  return <header ref={headerRef} className={`site-header editorial-header${scrolled ? " is-scrolled" : ""}`}>
    <div className="shell header-inner">
      <Link href="/" className="brand" aria-label="LetsFygure home">
        <Image src="/images/letsfygure-official.png" alt="" width={2113} height={744} priority className="official-wordmark" />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <div className="nav-mega" {...menuProps("services")}><button className={pathname.startsWith("/services") ? "active" : ""} aria-expanded={activeMenu === "services"} aria-controls="mega-services" onClick={(event) => toggleMenu("services", event)}>Services <ChevronDown /></button></div>
        <div className="nav-mega" {...menuProps("industries")}><button className={pathname === "/industries" ? "active" : ""} aria-expanded={activeMenu === "industries"} aria-controls="mega-industries" onClick={(event) => toggleMenu("industries", event)}>Industries <ChevronDown /></button></div>
        <div className="nav-mega" {...menuProps("insights")}><button className={pathname.startsWith("/insights") || pathname.startsWith("/case-studies") ? "active" : ""} aria-expanded={activeMenu === "insights"} aria-controls="mega-insights" onClick={(event) => toggleMenu("insights", event)}>Insights <ChevronDown /></button></div>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
      </nav>
      <Link href="/contact" className="button button-small desktop-cta">Let&apos;s Talk <ArrowUpRight /></Link>
      <button ref={menuButtonRef} className="menu-toggle" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(open => !open)}>{mobileOpen ? <X /> : <Menu />}</button>
    </div>
    <div className={`mega-shell ${activeMenu ? "is-open" : ""}`} onMouseEnter={() => activeMenu && reveal(activeMenu)} onMouseLeave={queueClose} aria-hidden={!activeMenu}>
      {activeMenu === "services" && <div className="shell mega-panel" id="mega-services"><div className="mega-feature"><span className="eyebrow">Capabilities</span><h2>Build the right thing, properly.</h2><p>Strategy, design, engineering and growth connected by one accountable team.</p><Link className="lf-link-arrow" href="/services">All services <ArrowUpRight /></Link></div><div className="mega-groups">{megaGroups.map(group => <div key={group.title}><h3>{group.title}</h3>{group.slugs.map(slug => { const service = services.find(item => item.slug === slug)!; return <Link key={slug} href={`/services/${slug}`}><span>{service.title}</span><ArrowUpRight /></Link>; })}</div>)}</div></div>}
      {activeMenu === "industries" && <div className="shell mega-panel mega-panel-industries" id="mega-industries"><div className="mega-feature"><span className="eyebrow">Industry context</span><h2>Systems shaped around real work.</h2><p>Customer journeys and operating constraints shape every product decision.</p><Link className="lf-link-arrow" href="/industries">Explore industries <ArrowUpRight /></Link></div><div className="industry-menu">{industries.map(item => { const Icon = item.icon; return <Link href="/industries" key={item.title}><Icon /><span><strong>{item.title}</strong><small>{item.text}</small></span></Link>; })}</div></div>}
      {activeMenu === "insights" && <div className="shell mega-panel mega-panel-insights" id="mega-insights"><div className="mega-feature"><span className="eyebrow">Ideas & evidence</span><h2>See the work. Learn from the process.</h2><p>Real project stories and practical thinking for consequential digital decisions.</p></div><div className="insights-menu"><Link href="/case-studies"><small>01</small><span><strong>Case Studies</strong><em>Six real client platforms</em></span><ArrowUpRight /></Link><Link href="/insights"><small>02</small><span><strong>Blog / Articles</strong><em>Product and growth perspectives</em></span><ArrowUpRight /></Link><Link href="/insights#engineering"><small>03</small><span><strong>Engineering Insights</strong><em>Architecture, AI and performance</em></span><ArrowUpRight /></Link></div></div>}
    </div>
    {mobileOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
      <div className="mobile-nav-top"><span>Explore LetsFygure</span><small>Technology , Figured Out</small></div>
      <Link ref={firstMobileLinkRef} href="/services" {...mobileCurrent(pathname.startsWith("/services"))}><span>01</span>Services<ArrowUpRight /></Link>
      <Link href="/industries" {...mobileCurrent(pathname === "/industries")}><span>02</span>Industries<ArrowUpRight /></Link>
      <Link href="/case-studies" {...mobileCurrent(pathname.startsWith("/case-studies"))}><span>03</span>Case Studies<ArrowUpRight /></Link>
      <Link href="/insights" {...mobileCurrent(pathname.startsWith("/insights"))}><span>04</span>Blog / Articles<ArrowUpRight /></Link>
      <Link href="/insights#engineering"><span>05</span>Engineering Insights<ArrowUpRight /></Link>
      <Link href="/about" {...mobileCurrent(pathname === "/about")}><span>06</span>About<ArrowUpRight /></Link>
      <Link href="/contact" {...mobileCurrent(pathname === "/contact")}><span>07</span>Contact<ArrowUpRight /></Link>
      <Link href="/contact" className="button">Let&apos;s Talk <ArrowUpRight /></Link>
    </nav>}
  </header>;
}
