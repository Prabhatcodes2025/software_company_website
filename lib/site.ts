import {
  Blocks,
  Bot,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Cpu,
  Gem,
  GraduationCap,
  Handshake,
  HeartPulse,
  Layers3,
  LineChart,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  Store,
  Workflow
} from "lucide-react";

export const company = {
  name: "Nexora Technologies",
  shortName: "Nexora",
  url: "https://nexora-technologies.example",
  email: "hello@nexoratech.com",
  phone: "+1 (415) 555-0198"
};

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "Web Development",
    icon: Code2,
    summary: "High-converting portals, marketplaces, dashboards, and enterprise web platforms.",
    points: ["Next.js and headless CMS", "API-first architecture", "Performance and accessibility"]
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    summary: "Native-quality mobile apps for customer engagement, operations, and new digital products.",
    points: ["iOS, Android, React Native", "Offline-ready workflows", "App store launch support"]
  },
  {
    title: "AI/ML",
    icon: Bot,
    summary: "Intelligent automation, predictive analytics, copilots, and machine learning systems.",
    points: ["LLM product engineering", "Computer vision and NLP", "MLOps and governance"]
  },
  {
    title: "Blockchain",
    icon: Blocks,
    summary: "Secure smart contracts, tokenized products, wallets, and decentralized platforms.",
    points: ["Smart contract audits", "Web3 integrations", "Traceability systems"]
  },
  {
    title: "SaaS",
    icon: Cloud,
    summary: "Scalable SaaS products with multi-tenant architecture, billing, and analytics.",
    points: ["MVP to scale", "Subscription workflows", "Cloud-native DevOps"]
  },
  {
    title: "UI/UX",
    icon: Palette,
    summary: "Research-led experiences, design systems, prototypes, and product redesigns.",
    points: ["Product discovery", "Design systems", "Clickable prototypes"]
  }
];

export const industries = [
  { title: "FinTech", icon: LineChart, text: "Payments, lending, digital banking, and compliance-ready analytics." },
  { title: "Healthcare", icon: HeartPulse, text: "Patient portals, telehealth, clinical workflow, and data security." },
  { title: "Retail", icon: Store, text: "Commerce platforms, loyalty, inventory, and omnichannel experiences." },
  { title: "Education", icon: GraduationCap, text: "Learning platforms, assessment tools, and AI-assisted content." },
  { title: "Enterprise", icon: BriefcaseBusiness, text: "Internal platforms, automation, modernization, and integrations." },
  { title: "Cybersecurity", icon: ShieldCheck, text: "Secure product foundations, monitoring, risk workflows, and identity." }
];

export const caseStudies = [
  {
    title: "AI Claims Automation",
    industry: "Insurance",
    result: "63% faster claim triage",
    text: "A document intelligence platform that classifies evidence, flags anomalies, and routes cases to the right teams."
  },
  {
    title: "Global Commerce Replatform",
    industry: "Retail",
    result: "2.8x faster storefront",
    text: "A headless commerce stack with personalized journeys, resilient checkout, and real-time inventory orchestration."
  },
  {
    title: "SaaS Operations Hub",
    industry: "Logistics",
    result: "41% fewer manual tasks",
    text: "A multi-tenant workflow platform connecting shipment data, vendor actions, billing, and live performance dashboards."
  }
];

export const stats = [
  { value: "120+", label: "products shipped" },
  { value: "14", label: "industry verticals" },
  { value: "98%", label: "client retention" },
  { value: "24/7", label: "delivery coverage" }
];

export const process = [
  { title: "Discover", icon: Gem, text: "Clarify business goals, users, risks, and launch constraints." },
  { title: "Architect", icon: Workflow, text: "Shape the platform, roadmap, delivery plan, and security model." },
  { title: "Build", icon: Cpu, text: "Ship in focused sprints with visible progress and quality gates." },
  { title: "Scale", icon: Rocket, text: "Optimize performance, reliability, analytics, and growth loops." }
];

export const values = [
  "Product thinking before code",
  "Security and performance by default",
  "Transparent delivery with senior ownership",
  "Long-term partnerships over handoffs"
];

export const jobs = [
  { role: "Senior Full-Stack Engineer", location: "Remote", type: "Full time" },
  { role: "AI Product Engineer", location: "Hybrid", type: "Full time" },
  { role: "UI/UX Product Designer", location: "Remote", type: "Contract" },
  { role: "Cloud DevOps Engineer", location: "Remote", type: "Full time" }
];

export const partners = ["AWS", "Azure", "Google Cloud", "Vercel", "Stripe", "OpenAI"];

export const contactReasons = [
  { title: "Build a new product", icon: Rocket },
  { title: "Modernize legacy software", icon: Layers3 },
  { title: "Add AI to workflows", icon: Bot },
  { title: "Hire a dedicated team", icon: Handshake }
];
