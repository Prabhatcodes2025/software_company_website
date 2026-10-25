import { Bot, Braces, Building2, Code2, HardHat, Landmark, Layers3, Megaphone, PlaneTakeoff, PlugZap, Search, ShoppingBag, Smartphone, UsersRound, Workflow } from "lucide-react";

export const company = {
  name: "LetsFygure",
  shortName: "LetsFygure",
  tagline: "Technology , Figured Out",
  url: "https://clickmyze-three.vercel.app",
  phone: "+91 78692 51729",
  email: "info@letsfygure.com",
  address: "124, Ashoka Garden, Bhopal, India",
  whatsapp: "https://wa.me/917869251729",
  instagram: "https://www.instagram.com/letsfygure/",
  linkedin: "https://www.linkedin.com/company/letsfygure/",
  clutch: "https://clutch.co/profile/letsfygure-0",
};

export const navItems = [
  { href: "/services", label: "Services" }, { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" },
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
  { title: "Real Estate & PropTech", icon: Building2, text: "Property discovery, listing operations, owner portals and enquiry routing." },
  { title: "Travel & Adventure", icon: PlaneTakeoff, text: "Tour discovery, itineraries, booking intent and partner workflows." },
  { title: "Recruitment & Workforce", icon: UsersRound, text: "Candidate applications, employer enquiries and international service journeys." },
  { title: "Finance & Advisory", icon: Landmark, text: "High-trust service discovery, educational content and consultation journeys." },
  { title: "Construction & Infrastructure", icon: HardHat, text: "Capability showcases, project presentation and business enquiry systems." },
  { title: "eCommerce & Retail", icon: ShoppingBag, text: "Storefronts and commerce workflows built for confident discovery and operation." },
  { title: "SaaS & Digital Products", icon: Code2, text: "Multi-role applications, product systems and integration-ready foundations." },
  { title: "Operations & Enterprise", icon: Workflow, text: "Custom workflows, approvals, integrations and accountable automation." },
];

export const caseStudies = [
  { slug: "ongole-property", client: "Ongole Property", url: "https://www.ongoleproperty.com/", title: "Custom Real Estate Marketplace Platform", industry: "Real Estate / PropTech", services: ["Next.js", "Supabase", "Role-based workflows"], features: ["Property discovery and filtering", "Owner and operator workspaces", "Listing approval and enquiry workflows"], technology: ["Next.js", "Supabase"], challenge: "Property seekers, owners and operators needed one marketplace for discovery, listings and managed enquiries.", solution: "A multi-role property platform with search, owner and operator workspaces, listing approvals and administrative workflows.", outcome: "A clearer digital path from property discovery to qualified enquiry, supported by role-aware operations.", source: "Owner-supplied project scope" },
  { slug: "naystrip", client: "Naystrip", url: "https://naystrip.com/", title: "Custom Travel Booking & B2B Platform", industry: "Travel Technology", services: ["Web Development", "Tour CMS", "Booking workflows"], features: ["Tour and destination discovery", "Detailed itinerary content", "Customer and B2B partner enquiries"], technology: [], challenge: "Travel discovery, itinerary content and partner enquiries needed to work as one coherent customer journey.", solution: "A responsive travel platform connecting packages, destinations, itinerary content, enquiries and partner-facing capabilities.", outcome: "A focused foundation for travel discovery, customer engagement and managed booking workflows.", source: "Owner-supplied project scope" },
  { slug: "mozno-wealth", client: "Mozno Wealth", url: "https://mozno.in/", title: "Custom Financial Advisory & Wealth Platform", industry: "Finance / Wealth Management", services: ["Product Design", "Web Development", "Technical SEO"], features: ["Structured advisory service discovery", "Consultation booking journeys", "Editorial insights and financial tools"], technology: [], challenge: "A financial advisory business needed a high-trust digital experience for explaining services and starting consultations.", solution: "A responsive advisory website with structured service discovery, clear consultation paths and an editorial content foundation.", outcome: "A more credible, accessible route for prospective clients to understand services and request a consultation.", source: "Owner-supplied project scope" },
  { slug: "snow-feather-adventure", client: "Snow Feather Adventure", url: "https://www.snowfeatheradventure.com/", title: "Adventure Travel & Trekking Platform Development", industry: "Adventure Tourism", services: ["Responsive Platform", "Package Presentation", "SEO Architecture"], features: ["Destination and package discovery", "Itinerary and accommodation presentation", "Gallery, enquiry and direct contact journeys"], technology: [], challenge: "Travellers needed to compare destinations, itineraries and adventure packages without losing the human story behind each trip.", solution: "A mobile-first travel experience for trekking packages, destinations, galleries, itineraries and enquiry workflows.", outcome: "A structured discovery experience that makes complex adventure offerings easier to explore and enquire about.", source: "Owner-supplied project scope" },
  { slug: "rs-constructions", client: "RS Constructions Company", url: "https://www.rsconstructionscompany.com/", title: "Custom Website & Construction Business Platform", industry: "Construction & Infrastructure", services: ["Responsive UI", "Web Development", "Performance"], features: ["Service and project presentation", "Construction package comparison", "Estimate and consultation journeys"], technology: [], challenge: "The company needed a professional digital presence capable of presenting services, projects and enquiries clearly.", solution: "A custom responsive corporate site with structured project presentation and direct enquiry journeys.", outcome: "A stronger digital business profile and a simpler path for prospective clients to assess services and make contact.", source: "Owner-supplied project scope" },
  { slug: "continental-mercantile", client: "Continental Mercantile Corporation", url: "https://www.continentalmanpower.com/", title: "Custom Global Recruitment Platform", industry: "Recruitment & Workforce Solutions", services: ["Web Development", "Application Flows", "Technical SEO"], features: ["Candidate application journeys", "Employer requirement submission", "Global operations and recruitment process content"], technology: [], challenge: "International recruitment services, candidate journeys and employer enquiries needed a clearer shared platform.", solution: "A responsive recruitment website covering global operations, services, candidate applications and employer enquiry flows.", outcome: "A clearer, more accessible service experience for candidates and employers across international markets.", source: "Owner-supplied scope; related delivery is supported by a verified Clutch review" },
];

export const companyStats = [
  { value: "Since 2023", label: "Owner-confirmed start" },
  { value: "50+", label: "Projects delivered" },
  { value: "40+", label: "Clients served" },
  { value: "3+", label: "Countries served" },
  { value: "5+", label: "Professionals" },
  { value: "5.0", label: "Clutch rating" },
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
