export interface GigPackage {
  name: "Basic" | "Standard" | "Premium";
  title: string;
  description: string;
  priceInr: number;
  priceUsd: number;
  deliveryDays: number;
  revisions: string;
  features: string[];
}

export interface GigFaq {
  question: string;
  answer: string;
}

export interface GigItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  subcategory: string;
  badge?: "BESTSELLER" | "PRO SQUAD" | "TOP RATED" | "TRENDING";
  seller: {
    name: string;
    avatar: string;
    badge: "Top Rated" | "Level 2" | "Pro Studio";
    role: string;
  };
  rating: number;
  reviewsCount: number;
  ordersInQueue: number;
  thumbnail: string;
  shortDescription: string;
  packages: {
    basic: GigPackage;
    standard: GigPackage;
    premium: GigPackage;
  };
  technologies: string[];
  faqs?: GigFaq[];
  seoKeywords?: string[];
}

export const GIG_CATEGORIES = [
  { id: "all", name: "All Services" },
  { id: "ai-services", name: "AI Services & Bots", hasMegaMenu: true },
  { id: "video-animation", name: "Video & Animation", hasMegaMenu: true },
  { id: "programming-tech", name: "Programming & Tech", hasMegaMenu: true },
  { id: "graphics-design", name: "Graphics & Design", hasMegaMenu: true },
  { id: "digital-marketing", name: "WhatsApp Marketing", hasMegaMenu: true },
  { id: "perfex-crm", name: "Perfex CRM", hasMegaMenu: true },
  { id: "mobile-apps", name: "Mobile Apps", hasMegaMenu: true },
  { id: "cloud-devops", name: "Cloud & Open Source", hasMegaMenu: true },
];

export interface GigsSubmenuItem {
  name: string;
  slug: string;
  tag?: "NEW" | "POPULAR" | "HOT";
  href?: string;
}

export interface GigsSubmenuGroup {
  title: string;
  items: GigsSubmenuItem[];
  footerAction?: {
    text: string;
    href: string;
  };
}

export interface GigsCategoryConfig {
  id: string;
  name: string;
  shortName?: string;
  isTrending?: boolean;
  hasSubmenu: boolean;
  submenuLayout?: "single-col" | "two-col" | "mega-grid";
  groups: GigsSubmenuGroup[];
  bottomBanner?: {
    title: string;
    desc: string;
    ctaText: string;
    ctaHref: string;
  };
}

export { GIGS_NAVIGATION_CATEGORIES } from "./fiverrCategories";

export const FIVERR_MEGA_MENU_GROUPS = [
  {
    title: "Website Development",
    items: [
      { name: "Business Websites", slug: "business-websites" },
      { name: "E-Commerce Development", slug: "ecommerce-development" },
      { name: "Custom Websites", slug: "custom-websites" },
      { name: "Landing Pages", slug: "landing-pages" },
      { name: "Dropshipping Websites", slug: "dropshipping-websites" },
    ],
  },
  {
    title: "Website Platforms",
    items: [
      { name: "WordPress", slug: "wordpress" },
      { name: "Shopify", slug: "shopify" },
      { name: "Wix", slug: "wix" },
      { name: "Webflow", slug: "webflow" },
      { name: "Bubble", slug: "bubble" },
    ],
  },
  {
    title: "Website Maintenance",
    items: [
      { name: "Website Customization", slug: "website-customization" },
      { name: "Bug Fixes", slug: "bug-fixes" },
      { name: "Backup & Migration", slug: "backup-migration" },
      { name: "Speed Optimization", slug: "speed-optimization" },
    ],
  },
  {
    title: "AI Development",
    items: [
      { name: "AI Websites & Software", tag: "NEW", slug: "ai-websites-software" },
      { name: "AI Mobile Apps", tag: "NEW", slug: "ai-mobile-apps" },
      { name: "AI Integrations", slug: "ai-integrations" },
      { name: "Hermes & OpenClaw AI Agents", tag: "HOT", slug: "build-ai-employee-automation-hermes-openclaw" },
      { name: "AI Technology Consulting", tag: "NEW", slug: "ai-technology-consulting" },
    ],
  },
  {
    title: "Vibe Coding",
    items: [
      { name: "Development & MVP", tag: "NEW", slug: "development-mvp" },
      { name: "Troubleshooting & Improvements", tag: "NEW", slug: "troubleshooting-improvements" },
      { name: "Deployments & DevOps", tag: "NEW", slug: "deployments-devops" },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      { name: "Cross-platform Development", slug: "cross-platform-development" },
      { name: "Android App Development", slug: "android-app-development" },
      { name: "iOS App Development", slug: "ios-app-development" },
      { name: "Mobile App Maintenance", slug: "mobile-app-maintenance" },
    ],
  },
  {
    title: "Chatbot Development",
    items: [
      { name: "AI WhatsApp Chatbot", tag: "POPULAR", slug: "ai-whatsapp-chatbot" },
      { name: "Rules Based Chatbot", slug: "rules-based-chatbot" },
      { name: "Customer Support Agents", slug: "customer-support-agents" },
    ],
  },
  {
    title: "Cloud & Cybersecurity",
    items: [
      { name: "Cloud Computing & AWS", slug: "cloud-computing" },
      { name: "DevOps & Docker CI/CD", slug: "devops-engineering" },
      { name: "VPS Hardening & WAF", slug: "cybersecurity" },
      { name: "Self-Hosted Coolify / aaPanel", slug: "coolify-aapanel" },
    ],
  },
  {
    title: "Software Development",
    items: [
      { name: "Full Stack Web Apps", slug: "full-stack-web-apps" },
      { name: "Automations & Agents", slug: "automations-agents" },
      { name: "APIs & Webhooks Integrations", slug: "apis-integrations" },
      { name: "Databases & Performance", slug: "databases" },
      { name: "QA & Testing", slug: "qa-review" },
    ],
  },
];

export const GIGS_CATALOG: GigItem[] = [
  {
    id: "gig-whatsapp-ai-bot",
    slug: "build-ai-whatsapp-marketing-chatbot",
    title: "I will build a custom AI WhatsApp marketing chatbot with CRM & webhook automation",
    category: "digital-marketing",
    subcategory: "Chatbot Development",
    badge: "BESTSELLER",
    seller: {
      name: "Sonu S. (Lead AI Dev)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "Lead WhatsApp Solutions Architect",
    },
    rating: 4.9,
    reviewsCount: 142,
    ordersInQueue: 4,
    thumbnail: "/assets/gigs/gig-whatsapp-ai-bot.jpg",
    shortDescription: "Complete Meta WhatsApp Cloud API bot setup with OpenAI/Claude knowledgebase, visual flow builder, and CRM/eCommerce order notifications.",
    packages: {
      basic: {
        name: "Basic",
        title: "Starter WhatsApp Bot",
        description: "Official Meta Cloud API connection, 5 automated menu flows, welcome message, and keyword auto-replies.",
        priceInr: 2999,
        priceUsd: 39,
        deliveryDays: 2,
        revisions: "3 Revisions",
        features: [
          "Meta WhatsApp Cloud API setup",
          "5 automated conversation flows",
          "Greeting & away messages",
          "Keyword trigger responses",
          "1 month bug-fix support",
        ],
      },
      standard: {
        name: "Standard",
        title: "AI Knowledge Base & E-com Webhook",
        description: "Full AI chatbot trained on company docs, Shopify/WooCommerce abandoned cart webhook, and live human agent handoff.",
        priceInr: 7999,
        priceUsd: 99,
        deliveryDays: 4,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "OpenAI / Claude AI Knowledge Base trained on your docs",
          "Shopify / WooCommerce order & cart recovery webhook",
          "Multi-agent shared team inbox setup",
          "Interactive buttons & catalog menu",
          "3 months maintenance support",
        ],
      },
      premium: {
        name: "Premium",
        title: "Enterprise Omnichannel & CRM Sync",
        description: "End-to-end enterprise solution with Perfex CRM bi-directional sync, custom REST API webhooks, bulk broadcast campaigns, and green-tick verification guidance.",
        priceInr: 18999,
        priceUsd: 229,
        deliveryDays: 7,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "Bi-directional Perfex CRM / custom DB sync",
          "Unlimited broadcast campaigns setup",
          "Green-tick badge application assistance",
          "Custom API endpoints & payment link generation",
          "6 months dedicated engineer SLA",
        ],
      },
    },
    technologies: ["WhatsApp Cloud API", "FastAPI / Node.js", "OpenAI GPT-4o", "Webhooks", "Perfex CRM"],
  },
  {
    id: "gig-perfex-crm-modules",
    slug: "customize-perfex-crm-modules-development",
    title: "I will customize Perfex CRM, develop custom modules, and integrate payment gateways",
    category: "perfex-crm",
    subcategory: "Software Development",
    badge: "TOP RATED",
    seller: {
      name: "Rakebig Perfex Squad",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      badge: "Pro Studio",
      role: "Senior Perfex CRM Engineers",
    },
    rating: 5.0,
    reviewsCount: 310,
    ordersInQueue: 7,
    thumbnail: "/assets/gigs/gig-perfex-crm-modules.jpg",
    shortDescription: "Custom PHP CodeIgniter modules, multi-tenant SaaS architecture, client portal redesign, and payment gateway gateways for Perfex CRM.",
    packages: {
      basic: {
        name: "Basic",
        title: "Perfex Setup & 1 Custom Field Workflow",
        description: "Fresh install on your VPS/cPanel, email cron setup, branding, and 1 custom workflow trigger.",
        priceInr: 2499,
        priceUsd: 29,
        deliveryDays: 1,
        revisions: "2 Revisions",
        features: [
          "Complete Perfex CRM installation",
          "Cron job & SMTP email config",
          "Logo and company theme branding",
          "Database backup script",
        ],
      },
      standard: {
        name: "Standard",
        title: "Custom Module Development",
        description: "1 full-fledged custom module (e.g. commission tracker, custom order ledger, WhatsApp notify) built to core standards.",
        priceInr: 9999,
        priceUsd: 125,
        deliveryDays: 4,
        revisions: "5 Revisions",
        features: [
          "Custom Perfex CRM module (isolated code)",
          "Admin & staff permissions hook",
          "Database migration scripts",
          "Razorpay / Stripe payment gateway",
          "30 days bug-fix warranty",
        ],
      },
      premium: {
        name: "Premium",
        title: "Multi-Tenant SaaS Conversion",
        description: "Transform your single Perfex CRM into a multi-company SaaS platform with automated subdomain tenant provisioning and subscription billing.",
        priceInr: 27999,
        priceUsd: 349,
        deliveryDays: 9,
        revisions: "Unlimited Revisions",
        features: [
          "Complete Multi-Company / Multi-Tenant SaaS setup",
          "Automated tenant database creation & subdomains",
          "Stripe / PayPal recurring billing gateway",
          "Custom tenant landing page & pricing table",
          "Full source code and deployment playbook",
        ],
      },
    },
    technologies: ["PHP CodeIgniter", "MySQL", "Perfex CRM", "Stripe / Razorpay", "cPanel / VPS"],
  },
  {
    id: "gig-perfex-crm-fix-custom",
    slug: "customize-develop-and-fix-perfex-crm-modules",
    title: "I will customize, develop, and fix Perfex CRM modules professionally",
    category: "perfex-crm",
    subcategory: "Software Development",
    badge: "TOP RATED",
    seller: {
      name: "Leo V. (Perfex Master)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "Perfex CRM Core Bugfix Specialist",
    },
    rating: 5.0,
    reviewsCount: 184,
    ordersInQueue: 6,
    thumbnail: "/assets/gigs/gig-perfex-crm-fix-custom.jpg",
    shortDescription: "Professional debugging, custom module modifications, CodeIgniter database fixes, hooks optimization, and theme customization for Perfex CRM.",
    packages: {
      basic: {
        name: "Basic",
        title: "Perfex CRM Bug Fix & Small Tweaks",
        description: "Fix 1 existing module bug, database connection error, or UI layout glitch in your Perfex CRM.",
        priceInr: 1999,
        priceUsd: 25,
        deliveryDays: 1,
        revisions: "3 Revisions",
        features: [
          "1 Perfex CRM bug fix / patch",
          "Database query & syntax error repair",
          "Permission & hook audit",
          "Tested on live or staging server",
        ],
      },
      standard: {
        name: "Standard",
        title: "Module Enhancement & Custom Features",
        description: "Customize existing core modules (Invoices, Leads, Tasks, Projects) with new fields, custom reports, and PDF template redesign.",
        priceInr: 6999,
        priceUsd: 89,
        deliveryDays: 3,
        revisions: "Unlimited Revisions",
        features: [
          "Custom fields & custom table hooks",
          "PDF Invoice / Estimate layout redesign",
          "Custom action triggers & email alerts",
          "2 existing module modifications",
          "30 days bug-fix guarantee",
        ],
      },
      premium: {
        name: "Premium",
        title: "Bespoke Custom Module & API Integration",
        description: "Build 1 completely new custom Perfex CRM module from scratch with REST API webhooks, role permissions, and payment gateway.",
        priceInr: 16999,
        priceUsd: 219,
        deliveryDays: 6,
        revisions: "Unlimited Revisions",
        features: [
          "Full standalone custom module architecture",
          "Third-party API / Webhook integration",
          "Payment gateway integration (Stripe/Razorpay/PayPal)",
          "Staff & Client Portal permissions",
          "60 days dedicated technical SLA",
        ],
      },
    },
    technologies: ["PHP CodeIgniter", "Perfex CRM", "MySQL", "REST APIs", "JavaScript"],
  },
  {
    id: "gig-perfex-crm-automation-workflow",
    slug: "setup-perfex-crm-customization-automation-workflow",
    title: "I will setup Perfex CRM customization, custom module development, automation, and workflow",
    category: "perfex-crm",
    subcategory: "Software Development",
    badge: "PRO SQUAD",
    seller: {
      name: "Zeyto Pro (Automation Squad)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      badge: "Pro Studio",
      role: "Enterprise CRM Workflow Engineers",
    },
    rating: 5.0,
    reviewsCount: 215,
    ordersInQueue: 5,
    thumbnail: "/assets/gigs/gig-perfex-crm-workflow.jpg",
    shortDescription: "End-to-end Perfex CRM installation, workflow automation setup, custom lead pipelines, automated SMS/WhatsApp notifications, and module extensions.",
    packages: {
      basic: {
        name: "Basic",
        title: "Setup & Core Workflow Triggers",
        description: "Full Perfex CRM server setup, cron configuration, and 3 automated lead status workflow triggers.",
        priceInr: 3499,
        priceUsd: 45,
        deliveryDays: 2,
        revisions: "3 Revisions",
        features: [
          "Perfex CRM installation & hardening",
          "Cron job & SMTP email config",
          "3 automated workflow triggers",
          "Custom lead status pipeline",
        ],
      },
      standard: {
        name: "Standard",
        title: "Omnichannel Workflow & Notification Suite",
        description: "Connect WhatsApp, SMS, and Email auto-responders to Perfex CRM events (New Lead, Invoice Overdue, Task Assigned).",
        priceInr: 10999,
        priceUsd: 139,
        deliveryDays: 4,
        revisions: "Unlimited Revisions",
        features: [
          "WhatsApp & SMS Gateway integration",
          "Multi-stage lead nurturing workflow",
          "Automated payment reminder escalation",
          "Client Portal custom landing view",
          "45 days support warranty",
        ],
      },
      premium: {
        name: "Premium",
        title: "Enterprise Automation Engine & SaaS Bridge",
        description: "Complete automated CRM hub with custom module development, Zapier/Make webhooks, multi-branch department routing, and executive analytics dashboards.",
        priceInr: 24999,
        priceUsd: 319,
        deliveryDays: 8,
        revisions: "Unlimited Revisions",
        features: [
          "1 Bespoke custom module build",
          "Zapier / Make / Webhook integration engine",
          "Multi-currency & multi-tax logic setup",
          "Role-based automated task assignments",
          "90 days priority support SLA",
        ],
      },
    },
    technologies: ["Perfex CRM", "PHP CodeIgniter", "WhatsApp API", "Zapier", "MySQL"],
  },
  {
    id: "gig-shopify-store-dropshipping",
    slug: "design-lucrative-black-friday-shopify-store-dropshipping",
    title: "I will design a high-converting Shopify store, dropshipping website, and e-commerce setup",
    category: "digital-marketing",
    subcategory: "Website Development",
    badge: "TRENDING",
    seller: {
      name: "Dona E. (Shopify Architect)",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "E-Commerce & Dropshipping Specialist",
    },
    rating: 4.9,
    reviewsCount: 276,
    ordersInQueue: 8,
    thumbnail: "/assets/gigs/gig-shopify-dropshipping.jpg",
    shortDescription: "High-converting Shopify store design, winning product research, Black Friday sale promotional layouts, automated dropshipping app setup, and fast checkout.",
    packages: {
      basic: {
        name: "Basic",
        title: "Single Product Store / Landing Page",
        description: "High-converting Shopify single-product landing page layout with custom banners, reviews, and payment gateway.",
        priceInr: 3999,
        priceUsd: 49,
        deliveryDays: 2,
        revisions: "3 Revisions",
        features: [
          "Shopify theme customization",
          "1 Winning product listing & copy",
          "Mobile-responsive design",
          "Payment gateway integration",
        ],
      },
      standard: {
        name: "Standard",
        title: "Complete Niche Store (Up to 30 Products)",
        description: "Full branded Shopify store build with winning dropshipping supplier setup (CJ Dropshipping / Zendrop), sales countdown timers, and currency converter.",
        priceInr: 11999,
        priceUsd: 149,
        deliveryDays: 5,
        revisions: "Unlimited Revisions",
        features: [
          "Up to 30 winning products imported",
          "Branded logo & hero promotional banners",
          "Automated dropshipping fulfillment app",
          "Klaviyo abandoned cart popup & flow",
          "30 days post-launch support",
        ],
      },
      premium: {
        name: "Premium",
        title: "Turnkey Black Friday / High-Volume Empire Store",
        description: "Enterprise Shopify dropshipping setup: Black Friday sale graphics, multi-currency checkout, SEO optimization, high-converting product upsells, and 30-day scaling roadmap.",
        priceInr: 25999,
        priceUsd: 329,
        deliveryDays: 8,
        revisions: "Unlimited Revisions",
        features: [
          "Complete premium theme customization",
          "50+ Winning products with optimized titles & SEO",
          "Black Friday & holiday promotion banners",
          "In-cart upsell & post-purchase cross-sell",
          "WhatsApp chat & order notification bot",
          "60 days dedicated e-commerce support",
        ],
      },
    },
    technologies: ["Shopify", "Liquid", "Klaviyo", "CJ Dropshipping", "PageFly / Shogun"],
  },
  {
    id: "gig-nextcloud-deployment",
    slug: "deploy-nextcloud-rocketchat-enterprise-vps",
    title: "I will deploy Nextcloud Enterprise or RocketChat on private VPS with SSL & backups",
    category: "cloud-devops",
    subcategory: "Cloud & Cybersecurity",
    badge: "PRO SQUAD",
    seller: {
      name: "Vikram N. (SecOps Lead)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "DevOps & Linux Hardening Specialist",
    },
    rating: 5.0,
    reviewsCount: 88,
    ordersInQueue: 2,
    thumbnail: "/assets/gigs/gig-nextcloud-devops.jpg",
    shortDescription: "Turnkey self-hosted private cloud deployment on Hetzner, AWS, DigitalOcean, or Contabo with automated S3 backup and CrowdSec WAF.",
    packages: {
      basic: {
        name: "Basic",
        title: "Single Instance VPS Deploy",
        description: "Nextcloud or RocketChat Docker install on Ubuntu VPS with Let's Encrypt SSL and UFW firewall.",
        priceInr: 3499,
        priceUsd: 45,
        deliveryDays: 1,
        revisions: "3 Revisions",
        features: [
          "Dockerized deployment",
          "Let's Encrypt wildcard SSL",
          "Nginx reverse proxy config",
          "Basic security audit",
        ],
      },
      standard: {
        name: "Standard",
        title: "Enterprise Tuning & S3 Storage",
        description: "Redis caching, MinIO / AWS S3 object storage integration, OnlyOffice document editing, and automated nightly snapshots.",
        priceInr: 8499,
        priceUsd: 109,
        deliveryDays: 3,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "Redis memory cache optimization",
          "OnlyOffice / Collabora live doc editor",
          "S3/Wasabi external storage mount",
          "Automated encrypted cloud backups",
        ],
      },
      premium: {
        name: "Premium",
        title: "High-Availability Cluster & SSO",
        description: "Multi-node load balanced cluster with Keycloak SAML/OIDC Single Sign-On, CrowdSec WAF, and 24/7 monitoring alerting.",
        priceInr: 21999,
        priceUsd: 279,
        deliveryDays: 6,
        revisions: "Unlimited Revisions",
        features: [
          "HA Active-Active setup with Docker Swarm / K3s",
          "Keycloak / Google Workspace SSO integration",
          "CrowdSec WAF & fail2ban protection",
          "Prometheus & Grafana dashboard",
          "90 days managed monitoring SLA",
        ],
      },
    },
    technologies: ["Docker", "Ubuntu / Debian", "Nginx", "Redis", "MinIO S3", "CrowdSec"],
  },
  {
    id: "gig-fullstack-saas-mvp",
    slug: "build-full-stack-saas-mvp-nextjs-laravel",
    title: "I will build a modern full stack SaaS MVP web application with Stripe & database",
    category: "programming-tech",
    subcategory: "Software Development",
    badge: "TRENDING",
    seller: {
      name: "Rakebig Full-Stack Core",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
      badge: "Pro Studio",
      role: "Senior Full-Stack Product Architects",
    },
    rating: 4.9,
    reviewsCount: 195,
    ordersInQueue: 5,
    thumbnail: "/assets/gigs/gig-saas-mvp-web.jpg",
    shortDescription: "Clean, production-grade Next.js or Laravel + Vue SaaS application with auth, Stripe subscriptions, dashboard, and automated deployments.",
    packages: {
      basic: {
        name: "Basic",
        title: "Landing Page & Waitlist App",
        description: "Responsive dark/light landing page with high-converting sections, email capture, and database connection.",
        priceInr: 4999,
        priceUsd: 65,
        deliveryDays: 3,
        revisions: "3 Revisions",
        features: [
          "Modern responsive UI (Astro / Next.js)",
          "Waitlist / inquiry form with DB storage",
          "Email notifications via Resend / Postmark",
          "SEO meta tags and OpenGraph setup",
        ],
      },
      standard: {
        name: "Standard",
        title: "Complete Core SaaS MVP",
        description: "Full user auth (OAuth + Magic Links), user dashboard, CRUD records, and Stripe subscription billing.",
        priceInr: 19999,
        priceUsd: 249,
        deliveryDays: 7,
        revisions: "Unlimited Revisions",
        features: [
          "User authentication & session management",
          "Interactive dashboard with CRUD operations",
          "Stripe / Lemonsqueezy recurring payments",
          "Role-based access (Admin & User)",
          "PostgreSQL / MySQL database schema",
        ],
      },
      premium: {
        name: "Premium",
        title: "Enterprise SaaS with AI & Team Invites",
        description: "Multi-tenant workspaces, team invitations, AI model API integration, webhooks, and production CI/CD.",
        priceInr: 39999,
        priceUsd: 499,
        deliveryDays: 14,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "Organization workspaces & member invitations",
          "AI capabilities (LLM prompt flows / vision)",
          "Docker & CI/CD deployment on AWS / Coolify",
          "Full TypeScript codebase & architecture docs",
        ],
      },
    },
    technologies: ["Next.js / Astro", "Laravel", "Tailwind CSS", "PostgreSQL", "Stripe"],
  },
  {
    id: "gig-flutter-app-clone",
    slug: "develop-flutter-mobile-app-clone-android-ios",
    title: "I will develop a Flutter mobile app or clone for Android and iOS with backend API",
    category: "mobile-apps",
    subcategory: "Mobile App Development",
    badge: "BESTSELLER",
    seller: {
      name: "Pooja K. (Mobile Architect)",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "Cross-Platform Flutter Engineer",
    },
    rating: 5.0,
    reviewsCount: 164,
    ordersInQueue: 3,
    thumbnail: "/assets/gigs/gig-flutter-mobile-app.jpg",
    shortDescription: "Custom Flutter iOS & Android apps: on-demand delivery, chat apps, booking systems, and CRM companion applications.",
    packages: {
      basic: {
        name: "Basic",
        title: "UI Screens Prototype",
        description: "Convert Figma / Adobe XD designs into pixel-perfect Flutter UI screens for iOS and Android.",
        priceInr: 4499,
        priceUsd: 59,
        deliveryDays: 2,
        revisions: "3 Revisions",
        features: [
          "Up to 4 responsive Flutter screens",
          "Clean widget tree architecture",
          "Smooth micro-animations & dark mode",
          "Complete source code repository",
        ],
      },
      standard: {
        name: "Standard",
        title: "Functional App with REST API",
        description: "Complete 10-screen mobile app integrated with your backend REST API, authentication, and push notifications.",
        priceInr: 16999,
        priceUsd: 219,
        deliveryDays: 6,
        revisions: "Unlimited Revisions",
        features: [
          "10 interactive app screens",
          "Firebase / JWT authentication",
          "REST API integration & state management",
          "Firebase Cloud Messaging push alerts",
          "APK & TestFlight builds delivered",
        ],
      },
      premium: {
        name: "Premium",
        title: "Turnkey App Clone with Admin Panel",
        description: "Complete client app, driver/provider app, and web admin portal with real-time GPS tracking and in-app payments.",
        priceInr: 34999,
        priceUsd: 449,
        deliveryDays: 12,
        revisions: "Unlimited Revisions",
        features: [
          "Customer App + Service Provider App",
          "Web admin management dashboard",
          "Live map tracking & payment gateway",
          "Play Store & App Store publish assistance",
          "60 days dedicated post-launch support",
        ],
      },
    },
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "Google Maps SDK"],
  },
  {
    id: "gig-ecommerce-email-whatsapp",
    slug: "setup-klaviyo-whatsapp-ecommerce-marketing-flows",
    title: "I will setup high-converting Klaviyo and WhatsApp marketing flows for ecommerce",
    category: "digital-marketing",
    subcategory: "Website Development",
    badge: "TRENDING",
    seller: {
      name: "Hamza M. (Retention Expert)",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "E-Commerce Retention Specialist",
    },
    rating: 4.9,
    reviewsCount: 228,
    ordersInQueue: 6,
    thumbnail: "/assets/gigs/gig-klaviyo-ecommerce.jpg",
    shortDescription: "Automate top-notch Klaviyo email marketing flows and WhatsApp abandoned cart automations for Shopify and WooCommerce.",
    packages: {
      basic: {
        name: "Basic",
        title: "Abandoned Cart & Welcome Flow",
        description: "Setup the 2 highest-revenue email & WhatsApp triggers: Abandoned Cart Recovery and New Customer Welcome series.",
        priceInr: 2514,
        priceUsd: 32,
        deliveryDays: 2,
        revisions: "Unlimited Revisions",
        features: [
          "Shopify / WooCommerce integration",
          "Abandoned cart 3-step sequence",
          "Welcome series with coupon nudge",
          "Custom branded email/message templates",
        ],
      },
      standard: {
        name: "Standard",
        title: "Core 6 Flow Revenue Engine",
        description: "Full setup of the essential 6 flows: Browse Abandonment, Cart Recovery, Post-Purchase Cross-Sell, Winback, and VIP series.",
        priceInr: 6999,
        priceUsd: 89,
        deliveryDays: 4,
        revisions: "Unlimited Revisions",
        features: [
          "All 6 essential retention flows",
          "Smart customer segmentation (VIP, Churned)",
          "WhatsApp + Email dual-channel orchestration",
          "Copywriting & graphic asset design",
          "A/B subject line and timing tests",
        ],
      },
      premium: {
        name: "Premium",
        title: "Full-Funnel Automation & 30-Day Scale",
        description: "Complete omni-channel automation overhaul, custom pop-up capture forms, WhatsApp bot flow builder, and 30 days revenue optimization.",
        priceInr: 15499,
        priceUsd: 199,
        deliveryDays: 8,
        revisions: "Unlimited Revisions",
        features: [
          "Complete email & WhatsApp ecosystem",
          "High-converting site pop-up gamification",
          "Dynamic product recommendation blocks",
          "Deliverability audit & domain warm-up",
          "Weekly revenue reports for 30 days",
        ],
      },
    },
    technologies: ["Klaviyo", "Shopify", "WhatsApp Cloud API", "WooCommerce", "Figma"],
  },
  {
    id: "gig-ai-voice-agents",
    slug: "ai-voice-agents",
    title: "I will build an AI voice agent and automated calling bot with Retell, Vapi, and Twilio",
    category: "ai-services",
    subcategory: "AI Workflows & Automation",
    badge: "TRENDING",
    seller: {
      name: "Aman R. (Voice AI Lead)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "Conversational Voice AI Engineer",
    },
    rating: 4.9,
    reviewsCount: 118,
    ordersInQueue: 5,
    thumbnail: "/assets/gigs/gig-ai-voice-agents.jpg",
    shortDescription: "Deploy ultra-low latency AI phone agents for inbound customer support, outbound qualification, appointment booking, and CRM sync using Vapi, Retell, and Twilio.",
    packages: {
      basic: {
        name: "Basic",
        title: "Starter Outbound Voice Bot",
        description: "1 automated outbound calling flow with Twilio and Retell/Vapi, custom prompt script, and call recording webhook.",
        priceInr: 3999,
        priceUsd: 49,
        deliveryDays: 2,
        revisions: "3 Revisions",
        features: [
          "Twilio SIP & phone number setup",
          "1 custom conversational prompt script",
          "Realistic natural voice selection (ElevenLabs)",
          "Call transcript and audio recording hook",
          "Basic error handling & hangup detection",
        ],
      },
      standard: {
        name: "Standard",
        title: "Inbound / Outbound Assistant with RAG",
        description: "Full two-way conversational voice agent connected to your company knowledge base, appointment calendar, and WhatsApp follow-up.",
        priceInr: 12999,
        priceUsd: 159,
        deliveryDays: 4,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "Company knowledge base retrieval (RAG)",
          "Live Google Calendar / Cal.com booking tool",
          "Automated post-call WhatsApp / SMS summary",
          "Sentiment analysis & lead qualification tag",
          "30 days warranty & latency tuning",
        ],
      },
      premium: {
        name: "Premium",
        title: "Enterprise AI Call Center & CRM Sync",
        description: "High-volume enterprise voice infrastructure with live human agent transfer, bi-directional CRM sync, multi-language speech, and custom analytics dashboard.",
        priceInr: 29999,
        priceUsd: 389,
        deliveryDays: 8,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "Live call warm transfer to human reps",
          "Perfex CRM / HubSpot / Salesforce integration",
          "Multi-lingual voice support (English, Hindi, Spanish)",
          "Custom webhooks & payment link triggering",
          "60 days dedicated SLA & priority monitoring",
        ],
      },
    },
    technologies: ["Vapi AI", "Retell AI", "Twilio", "ElevenLabs", "FastAPI / Node.js"],
  },
  {
    id: "gig-custom-llm-rag",
    slug: "custom-llm-rag",
    title: "I will build a custom LLM RAG pipeline with LangChain, LlamaIndex, and vector database",
    category: "ai-services",
    subcategory: "AI Workflows & Automation",
    badge: "BESTSELLER",
    seller: {
      name: "Rakebig AI Labs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      badge: "Pro Studio",
      role: "Senior AI Research & RAG Engineers",
    },
    rating: 5.0,
    reviewsCount: 156,
    ordersInQueue: 6,
    thumbnail: "/assets/gigs/gig-custom-llm-rag.jpg",
    shortDescription: "Production-grade retrieval augmented generation (RAG) system with hybrid search, document chunking, embeddings, re-ranking, and low-latency API endpoints.",
    packages: {
      basic: {
        name: "Basic",
        title: "Document Ingestion & Semantic Q&A",
        description: "Vectorize up to 100 documents (PDF/CSV/Notion), Pinecone or ChromaDB setup, and query endpoint with OpenAI embeddings.",
        priceInr: 4499,
        priceUsd: 59,
        deliveryDays: 2,
        revisions: "3 Revisions",
        features: [
          "Document parsing & chunking strategy",
          "Vector database setup (ChromaDB / Pinecone)",
          "Semantic similarity search endpoint",
          "Hallucination mitigation prompt guardrails",
          "API documentation & test curl scripts",
        ],
      },
      standard: {
        name: "Standard",
        title: "Advanced Hybrid RAG with Citations",
        description: "Production RAG architecture with BM25 + dense hybrid search, Cohere re-ranking, metadata filtering, citations, and FastAPI wrapper.",
        priceInr: 14999,
        priceUsd: 189,
        deliveryDays: 5,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "Hybrid retrieval (Keyword BM25 + Dense Vectors)",
          "Cross-encoder re-ranking for top relevance",
          "Exact source page citations in responses",
          "FastAPI backend with streaming token support",
          "Admin upload UI for new documents",
        ],
      },
      premium: {
        name: "Premium",
        title: "Enterprise Self-Hosted Private RAG",
        description: "Enterprise-grade private RAG with local LLM (Ollama / vLLM / DeepSeek), role-based document access, Docker deployment, and enterprise data security.",
        priceInr: 34999,
        priceUsd: 439,
        deliveryDays: 10,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "100% on-premise / private cloud deployment",
          "Local open-source LLM & embedding models",
          "Role-based document access control (RBAC)",
          "Full Dockerized stack with monitoring",
          "90 days enterprise technical warranty",
        ],
      },
    },
    technologies: ["LangChain", "LlamaIndex", "Pinecone / Qdrant", "OpenAI / Claude", "FastAPI"],
  },
  {
    id: "gig-zapier-n8n-automations",
    slug: "zapier-n8n-automations",
    title: "I will build autonomous AI agents and automated workflows in n8n, Make, and Zapier",
    category: "ai-services",
    subcategory: "AI Workflows & Automation",
    badge: "PRO SQUAD",
    seller: {
      name: "Devon C. (Automation Lead)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "Workflow Automation & Agent Architect",
    },
    rating: 4.9,
    reviewsCount: 203,
    ordersInQueue: 4,
    thumbnail: "/assets/gigs/gig-zapier-n8n-automations.jpg",
    shortDescription: "Build autonomous multi-step workflow automations connecting webhooks, AI models, CRMs, Google Sheets, Slack, and email using n8n, Make, or Zapier.",
    packages: {
      basic: {
        name: "Basic",
        title: "Single Intelligent Workflow",
        description: "Build 1 automated flow (up to 5 steps) connecting forms, OpenAI text generation, and email or Slack alerts.",
        priceInr: 2999,
        priceUsd: 39,
        deliveryDays: 1,
        revisions: "3 Revisions",
        features: [
          "1 automated workflow (Zapier, Make, or n8n)",
          "OpenAI GPT-4o step integration",
          "Webhook trigger & JSON data formatting",
          "Test runs with sample data & bug fixes",
        ],
      },
      standard: {
        name: "Standard",
        title: "Multi-App AI Pipeline with CRM",
        description: "Up to 3 interconnected automation workflows with conditional branching, error catching, CRM update, and WhatsApp/Email routing.",
        priceInr: 8999,
        priceUsd: 119,
        deliveryDays: 3,
        revisions: "Unlimited Revisions",
        features: [
          "Up to 3 complex automated workflows",
          "Router logic & conditional filters",
          "Error notification fallback webhooks",
          "CRM sync (Perfex, HubSpot, or Airtable)",
          "WhatsApp notification integration",
          "30 days troubleshooting warranty",
        ],
      },
      premium: {
        name: "Premium",
        title: "Self-Hosted n8n Enterprise Agent Hub",
        description: "Deploy self-hosted n8n on Docker VPS with unlimited workflow runs, autonomous LangChain AI agent nodes, database connections, and custom webhooks.",
        priceInr: 21999,
        priceUsd: 279,
        deliveryDays: 6,
        revisions: "Unlimited Revisions",
        features: [
          "Self-hosted n8n deployment on private VPS with SSL",
          "Zero monthly Zapier task subscription fees",
          "Autonomous AI Agent with memory & tool calling",
          "Database hooks (PostgreSQL, MySQL, Supabase)",
          "Automated nightly workflow backups",
          "60 days dedicated automation SLA",
        ],
      },
    },
    technologies: ["n8n", "Make.com", "Zapier", "OpenAI GPT-4o", "Docker", "REST Webhooks"],
  },
  {
    id: "gig-hermes-openclaw-ai-employee",
    slug: "build-ai-employee-automation-hermes-openclaw",
    title: "I will build an AI employee and autonomous agent with Hermes Agent, OpenClaw, and n8n",
    category: "ai-services",
    subcategory: "AI Workflows & Automation",
    badge: "BESTSELLER",
    seller: {
      name: "Rakebig Autonomous Labs",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      badge: "Pro Studio",
      role: "Lead Autonomous Agent & MCP Architect",
    },
    rating: 5.0,
    reviewsCount: 148,
    ordersInQueue: 7,
    thumbnail: "/assets/gigs/gig-hermes-openclaw-ai-employee.jpg",
    shortDescription: "Deploy a 24/7 autonomous AI employee using Hermes Agent, OpenClaw, and n8n with MCP tool calling, Claude Code reasoning, WhatsApp/Telegram, and Obsidian memory on private VPS.",
    packages: {
      basic: {
        name: "Basic",
        title: "Hermes / OpenClaw VPS Setup & 1 Channel",
        description: "Deploy Hermes Agent or OpenClaw on your VPS/Docker, connect Claude AI / GPT-4o reasoning, and integrate 1 messaging channel (Telegram or WhatsApp).",
        priceInr: 4999,
        priceUsd: 59,
        deliveryDays: 2,
        revisions: "3 Revisions",
        features: [
          "Hermes Agent or OpenClaw VPS deployment",
          "Docker containerization & security hardening",
          "1 Messaging channel (Telegram or WhatsApp)",
          "Claude AI / GPT-4o API integration",
          "Basic memory & prompt persona configuration",
          "System handover & setup documentation",
        ],
      },
      standard: {
        name: "Standard",
        title: "Autonomous AI Employee with n8n & MCP",
        description: "Multi-tool AI employee with OpenClaw delegation, n8n workflow triggers, MCP servers (Gmail, Calendar, Browser), Obsidian memory, and both messaging apps.",
        priceInr: 16999,
        priceUsd: 219,
        deliveryDays: 5,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "OpenClaw multi-agent delegation framework",
          "n8n workflow automation with webhook triggers",
          "MCP Server & custom tool calling integration",
          "Obsidian AI persistent memory & second brain",
          "Gmail & Google Calendar autonomous actions",
          "Dual WhatsApp + Telegram bot synchronization",
          "30 days priority maintenance & prompt tuning",
        ],
      },
      premium: {
        name: "Premium",
        title: "Enterprise Multi-Agent Workforce & CRM Sync",
        description: "Full enterprise autonomous workforce with Hermes self-learning loop, Claude Code CLI, Perfex/HubSpot CRM sync, browser scraping, and scheduled cron jobs.",
        priceInr: 34999,
        priceUsd: 449,
        deliveryDays: 10,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "Custom multi-agent swarm (Research + Sales + Support)",
          "Claude Code CLI & deep developer tool integration",
          "Perfex CRM / HubSpot / Airtable lead pipeline sync",
          "Headless browser automation & Web scraping agent",
          "Scheduled recurring cron jobs & auto-reporting",
          "Private cloud / 100% self-hosted on Hetzner or AWS",
          "60 days enterprise SLA & technical warranty",
        ],
      },
    },
    technologies: [
      "Hermes Agent",
      "OpenClaw",
      "n8n",
      "Model Context Protocol (MCP)",
      "Claude AI",
      "WhatsApp & Telegram",
      "Obsidian",
      "Docker / VPS",
    ],
  },
  {
    id: "gig-ai-video-ads",
    slug: "create-ai-video-ads-for-brand-business",
    title: "I will create AI video ads for your brand, product or business",
    category: "video-animation",
    subcategory: "AI Video Creation & Ads",
    badge: "BESTSELLER",
    seller: {
      name: "Maya L. (AI Creative Director)",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces",
      badge: "Pro Studio",
      role: "Senior AI Commercial Producer & Visual Storyteller",
    },
    rating: 4.9,
    reviewsCount: 189,
    ordersInQueue: 9,
    thumbnail: "/assets/gigs/gig-ai-video-ads.jpg",
    shortDescription: "Create high-converting, viral AI video ads for TikTok, Instagram Reels, Facebook, and YouTube using photorealistic AI avatars, dynamic motion graphics, and persuasive storytelling.",
    packages: {
      basic: {
        name: "Basic",
        title: "15s Viral AI Hook Ad",
        description: "15-second high-impact AI video ad with engaging hook, AI voiceover, dynamic captions, background music, and 1080p Full HD export.",
        priceInr: 4199,
        priceUsd: 50,
        deliveryDays: 2,
        revisions: "2 Revisions",
        features: [
          "15-second high-retention video ad",
          "AI scriptwriting with proven viral hook",
          "Ultra-natural AI voiceover (ElevenLabs)",
          "Dynamic animated subtitles & text overlays",
          "Royalty-free background music & SFX",
          "1080p Full HD export (9:16 or 16:9)",
        ],
      },
      standard: {
        name: "Standard",
        title: "30s High-Converting Commercial",
        description: "30-second commercial video ad with photorealistic AI avatar/spokesperson, B-roll product footage, multi-scene pacing, and dual aspect ratios.",
        priceInr: 9999,
        priceUsd: 120,
        deliveryDays: 3,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "30-second multi-scene commercial narrative",
          "Hyper-realistic AI human avatar presenter",
          "B-roll transitions, zooms & visual sound effects",
          "Dual aspect ratios (9:16 Story/Reels & 1:1/16:9 Feed)",
          "Custom brand colors, logo watermarking & CTA",
          "Full commercial broadcast rights",
        ],
      },
      premium: {
        name: "Premium",
        title: "Full 60s Campaign + 3 Hook Tests",
        description: "60-second flagship promotional video ad + 3 distinct hook variations for TikTok/Meta ad spend testing, 4K rendering, sound design, and ad copy.",
        priceInr: 16799,
        priceUsd: 200,
        deliveryDays: 5,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "60-second cinematic product / brand video ad",
          "3 alternative hook variations for Meta/TikTok A/B testing",
          "Ultra 4K resolution rendering",
          "Professional copywriting for ad captions & headlines",
          "Custom 3D logo animation stinger",
          "Priority 48-hour delivery option",
        ],
      },
    },
    technologies: ["Runway Gen-3", "HeyGen / Kling", "ElevenLabs", "Premiere Pro / After Effects", "CapCut Pro"],
    seoKeywords: [
      "AI video ads",
      "create AI commercials",
      "TikTok AI video ads",
      "Instagram Reels video ads",
      "AI spokesperson video",
      "HeyGen video ads",
      "Runway Gen-3 ads",
      "UGC AI video creator",
      "AI advertising agency",
      "video ads for business"
    ],
    faqs: [
      {
        question: "How do AI video ads perform compared to traditional commercial video production?",
        answer: "AI video ads achieve comparable or higher click-through rates (often 25-40% higher on TikTok and Meta Ads) at a fraction of traditional studio production costs. They allow rapid A/B testing of hooks, copy, and visual angles without renting studios or hiring expensive production crews."
      },
      {
        question: "Which AI models and video editing suites do you use?",
        answer: "We combine top-tier generative AI models including Runway Gen-3, Kling, Midjourney, and HeyGen for photorealistic visuals and avatars, paired with ElevenLabs for natural vocal cadence and Premiere Pro/After Effects for frame-accurate motion editing and sound design."
      },
      {
        question: "Do I own full commercial rights to run these videos as paid ads?",
        answer: "Yes. Every video delivered includes 100% full commercial rights, licensed royalty-free background audio, and clear copyright ownership for paid advertising across Meta (Facebook & Instagram), TikTok, YouTube, LinkedIn, and Google Ads."
      },
      {
        question: "What aspect ratios and video formats are delivered?",
        answer: "We deliver high-definition 1080p and 4K MP4 files in 9:16 vertical (ideal for TikTok, Instagram Reels, and YouTube Shorts) and 1:1 / 16:9 widescreen formats (ideal for Facebook feed and website hero landing pages)."
      }
    ],
  },
  {
    id: "gig-n8n-business-automation",
    slug: "automate-business-workflow-using-n8n-and-ai",
    title: "I will automate your business workflow using n8n and AI",
    category: "ai-services",
    subcategory: "AI Workflows & Automation",
    badge: "TOP RATED",
    seller: {
      name: "Alex K. (n8n Automation Pro)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "Certified n8n Workflow Architect & AI Integrator",
    },
    rating: 5.0,
    reviewsCount: 162,
    ordersInQueue: 6,
    thumbnail: "/assets/gigs/gig-n8n-business-automation.jpg",
    shortDescription: "Eliminate repetitive business tasks and cut SaaS subscription bills by building smart, autonomous n8n workflows powered by OpenAI, Claude, webhooks, and seamless CRM integrations.",
    packages: {
      basic: {
        name: "Basic",
        title: "Single Intelligent n8n Flow",
        description: "1 automated n8n workflow (up to 5 nodes) connecting forms/webhooks to OpenAI text parsing, email drafting, and Slack/Sheets notifications.",
        priceInr: 8399,
        priceUsd: 100,
        deliveryDays: 2,
        revisions: "3 Revisions",
        features: [
          "1 custom n8n automation workflow (up to 5 nodes)",
          "OpenAI / Claude LLM integration for intelligent extraction",
          "Webhook trigger & JSON data formatting",
          "Slack, Google Sheets, or Email alert routing",
          "Error notification fallback & test verification",
        ],
      },
      standard: {
        name: "Standard",
        title: "Multi-App AI Pipeline with CRM",
        description: "Up to 3 interconnected n8n automation workflows with conditional branching, error catching, CRM sync (Perfex, HubSpot, Notion), and WhatsApp alerts.",
        priceInr: 18499,
        priceUsd: 220,
        deliveryDays: 4,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "Up to 3 interconnected business workflows",
          "Multi-step conditional routing & logic switches",
          "Bi-directional CRM sync (Perfex, HubSpot, Salesforce, Airtable)",
          "Document & PDF data extraction using AI vision",
          "Automated WhatsApp or Telegram notifications",
          "30 days warranty & maintenance support",
        ],
      },
      premium: {
        name: "Premium",
        title: "Enterprise Self-Hosted Agent Hub",
        description: "Deploy self-hosted n8n on private Docker VPS with SSL, unlimited execution runs, autonomous LangChain AI agent nodes, database hooks, and custom webhooks.",
        priceInr: 33599,
        priceUsd: 400,
        deliveryDays: 7,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "100% self-hosted n8n deployment on private VPS with SSL",
          "Zero Zapier/Make monthly task fees — unlimited workflow runs",
          "Autonomous AI Agent with memory, tools & RAG vector search",
          "PostgreSQL / MySQL / Supabase database automation hooks",
          "Automated daily workflow backup script & monitoring",
          "60 days enterprise technical SLA",
        ],
      },
    },
    technologies: ["n8n", "OpenAI GPT-4o", "Claude 3.5 Sonnet", "Docker / VPS", "REST Webhooks", "PostgreSQL"],
    seoKeywords: [
      "n8n automation",
      "AI workflow automation",
      "n8n AI agent",
      "Zapier alternative",
      "Make to n8n migration",
      "self-hosted n8n",
      "OpenAI n8n integration",
      "business process automation",
      "CRM webhook automation",
      "LangChain n8n nodes"
    ],
    faqs: [
      {
        question: "Why choose n8n over Zapier or Make.com for business automations?",
        answer: "n8n can be self-hosted on a private VPS for $10-20/month with zero per-task or per-execution fees, saving businesses hundreds or thousands in monthly Zapier subscription costs while keeping customer data 100% private and GDPR-compliant."
      },
      {
        question: "How do AI agents integrate into n8n workflows?",
        answer: "n8n natively supports LangChain AI agent nodes, vector stores, and LLMs (OpenAI GPT-4o, Claude 3.5 Sonnet, DeepSeek). We configure agents that dynamically decide tool usage, parse unformatted customer emails, look up CRM data, and execute actions autonomously."
      },
      {
        question: "Can n8n sync bi-directionally with Perfex CRM, HubSpot, and Google Sheets?",
        answer: "Yes. We specialize in custom webhook and REST API integrations between n8n and Perfex CRM, HubSpot, Salesforce, Airtable, Notion, Stripe, and Google Workspace for seamless instant bi-directional updates."
      },
      {
        question: "Do you provide ongoing maintenance and troubleshooting for self-hosted n8n?",
        answer: "Yes. Every self-hosted n8n package includes automated nightly database backups, Docker restart policies, error-handling alert channels (Slack or Telegram), and dedicated post-launch technical warranty."
      }
    ],
  },
  {
    id: "gig-ai-mvp-webapp",
    slug: "build-ai-powered-mvp-or-web-application",
    title: "I will build an AI-powered MVP or web application",
    category: "programming-tech",
    subcategory: "AI Web Applications",
    badge: "TRENDING",
    seller: {
      name: "Rakebig MVP Foundry",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      badge: "Pro Studio",
      role: "Full-Stack AI Product Engineers & Tech Leads",
    },
    rating: 4.9,
    reviewsCount: 178,
    ordersInQueue: 8,
    thumbnail: "/assets/gigs/gig-ai-mvp-webapp.jpg",
    shortDescription: "Rapidly turn your AI product concept into a market-ready web app or SaaS MVP. Built with Next.js/FastAPI, modern UI, AI model APIs, user authentication, and Stripe payments.",
    packages: {
      basic: {
        name: "Basic",
        title: "AI Micro-App Prototype",
        description: "Single-feature AI web tool (e.g. AI generator, summarizer, or prompt assistant) with responsive modern UI and OpenAI/Claude API integration.",
        priceInr: 16799,
        priceUsd: 200,
        deliveryDays: 4,
        revisions: "3 Revisions",
        features: [
          "Clean, modern Next.js / React responsive web UI",
          "Single-feature AI generation pipeline (OpenAI/Anthropic)",
          "Streaming token response UI",
          "Mobile-friendly dark/light responsive layout",
          "Deployment to Vercel / Railway with live URL",
        ],
      },
      standard: {
        name: "Standard",
        title: "Full Functional AI MVP App",
        description: "Complete AI web application with user authentication, database, token/credit usage tracking, Stripe checkout, and user history.",
        priceInr: 39999,
        priceUsd: 480,
        deliveryDays: 8,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "User Authentication (Supabase Auth / NextAuth / Clerk)",
          "Database schema (PostgreSQL / Supabase) with user history",
          "Token / credit limit tracking system per user",
          "Stripe payment integration (one-time packs or checkout)",
          "User dashboard & saved generations export",
          "Full source code repository access",
        ],
      },
      premium: {
        name: "Premium",
        title: "Complete Production AI SaaS MVP",
        description: "Turnkey AI SaaS product with multi-tier Stripe subscriptions, team workspaces, custom prompt chains/RAG, admin analytics panel, and CI/CD.",
        priceInr: 71499,
        priceUsd: 850,
        deliveryDays: 14,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "Multi-tier Stripe subscription billing & customer portal",
          "Team workspaces & member invite management",
          "Advanced AI workflow (RAG, tool-calling, or multi-modal vision)",
          "Admin back-office dashboard with user analytics & usage stats",
          "Production Docker deployment on AWS / Hetzner or Vercel",
          "Comprehensive architecture documentation & 45 days SLA",
        ],
      },
    },
    technologies: ["Next.js / React", "FastAPI / Python", "PostgreSQL / Supabase", "OpenAI / Claude", "Stripe", "Tailwind CSS"],
    seoKeywords: [
      "AI MVP development",
      "AI SaaS web application",
      "Nextjs AI MVP",
      "FastAPI AI developer",
      "build AI web app",
      "Supabase OpenAI MVP",
      "hire AI SaaS developer",
      "AI startup prototype",
      "Stripe SaaS billing",
      "production AI software"
    ],
    faqs: [
      {
        question: "What tech stack do you recommend for an AI web application MVP?",
        answer: "We build modern AI applications using Next.js / React with Tailwind CSS on the frontend for lightning-fast UI, coupled with FastAPI (Python) or Node.js for backend AI prompt orchestration, and PostgreSQL / Supabase with Vector pgvector for data and user auth."
      },
      {
        question: "How is Stripe billing and AI token usage handled in the app?",
        answer: "We integrate Stripe Checkout and Customer Portal for subscription plans or one-time credit top-ups, combined with server-side rate limiting and token consumption tracking to prevent abuse and protect profit margins."
      },
      {
        question: "How fast can we launch an AI MVP from concept to live URL?",
        answer: "Our rapid MVP sprint delivers a fully functioning prototype within 4 to 8 days, deployed live to Vercel, Railway, or AWS with SSL, user authentication, and connected LLM streaming responses."
      },
      {
        question: "Do I receive full GitHub repository access and deployment documentation?",
        answer: "Yes, 100% full source code ownership is transferred directly to your GitHub/GitLab account upon completion, accompanied by an architecture guide and local development setup instructions."
      }
    ],
  },
  {
    id: "gig-social-media-posts",
    slug: "design-30-branded-social-media-posts-for-business",
    title: "I will design 30 branded social media posts for your business",
    category: "graphics-design",
    subcategory: "Social Media Design",
    badge: "BESTSELLER",
    seller: {
      name: "Chloe D. (Brand Designer)",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "Senior Brand Identity & Social Content Specialist",
    },
    rating: 5.0,
    reviewsCount: 340,
    ordersInQueue: 11,
    thumbnail: "/assets/gigs/gig-social-media-posts.jpg",
    shortDescription: "Skyrocket your brand visibility and follower engagement with 30 cohesive, high-converting social media posts, carousel graphics, stories, and editable Canva/Figma templates.",
    packages: {
      basic: {
        name: "Basic",
        title: "10 Branded Starter Posts",
        description: "10 custom branded social media posts (Instagram, LinkedIn, Facebook) with cohesive colors, typography, high-res images, and post captions.",
        priceInr: 3399,
        priceUsd: 40,
        deliveryDays: 2,
        revisions: "3 Revisions",
        features: [
          "10 custom branded social media graphic posts",
          "Tailored to your brand guidelines, colors & fonts",
          "High-resolution PNG / JPEG formats (1:1 & 4:5)",
          "Engaging post captions & niche hashtag suggestions",
          "Commercial use rights",
        ],
      },
      standard: {
        name: "Standard",
        title: "20 Branded Posts + 5 Stories",
        description: "20 high-converting graphic posts + 5 animated Story templates, educational carousel slides, and editable Canva / Figma master template links.",
        priceInr: 7199,
        priceUsd: 85,
        deliveryDays: 4,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "20 cohesive social media posts",
          "5 matching Instagram Story / Reel cover templates",
          "Multi-slide educational carousel layouts",
          "Editable Canva or Figma source templates",
          "Competitor aesthetic audit & visual mood board",
        ],
      },
      premium: {
        name: "Premium",
        title: "30 Branded Posts + 10 Stories + 30-Day Strategy",
        description: "Complete 30-day social media domination package: 30 branded posts, 10 Stories, 5 viral carousel decks, full monthly calendar strategy, and editable files.",
        priceInr: 11799,
        priceUsd: 140,
        deliveryDays: 6,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "30 premium branded posts for a complete monthly schedule",
          "10 high-impact Story & Highlight covers",
          "5 multi-slide viral carousel decks (up to 7 slides each)",
          "30-day posting calendar roadmap with hooks & CTAs",
          "Full editable Figma & Canva Pro master project files",
          "Priority VIP support & unlimited revisions",
        ],
      },
    },
    technologies: ["Figma", "Canva Pro", "Adobe Illustrator", "Photoshop", "Brand Guidelines"],
    seoKeywords: [
      "30 branded social media posts",
      "social media post design",
      "Canva social media templates",
      "Instagram carousel design",
      "brand identity graphics",
      "LinkedIn post graphics",
      "social media content calendar",
      "Figma social media pack",
      "e-commerce social graphics",
      "social media marketing assets"
    ],
    faqs: [
      {
        question: "Do you create custom designs or use generic pre-made Canva templates?",
        answer: "All designs are crafted bespoke to your unique brand identity, color palette, typography guidelines, and industry positioning. We never use generic recycled templates."
      },
      {
        question: "Are editable source files included in the delivery?",
        answer: "Yes! You receive editable Canva Pro or Figma master links so you and your internal team can easily reuse the layouts, swap text, or change imagery in the future."
      },
      {
        question: "Do you write the captions and suggest hashtags for each post?",
        answer: "Yes. Each post includes high-converting caption copy, targeted calls-to-action (CTAs), and curated low-competition/high-intent hashtags designed for organic algorithmic reach."
      },
      {
        question: "What platforms are these graphics formatted for?",
        answer: "Graphics are delivered in high-resolution PNG/JPG optimized for Instagram (1:1 square & 4:5 portrait), LinkedIn, Facebook, X (Twitter), and Pinterest, with matching 9:16 Story formats."
      }
    ],
  },
  {
    id: "gig-youtube-shorts-editing",
    slug: "edit-engaging-youtube-shorts-with-captions-and-hooks",
    title: "I will edit engaging YouTube Shorts with captions and hooks",
    category: "video-animation",
    subcategory: "Short-Form Video Editing",
    badge: "TRENDING",
    seller: {
      name: "Leo R. (Viral Shorts Editor)",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "Viral Short-Form Retention & Motion Editor",
    },
    rating: 4.9,
    reviewsCount: 215,
    ordersInQueue: 14,
    thumbnail: "/assets/gigs/gig-youtube-shorts-editing.jpg",
    shortDescription: "Turn raw footage or podcasts into viral, high-retention YouTube Shorts, Instagram Reels, and TikToks with dynamic kinetic typography, animated emojis, sound design, and hook pacing.",
    packages: {
      basic: {
        name: "Basic",
        title: "3 Viral Shorts / Reels",
        description: "3 high-energy short-form videos (up to 60s each), kinetic animated captions, punchy jump cuts, background music, and sound effects.",
        priceInr: 3399,
        priceUsd: 40,
        deliveryDays: 2,
        revisions: "3 Revisions",
        features: [
          "3 engaging short-form videos edited (up to 60s)",
          "Dynamic color-coded animated captions & emojis",
          "Jump cuts, zoom-ins & dead-air removal",
          "Sound effects (whooshes, pops, ding) & background music",
          "1080x1920 60FPS vertical format",
        ],
      },
      standard: {
        name: "Standard",
        title: "8 High-Retention Shorts + B-Roll",
        description: "8 viral short-form videos with 3-second hook optimization, context B-roll overlays, kinetic typography, motion graphics, and color grading.",
        priceInr: 7199,
        priceUsd: 85,
        deliveryDays: 4,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "8 viral short-form videos edited",
          "First 3-second retention hook enhancement",
          "High-definition stock B-roll footage overlays",
          "Motion graphics, split screens & progress bars",
          "Cinematic color grading & audio denoising",
          "Custom font & brand color palette matching",
        ],
      },
      premium: {
        name: "Premium",
        title: "15 Viral Shorts + Thumbnail Covers",
        description: "Complete short-form content machine: 15 viral videos, advanced motion design, tailored sound design, custom thumbnail cover cards, and rush turnaround.",
        priceInr: 12599,
        priceUsd: 150,
        deliveryDays: 7,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "15 viral short-form videos (YouTube Shorts, Reels, TikTok)",
          "15 eye-catching Instagram/YouTube cover cards",
          "Advanced sound design mix for maximum retention",
          "Multi-platform optimization (captions safe zones)",
          "Fast track delivery & unlimited tweaks",
          "Monthly recurring editing partnership available",
        ],
      },
    },
    technologies: ["Adobe Premiere Pro", "After Effects", "CapCut Pro", "Submagic", "Audition"],
    seoKeywords: [
      "YouTube Shorts video editor",
      "Alex Hormozi captions",
      "viral TikTok editing",
      "Instagram Reels editor",
      "kinetic typography subtitles",
      "short form video editor",
      "retention video editing",
      "podcast video cutdowns",
      "CapCut Pro editing",
      "social video editor"
    ],
    faqs: [
      {
        question: "What is the 'Alex Hormozi style' subtitle effect and why is it so effective?",
        answer: "It features bold, dynamic, word-by-word highlighted kinetic captions with animated emojis, high-contrast colors (yellow, green, white), and sound effects. Studies show it increases viewer watch time and completion rate by over 60% on mobile feeds."
      },
      {
        question: "How do you optimize the first 3 seconds (the hook) of the video?",
        answer: "We cut dead air, zoom in on key focal points, add contextual sound effects, and overlay visual teaser text or stock B-roll to immediately grip the viewer's attention and prevent swipe-aways."
      },
      {
        question: "What video editing software do you use for rendering?",
        answer: "We edit primarily in Adobe Premiere Pro and After Effects supplemented by CapCut Pro and professional sound design suites, exporting in crisp 1080x1920 60FPS vertical resolution."
      },
      {
        question: "Can I send long-form podcast or YouTube video links for you to extract clips from?",
        answer: "Yes! You can share timestamps or full podcast/webinar recordings. We identify the most engaging, viral moments, crop to vertical format, and edit them into standalone high-retention Shorts."
      }
    ],
  },
  {
    id: "gig-ai-voice-agent-booking",
    slug: "build-ai-voice-agent-customer-support-booking-qualification",
    title: "I will build an AI voice agent for customer support, appointment booking or lead qualification",
    category: "ai-services",
    subcategory: "AI Voice Agents",
    badge: "BESTSELLER",
    seller: {
      name: "Aman R. (Voice AI Lead)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "Conversational Voice AI Engineer",
    },
    rating: 5.0,
    reviewsCount: 134,
    ordersInQueue: 7,
    thumbnail: "/assets/gigs/gig-ai-voice-agent-booking.jpg",
    shortDescription: "Deploy ultra-low latency AI phone agents for inbound customer support, outbound qualification, appointment booking, and CRM sync using Vapi, Retell AI, and Twilio.",
    packages: {
      basic: {
        name: "Basic",
        title: "Starter AI Voice Bot",
        description: "1 automated inbound or outbound phone flow with Twilio and Retell/Vapi, custom conversational prompt, realistic voice, and webhook.",
        priceInr: 12599,
        priceUsd: 150,
        deliveryDays: 3,
        revisions: "3 Revisions",
        features: [
          "Twilio SIP trunk & phone number setup",
          "1 custom conversational prompt script & persona",
          "Ultra-realistic voice selection (ElevenLabs / Deepgram)",
          "Call recording, transcript & webhook delivery",
          "Latency optimization under 800ms",
        ],
      },
      standard: {
        name: "Standard",
        title: "Calendar Booking & Knowledge Base Agent",
        description: "Full two-way conversational voice assistant connected to Google Calendar / Cal.com, company knowledge base (RAG), and post-call SMS/WhatsApp summaries.",
        priceInr: 26899,
        priceUsd: 320,
        deliveryDays: 5,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "Live Google Calendar / Cal.com automated booking tool",
          "Company knowledge base retrieval for instant FAQs",
          "Automated post-call SMS / WhatsApp confirmation & summary",
          "Lead qualification tagging & intent score",
          "30 days maintenance warranty & prompt refinement",
        ],
      },
      premium: {
        name: "Premium",
        title: "Enterprise AI Call Center & CRM Sync",
        description: "High-volume enterprise voice infrastructure with live human agent transfer, bi-directional CRM sync, multi-language speech, and analytics dashboard.",
        priceInr: 45999,
        priceUsd: 550,
        deliveryDays: 9,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "Warm live transfer to human customer service agents",
          "Bi-directional CRM sync (Perfex CRM, HubSpot, Salesforce)",
          "Multi-lingual voice capabilities (English, Spanish, Hindi, etc.)",
          "Custom webhooks for order status & payment link dispatch",
          "Analytics dashboard tracking call outcomes & sentiment",
          "60 days priority SLA & emergency support",
        ],
      },
    },
    technologies: ["Retell AI", "Vapi AI", "Twilio", "ElevenLabs", "FastAPI / Node.js", "Perfex / HubSpot CRM"],
    seoKeywords: [
      "AI voice agent",
      "automated calling bot",
      "Vapi AI developer",
      "Retell AI setup",
      "Twilio AI voice bot",
      "AI appointment booking",
      "customer support voice agent",
      "conversational voice AI",
      "ElevenLabs voice bot",
      "AI call center"
    ],
    faqs: [
      {
        question: "How natural do the AI voices sound on live phone calls?",
        answer: "We use ElevenLabs and Deepgram ultra-realistic neural voice models with sub-800ms latency. Callers typically cannot distinguish the agent from a human representative, as it responds fluidly to interruptions and natural conversation pauses."
      },
      {
        question: "Can the AI voice agent check real-time availability and book appointments?",
        answer: "Yes! The bot integrates directly with Google Calendar, Cal.com, or Calendly via API tools to look up available slots, confirm attendee details, schedule bookings, and send instant SMS/WhatsApp confirmation links."
      },
      {
        question: "What happens if a customer has a complex query or wants to speak to a human?",
        answer: "We configure intelligent fallback logic: the voice agent can perform a warm live call transfer to a designated human team member's phone number or log an escalation ticket directly into your CRM."
      },
      {
        question: "Which telephony providers are supported?",
        answer: "We configure official Twilio SIP trunks, Vonage, or Telnyx, enabling local phone numbers across 100+ countries with inbound receiving and compliant outbound automated calling."
      }
    ],
  },
  {
    id: "gig-ai-promotional-videos",
    slug: "create-ai-powered-promotional-videos-for-business-campaign",
    title: "I will create AI-powered promotional videos for your business, product or social media campaign",
    category: "video-animation",
    subcategory: "AI Video Creation & Ads",
    badge: "PRO SQUAD",
    seller: {
      name: "Julian S. (Promo Studio)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      badge: "Pro Studio",
      role: "Senior Commercial Video Producer & Creative Director",
    },
    rating: 4.9,
    reviewsCount: 192,
    ordersInQueue: 6,
    thumbnail: "/assets/gigs/gig-ai-promotional-videos.jpg",
    shortDescription: "Visually demonstrate your product or company with cinematic, AI-powered promotional videos. Hyper-realistic scenes, professional voiceovers, product highlights, and repeat monthly packages.",
    packages: {
      basic: {
        name: "Basic",
        title: "30s AI Showcase Promo",
        description: "30-second AI promotional video showcasing your product or service with realistic presenter, scriptwriting, motion graphics, and background music.",
        priceInr: 6299,
        priceUsd: 75,
        deliveryDays: 2,
        revisions: "3 Revisions",
        features: [
          "30-second cinematic promotional video",
          "AI scriptwriting tailored to your value proposition",
          "Photorealistic AI presenter or dynamic product B-roll",
          "Royalty-free licensed background music & sound effects",
          "1080p Full HD video file with commercial license",
        ],
      },
      standard: {
        name: "Standard",
        title: "60s Cinematic Brand Commercial",
        description: "60-second high-end promotional video with 3D product mockups, cinematic AI environments, professional voiceover, and multi-format exports.",
        priceInr: 13499,
        priceUsd: 160,
        deliveryDays: 4,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "60-second narrative brand or product commercial",
          "3D product mockup integration & custom scene staging",
          "Studio-quality AI voiceover with nuanced emotion",
          "Dynamic animated typography & logo reveal stinger",
          "Both 16:9 (YouTube/Website) and 9:16 (Instagram/TikTok) formats",
          "Full commercial broadcast rights",
        ],
      },
      premium: {
        name: "Premium",
        title: "Complete Video Ad Campaign Suite",
        description: "Comprehensive promotional campaign: 3 tailored videos (15s teaser, 30s feature, 60s brand story) with A/B ad variations, 4K rendering, and monthly retainer options.",
        priceInr: 25199,
        priceUsd: 300,
        deliveryDays: 7,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "3 distinct video cuts: 15s Hook, 30s Feature, 60s Brand Story",
          "A/B creative variations for paid advertising campaigns",
          "Ultra 4K master rendering with high-bitrate color grading",
          "Multi-language voiceover translation (up to 2 languages)",
          "Dedicated creative director revision sessions",
          "Discounted repeat monthly retainer availability",
        ],
      },
    },
    technologies: ["Runway Gen-3", "Midjourney", "ElevenLabs", "After Effects", "Cinema 4D / Blender"],
    seoKeywords: [
      "AI promotional videos",
      "product promotional video",
      "commercial video production",
      "AI video marketing",
      "3D product showcase",
      "AI brand video",
      "cinematic promo video",
      "e-commerce product video",
      "luxury brand commercial",
      "video advertising campaign"
    ],
    faqs: [
      {
        question: "Can you showcase physical or digital products in the promotional video?",
        answer: "Yes. We create 3D device/packaging mockups or integrate real photographs and screen recordings into cinematic AI-rendered environments with realistic lighting and camera moves."
      },
      {
        question: "What is included in the full promotional video campaign package?",
        answer: "The Premium package delivers 3 tailored video formats: a 15-second high-energy hook teaser, a 30-second feature highlight, and a 60-second narrative brand story, complete with A/B ad spend variations."
      },
      {
        question: "Do you provide professional voiceover in multiple accents or languages?",
        answer: "Yes. We offer professional studio-quality voiceovers in American, British, Australian, and international accents, as well as multi-language translations (Spanish, French, German, Hindi, etc.)."
      },
      {
        question: "What licenses and rights do I receive with the final delivery?",
        answer: "You receive 100% royalty-free commercial broadcast rights for perpetual use across TV, social media advertising, website landing pages, trade shows, and YouTube."
      }
    ],
  },
  {
    id: "gig-wordpress-business-website",
    slug: "build-responsive-wordpress-business-website-or-redesign",
    title: "I will build a responsive WordPress business website or redesign your existing site",
    category: "programming-tech",
    subcategory: "Website Development",
    badge: "TOP RATED",
    seller: {
      name: "Rakebig Web Foundry",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
      badge: "Top Rated",
      role: "Senior WordPress & WooCommerce Architects",
    },
    rating: 5.0,
    reviewsCount: 412,
    ordersInQueue: 9,
    thumbnail: "/assets/gigs/gig-wordpress-business-website.jpg",
    shortDescription: "Build a modern, mobile-responsive WordPress business website from scratch or give your outdated site an ultra-clean redesign. Blazing fast loading speed, SEO ready, and easy to edit.",
    packages: {
      basic: {
        name: "Basic",
        title: "Starter 1-3 Page Site",
        description: "1 to 3 page responsive business website (Home, About/Services, Contact), Elementor / Gutenberg builder, contact form, and mobile optimization.",
        priceInr: 6299,
        priceUsd: 75,
        deliveryDays: 3,
        revisions: "3 Revisions",
        features: [
          "1 to 3 responsive pages (Home, Services, Contact)",
          "Elementor or Gutenberg visual page builder",
          "100% mobile, tablet & desktop responsiveness",
          "Working contact form & Google Maps integration",
          "Basic on-page SEO setup (meta tags, sitemap)",
          "Social media links & WhatsApp click-to-chat",
        ],
      },
      standard: {
        name: "Standard",
        title: "Complete 5-8 Page Corporate Site / Redesign",
        description: "Up to 8 pages complete corporate website or full modern redesign, blog system, speed optimization (90+ mobile score), newsletter popup, and security hardening.",
        priceInr: 15099,
        priceUsd: 180,
        deliveryDays: 6,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Basic",
          "Up to 8 beautifully designed pages or full site revamp",
          "Full blog setup with category sorting & author bio",
          "Advanced speed optimization (90+ Google PageSpeed score)",
          "Newsletter capture popups & CRM form integration",
          "WordPress security firewall, SSL & malware protection",
          "Video walkthrough on how to update content yourself",
          "30 days post-launch warranty support",
        ],
      },
      premium: {
        name: "Premium",
        title: "E-Commerce / Enterprise WordPress Portal",
        description: "Full-scale WordPress + WooCommerce website with up to 15 pages, online store with payment gateways (Stripe/PayPal/Razorpay), live chat, and automated backups.",
        priceInr: 29399,
        priceUsd: 350,
        deliveryDays: 10,
        revisions: "Unlimited Revisions",
        features: [
          "Everything in Standard",
          "Up to 15 custom pages with premium styling",
          "Full WooCommerce store setup (up to 20 products uploaded)",
          "Payment gateway integration (Stripe, PayPal, Razorpay)",
          "Automated shipping, tax & order invoice emails",
          "Live chat widget & WhatsApp automated bot connection",
          "Automated daily cloud backups & staging environment",
          "60 days dedicated technical maintenance & bug fixes",
        ],
      },
    },
    technologies: ["WordPress", "Elementor Pro", "WooCommerce", "PHP / CSS3", "Yoast / RankMath SEO", "WP Rocket"],
    seoKeywords: [
      "WordPress business website",
      "WordPress redesign",
      "Elementor Pro developer",
      "WooCommerce website development",
      "responsive WordPress site",
      "hire WordPress engineer",
      "fast WordPress speed optimization",
      "custom WordPress theme",
      "WordPress migration",
      "corporate website design"
    ],
    faqs: [
      {
        question: "Will my WordPress website be easy for my team to edit and update?",
        answer: "Yes! We build using intuitive visual page builders like Elementor Pro or modern Gutenberg blocks. We also record a personalized video walkthrough showing you how to update text, images, blog posts, and products without writing code."
      },
      {
        question: "How do you ensure the website loads fast on mobile devices?",
        answer: "We optimize image compression (WebP), implement server-level caching, minify CSS/JS scripts, and eliminate bloated plugins to ensure Google PageSpeed scores of 90+ on desktop and mobile."
      },
      {
        question: "Is on-page SEO included with the website build?",
        answer: "Yes. Every website is built with SEO best practices: clean semantic HTML5 heading structures (H1, H2, H3), meta titles and descriptions, XML sitemap generation, OpenGraph social preview tags, and fast loading speeds."
      },
      {
        question: "Can you redesign my existing live site without causing downtime or losing SEO rankings?",
        answer: "Yes. We build the redesign on a private staging environment. Once you review and approve it, we perform the live migration during low-traffic hours and configure 301 redirects to preserve all existing Google search rankings."
      }
    ],
  },
];
