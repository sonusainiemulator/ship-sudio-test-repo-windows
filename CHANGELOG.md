# Changelog

All notable changes to this project will be documented in this file.

## [1.4.3] - 2026-10-08 00:58 IST

### Fixed
- **Mobile Horizontal Scrolling & Scroll Freeze on Gig Details Pages**:
  - Fixed breadcrumbs and action icons in `.gd-top-nav` from blowing out mobile viewport by adding `flex-wrap: wrap`, text truncation on long subcategory titles (`max-width: 240px`), and clean stacked layout on `≤ 640px`.
  - Added `min-width: 0; max-width: 100%; width: 100%;` on `.gd-left`, `.gd-right`, and `.gd-grid` to prevent CSS Grid from expanding past 100vw when housing table matrices.
  - Wrapped Compare Packages Matrix Table with `overflow-x: auto; -webkit-overflow-scrolling: touch; overscroll-behavior-x: contain; touch-action: pan-x pan-y;` and added an intuitive mobile swipe hint (`.gd-matrix-scroll-hint`).
  - Switched right sidebar order box on mobile (`≤ 1024px`) from `position: sticky; top: 90px;` to `position: static;` to eliminate mobile scroll trap issues.
  - Added mobile fixed bottom action bar (`.gd-mobile-bottom-bar`) with package starting price and quick "Order Now" WhatsApp CTA.
  - Disabled Lenis smooth scrolling on touch devices (`pointer: coarse` / `≤ 1024px`) in [Layout.astro](file:///g:/rakebig-com-new-site/src/layouts/Layout.astro) to eliminate touch lag, scroll freezing, and gesture interference, restoring native 120Hz hardware-accelerated touch momentum.
  - Strictly clipped root document horizontal overflow in [global.css](file:///g:/rakebig-com-new-site/src/styles/global.css) with `overflow-x: clip; max-width: 100vw; width: 100%;`.

---

## [1.4.2] - 2026-10-08 00:05 IST


### Fixed
- **Mobile Dropdown Menu Design & Giant Caret Sizing Bug**:
  - Fixed SVG sizing bug in mobile drawer accordion triggers where chevron SVGs lacked explicit dimensions in CSS and expanded to full container width upon rotation (`rotate(180deg)`), producing a giant green triangle covering the viewport.
  - Strictly clamped `.gh-drawer__caret` and `.gh-drawer__acc-trigger svg` dimensions with `width: 14px !important`, `height: 14px !important`, `max-width: 14px !important`, `min-width: 14px !important`, and `flex-shrink: 0 !important`.
  - Added dedicated mobile category dropdown sheet (`#gh-mobile-dropdown`) directly beneath `.gh-catnav` with smooth slide-down popover animation, sticky header with item counts, quick "View all category gigs" action, and organized service subcategories.
  - Added mobile category pill caret toggle buttons (`.gh-catnav__caret-mobile-btn`) with smooth rotation and active styling (`.is-dropdown-active`).

### Added
- **Local Assets Generation for Discover AI Agents**:
  - Generated all 40 missing 16:9 WebP gig thumbnails in `public/assets/gigs/discover/` (`gig-[id].webp`) covering AI Voice Agents, Meta WhatsApp Automation, n8n/Make Workflows, Web Scraping, and Autonomous Multi-Agent Squads.
  - Generated 10 high-resolution seller avatar images in `public/assets/gigs/avatars/` (`avatar-[username].png`).
  - Updated `src/data/discoverAiAgents.ts` to point to local assets, completely removing all broken 404 remote Cloudinary image dependencies.

---

## [1.4.1] - 2026-10-07 23:37 IST


### Fixed
- **Mobile Responsive Gigs Mega Menu & Category Navigation**:
  - Gated desktop floating mega overlay (`.gh-mega-overlay`) strictly to viewports `> 1024px`, preventing touch `focus` on mobile devices from accidentally opening the desktop multi-column overlay and trapping the screen.
  - Added `@media (max-width: 1024px) { .gh-mega-overlay { display: none !important; } }` and scoped JS mouseenter/focus bridges to desktop screen widths.
  - Added click-outside dismissal for desktop mega menus.

### Added
- **Mobile Categories Starter Chip**: Added a prominent "Categories" chip to the front of the category bar on mobile to open the full marketplace drawer with one tap.
- **Mobile Caret Subcategory Triggers**: Added dedicated caret toggle buttons (`.gh-catnav__caret-mobile-btn`) next to category chips on mobile to open the drawer directly with that category's accordion expanded.
- **Real-Time Live Search in Mobile Drawer**: Added a live search filter input (`#gh-drawer-search-input`) inside the marketplace drawer to instantly search across all 10 categories, subcategory groups, and individual services.
- **Enhanced Mobile Drawer Accordion UX**:
  - Service count badges on category accordion items.
  - Visual highlight for the active category (`is-current-category`).
  - Animated hamburger &rarr; X transformation on toggle (`aria-expanded="true"`).
  - Modern touch pill styling with momentum scrolling and hidden desktop arrow buttons on `≤ 768px`.
  - Dynamic viewport height (`100dvh`) and safe-area insets (`env(safe-area-inset-bottom)`) for modern mobile browsers.

---

## [1.4.0] - 2026-10-07 12:22 IST

### Added
- **Discover AI Agents Hub**: Added a full-featured Fiverr-style AI Agent discovery catalogue (`/discover-ai-agents` and `/gigs/discover-ai-agents`).
  - Real-time search by title, keyword, tech stack, and tags.
  - Category filters: Customer Service, Coding & Dev, Sales & Outreach, Data & Research, Workflow Automation, Voice & Audio.
  - Interactive tag pills with instant filter toggles.
  - Sorting options: "Most Popular", "Rating: High to Low", "Price: Low to High", and "Price: High to Low".
  - High-converting gig cards with seller badges, star ratings, review counts, delivery speed, and starting prices.
  - Responsive empty state with clear-all action.
- **Fiverr-Style Category & Subcategory Navigation**:
  - Implemented full Fiverr-inspired service taxonomy (`src/data/fiverrCategories.ts`) in [GigsHeader.astro](file:///g:/rakebig-com-new-site/src/components/GigsHeader.astro).
  - Multi-column mega menus for AI Services, Programming & Tech, Digital Marketing, and Cloud / DevOps.
  - Streamlined mobile submenus and drawer navigation.
- **New AI Gig Service Offerings & High-Res Thumbnails**:
  - AI Voice Agents (`/gigs/ai-voice-agents`)
  - Custom LLM & RAG Pipelines (`/gigs/custom-llm-rag`)
  - Zapier & n8n Workflow Automations (`/gigs/zapier-n8n-automations`)
  - AI Employee Automation Hermes / OpenClaw (`/gigs/build-ai-employee-automation-hermes-openclaw`)
  - High-resolution thumbnails added to `public/assets/gigs/`.
- **SEO & Sitemap Indexing**:
  - Updated [sitemap.xml](file:///g:/rakebig-com-new-site/public/sitemap.xml) with Discover AI Agents and all new gig URLs with appropriate change frequencies and priorities.

---

## [1.3.0] - 2026-09-22

### Added
- **Mobile Slide-In Navigation Drawer**: Replaced the floating card dropdown with a proper full-height right-side slide-in drawer for mobile users (`≤960px`).
  - Smooth `translateX` CSS transition (300ms cubic-bezier) for drawer slide animation.
  - Dimmed backdrop overlay with `backdrop-filter: blur(3px)` — tap-to-close supported.
  - **Body scroll lock** when drawer is open (`overflow: hidden` on `<body>`).
  - Drawer auto-closes on nav link click, Escape key, and backdrop tap.
- **Animated Hamburger → X**: Three `.burger__line` spans animate smoothly into an X when the menu is open (top/bottom bars cross, middle bar fades out).

### Changed
- **Mobile Menu UX**: Nav trigger items now span full drawer width with `justify-content: space-between`, larger touch targets (`16px vertical padding`), and divider borders between items.
- **Mobile Accordion Panels**: Sub-menus render with a light `#f8fafc` background inside the drawer with no box-shadow or border-radius to feel native and flat.
- **Mobile Product Group Labels**: Smaller `10px` uppercase labels and hidden description text in mobile view to keep the drawer compact and scannable.

---

## [1.2.0] - 2026-09-22

### Added
- **5-Column Products Mega Menu**: Expanded the site header's Products dropdown into a full-width, 5-column mega menu.
- **New Product Offerings & Badges**:
  - **SMS Panel SaaS**: Multi-gateway bulk SMS platform, OTP API & automated messaging (with `SOON` status badge).
  - **Bio Links Platform**: Smart link-in-bio builder for creators & SaaS platforms (with `SOON` status badge).
  - **AI Website Builder**: Prompt-based instant website generation & SaaS platform (with `SOON` status badge).
- **Rakebig RS SVG Favicon**: Replaced default favicon with high-contrast Rakebig Services "RS" brand emblem SVG (`/favicon.svg`).
- **MegaMenuList Enhancements**: Added support for configurable column grids (`cols`), status badge indicators (`NEW`, `SOON`), external link indicators, and new SVG icons (`mail`, `link`).

### Changed
- **Navigation Structure**: Grouped Products into 5 distinct categories (*Perfex CRM & Apps*, *Messaging & SMS*, *AI & Builders*, *Bio Links & Growth*, *Squads & Proof*).
- **Core Package Upgrades**: Upgraded core project dependencies to latest versions: `astro` v7.3.3, `tailwindcss` & `@tailwindcss/vite` v4.3.3, and `lenis` v1.3.26.
- **Header Dropdown Styling**: Configured `.site-header__panel--products` for full-width layout (`max-width: 1380px`), while maintaining 2-column menu width (`672px`) for *Solutions*, *Clone Apps*, and *Open Source*.

### Removed
- **Header Navigation Links**: Removed redundant standalone `WhatsApp AI`, `Portfolio`, and `Case Studies` links from the main header navigation bar (these remain accessible via the Products mega menu, footer, and dedicated pages).
