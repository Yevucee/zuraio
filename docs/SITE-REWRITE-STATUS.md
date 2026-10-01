# Site rewrite (review → live)

Canonical copy and Cursor brief: **`docs/zuraio-site-rewrite.md`**.

## Done on alt homepage preview

- Founders contact follow-up: days, not weeks (not a fixed SLA).
- IT partner link: no factsheet wording; points to `technical-architecture.html`.
- Founder cards: name, photo, email only (no role placeholders).

## Next (Part B in rewrite doc)

Implement EN/DE review pages with the alt-home design system (`homepage-preview.css`, copy modules, dash guard):

1. `how-it-helps.html` (+ merge `knowledge` → `#skills`, redirects)
2. `security.html` (new; merge data-control, deployment-models, ai-governance)
3. `integrations.html`, `technical-architecture.html`, `about.html`, `faq.html`, `contact.html`
4. ~~Nav/footer aligned with alt homepage; hide pricing/resources/new-in-zuraio from links and sitemap~~ **Done (Run 1)** — see `docs/RUN-1-CLEANUP-REMOVALS.md`
5. ~~`security.html` (Part A §2) + redirects; FR/IT hidden from nav/sitemap~~ **Done (Run 2)** — see `docs/RUN-2-SECURITY.md`

Extend `scripts/check-alt-home-copy-dashes.mjs` to each new `copy-*.js` module as it is added (legacy `copy-en.js` / `copy-de.js` stay out of scope until those pages migrate).
