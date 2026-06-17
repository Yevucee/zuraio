# Cursor prompt — add the Zuraio landing page to my site

Copy everything between the lines below and paste it into Cursor (Cmd/Ctrl-L) **after** you have
added the `zuraio-landing/` folder to your repository.

---

I have added a folder `zuraio-landing/` to this repository. It contains a complete, self-contained
landing page and its images:

- `zuraio-landing/index.html` — the full page. ALL CSS and JavaScript are inline. Fonts load from
  Google Fonts via `<link>` tags in `<head>`. There is one animated SVG "brand line" (a `<svg class="spine">`)
  that is drawn and positioned by the inline `<script>` as you scroll.
- `zuraio-landing/assets/zuraio-hero.jpg` — the hero image (referenced as `assets/zuraio-hero.jpg`).
- `zuraio-landing/assets/zuraio-team.jpg` — the "Why we built it" team photo (referenced as `assets/zuraio-team.jpg`).

## Goal
Add this as a SEPARATE page/route on my existing site, reachable at `/zuraio` (suggest a better path if
my stack has a convention). It must render and behave **EXACTLY** like `zuraio-landing/index.html`:
same layout, the Olive/IBM Plex visual system, the hero image, the two clickable hero buttons, the
animated + pulsing brand line that hands off from the hero image at the same angle, the scroll-reveal
animations, the section order, and the `prefers-reduced-motion` behaviour. Do **not** change or break
any existing page, style, script, or route.

## Do this
1. Inspect the repo and detect the stack (plain static HTML, Jekyll, Hugo, Eleventy, Astro, Vite,
   Next.js, Remix, SvelteKit, etc.). Tell me what you found.
2. Add the page the idiomatic way for that stack, but keep the rendered result identical:
   - **Static site (plain HTML / Jekyll / Hugo / Eleventy):** place the page at `/zuraio/index.html`
     and copy the images to a sibling `/zuraio/assets/` folder so the existing relative paths
     (`assets/zuraio-hero.jpg`, `assets/zuraio-team.jpg`) keep working. Don't run it through a global
     layout/template that would inject extra CSS.
   - **Component framework (Next.js / Astro / Vite / SvelteKit / etc.):** create a new route that
     renders this page **without the global site layout/wrapper**, so the site's global CSS cannot
     leak in. Options, in order of preference: (a) serve `index.html` as a static asset under
     `public/zuraio/` and link to it; (b) create a standalone route that returns this exact HTML with
     its inline `<style>`/`<script>` intact and no shared layout; (c) only if needed, port the markup
     into a component and move the inline CSS into a **scoped/CSS-module** stylesheet so nothing leaks
     in or out. Keep the JavaScript behaviour identical.
3. Put the images where the page can find them and fix the `src` paths if the location changes. Keep
   `assets/zuraio-hero.jpg` and `assets/zuraio-team.jpg` resolving correctly.
4. Keep the `<head>` Google Fonts `<link>` tags and the `<meta name="viewport">`.
5. **Isolate the page so global styles don't alter it.** It uses generic class names (`.hero`, `.wrap`,
   `.btn`, `.marker`, etc.). If my global CSS could collide, render this page on its own route without
   the global layout (preferred), or scope its styles. The page must look pixel-identical to the file.
6. Do not split the inline CSS/JS into the global bundle. Keep the page self-contained.

## Must NOT change
- Any copy/text on the page.
- The element IDs used by in-page anchors: `#pain`, `#control`, `#tools`, `#action`, `#final`.
- The hero, the section order, or the brand line behaviour.
- Any other page, global stylesheet, font setup, or navigation (don't auto-add nav links — ask me first).

## Verify before you finish
Run the dev server and check at desktop (~1440px) and mobile (~390px) widths:
- The hero image fills the top; the two hero buttons ("Book a demo", "See it in action") are clickable.
- The brand line draws in and pulses down the page, and hands off from the bottom of the hero image at
  the same angle as the line painted into the image (no kink at the seam).
- Sections appear in this order: **Hero → Problem → Data Control → Tools → Outcomes → Product demo →
  Reviewable AI → Why we built it → Final CTA → Footer.**
- Layout stacks cleanly on mobile.
- `prefers-reduced-motion: reduce` disables the animations (line shows fully drawn, no moving dots).
- **No console errors or 404s** (especially for the two images and the fonts).

When done, tell me the exact URL/path to open it, and list any files you added or changed.

## Notes / things I may want to set later
- The hero text and product UI are baked into `zuraio-hero.jpg`, so on small screens that text does not
  reflow and is not selectable. For accessibility I included a visually-hidden `<h1>` and descriptive
  `alt` text. If I later want a fully responsive, accessible hero, we can rebuild the hero text/UI as
  live HTML over a background photo — but for now keep the image hero exactly as-is.
- The hero CTAs are positioned hotspots over the image. "Book a demo" links to `#final` and a
  `mailto:` address; "See it in action" links to `#action`. Replace these with my real demo/booking
  link when I give it to you — don't change them otherwise.

---
