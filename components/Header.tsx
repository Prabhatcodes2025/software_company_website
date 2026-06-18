"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Code2,
  DatabaseZap,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  Layers3,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  Newspaper,
  Phone,
  Plane,
  Rocket,
  Server,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Truck,
  Twitter,
  Users,
  X
} from "lucide-react";
import { company } from "@/lib/site";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";
import { clsx } from "clsx";

type MegaKey = "services" | "industries" | "hire" | "products" | "insights" | "company";

type MegaCategory = {
  title: string;
  description: string;
  href: string;
  links: { label: string; href: string; description?: string }[];
};

type MegaMenuConfig = {
  key: MegaKey;
  label: string;
  href: string;
  eyebrow: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  icon: typeof Sparkles;
  categories: MegaCategory[];
};

const megaMenus: MegaMenuConfig[] = [
  {
    key: "services",
    label: "Services",
    href: "/services",
    eyebrow: "Enterprise services",
    heading: "Consulting-led engineering capabilities",
    description: "Senior teams for AI, SaaS, web, mobile, cloud, DevOps, UI/UX, and growth systems.",
    ctaLabel: "Book Consultation",
    ctaHref: "/contact",
    icon: Layers3,
    categories: [
      {
        title: "AI & Automation",
        description: "Copilots, RAG, workflow automation, and AI governance.",
        href: "/services",
        links: [
          { label: "AI product strategy", href: "/services", description: "Prioritize use cases and roadmap risk." },
          { label: "LLM copilots", href: "/services", description: "Secure assistants for teams and customers." },
          { label: "RAG systems", href: "/services", description: "Enterprise knowledge retrieval workflows." },
          { label: "Process automation", href: "/services", description: "Reduce manual operational load." },
          { label: "AI governance", href: "/services", description: "Evaluation, guardrails, and auditability." }
        ]
      },
      {
        title: "Software Development",
        description: "Enterprise systems, APIs, portals, and modernization.",
        href: "/services",
        links: [
          { label: "Custom software", href: "/services", description: "Business-critical platforms." },
          { label: "Enterprise portals", href: "/services", description: "Secure internal and external systems." },
          { label: "API platforms", href: "/services", description: "Reliable integration layers." },
          { label: "Legacy modernization", href: "/services", description: "Stabilize and rebuild safely." },
          { label: "QA automation", href: "/services", description: "Quality gates for release confidence." }
        ]
      },
      {
        title: "Web Development",
        description: "High-performance web apps, portals, and dashboards.",
        href: "/services",
        links: [
          { label: "Next.js applications", href: "/services", description: "Fast, SEO-ready digital products." },
          { label: "Marketplaces", href: "/services", description: "Commerce and transaction platforms." },
          { label: "Admin dashboards", href: "/services", description: "Operational visibility and controls." },
          { label: "Headless CMS", href: "/services", description: "Scalable content operations." },
          { label: "Core Web Vitals", href: "/services", description: "Performance that converts." }
        ]
      },
      {
        title: "Mobile Apps",
        description: "Native-quality iOS, Android, Flutter, and React Native apps.",
        href: "/services",
        links: [
          { label: "iOS development", href: "/services", description: "Premium Apple ecosystem apps." },
          { label: "Android development", href: "/services", description: "Reliable Android experiences." },
          { label: "Flutter apps", href: "/services", description: "Cross-platform release speed." },
          { label: "Field operations apps", href: "/services", description: "Offline and workflow-heavy tools." },
          { label: "Release management", href: "/services", description: "QA, store, and rollout support." }
        ]
      },
      {
        title: "SaaS Development",
        description: "Multi-tenant products built for growth and enterprise buyers.",
        href: "/services",
        links: [
          { label: "SaaS architecture", href: "/services", description: "Tenant isolation and scale." },
          { label: "Subscription workflows", href: "/services", description: "Billing and usage operations." },
          { label: "Admin consoles", href: "/services", description: "Control planes for internal teams." },
          { label: "Analytics", href: "/services", description: "Product and revenue intelligence." },
          { label: "Product roadmap pods", href: "/services", description: "Continuous feature delivery." }
        ]
      },
      {
        title: "Cloud & DevOps",
        description: "Secure infrastructure, CI/CD, observability, and reliability.",
        href: "/services",
        links: [
          { label: "AWS infrastructure", href: "/services", description: "Cloud foundations and migration." },
          { label: "CI/CD pipelines", href: "/services", description: "Controlled releases." },
          { label: "DevOps automation", href: "/services", description: "Infrastructure as code." },
          { label: "Monitoring", href: "/services", description: "Operational visibility." },
          { label: "Reliability engineering", href: "/services", description: "Performance and uptime support." }
        ]
      },
      {
        title: "UI/UX",
        description: "Enterprise product design, discovery, and design systems.",
        href: "/services",
        links: [
          { label: "Product discovery", href: "/services", description: "Reduce product and delivery risk." },
          { label: "UX audits", href: "/services", description: "Find friction and conversion leaks." },
          { label: "Design systems", href: "/services", description: "Consistency at scale." },
          { label: "Dashboard UX", href: "/services", description: "Usable complex interfaces." },
          { label: "Clickable prototypes", href: "/services", description: "Validate before build." }
        ]
      },
      {
        title: "Digital Marketing",
        description: "SEO, analytics, landing systems, and conversion funnels.",
        href: "/services",
        links: [
          { label: "SEO strategy", href: "/services", description: "Organic growth foundations." },
          { label: "Landing pages", href: "/services", description: "Conversion-focused experiences." },
          { label: "Analytics setup", href: "/services", description: "Decision-ready tracking." },
          { label: "Content systems", href: "/services", description: "Scalable publishing workflows." },
          { label: "Performance marketing", href: "/services", description: "Campaign-ready product pages." }
        ]
      }
    ]
  },
  {
    key: "industries",
    label: "Industries",
    href: "/industries",
    eyebrow: "Industry expertise",
    heading: "Domain-aware platforms for serious operations",
    description: "Dedicated solution patterns for regulated, high-volume, and operationally complex industries.",
    ctaLabel: "Discuss Your Industry Project",
    ctaHref: "/contact",
    icon: Building2,
    categories: [
      {
        title: "Healthcare",
        description: "Patient portals, clinical workflows, and healthcare data products.",
        href: "/industries",
        links: [
          { label: "Telehealth platforms", href: "/industries", description: "Secure virtual care experiences." },
          { label: "Patient portals", href: "/industries", description: "Self-service care access." },
          { label: "Clinical workflow tools", href: "/industries", description: "Operational efficiency for teams." },
          { label: "Healthcare analytics", href: "/industries", description: "Decision support and reporting." }
        ]
      },
      {
        title: "Fintech",
        description: "Payments, risk systems, lending, wallets, and analytics.",
        href: "/industries",
        links: [
          { label: "Payment platforms", href: "/industries", description: "Reliable transaction systems." },
          { label: "Digital lending", href: "/industries", description: "Origination and workflow automation." },
          { label: "Wallet apps", href: "/industries", description: "Secure customer finance products." },
          { label: "Risk dashboards", href: "/industries", description: "Monitoring and decision intelligence." }
        ]
      },
      {
        title: "Real Estate",
        description: "Marketplaces, CRMs, investor portals, and location platforms.",
        href: "/industries",
        links: [
          { label: "Property marketplaces", href: "/industries", description: "Search, listing, and deal flows." },
          { label: "Broker CRM", href: "/industries", description: "Sales and relationship operations." },
          { label: "Investor portals", href: "/industries", description: "Portfolio visibility and reporting." },
          { label: "Location intelligence", href: "/industries", description: "Maps, data, and recommendations." }
        ]
      },
      {
        title: "Education",
        description: "Learning platforms, assessments, content systems, and AI tutors.",
        href: "/industries",
        links: [
          { label: "LMS platforms", href: "/industries", description: "Structured learning delivery." },
          { label: "Assessment tools", href: "/industries", description: "Testing and evaluation workflows." },
          { label: "AI tutors", href: "/industries", description: "Personalized learning assistance." },
          { label: "Content systems", href: "/industries", description: "Publishing and curriculum operations." }
        ]
      },
      {
        title: "E-commerce",
        description: "Headless commerce, loyalty, inventory, and checkout systems.",
        href: "/industries",
        links: [
          { label: "Headless storefronts", href: "/industries", description: "Fast, scalable commerce UX." },
          { label: "Checkout optimization", href: "/industries", description: "Fewer leaks, better conversion." },
          { label: "Inventory systems", href: "/industries", description: "Real-time operational visibility." },
          { label: "Personalization", href: "/industries", description: "Relevant journeys and offers." }
        ]
      },
      {
        title: "Logistics",
        description: "Fleet operations, tracking, vendor workflows, and route intelligence.",
        href: "/industries",
        links: [
          { label: "Fleet dashboards", href: "/industries", description: "Live operational control." },
          { label: "Shipment tracking", href: "/industries", description: "Customer and internal visibility." },
          { label: "Vendor workflows", href: "/industries", description: "Reduce coordination overhead." },
          { label: "Route intelligence", href: "/industries", description: "Optimization and planning." }
        ]
      },
      {
        title: "Travel",
        description: "Booking systems, itinerary tools, loyalty platforms, and travel ops.",
        href: "/industries",
        links: [
          { label: "Booking platforms", href: "/industries", description: "Search, reserve, and pay flows." },
          { label: "Itinerary tools", href: "/industries", description: "Traveler-facing planning systems." },
          { label: "Loyalty platforms", href: "/industries", description: "Retention and rewards." },
          { label: "Travel operations", href: "/industries", description: "Supplier and support workflows." }
        ]
      },
      {
        title: "Manufacturing",
        description: "Production analytics, IoT dashboards, quality workflows, and automation.",
        href: "/industries",
        links: [
          { label: "Production dashboards", href: "/industries", description: "Plant and line visibility." },
          { label: "IoT analytics", href: "/industries", description: "Machine and sensor insights." },
          { label: "Quality workflows", href: "/industries", description: "Defect and review processes." },
          { label: "Automation layers", href: "/industries", description: "Operational efficiency systems." }
        ]
      }
    ]
  },
  {
    key: "hire",
    label: "Hire Developer",
    href: "/contact",
    eyebrow: "Dedicated talent",
    heading: "Senior specialists for enterprise delivery pods",
    description: "Scale capacity with vetted engineers, designers, QA, DevOps, and AI specialists managed with delivery oversight.",
    ctaLabel: "Build Your Team",
    ctaHref: "/contact",
    icon: Users,
    categories: [
      {
        title: "Frontend Developers",
        description: "React, Next.js, design systems, accessibility, and performance.",
        href: "/contact",
        links: [
          { label: "React developers", href: "/contact", description: "Modern frontend teams." },
          { label: "Next.js developers", href: "/contact", description: "SEO-ready web apps." },
          { label: "Design system engineers", href: "/contact", description: "Reusable UI at scale." },
          { label: "Performance specialists", href: "/contact", description: "Core Web Vitals and speed." }
        ]
      },
      {
        title: "Backend Developers",
        description: "APIs, integrations, databases, and secure service architecture.",
        href: "/contact",
        links: [
          { label: "Node.js developers", href: "/contact", description: "API and service delivery." },
          { label: "Python developers", href: "/contact", description: "Data, AI, and backend systems." },
          { label: "API engineers", href: "/contact", description: "Integration-heavy platforms." },
          { label: "Database engineers", href: "/contact", description: "Reliable data foundations." }
        ]
      },
      {
        title: "Full Stack Developers",
        description: "Product engineers who move across frontend, backend, and cloud.",
        href: "/contact",
        links: [
          { label: "SaaS product engineers", href: "/contact", description: "End-to-end platform teams." },
          { label: "MVP teams", href: "/contact", description: "Launch-focused delivery pods." },
          { label: "Enterprise app teams", href: "/contact", description: "Complex business workflows." },
          { label: "Modernization squads", href: "/contact", description: "Stabilize and rebuild products." }
        ]
      },
      {
        title: "Mobile App Developers",
        description: "iOS, Android, Flutter, React Native, QA, and release operations.",
        href: "/contact",
        links: [
          { label: "Flutter developers", href: "/contact", description: "Cross-platform apps." },
          { label: "React Native developers", href: "/contact", description: "Fast mobile delivery." },
          { label: "iOS developers", href: "/contact", description: "Premium Apple apps." },
          { label: "Android developers", href: "/contact", description: "Reliable Android apps." }
        ]
      },
      {
        title: "AI/ML Developers",
        description: "LLM, automation, data intelligence, and ML engineering.",
        href: "/contact",
        links: [
          { label: "LLM engineers", href: "/contact", description: "Copilots and AI workflows." },
          { label: "ML engineers", href: "/contact", description: "Models and pipelines." },
          { label: "Data engineers", href: "/contact", description: "Reliable data layers." },
          { label: "AI automation experts", href: "/contact", description: "Operational productivity systems." }
        ]
      },
      {
        title: "DevOps Engineers",
        description: "Cloud infrastructure, CI/CD, monitoring, SRE, and security practices.",
        href: "/contact",
        links: [
          { label: "AWS engineers", href: "/contact", description: "Cloud foundations." },
          { label: "CI/CD specialists", href: "/contact", description: "Release automation." },
          { label: "SRE consultants", href: "/contact", description: "Uptime and reliability." },
          { label: "Security-minded DevOps", href: "/contact", description: "Controlled infrastructure." }
        ]
      }
    ]
  },
  {
    key: "products",
    label: "Our Products",
    href: "/case-studies",
    eyebrow: "Product systems",
    heading: "Reusable product patterns for business platforms",
    description: "Accelerated product delivery for SaaS, CRM, ERP, automation, and commerce initiatives.",
    ctaLabel: "Explore Product Work",
    ctaHref: "/case-studies",
    icon: DatabaseZap,
    categories: [
      {
        title: "SaaS Products",
        description: "Multi-tenant, subscription-ready cloud products.",
        href: "/case-studies",
        links: [
          { label: "B2B SaaS platforms", href: "/case-studies", description: "Enterprise sales-ready products." },
          { label: "Admin consoles", href: "/case-studies", description: "Control and operations layers." },
          { label: "Analytics dashboards", href: "/case-studies", description: "Product intelligence." }
        ]
      },
      {
        title: "CRM Solutions",
        description: "Sales, service, pipeline, and relationship management systems.",
        href: "/case-studies",
        links: [
          { label: "Sales CRM", href: "/case-studies", description: "Pipeline and conversion visibility." },
          { label: "Customer portals", href: "/case-studies", description: "Self-service experiences." },
          { label: "Workflow automation", href: "/case-studies", description: "Less manual coordination." }
        ]
      },
      {
        title: "ERP Solutions",
        description: "Operational control systems for finance, supply, and internal teams.",
        href: "/case-studies",
        links: [
          { label: "Operations modules", href: "/case-studies", description: "Team and process visibility." },
          { label: "Inventory systems", href: "/case-studies", description: "Stock and supply controls." },
          { label: "Finance workflows", href: "/case-studies", description: "Approvals and reporting." }
        ]
      },
      {
        title: "AI Automation Tools",
        description: "AI products that reduce operational workload and increase throughput.",
        href: "/case-studies",
        links: [
          { label: "Document intelligence", href: "/case-studies", description: "Process high-volume inputs." },
          { label: "Support copilots", href: "/case-studies", description: "Assist teams and customers." },
          { label: "Operations automation", href: "/case-studies", description: "Workflow productivity." }
        ]
      },
      {
        title: "E-commerce Platforms",
        description: "Composable storefronts, checkout, inventory, loyalty, and personalization.",
        href: "/case-studies",
        links: [
          { label: "Headless commerce", href: "/case-studies", description: "Fast storefronts." },
          { label: "Checkout systems", href: "/case-studies", description: "Higher conversion." },
          { label: "Loyalty platforms", href: "/case-studies", description: "Retention and engagement." }
        ]
      }
    ]
  },
  {
    key: "insights",
    label: "Insights",
    href: "/case-studies",
    eyebrow: "Knowledge center",
    heading: "Enterprise software thinking for decision-makers",
    description: "Read practical perspectives on product strategy, AI, architecture, modernization, and delivery quality.",
    ctaLabel: "Read Case Studies",
    ctaHref: "/case-studies",
    icon: Newspaper,
    categories: [
      {
        title: "Blog",
        description: "Strategy, design, AI, and engineering perspectives.",
        href: "/about",
        links: [
          { label: "AI strategy articles", href: "/about", description: "Pilot-to-production thinking." },
          { label: "SaaS architecture notes", href: "/about", description: "Scale before launch." },
          { label: "UX and conversion insights", href: "/about", description: "Premium product signals." }
        ]
      },
      {
        title: "Case Studies",
        description: "Business challenge, solution, results, and ROI metrics.",
        href: "/case-studies",
        links: [
          { label: "AI operations platform", href: "/case-studies", description: "Insurance workflow automation." },
          { label: "Commerce rebuild", href: "/case-studies", description: "Performance and conversion." },
          { label: "Logistics SaaS hub", href: "/case-studies", description: "Operational efficiency." }
        ]
      },
      {
        title: "Resources",
        description: "Planning materials and leadership-friendly explainers.",
        href: "/about",
        links: [
          { label: "Discovery checklist", href: "/about", description: "Prepare for a build." },
          { label: "Architecture review", href: "/about", description: "Find risk early." },
          { label: "Delivery roadmap", href: "/about", description: "Plan the next 90 days." }
        ]
      },
      {
        title: "Guides",
        description: "Practical guides for complex digital product work.",
        href: "/about",
        links: [
          { label: "SaaS launch guide", href: "/about", description: "What to solve before launch." },
          { label: "AI adoption guide", href: "/about", description: "Useful, secure AI rollout." },
          { label: "Modernization guide", href: "/about", description: "Upgrade without disruption." }
        ]
      },
      {
        title: "Technology Updates",
        description: "Framework, AI, cloud, and platform updates that matter.",
        href: "/about",
        links: [
          { label: "Next.js updates", href: "/about", description: "Web platform changes." },
          { label: "OpenAI updates", href: "/about", description: "AI capabilities and use cases." },
          { label: "Cloud architecture notes", href: "/about", description: "Reliability and cost ideas." }
        ]
      }
    ]
  },
  {
    key: "company",
    label: "Our Company",
    href: "/about",
    eyebrow: "About Clickmyze",
    heading: "A senior technology partner for serious product work",
    description: "Learn how Clickmyze structures discovery, design, engineering, delivery governance, support, and long-term partnerships.",
    ctaLabel: "Contact Leadership",
    ctaHref: "/contact",
    icon: BriefcaseBusiness,
    categories: [
      {
        title: "About Us",
        description: "Company story, values, and delivery standards.",
        href: "/about",
        links: [
          { label: "Who we are", href: "/about", description: "Strategy, design, and engineering." },
          { label: "Values", href: "/about", description: "Enterprise thinking before code." },
          { label: "Leadership", href: "/about", description: "Senior oversight on projects." }
        ]
      },
      {
        title: "Our Process",
        description: "Discovery, planning, design, development, testing, launch, and support.",
        href: "/about",
        links: [
          { label: "Discovery", href: "/about", description: "Business context and risk." },
          { label: "Delivery pods", href: "/about", description: "Focused sprint execution." },
          { label: "Launch support", href: "/about", description: "Monitoring and optimization." }
        ]
      },
      {
        title: "Careers",
        description: "Join senior product, engineering, AI, design, and cloud teams.",
        href: "/career",
        links: [
          { label: "Open roles", href: "/career", description: "Current hiring areas." },
          { label: "Engineering culture", href: "/career", description: "How teams work." },
          { label: "Remote-first delivery", href: "/career", description: "Global collaboration." }
        ]
      },
      {
        title: "Contact",
        description: "Start a consultation with senior delivery experts.",
        href: "/contact",
        links: [
          { label: "Book consultation", href: "/contact", description: "Discuss scope and timeline." },
          { label: "Project inquiry", href: "/contact", description: "Share your initiative." },
          { label: "Team augmentation", href: "/contact", description: "Scale capacity." }
        ]
      },
      {
        title: "Testimonials",
        description: "Client validation from product, operations, and technology leaders.",
        href: "/about",
        links: [
          { label: "Client reviews", href: "/about", description: "Delivery quality and trust." },
          { label: "Enterprise results", href: "/case-studies", description: "ROI and metrics." },
          { label: "Partnership model", href: "/about", description: "Long-term ownership." }
        ]
      }
    ]
  }
];

const menuIcons: Record<string, typeof Sparkles> = {
  "AI & Automation": Bot,
  "Software Development": Code2,
  "Web Development": Code2,
  "Mobile Apps": Smartphone,
  "SaaS Development": Rocket,
  "Cloud & DevOps": Server,
  "UI/UX": Layers3,
  "Digital Marketing": Lightbulb,
  Healthcare: HeartPulse,
  Fintech: DatabaseZap,
  "Real Estate": Home,
  Education: GraduationCap,
  "E-commerce": ShoppingCart,
  Logistics: Truck,
  Travel: Plane,
  Manufacturing: Factory,
  "Frontend Developers": Code2,
  "Backend Developers": Server,
  "Full Stack Developers": Layers3,
  "Mobile App Developers": Smartphone,
  "AI/ML Developers": Bot,
  "DevOps Engineers": Server,
  "SaaS Products": Rocket,
  "CRM Solutions": Users,
  "ERP Solutions": Building2,
  "AI Automation Tools": Bot,
  "E-commerce Platforms": ShoppingCart,
  Blog: Newspaper,
  "Case Studies": BookOpen,
  Resources: Layers3,
  Guides: BookOpen,
  "Technology Updates": Sparkles,
  "About Us": Building2,
  "Our Process": Layers3,
  Careers: Users,
  Contact: ArrowRight,
  Testimonials: Sparkles
};

function getMenuIcon(title: string) {
  return menuIcons[title] ?? Sparkles;
}

function getCompactMenuItems(config: MegaMenuConfig) {
  if (config.key === "services") {
    return [
      { label: "Website Development", href: "/services", icon: Code2 },
      { label: "Mobile App Development", href: "/services", icon: Smartphone },
      { label: "Digital Marketing", href: "/services", icon: Lightbulb },
      { label: "SEO Services", href: "/services", icon: Sparkles },
      { label: "AI Automation", href: "/services", icon: Bot },
      { label: "Software Development", href: "/services", icon: Layers3 },
      { label: "Portfolio", href: "/case-studies", icon: BookOpen },
      { label: "Pricing", href: "/contact", icon: DatabaseZap },
      { label: "Contact", href: "/contact", icon: ArrowRight }
    ];
  }

  return config.categories.slice(0, 9).map((category) => ({
    label: category.title,
    href: category.href,
    icon: getMenuIcon(category.title)
  }));
}

function MegaMenu({ config, onClose }: { config: MegaMenuConfig; onClose: () => void }) {
  const menuItems = getCompactMenuItems(config);

  return (
    <motion.div
      className="absolute inset-x-0 top-full z-[10000] hidden origin-top px-4 pt-2 [will-change:transform,opacity] lg:block"
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-h-[calc(100vh-120px)] w-full max-w-[860px] overflow-y-auto rounded-2xl border border-white/10 bg-[#020617] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.72)]">
        <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-4">
          <div className="min-w-0">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyanfire">{config.eyebrow}</p>
            <h3 className="mt-1 truncate text-base font-black leading-6 text-white">{config.heading}</h3>
          </div>
          <Link href={config.ctaHref} onClick={onClose} className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-cyanfire/25 bg-cyanfire/10 px-3 py-2 text-[13px] font-black text-cyanfire transition hover:border-cyanfire/45 hover:bg-cyanfire/15">
            {config.ctaLabel} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 xl:grid-cols-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={`${config.key}-${item.label}`} href={item.href} onClick={onClose} className="group flex min-h-11 items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] px-3 py-2.5 text-[13px] font-bold text-slate-300 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-cyanfire/35 hover:bg-cyanfire/[0.09] hover:text-white">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-cyanfire/10 text-cyanfire transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:bg-cyanfire/15 group-hover:shadow-[0_0_16px_rgba(56,213,255,0.14)]">
                  <Icon size={16} className="transition-transform duration-300 group-hover:scale-105" />
                </span>
                <span className="min-w-0 break-words">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

function MobileMenuGroup({
  config,
  isOpen,
  onToggle,
  onClose
}: {
  config: MegaMenuConfig;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const menuItems = getCompactMenuItems(config);

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/80">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left">
        <span className="text-[15px] font-black text-white">{config.label}</span>
        <ChevronDown size={18} className={clsx("shrink-0 text-cyanfire transition", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -4 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -4 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-1.5 border-t border-white/10 p-3 sm:grid-cols-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={`${config.key}-${item.label}`} href={item.href} onClick={onClose} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-bold text-slate-200 transition-all duration-300 hover:bg-cyanfire/10 hover:text-white">
                    <Icon size={16} className="shrink-0 text-cyanfire transition-transform duration-300 group-hover:translate-x-0.5" />
                    <span className="min-w-0 break-words">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaKey | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<MegaKey | null>("services");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const hoverCloseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeConfig = megaMenus.find((menu) => menu.key === activeMega) ?? null;

  const closeMenus = () => {
    setActiveMega(null);
    setIsMobileMenuOpen(false);
  };

  const openMega = (key: MegaKey) => {
    if (hoverCloseRef.current) clearTimeout(hoverCloseRef.current);
    setActiveMega(key);
  };

  const scheduleMegaClose = () => {
    if (hoverCloseRef.current) clearTimeout(hoverCloseRef.current);
    hoverCloseRef.current = setTimeout(() => setActiveMega(null), 80);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenus();
    // Route changes should always reset hover and mobile navigation state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setActiveMega(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  const navClass = (href: string, key?: MegaKey) =>
    clsx(
      "group relative rounded-lg px-2.5 py-2 text-xs font-bold transition hover:text-cyanfire xl:px-3 xl:text-sm",
      (pathname === href || activeMega === key) && "text-cyanfire"
    );

  const menuLabel = (key: MegaKey) => t.nav[key];

  return (
    <header
      ref={headerRef}
      className={clsx(
        "sticky top-0 z-[9999] border-b transition-all duration-300",
        scrolled ? "border-white/10 bg-slate-950/92 shadow-[0_16px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl" : "border-white/8 bg-slate-950/82 backdrop-blur-xl"
      )}
      onMouseLeave={scheduleMegaClose}
      onMouseEnter={() => {
        if (hoverCloseRef.current) clearTimeout(hoverCloseRef.current);
      }}
    >
      <div className="hidden border-b border-white/10 bg-slate-950/95 text-xs text-slate-300 xl:block">
        <Container className="flex min-h-9 items-center justify-between gap-4">
          <a href={`mailto:${company.email}`} className="flex items-center gap-2 transition hover:text-cyanfire">
            <Mail size={14} className="text-cyanfire" />
            <span>{company.email}</span>
          </a>
          <div className="flex items-center gap-5">
            <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 transition hover:text-cyanfire">
              <Phone size={14} className="text-mint" />
              <span>Call Us: Sales {company.phone}</span>
            </a>
            <a href={`tel:${company.hrPhone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 transition hover:text-cyanfire">
              <Phone size={14} className="text-mint" />
              <span>HR {company.hrPhone}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="https://www.linkedin.com" aria-label="LinkedIn" className="transition hover:-translate-y-0.5 hover:text-cyanfire">
              <Linkedin size={15} />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" className="transition hover:-translate-y-0.5 hover:text-cyanfire">
              <Twitter size={15} />
            </Link>
            <LanguageSwitcher className="h-7" />
          </div>
        </Container>
      </div>

      <Container className="flex h-[72px] items-center justify-between gap-3 lg:h-20">
        <Link href="/" onClick={closeMenus} className="flex min-w-0 items-center gap-3" aria-label={`${company.name} home`}>
          <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white/10 shadow-glow sm:size-12 xl:size-14">
            <Image src="/images/clickmyze-logo.png" alt="Clickmyze logo" width={56} height={56} className="size-full object-cover" priority />
          </span>
          <span className="whitespace-nowrap text-lg font-black tracking-normal text-white sm:text-xl">{company.shortName}</span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-0.5 rounded-xl border border-white/10 bg-white/[0.035] p-1 text-slate-200 lg:flex">
          {megaMenus.map((menu) => (
            <button
              key={menu.key}
              className={navClass(menu.href, menu.key)}
              onMouseEnter={() => openMega(menu.key)}
              onFocus={() => openMega(menu.key)}
              onClick={() => setActiveMega((current) => (current === menu.key ? null : menu.key))}
              type="button"
              aria-expanded={activeMega === menu.key}
              aria-haspopup="true"
            >
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                {menuLabel(menu.key)} <ChevronDown size={14} className={clsx("transition", activeMega === menu.key && "rotate-180")} />
              </span>
              <span className="absolute inset-x-3 bottom-1 h-px scale-x-0 bg-cyanfire transition group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <Link
          href="/contact"
          onClick={closeMenus}
          className="hidden shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyanfire to-mint px-4 py-3 text-sm font-black text-ink shadow-[0_0_35px_rgba(56,213,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(56,213,255,0.34)] xl:inline-flex"
        >
          {t.nav.contactCta} <ArrowRight size={16} />
        </Link>
        <button
          className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 bg-slate-900 text-slate-100 shadow-[0_12px_34px_rgba(0,0,0,0.26)] lg:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open navigation"
          type="button"
        >
          <Menu size={21} />
        </button>
      </Container>

      <AnimatePresence>
        {activeConfig ? (
          <MegaMenu
            key={activeConfig.key}
            config={activeConfig}
            onClose={closeMenus}
          />
        ) : null}
      </AnimatePresence>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {isMobileMenuOpen ? (
                <motion.div
                  className="fixed inset-0 z-[99999] flex h-dvh flex-col overflow-hidden bg-[#020617] text-white lg:hidden"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Container className="flex h-16 shrink-0 items-center justify-between border-b border-white/10">
                    <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeMenus}>
                      <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white/10 sm:size-12">
                        <Image src="/images/clickmyze-logo.png" alt="Clickmyze logo" width={48} height={48} className="size-full object-cover" />
                      </span>
                      <span className="whitespace-nowrap font-black text-white">{company.shortName}</span>
                    </Link>
                    <button onClick={closeMenus} className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-slate-900 text-white" aria-label="Close navigation" type="button">
                      <X size={20} />
                    </button>
                  </Container>
                  <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
                    <Container className="py-4">
                      <LanguageSwitcher className="w-full justify-between" />

                      <div className="mt-4 grid gap-2">
                        {megaMenus.map((menu) => (
                          <MobileMenuGroup
                            key={menu.key}
                            config={{ ...menu, label: menuLabel(menu.key), ctaLabel: menu.key === "industries" ? "Discuss Your Industry Project" : t.nav.contactCta }}
                            isOpen={openMobileDropdown === menu.key}
                            onToggle={() => setOpenMobileDropdown((current) => (current === menu.key ? null : menu.key))}
                            onClose={closeMenus}
                          />
                        ))}
                      </div>

                      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <Link href="/case-studies" onClick={closeMenus} className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-center text-sm font-black text-white">
                          View Portfolio
                        </Link>
                        <Link href="/contact" onClick={closeMenus} className="rounded-xl bg-gradient-to-r from-cyanfire to-mint px-5 py-3.5 text-center text-sm font-black text-ink">
                          {t.nav.contactCta}
                        </Link>
                      </div>
                    </Container>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </header>
  );
}
