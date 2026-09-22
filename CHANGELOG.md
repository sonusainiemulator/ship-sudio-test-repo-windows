# Changelog

All notable changes to this project will be documented in this file.

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
- **Header Dropdown Styling**: Configured `.site-header__panel--products` for full-width layout (`max-width: 1380px`), while maintaining 2-column menu width (`672px`) for *Solutions*, *Clone Apps*, and *Open Source*.

### Removed
- **Header Navigation Links**: Removed redundant standalone `WhatsApp AI`, `Portfolio`, and `Case Studies` links from the main header navigation bar (these remain accessible via the Products mega menu, footer, and dedicated pages).
