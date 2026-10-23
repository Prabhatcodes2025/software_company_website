# LetsFygure website audit and implementation plan

Updated: 23 October 2026

## Repository audit

- Stack: Next.js 15 App Router, React 19, TypeScript, Tailwind/PostCSS, global CSS, Lucide icons, and a currently unused Framer Motion dependency.
- Routes: home, services index, ten service detail routes, eight industry narratives, work, six case-study detail routes, about, insights with three article routes, careers, contact, privacy, and terms.
- Data: company, services, industries, work, process, technology, FAQ, and insights are centralized in `lib/site.ts`.
- Navigation: sticky header, desktop mega-menus, and mobile menu. The original supported Escape but lacked outside-click close, deliberate focus entry/return, and scroll-state styling.
- Integrations: the contact form has a database-first Supabase/Resend server implementation with validation, a honeypot, origin checks and rate limiting. It fails closed until external configuration exists and only offers WhatsApp after a confirmed database save.
- SEO: route metadata, canonicals, robots, sitemap, Open Graph, and Organization/Service schema exist. The final production domain is not yet configured.
- Assets: only the official LetsFygure logo and icon are local. Approved client logos and real project screenshots are missing.
- Accessibility: semantic landmarks, skip link, focus styles, labels, reduced-motion foundations and arrow-key tab navigation exist. Automated contrast and assistive-technology review remain a launch check.
- Security: no secrets are committed or browser-exposed. Security headers, server validation, origin validation, abuse prevention, server-only database access and fail-closed behavior are implemented. Production credential configuration and retention policy approval remain.
- Credibility gaps found: generic work placeholders, incomplete official company details, absent statistics/client rail, missing approved proof assets, and review counts requiring verification.

## Evidence boundaries

- Clutch results checked on 23 October 2026 show a 5.0 overall rating, 15 reviews, and three years in business.
- The other statistics (50+ projects, 40+ clients, 3+ countries, 5+ professionals) are owner-supplied.
- The six projects and scopes are owner-supplied portfolio information. No unsupported ROI, performance, certification, ERP, ATS, trading, or live-feature claim was added.

## Phased implementation

1. **Audit and architecture — completed.** Preserve App Router and centralized data; correct facts and evidence boundaries.
2. **Design system, header, footer — completed.** Refine interactions, menu behavior, information architecture, and official contact data.
3. **Homepage — completed.** Engineering-led hero, stronger CTA hierarchy, custom system visual, and named real work.
4. **Client rail/statistics/trust — completed.** Pauseable, reduced-motion-safe rail and approved company figures. Text names remain until authorized logos arrive.
5. **Case studies — implementation completed; assets blocked.** Six real projects have project-specific scope maps, dedicated static routes, evidence notes, metadata, sitemap entries and live links. Generic fake interfaces were removed. Approved screenshots remain unavailable.
6. **Services/industries — completed.** Ten services have distinct outcomes, deliverables, architecture, standards, methodology, related work and FAQs. Eight industries have specific product flows, capabilities and evidence-bounded real work.
7. **About/Insights/Careers — completed.** Deeper company narrative, engineering model, three distinct article routes and an honest hiring-status page are implemented without fabricated claims.
8. **Contact Option C — code completed; external configuration blocked.** Database-first persistence, server validation, origin checks, rate limiting, email status and optional post-success WhatsApp are implemented. Supabase/Resend setup and credentials are still required.
9. **Responsive/accessibility/SEO/performance — completed for repository scope.** Desktop/mobile screenshot reviews and a 26-route 390px overflow check passed; sitemap, metadata, keyboard tabs, reduced motion and security headers were checked. Third-party WCAG/performance scans remain a pre-launch manual check.
10. **Regression/build — completed.** TypeScript, ESLint and the 36-page production build pass on 23 October 2026.

## Owner inputs required

- Authorized optimized client logo files.
- Approved desktop/mobile screenshots, or permission to capture the six live sites.
- Supabase project/server credential or approved database alternative.
- Transactional email provider/server credential.
- Data-retention period and final legal review.
- Resend verification for `letsfygure.com` and approval of `enquiries@letsfygure.com` as the sender.
- Final production-domain confirmation if it differs from `https://www.letsfygure.com`.

## Expected environment variable names for Option C

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `LEAD_NOTIFICATION_EMAIL`
- `CONTACT_RATE_LIMIT_SECRET`
