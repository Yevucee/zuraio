# Alternative homepage preview (not live)

## Routes

| Locale | URL (local dev) | GitHub Pages (Yevucee) |
|--------|-----------------|-------------------------|
| **DE (primary)** | `/zuraio-comparison/de/homepage-preview.html` | `https://yevucee.github.io/zuraio/de/homepage-preview.html` |
| **EN** | `/zuraio-comparison/en/homepage-preview.html` | `https://yevucee.github.io/zuraio/en/homepage-preview.html` |

Hero variants: `?hero=a` (default), `?hero=c`, `?hero=h`

Changelog stubs: `de/neu-bei-zuraio.html`, `en/new-in-zuraio.html`

## Branch

`cursor/homepage-preview-local-en`

## Files (preview-only)

- `js/copy-alt-home.js`, `js/alt-homepage.js`, `js/alt-homepage-chrome.js`, `js/alt-homepage-analytics.js`
- `css/homepage-preview.css` (scoped to `body[data-page="altHome"]`)
- `de/homepage-preview.html`, `en/homepage-preview.html`

Live `index.html` and global `site.css` are unchanged except a safe early-return in `hero-comparison.js` when `data-preview-static-hero` is set (unused on main site).
