import { Bot, Braces, Building2, ChartNoAxesCombined, Code2, GraduationCap, HeartPulse, Hotel, Layers3, Megaphone, PlugZap, Search, ShoppingBag, Smartphone, Workflow } from "lucide-react";

export const company = {
  name: "LetsFygure Technology",
  shortName: "LetsFygure",
  tagline: "Figured Out.",
  url: "https://clickmyze-three.vercel.app",
  phone: "+91 78692 51729",
  whatsapp: "https://wa.me/917869251729",
  instagram: "https://www.instagram.com/letsfygure/",
  clutch: "https://clutch.co/profile/letsfygure-0",
};

export const navItems = [
  { href: "/services", label: "Services" }, { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Work" }, { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" }, { href: "/contact", label: "Contact" },
];

export const services = [
  { slug: "web-development", title: "Web Development", short: "Fast, accessible websites and web applications designed around business goals.", intro: "We design and build responsive marketing sites, customer portals and web applications that are easy to use, maintain and scale.", problem: "Slow pages, fragile code and unclear journeys cost attention and make every future change harder.", benefits: ["Clear conversion journeys", "Strong Core Web Vitals foundations", "Maintainable, scalable architecture"], capabilities: ["Corporate and marketing websites", "Web applications and portals", "Headless CMS builds", "Performance and accessibility engineering"], stack: ["React", "Next.js", "TypeScript", "Node.js", "WordPress", "Vercel"], icon: Code2, category: "Engineering" },
  { slug: "mobile-app-development", title: "Mobile App Development", short: "Thoughtful mobile products for customers, teams and field operations.", intro: "From product definition to store-ready delivery, we build mobile experiences that feel focused, reliable and natural on every screen.", problem: "Mobile products fail when feature lists outrun user needs, performance or a sustainable release plan.", benefits: ["Consistent cross-platform experience", "Secure API integration", "Release-ready quality assurance"], capabilities: ["Product strategy", "iOS and Android experiences", "Cross-platform application development", "Maintenance and iteration"], stack: ["React Native", "JavaScript", "TypeScript", "REST APIs", "Node.js"], icon: Smartphone, category: "Engineering" },
  { slug: "custom-software-development", title: "Custom Software Development", short: "Software shaped around your workflows, customers and operating model.", intro: "We translate complex requirements into dependable business software, from internal operations tools to multi-role platforms.", problem: "Off-the-shelf tools often force teams into workarounds, duplicate data and manual coordination.", benefits: ["Workflows aligned to your business", "Connected operational data", "A foundation built to evolve"], capabilities: ["SaaS platforms", "Operations dashboards", "CRM and ERP workflows", "Legacy modernization"], stack: ["React", "Next.js", "Node.js", "PHP", "PostgreSQL", "MySQL"], icon: Braces, category: "Engineering" },
  { slug: "ai-development", title: "AI Development", short: "Practical AI products grounded in real tasks, data and human oversight.", intro: "We build assistants, knowledge tools and AI-enabled product features that fit existing systems and support accountable decisions.", problem: "AI experiments create little value when they are disconnected from trusted data and day-to-day work.", benefits: ["Use cases tied to operations", "Human review where it matters", "Integration with existing tools"], capabilities: ["AI agents", "Knowledge assistants", "AI chatbots", "Document and content workflows"], stack: ["AI APIs", "Node.js", "Python", "Vector search", "REST APIs"], icon: Bot, category: "AI & Automation" },
  { slug: "ai-automation", title: "AI & Business Automation", short: "Connected workflows that reduce repetitive effort and keep teams in control.", intro: "We map repetitive processes, connect the right systems and introduce automation where it can improve speed and consistency.", problem: "Manual handoffs and disconnected tools create avoidable delays, errors and poor visibility.", benefits: ["Fewer repetitive steps", "Clearer operational visibility", "Consistent process execution"], capabilities: ["Lead automation", "Workflow orchestration", "Internal AI tools", "Business process automation"], stack: ["Webhooks", "AI APIs", "Node.js", "CRM APIs", "Custom integrations"], icon: Workflow, category: "AI & Automation" },
  { slug: "ui-ux-design", title: "UI/UX & Product Design", short: "Clear product experiences that make complex workflows feel simple.", intro: "We connect research, user journeys, interaction design and a scalable visual system before development begins.", problem: "Products become expensive to use and change when the experience has no clear hierarchy or shared design language.", benefits: ["Faster product decisions", "More coherent customer journeys", "Reusable design foundations"], capabilities: ["UX discovery", "User flows and wireframes", "Interface design", "Design systems and prototypes"], stack: ["Figma", "Design systems", "Interactive prototypes", "Accessibility reviews"], icon: Layers3, category: "Experience" },
  { slug: "ecommerce-development", title: "eCommerce Development", short: "Commerce experiences built for confident discovery and smoother purchase journeys.", intro: "We build responsive storefronts, product experiences and connected commerce workflows for growing brands.", problem: "A confusing catalog, slow storefront or fragmented back office makes growth harder to sustain.", benefits: ["Friction-aware shopping journeys", "Flexible content operations", "Connected payments and business tools"], capabilities: ["Custom storefronts", "WooCommerce development", "Checkout and payment integration", "Catalog and inventory workflows"], stack: ["WooCommerce", "WordPress", "React", "Payment APIs", "Analytics"], icon: ShoppingBag, category: "Engineering" },
  { slug: "seo", title: "SEO Services", short: "Technical and content foundations that help the right customers find you.", intro: "We align site architecture, technical health and useful content with the questions your market is already asking.", problem: "Search visibility stalls when technical issues, thin content and unclear intent are treated as separate problems.", benefits: ["Stronger crawl and index foundations", "Clear commercial content structure", "Measurement tied to useful actions"], capabilities: ["Technical SEO", "On-page optimization", "Content architecture", "Search performance reporting"], stack: ["Search Console", "Analytics", "Schema.org", "Core Web Vitals"], icon: Search, category: "Growth" },
  { slug: "digital-marketing", title: "Performance & Social Marketing", short: "Campaigns, content and measurement connected to business intent.", intro: "We plan and operate focused digital campaigns that bring creative, landing pages and performance data into one feedback loop.", problem: "Activity without a clear audience, offer and measurement model creates noise instead of demand.", benefits: ["Clear campaign objectives", "Consistent cross-channel execution", "Practical reporting and iteration"], capabilities: ["Performance marketing", "Social media strategy", "Campaign landing pages", "Creative and reporting"], stack: ["Meta Ads", "Google Ads", "Analytics", "Content systems"], icon: Megaphone, category: "Growth" },
  { slug: "api-integrations", title: "API & Third-Party Integrations", short: "Reliable connections between the tools your business depends on.", intro: "We integrate payment, CRM, communications, analytics and operational platforms into dependable workflows.", problem: "Disconnected systems create duplicate work, inconsistent records and a fragmented customer experience.", benefits: ["Cleaner data movement", "Fewer manual handoffs", "Better system visibility"], capabilities: ["REST API development", "Payment and CRM integrations", "Webhook automation", "Integration monitoring"], stack: ["REST", "Webhooks", "Node.js", "OAuth", "PostgreSQL"], icon: PlugZap, category: "Enterprise" },
];

export const industries = [
  { title: "Real Estate", icon: Building2, text: "Property discovery, enquiry workflows, CRMs and digital experiences for buyers, agents and operators." },
  { title: "Healthcare", icon: HeartPulse, text: "Accessible patient-facing experiences and operational tools designed with privacy and clarity in mind." },
  { title: "Education", icon: GraduationCap, text: "Learning portals, content platforms and administration workflows for educators and learners." },
  { title: "Travel & Hospitality", icon: Hotel, text: "Booking journeys, service platforms and operational tools that connect guests with teams." },
  { title: "eCommerce & Retail", icon: ShoppingBag, text: "Storefronts and connected commerce workflows built for product discovery and repeatable operations." },
  { title: "Professional Services", icon: ChartNoAxesCombined, text: "Lead, client and delivery systems that help service businesses operate with greater visibility." },
  { title: "IT & SaaS", icon: Code2, text: "Product design, engineering and integration support for software teams moving from concept to scale." },
  { title: "Operations & Enterprise", icon: Workflow, text: "Custom tools and automation for complex approvals, data flows and multi-team processes." },
];

export const caseStudies = [
  { title: "Connected HR services experience", industry: "Business services", services: ["Web Development", "Mobile App Development", "Social Media Marketing"], challenge: "An HR services company needed a more coherent digital presence and easier access to its services across web and mobile.", solution: "LetsFygure brought website, mobile experience and social execution together under one coordinated delivery team.", outcome: "A stronger digital presence, improved service accessibility and a smoother enquiry flow.", source: "Verified Clutch review" },
  { title: "Scalable business platform delivery", industry: "Custom software", services: ["Product Design", "Custom Software", "API Integration"], challenge: "The client needed a tailored system that could reflect its process instead of forcing teams into disconnected tools.", solution: "The engagement combined interface design, application development and connected business workflows.", outcome: "A more consistent operating experience with a foundation that can evolve as requirements change.", source: "Portfolio summary" },
  { title: "Commerce journey modernization", industry: "eCommerce", services: ["UX Design", "eCommerce Development", "SEO"], challenge: "Product discovery, content management and enquiry paths needed to work together more clearly on mobile and desktop.", solution: "LetsFygure restructured the experience around customer intent, responsive storefront patterns and manageable content.", outcome: "A clearer customer journey, simpler content operations and a stronger platform for ongoing optimization.", source: "Portfolio summary" },
];

export const process = [
  ["01", "Discover", "Business goals, users, requirements and constraints."], ["02", "Define", "Scope, architecture, priorities and user journeys."],
  ["03", "Design", "UX, visual direction and interactive prototypes."], ["04", "Develop", "Frontend, backend, APIs and integrations."],
  ["05", "Validate", "Quality, performance, accessibility and device testing."], ["06", "Launch & Scale", "Deployment, measurement and continuous improvement."],
];

export const technologies = { Frontend: ["React", "Next.js", "TypeScript", "JavaScript"], Backend: ["Node.js", "Express", "PHP"], "Data & Cloud": ["PostgreSQL", "MySQL", "Supabase", "Vercel"], "CMS & Commerce": ["WordPress", "WooCommerce"], "AI & Integration": ["AI APIs", "REST APIs", "Webhooks"] };

export const faqs = [
  ["What kinds of businesses do you work with?", "We work with startups, SMEs, growing companies and enterprise teams in India and international markets. The delivery model is shaped around the product, risk and team involved."],
  ["Can you improve an existing product?", "Yes. We can assess an existing website, app or software platform, identify the highest-value improvements and modernize it in planned stages."],
  ["Do you provide design and development together?", "Yes. Product strategy, UI/UX, engineering, integrations, launch support and growth services can work as one engagement or as focused workstreams."],
  ["How do projects begin?", "We start with a conversation about the business goal, users, current systems, constraints and timeline. From there, we recommend a practical scope and delivery path."],
  ["Do you support products after launch?", "Yes. Ongoing support can include monitoring, maintenance, feature development, performance work, SEO and conversion optimization."],
];

export const insights = [
  { title: "Where AI automation creates practical value first", category: "AI & Automation", text: "A framework for finding repetitive, rules-heavy work where AI can assist without removing necessary human judgment." },
  { title: "Planning a custom software project around outcomes", category: "Product Strategy", text: "How to turn business constraints, user needs and operational realities into a focused first release." },
  { title: "The performance details that shape a better web experience", category: "Web Engineering", text: "Why loading behavior, interface responsiveness and visual stability matter to customers as much as visual polish." },
];

export const megaGroups = [
  { title: "Engineering", slugs: ["web-development", "mobile-app-development", "custom-software-development", "ecommerce-development"] },
  { title: "AI & Automation", slugs: ["ai-development", "ai-automation"] },
  { title: "Experience & Growth", slugs: ["ui-ux-design", "seo", "digital-marketing"] },
  { title: "Enterprise", slugs: ["api-integrations"] },
];
