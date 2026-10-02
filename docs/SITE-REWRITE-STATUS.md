# Site rewrite (review → live)

Canonical copy and Cursor brief: **`docs/zuraio-site-rewrite.md`**.

## Done on alt homepage preview

- Founders contact follow-up: days, not weeks (not a fixed SLA).
- IT partner link: no factsheet wording; points to `technical-architecture.html`.
- Founder cards: name, photo, email only (no role placeholders).

## Part B runs (EN + DE, alt chrome)

| Run | Page | Doc |
|-----|------|-----|
| 1 | Cleanup, nav, redirects | `docs/RUN-1-CLEANUP-REMOVALS.md` |
| 2 | `security.html` | `docs/RUN-2-SECURITY.md` |
| 3 | `integrations.html` | `docs/RUN-3-INTEGRATIONS.md` |
| 4 | `how-it-helps.html` (+ `#skills`, redirects) | `docs/RUN-4-HOW-IT-HELPS.md` |
| 5 | `contact.html` | `docs/RUN-5-CONTACT.md` |
| 6 | `technical-architecture.html` | `docs/RUN-6-TECHNICAL-ARCHITECTURE.md` |

**Still to build:** `about.html`, `faq.html`.

Extend `scripts/check-alt-home-copy-dashes.mjs` to each new `copy-*.js` module as it is added (legacy `copy-en.js` / `copy-de.js` stay out of scope until those pages migrate).

## Go-live checklist

- Connect the new contact form to the live site's existing form handling and send a test before switching.
- Remap preview routes in `public/zuraio-comparison/js/site-routes.js` (home to `/` and `/de/`, etc.), run `node scripts/apply-routes.mjs`, then verify links with `node scripts/check-route-hrefs.mjs` and `node scripts/check-internal-links.mjs`.
- Deploy Worker + PA secrets per `docs/CONTACT-FORM-GO-LIVE.md` when switching contact API on production (`Mcwili/zuraio`).

## Preview routes (single source of truth)

- **`public/zuraio-comparison/js/site-routes.js`** (mirrored by `scripts/site-routes.mjs`): EN/DE paths for home (`en/homepage-preview.html`, `de/homepage-preview.html`), site pages at root and under `de/`. About and FAQ temporarily point at homepage `#team` / `#faq` (TODO Run 7).
