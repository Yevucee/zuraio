# Zuraio landing page — drop-in package

A self-contained landing page. Everything needed to reproduce it exactly is in this folder.

## Contents
```
zuraio-landing/
├─ index.html              the whole page (inline CSS + JS, Google Fonts via <link>)
├─ assets/
│  ├─ zuraio-hero.jpg      hero image (used as: assets/zuraio-hero.jpg)
│  └─ zuraio-team.jpg      "Why we built it" photo (used as: assets/zuraio-team.jpg)
├─ CURSOR_PROMPT.md        paste this into Cursor to integrate the page into your site
└─ README.md              this file
```

## Quickest way to see it
Open `index.html` in a browser (it's fully self-contained — only the fonts load from the internet).

## How to add it to your GitHub site
1. Copy the whole `zuraio-landing/` folder into your repository.
2. Open the repo in Cursor.
3. Open `CURSOR_PROMPT.md`, copy the block between the `---` lines, and paste it into Cursor's chat.
4. Cursor will detect your stack and add it as a separate page (e.g. at `/zuraio`) without touching the rest of your site.
5. Commit and push.

## Good to know
- **Self-contained:** all styles and scripts are inline in `index.html`. Nothing imports from your site, and nothing should leak into it (keep it on its own route / scoped — see the prompt).
- **Section order:** Hero → Problem → Data Control → Tools → Outcomes → Product demo → Reviewable AI → Why we built it → Final CTA → Footer.
- **Brand line:** the olive line is one continuous SVG drawn by the inline script; it positions itself from the live section layout, so it keeps working at any width and after reordering.
- **Images:** if you move `index.html`, keep the `assets/` folder next to it (or update the two `src="assets/..."` paths).
- **CTAs:** "Book a demo" → `#final` + a `mailto:`; "See it in action" → `#action`. Swap in your real booking link when ready.
- **Hero image** has the headline/UI baked in (not responsive text). A hidden `<h1>` + `alt` text cover accessibility. Ask if you later want a fully live, responsive hero.
