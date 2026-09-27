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
  { id: "ai-services", name: "AI Services & Bots", hasMegaMenu: true },
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

export const GIGS_NAVIGATION_CATEGORIES: GigsCategoryConfig[] = [
  {
    id: "trending",
    name: "Trending 🔥",
    hasSubmenu: false,
    isTrending: true,
    groups: [],
  },
  {
    id: "programming-tech",
    name: "Programming & Tech",
    hasSubmenu: true,
    submenuLayout: "mega-grid",
    groups: [
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
        title: "Software Development",
        items: [
          { name: "Full Stack Web Apps", slug: "full-stack-web-apps" },
          { name: "Automations & Agents", slug: "automations-agents" },
          { name: "APIs & Webhooks Integrations", slug: "apis-integrations" },
          { name: "Databases & Performance", slug: "databases" },
          { name: "QA & Testing", slug: "qa-review" },
        ],
      },
    ],
    bottomBanner: {
      title: "Looking for dedicated tech experts?",
      desc: "Find app developers, Perfex CRM engineers, and AI specialists to manage your project end-to-end.",
      ctaText: "Let us manage your project 🪄",
      ctaHref: "/contact",
    },
  },
  {
    id: "ai-services",
    name: "AI Services & Bots",
    shortName: "AI Services",
    hasSubmenu: true,
    submenuLayout: "two-col",
    groups: [
      {
        title: "AI Mobile Development",
        items: [
          { name: "AI Mobile Apps", tag: "NEW", slug: "ai-mobile-apps" },
          { name: "AI Websites & Software", tag: "NEW", slug: "ai-websites-software" },
          { name: "AI Chatbot", slug: "ai-chatbot" },
          { name: "AI Integrations", slug: "ai-integrations" },
          { name: "AI Agents", slug: "ai-agents" },
          { name: "AI Fine-Tuning", slug: "ai-fine-tuning" },
          { name: "AI Technology Consulting", tag: "NEW", slug: "ai-technology-consulting" },
        ],
        footerAction: {
          text: "Let us manage your project 🪄",
          href: "/contact",
        },
      },
      {
        title: "AI Workflows & Automation",
        items: [
          { name: "Custom LLM & RAG Pipelines", tag: "NEW", slug: "custom-llm-rag" },
          { name: "Document Data Extraction", slug: "document-data-extraction" },
          { name: "AI Voice & Call Agents", tag: "NEW", slug: "ai-voice-agents" },
          { name: "Multimodal AI Vision", slug: "multimodal-ai-vision" },
          { name: "Zapier / Make / n8n AI Automations", slug: "zapier-n8n-automations" },
        ],
        footerAction: {
          text: "Let us manage your project 🪄",
          href: "/contact",
        },
      },
    ],
  },
  {
    id: "digital-marketing",
    name: "WhatsApp Marketing",
    hasSubmenu: true,
    submenuLayout: "two-col",
    groups: [
      {
        title: "WhatsApp Automation & Bots",
        items: [
          { name: "AI WhatsApp Chatbot", tag: "POPULAR", slug: "build-ai-whatsapp-marketing-chatbot" },
          { name: "Official Meta Cloud API Setup", slug: "meta-cloud-api-setup" },
          { name: "Klaviyo & WhatsApp E-Commerce Flows", tag: "HOT", slug: "setup-klaviyo-whatsapp-ecommerce-marketing-flows" },
          { name: "Automated Broadcast Engine", slug: "automated-broadcast-engine" },
          { name: "Green Tick Verification Help", slug: "green-tick-verification" },
          { name: "WhatsApp CRM & Webhook Sync", tag: "NEW", slug: "whatsapp-crm-webhook" },
        ],
        footerAction: {
          text: "Let us manage your project 🪄",
          href: "/contact",
        },
      },
      {
        title: "Conversion & Growth Funnels",
        items: [
          { name: "Abandoned Cart Recovery Automation", slug: "abandoned-cart-recovery" },
          { name: "Multi-Agent Support Shared Inbox", slug: "multi-agent-inbox" },
          { name: "Click-to-WhatsApp Ads Setup", tag: "NEW", slug: "click-to-whatsapp-ads" },
          { name: "Automated Review & Feedback Requests", slug: "automated-reviews-bot" },
        ],
        footerAction: {
          text: "Let us manage your project 🪄",
          href: "/contact",
        },
      },
    ],
  },
  {
    id: "perfex-crm",
    name: "Perfex CRM",
    hasSubmenu: true,
    submenuLayout: "two-col",
    groups: [
      {
        title: "Perfex CRM Customization",
        items: [
          { name: "Custom Module Development", tag: "POPULAR", slug: "customize-perfex-crm-modules-development" },
          { name: "Perfex CRM Fresh Installation & Setup", slug: "perfex-crm-fresh-installation" },
          { name: "Workflow & Email Automation Rules", slug: "setup-perfex-crm-customization-automation-workflow" },
          { name: "Payment Gateway Integration", slug: "perfex-payment-gateways" },
          { name: "Multi-Company SaaS Addon", tag: "NEW", slug: "perfex-multi-company-saas" },
          { name: "Version Upgrade & Bug Fixing", slug: "customize-develop-and-fix-perfex-crm-modules" },
        ],
        footerAction: {
          text: "Let us manage your project 🪄",
          href: "/contact",
        },
      },
      {
        title: "Business Integrations",
        items: [
          { name: "WhatsApp Notification Gateway", tag: "HOT", slug: "perfex-whatsapp-gateway" },
          { name: "REST API & Webhooks Integration", slug: "perfex-rest-api" },
          { name: "Bespoke Client Portal Styling", slug: "perfex-client-portal-ui" },
          { name: "Accounting & GST Invoicing Sync", slug: "perfex-accounting-automation" },
        ],
        footerAction: {
          text: "Let us manage your project 🪄",
          href: "/contact",
        },
      },
    ],
  },
  {
    id: "mobile-apps",
    name: "Mobile Apps",
    hasSubmenu: true,
    submenuLayout: "two-col",
    groups: [
      {
        title: "Mobile App Development",
        items: [
          { name: "Flutter Cross-Platform Apps", tag: "POPULAR", slug: "develop-flutter-mobile-app-clone-android-ios" },
          { name: "AI Mobile Apps", tag: "NEW", slug: "ai-mobile-apps" },
          { name: "Zepto / Blinkit Quick Commerce Clone", tag: "HOT", slug: "zepto-blinkit-clone-app" },
          { name: "WhatsApp / Messenger Social Clone", slug: "whatsapp-messenger-clone-app" },
          { name: "iOS & Android Store Publishing", tag: "NEW", slug: "app-store-publishing" },
          { name: "Mobile App UI/UX & Redesign", slug: "mobile-app-ui-ux" },
        ],
        footerAction: {
          text: "Let us manage your project 🪄",
          href: "/contact",
        },
      },
      {
        title: "Engineering & Backend",
        items: [
          { name: "Native Android App (Kotlin)", slug: "native-android-kotlin" },
          { name: "Native iOS App (Swift)", slug: "native-ios-swift" },
          { name: "Firebase & Supabase Cloud Sync", slug: "firebase-supabase-backend" },
          { name: "Push Notifications & Deep Linking", slug: "push-notifications-deeplinking" },
        ],
        footerAction: {
          text: "Let us manage your project 🪄",
          href: "/contact",
        },
      },
    ],
  },
  {
    id: "cloud-devops",
    name: "Cloud & Open Source",
    hasSubmenu: true,
    submenuLayout: "two-col",
    groups: [
      {
        title: "Cloud & DevOps",
        items: [
          { name: "Self-Hosted Coolify / aaPanel", tag: "NEW", slug: "coolify-aapanel" },
          { name: "Enterprise Nextcloud Setup", slug: "deploy-nextcloud-rocketchat-enterprise-vps" },
          { name: "Rocket.Chat & Mattermost Server", slug: "deploy-nextcloud-rocketchat-enterprise-vps" },
          { name: "VPS Hardening & CrowdSec WAF", slug: "vps-hardening-waf" },
          { name: "Docker CI/CD & GitHub Actions", slug: "docker-cicd-pipeline" },
          { name: "AWS & DigitalOcean Migration", slug: "aws-digitalocean-migration" },
        ],
        footerAction: {
          text: "Let us manage your project 🪄",
          href: "/contact",
        },
      },
      {
        title: "Managed Infrastructure",
        items: [
          { name: "Zero-Downtime Database Backups", slug: "database-backup-automation" },
          { name: "Traefik / Nginx Reverse Proxy SSL", slug: "reverse-proxy-ssl" },
          { name: "Server Monitoring & 24/7 Alerts", slug: "server-monitoring-alerts" },
          { name: "Multi-Cloud High Availability", slug: "multi-cloud-ha" },
        ],
        footerAction: {
          text: "Let us manage your project 🪄",
          href: "/contact",
        },
      },
    ],
  },
];

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
];
