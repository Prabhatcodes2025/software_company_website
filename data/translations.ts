export type LanguageCode = "en" | "hi" | "ar" | "es" | "fr";

export const languages: { code: LanguageCode; label: string; nativeLabel: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", nativeLabel: "English", dir: "ltr" },
  { code: "hi", label: "Hindi", nativeLabel: "Hindi", dir: "ltr" },
  { code: "ar", label: "Arabic", nativeLabel: "Arabic", dir: "rtl" },
  { code: "es", label: "Spanish", nativeLabel: "Spanish", dir: "ltr" },
  { code: "fr", label: "French", nativeLabel: "French", dir: "ltr" }
];

type CardText = { title: string; text: string };
type ServiceText = { title: string; summary: string; points: string[]; cta: string; outcome: string; model: string };
type CaseText = { title: string; industry: string; problem: string; solution: string; results: string; metric: string; tags: string[]; roi: string[] };
type ReviewText = { quote: string; name: string; role: string };
type FAQText = { question: string; answer: string };
type SectionKey = "services" | "industries" | "caseStudies" | "process" | "tech" | "why" | "team" | "testimonials" | "awards" | "blog" | "faq";

export type Translation = {
  nav: { services: string; industries: string; hire: string; products: string; insights: string; company: string; contactCta: string; mobileIntro: string };
  hero: { badge: string; title: string; text: string; primaryCta: string; secondaryCta: string; commandCenter: string; deliveryHealth: string; activePods: string; highlights: string[] };
  global: { eyebrow: string; title: string; text: string; trustTitle: string; regionsTitle: string; cta: string; stats: { value: string; label: string }[]; regions: string[]; badges: string[] };
  trust: { eyebrow: string; text: string };
  sections: Record<SectionKey, { eyebrow: string; title: string; text: string }>;
  services: ServiceText[];
  industries: CardText[];
  whyChooseUs: CardText[];
  processTimeline: CardText[];
  caseStudies: CaseText[];
  testimonials: ReviewText[];
  faqs: FAQText[];
  cta: { eyebrow: string; title: string; text: string; points: string[]; primary: string; secondary: string };
  contact: { eyebrow: string; title: string; text: string; name: string; email: string; phone: string; countrySearch: string; projectType: string; message: string; submit: string; phoneError: string };
  footer: { description: string; globalServices: string; regions: string; languages: string; newsletterTitle: string; newsletterText: string; emailPlaceholder: string; contact: string; rights: string; bottom: string };
  contactReasons: string[];
  projectTypes: string[];
};

const en: Translation = {
  nav: { services: "Services", industries: "Industries", hire: "Hire Developer", products: "Our Products", insights: "Insights", company: "Company", contactCta: "Book Consultation", mobileIntro: "Navigate services, teams, products, insights, and company information." },
  hero: {
    badge: "Trusted by Startups, SMEs & Enterprises Worldwide",
    title: "Turn Bold Ideas Into Digital Products Built to Lead.",
    text: "Web, mobile, AI automation and digital growth solutions for ambitious businesses worldwide.",
    primaryCta: "Book Consultation",
    secondaryCta: "View Services",
    commandCenter: "Global delivery command center",
    deliveryHealth: "Client satisfaction",
    activePods: "Global delivery pods",
    highlights: ["AI Automation", "Web Development", "App Development", "Digital Marketing"]
  },
  global: {
    eyebrow: "Serving Clients Globally",
    title: "Trusted by Startups, SMEs & Enterprises Worldwide",
    text: "A global delivery model with senior engineering pods, clear communication, and technology expertise across North America, Europe, the Middle East, and Asia-Pacific.",
    trustTitle: "International trust signals",
    regionsTitle: "Service regions",
    cta: "Build Your Digital Product With a Global Tech Partner",
    stats: [
      { value: "50+", label: "Global Clients" },
      { value: "10+", label: "Countries Served" },
      { value: "150+", label: "Projects Delivered" },
      { value: "98%", label: "Client Satisfaction" }
    ],
    regions: ["India", "United States", "United Kingdom", "UAE", "Canada", "Australia", "Singapore", "Germany", "France", "Spain", "Saudi Arabia"],
    badges: ["NDA-ready global teams", "Timezone-aligned delivery", "English-first communication", "Enterprise security mindset"]
  },
  trust: { eyebrow: "Enterprise credibility", text: "Delivery experience across regulated workflows, high-growth SaaS, commerce, logistics, cloud operations, and AI modernization programs." },
  sections: {
    services: { eyebrow: "Services", title: "Consulting-led engineering for serious digital initiatives.", text: "AI, SaaS, web, mobile, cloud, and dedicated delivery pods shaped around business risk, architecture quality, launch velocity, and measurable outcomes." },
    industries: { eyebrow: "Industries", title: "Industry-specific platforms for markets where reliability is non-negotiable.", text: "We bring reusable architecture, product insight, and compliance sensitivity to complex verticals." },
    caseStudies: { eyebrow: "Case studies", title: "Large-scale delivery with business outcomes attached.", text: "Every engagement is measured against operational lift, product adoption, conversion, and long-term platform value." },
    process: { eyebrow: "Process", title: "A delivery operating system for complex technology programs.", text: "From discovery to support, every step is structured for clarity, quality, and responsible scale." },
    tech: { eyebrow: "Technology stack", title: "Battle-tested tools for modern product ecosystems.", text: "Our teams pair proven frameworks, cloud platforms, AI tooling, and data infrastructure to ship resilient systems." },
    why: { eyebrow: "Why choose us", title: "The discipline of an enterprise partner with the speed of a product studio.", text: "Clickmyze combines senior judgment, reliable delivery rituals, and polished execution across strategy, design, engineering, cloud, and launch." },
    team: { eyebrow: "Delivery governance", title: "Senior leadership stays attached to the work.", text: "Every engagement has executive oversight across strategy, architecture, design quality, engineering velocity, risk, and launch readiness." },
    testimonials: { eyebrow: "Client validation", title: "Enterprise leaders trust Clickmyze when delivery quality is visible to the board.", text: "Feedback from product, technology, and operations leaders who needed measurable execution, secure systems, and senior ownership." },
    awards: { eyebrow: "Awards & partners", title: "Platform fluency and third-party credibility matter in enterprise delivery.", text: "Clickmyze combines ecosystem familiarity, delivery standards, and external proof signals that help buyers de-risk serious technology investments." },
    blog: { eyebrow: "Executive insights", title: "Strategic thinking for teams making high-stakes technology decisions.", text: "Practical notes from our strategy, AI, design, architecture, and engineering teams for leaders evaluating complex product investments." },
    faq: { eyebrow: "FAQ", title: "Questions leaders ask before they invest.", text: "Clear answers on delivery, architecture, AI, design, and long-term support." }
  },
  services: [
    { title: "AI Development", summary: "Production AI systems for operational teams that need governed automation, reliable data access, and measurable adoption.", points: ["LLM architecture and evaluation", "RAG and agentic workflows", "Human approval and audit trails"], cta: "Discuss AI strategy", outcome: "From pilot to governed production", model: "AI consulting + engineering" },
    { title: "SaaS Development", summary: "Multi-tenant platforms engineered for enterprise buyers, usage growth, billing complexity, permissions, and operational control.", points: ["Tenant isolation and roles", "Billing, analytics, and admin ops", "Reliability and scale planning"], cta: "Architect SaaS", outcome: "Investor and enterprise-ready platforms", model: "Product pod" },
    { title: "Web Development", summary: "High-performance portals, marketplaces, dashboards, and web applications built for conversion, security, and long-term maintainability.", points: ["Frontend architecture", "Headless and composable platforms", "SEO, accessibility, Core Web Vitals"], cta: "Modernize web", outcome: "Premium digital experiences", model: "UX + engineering" },
    { title: "Mobile Apps", summary: "Native-quality mobile products for customer engagement, field operations, internal teams, commerce, and real-time workflows.", points: ["iOS, Android, Flutter, React Native", "Secure API and identity integration", "Release, QA, and store operations"], cta: "Plan mobile delivery", outcome: "Launch-ready mobile ecosystems", model: "Mobile product squad" },
    { title: "Cloud Solutions", summary: "Cloud architecture, DevOps automation, observability, migration, and reliability programs for platforms that cannot afford downtime.", points: ["AWS architecture and migration", "CI/CD, IaC, and release control", "Monitoring, SRE, and cost visibility"], cta: "Assess cloud maturity", outcome: "Resilient, monitored infrastructure", model: "Cloud modernization" },
    { title: "Staff Augmentation", summary: "Dedicated senior engineers, architects, designers, QA, DevOps, and product specialists embedded with governance and delivery oversight.", points: ["Vetted senior specialists", "Managed pods with sprint rituals", "Executive reporting and continuity"], cta: "Build a delivery pod", outcome: "Capacity without delivery chaos", model: "Managed team extension" }
  ],
  industries: [
    { title: "Healthcare", text: "HIPAA-aware patient portals, clinical workflows, telehealth, and data products." },
    { title: "Fintech", text: "Payments, lending, wallets, digital banking, risk systems, and analytics." },
    { title: "Real Estate", text: "Property marketplaces, CRMs, investor portals, and location-based platforms." },
    { title: "Education", text: "Learning platforms, assessment tools, content systems, and AI tutors." },
    { title: "E-commerce", text: "Headless commerce, loyalty, inventory, personalization, and checkout optimization." },
    { title: "Logistics", text: "Fleet operations, tracking dashboards, vendor workflows, and route intelligence." },
    { title: "Manufacturing", text: "Production analytics, IoT dashboards, quality workflows, and automation layers." }
  ],
  whyChooseUs: [
    { title: "Enterprise Architecture", text: "Systems designed for governance, scale, integrations, and long-term maintainability." },
    { title: "Senior Delivery Pods", text: "Product strategists, architects, designers, and engineers working as one accountable unit." },
    { title: "Secure Engineering", text: "Security reviews, access models, clean APIs, and deployment practices built into delivery." },
    { title: "Fast Market Launch", text: "Accelerators, reusable components, and focused sprints that reduce time-to-market." },
    { title: "Cloud Reliability", text: "Resilient infrastructure, monitoring, DevOps automation, and performance optimization." },
    { title: "Partnership Mindset", text: "Clear communication, transparent planning, and post-launch ownership." }
  ],
  processTimeline: [
    { title: "Discovery", text: "Clarify business goals, users, risks, constraints, and success metrics." },
    { title: "Planning", text: "Define roadmap, architecture, delivery pods, budget, and launch milestones." },
    { title: "Design", text: "Create UX flows, product systems, prototypes, and enterprise-ready interfaces." },
    { title: "Development", text: "Build in focused sprints with frontend, backend, cloud, and data specialists." },
    { title: "Testing", text: "Validate quality through QA, security checks, performance tests, and reviews." },
    { title: "Deployment", text: "Launch with CI/CD, monitoring, analytics, documentation, and release control." },
    { title: "Support", text: "Scale roadmap delivery, optimization, cloud reliability, and long-term support." }
  ],
  caseStudies: [
    { title: "AI Operations Platform for Insurance", industry: "Insurance", problem: "Manual claims triage created delays, inconsistent decisions, and high operational overhead.", solution: "Built an AI document intelligence platform with human-in-the-loop review, anomaly detection, and routing automation.", results: "63% faster claim triage", metric: "$1.8M annual savings", tags: ["OpenAI", "Python", "AWS", "Secure workflows"], roi: ["18K docs/day processed", "41% fewer escalations", "9-week launch"] },
    { title: "Global Headless Commerce Rebuild", industry: "Retail", problem: "Legacy storefront performance and checkout friction limited conversion across international markets.", solution: "Replatformed to a composable Next.js commerce stack with real-time inventory and personalized journeys.", results: "42% conversion lift", metric: "2.8x faster pages", tags: ["Next.js", "Node.js", "Stripe", "Analytics"], roi: ["Sub-1s key pages", "23 markets supported", "99.95% uptime"] },
    { title: "SaaS Control Tower for Logistics", industry: "Logistics", problem: "Disconnected shipment data, billing, and vendor actions slowed operations across regions.", solution: "Delivered a multi-tenant SaaS hub with live dashboards, role-based workflows, and automated billing events.", results: "41% fewer manual tasks", metric: "6-month ROI", tags: ["SaaS", "MongoDB", "Docker", "AWS"], roi: ["12 integrations", "99.96% uptime", "31% faster dispatch"] }
  ],
  testimonials: [
    { quote: "Clickmyze operated like a strategic technology partner, not a vendor. They aligned product, architecture, security, and delivery around measurable business outcomes.", name: "Maya Chen", role: "VP Product, Finova Group" },
    { quote: "Their senior team brought discipline to a complex SaaS rebuild. The architecture decisions were clear, documented, and built for enterprise growth.", name: "Alex Morgan", role: "Chief Product Officer, B2B SaaS platform" },
    { quote: "We needed AI automation that operations, compliance, and leadership could trust. Clickmyze made it secure, measurable, and practical to adopt.", name: "Priya Shah", role: "COO, Insurance operations group" },
    { quote: "Their engineers integrated with our internal team quickly and raised our delivery standards across architecture, DevOps, and release quality.", name: "Daniel Ruiz", role: "CTO, Logistics platform" },
    { quote: "The new product experience improved conversion and gave our platform the credibility needed for enterprise sales conversations.", name: "Sofia Laurent", role: "CEO, Commerce technology company" }
  ],
  faqs: [
    { question: "Do you work with startups and enterprise companies?", answer: "Yes. We support funded startups, SMEs, scaleups, and enterprise teams with discovery, product engineering, cloud modernization, AI, and dedicated delivery pods." },
    { question: "Can you take over an existing product?", answer: "Yes. We audit the architecture, stabilize the roadmap, improve engineering practices, and modernize the platform without disrupting active users." },
    { question: "How quickly can a team start?", answer: "Most engagements begin with discovery within one week, followed by a focused delivery pod once scope, roadmap, and technical needs are clear." },
    { question: "Do you provide staff augmentation?", answer: "Yes. We provide vetted engineers, designers, QA, DevOps, AI specialists, and product leads with senior oversight." },
    { question: "How do you handle security and quality?", answer: "Security, QA, performance, accessibility, code reviews, CI/CD, and monitoring are built into our delivery process from planning onward." },
    { question: "What happens after launch?", answer: "We provide optimization, roadmap delivery, monitoring, DevOps support, analytics, and long-term product improvements." }
  ],
  cta: { eyebrow: "Enterprise consultation", title: "Ready to build your next enterprise technology platform?", text: "Start with a focused technical consultation, risk review, delivery roadmap, and senior team recommendation for your product, AI, SaaS, cloud, or modernization initiative.", points: ["Architecture review", "Delivery estimate", "90-day roadmap"], primary: "Book Executive Consultation", secondary: "See Results" },
  contact: { eyebrow: "Contact", title: "Tell us what you want to build.", text: "Share your goals, constraints, and timeline. We will respond with practical next steps and a clear path to discovery.", name: "Name", email: "Email", phone: "Phone number", countrySearch: "Search country or code", projectType: "Project type", message: "Message", submit: "Send Message", phoneError: "Enter a valid phone number." },
  footer: { description: "Global software, AI, SaaS, cloud, and mobile engineering for organizations that need accountable delivery.", globalServices: "Global services", regions: "Service regions", languages: "Languages", newsletterTitle: "Executive Briefing", newsletterText: "Receive practical notes on AI delivery, SaaS architecture, cloud modernization, and product strategy.", emailPlaceholder: "Email address", contact: "Contact", rights: "All rights reserved.", bottom: "Enterprise-ready software engineering, cloud, AI, SaaS, and product delivery." },
  contactReasons: ["Build a new product", "Modernize legacy software", "Add AI to workflows", "Hire a dedicated team"],
  projectTypes: ["Web Development", "Mobile App Development", "AI/ML", "Blockchain", "SaaS", "UI/UX"]
};

type DeepPartial<T> = { [K in keyof T]?: T[K] extends Array<infer U> ? T[K] : T[K] extends object ? DeepPartial<T[K]> : T[K] };

function withLocale(partial: DeepPartial<Translation>): Translation {
  const sections = Object.fromEntries(
    (Object.keys(en.sections) as SectionKey[]).map((key) => [key, { ...en.sections[key], ...partial.sections?.[key] }])
  ) as Translation["sections"];

  return {
    ...en,
    ...partial,
    nav: { ...en.nav, ...partial.nav },
    hero: { ...en.hero, ...partial.hero },
    global: { ...en.global, ...partial.global, stats: partial.global?.stats ?? en.global.stats, regions: partial.global?.regions ?? en.global.regions, badges: partial.global?.badges ?? en.global.badges },
    trust: { ...en.trust, ...partial.trust },
    sections,
    cta: { ...en.cta, ...partial.cta, points: partial.cta?.points ?? en.cta.points },
    contact: { ...en.contact, ...partial.contact },
    footer: { ...en.footer, ...partial.footer },
    services: partial.services ?? en.services,
    industries: partial.industries ?? en.industries,
    whyChooseUs: partial.whyChooseUs ?? en.whyChooseUs,
    processTimeline: partial.processTimeline ?? en.processTimeline,
    caseStudies: partial.caseStudies ?? en.caseStudies,
    testimonials: partial.testimonials ?? en.testimonials,
    faqs: partial.faqs ?? en.faqs,
    contactReasons: partial.contactReasons ?? en.contactReasons,
    projectTypes: partial.projectTypes ?? en.projectTypes
  };
}

export const translations: Record<LanguageCode, Translation> = {
  en,
  hi: withLocale({
    nav: { services: "Services", industries: "Industries", hire: "Hire Developer", products: "Products", insights: "Insights", company: "Company", contactCta: "Consultation Book Karein", mobileIntro: "Services, teams, products aur company information dekhein." },
    hero: { badge: "Startups, SMEs aur Enterprises Worldwide ka trusted partner", title: "Bold ideas ko market-leading digital products mein badlein.", text: "Clickmyze Technologies Pvt Ltd global leadership teams ke liye AI, SaaS, cloud, web aur mobile platforms design, modernize aur scale karta hai.", primaryCta: "Consultation Book Karein", secondaryCta: "Services Dekhein", commandCenter: "Global delivery command center", deliveryHealth: "Client satisfaction", activePods: "Global delivery pods", highlights: ["AI Automation", "Web Development", "App Development", "Digital Marketing"] },
    global: { eyebrow: "Global Clients ko Serve karte hain", title: "Startups, SMEs aur Enterprises Worldwide ke trusted partner", text: "Senior engineering pods, clear communication aur global delivery model ke saath North America, Europe, Middle East aur Asia-Pacific mein kaam.", cta: "Global Tech Partner ke saath apna digital product banayein" },
    contact: { submit: "Message Send Karein", phoneError: "Valid phone number daalein." },
    footer: { languages: "Languages", contact: "Contact" }
  }),
  ar: withLocale({
    nav: { services: "Services", industries: "Industries", hire: "Hire Developer", products: "Products", insights: "Insights", company: "Company", contactCta: "Book Consultation", mobileIntro: "Explore services, teams, products, insights and company information." },
    hero: { badge: "Trusted by Startups, SMEs & Enterprises Worldwide", title: "Turn bold ideas into digital products built to lead.", text: "Clickmyze Technologies Pvt Ltd helps global teams design, modernize and scale AI, SaaS, cloud, web and mobile platforms.", primaryCta: "Book Consultation", secondaryCta: "View Services", commandCenter: "Global delivery command center", deliveryHealth: "Client satisfaction", activePods: "Global delivery pods", highlights: ["AI Automation", "Web Development", "App Development", "Digital Marketing"] },
    global: { eyebrow: "Serving Clients Globally", title: "Trusted by Startups, SMEs & Enterprises Worldwide", text: "A global delivery model with senior engineering pods and clear communication across major regions.", cta: "Build Your Digital Product With a Global Tech Partner" }
  }),
  es: withLocale({
    nav: { services: "Servicios", industries: "Industrias", hire: "Contratar", products: "Productos", insights: "Insights", company: "Empresa", contactCta: "Reservar consulta", mobileIntro: "Explora servicios, equipos, productos, insights e informacion de la empresa." },
    hero: { badge: "Confiado por startups, pymes y empresas globales", title: "Convierte grandes ideas en productos digitales lideres.", text: "Clickmyze Technologies Pvt Ltd ayuda a equipos globales a disenar, modernizar y escalar plataformas de IA, SaaS, nube, web y moviles.", primaryCta: "Reservar consulta", secondaryCta: "Ver servicios", commandCenter: "Centro global de entrega", deliveryHealth: "Satisfaccion del cliente", activePods: "Pods globales", highlights: ["Automatizacion IA", "Desarrollo Web", "Apps Moviles", "Marketing Digital"] },
    global: { eyebrow: "Clientes globales", title: "Confiado por startups, pymes y empresas en todo el mundo", text: "Modelo global con equipos senior, comunicacion clara y experiencia tecnologica en America, Europa, Medio Oriente y Asia-Pacifico.", cta: "Construye tu producto digital con un socio tecnologico global" },
    contact: { name: "Nombre", email: "Email", phone: "Telefono", projectType: "Tipo de proyecto", message: "Mensaje", submit: "Enviar mensaje" },
    footer: { languages: "Idiomas", contact: "Contacto" }
  }),
  fr: withLocale({
    nav: { services: "Services", industries: "Secteurs", hire: "Recruter", products: "Produits", insights: "Insights", company: "Entreprise", contactCta: "Reserver une consultation", mobileIntro: "Parcourez les services, equipes, produits, insights et informations entreprise." },
    hero: { badge: "Approuve par startups, PME et entreprises mondiales", title: "Transformez vos idees en produits digitaux leaders.", text: "Clickmyze Technologies Pvt Ltd accompagne les equipes dirigeantes pour concevoir, moderniser et faire evoluer des plateformes IA, SaaS, cloud, web et mobile.", primaryCta: "Reserver une consultation", secondaryCta: "Voir les services", commandCenter: "Centre de livraison mondial", deliveryHealth: "Satisfaction client", activePods: "Pods mondiaux", highlights: ["Automatisation IA", "Developpement Web", "Applications Mobiles", "Marketing Digital"] },
    global: { eyebrow: "Clients mondiaux", title: "Approuve par startups, PME et entreprises dans le monde", text: "Un modele de livraison mondial avec des equipes seniors, une communication claire et une expertise en Amerique, Europe, Moyen-Orient et Asie-Pacifique.", cta: "Construisez votre produit digital avec un partenaire tech mondial" },
    contact: { name: "Nom", email: "Email", phone: "Telephone", projectType: "Type de projet", message: "Message", submit: "Envoyer" },
    footer: { languages: "Langues", contact: "Contact" }
  })
};
