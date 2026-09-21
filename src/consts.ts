// Site-wide constants used by Layout.astro for SEO (canonical URLs, Open Graph, Sitemap).

export const SITE_URL = "https://www.rakebig.com";

export const SITE_NAME = "Rakebig Services";

export const SITE_TAGLINE = "AI Automation Agency";

export const DEFAULT_DESCRIPTION =
  "Rakebig Services is an AI automation agency that builds and customizes Perfex CRM, web apps, mobile apps, SaaS platforms, and practical AI workflows for growing teams.";

// Shared preview card used when a page has no image of its own.
export const DEFAULT_OG_IMAGE = "/assets/preview.png";

// Where every "Book a consultation"-style CTA across the site points (external
// Cal.com scheduling page). Import and reuse this — don't hardcode the URL.
export const BOOK_CONSULTATION_URL = "https://cal.com/rakebigservices";

export const SUPPORT_EMAIL = "support@rakebig.com";
export const SUPPORT_PHONE = "+91 78274 08866";
export const TECH_SUPPORT_PHONE = "+91 97825 33298";

// Official social media links (username: rakebigservices across all platforms)
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/rakebigservices",
  instagram: "https://instagram.com/rakebigservices",
  linkedin: "https://linkedin.com/company/rakebigservices",
  youtube: "https://youtube.com/@rakebigservices",
  twitter: "https://x.com/rakebigservices",
  github: "https://github.com/rakebigservices",
};

// Official Physical Office Addresses & Google Map Locations
export const HEAD_OFFICE = {
  name: "Rakebig advertisement agency / Rakebig Services",
  street: "Ward No.25, near Bsnl Office, Saini Mohalla",
  locality: "Bhadra",
  region: "Rajasthan",
  postalCode: "335501",
  country: "India",
  countryCode: "IN",
  fullAddress: "Ward No.25, near Bsnl Office, Saini Mohalla, Bhadra, Rajasthan 335501",
  googleMapsEmbed: "https://maps.google.com/maps?q=Ward+No.25,+near+Bsnl+Office,+Saini+Mohalla,+Bhadra,+Rajasthan+335501&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleMapsUrl: "https://www.google.com/search?sca_esv=ef3eb8aeaef7656a&sxsrf=APpeQnv4NkghYc4pBqPP31wX3wA2hisCvQ:1789987619544&q=rakebig+advertisement+agency+bhadra+address&ludocid=5144840765114331929&sa=X&ved=2ahUKEwj7gNzBv_-WAxWD1jgGHZP0L2wQ6BN6BAgxEAI",
  rating: 5.0,
  reviewsCount: 10,
  hours: "Open 24 hours",
};

export const UK_OFFICE = {
  name: "Rakebig LTD",
  street: "7 Barnard Road",
  locality: "Enfield",
  region: "Greater London",
  postalCode: "EN1 3QA",
  country: "United Kingdom",
  countryCode: "GB",
  fullAddress: "7 Barnard Road, Enfield EN1 3QA, Greater London, UK",
};

