# LetsFygure final polish and security review

29 October 2026. Local work only; no push, deployment, DNS change, credential rotation, or history rewrite.

## Security finding

- Commit `acf5664` contains `.next-pre-corrective/cache/.rscinfo` with an `encryption.key` field. The installed Next.js implementation identifies this as its Server Actions encryption cache. The field was 44 characters and its cache expiration had not passed at review time. The value was not printed or copied into this report.
- Current source has no `use server` actions and no local `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY`. The owner confirmed that `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` is not configured in Vercel. The key in the current local `.next/cache/.rscinfo` differs from the committed one. This supports the conclusion that the committed value is a generated build key, not a Supabase, Resend, or application API credential. The production deployment's build provenance could not be checked, so active use of the old build cannot be ruled out.
- `.gitignore` now excludes `.next/`, `.next-*/`, `.vercel/`, environment files, key/certificate files, logs and caches. All 192 tracked `.next-pre-corrective` artifacts were removed from the Git index with `git rm --cached`; local copies were retained. `git ls-files` now returns zero `.next*` paths and `git check-ignore --no-index` confirms both cache paths, `.env.local` and `.vercel/project.json` are ignored.
- Tracked current source and history path checks found no `.env`, `.pem`, `.key`, `.p12`, or `.pfx` files. A current-source pattern scan found no hard-coded Supabase service-role, Resend, GitHub, or private-key values. This is a bounded scan, not a full forensic secret audit of every historical binary.
- **Before any push:** keep the owner-confirmed absence of a configured production key in the incident record, then deploy from a fresh build without Vercel's existing build cache after release approval. The old commit still contains the generated key. A normal removal commit will clean the branch tip, but GitGuardian's historical alert must then be resolved explicitly as a low-risk generated build key (with the fresh-build evidence), or the owner must separately authorize a coordinated history rewrite. Do not mark the detected key as a false positive.

## Brand and site changes

- The owner authorized use of the supplied logo screenshot. Two transparent PNG derivatives were prepared with the built-in image editing tool: `public/images/letsfygure-official.png` (wordmark) and `app/icon.png` / `app/apple-icon.png` (symbol). Prompt: faithfully extract the supplied blue/navy wordmark or symbol, remove screenshot background and scrollbar, preserve geometry and text, add nothing. The original vector file remains preferable for future print or very large display use.
- Active header, footer, quote dialog, Open Graph, Twitter and Organization structured data use the new brand. The separate “Technology” subtitle was removed from reusable header/footer components. The dark footer places the navy wordmark on a warm light surface for contrast.
- Homepage now presents services, business situations, industry context, delivery approach, a technology statement, genuine client-logo marquee, two selected projects, verified Clutch evidence, and the final CTA in that order. The marquee uses the six existing client logo assets, pauses on hover/focus, and becomes a manual horizontal rail with reduced motion.
- The three Insight articles now have article-specific leads and closing principles. Existing `TechArticle` structured data, section navigation, service-page distinctions, case-study evidence, and working CTA destinations were retained.
- WhatsApp launcher enlarged to 60px with a 30px brand icon and remains above the unchanged tawk embed. Tawk positioning itself was not modified. The launcher hides through supported tawk maximize/minimize events when those events fire.
- The existing layered engineering illustration supplies the restrained dimensional treatment; no new 3D library, fictional interface, or decorative object was added.

## Files touched in this pass

- Security: `.gitignore`; staged index removal of `.next-pre-corrective/` generated artifacts.
- Brand assets and delivery: `public/images/letsfygure-official.png`, `app/icon.png`, `app/apple-icon.png`, `public/fonts/Manrope-Latin.woff2`, `app/layout.tsx`, `lib/social-metadata.ts`, `app/brand-polish.css`.
- Active experience: `components/EditorialHeader.tsx`, `components/EditorialFooter.tsx`, `components/EditorialHomepage.tsx`, `components/ProjectMedia.tsx`, `components/FloatingWidgets.tsx`, `app/floating-quote.css`, `components/QuoteModal.tsx`.
- Consistency: `components/Header.tsx`, `components/Footer.tsx`, `app/insights/[slug]/page.tsx`.
- Audit artifacts: `audit/brand-polish/`. Prior uncommitted corrective-redesign and quote-popup work remains in the same checkout and was not reverted.

## Verification and limitations

- ESLint, TypeScript and production build passed after the changes. The 29-route metadata checker passed again, and the final 320/390/768/1024/1440 focused browser and quote checks passed again on the freshly built site.
- Production browser QA: **82/82 route and width checks passed** across all 29 public routes at 1440px and 390px, plus representative routes at 320px, 360px and 430px. All tested routes returned HTTP 200, with no document overflow or broken rendered images. A focused pass at 320/390/768/1024/1440 confirmed both wordmark placements, six client logos, the 60px WhatsApp button, back-to-top visibility, and the font preload. Reduced-motion testing confirmed the marquee animation stops and can be scrolled manually. **20/20 interaction checks passed**, including keyboard navigation and six case-study live-site links. The final branded build also passed **81/81 quote-popup and floating-widget checks**. Files and screenshots are under `audit/brand-polish/rendered/` and `audit/quote-widgets/`.
- Final mobile homepage Lighthouse: **89 performance / 100 accessibility / 100 best practices / 100 SEO**, with **CLS 0**. The prior measured 0.112 font-loading shift was fixed by preloading the self-hosted font. A small-text contrast failure in the new capability section was found and fixed before the final 100 accessibility score. Lighthouse performance is a local lab measurement, not a production guarantee.
- Metadata checker passed all 29 routes with the `https://letsfygure.com` canonical origin and no failures.
- Actual tawk launcher and panel could not be inspected in local Chrome because its embed request failed with `ERR_BLOCKED_BY_ORB` at both 390px and 1440px. A visual size match to a loaded tawk launcher, and real expanded-chat overlap, require a deployed-domain check. The unchanged script tag was present and requested.
- A separate read-only check of the current public site also failed to load the tawk iframe at 390px and 1440px (`ERR_BLOCKED_BY_ORB`); this is a browser environment limitation, not evidence that live visitors cannot load chat.
- Local form persistence and notification delivery remain untested without the production Supabase/Resend configuration. The earlier quote flow tests covered validation, focus, error/success states and safe failure.

## Route review

| Route group | Review outcome |
| --- | --- |
| Homepage | Reordered sections, added a compact technology statement, moving logo proof after capabilities. Kept two featured projects and approved hero composition. |
| About, industries, services index and all ten service details | All routes rendered at desktop/mobile with no broken images or overflow. Existing distinct service content and related evidence were retained; no broad template rewrite was warranted. |
| Case-study index and six case studies | All routes rendered with loaded project images; live-site link destinations were present for all six. Existing project-specific storytelling was retained. |
| Insights index and three articles | Removed identical article leads and conclusions; preserved category, section navigation and `TechArticle` data. No fabricated authors, dates, figures or stock imagery added. |
| Contact, careers, privacy and terms | All rendered without overflow or broken images. Existing contact architecture and legal text were retained. |

The supplied Infograins screenshots were used for widget-quality reference. Its live site required client-side JavaScript in the text browser, so a full visual comparison against every page there was not possible. No Infograins assets or code were used.
