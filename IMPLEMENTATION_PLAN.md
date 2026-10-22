# LetsFygure website audit and implementation plan

Updated: 23 October 2026

## Repository audit

- Stack: Next.js 15 App Router, React 19, TypeScript, Tailwind/PostCSS, global CSS, Lucide icons, and a currently unused Framer Motion dependency.
- Routes: home, services index, ten service detail routes, industries, work, about, insights, careers, contact, privacy, and terms. Case-study detail routes do not exist yet.
- Data: company, services, industries, work, process, technology, FAQ, and insights are centralized in `lib/site.ts`.
- Navigation: sticky header, desktop mega-menus, and mobile menu. The original supported Escape but lacked outside-click close, deliberate focus entry/return, and scroll-state styling.
- Integrations: the contact form only prepares a WhatsApp message. It does not persist or email leads and says so honestly. No database or email credentials exist.
- SEO: route metadata, canonicals, robots, sitemap, Open Graph, and Organization/Service schema exist. The final production domain is not yet configured.
- Assets: only the official LetsFygure logo and icon are local. Approved client logos and real project screenshots are missing.
- Accessibility: semantic landmarks, skip link, focus styles, labels, and reduced-motion foundations exist. Full automated and manual WCAG checks remain.
- Security: no secrets are committed and no lead data is exposed. Security headers, server validation, abuse prevention, rate limiting, retention, and database permissions remain phase-eight work.
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
5. **Case studies — structure completed; assets partial.** Six real projects replace placeholders, have dedicated static routes, evidence notes, metadata, sitemap entries, and live links. Real approved screenshots remain.
6. **Services/industries — planned.** Distinct narratives, real related work, useful FAQs.
7. **About/Insights — planned.** Deeper company narrative and distinct article routes without fabricated experience.
8. **Contact Option C — blocked by external configuration.** Database-first persistence, server validation, rate limiting, email status, and optional post-success WhatsApp require providers/credentials.
9. **Responsive/accessibility/SEO/performance — ongoing.** Complete the required viewport matrix and audits after routes/assets are complete.
10. **Regression/build — required each pass.** Run only the checks actually available and report results precisely.

## Owner inputs required

- Authorized optimized client logo files.
- Approved desktop/mobile screenshots, or permission to capture the six live sites.
- Final production domain.
- Supabase project/server credential or approved database alternative.
- Transactional email provider/server credential.
- Data-retention period and final legal review.

## Expected environment variable names for Option C

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `LEAD_NOTIFICATION_EMAIL`
- `CONTACT_RATE_LIMIT_SECRET`
