# Run 2 — Security page + redirects

## New page

- `security.html` (EN + DE copy in `js/copy-security.js`, rendered by `js/security-page.js`)
- Alt-home design tokens via `homepage-preview.css?v=20261001c`
- Sections: hero + trust list → five promises → `#today` AI models (dark) → `#hosting` options → fine print → IT partner CTA

## Legacy URLs (meta refresh + canonical)

| Old | Target |
|-----|--------|
| `data-control.html` | `security.html` |
| `deployment-models.html` | `security.html#hosting` |
| `ai-governance.html` | `security.html#today` |

Locale copies written under `de/`, `fr/`, `it/` at build time (`prerender-site.mjs`).

## Nav / links

- Main nav (EN/DE): How it helps · Skills · Security · About (no Technical dropdown)
- Footer Data & Security: Security, Swiss hosting (#hosting), For your IT partner
- Homepage, technical architecture, FAQ links updated to `security.html` (+ anchors)

## FR / IT

- Hidden from nav language switcher, footer language list, and sitemap (`PUBLIC_SITE_LOCALES` / `SITEMAP_LOCALES`)
- FR/IT pages and URLs unchanged when opened directly; security shows EN copy with `lang` set to locale

## Cache key

`20261001c` on `security.html`, `homepage-preview.css`, `security-page.js`
