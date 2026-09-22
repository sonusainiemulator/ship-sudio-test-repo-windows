// MailPurse — Self-hosted Email Marketing & Automation SaaS
// Product URL: emailpro.rakebig.com

export interface MailPurseFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  bullets: string[];
  color: string;
  tint: string;
}

export interface MailPursePlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  priceMonthly: string;
  priceYearly: string;
  subscribers: string;
  emails: string;
  campaigns: string;
  automations: string;
  users: string;
  workspaces: string;
  smtpServers: string;
  domains: string;
  highlights: string[];
  ctaLabel: string;
  ctaUrl: string;
}

export interface MailPurseIndustry {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  metrics: { value: string; label: string }[];
  useCase: string;
  automationSteps: string[];
  results: string;
}

export const MAILPURSE_FEATURES: MailPurseFeature[] = [
  {
    id: "campaign-builder",
    title: "Drag-and-Drop Campaign Builder",
    subtitle: "Design stunning emails in minutes — no code, no design skills needed.",
    description:
      "Build pixel-perfect responsive email campaigns with our visual drag-and-drop editor. Choose from 50+ pre-built templates, customise brand colours and fonts, add countdown timers, product blocks, and conditional content blocks that personalise for each subscriber.",
    icon: "design",
    color: "#6366f1",
    tint: "#EEF2FF",
    bullets: [
      "50+ responsive HTML templates included",
      "Conditional content blocks per segment",
      "Countdown timers & dynamic product blocks",
      "Live desktop & mobile preview",
      "One-click plain-text version generation",
    ],
  },
  {
    id: "automation",
    title: "Advanced Marketing Automation",
    subtitle: "Set it once. Let MailPurse work around the clock for you.",
    description:
      "Build sophisticated automated email workflows with a visual flow builder. Trigger sequences from web events, form signups, purchase behaviour, custom webhooks, or date-based rules. Branch logic, A/B split paths, and wait conditions give you full control over every touchpoint.",
    icon: "flow",
    color: "#059669",
    tint: "#ECFDF5",
    bullets: [
      "Visual drag-and-drop workflow canvas",
      "Trigger: web events, forms, webhooks, dates",
      "A/B split paths with auto-winner logic",
      "Wait, delay, and time-zone-aware scheduling",
      "Loop, tag, and segment actions in flow",
    ],
  },
  {
    id: "smtp-engine",
    title: "Multi-SMTP Delivery Engine",
    subtitle: "Connect your own SMTP servers for maximum inbox placement.",
    description:
      "MailPurse is SMTP-agnostic. Connect Amazon SES, SendGrid, Mailgun, Postmark, Brevo, or your own dedicated SMTP servers. Route different campaigns through different SMTPs, set per-server sending limits, and monitor bounce/complaint rates per server — all from one dashboard.",
    icon: "server",
    color: "#0284c7",
    tint: "#E0F2FE",
    bullets: [
      "Unlimited SMTP server connections",
      "Per-campaign SMTP routing rules",
      "Automatic bounce & complaint processing",
      "Dedicated IP warm-up scheduler",
      "Real-time delivery rate monitoring",
    ],
  },
  {
    id: "subscribers",
    title: "Unlimited Subscriber Management",
    subtitle: "No subscriber limits. No per-contact fees. Ever.",
    description:
      "Import millions of contacts from CSV, integrate via API, or sync from your CRM. Segment by any custom field, behaviour, geography, or engagement score. Clean lists automatically with real-time email verification, hard-bounce suppression, and GDPR-compliant unsubscribe flows.",
    icon: "users",
    color: "#d97706",
    tint: "#FFFBEB",
    bullets: [
      "Unlimited subscribers on all plans",
      "CSV import, API sync, CRM connectors",
      "Behaviour-based dynamic segments",
      "Real-time email verification",
      "GDPR / CAN-SPAM compliant unsubscribe",
    ],
  },
  {
    id: "analytics",
    title: "Real-Time Analytics & Reporting",
    subtitle: "See exactly what's working — down to the individual click.",
    description:
      "Track opens, clicks, bounces, unsubscribes, revenue attribution, and engagement heatmaps in real time. Compare campaigns side-by-side, export reports as CSV/PDF, and integrate with Google Analytics 4 or your own data warehouse via webhook.",
    icon: "chart",
    color: "#7c3aed",
    tint: "#F5F3FF",
    bullets: [
      "Real-time open, click, bounce tracking",
      "Revenue attribution per campaign",
      "Click-heatmap overlay",
      "GA4 & custom webhook integrations",
      "Scheduled PDF/CSV report export",
    ],
  },
  {
    id: "multitenancy",
    title: "White-Label Multi-Tenant SaaS Mode",
    subtitle: "Run your own Email Service Provider business on top of MailPurse.",
    description:
      "Activate SaaS mode to become your own ESP. Create plans, set sending quotas, add your own branding, manage clients from a master dashboard, and charge via integrated Stripe billing. Each client gets an isolated workspace — perfect for agencies and resellers.",
    icon: "building",
    color: "#e11d48",
    tint: "#FFF1F2",
    bullets: [
      "White-label your own domain & logo",
      "Create & sell custom plans with Stripe",
      "Isolated per-client workspaces",
      "Master admin dashboard & user impersonation",
      "API access & custom DNS for each client",
    ],
  },
];

export const MAILPURSE_PLANS: MailPursePlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for freelancers and small businesses",
    priceMonthly: "Free",
    priceYearly: "Free",
    subscribers: "2,000",
    emails: "10,000 /mo",
    campaigns: "Unlimited",
    automations: "3 flows",
    users: "1",
    workspaces: "1",
    smtpServers: "1",
    domains: "1",
    highlights: [
      "Drag-and-drop campaign editor",
      "50+ email templates",
      "Basic segmentation",
      "Open & click tracking",
      "Community support",
    ],
    ctaLabel: "Start Free",
    ctaUrl: "https://emailpro.rakebig.com/register",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Scale your email marketing without limits",
    badge: "Most Popular",
    popular: true,
    priceMonthly: "₹2,499",
    priceYearly: "₹19,999",
    subscribers: "25,000",
    emails: "150,000 /mo",
    campaigns: "Unlimited",
    automations: "Unlimited",
    users: "5",
    workspaces: "3",
    smtpServers: "5",
    domains: "5",
    highlights: [
      "Everything in Starter",
      "Advanced automation flows",
      "A/B split testing",
      "Multi-SMTP routing",
      "Revenue attribution tracking",
      "Priority email support",
      "Custom landing pages",
    ],
    ctaLabel: "Get Growth",
    ctaUrl: "https://emailpro.rakebig.com/register",
  },
  {
    id: "agency",
    name: "Agency",
    tagline: "Manage clients, run your own ESP business",
    priceMonthly: "₹5,999",
    priceYearly: "₹49,999",
    subscribers: "Unlimited",
    emails: "Unlimited",
    campaigns: "Unlimited",
    automations: "Unlimited",
    users: "Unlimited",
    workspaces: "25",
    smtpServers: "Unlimited",
    domains: "Unlimited",
    highlights: [
      "Everything in Growth",
      "White-label SaaS mode",
      "Multi-tenant client workspaces",
      "Stripe billing integration",
      "Master admin dashboard",
      "Custom DNS per client",
      "Dedicated account manager",
      "Custom SLA support",
    ],
    ctaLabel: "Go Agency",
    ctaUrl: "https://emailpro.rakebig.com/register",
  },
  {
    id: "selfhosted",
    name: "Self-Hosted",
    tagline: "One-time license — your server, your data, forever",
    badge: "Best Value",
    priceMonthly: "₹24,999",
    priceYearly: "₹24,999",
    subscribers: "Unlimited",
    emails: "Unlimited",
    campaigns: "Unlimited",
    automations: "Unlimited",
    users: "Unlimited",
    workspaces: "Unlimited",
    smtpServers: "Unlimited",
    domains: "Unlimited",
    highlights: [
      "Everything in Agency",
      "One-time perpetual license",
      "Full source-code access",
      "Your own server / cloud",
      "Zero monthly recurring fees",
      "Lifetime free updates (1 yr)",
      "Installation & setup included",
      "Priority Slack/WhatsApp support",
    ],
    ctaLabel: "Buy License",
    ctaUrl: "/contact",
  },
];

export const MAILPURSE_INDUSTRIES: MailPurseIndustry[] = [
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: "🛒",
    tagline: "Turn abandoned carts into recovered revenue — automatically.",
    metrics: [
      { value: "38%", label: "Cart Recovery" },
      { value: "4.2×", label: "Email ROI" },
      { value: "22%", label: "Revenue Lift" },
    ],
    useCase: "An online fashion brand sends abandoned-cart reminders, post-purchase upsells, and loyalty reward emails using MailPurse automations — with zero manual work.",
    automationSteps: [
      "Shopper adds to cart → 1hr reminder with cart link",
      "No purchase after 24hrs → discount email with urgency timer",
      "Purchase made → upsell & review request sequence",
      "60-day inactive → win-back loyalty reward email",
    ],
    results: "38% cart recovery • ₹12L+ recovered GMV in 90 days",
  },
  {
    id: "saas",
    name: "SaaS & Tech",
    icon: "💻",
    tagline: "Convert trials to paid. Reduce churn. Increase LTV.",
    metrics: [
      { value: "31%", label: "Trial Conversion" },
      { value: "18%", label: "Churn Reduction" },
      { value: "2.6×", label: "LTV Growth" },
    ],
    useCase: "A B2B SaaS company runs onboarding drip sequences, feature announcement campaigns, and health-score-based churn prevention — all triggered by product usage events.",
    automationSteps: [
      "Free signup → 7-step onboarding email sequence",
      "Feature unused after 7 days → tutorial email sent",
      "Usage drops 50% → CS team alert + recovery email",
      "Trial day 13 → personalised upgrade offer",
    ],
    results: "31% trial-to-paid conversion • 18% churn reduction in 6 months",
  },
  {
    id: "education",
    name: "EdTech & Courses",
    icon: "🎓",
    tagline: "Enrol more students. Improve course completion.",
    metrics: [
      { value: "54%", label: "Lead-to-Enrol" },
      { value: "3.8×", label: "Campaign ROI" },
      { value: "41%", label: "Completion Rate" },
    ],
    useCase: "An online learning platform runs webinar reminder sequences, course-completion nudges, and certificate upsell campaigns for 50,000+ students.",
    automationSteps: [
      "Webinar signup → 3-part reminder sequence",
      "Attended → replay + next course recommendation",
      "50% course complete → completion nudge + reward",
      "Course complete → upsell advanced module email",
    ],
    results: "54% lead-to-enrolment • 41% completion rate improvement",
  },
  {
    id: "agency",
    name: "Digital Agencies",
    icon: "🏢",
    tagline: "Manage every client's email from one white-label platform.",
    metrics: [
      { value: "10×", label: "Client Capacity" },
      { value: "60%", label: "Cost Savings" },
      { value: "∞", label: "Subscribers" },
    ],
    useCase: "A digital marketing agency manages 20 client accounts from a single MailPurse instance — each with isolated data, custom branding, and separate SMTP routing.",
    automationSteps: [
      "Onboard new client → auto-provision workspace",
      "Client upgrades → Stripe billing updated automatically",
      "Bounce threshold exceeded → auto-pause + alert",
      "Monthly → automated performance report per client",
    ],
    results: "60% cost savings vs per-seat SaaS tools • 10× client capacity",
  },
  {
    id: "realEstate",
    name: "Real Estate",
    icon: "🏠",
    tagline: "Nurture leads from inquiry to property sale.",
    metrics: [
      { value: "28%", label: "Lead Nurture Rate" },
      { value: "6.1×", label: "Email ROI" },
      { value: "45 days", label: "Faster Close" },
    ],
    useCase: "A real estate developer runs drip campaigns for new project launches, automated site-visit follow-ups, and EMI calculator email sequences for qualified leads.",
    automationSteps: [
      "Lead inquiry → instant brochure + EMI email",
      "No site visit in 7 days → reminder with video tour",
      "Site visit done → pricing & offers email sequence",
      "Deal stalling → director's personal offer email",
    ],
    results: "45-day faster closing cycle • 28% more lead conversions",
  },
  {
    id: "health",
    name: "Healthcare",
    icon: "🏥",
    tagline: "Appointment reminders, health tips, and patient retention.",
    metrics: [
      { value: "72%", label: "Appointment Retention" },
      { value: "3.4×", label: "Patient LTV" },
      { value: "89%", label: "Open Rate" },
    ],
    useCase: "A chain of diagnostic labs sends appointment reminders, health report notifications, wellness newsletters, and seasonal health package promotions via MailPurse.",
    automationSteps: [
      "Appointment booked → instant confirmation email",
      "24hrs before → reminder with directions & prep tips",
      "Report ready → secure download notification",
      "30-day follow-up → wellness check-up promotion",
    ],
    results: "72% appointment retention • 89% email open rate on reminders",
  },
];

export const MAILPURSE_STATS = [
  { value: "2M+", label: "Emails Sent Daily" },
  { value: "99.2%", label: "Deliverability Rate" },
  { value: "500+", label: "Active Installations" },
  { value: "12+", label: "SMTP Integrations" },
];
