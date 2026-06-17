# Agent instructions

## Project overview

Static marketing website for Zuraio AI Hub. Built with Vite, React, React Router, and Tailwind CSS.

## Common commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Production build: `npm run build`
- Preview production build: `npm run preview`

## Code layout

- Pages: `src/app/pages`
- Shared components: `src/app/components`
- Routes: `src/app/routes.tsx`
- Theme tokens: `src/styles/theme.css`
- i18n messages: `src/i18n/messages`

## Cursor Cloud specific instructions

The cloud environment starts a Vite dev server on port 5173. Use the exposed web port to preview changes in the browser.

When editing content, prefer updating i18n message files in `src/i18n/messages` rather than hardcoding copy in components.

Before finishing a change, run `npm run build` to verify the production build succeeds.
