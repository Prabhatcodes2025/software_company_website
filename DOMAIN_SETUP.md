# LetsFygure production domain setup

Confirmed primary URL: `https://letsfygure.com`. Secondary URL: `https://www.letsfygure.com`, permanently redirected to the same path on the primary domain. The repository contains a host-based 308 fallback redirect in `next.config.mjs`; Vercel must still serve both hostnames.

## Manual Vercel and DNS actions (not performed)

1. In the intended Vercel project, open **Settings → Domains**. Add and verify both `letsfygure.com` and `www.letsfygure.com`. Keep the apex as the production primary and set `www` to **Redirect to** `letsfygure.com` in the domain settings. Confirm the redirect retains paths and query strings.
2. At the authoritative DNS provider, set the apex (`@`) A record and `www` CNAME to the **exact values Vercel displays for this project**. Vercel's general-purpose examples are `76.76.21.21` and `cname.vercel-dns-0.com`, but project-specific values or verification TXT records can differ. Remove conflicting A/AAAA/CNAME records only after reviewing existing records. Preserve MX, SPF, DKIM, DMARC and other mail-related records.
3. Wait for Vercel to report valid configuration and issue TLS certificates for both names. Verify `https://letsfygure.com` serves the site, and `https://www.letsfygure.com/path?query=1` returns one permanent redirect to `https://letsfygure.com/path?query=1`.
4. After an approved deployment, recheck `/sitemap.xml`, `/robots.txt`, canonical links, Open Graph/Twitter image URLs and JSON-LD on the live domain. Add the apex sitemap to Search Console if LetsFygure uses it.

## Production environment

Configure these server-only variables in Vercel before enabling the contact form: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `LEAD_NOTIFICATION_EMAIL`, `CONTACT_RATE_LIMIT_SECRET`. Apply `supabase/contact_enquiries.sql` in the approved Supabase project and verify the `enquiries@letsfygure.com` sender in Resend. Review and approve the enquiry retention policy. The API returns 503 until required variables are present.

`CONTACT_ALLOWED_ORIGINS` is optional. Supply a comma-separated list of **exact HTTPS origins** only for deliberately trusted preview or staging hosts that should accept contact submissions. Production accepts the confirmed apex and `www` origins by default; same-origin browser requests are required. Local `http://localhost` and `http://127.0.0.1` are accepted only in non-production mode. Do not use a wildcard or include untrusted Vercel preview URLs.

The public canonical URL is deliberately fixed in `lib/site.ts` to the owner-confirmed production identity so previews do not publish preview-domain canonicals. Credentials and deployment-specific contact origins are environment variables. Changing the production domain later requires an intentional code review.

Vercel references: [custom-domain setup](https://vercel.com/docs/domains/set-up-custom-domain) and [domain redirects](https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting). Use the values Vercel shows for the actual project when changing DNS.
