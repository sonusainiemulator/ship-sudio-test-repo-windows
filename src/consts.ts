// Site-wide constants used by Layout.astro for SEO (canonical URLs, Open Graph).

// Replace with the real production domain when it's live.
export const SITE_URL = "https://rake.big";

export const SITE_NAME = "Rakebig Services";

export const SITE_TAGLINE = "AI Automation Agency";

export const DEFAULT_DESCRIPTION =
  "Rakebig Services is an AI automation agency that builds and customizes Perfex CRM, web apps, mobile apps, SaaS platforms, and practical AI workflows for growing teams.";

// Shared preview card used when a page has no image of its own.
export const DEFAULT_OG_IMAGE = "/assets/preview.png";

// Where every "Book a consultation"-style CTA across the site points (external
// Cal.com scheduling page). Import and reuse this — don't hardcode the URL.
export const BOOK_CONSULTATION_URL = "https://cal.com/rakebigservices";
