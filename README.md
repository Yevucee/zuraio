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