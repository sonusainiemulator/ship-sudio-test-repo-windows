export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: "whatsapp-ai" | "perfex-crm" | "web-saas" | "mobile-apps" | "opensource-cloud";
  categoryLabel: string;
  client: string;
  location: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  tags: string[];
  image: string;
  liveUrl?: string;
  featured?: boolean;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "project-whatsapp-ai-commerce",
    slug: "whatsapp-ai-ecommerce-funnel",
    title: "AI-Powered WhatsApp Cart Recovery & Conversational Commerce Engine",
    category: "whatsapp-ai",
    categoryLabel: "WhatsApp & AI Bots",
    client: "Zenith Retail Apparel",
    location: "Mumbai, India",
    summary: "Built an intelligent WhatsApp bot connecting Shopify webhooks to Meta Cloud API, recovering over $185,000 in abandoned carts with zero human overhead.",
    challenge: "High ad spend was driving traffic, but checkout abandonment was exceeding 72%. Email recovery had an anemic 12% open rate.",
    solution: "Deployed WhatsApp AI with dynamic checkout links, 1-click COD confirmation, and a multi-agent triage inbox for real-time customer sizing questions.",
    results: [
      { metric: "68%", label: "Cart Recovery Rate" },
      { metric: "$185k+", label: "Recovered Revenue in 90 Days" },
      { metric: "< 15s", label: "Average Automated Response" },
    ],
    tags: ["WhatsApp Cloud API", "Shopify Webhooks", "OpenAI GPT-4o", "Node.js", "Redis"],
    image: "/assets/cymatic-pattern-1757619368429-1920x1438-3.png",
    liveUrl: "https://whatsappai.rakebig.com/",
    featured: true,
  },
  {
    id: "project-perfex-saas",
    slug: "multi-tenant-perfex-saas-platform",
    title: "Multi-Tenant Perfex CRM SaaS Transformation with Automated Billing",
    category: "perfex-crm",
    categoryLabel: "Perfex CRM & Modules",
    client: "OpsFlow Technologies",
    location: "Dubai, UAE",
    summary: "Transformed an on-premise single-tenant Perfex CRM into a multi-tenant SaaS serving 450+ enterprise clients across the GCC region.",
    challenge: "Client wanted to commercialize their proprietary workflow CRM into a subscription SaaS without rewriting their entire application from scratch.",
    solution: "Engineered automated MySQL database tenancy, custom tenant subdomains (`client.opsflow.io`), Stripe multi-currency subscription billing, and centralized admin metrics.",
    results: [
      { metric: "450+", label: "Active Tenant Companies" },
      { metric: "99.98%", label: "Uptime Across All Tenants" },
      { metric: "0 sec", label: "Manual Tenant Setup Time" },
    ],
    tags: ["Perfex CRM", "PHP CodeIgniter", "MySQL Multi-Tenancy", "Stripe Billing", "Nginx"],
    image: "/assets/cymatic-pattern-1757619368429-1920x1438-1.png",
    featured: true,
  },
  {
    id: "project-nextcloud-enterprise",
    slug: "nextcloud-enterprise-migration",
    title: "Air-Gapped Nextcloud Enterprise Cluster for 4,500+ Seat Freight Group",
    category: "opensource-cloud",
    categoryLabel: "Open-Source & Cloud",
    client: "Continental Freight & Logistics",
    location: "Frankfurt, Germany",
    summary: "Replaced Google Workspace with a hardened, self-hosted Nextcloud Enterprise cluster backed by MinIO S3 object storage and OnlyOffice real-time collaboration.",
    challenge: "EU data sovereignty mandates and skyrocketing per-seat SaaS costs forced a transition off public US cloud providers.",
    solution: "Architected a dual-node HA Nextcloud cluster on bare-metal servers, automated Redis cache clustering, SAML SSO integration, and 15-minute incremental S3 snapshots.",
    results: [
      { metric: "82%", label: "Cost Reduction vs Google" },
      { metric: "4,500+", label: "Seats Onboarded Smoothly" },
      { metric: "100%", label: "Data Sovereignty Compliance" },
    ],
    tags: ["Nextcloud Enterprise", "Docker Swarm", "MinIO S3", "Redis Cluster", "OnlyOffice", "PostgreSQL"],
    image: "/assets/cymatic-pattern-1757619368429-1920x1438-2.png",
    featured: true,
  },
  {
    id: "project-quickcommerce-flutter",
    slug: "hyperlocal-10min-delivery-flutter-app",
    title: "Hyperlocal 10-Minute Grocery Super-App Scaled to 35,000 Daily Orders",
    category: "mobile-apps",
    categoryLabel: "Mobile Apps & Clones",
    client: "SpeedMart Quick Commerce",
    location: "Bengaluru, India",
    summary: "Built Flutter cross-platform consumer apps, rider geo-tracking, and warehouse picking tablets powering 14 dark stores.",
    challenge: "Needed to launch customer apps and driver routing fast to compete against multi-billion dollar grocery delivery players.",
    solution: "Delivered a reactive Flutter application with Redis geo-spatial driver assignment, live socket-driven map animations, and instant UPI checkout.",
    results: [
      { metric: "35,000+", label: "Daily Orders Handled" },
      { metric: "8 min", label: "Average Dispatch Time" },
      { metric: "4.8 ★", label: "Play Store Rating" },
    ],
    tags: ["Flutter", "Dart", "Node.js", "Redis Geo", "Google Maps SDK", "Socket.io"],
    image: "/assets/cymatic-pattern-1757619368429-1920x1438-3.png",
    featured: false,
  },
  {
    id: "project-ai-kyc-extraction",
    slug: "autonomous-ai-kyc-document-extraction",
    title: "Autonomous Multi-Agent KYC Document Processing & CRM Ingestion",
    category: "web-saas",
    categoryLabel: "Web Apps & SaaS",
    client: "Apex Wealth Advisory",
    location: "London, UK",
    summary: "Built a Python FastAPI microservice utilizing vision models to parse tabular bank statements, tax IDs, and passports with 99.4% field accuracy.",
    challenge: "Wealth advisors spent 4+ hours daily manually keying PDF bank records and tax identification sheets into their CRM.",
    solution: "Engineered an OCR and LLM pipeline that extracts 48 distinct KYC data points in under 6 seconds, validating against national regulatory databases.",
    results: [
      { metric: "99.4%", label: "Field Extraction Accuracy" },
      { metric: "15 min", label: "Onboarding Cycle (Down from 3 Days)" },
      { metric: "4+ hrs", label: "Saved Per Advisor Daily" },
    ],
    tags: ["Python FastAPI", "OpenAI Vision", "Perfex CRM Hooks", "Docker", "PostgreSQL"],
    image: "/assets/cymatic-pattern-1757619368429-1920x1438-1.png",
    featured: false,
  },
  {
    id: "project-coolify-devops",
    slug: "self-hosted-coolify-paas-infrastructure",
    title: "Zero-Downtime Migration to Self-Hosted Coolify PaaS for Digital Agency",
    category: "opensource-cloud",
    categoryLabel: "Open-Source & Cloud",
    client: "PixelCraft Media",
    location: "Sydney, Australia",
    summary: "Saved $2,400/month by migrating 60+ client applications and static sites from Heroku/Vercel to a high-speed self-hosted Coolify server cluster.",
    challenge: "Runaway staging and production hosting bills across disjointed platforms with fragmented Git deployment workflows.",
    solution: "Configured a centralized Coolify PaaS on dedicated servers with automatic wildcard SSL, staging previews on Git PRs, and automated off-site S3 backups.",
    results: [
      { metric: "$2,400/mo", label: "Direct Hosting Savings" },
      { metric: "60+", label: "Production Apps Consolidated" },
      { metric: "30s", label: "Git Push-to-Deploy Latency" },
    ],
    tags: ["Coolify", "Docker", "Traefik", "GitHub Actions", "Ubuntu", "Cloudflare"],
    image: "/assets/cymatic-pattern-1757619368429-1920x1438-2.png",
    featured: false,
  },
];
