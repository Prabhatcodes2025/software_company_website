export type ServiceDetail = {
  promise: string;
  outcomes: string[];
  deliverables: { title: string; text: string }[];
  architecture: string[];
  standards: string[];
  relatedCases: string[];
  relatedIndustries: string[];
  faqs: [string, string][];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "web-development": {
    promise: "A fast, accessible web experience with a content and code foundation your team can keep improving.",
    outcomes: ["Reduce friction between discovery and enquiry", "Make performance and accessibility part of delivery", "Give content teams a maintainable publishing path"],
    deliverables: [{ title: "Experience architecture", text: "Page hierarchy, user journeys, content models and conversion paths." }, { title: "Frontend system", text: "Responsive components, interaction states and accessible UI patterns." }, { title: "Content integration", text: "CMS or structured content workflows selected for the operating team." }, { title: "Release quality", text: "Cross-device QA, technical SEO, performance work and deployment support." }],
    architecture: ["Visitor", "Next.js / React UI", "CMS or application API", "Content and business data", "Edge delivery"],
    standards: ["Semantic HTML", "WCAG-aware interaction", "Responsive images", "Core Web Vitals foundations", "Structured metadata"],
    relatedCases: ["snow-feather-adventure", "rs-constructions", "mozno-wealth"], relatedIndustries: ["Travel", "Construction", "Finance"],
    faqs: [["Can you rebuild without losing search visibility?", "Yes. We map existing URLs, metadata and valuable content before changing the structure, then plan redirects and validation around the release."], ["Can our team update the site?", "Yes. The content model and editing experience are selected around the people who will operate the site after launch."], ["Do you work on an existing codebase?", "Yes. We begin with a technical audit and recommend staged improvement when a full rebuild is unnecessary."]],
  },
  "mobile-app-development": {
    promise: "A focused mobile product shaped around real usage, resilient APIs and a release plan that can evolve.",
    outcomes: ["Prioritize the smallest useful release", "Create consistent iOS and Android journeys", "Connect mobile interactions to dependable backend services"],
    deliverables: [{ title: "Product definition", text: "User roles, critical tasks, offline needs and release priorities." }, { title: "Mobile experience", text: "Native-feeling navigation, state handling and accessible touch interactions." }, { title: "API integration", text: "Authentication, data synchronization, notifications and error recovery." }, { title: "Release readiness", text: "Device QA, store assets, build configuration and rollout support." }],
    architecture: ["iOS / Android user", "React Native application", "Secure API layer", "Business services", "Data and notifications"],
    standards: ["Touch target discipline", "Loading and empty states", "Secure token handling", "Device-matrix QA", "Release observability"],
    relatedCases: ["continental-mercantile"], relatedIndustries: ["Recruitment", "Travel", "Operations"],
    faqs: [["Native or cross-platform?", "We choose after reviewing device capabilities, release cadence, budget and the experience users need. Cross-platform is not treated as an automatic default."], ["Can the app use our existing backend?", "Usually, after the API contract, authentication model and failure behavior have been assessed."], ["Do you support store submission?", "Release preparation and submission support can be included; store approval remains controlled by Apple and Google."]],
  },
  "custom-software-development": {
    promise: "Purpose-built software that reflects your roles, rules and workflows instead of forcing them into generic tools.",
    outcomes: ["Replace fragmented spreadsheets and handoffs", "Create one accountable operational view", "Build a modular foundation for measured expansion"],
    deliverables: [{ title: "Domain model", text: "Roles, entities, permissions, lifecycle states and business rules." }, { title: "Operational UX", text: "Dashboards and task flows optimized for repeated daily work." }, { title: "Application services", text: "APIs, background jobs, integrations and notification workflows." }, { title: "Control layer", text: "Administration, auditability, validation and role-based access." }],
    architecture: ["Role-based interfaces", "Application services", "Authorization policies", "Relational data", "Jobs and integrations"],
    standards: ["Least-privilege access", "Traceable state changes", "Schema migrations", "Automated validation", "Operational documentation"],
    relatedCases: ["ongole-property", "naystrip"], relatedIndustries: ["Real Estate", "Travel", "Operations"],
    faqs: [["How do you control scope?", "We model the workflows and release boundaries before estimating. Features are tied to a role, decision or measurable operating need."], ["Can you build multi-role applications?", "Yes. Role boundaries, authorization and data visibility are designed explicitly rather than added after the interface."], ["What happens after version one?", "The release plan separates immediate operating value from later automation, analytics and integration work."]],
  },
  "ai-development": {
    promise: "AI assistance grounded in trusted context, explicit evaluation and human review where decisions matter.",
    outcomes: ["Tie AI behavior to a defined operational task", "Keep source context and review visible", "Measure quality before scaling automation"],
    deliverables: [{ title: "Use-case framing", text: "Task boundaries, risk, source data, expected outputs and evaluation criteria." }, { title: "Context system", text: "Retrieval, prompt contracts, source references and permission-aware access." }, { title: "Human review", text: "Approval, correction and escalation paths for consequential outputs." }, { title: "Evaluation loop", text: "Test sets, quality signals, error analysis and monitored iteration." }],
    architecture: ["User task", "Application guardrails", "Context retrieval", "AI model", "Human approval", "Business action"],
    standards: ["Source-aware responses", "Input/output limits", "PII-conscious design", "Evaluation datasets", "Fallback handling"],
    relatedCases: [], relatedIndustries: ["Professional Services", "SaaS", "Operations"],
    faqs: [["Do you train a model from scratch?", "Usually no. Most business cases are better served by securely combining established models with controlled context, application logic and evaluation."], ["Can AI act without approval?", "Only when the task and risk justify it. High-impact actions should keep explicit human review or deterministic controls."], ["How is quality measured?", "We define representative test cases and review usefulness, grounding, error modes and safe failure behavior before broader use."]],
  },
  "ai-automation": {
    promise: "Reliable orchestration that combines deterministic workflows, AI assistance and clear exception handling.",
    outcomes: ["Remove repetitive routing and re-entry", "Keep people in control of exceptions", "Expose workflow status instead of creating a black box"],
    deliverables: [{ title: "Process map", text: "Triggers, decisions, systems, ownership and exception paths." }, { title: "Orchestration", text: "Webhooks, queues, scheduled jobs and integration contracts." }, { title: "AI assistance", text: "Classification, extraction or drafting where probabilistic output is appropriate." }, { title: "Operations view", text: "Status, retries, human review and actionable failure reporting." }],
    architecture: ["Trigger", "Validation", "Workflow engine", "AI assist", "Human exception", "System update"],
    standards: ["Idempotent actions", "Retry discipline", "Human override", "Failure visibility", "Audit-friendly events"],
    relatedCases: [], relatedIndustries: ["Recruitment", "Professional Services", "Operations"],
    faqs: [["What should be automated first?", "Start with frequent, rules-heavy work that has clear inputs, outputs and an accountable owner."], ["How do you handle AI errors?", "By limiting the task, validating deterministic rules, exposing source context and routing uncertain outputs to human review."], ["Can this connect to our current tools?", "Often yes, when APIs or safe export/import paths exist. Integration feasibility is checked during discovery."]],
  },
  "ui-ux-design": {
    promise: "A product experience that makes roles, decisions and complex workflows feel coherent before development accelerates.",
    outcomes: ["Align teams around visible user journeys", "Find interaction risk before engineering", "Create reusable patterns for consistent growth"],
    deliverables: [{ title: "Discovery synthesis", text: "Goals, roles, tasks, constraints and product principles." }, { title: "Information architecture", text: "Navigation, hierarchy, flows and content relationships." }, { title: "Interface system", text: "Responsive screens, states, components and accessibility behaviors." }, { title: "Prototype and handoff", text: "Testable interactions, specifications and engineering collaboration." }],
    architecture: ["User context", "Task model", "Information architecture", "Interaction patterns", "Design system"],
    standards: ["Content-first hierarchy", "Keyboard-aware states", "Responsive behavior", "Error and empty states", "Reusable components"],
    relatedCases: ["mozno-wealth", "ongole-property"], relatedIndustries: ["Finance", "Real Estate", "SaaS"],
    faqs: [["Do you design before development?", "We validate the riskiest journeys first, then keep design and engineering connected as real constraints become visible."], ["Will we receive a design system?", "For products that need repeatable UI, we define shared tokens, components and interaction guidance at the appropriate depth."], ["Can you improve an existing interface?", "Yes. We can audit the current product and prioritize usability, consistency and accessibility improvements."]],
  },
  "ecommerce-development": {
    promise: "A commerce system that connects discovery, buying confidence, checkout and the operational work behind every order.",
    outcomes: ["Make catalog discovery clearer", "Reduce avoidable checkout friction", "Connect content, payment and operational workflows"],
    deliverables: [{ title: "Commerce architecture", text: "Catalog, variants, pricing, content, account and order relationships." }, { title: "Storefront UX", text: "Search, filters, product detail, basket and checkout journeys." }, { title: "Business integration", text: "Payment, shipping, inventory, analytics and communication services." }, { title: "Operations", text: "Manageable content, order states, error handling and reporting foundations." }],
    architecture: ["Shopper", "Storefront", "Commerce engine", "Payment and fulfilment", "Analytics"],
    standards: ["Fast product pages", "Accessible checkout", "Payment-safe boundaries", "Structured product data", "Event measurement"],
    relatedCases: [], relatedIndustries: ["eCommerce & Retail", "Consumer Services"],
    faqs: [["WooCommerce or custom commerce?", "The choice depends on catalog complexity, operational integrations, content needs and how much custom behavior is genuinely required."], ["Do you integrate payments?", "Yes, using provider-supported server-side patterns. Merchant onboarding and production credentials remain with the client."], ["Can you improve an existing store?", "Yes. We can prioritize performance, discoverability, checkout and maintainability without replacing what already works."]],
  },
  seo: {
    promise: "A search foundation built from crawlable architecture, useful content and measurable customer intent.",
    outcomes: ["Make important content easier to discover and understand", "Remove technical barriers to crawling and rendering", "Connect search work to meaningful business actions"],
    deliverables: [{ title: "Technical audit", text: "Indexation, rendering, internal links, canonicals, schema and performance." }, { title: "Search architecture", text: "Intent mapping, page roles, hierarchy and content gaps." }, { title: "Page improvement", text: "Metadata, headings, structured content and useful internal links." }, { title: "Measurement", text: "Search Console and analytics views tied to qualified actions." }],
    architecture: ["Search demand", "Information architecture", "Crawl and render", "Useful page", "Measured action"],
    standards: ["No doorway content", "Unique page purpose", "Canonical discipline", "Schema accuracy", "Measured changes"],
    relatedCases: ["snow-feather-adventure", "mozno-wealth", "continental-mercantile"], relatedIndustries: ["Travel", "Finance", "Recruitment"],
    faqs: [["Do you guarantee rankings?", "No responsible provider can guarantee a position. We improve the technical and content conditions that support qualified organic discovery."], ["Is SEO included in web development?", "Technical foundations are included in quality web delivery; ongoing research, content and measurement can be a separate workstream."], ["How quickly will results appear?", "Timing varies by competition, site history, implementation pace and the value of the content. We report verified movement, not invented forecasts."]],
  },
  "digital-marketing": {
    promise: "Campaign systems where audience, message, landing experience and measurement work as one feedback loop.",
    outcomes: ["Make campaign intent explicit", "Connect creative to focused landing journeys", "Use reporting to improve decisions rather than inflate activity"],
    deliverables: [{ title: "Campaign model", text: "Audience, offer, channel role, conversion action and test plan." }, { title: "Creative system", text: "Messaging angles and adaptable assets for selected channels." }, { title: "Landing experience", text: "Focused pages aligned with campaign intent and measurement." }, { title: "Learning loop", text: "Clean events, reporting context and practical iteration." }],
    architecture: ["Audience", "Message", "Channel", "Landing experience", "Qualified action", "Learning"],
    standards: ["Consent-aware tracking", "Clear attribution limits", "No vanity-only reporting", "Consistent messaging", "Documented experiments"],
    relatedCases: [], relatedIndustries: ["Professional Services", "Travel", "eCommerce & Retail"],
    faqs: [["Which channels do you manage?", "Channel selection follows audience and offer. Current capability includes Google and Meta campaign work plus supporting landing experiences."], ["Do you guarantee leads or revenue?", "No. We define controllable inputs, measurement and learning goals without promising outcomes that depend on the market and sales process."], ["Can you build the landing pages too?", "Yes. Connecting campaign message, page experience and analytics is often the highest-value part of the engagement."]],
  },
  "api-integrations": {
    promise: "Observable, secure connections between the systems your customers and teams already depend on.",
    outcomes: ["Reduce duplicate entry and manual handoffs", "Make failures visible and recoverable", "Protect credentials and system boundaries"],
    deliverables: [{ title: "Integration contract", text: "Data ownership, API limits, authentication and failure expectations." }, { title: "Service layer", text: "Validated requests, transformations and controlled credential use." }, { title: "Event processing", text: "Webhooks, idempotency, retries and background work." }, { title: "Operations", text: "Logs, status tracking, alerts and support documentation." }],
    architecture: ["Source system", "Authenticated connector", "Validation and mapping", "Queue / retry", "Destination system"],
    standards: ["Secrets stay server-side", "Signature verification", "Idempotency keys", "Bounded retries", "Useful error telemetry"],
    relatedCases: ["ongole-property", "naystrip"], relatedIndustries: ["Real Estate", "Travel", "Operations"],
    faqs: [["Can you connect a system without an API?", "Sometimes through supported exports or automation, but we will not rely on brittle scraping when a dependable integration is not possible."], ["How are credentials protected?", "Secrets stay in server-side environment configuration and access is limited to the integration path that needs them."], ["What happens when a provider is unavailable?", "The design can include queued work, bounded retries, idempotency and visible failure states appropriate to the business risk."]],
  },
};

export const industryProfiles = [
  { slug: "real-estate", title: "Real Estate & PropTech", number: "01", thesis: "Turn fragmented listings and enquiries into a role-aware property journey.", solutions: ["Property discovery and filters", "Owner and operator portals", "Listing approvals and promotions", "CRM and enquiry routing"], caseSlugs: ["ongole-property"], flow: ["Discover", "Compare", "Enquire", "Route", "Manage"] },
  { slug: "travel", title: "Travel & Adventure", number: "02", thesis: "Connect inspiration, itinerary detail, booking intent and partner operations.", solutions: ["Destination and package discovery", "Itinerary and tour CMS", "Enquiry and booking workflows", "B2B partner capabilities"], caseSlugs: ["naystrip", "snow-feather-adventure"], flow: ["Explore", "Plan", "Enquire", "Book", "Operate"] },
  { slug: "recruitment", title: "Recruitment & Workforce", number: "03", thesis: "Give candidates and employers a clear route through complex workforce services.", solutions: ["Candidate application journeys", "Employer enquiry routing", "International service architecture", "Recruitment content systems"], caseSlugs: ["continental-mercantile"], flow: ["Understand", "Apply", "Qualify", "Coordinate", "Respond"] },
  { slug: "finance", title: "Finance & Advisory", number: "04", thesis: "Build trust through clear service discovery and carefully handled consultation journeys.", solutions: ["Advisory service architecture", "Consultation enquiries", "Educational content systems", "Privacy-conscious forms"], caseSlugs: ["mozno-wealth"], flow: ["Learn", "Assess", "Consult", "Follow up"] },
  { slug: "construction", title: "Construction & Infrastructure", number: "05", thesis: "Present capability, projects and business enquiries with professional clarity.", solutions: ["Corporate service platforms", "Project and capability showcases", "Enquiry workflows", "Performance and technical SEO"], caseSlugs: ["rs-constructions"], flow: ["Verify", "Explore", "Evaluate", "Enquire"] },
  { slug: "commerce", title: "eCommerce & Retail", number: "06", thesis: "Connect confident product discovery with dependable commerce operations.", solutions: ["Catalog and search", "Product detail systems", "Checkout and payment integration", "Order and content workflows"], caseSlugs: [], flow: ["Discover", "Decide", "Purchase", "Fulfil"] },
  { slug: "saas", title: "SaaS & Digital Products", number: "07", thesis: "Move from product hypothesis to a maintainable multi-role application.", solutions: ["MVP definition", "Authentication and permissions", "Admin and customer workspaces", "Subscription-ready architecture"], caseSlugs: ["ongole-property"], flow: ["Define", "Validate", "Build", "Measure", "Evolve"] },
  { slug: "operations", title: "Operations & Enterprise", number: "08", thesis: "Replace hidden handoffs with visible workflows, integrations and control.", solutions: ["Operations dashboards", "Approval workflows", "API integrations", "Automation and exception handling"], caseSlugs: [], flow: ["Trigger", "Validate", "Assign", "Approve", "Record"] },
];

export const insightArticles = [
  { slug: "ai-automation-human-approval", title: "Where AI automation creates practical value first", category: "AI & Automation", summary: "A framework for finding repetitive, rules-heavy work where AI can assist without removing necessary human judgment.", readTime: "6 min", sections: [{ heading: "Start with a bounded decision", body: "Good first use cases have a recognizable input, a useful output and a person who already owns the decision. Classification, extraction and drafting often fit better than open-ended autonomy." }, { heading: "Design the exception path", body: "Confidence thresholds, source context and human approval are product features. They make uncertain output visible and give the workflow somewhere safe to go when automation should stop." }, { heading: "Measure usefulness, not novelty", body: "Create a representative test set and review accuracy, time saved, corrections and failure modes before expanding the workflow." }] },
  { slug: "custom-software-outcomes", title: "Planning a custom software project around outcomes", category: "Product Strategy", summary: "How to turn business constraints, user needs and operational realities into a focused first release.", readTime: "7 min", sections: [{ heading: "Model the work before the screens", body: "Name the roles, decisions, records and lifecycle states that make the process real. This prevents a polished interface from hiding an incomplete operating model." }, { heading: "Separate the first release from the wish list", body: "A first release should complete a valuable workflow end to end. Secondary reporting, automation and edge-case tooling can follow once the core path is proven." }, { heading: "Make trade-offs visible", body: "Document what is in scope, what is deferred and which assumptions still need evidence. Clear boundaries protect both delivery speed and product quality." }] },
  { slug: "web-performance-details", title: "The performance details that shape a better web experience", category: "Web Engineering", summary: "Why loading behavior, interface responsiveness and visual stability matter as much as visual polish.", readTime: "5 min", sections: [{ heading: "Optimize the critical path", body: "Prioritize the content and assets needed for the first useful view. Font strategy, responsive images and server rendering often matter more than cosmetic loading animation." }, { heading: "Protect interaction responsiveness", body: "Large client bundles and unnecessary third-party scripts compete with the user. Keep the browser's main thread available for navigation, forms and meaningful feedback." }, { heading: "Prevent layout movement", body: "Reserve image space, avoid late font surprises and test dynamic content. Stability builds trust because the interface stays where the user expects it." }] },
];
