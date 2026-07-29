# Zuraio website

Marketing website for Zuraio AI Hub. The **canonical public site** is the static multi-page site in `public/zuraio-comparison/`.

## Run locally

```bash
npm install
npm run dev
```

Open the marketing site at `/zuraio-comparison/index.html` (or `/` after production build, which redirects there).

## Build

```bash
npm run build
```

This builds assets into `dist/` and sets the repo root (`dist/index.html`) to redirect to `dist/zuraio-comparison/index.html`. The legacy React homepage and `/zuraio/` landing page also redirect to the marketing site.

Preview:

```bash
npm run preview
```

## Homepage hero

The homepage uses **one fixed hero message** (option 1):

> A digital executive assistant for every employee.

To re-enable internal hero comparison during review, set in `public/zuraio-comparison/js/config.js`:

```js
HERO_COMPARISON_ENABLED = true
```

## Site structure

| Path | Purpose |
|---|---|
| `public/zuraio-comparison/` | **Main marketing site** (homepage + subpages) |
| `public/zuraio/assets/` | Shared images and icons |
| `src/` | Legacy React app (no longer the public homepage) |
| `zuraio-landing/` | Archived standalone landing package |

## Deploy to GitHub Pages

Push to `main`. The workflow at `.github/workflows/deploy.yml` publishes `dist/`.

**Live entry:** `/` → redirects to `/zuraio-comparison/index.html`

## Cursor Cloud

See `AGENTS.md`. Dev server runs on port 5173.
