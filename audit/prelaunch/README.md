# LetsFygure automated pre-launch audit

Run date: 26 October 2026. Target: local Next.js production build at `http://localhost:3000` in headless Chrome. This is a lab audit, not a production or field performance measurement or a WCAG certification.

## Reproduce

From the repository root, run `corepack pnpm build`, `corepack pnpm start`, then `corepack pnpm audit:axe` and `corepack pnpm audit:lighthouse` in another terminal. The audit scripts use the installed Chrome at `C:\Program Files\Google\Chrome\Application\chrome.exe` by default; set `CHROME_PATH` if it is elsewhere. Set `AUDIT_BASE_URL` to target a different local server.

Routes: `/`, `/services/web-development`, `/industries`, `/case-studies/ongole-property`, and `/contact`. Both scripts audit 390 px mobile and desktop layouts. Axe also scans the open Services and Insights desktop menus and open mobile navigation. Results are in `axe-results.json`, `lighthouse-summary.json`, and `lighthouse/`.

The `failures` array in the Lighthouse summary includes every audit with a score below 1, including timing metrics and diagnostic insights. These are not all binary failures. Inspect the raw reports to distinguish metrics from errors.

## Results from the final build

| Route | Mobile P / A / BP / SEO | Desktop P / A / BP / SEO |
| --- | --- | --- |
| Home | 94 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Web development service | 98 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Industries | 98 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Ongole Property case study | 96 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Contact | 98 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |

P = performance, A = accessibility, BP = best practices. No binary Lighthouse category failures were reported. Mobile Largest Contentful Paint was 2.9 s on home, 2.3 s on the service, industry and contact pages, and 2.7 s on the case study. These are lab values and can vary by run.

Axe reported zero confirmed violations across 13 page/menu states. Desktop Services and Insights menus opened, outside click and Escape closed them, Enter opened Services, focus visibly outlined the trigger and returned to it after Escape. The mobile menu moved focus to its first link and returned focus to the trigger after Escape. No browser console warnings or errors were recorded in the five audited routes at either viewport. Axe left 42 contrast nodes marked incomplete across the 13 states, many representing the same decorative elements scanned repeatedly; these need manual review.

## Remaining checks and launch blockers

- The owner confirmed `https://letsfygure.com` as the primary production hostname on 26 October 2026. Domain routing and DNS still require the manual steps in `DOMAIN_SETUP.md`. Lighthouse's SEO score does not validate domain ownership or live DNS.
- Configure `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `LEAD_NOTIFICATION_EMAIL`, and `CONTACT_RATE_LIMIT_SECRET` in the deployment environment. Apply `supabase/contact_enquiries.sql` in the approved Supabase project. Verify the `letsfygure.com` sending domain and the `enquiries@letsfygure.com` sender with Resend. The contact API returns 503 until the variables exist; a real persistence and notification test remains untested.
- A local `POST /api/contact` with an empty JSON body returned HTTP 503 and `configuration_required`, confirming the current fail-closed behavior.
- Approve the enquiry data retention period and final privacy/legal content before accepting live submissions.
- Manually review the elements axe marks `incomplete`, especially text on image backgrounds and decorative star symbols. Automated scans do not prove full keyboard, screen reader, zoom, or WCAG conformance.
- Recheck the final hosted site on real mobile devices and network conditions. Local Lighthouse scores cannot establish field Core Web Vitals.
