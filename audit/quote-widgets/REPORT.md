# Floating widgets and quote popup — final local QA

28 October 2026. No push, deployment, DNS change, or Git history change was made.

## Implemented

- `components/FloatingWidgets.tsx`, `app/floating-quote.css`: Back to Top after 400px, reduced-motion-aware scrolling, compact WhatsApp button using `company.whatsapp`, safe-area spacing, and tawk event-based hiding while chat is expanded.
- `components/QuoteLauncher.tsx`, `components/QuoteModal.tsx`, `app/quote-modal.css`: lazy-loaded, responsive quote dialog with native modal focus handling, Escape/backdrop/close controls, validation, loading state, and truthful saved/email result messages.
- `components/EditorialHomepage.tsx`, `app/services/[slug]/page.tsx`: quote triggers in the homepage closing CTA and all ten service closing CTAs. Existing contact links remain.
- `app/api/contact/route.ts`, `supabase/contact_enquiries.sql`, `app/privacy/page.tsx`: optional stored phone field, required for quote requests, and updated privacy disclosure. Existing contact endpoint and database-first flow remain.
- `app/layout.tsx`: quote provider; existing tawk property and lazy script retained.

## Passed

- Production browser checks: 81/81 at 320, 390, 768, 1024, and 1440 px. Includes scroll behavior, viewport containment, dialog opening/closing/focus/scroll lock, service preselection, validation, failed-request handling, and simulated tawk maximize/minimize callbacks. See `results.json` and screenshots in this directory.
- Axe on open quote dialog: zero violations at 320, 390, and 1440 px. Desktop contrast produced eight inconclusive nodes requiring manual review; no confirmed contrast failure. See `axe-results.json`.
- ESLint, TypeScript `tsc --noEmit`, and optimized Next.js production build all passed. The initial build attempt hit a Windows `.next` file lock; a clean retry passed.
- Final local homepage Lighthouse: mobile **92 performance / 100 accessibility / 100 best practices / 100 SEO**; desktop **100 / 100 / 100 / 100**. Reports: `lighthouse-mobile-preload.json` and `lighthouse-desktop-preload.json`.
- Visual inspection of 390px and 1440px quote screenshots and the 390px floating controls found readable form fields and no clipping or overlap among rendered controls.

## Remaining issues and untested checks

- The local Chrome and Edge sessions requested the tawk embed script, but browser loading failed with `ERR_BLOCKED_BY_ORB`. The embed URL responded to a direct HTTP request. Therefore the actual tawk launcher, expanded panel, welcome message, four suggestions, and real WhatsApp-versus-tawk overlap could not be verified. The callback behavior was tested with simulated supported events. Check this on the deployed domain with the real widget before launch.
- Mobile Lighthouse still reports **CLS 0.112**, attributed to the homepage illustrative hero shifting when the Manrope web font loads. Explicit `next/font/local` preload did not emit a font preload link or remove the shift. The observed mobile performance score varied across local runs (85–92); do not treat this run as a stable performance guarantee. The approved hero was not redesigned to address this shift.
- The local production server intentionally rejected a localhost form POST with HTTP 403 due to production origin protection. A same-origin request using the production domain headers reached HTTP 503 `configuration_required` because Supabase/Resend secrets are unavailable locally. Real database persistence and email delivery remain untested.
- Run the additive `supabase/contact_enquiries.sql` migration on the existing database before enabling quote submissions; confirm production environment variables listed in `DOMAIN_SETUP.md`. Secure attachments are not implemented because private upload storage and access controls are not configured. The form explains that files can be shared securely after the initial enquiry.
