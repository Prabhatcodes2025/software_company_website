export type ServiceEditorial = {
  eyebrow: string;
  headline: string;
  intro: string;
  situation: string;
  situationHeading: string;
  scopeHeading: string;
  scopeIntro: string;
  approachHeading: string;
  approachIntro: string;
  ctaHeading: string;
  ctaText: string;
  visualLabel: string;
  visualKind: "web" | "mobile" | "software" | "ai" | "automation" | "design" | "commerce" | "seo" | "marketing" | "integrations";
  storyFirst: boolean;
};

export const serviceEditorial: Record<string, ServiceEditorial> = {
  "web-development": {
    eyebrow: "Websites & web applications", headline: "A website should make the next step obvious.", intro: "We build responsive sites and web applications around clear content, accessible journeys and a maintainable technical foundation.",
    situation: "Your current site may look complete while visitors still struggle to find a service, understand the offer or make an enquiry. Content teams may also depend on developers for routine changes.",
    situationHeading: "When the site is slowing down the business", scopeHeading: "What the web build needs to cover", scopeIntro: "The work starts with page purpose and content ownership, then moves into implementation and release quality.",
    approachHeading: "From content model to reliable release", approachIntro: "Choose the CMS, application architecture and deployment approach after mapping who will use and maintain the site.",
    ctaHeading: "Show us the site and the task it is failing.", ctaText: "We can assess an existing platform or scope a new web experience.", visualLabel: "Illustrative responsive web composition", visualKind: "web", storyFirst: true,
  },
  "mobile-app-development": {
    eyebrow: "iOS & Android products", headline: "Build the app around the task people return to.", intro: "We define the useful first release, shape natural touch journeys and connect the app to dependable backend services.",
    situation: "A long feature list is not a release plan. The important question is what users must be able to do reliably on a phone, including when data is slow or an action fails.",
    situationHeading: "Start with the repeat-use moment", scopeHeading: "The app, backend and release plan", scopeIntro: "Navigation, authentication, data behavior, device checks and store readiness need to be planned together.",
    approachHeading: "A release that can improve", approachIntro: "We test critical journeys on real device sizes and make API and failure behavior explicit before launch.",
    ctaHeading: "Tell us what users need to do on mobile.", ctaText: "We will help define the first useful release and its backend requirements.", visualLabel: "Illustrative mobile journey study; no client app screen", visualKind: "mobile", storyFirst: false,
  },
  "custom-software-development": {
    eyebrow: "Operational software", headline: "Software that fits how your team actually works.", intro: "We turn roles, rules and repeated handoffs into applications that are easier to operate and evolve.",
    situation: "Spreadsheets, inboxes and disconnected tools often hide who owns a decision and what happened to a record. Custom software is useful when the workflow itself needs to be designed.",
    situationHeading: "Find the workarounds worth replacing", scopeHeading: "Model the rules before the screens", scopeIntro: "The right interface follows roles, permissions, lifecycle states and the data each person can act on.",
    approachHeading: "Roles, records and controlled change", approachIntro: "We separate what the first release must support from later integrations and automation.",
    ctaHeading: "Walk us through one difficult workflow.", ctaText: "We can map the roles and decisions before estimating a platform.", visualLabel: "Illustrative role-and-workflow study", visualKind: "software", storyFirst: true,
  },
  "ai-development": {
    eyebrow: "AI product features", headline: "Useful AI starts with a bounded task.", intro: "We design AI assistance around trusted context, clear evaluation and human review where the decision has consequences.",
    situation: "An impressive demo can fail in daily use when sources, permissions and error handling are unclear. We define what the assistant should do, what it must not do and how quality will be checked.",
    situationHeading: "Move beyond the demo", scopeHeading: "Context, evaluation and oversight", scopeIntro: "The model is one component. Source access, application rules, test cases and review paths determine whether it is dependable.",
    approachHeading: "Test behavior before expanding autonomy", approachIntro: "Start with representative tasks and review failure cases before connecting AI output to business actions.",
    ctaHeading: "Bring us one AI task, not a broad mandate.", ctaText: "We will help assess the data, risk and evaluation path.", visualLabel: "Illustrative AI evaluation sheet; no client deployment", visualKind: "ai", storyFirst: false,
  },
  "ai-automation": {
    eyebrow: "Workflow automation", headline: "Automate the handoff, keep the judgment.", intro: "We connect triggers, systems and approvals so repeatable work moves forward without hiding exceptions.",
    situation: "Manual re-entry and unclear ownership create delay. Automation works best when inputs are known, exceptions have an owner and each action can be checked.",
    situationHeading: "Find the repeatable handoff", scopeHeading: "Triggers, exceptions and recovery", scopeIntro: "A dependable workflow includes validation, retries, review and a visible record of what happened.",
    approachHeading: "A process people can still control", approachIntro: "Use deterministic rules first; add AI assistance only where classification or drafting genuinely helps.",
    ctaHeading: "Show us the process that keeps getting stuck.", ctaText: "We can identify a safe first automation and its review points.", visualLabel: "Illustrative workflow sequence", visualKind: "automation", storyFirst: true,
  },
  "ui-ux-design": {
    eyebrow: "Product experience", headline: "Make the important decision easy to take.", intro: "We use journeys, prototypes and interface systems to remove friction before it becomes expensive to build around.",
    situation: "When navigation, language and interaction rules differ across screens, users have to relearn the product. A design system begins with the decisions people need to make.",
    situationHeading: "Where the experience loses clarity", scopeHeading: "From evidence to interface rules", scopeIntro: "Research, information architecture, interaction states and component guidance make a design useful to engineering.",
    approachHeading: "Prototype the risky moments", approachIntro: "Test the tasks that carry the most uncertainty, then define reusable patterns for the rest.",
    ctaHeading: "Bring the journey that users struggle with.", ctaText: "We can review the current experience or frame a new product direction.", visualLabel: "Illustrative interface-system study", visualKind: "design", storyFirst: false,
  },
  "ecommerce-development": {
    eyebrow: "Online commerce", headline: "A store has to work after the order, too.", intro: "We connect product discovery, checkout and order operations so shoppers and teams can complete their work confidently.",
    situation: "A polished storefront will still disappoint if variants are hard to compare, checkout fails or orders require manual reconciliation.",
    situationHeading: "Look beyond the product page", scopeHeading: "Catalog, checkout and operations", scopeIntro: "The storefront, payment boundary, order states and content process should be designed as one system.",
    approachHeading: "Choose a platform for the operating model", approachIntro: "We compare established commerce tools and custom work against catalog complexity, integrations and future change.",
    ctaHeading: "Tell us where the buying journey breaks.", ctaText: "We can assess an existing store or scope a new commerce system.", visualLabel: "Illustrative commerce journey; no client store shown", visualKind: "commerce", storyFirst: true,
  },
  seo: {
    eyebrow: "Organic discovery", headline: "Make the right pages easier to find and use.", intro: "We improve technical access, page purpose and content structure around the questions your buyers actually ask.",
    situation: "Search work stalls when crawl issues, thin pages and unclear commercial intent are handled as separate checklists.",
    situationHeading: "Find the pages that deserve attention", scopeHeading: "Technical health meets useful content", scopeIntro: "We connect indexation, architecture, metadata and measurement to an identifiable page role.",
    approachHeading: "Measure qualified discovery", approachIntro: "Track what was changed and what visitors do, without promising a ranking position.",
    ctaHeading: "Share the site and its search questions.", ctaText: "We can prioritize a technical and content assessment.", visualLabel: "Illustrative search-page anatomy", visualKind: "seo", storyFirst: false,
  },
  "digital-marketing": {
    eyebrow: "Campaigns & social", headline: "A campaign needs a clear offer and a useful next step.", intro: "We align audience, message, landing experience and measurement so activity can inform decisions.",
    situation: "More posts or ad spend will not fix a vague offer or a page that loses visitors after the click.",
    situationHeading: "Connect the message to the landing page", scopeHeading: "Audience, creative and feedback", scopeIntro: "Channel selection follows the buyer and offer; reporting should distinguish useful response from activity alone.",
    approachHeading: "Learn from the full journey", approachIntro: "Test a focused message and landing experience, then iterate using clean, consent-aware measurement.",
    ctaHeading: "Bring the offer and the audience.", ctaText: "We can help shape the campaign and its landing path.", visualLabel: "Illustrative campaign-to-page study", visualKind: "marketing", storyFirst: true,
  },
  "api-integrations": {
    eyebrow: "Connected systems", headline: "Make the handoff between tools dependable.", intro: "We design and build integrations that validate data, protect credentials and expose failures people can recover from.",
    situation: "When two systems disagree, teams re-enter information, lose context and cannot tell which update succeeded.",
    situationHeading: "Start with data ownership", scopeHeading: "Contracts, credentials and recovery", scopeIntro: "Define the source of truth, event behavior, error states and support owner before writing a connector.",
    approachHeading: "Design for the failed request", approachIntro: "Retries, idempotency and monitoring matter as much as the successful path.",
    ctaHeading: "Tell us which systems need to agree.", ctaText: "We can review API access and map a reliable integration contract.", visualLabel: "Illustrative integration contract", visualKind: "integrations", storyFirst: false,
  },
};

