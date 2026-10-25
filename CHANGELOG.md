# Changelog

All notable changes to this project will be documented in this file.

## [1.7.4] - 2026-10-25 10:41 IST

### Added (Documentation & SEO)
- **Enterprise SEO-Friendly Company README (`README.md`)**:
  - Replaced generic Astro boilerplate with comprehensive company profile for `rakebig.com`.
  - Added verified brand shields: website status, Cal.com scheduling, 5.0★ Google Maps rating, WhatsApp Concierge, and GitHub profile.
  - Documented core engineering capabilities: AI Business Automation, Perfex CRM Solutions, SaaS Platform Development, Flutter Mobile Apps, On-Demand Clones, and Hardened Self-Hosted Cloud Infrastructure.
  - Included verified marketplace gigs pricing table, technical architecture matrix, client case studies, and verified physical office directories (Bhadra, Jaipur, and London, UK).

## [1.7.3] - 2026-10-25 01:50 IST

### Added (Client Consultation & Video Discovery Call)
- **Free Consultation Appointment Booking Sections on All Gigs (Google Meet & Zoom)**:
  - **Left-Column Luxury Dark-Mode Banner (`.gd-consult-banner`)**:
    - Embedded full-width consultation section directly before the FAQ accordion in [src/pages/gigs/[slug].astro](file:///g:/rakebig-com-new-site/src/pages/gigs/[slug].astro).
    - Obsidian dark aesthetic (`#090e1a` to `#101827`) with emerald ambient radial glow and animated live pulse indicator.
    - Badged header: *"100% Free Discovery Call"* and *"Let's Discuss Your Project on Google Meet or Zoom"*.
    - Platform pills: **Google Meet**, **Zoom HD Video**, and **Live Screen Share**.
    - 3-card benefit summary: **30 Minutes Free** (technical scoping), **Fixed-Price Quotation** (milestones within 2 hours), and **NDA & IP Protected** (confidentiality guaranteed).
    - Dual CTA actions: Direct 1-click calendar sync via [Cal.com](https://cal.com/rakebigservices) and Instant WhatsApp Concierge booking.
  - **Right-Sidebar Companion Booking Card (`.gd-consult-box`)**:
    - Clean, modern light card mounted directly underneath the sticky package order box.
    - Live green pulsing status badge (`100% Free Consultation`), platform badges, and bulleted technical review perks.
    - High-visibility action buttons: *"Schedule Free Video Call"* and *"Book Appointment via WhatsApp"*.

## [1.7.2] - 2026-10-25 01:44 IST

### Added (Gig Ordering Experience)
- **"Need Flexibility When Hiring?" Hourly Offer Card on All Gigs**:
  - Integrated dedicated hourly hiring section right below `panel-premium` inside the sticky order box in [src/pages/gigs/[slug].astro](file:///g:/rakebig-com-new-site/src/pages/gigs/[slug].astro):
    - Circular seller avatar (`gig.seller.avatar`).
    - Bold title: *"Need flexibility when hiring?"*.
    - Description: *"Hire by the hour, ideal for long-term projects with flexible hours and weekly payments."*.
    - Bottom row: **`₹9,966.54/hour`** rate display and underlined **"Request hourly offer"** link directing directly to WhatsApp concierge with prefilled hourly scope message.
    - Positioned persistently inside `.gd-sticky-box` so it remains visible under whichever package tab (Basic, Standard, or Premium) is active.

## [1.7.1] - 2026-10-25 01:36 IST

### Fixed & Improved (Marketplace Header & Guest Auth State)
- **Resolved Static `$24` and Fake User Avatar for Unauthenticated Guests**:
  - Removed hardcoded `$24` balance and external Fiverr CDN avatar from [src/components/GigsHeader.astro](file:///g:/rakebig-com-new-site/src/components/GigsHeader.astro).
  - **Guest State (Default)**: Replaced fake logged-in icons with clean, authentic marketplace guest actions:
    - **Sign In** button (`.gh-auth-link`)
    - **Join** button (`.gh-auth-btn-join`)
    - Kept **WhatsApp AI** badge and **Request Offer** primary CTA.
  - **Client Portal & Auth Modal**:
    - Clicking "Sign In" or "Join" opens a branded Client Portal dialog (`#gh-auth-modal`) notifying visitors that account authentication is rolling out, with direct 1-click links for Instant WhatsApp Concierge and Request Custom Offer.
  - **Prepared Architecture for Upcoming Full Auth System**:
    - Built client-side auth synchronization (`syncAuthState`, `window.setRakebigUser`, `window.clearRakebigUser`).
    - Authenticated view features custom user initials/avatar, dynamic balance, and a responsive dropdown menu (Orders, Saved Gigs, Sign Out).
    - Added interactive demo preview toggle allowing team and developers to test both guest and authenticated header states.
  - **Mobile Drawer Synchronization**: Added guest auth action row ("Sign In" and "Join Rakebig") to the slide-in mobile marketplace drawer.

## [1.7.0] - 2026-10-25 01:25 IST

### Added & Improved (SEO & AI LLM Indexing)
- **High-Velocity Google & AI Search Engine Indexing for 8 Marketplace Gigs**:
  - **Dynamic `FAQPage` JSON-LD Schema**:
    - Added structured FAQ data (`faqs?: GigFaq[]`) to [src/data/gigs.ts](file:///g:/rakebig-com-new-site/src/data/gigs.ts) for all 8 gigs, covering buyer objections, delivery timelines, tools, and revision guarantees.
    - Updated [src/pages/gigs/[slug].astro](file:///g:/rakebig-com-new-site/src/pages/gigs/[slug].astro) to render both semantic HTML FAQ accordions and valid `FAQPage` JSON-LD schema for Google Rich Results snippets and AI answer-engine ingestion (Perplexity, ChatGPT Search, Claude).
  - **Enhanced E-Commerce Product Schema**:
    - Injected missing schema properties (`sku`, `mpn`, `itemCondition`, `priceValidUntil: "2027-12-31"`) into all tier offers in [src/pages/gigs/[slug].astro](file:///g:/rakebig-com-new-site/src/pages/gigs/[slug].astro) for Google Merchant/Product rich snippet compliance.
  - **Keyword Targeting & Meta Tags**:
    - Added targeted keyword sets (`seoKeywords`) to each gig in [src/data/gigs.ts](file:///g:/rakebig-com-new-site/src/data/gigs.ts).
    - Updated [Layout.astro](file:///g:/rakebig-com-new-site/src/layouts/Layout.astro) to accept and output `<meta name="keywords" content={keywords} />`.
  - **Internal Link Mesh ("Related Verified Gigs")**:
    - Implemented a "Related Verified Gigs" grid section at the bottom of [src/pages/gigs/[slug].astro](file:///g:/rakebig-com-new-site/src/pages/gigs/[slug].astro) linking 4 complementary gigs, passing PageRank equity and preventing crawl silos.
  - **LLM Scraper Indexing (`llms.txt`)**:
    - Added comprehensive markdown documentation in [public/llms.txt](file:///g:/rakebig-com-new-site/public/llms.txt) detailing gig offerings, exact pricing (USD & INR), tech stacks, and direct canonical links for AI crawlers (GPTBot, ClaudeBot, PerplexityBot).
  - **XML Sitemap Crawl Tuning**:
    - Tuned [public/sitemap.xml](file:///g:/rakebig-com-new-site/public/sitemap.xml) for all 8 gigs with `priority: 0.95`, `changefreq: daily`, and updated `lastmod: 2026-10-25`.

## [1.6.0] - 2026-10-24 23:55 IST

### Added
- **8 High-Converting Fiverr & Upwork Gigs with Images & Packages**:
  - Implemented 8 comprehensive, market-competitive engineering and creative gigs in [src/data/gigs.ts](file:///g:/rakebig-com-new-site/src/data/gigs.ts):
    1. **AI Video Ads**: *"I will create AI video ads for your brand, product or business"* (`/gigs/create-ai-video-ads-for-brand-business`) — $50 / $120 / $200 (₹4,199 / ₹9,999 / ₹16,799).
    2. **n8n & AI Business Automation**: *"I will automate your business workflow using n8n and AI"* (`/gigs/automate-business-workflow-using-n8n-and-ai`) — $100 / $220 / $400 (₹8,399 / ₹18,499 / ₹33,599).
    3. **AI MVP & Web Application**: *"I will build an AI-powered MVP or web application"* (`/gigs/build-ai-powered-mvp-or-web-application`) — $200 / $480 / $850 (₹16,799 / ₹39,999 / ₹71,499).
    4. **30 Branded Social Media Posts**: *"I will design 30 branded social media posts for your business"* (`/gigs/design-30-branded-social-media-posts-for-business`) — $40 / $85 / $140 (₹3,399 / ₹7,199 / ₹11,799).
    5. **YouTube Shorts & Reels Editing**: *"I will edit engaging YouTube Shorts with captions and hooks"* (`/gigs/edit-engaging-youtube-shorts-with-captions-and-hooks`) — $40 / $85 / $150 (₹3,399 / ₹7,199 / ₹12,599).
    6. **AI Voice Agent & Customer Support**: *"I will build an AI voice agent for customer support, appointment booking or lead qualification"* (`/gigs/build-ai-voice-agent-customer-support-booking-qualification`) — $150 / $320 / $550 (₹12,599 / ₹26,899 / ₹45,999).
    7. **AI Promotional Videos**: *"I will create AI-powered promotional videos for your business, product or social media campaign"* (`/gigs/create-ai-powered-promotional-videos-for-business-campaign`) — $75 / $160 / $300 (₹6,299 / ₹13,499 / ₹25,199).
    8. **Responsive WordPress Business Website & Redesign**: *"I will build a responsive WordPress business website or redesign your existing site"* (`/gigs/build-responsive-wordpress-business-website-or-redesign`) — $75 / $180 / $350 (₹6,299 / ₹15,099 / ₹29,399).
  - **Custom 16:9 Studio Thumbnails**: Created 8 custom photorealistic gig cover graphics in `public/assets/gigs/`:
    - `gig-ai-video-ads.jpg`
    - `gig-n8n-business-automation.jpg`
    - `gig-ai-mvp-webapp.jpg`
    - `gig-social-media-posts.jpg`
    - `gig-youtube-shorts-editing.jpg`
    - `gig-ai-voice-agent-booking.jpg`
    - `gig-ai-promotional-videos.jpg`
    - `gig-wordpress-business-website.jpg`
  - **Category Filter Expansion**: Added `video-animation` ("Video & Animation") and `graphics-design` ("Graphics & Design") to `GIG_CATEGORIES` in [src/data/gigs.ts](file:///g:/rakebig-com-new-site/src/data/gigs.ts) and added interactive filter pills to [src/pages/gigs/index.astro](file:///g:/rakebig-com-new-site/src/pages/gigs/index.astro).
  - **SEO & Sitemap Registration**: Added all 8 new gig URLs and image sitemap tags to [public/sitemap.xml](file:///g:/rakebig-com-new-site/public/sitemap.xml).

---

### Added
- **InfinitieTech-Inspired Luxury Footer Architecture**:
  - Completely redesigned [SiteFooter.astro](file:///g:/rakebig-com-new-site/src/components/SiteFooter.astro) based on the footer design of `infinitietech.com`.
  - **Ambient Top Aura Glow**: Added radial atmospheric illumination (`.site-footer__ambient-glow`) beaming down from top center on deep `#080d1a` midnight black background.
  - **Modern 4-Column Layout**:
    - **Col 1 (Brand & Contacts)**: Circuit logo, mission statement, physical HQ address with Google Maps link, main line phone, dedicated tech support line with operating hours, official support email, and UK branch office.
    - **Col 2 (Services)**: Highlighted core offerings with clean hover shifts.
    - **Col 3 (Company)**: About, Case Studies, Careers, Portfolio, Open Source, and Contact links.
    - **Col 4 (Stay Connected & Community)**:
      - Interactive pill newsletter input with instant submit feedback and human verification badge.
      - Circular glass social icons with brand-colored hover transitions (CodeCanyon, LinkedIn, Instagram, WhatsApp, YouTube, X, GitHub).
      - "Join our WhatsApp Community" green tint badge card with direct link and icon.
      - "Add us as a preferred source on Google" pill button with official 4-color Google G icon.
  - **Middle Payment Methods & CodeCanyon Bar**: Preserved trusted payment badges (PayPal, Visa, Mastercard, Amex, Discover) and CodeCanyon verification.
  - **Bottom Sub-Bar**: Copyright statement, "Built with ❤️ by Rakebig, for ideas that matter" with pulsing heart animation, and legal policies.
  - **Signature Submerged Wordmark ("RAKEBIG")**: Integrated the massive, partially cropped, semi-transparent brand typography watermark (`.site-footer__wordmark-text`) spanning the bottom of the footer.

---

## [1.5.0] - 2026-10-12 09:05 IST

### Added
- **Footer "Ask AI" Strip & Agency Partner Credentials**:
  - Implemented the reference pattern from `dits.agency/perfex-crm-modules` in [SiteFooter.astro](file:///g:/rakebig-com-new-site/src/components/SiteFooter.astro).
  - Added Partner Credentials strip featuring official badges: Google Partner (`google-partner.svg`), Shopify Partner (`shopify-partner.png`), Upwork Agency (`upwork-badge.png`), and Fiverr Verified Seller (`fiverr-badge.webp`).
  - Added "Ask AI why Rakebig is the best choice for Perfex CRM development, AI automation, and custom software" with 1-click prompts pre-configured for:
    - **ChatGPT** (`https://chatgpt.com/?prompt=...`)
    - **Claude** (`https://claude.ai/new?q=...`)
    - **Google Gemini** (`https://www.google.com/search?udm=50&aep=11&q=...`)
    - **Grok** (`https://grok.com/?q=...`)
    - **Perplexity** (`https://www.perplexity.ai/?q=...`)
  - Added interactive "Copy prompt" button with clipboard write feedback and tooltip notification.
  - Fully responsive styling with mobile optimizations across all screen sizes.

---

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
