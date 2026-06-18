import {
  Activity,
  BadgeCheck,
  Banknote,
  Bot,
  Boxes,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  GraduationCap,
  Handshake,
  HeartPulse,
  Home,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  Map,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  TestTube2,
  Truck,
  Users,
} from "lucide-react";

export const company = {
  name: "Clickmyze Technologies Pvt Ltd",
  shortName: "Clickmyze",
  url: "https://clickmyze-technologies.example",
  email: "info@clickmyze.com",
  phone: "+91 96857 61187",
  hrPhone: "+91 78988 71187"
};

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" }
];

export const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "10+", label: "Technologies" }
];

export const clientLogos = ["Finova Group", "MedAxis Health", "VectorPay", "ShipGrid", "CloudOps Capital", "UrbanKey", "NovaCart", "EduCore"];

export const proofBadges = [
  { title: "Clutch", value: "4.9/5", text: "Enterprise software delivery rating", icon: Star },
  { title: "DesignRush", value: "Verified", text: "Product design and engineering partner", icon: BadgeCheck },
  { title: "GoodFirms", value: "5.0", text: "Client-rated development partner", icon: CheckCircle2 },
  { title: "Google Reviews", value: "4.8", text: "Verified global client feedback", icon: Sparkles }
];

export const services = [
  {
    title: "AI Development",
    icon: BrainCircuit,
    summary: "Production AI systems for operational teams that need governed automation, reliable data access, and measurable adoption.",
    points: ["LLM architecture and evaluation", "RAG and agentic workflows", "Human approval and audit trails"],
    cta: "Discuss AI strategy",
    outcome: "From pilot to governed production",
    model: "AI consulting + engineering",
    span: "lg:col-span-2"
  },
  {
    title: "SaaS Development",
    icon: Cloud,
    summary: "Multi-tenant platforms engineered for enterprise buyers, usage growth, billing complexity, permissions, and operational control.",
    points: ["Tenant isolation and roles", "Billing, analytics, and admin ops", "Reliability and scale planning"],
    cta: "Architect SaaS",
    outcome: "Investor and enterprise-ready platforms",
    model: "Product pod"
  },
  {
    title: "Web Development",
    icon: Code2,
    summary: "High-performance portals, marketplaces, dashboards, and web applications built for conversion, security, and long-term maintainability.",
    points: ["Frontend architecture", "Headless and composable platforms", "SEO, accessibility, Core Web Vitals"],
    cta: "Modernize web",
    outcome: "Premium digital experiences",
    model: "UX + engineering"
  },
  {
    title: "Mobile Apps",
    icon: Smartphone,
    summary: "Native-quality mobile products for customer engagement, field operations, internal teams, commerce, and real-time workflows.",
    points: ["iOS, Android, Flutter, React Native", "Secure API and identity integration", "Release, QA, and store operations"],
    cta: "Plan mobile delivery",
    outcome: "Launch-ready mobile ecosystems",
    model: "Mobile product squad",
    span: "lg:row-span-2"
  },
  {
    title: "Cloud Solutions",
    icon: Server,
    summary: "Cloud architecture, DevOps automation, observability, migration, and reliability programs for platforms that cannot afford downtime.",
    points: ["AWS architecture and migration", "CI/CD, IaC, and release control", "Monitoring, SRE, and cost visibility"],
    cta: "Assess cloud maturity",
    outcome: "Resilient, monitored infrastructure",
    model: "Cloud modernization"
  },
  {
    title: "Staff Augmentation",
    icon: Users,
    summary: "Dedicated senior engineers, architects, designers, QA, DevOps, and product specialists embedded with governance and delivery oversight.",
    points: ["Vetted senior specialists", "Managed pods with sprint rituals", "Executive reporting and continuity"],
    cta: "Build a delivery pod",
    outcome: "Capacity without delivery chaos",
    model: "Managed team extension",
    span: "lg:col-span-2"
  }
];

export const industries = [
  { title: "Healthcare", icon: HeartPulse, text: "HIPAA-aware patient portals, clinical workflows, telehealth, and data products." },
  { title: "Fintech", icon: Banknote, text: "Payments, lending, wallets, digital banking, risk systems, and analytics." },
  { title: "Real Estate", icon: Home, text: "Property marketplaces, CRMs, investor portals, and location-based platforms." },
  { title: "Education", icon: GraduationCap, text: "Learning platforms, assessment tools, content systems, and AI tutors." },
  { title: "E-commerce", icon: ShoppingCart, text: "Headless commerce, loyalty, inventory, personalization, and checkout optimization." },
  { title: "Logistics", icon: Truck, text: "Fleet operations, tracking dashboards, vendor workflows, and route intelligence." },
  { title: "Manufacturing", icon: Boxes, text: "Production analytics, IoT dashboards, quality workflows, and automation layers." }
];

export const caseStudies = [
  {
    title: "AI Operations Platform for Insurance",
    industry: "Insurance",
    problem: "Manual claims triage created delays, inconsistent decisions, and high operational overhead.",
    solution: "Built an AI document intelligence platform with human-in-the-loop review, anomaly detection, and routing automation.",
    results: "63% faster claim triage",
    metric: "$1.8M annual savings",
    tags: ["OpenAI", "Python", "AWS", "Secure workflows"],
    roi: ["18K docs/day processed", "41% fewer escalations", "9-week launch"]
  },
  {
    title: "Global Headless Commerce Rebuild",
    industry: "Retail",
    problem: "Legacy storefront performance and checkout friction limited conversion across international markets.",
    solution: "Replatformed to a composable Next.js commerce stack with real-time inventory and personalized journeys.",
    results: "42% conversion lift",
    metric: "2.8x faster pages",
    tags: ["Next.js", "Node.js", "Stripe", "Analytics"],
    roi: ["Sub-1s key pages", "23 markets supported", "99.95% uptime"]
  },
  {
    title: "SaaS Control Tower for Logistics",
    industry: "Logistics",
    problem: "Disconnected shipment data, billing, and vendor actions slowed operations across regions.",
    solution: "Delivered a multi-tenant SaaS hub with live dashboards, role-based workflows, and automated billing events.",
    results: "41% fewer manual tasks",
    metric: "6-month ROI",
    tags: ["SaaS", "MongoDB", "Docker", "AWS"],
    roi: ["12 integrations", "99.96% uptime", "31% faster dispatch"]
  }
];

export const processTimeline = [
  { title: "Discovery", icon: Sparkles, text: "Clarify business goals, users, risks, constraints, and success metrics." },
  { title: "Planning", icon: Map, text: "Define roadmap, architecture, delivery pods, budget, and launch milestones." },
  { title: "Design", icon: Layers3, text: "Create UX flows, product systems, prototypes, and enterprise-ready interfaces." },
  { title: "Development", icon: Code2, text: "Build in focused sprints with frontend, backend, cloud, and data specialists." },
  { title: "Testing", icon: TestTube2, text: "Validate quality through QA, security checks, performance tests, and reviews." },
  { title: "Deployment", icon: Rocket, text: "Launch with CI/CD, monitoring, analytics, documentation, and release control." },
  { title: "Support", icon: LifeBuoy, text: "Scale roadmap delivery, optimization, cloud reliability, and long-term support." }
];

export const technologies = ["React", "Next.js", "Node.js", "Python", "Laravel", "Flutter", "MongoDB", "AWS", "Docker", "Supabase", "OpenAI", "Stripe"];

export const whyChooseUs = [
  { title: "Enterprise Architecture", icon: Building2, text: "Systems designed for governance, scale, integrations, and long-term maintainability." },
  { title: "Senior Delivery Pods", icon: Users, text: "Product strategists, architects, designers, and engineers working as one accountable unit." },
  { title: "Secure Engineering", icon: LockKeyhole, text: "Security reviews, access models, clean APIs, and deployment practices built into delivery." },
  { title: "Fast Market Launch", icon: Rocket, text: "Accelerators, reusable components, and focused sprints that reduce time-to-market." },
  { title: "Cloud Reliability", icon: Cloud, text: "Resilient infrastructure, monitoring, DevOps automation, and performance optimization." },
  { title: "Partnership Mindset", icon: Handshake, text: "Clear communication, transparent planning, and post-launch ownership." }
];

export const testimonials = [
  { quote: "Clickmyze operated like a strategic technology partner, not a vendor. They aligned product, architecture, security, and delivery around measurable business outcomes.", name: "Maya Chen", role: "VP Product, Finova Group" },
  { quote: "Their senior team brought discipline to a complex SaaS rebuild. The architecture decisions were clear, documented, and built for enterprise growth.", name: "Alex Morgan", role: "Chief Product Officer, B2B SaaS platform" },
  { quote: "We needed AI automation that operations, compliance, and leadership could trust. Clickmyze made it secure, measurable, and practical to adopt.", name: "Priya Shah", role: "COO, Insurance operations group" },
  { quote: "Their engineers integrated with our internal team quickly and raised our delivery standards across architecture, DevOps, and release quality.", name: "Daniel Ruiz", role: "CTO, Logistics platform" },
  { quote: "The new product experience improved conversion and gave our platform the credibility needed for enterprise sales conversations.", name: "Sofia Laurent", role: "CEO, Commerce technology company" }
];

export const team = [
  { name: "Aarav Mehta", role: "Founder & CEO", focus: "Executive sponsorship, product strategy, enterprise partnerships, and commercial alignment." },
  { name: "Elena Brooks", role: "Chief Technology Officer", focus: "Architecture governance, AI systems, cloud scale, security reviews, and platform risk." },
  { name: "Noah Williams", role: "Head of Product Design", focus: "Discovery, UX systems, design quality, buyer journeys, and adoption-focused interfaces." },
  { name: "Isha Kapoor", role: "VP Engineering", focus: "Delivery pods, sprint governance, QA, DevOps, technical continuity, and team augmentation." }
];

export const blogPosts = [
  { title: "How enterprise AI products move from pilot to production", category: "AI Strategy", read: "6 min read" },
  { title: "What a scalable SaaS architecture needs before launch", category: "SaaS", read: "8 min read" },
  { title: "The product signals that separate premium software from templates", category: "Design", read: "5 min read" }
];

export const awards = [
  "Top Enterprise AI Development Company",
  "Verified Software Engineering Partner",
  "Top Product Design and UX Studio",
  "Cloud Modernization Delivery Leader"
];

export const technologyPartners = ["AWS Partner", "Vercel Agency", "OpenAI Builders", "Stripe Experts", "MongoDB Builders", "Supabase Network"];

export const partners = ["AWS", "Vercel", "OpenAI", "Stripe", "MongoDB", "Supabase"];

export const faqs = [
  { question: "Do you work with startups and enterprise companies?", answer: "Yes. We support funded startups, scaleups, and enterprise teams with discovery, product engineering, cloud modernization, AI, and dedicated delivery pods." },
  { question: "Can you take over an existing product?", answer: "Yes. We audit the architecture, stabilize the roadmap, improve engineering practices, and modernize the platform without disrupting active users." },
  { question: "How quickly can a team start?", answer: "Most engagements begin with discovery within one week, followed by a focused delivery pod once scope, roadmap, and technical needs are clear." },
  { question: "Do you provide staff augmentation?", answer: "Yes. We provide vetted engineers, designers, QA, DevOps, AI specialists, and product leads with senior oversight." },
  { question: "How do you handle security and quality?", answer: "Security, QA, performance, accessibility, code reviews, CI/CD, and monitoring are built into our delivery process from planning onward." },
  { question: "What happens after launch?", answer: "We provide optimization, roadmap delivery, monitoring, DevOps support, analytics, and long-term product improvements." }
];

export const contactReasons = [
  { title: "Build a new product", icon: Rocket },
  { title: "Modernize legacy software", icon: Layers3 },
  { title: "Add AI to workflows", icon: Bot },
  { title: "Hire a dedicated team", icon: Handshake }
];

export const values = [
  "Enterprise thinking before code",
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

export const deliveryHighlights = [
  { title: "AI Systems", icon: BrainCircuit },
  { title: "Cloud Scale", icon: Cloud },
  { title: "Secure APIs", icon: ShieldCheck },
  { title: "Product UX", icon: Activity }
];
