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
}

export const GIG_CATEGORIES = [
  { id: "all", name: "All Services" },
  { id: "programming-tech", name: "Programming & Tech", hasMegaMenu: true },
  { id: "ai-services", name: "AI Services & Agents", hasMegaMenu: true },
  { id: "digital-marketing", name: "WhatsApp & Marketing", hasMegaMenu: true },
  { id: "perfex-crm", name: "Perfex CRM & SaaS", hasMegaMenu: false },
  { id: "mobile-apps", name: "Mobile Apps & Clones", hasMegaMenu: false },
  { id: "cloud-devops", name: "Cloud & DevOps", hasMegaMenu: false },
];

// Multi-column mega menu definitions directly mirroring Fiverr's structure from user's screenshot:
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
      { name: "AI Agents", slug: "ai-agents" },
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
    thumbnail: "/assets/cymatic-pattern-1757619368429-1920x1438-3.png",
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
    thumbnail: "/assets/cymatic-pattern-1757619368429-1920x1438-1.png",
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
    thumbnail: "/assets/cymatic-pattern-1757619368429-1920x1438-2.png",
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
    thumbnail: "/assets/cymatic-pattern-1757619368429-1920x1438-3.png",
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
    thumbnail: "/assets/cymatic-pattern-1757619368429-1920x1438-1.png",
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
    thumbnail: "/assets/cymatic-pattern-1757619368429-1920x1438-2.png",
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
];
