# Zuraio website

Static marketing website for Zuraio AI Hub, exported from Figma and cleaned for deployment with Vite, React and GitHub Pages.

## Run locally

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

## Build

Create the production build in `dist`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Cursor Cloud

This repo includes a Cursor Cloud environment so you can work from any machine (Mac, home, etc.) without a local Node setup.

Configuration lives in `.cursor/environment.json`. On startup it runs `npm install` and starts the Vite dev server on port 5173.

To use it:

1. Open this repo in Cursor
2. Start a **Cloud Agent** from the `main` branch
3. Preview the site via the exposed port 5173 in the Cloud UI

If a stale environment is cached, delete it from the [Cloud Agents dashboard](https://cursor.com/dashboard?tab=cloud-agents) and start fresh.

Agent instructions for cloud sessions are in `AGENTS.md`.

## Zuraio landing page (standalone)

A self-contained landing page package lives in `zuraio-landing/`. It is intended as a separate page from the main React site, served at `/zuraio/index.html` without sharing the global layout or styles.

If `index.html` and the images in `zuraio-landing/assets/` are not yet in the repo, see `zuraio-landing/ADD_MISSING_FILES.md` for how to add them from your Mac.

**Live URL:** `/zuraio/index.html` (static, isolated from the React app)

## Hero comparison site (review)

A separate multi-page site for comparing five hero messaging options lives in `public/zuraio-comparison/`. It does **not** replace the React homepage.

**Review URL:** `/zuraio-comparison/index.html?hero=1&lang=en`

- Five hero options labelled **Option 1 of 5** through **Option 5 of 5** (not internal working numbers)
- Five full hero images (copy baked in): `public/zuraio/assets/zuraio hero 1.png`, `Zuraio header 2.png`, `Zuraio hero 3.png`, `Zuraio hero 4.png`, `Zuraio hero 5.png` — see `public/zuraio/assets/ADD_HERO_IMAGES.md`
- English and German via the header language switcher (`?lang=en` / `?lang=de`)
- Comparison controls toggle in `public/zuraio-comparison/js/config.js`:

```js
HERO_COMPARISON_ENABLED = true   // false hides controls and locks to DEFAULT_HERO_OPTION
DEFAULT_HERO_OPTION = 1          // 1–5
```

The main React app links to this site from the homepage comparison banner (“Hero comparison (5 options)”).

Legal pages (`privacy.html`, `impressum.html`, `terms.html`, `cookies.html`) are **structured placeholders** — not for publication until legal review.

## Deploy to GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

After pushing to GitHub:

1. Open the repository settings.
2. Go to `Pages`.
3. Set `Build and deployment` to `GitHub Actions`.
4. Push to the `main` branch to publish the site.

The Vite config uses relative asset paths and hash routing so the site works from a GitHub Pages repository URL.

## Editing

Main content lives in `src/app/pages`.

Shared layout and reusable pieces live in `src/app/components`.

Brand colours, typography and theme tokens live in `src/styles/theme.css`.

Fonts are imported from Google Fonts in `src/styles/fonts.css`.

If you add images later, place them in a clear assets folder such as `src/assets` or `public/assets/images`, then import or reference them with relative paths.