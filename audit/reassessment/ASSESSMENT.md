# LetsFygure corrective reassessment — decision brief

27 October 2026. **Review and direction only. No production component or design-system changes were made for this reassessment.**

## Evidence and scope

I built and ran the current Next.js production site locally, then captured all **29 public content routes** at 1440 px desktop and 390 px mobile: 58 full-page screenshots in `screenshots/`. Browser observations are in `capture-data.json`. I separately captured open Services, Industries and Insights desktop menus and mobile navigation, checked 20 key page states at 320/360/390/430 px (`responsive-check.json`), and explicitly decoded all project images on the homepage, Industries, work index and six case studies (`image-check.json`). All 58 routes returned HTTP 200, all had one H1, none overflowed horizontally at 390 px, and none of the 20 additional responsive checks overflowed or had long body paragraphs below 16 px. All tested project images resolved when scrolled into view; initial `naturalWidth=0` observations came from lazy-loading timing, not confirmed broken assets. The design problem is composition, repetition and small rendered evidence, rather than HTTP failures.

The earlier technical audit and Lighthouse scores do not answer whether visitors understand the company or find a persuasive service story. The owner is right to separate those questions.

Severity: **Critical** = wrong company positioning or evidence hierarchy; **High** = major conversion, differentiation or mobile comprehension issue; **Medium** = meaningful clarity, rhythm or credibility issue; **Low** = polish.

## Cross-disciplinary verdict

| Discipline | Contribution to the corrective direction |
| --- | --- |
| Creative direction | A single real-estate client dominates the first viewport. Move the visual identity to LetsFygure's engineering breadth and reserve client work for proof later. |
| B2B brand strategy | State plainly that this is an IT/software development company with web, custom software, mobile, AI, automation and design services. Keep claims within evidence. |
| Principal UI design | The dark-green full-width hero and cream text sections recur too often. Establish distinct section rhythms and service-specific visual systems without losing the brand palette. |
| UX / information architecture | Services appear after the hero, client rail, company statement and four case studies. Put capabilities and business solutions before work; feature only two detailed projects. |
| Technical SEO | Titles and descriptions are unique and canonicals point to the confirmed apex, but service intent overlaps. Clarify each service page's primary query and subordinate topics. |
| Conversion optimization | “Let's Talk,” “Start a Project,” and “Discuss Your Project” are repeated without contextual promises. Use a consistent primary enquiry action and service-specific secondary actions. |
| IT services copywriting | Ten service pages repeat the same seven section headings and boilerplate transitions. Write around each service's actual buying decision, deliverables and constraints. |
| Art direction | Real client captures load, but repeated browser-plus-phone composites and small gallery renders make evidence feel formulaic. Use selective, legible real detail crops. |
| Motion design | Keep motion for revealing relationships and interaction feedback; avoid decorative scroll reveals. Reduced-motion behavior remains essential. |
| Next.js engineering | Preserve routes, metadata, contact architecture and shared primitives. Add page-variant compositions/data without creating ten wholly separate implementations. |
| Accessibility / performance | Body paragraphs generally reach 16 px on mobile and no tested width overflows; tiny labels/chips, image legibility and heading wraps still need visual correction. |
| QA | Current screenshots and data establish a baseline. After approved implementation, recapture all routes and compare imagery, hierarchy, menus and form states. |

## Fifteen highest-impact issues

| Rank | Severity | Verified issue | Recommended correction |
| --- | --- | --- | --- |
| 1 | Critical | Homepage hero's dominant image is Ongole Property. | Select an IT-company hero direction below; keep client evidence below capabilities. |
| 2 | Critical | Homepage presents four detailed projects before the first services section. | Move service breadth to section 3; limit detailed homepage cases to two. |
| 3 | Critical | Hero H1 “Digital products built for real business” does not name the company category or main capabilities. | Use a headline that explicitly says software/IT engineering, supported by web, software, mobile and AI in one sentence. |
| 4 | High | Ten service detail pages use the same hero, problem, scope, architecture, standards, six-step process, industries, FAQ and CTA sequence. | Give every service a different editorial argument and visual composition; reuse only primitives. |
| 5 | High | Seven service headings repeat on all ten pages, including “Concrete work, connected end to end.” and “Quality is a delivery responsibility.” | Replace generic headings with buyer-specific questions and service-specific proof. |
| 6 | High | Homepage, Industries and work index together repeat paired project captures 10, 12 and 12 times respectively. | Apply the two-case homepage rule; use industry proof sparingly and link to work without more full screenshots. |
| 7 | High | Six case studies use the same hero, Challenge/Solution/Business value narrative and identical gallery structure. | Build six distinct story arcs from verified scope; vary media sequencing and crop selection. |
| 8 | High | On a 390 px case page the hero phone renders about 90 px wide; the desktop gallery image about 358 px wide. | Use one readable hero frame and optional focused details, not a forced desktop/phone pair in every slot. |
| 9 | High | Industries is about 13,161 px tall desktop and 15,680 px mobile with eight near-identical story sections. | Keep one index route but condense to editorial industry summaries, with selective evidence and jump links. |
| 10 | High | The mobile app service hero uses a Naystrip website composite as its main proof. | Use a service-specific process or verified app evidence only when owner-approved app screenshots are available. |
| 11 | High | eCommerce and digital-marketing heroes reuse Naystrip and Mozno website captures with weak linkage to the claimed service. | Require proof that the specific service was delivered, or use clearly labelled illustrative service visuals. |
| 12 | Medium | Several large headings use extremely tight tracking and thin strokes; case titles wrap into long stacks on mobile. | Test a restrained responsive type scale and stronger heading weight with limits on line length. |
| 13 | Medium | Small chips, eyebrows and evidence labels use roughly 10–12 px type despite otherwise readable mobile paragraphs. | Raise secondary type selectively to 12–14 px and simplify all-caps treatment. |
| 14 | Medium | Insights menu appears translucent over the homepage hero; its content is less legible than Services and Industries menus. | Give the open panel a solid or sufficiently opaque surface and consistent spacing. |
| 15 | Medium | Footer begins with another broad CTA directly after the large final CTA; its desktop lead headline becomes visually tiny. | Keep one clear closing invitation and make the footer a useful service/contact directory. |

## Route-by-route audit matrix

The matrix records audience/search intent, observed hierarchy/content/visual/CTA issues, and the corrective action. Technical checks (one H1, unique title/description, no 390 px overflow) passed on every listed route unless a row notes a semantic or editorial problem. “Industry pages” are eight sections within **one** `/industries` route; no industry detail routes currently exist.

| Route | Audience / intent | Observed issue and severity | Correction |
| --- | --- | --- | --- |
| `/` | Buyer evaluating an IT partner | **Critical:** client-led hero and four large cases precede services; 9,259 px desktop / 12,131 px mobile; CTA wording varies. | Company-led hero, capability breadth, two cases, one direct enquiry path. |
| `/services` | Buyer comparing capabilities | **High:** H1 “Different disciplines. One accountable product system” is elegant but abstract; service rows are visually uniform. | Group ten existing routes by buyer task and show distinct outcomes, with plain software-development positioning. |
| `/industries` | Buyer seeking sector context | **High:** eight repeated systems/proof blocks; 13,161 px desktop / 15,680 px mobile; six paired project visuals repeat work index. | Condense each industry to an operating challenge, relevant capabilities and selective evidence; retain eight anchors. |
| `/case-studies` | Buyer checking delivery proof | **High:** all six use the same browser/phone image formula and challenge/solution card; labels compete with media. | Editorial index with varied image proportions, clear client and scope, filters only if useful. |
| `/about` | Buyer assessing team credibility | **Medium:** “Engineering clarity…” hero and “Technology should make…” body resemble homepage positioning; little concrete company detail. | State team model, accountable delivery and verified facts; add people/process evidence if approved. |
| `/insights` | Reader choosing an article | **Medium:** “Useful thinking…” is broad; three cards share a large sparse template. | Make article topics and intended readers explicit; differentiate AI, product and web-engineering content. |
| `/career` | Applicant assessing fit | **Medium:** large manifesto headline for a page with no advertised openings; useful status is lower down. | Lead with current hiring status and honest collaboration pathways; keep culture concise. |
| `/contact` | Qualified prospect starting an enquiry | **Medium:** strong form layout, but service selection and availability need a real configured backend; page hero repeats general “figure out” language. | Keep architecture; state the expected next step and response process only if owner can commit to it. |
| `/privacy` | Visitor assessing data handling | **Medium:** readable policy but retention remains explicitly unapproved; launch blocker. | Owner/legal review, approved retention period and accurate provider details. |
| `/terms` | Visitor checking use terms | **Low:** general terms and simple hierarchy are adequate; require owner/legal sign-off. | Validate language, date and company identity before launch. |
| `/services/web-development` | Website/platform buyer | **High:** generic service template obscures CMS, web-app, performance and migration choices; Ongole hero repeats home. | Lead with site/platform decisions, content operations and performance; use relevant real web detail once. |
| `/services/mobile-app-development` | App buyer | **High:** Naystrip web screenshot implies mobile app proof; no real app interface is shown. | Lead with user journeys, iOS/Android choices, backend and release process; request approved actual app assets. |
| `/services/custom-software-development` | Operations/platform buyer | **High:** repeats Ongole composite and shared architecture panel; CRM/ERP discussion is generic capability, not specific proof. | Show role/rule/workflow model and a verified multi-role implementation; distinguish offered patterns from delivered features. |
| `/services/ai-development` | Buyer exploring AI products | **High:** same delivery blueprint as automation; no project proof is available. | Focus on bounded assistants, retrieval, evaluations and safety; labelled illustrative flow, no fictional product UI. |
| `/services/ai-automation` | Operations buyer | **High:** concept and sections overlap AI Development; no real automation case. | Focus on triggers, exception handling, approvals, system updates and measurable baselines when verified. |
| `/services/ui-ux-design` | Product/design buyer | **High:** Mozno screenshot is a weak substitute for design process evidence. | Show research-to-prototype-to-design-system decisions; use actual artefacts only with permission. |
| `/services/ecommerce-development` | Store/platform buyer | **High:** Naystrip travel screenshot does not establish eCommerce delivery. | Discuss catalog, checkout and order operations; ask for approved commerce proof. |
| `/services/seo` | Buyer seeking organic discovery | **Medium:** Snow Feather hero is relevant to a web presence but does not itself prove SEO work; overlaps web-development quality claims. | Define technical/content/search-measurement scope and evidence standards; avoid ranking promises. |
| `/services/digital-marketing` | Campaign/growth buyer | **High:** Mozno website image is not campaign proof; current wording overlaps SEO measurement. | Lead with audience, offer, channel, landing page and attribution; use verified campaign materials only. |
| `/services/api-integrations` | Buyer connecting systems | **Medium:** Continental website visual does not demonstrate integration work; diagram follows same service pattern. | Lead with contracts, authentication, error handling and ownership; show a genuine integration if verified. |
| `/case-studies/ongole-property` | PropTech buyer checking multi-role delivery | **Medium:** clear verified Next.js/Supabase details, but same challenge/gallery rhythm and tiny mobile hero phone. | Tell the roles/listing/enquiry story; use readable discovery and workflow details from approved captures. |
| `/case-studies/naystrip` | Travel-platform buyer | **High:** tour/B2B distinction is buried by the common case template; no verified technology listed. | Lead with itinerary and partner journeys; use actual screen sequence and label unknown stack honestly. |
| `/case-studies/mozno-wealth` | Financial-advisory buyer | **High:** strong visual color but same layout; financial tools are mentioned as scope without visual evidence in this case. | Focus on trust, service explanation and consultation; substantiate any tool claim before emphasis. |
| `/case-studies/snow-feather-adventure` | Travel buyer | **Medium:** headline and challenge consume much of mobile first view; screenshot is visually attractive but small. | Lead with destination/itinerary storytelling, large scenic website detail and enquiry route. |
| `/case-studies/rs-constructions` | Construction buyer | **Medium:** generic “digital presence” text underuses publicly verified website/app/SMM review; no approved app asset. | Separate website and other delivered work only to the extent verified; request app/SMM material before showing it. |
| `/case-studies/continental-mercantile` | Recruitment buyer | **Medium:** rich brand contrast but common structure hides candidate vs employer paths; no verified technology listed. | Use candidate/employer journey as the story spine and relevant real interface crops. |
| `/insights/ai-automation-human-approval` | Operations/AI reader | **Medium:** specific topic but short three-section article and generic related-content pattern; overlaps AI service FAQ. | Add one concrete, clearly illustrative decision framework without fabricated client outcomes. |
| `/insights/custom-software-outcomes` | Product sponsor | **Medium:** useful framing but repeats custom-software page themes; no practical artifact/checklist. | Provide a release-scoping example or decision checklist, clearly hypothetical. |
| `/insights/web-performance-details` | Web/product reader | **Medium:** useful concepts but overlaps web-development/SEO sections; no original measurements. | Add a plain performance audit method and links to deeper service decisions; avoid unsupported metrics. |

## Content and proof inventory

| Pattern | Measured or observed repetition | Decision |
| --- | --- | --- |
| Service template headings | “Concrete work, connected end to end,” “The visible experience and the layers beneath it,” “Quality is a delivery responsibility,” “Decisions become visible before risk becomes expensive,” and “Practical questions before delivery begins” each appear on **10** service pages. | Replace the repeated editorial argument; retain shared UI primitives. |
| Methodology | The same six `Discover / Define / Design / Develop / Validate / Launch & Scale` steps appear on the ten service pages and other pages. | Explain method once in depth on About; service pages mention only service-specific checkpoints. |
| Case-study structure | “Challenge,” “Solution,” “Business value,” and the same responsive-interface heading appear across all six. | Give each case a different opening question, screen order and evidence notes. |
| Industry structures | Eight narratives repeat “Product system,” “Relevant capabilities” and “Related real work/Evidence boundary.” | Treat industries as a scannable index; use a long explanation only where evidence supports it. |
| Project imagery | Homepage has **10** project desktop/mobile images, Industries **12**, work index **12**, then the same assets appear on services and cases. | Reduce distribution; ensure each screenshot earns its placement. |
| Generic language | “Clear,” “practical,” “connected,” “accountable,” “real work,” “product system,” and “a clear next step” recur throughout. | Replace with a named buyer task, decision, deliverable or constraint. |
| CTA language | “Let's Talk,” “Start a Project,” “Discuss Your Project,” “Discuss a similar project” and “Start a conversation” are used interchangeably. | Standardize primary CTA to **Discuss Your Project**; contextual secondary links describe the next useful step. |
| Service overlap | Web/SEO share technical search and performance; AI Development/AI Automation share AI and human approval; Custom Software/API Integrations share workflow systems; eCommerce/Web share storefronts; Digital Marketing/SEO share measurement. | Assign one primary intent to each route and cross-link secondary capabilities without competing copy. |

### Verified evidence boundary

The current [Clutch profile](https://clutch.co/profile/letsfygure-0) displays 5.0 and three reviews. Its RS Constructions review publicly describes website, mobile-app and social-media work; other public reviews describe additional app, eCommerce and marketing work. These sources support discussing delivered categories, but client names, logos, screenshots, app-store links, campaign assets and any specific numerical outcome still need owner approval before publication. The six existing case studies remain the approved portfolio set. No mobile app, AI system or dashboard should be visually fabricated to fill a proof gap.

## Corrected homepage information architecture

1. **Company hero** — selected concept below; one specific headline, one paragraph, two requested CTAs, compact verifiable proof.
2. **Compact trust bar** — real approved client logos plus the verified Clutch link; no inflated counters.
3. **Core services** — web, custom software, mobile, AI and automation visibly first; design, eCommerce, growth and integration accessible in the same system.
4. **Business solutions** — three problem-led pathways such as customer platforms, operational software and connected automation. These describe offered capabilities, not invented case outcomes.
5. **Two featured projects** — choose from the six based on proof strength and visual diversity. Each gets a concise problem, delivered scope and one readable visual. No other homepage project gallery.
6. **Why LetsFygure** — concrete working commitments rather than broad adjectives; approved team/process facts only.
7. **Delivery method** — one compact project lifecycle with clear review points, linked to About for detail.
8. **Industries** — a concise index with meaningful links to anchors on `/industries`.
9. **Verified review** — one accurately attributed review excerpt or review-summary link, with owner approval for any quote.
10. **Enquiry CTA** — one strong closing invitation; contact form remains on `/contact`.
11. **Footer** — useful service, work, about and contact directory, without a second competing CTA banner.

## Three rendered hero directions for owner selection

The standalone [HTML prototype](./hero-concepts.html) is review-only. All graphics are explicitly **illustrative**, made from service terms or engineering layers. No client interface or unverified business metric appears. Each version has the required primary **Discuss Your Project** and secondary **Explore Services** CTA. The screenshots are direct Chrome renders at 1440 px and 390 px.

| Direction | Composition and positioning | Strength | Watch-out |
| --- | --- | --- | --- |
| **A — Connected systems** | Dark, high-contrast company statement and a radial map of web, custom software, mobile, AI, automation and design. [Desktop](./hero-a-desktop.png) · [Mobile](./hero-a-mobile.png) | Most distinctive engineering identity; visually explains breadth. | The map could feel abstract if repeated elsewhere; keep it confined to hero. |
| **B — Capability wall** | Warm editorial canvas with a specific service headline and six strong capability tiles. [Desktop](./hero-b-desktop.png) · [Mobile](./hero-b-mobile.png) | Clearest immediate full-service positioning and mobile scanability. | Needs careful restraint so tiles do not become another services grid below. |
| **C — Engineering blueprint** | Pale green field with an exploded system-layer drawing from people/work to data and review. [Desktop](./hero-c-desktop.png) · [Mobile](./hero-c-mobile.png) | Best expression of engineering process and business-system thinking. | More process-led than offer-led; supporting paragraph must name service breadth. |

**Recommendation:** B is the strongest first-visit answer to the owner's positioning concern. A is the more distinctive brand option; C best suits an engineering-led subpage. Owner selection is required before replacing the live hero.

## Service-page differentiation strategy

All ten existing routes remain. Each page should have its own buyer question, visual grammar and content sequence. “Proof” means verified delivery; otherwise use a plainly labelled process or architecture illustration.

| Service | Distinct page idea and editorial sequence | Visual / proof policy |
| --- | --- | --- |
| Web Development | Website vs web application decision → content model → performance/accessibility → delivery examples. | Real web detail, one or two relevant cases; avoid Ongole in the hero if used on homepage. |
| Mobile App Development | Core user task → platform/backend choices → release/test process → support. | Approved real app screens only; Clutch review may support capability text, not visual invention. |
| Custom Software Development | Role/rule/workflow map → data permissions → integration → release boundaries. | Ongole role-aware work where verified; no generic ERP dashboard art. |
| AI Development | Bounded use case → sources/retrieval → evaluation → safe response and oversight. | Illustrative decision flow, clearly labelled; no client deployment claim without evidence. |
| AI & Business Automation | Trigger → validation → human exception → system update → operational visibility. | Illustrative workflow with real integration constraints; separate from model-development page. |
| UI/UX & Product Design | Discovery evidence → journeys → prototype → design-system handoff. | Actual approved artefacts where available; otherwise clear process diagrams. |
| eCommerce Development | Catalog → product detail → checkout → order operations → platform choice. | Request approved commerce work; travel booking image is not eCommerce proof. |
| SEO Services | Crawl/index diagnosis → search intent and content → implementation → measurement. | Genuine audits/verified examples only; no rankings promise. |
| Performance & Social Marketing | Audience/offer → channel/creative → landing experience → attribution and optimization. | Request approved campaign examples; website alone is insufficient evidence. |
| API & Third-Party Integrations | Source/destination ownership → auth/contracts → retries/error handling → operations. | A true verified integration if available; otherwise illustrative system map. |

## Case-study image and narrative strategy

Keep the six approved clients and the live-site links. Start each with one visually strong **real** hero. Use the source screenshot's meaningful aspect ratio and a contained browser frame when text matters. Avoid fixed-height `object-fit: cover` on long website captures when it hides the relevant area. Use 2–3 further approved screenshots only when they explain a real user journey; a readable detail crop is more useful than a miniature full page. On mobile, lead with a wide hero frame and move a separate phone view into the story only where it adds information. The current 390 px case hero phone is about 90 px wide.

| Case | Specific story spine | Suggested real media emphasis |
| --- | --- | --- |
| Ongole Property | Property discovery, listing roles and managed enquiry. | Discovery/search first; then owner/operator areas only if the screenshots and access are approved. |
| Naystrip | Package/itinerary discovery and partner-facing enquiries. | Destination and itinerary details; B2B view only with proof. |
| Mozno Wealth | Trust-building service explanation and consultation path. | Advisory overview and consultation journey; verify any financial-tool claim. |
| Snow Feather Adventure | Destination story, tour comparison and direct enquiry. | High-impact destination/itinerary detail and mobile reading flow. |
| RS Constructions | Corporate capability, projects and enquiry; other deliverables only with approved assets. | Construction project/capability screens; request app/SMM proof if included. |
| Continental Mercantile | Candidate and employer paths through international recruitment. | Distinct entry points and application/enquiry steps from the real platform. |

Related work on each case page should be **one or two** editorial links selected for a meaningful shared challenge, without repeating their full screenshots.

## Typography and visual-system recommendations

The current Manrope-heavy system is readable but overuses light, very large, tightly tracked headings. Georgia italic appears in the homepage hero and final CTA; its contrast with the geometric sans is expressive but too prominent for a restrained software consultancy. The prototypes test a neutral sans direction against the current rendered Manrope system. Keep the warm off-white, dark green and cyan identity unless the owner selects a more substantial direction change.

- Desktop H1 target: roughly **64–88 px**, weight 600–700, line-height 0.98–1.08 and restrained negative tracking. Allow the actual phrase, not CSS alone, to set good line breaks.
- Mobile H1 target: roughly **40–56 px**, adjusted per page length; long case titles may need a shorter display title while metadata remains descriptive.
- Body: **16–18 px mobile**, **17–19 px desktop**, line-height about 1.5–1.65; maintain a comfortable 55–75-character measure where practical.
- Secondary labels and evidence notes: usually **12–14 px**, avoiding repeated 9–11 px all-caps chips. Preserve 16 px for meaningful explanatory notes.
- Buttons and navigation: at least 14–16 px with existing accessible tap sizes; use clearer weight hierarchy and visible focus.
- Test the final brand sans against the current Manrope and a neutral grotesk such as Inter/Arial in real page screenshots. Use a secondary serif only for an intentional, limited role, if at all.

The current mobile paragraph sizing and no-overflow checks are positive findings. The main typography defects are long-word wrapping, tiny supporting labels, inconsistent hierarchy and an overabundance of similarly sized display statements.

## SEO and content architecture corrections

Technical basics passed in the local render: 29 unique page titles, 29 unique meta descriptions, one H1 per route, apex canonicals, sitemap/robots, JSON-LD and descriptive project-image alternatives. The editorial SEO work is different:

1. Make homepage title/H1 explicitly identify LetsFygure as a software/IT development company, while keeping the brand voice.
2. Give `/services` a plain-language overview of all ten capabilities. Each detail route gets one primary search intent; related topics become internal links rather than competing repeated paragraphs.
3. Draw boundaries: Web Development owns website/web-app builds; SEO owns ongoing organic discovery; Digital Marketing owns paid/social campaign operations; Custom Software owns application workflows; API Integrations owns connectors; AI Development owns AI product behavior; AI Automation owns operational orchestration.
4. Keep the eight industry sections on one route unless there is enough unique evidence and search demand for genuine detail pages. Do not manufacture thin industry routes.
5. Replace generic anchor text where it weakens context; service-to-case links should state why that project is relevant.
6. For imagery, say what the real screen shows rather than repeating “public website on desktop/mobile” in every alt. Decorative illustrations should be marked as such.
7. Recheck live search metadata and crawl behavior only after an approved deployment. No ranking or traffic prediction is justified by this local audit.

## Reference benchmark

- [Infograins](https://infograins.com/) was the owner-provided reference. The browser showed broad top-level Services/Hire Developer/Products navigation and a large proof-stat row. Its hero is video-led and did not render content in the captured frame, so I am not treating that frame as a model to copy. LetsFygure should borrow the immediate breadth signal, not the dense menu or unverified numerical scale.
- [Thoughtworks](https://www.thoughtworks.com/) makes engineering, who-it-serves and insights visible in navigation, then connects its current hero to specific capability pathways. LetsFygure should adopt the clarity of those pathways at its own smaller, truthful scale.
- [Netguru](https://www.netguru.com/) separates services, commerce, solutions and clients and uses a clear specialist headline with proof nearby. LetsFygure should keep broader full-service positioning instead of adopting Netguru's current commerce specialization.
- EPAM's official site was reachable in text search but its live browser capture returned a security challenge. No visual conclusions were drawn from that capture.

These are observations from current public pages, not templates to duplicate. LetsFygure's differentiator should be a compact, specific account of how its web, app, software, AI and growth work fit together, supported by its **own** six real projects.

## Interactions and responsive direction

The desktop Services and Industries menus are structured and legible. The open Insights panel was visibly more translucent over the hero and should gain an opaque background. The mobile menu is clear and has large targets, but “Blog / Articles” and “Engineering Insights” both route to `/insights` (one to an anchor), which may feel like duplicate choices. Retain keyboard focus, Escape, outside-click behavior and active states. For motion, use brief state feedback (menu, hover, media reveal) only where it helps orientation; retain reduced-motion support.

The responsive audit found no horizontal overflow at 320, 360, 390 or 430 px on the five key pages, and body paragraphs in those checks were at least 16 px. It did **not** test every page at every width or screen-reader behavior. Case media legibility and heading wraps remain visual concerns despite passing those numeric checks.

## Required owner inputs and approval gate

1. **Select hero A, B or C** (or specify a blend and the exact concern). No homepage hero replacement will happen before selection.
2. Confirm which **two** cases should be detailed on the homepage. Suggested starting pair: Ongole Property for software workflow depth and Continental Mercantile or Snow Feather Adventure for a contrasting audience/visual. Final choice should consider owner-approved captures.
3. Supply or authorize additional genuine interface captures, especially real app screens for Mobile App Development and any approved design, commerce, campaign or AI work. Public reviews can support copy but do not authorize invented interface visuals.
4. Verify the exact delivered scope, technology and public-disclosure permission for each case. The current dataset only verifies a named technology stack for Ongole Property.
5. Approve company proof facts and any testimonial quote before prominent use. Clutch currently displays 5.0 and three reviews; other counters are owner-supplied.
6. Approve team/person photography or keep About text-led. No stock team portrait should imply it depicts LetsFygure.
7. Confirm the response promise on the contact page and complete the existing Supabase/Resend configuration and legal-retention review separately. The approved database-first architecture is preserved.

After direction approval: implement the hero and homepage structure, then service-page differentiation, then case/industry/editorial changes. Keep existing routes and security behavior. Finish with fresh desktop/mobile screenshots, all-route image checks, keyboard and menu regression, accessibility scan, lint, TypeScript and production build. No push or deployment without explicit approval.
