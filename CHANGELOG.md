# Changelog

All notable changes to this project will be documented in this file.

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
