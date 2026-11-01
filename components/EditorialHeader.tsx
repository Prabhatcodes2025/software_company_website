"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/site";

type MenuName = "services" | null;

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
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <div className="nav-mega" {...menuProps("services")}><button className={pathname.startsWith("/services") ? "active" : ""} aria-expanded={activeMenu === "services"} aria-controls="mega-services" onClick={(event) => toggleMenu("services", event)}>Services <ChevronDown /></button></div>
        <Link href="/case-studies" className={pathname.startsWith("/case-studies") ? "active" : ""}>Our Work</Link>
        <Link href="/industries" className={pathname === "/industries" ? "active" : ""}>Industries</Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
        <Link href="/insights" className={pathname.startsWith("/insights") ? "active" : ""}>Insights</Link>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
      </nav>
      <Link href="/contact" className="button button-small desktop-cta">Discuss Your Project <ArrowUpRight /></Link>
      <button ref={menuButtonRef} className="menu-toggle" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(open => !open)}>{mobileOpen ? <X /> : <Menu />}</button>
    </div>
    <div className={`mega-shell ${activeMenu ? "is-open" : ""}`} onMouseEnter={() => activeMenu && reveal(activeMenu)} onMouseLeave={queueClose} aria-hidden={!activeMenu}>
      {activeMenu === "services" && <div className="shell mega-panel core-mega-panel" id="mega-services"><div className="mega-feature"><span className="eyebrow">Development services</span><h2>Web and mobile products, engineered end to end.</h2><p>Design, frontend, backend, data and integrations planned as one delivery.</p><Link className="lf-link-arrow" href="/services">Explore all capabilities <ArrowUpRight /></Link></div><div className="core-mega-groups"><div><Link className="core-mega-heading" href="/services/web-development"><strong>Custom Website Development</strong><ArrowUpRight /></Link>{["Business Websites", "E-commerce Development", "Web Applications", "SaaS Platforms", "Custom Dashboards"].map(item => <Link key={item} href="/services/web-development">{item}</Link>)}</div><div><Link className="core-mega-heading" href="/services/mobile-app-development"><strong>Mobile App Development</strong><ArrowUpRight /></Link>{["Android Applications", "iOS Applications", "Cross-platform Apps", "Business Applications", "App Maintenance"].map(item => <Link key={item} href="/services/mobile-app-development">{item}</Link>)}</div><div className="core-mega-support"><span>Supporting capabilities</span>{["custom-software-development", "ui-ux-design", "api-integrations"].map(slug => { const service = services.find(item => item.slug === slug)!; return <Link key={slug} href={`/services/${slug}`}>{service.title}</Link>; })}</div></div></div>}
    </div>
    {mobileOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
      <div className="mobile-nav-top"><span>Explore LetsFygure</span><small>Web &amp; mobile product engineering</small></div>
      <Link ref={firstMobileLinkRef} href="/" {...mobileCurrent(pathname === "/")}><span>01</span>Home<ArrowUpRight /></Link>
      <Link href="/services" {...mobileCurrent(pathname.startsWith("/services"))}><span>02</span>Services<ArrowUpRight /></Link>
      <div className="mobile-core-links"><Link href="/services/web-development">Custom Website Development</Link><Link href="/services/mobile-app-development">Mobile App Development</Link></div>
      <Link href="/case-studies" {...mobileCurrent(pathname.startsWith("/case-studies"))}><span>03</span>Our Work<ArrowUpRight /></Link>
      <Link href="/industries" {...mobileCurrent(pathname === "/industries")}><span>04</span>Industries<ArrowUpRight /></Link>
      <Link href="/about" {...mobileCurrent(pathname === "/about")}><span>05</span>About<ArrowUpRight /></Link>
      <Link href="/insights" {...mobileCurrent(pathname.startsWith("/insights"))}><span>06</span>Insights<ArrowUpRight /></Link>
      <Link href="/contact" {...mobileCurrent(pathname === "/contact")}><span>07</span>Contact<ArrowUpRight /></Link>
      <Link href="/contact" className="button">Discuss Your Project <ArrowUpRight /></Link>
    </nav>}
  </header>;
}
