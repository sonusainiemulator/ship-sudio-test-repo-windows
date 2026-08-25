# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A static marketing site for **Rakebig** (IT services / Perfex CRM consulting), built with the Astro Static Marketing Site Starter and managed through Ship Studio. Astro 7 + Tailwind CSS 4, no backend, no test suite, no CMS — content lives directly in the `.astro` page files.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview the production build locally
```

There is no lint, typecheck, or test script configured — `tsconfig.json` extends `astro/tsconfigs/strict` but nothing runs it explicitly (Astro's editor tooling / `astro check` would surface type errors if needed, but it isn't wired into package.json).

When verifying UI changes, prefer the `shipstudio-preview` MCP tools (`preview_navigate`, `preview_click`, `preview_screenshot`, `preview_console`, etc.) over generic browser automation — they drive the live preview the user is already watching in Ship Studio.

## Architecture

- **Pages** (`src/pages/*.astro`) — one file per route, each a long, mostly self-contained sequence of `<section>` blocks composed from shared components and Tailwind utility classes: `index.astro` (home), `product.astro`, `solutions.astro`. Page-local data (testimonials, footer columns, feature lists, etc.) is defined as plain JS arrays/objects in each page's frontmatter, not fetched from anywhere.
- **`src/layouts/Layout.astro`** — the single shared shell (`<html>`/`<head>`/`<body>`). Every page wraps its content in this layout. It also owns three global inline `<script>` blocks that every page depends on:
  - Lenis smooth scrolling (skipped under `prefers-reduced-motion`).
  - `.glow-follow` — cursor-tracking radial glow used by buttons/cards (see `PrimaryButton.astro` for the canonical usage). CSS lives in `global.css`, JS wiring lives in `Layout.astro`.
  - `.reveal` / `.reveal-stagger` scroll-reveal (IntersectionObserver-driven fade+rise). Gated on both JS and reduced-motion via the `js-reveal` class set on `<html>` before paint to avoid FOUC/hiding content when JS is disabled. `.reveal-stagger` cascades a per-child transition delay to its direct children.
  - All three re-run on `astro:after-swap` (Astro view transitions), not just initial load — new markup keeps working after a client-side page swap.
- **`src/components/*.astro`** — small, prop-driven presentational components (buttons, cards, panels, rows). Each typically owns its own `<style>` block scoped to itself rather than relying on global classes, except where a component intentionally hooks into the global `.glow-follow`/`.reveal` utilities.
- **`src/styles/global.css`** — single global stylesheet. Defines the Tailwind v4 theme via `@theme inline` + CSS custom properties (`--color-*`, `--font-*`), the self-hosted `Tobias TRIAL` display font (`public/fonts/`), and the global utility classes (`.btn*`, `.container`, `.eyebrow`, `.glow-follow*`) shared across pages/components. Prefer editing tokens here over hardcoding colors/fonts in components.
- **`public/assets/`** — static images/SVGs/video referenced by absolute path (e.g. `/assets/...`) from pages and components.
- **`.shipstudio/`** — Ship Studio project metadata and plugins (e.g. a Vercel deploy plugin under `.shipstudio/plugins/vercel/`); generally not something to hand-edit for site content changes.

## Conventions

- Fonts: `Geist`/`Geist Mono` (body/mono) via Google Fonts, `Tobias TRIAL` (display) self-hosted — all wired through the `--font-*` CSS variables in `global.css`, not per-component `font-family` overrides.
- Any new interactive/animated element should respect `prefers-reduced-motion`, matching the existing pattern in `Layout.astro` and `global.css`.
- New shared visual primitives (buttons, cards) belong in `src/components/`; one-off section markup stays inline in the page file.
