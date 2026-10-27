# Production-domain preparation checks

Run on 26 October 2026 against the local Next.js production build. The machine's public DNS and the live Vercel project were not changed or tested.

- `corepack pnpm lint`: passed without warnings or errors.
- `corepack pnpm exec tsc --noEmit`: passed.
- `corepack pnpm build`: passed; 36 static pages generated.
- `node scripts/check-production-metadata.mjs` with `AUDIT_BASE_URL=http://localhost:3011`: checked 29 sitemap URLs. All had matching `https://letsfygure.com` canonical and `og:url`, apex-hosted Open Graph/Twitter images and JSON-LD. `robots.txt` pointed to the apex sitemap. Zero failures; machine-readable details are in `metadata-results.json`.
- A simulated `Host: www.letsfygure.com` request for `/services/web-development?source=qa` returned HTTP 308 with `Location: https://letsfygure.com/services/web-development?source=qa`.
- Contact API, simulated production host: approved same-origin request reached the existing HTTP 503 configuration guard; cross-site and missing-Origin requests returned HTTP 403.
- Contact API in `next dev` on localhost:3012: same-origin request reached HTTP 503; a different localhost origin returned HTTP 403.

The HTTP 503 is the existing fail-closed response while Supabase and Resend variables are absent. Live submission persistence, email delivery, TLS certificates, Vercel domain attachment and DNS propagation remain untested. Follow `DOMAIN_SETUP.md` after approval to modify the live deployment and DNS.
