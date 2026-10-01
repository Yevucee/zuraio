# Run 1 — cleanup removals

Site rewrite **Run 1**: unpublish selected pages from navigation and SEO, drop all links to them, and remove customer-visible TODO / placeholder / team-instruction copy.

## Unpublished from nav, footer and sitemap (files kept)

| Page | Paths |
|------|--------|
| Resources | `resources.html` |
| Pricing (preview) | `en/pricing.html`, `de/preise.html` |
| New in Zuraio | `en/new-in-zuraio.html`, `de/neu-bei-zuraio.html` |

### Link removals

- **Footer (all locales):** `Resources` / `Ressourcen` / `Risorse`, `Pressroom` / `Medien` / `Media` → `resources.html`
- **Alt homepage footer:** `Neu bei Zuraio` / `New in Zuraio` → changelog stubs
- **Alt homepage FAQ:** `Alle Preise →` / `See all prices →` → pricing preview pages
- **Sitemap:** `resources.html` removed from `scripts/seo-config.mjs` (60 URLs = 15 pages × 4 locales)

Build guard: `scripts/check-unpublished-page-links.mjs` fails if any linked source references the unpublished URLs (allowlist: the offline files themselves).

## Visible TODO / placeholder / team instruction removed

### Alt homepage (`copy-alt-home.js`)

- FAQ pricing deep-links (text retained, links removed)
- Footer changelog link (`footerNewLink` + chrome render)
- Bracket placeholders: pilot examples band, exit terms on pilot step 4

### Alt pricing preview

- `employeeTodo` strings and dev-only render block

### Main HTML

- `how-it-helps.html` — internal review todo block
- `contact.html` — development form notice, starter-partner TODO, integration comment block, empty status note
- `resources.html` — card-level `TODO` status notes (page not linked)
- `impressum.html` — todo blocks, bracket fields, mono TODO lines, “placeholder” disclaimer prefix
- `privacy.html`, `terms.html`, `cookies.html` — todo blocks, HTML TODO comments, mono TODO lines; neutral hero ledes

### Localised legal copy (DE / FR / IT)

- `apply-legal-i18n.js` no longer renders banners, section `todo` / `todoBlock`, or `lastUpdated` placeholder lines
- `copy-*-legal.js` — bracket `[…]` field values → em dash; stripped `todo` / `lastUpdated`; softened cookie category intro

### Not removed (internal-only, not shown in public mode)

- `INTERNAL_REVIEW_MODE === false` hides `[data-internal-only]` blocks and review panels
- `alt-homepage.js` dev-only `#alt-home-todos` list (only when preview dev build flag is on)
- `page-review-status.js`, `internal-review.js` source strings (not rendered publicly)

Legal banner strings remain in `copy-de-legal.js` etc. but are **not injected** into the DOM after Run 1.
