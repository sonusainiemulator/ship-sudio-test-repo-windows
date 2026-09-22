export interface IndustrySolution {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  badge: string;
  description: string;
  metrics: { value: string; label: string }[];
  chatUser: {
    name: string;
    avatar: string;
    status: string;
  };
  chatMessages: {
    from: "bot" | "user";
    text: string;
    time: string;
    buttons?: string[];
    quickReplies?: string[];
    image?: string;
  }[];
  workflows: string[];
}

export interface WhatsAppPricingPlan {
  id: string;
  planIdParam?: number;
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  priceMonthly: string;
  priceYearly: string;
  contacts: string;
  templateBots: string;
  messageBots: string;
  campaigns: string;
  aiPrompts: string;
  cannedReplies: string;
  staff: string;
  conversations: string;
  botFlow: string;
  restApi: string;
  facebookMessenger: string;
  fbCampaigns: string;
  fbTemplates: string;
  whatsappWebhook: string;
  typingIndicator?: string;
  highlights: string[];
  ctaUrl: string;
}

export const WHATSAPP_FEATURES = [
  {
    id: "bot-builder",
    title: "No-Code Drag-and-Drop Bot Flow Builder",
    subtitle: "Build intelligent WhatsApp flows in minutes without writing a single line of code.",
    description:
      "Design complex conversational trees, conditional logic, multi-language responses, and automated lead routing with our visual canvas. Free your human agents to handle only the most complex escalations.",
    icon: "flow",
    highlights: [
      "Visual drag & drop canvas with instant live testing",
      "Trigger custom flows by keywords, tags, or incoming webhooks",
      "Seamless human agent transfer with full chat history preserved",
      "24/7 automated lead qualification and appointment scheduling",
    ],
  },
  {
    id: "ecommerce-webhooks",
    title: "Ecommerce Webhook & Event Automation",
    subtitle: "Recover abandoned carts and notify customers at every step of their buying journey.",
    description:
      "Connect Shopify, WooCommerce, Magento, or custom carts with webhook triggers. Automatically send order confirmations, tracking numbers, cash-on-delivery (COD) verifications, and tailored discount nudges.",
    icon: "cart",
    highlights: [
      "Automated WhatsApp abandoned cart alerts with 65%+ recovery rate",
      "Instant order confirmation and live shipment tracking links",
      "One-click COD confirmation reducing Return-to-Origin (RTO) by up to 40%",
      "Post-purchase review requests and repeat purchase re-engagement",
    ],
  },
  {
    id: "personal-ai",
    title: "Personal AI Assistant & Knowledge Base",
    subtitle: "Train ChatGPT/Claude on your company docs, FAQs, and product catalogs.",
    description:
      "Upload your PDF manuals, website URLs, and pricing sheets. The AI assistant responds instantly to customer queries with human-like accuracy, brand tone, and deep product knowledge.",
    icon: "brain",
    highlights: [
      "Zero training latency: ingest documents, PDFs, and URLs in seconds",
      "Smart sentiment analysis and intent detection before routing",
      "Multi-lingual support across 50+ languages natively",
      "Strict brand guardrails preventing hallucinations",
    ],
  },
  {
    id: "broadcast-campaigns",
    title: "Bulk Broadcast Campaigns & Smart Segments",
    subtitle: "Broadcast targeted promotional campaigns with 98% open rates.",
    description:
      "Send rich multimedia messages (images, videos, PDFs, interactive CTA buttons) to segmented contact lists. Approved WhatsApp Cloud API templates protect your phone number against bans.",
    icon: "broadcast",
    highlights: [
      "Official Meta WhatsApp Cloud API with verified green tick support",
      "Dynamic personalization (customer name, past orders, custom tags)",
      "Real-time delivery, read receipt, and click-through analytics",
      "Smart scheduling and anti-spam throttling algorithms",
    ],
  },
  {
    id: "multi-agent-inbox",
    title: "Shared Multi-Agent Team Inbox",
    subtitle: "One WhatsApp number for your entire sales and support department.",
    description:
      "Eliminate cluttered personal phones. Distribute incoming chats to team members with round-robin assignment, internal notes, tags, and canned quick replies.",
    icon: "team",
    highlights: [
      "Role-based access control for sales, support, and billing teams",
      "Internal collision detection so agents never double-reply",
      "Supercharged with 500+ pre-saved canned replies",
      "Audit trails and agent response time performance metrics",
    ],
  },
  {
    id: "omnichannel-api",
    title: "REST APIs & Facebook Messenger Support",
    subtitle: "Unify your messaging infrastructure under a single robust control plane.",
    description:
      "Integrate your CRM, ERP, mobile app, or internal dashboard via scalable REST APIs and bi-directional webhooks. Manage WhatsApp and Facebook Messenger from one unified dashboard.",
    icon: "api",
    highlights: [
      "Unlimited REST API calls & high-throughput webhook delivery",
      "Native Facebook Messenger campaigns & flow templates",
      "Pre-built connectors for Perfex CRM, Zapier, and Make",
      "99.99% enterprise SLA with dedicated infrastructure",
    ],
  },
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    icon: "bag",
    tagline: "Recover abandoned carts, send instant order updates, and boost repeat sales by 3.4x.",
    badge: "Most Popular",
    description:
      "E-commerce brands lose up to 70% of potential buyers at checkout. WhatsApp AI captures abandoned carts in under 15 minutes, verifies COD orders with one tap to cut RTO, and showcases your product catalog directly inside WhatsApp.",
    metrics: [
      { value: "68%", label: "Abandoned Cart Recovery" },
      { value: "3.4x", label: "Repeat Purchase Rate" },
      { value: "-42%", label: "RTO Return Reduction" },
    ],
    chatUser: {
      name: "UrbanStyle Store (Official)",
      avatar: "🛍️",
      status: "Online • WhatsApp Business Verified",
    },
    chatMessages: [
      {
        from: "bot",
        text: "Hi Alex! 👋 We noticed you left the **Leather Weekend Duffel Bag** in your cart. Stocks are running low!",
        time: "10:14 AM",
        buttons: ["Complete Order (10% OFF)", "Chat with Stylist"],
      },
      {
        from: "user",
        text: "Can I pay Cash on Delivery?",
        time: "10:15 AM",
      },
      {
        from: "bot",
        text: "Yes! COD is available for your pincode with free express delivery. Click below to confirm your shipping address and apply coupon **SAVE10** automatically.",
        time: "10:15 AM",
        buttons: ["Confirm COD Order", "View Product Video"],
      },
      {
        from: "user",
        text: "Confirm COD Order",
        time: "10:16 AM",
      },
      {
        from: "bot",
        text: "🎉 Woohoo! Order #US-9821 is confirmed. Total: ₹2,699. We'll send your live courier tracking link here shortly!",
        time: "10:16 AM",
      },
    ],
    workflows: [
      "Automated abandoned checkout reminders (15 min, 4 hr, 24 hr cadence)",
      "One-click COD confirmation & address verification",
      "Interactive WhatsApp catalog browsing & instant UPI/Stripe payment links",
      "Automated shipping tracking notifications via Shiprocket / Delhivery webhooks",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    icon: "health",
    tagline: "Automate doctor appointments, prescription refills, and test report delivery 24/7.",
    badge: "HIPAA Compliant",
    description:
      "Stop losing patients to busy phone lines. WhatsApp AI qualifies patient symptoms, checks clinic schedules, books appointments, sends timely pre-visit instructions, and delivers diagnostic reports securely.",
    metrics: [
      { value: "< 20s", label: "Average Booking Time" },
      { value: "-85%", label: "No-Show Appointment Rate" },
      { value: "100%", label: "Automated Report Dispatch" },
    ],
    chatUser: {
      name: "Apex Multi-Speciality Clinic",
      avatar: "🏥",
      status: "Online • Verified Healthcare Provider",
    },
    chatMessages: [
      {
        from: "user",
        text: "Hi, I need an appointment with Dr. Sharma for cardiology consultation tomorrow.",
        time: "08:30 AM",
      },
      {
        from: "bot",
        text: "Good morning! Dr. Sharma has two slots available tomorrow, Wednesday:\n• 11:30 AM (In-Clinic)\n• 04:15 PM (Video Consultation)\n\nWhich one would you prefer?",
        time: "08:30 AM",
        buttons: ["11:30 AM (In-Clinic)", "04:15 PM (Video Call)"],
      },
      {
        from: "user",
        text: "11:30 AM (In-Clinic)",
        time: "08:31 AM",
      },
      {
        from: "bot",
        text: "✅ Appointment confirmed for **Wednesday at 11:30 AM** at Apex Clinic (Room 204).\n\n📌 Please bring previous ECG reports and fast 4 hours prior if fasting blood work is needed.",
        time: "08:31 AM",
        buttons: ["Get Directions on Map", "Add to Google Calendar"],
      },
    ],
    workflows: [
      "Automated slot check and real-time calendar synchronization",
      "Automated 24h & 2h pre-visit appointment reminders with reschedule options",
      "Automated dispatch of encrypted PDF lab reports and bills",
      "Post-consultation medication reminder notifications",
    ],
  },
  {
    id: "realestate",
    name: "Real Estate & Builders",
    icon: "home",
    tagline: "Qualify high-ticket property leads, share 3D walkthroughs, and schedule site visits.",
    badge: "High Conversion",
    description:
      "Real estate ad leads go cold within minutes. WhatsApp AI instantly engages ad clickers, filters budget and preferred BHKs, delivers PDF brochures and 360 virtual tours, and syncs directly into your Perfex CRM.",
    metrics: [
      { value: "94%", label: "Lead Response Rate" },
      { value: "5.2x", label: "Site Visit Bookings" },
      { value: "< 45s", label: "Lead-to-Agent Handoff" },
    ],
    chatUser: {
      name: "Emerald Heights Residences",
      avatar: "🏢",
      status: "Online • Premium Developer",
    },
    chatMessages: [
      {
        from: "user",
        text: "Interested in the 3 BHK apartments seen on Instagram.",
        time: "02:15 PM",
      },
      {
        from: "bot",
        text: "Welcome to Emerald Heights! 🌟 Our 3 BHK luxury residences start at ₹1.45 Cr with private balconies and 40+ clubhouse amenities.\n\nHere is what you can view right now:",
        time: "02:15 PM",
        buttons: ["Download Floorplans (PDF)", "Watch 360° Video Tour", "Book VIP Site Visit"],
      },
      {
        from: "user",
        text: "Book VIP Site Visit",
        time: "02:16 PM",
      },
      {
        from: "bot",
        text: "Wonderful! Our executive chauffeur can pick you up or we can reserve your parking on-site. Would Saturday or Sunday suit you best?",
        time: "02:16 PM",
        buttons: ["Saturday 11 AM", "Sunday 3 PM"],
      },
    ],
    workflows: [
      "Instant reply to Meta (Facebook & Instagram) Click-to-WhatsApp ads",
      "Budget, timeline, and financing eligibility qualification tree",
      "Automated brochure and payment plan dispatch",
      "Instant lead assignment to regional property sales specialists",
    ],
  },
  {
    id: "education",
    name: "Education & EdTech",
    icon: "edu",
    tagline: "Automate admissions queries, fee reminders, study notes, and webinar registrations.",
    badge: "Top Engagement",
    description:
      "Universities and coaching academies save hundreds of staff hours. Guide prospective students through course eligibility, share syllabi, automate fee payment links, and send live class links.",
    metrics: [
      { value: "3.8x", label: "Admission Application Rate" },
      { value: "96%", label: "Webinar Attendance" },
      { value: "-75%", label: "Admissions Desk Overload" },
    ],
    chatUser: {
      name: "FutureTech Institute",
      avatar: "🎓",
      status: "Online • Admissions Portal",
    },
    chatMessages: [
      {
        from: "user",
        text: "I want to know about your Executive AI & Full-Stack Bootcamp.",
        time: "06:00 PM",
      },
      {
        from: "bot",
        text: "Hi Priya! 🚀 Our 6-month Executive AI Bootcamp covers Python, LLM fine-tuning, and production system architecture with 1:1 mentor code reviews.\n\nNext cohort starts on the 1st of next month with weekend live sessions.",
        time: "06:00 PM",
        buttons: ["Download Syllabus", "Check Placement Stats", "Talk to Admissions Advisor"],
      },
      {
        from: "user",
        text: "Download Syllabus",
        time: "06:01 PM",
      },
      {
        from: "bot",
        text: "📄 Here is the detailed curriculum (PDF):\n`AI_Bootcamp_Curriculum_2026.pdf` (2.4 MB)\n\nEarly-bird scholarship of 25% is active until Friday!",
        time: "06:01 PM",
        buttons: ["Apply for Scholarship", "Attend Free Demo Class"],
      },
    ],
    workflows: [
      "Automated course advisor chatbot with curriculum matching",
      "Webinar registration & WhatsApp countdown reminders",
      "Tuition fee installment links with payment confirmation receipts",
      "Student attendance & assignment submission alerts",
    ],
  },
  {
    id: "hospitality",
    name: "Travel & Hospitality",
    icon: "travel",
    tagline: "Drive direct hotel bookings, contactless room service, and local tour itineraries.",
    badge: "Zero OTA Commission",
    description:
      "Bypass expensive OTA commissions. Enable guests to check room availability, confirm reservations, get directions, order food to their room, and request housekeeping directly via WhatsApp.",
    metrics: [
      { value: "+38%", label: "Direct Booking Revenue" },
      { value: "0 min", label: "Check-in Waiting Line" },
      { value: "4.9 ★", label: "Guest Satisfaction Score" },
    ],
    chatUser: {
      name: "Solaria Resort & Spa",
      avatar: "🌴",
      status: "Online • Concierge Desk",
    },
    chatMessages: [
      {
        from: "user",
        text: "Hello! We are staying in Room 304. Can we get extra towels and order two iced lattes?",
        time: "04:10 PM",
      },
      {
        from: "bot",
        text: "Good afternoon Mr. Davis! 😊 Extra towels are on their way to Room 304.\n\nWould you like oat milk, almond milk, or regular whole milk with your iced lattes?",
        time: "04:11 PM",
        buttons: ["Whole Milk", "Oat Milk", "Almond Milk"],
      },
      {
        from: "user",
        text: "Oat Milk please!",
        time: "04:11 PM",
      },
      {
        from: "bot",
        text: "Great choice! ☕ Two Iced Oat Lattes (₹450) billed to Room 304 will be delivered to your room in 12 minutes.",
        time: "04:12 PM",
        buttons: ["View Spa Menu", "Request Housekeeping"],
      },
    ],
    workflows: [
      "Direct room booking engine with live calendar & instant payment",
      "Contactless WhatsApp check-in and digital room key instructions",
      "In-room dining & concierge service ordering",
      "Automated review & TripAdvisor feedback collection post check-out",
    ],
  },
  {
    id: "finance",
    name: "Financial Services & Wealth",
    icon: "finance",
    tagline: "Automate loan eligibility checks, KYC collection, and portfolio summary reports.",
    badge: "Bank-Grade Encryption",
    description:
      "Securely onboard clients faster. Gather tax and KYC documents over encrypted WhatsApp flows, calculate loan EMIs, send automated payment reminders, and deliver monthly portfolio statements.",
    metrics: [
      { value: "15 min", label: "Loan Pre-Approval Time" },
      { value: "99.4%", label: "KYC Document Accuracy" },
      { value: "+45%", label: "On-Time EMI Recovery" },
    ],
    chatUser: {
      name: "Apex Wealth & Capital",
      avatar: "📈",
      status: "Online • Regulated Financial Advisor",
    },
    chatMessages: [
      {
        from: "user",
        text: "What is my mutual fund portfolio value this month?",
        time: "11:20 AM",
      },
      {
        from: "bot",
        text: "Hello Rohit! 📊 Here is your portfolio snapshot as of today:\n• Total Invested: ₹8,50,000\n• Current Value: ₹11,42,800 (+34.4%)\n• Top Performer: Nifty 50 Index Fund (+18.2% CAGR)",
        time: "11:20 AM",
        buttons: ["Download PDF Statement", "Invest Additional Funds", "Schedule Call with Advisor"],
      },
    ],
    workflows: [
      "Automated document collection (Aadhaar, PAN, Bank Statements)",
      "Instant SIP & EMI payment due alerts with UPI click-to-pay",
      "Automated insurance policy renewal nudges",
      "Real-time NAV and market update subscriptions",
    ],
  },
];

export const WHATSAPP_PRICING_PLANS: WhatsAppPricingPlan[] = [
  {
    id: "free",
    planIdParam: 1,
    name: "Free / Trial",
    badge: "Get Started",
    popular: false,
    tagline: "Basic plan for individuals and small startups exploring WhatsApp automation.",
    priceMonthly: "$0",
    priceYearly: "$0",
    contacts: "50 Contacts",
    templateBots: "50",
    messageBots: "50",
    campaigns: "50",
    aiPrompts: "100",
    cannedReplies: "100",
    staff: "3 Staff Members",
    conversations: "50",
    botFlow: "50",
    restApi: "Unlimited",
    facebookMessenger: "1 Account",
    fbCampaigns: "5",
    fbTemplates: "5",
    whatsappWebhook: "Unlimited",
    highlights: [
      "50 Contacts & 50 Conversations",
      "100 AI Prompts & 100 Canned Replies",
      "Visual Drag-and-Drop Bot Flow Builder",
      "3 Staff Agent Seats",
      "Unlimited REST API & Webhooks",
      "Facebook Messenger Integration (1 account)",
    ],
    ctaUrl: "https://whatsappai.rakebig.com/register?plan_id=1",
  },
  {
    id: "growth",
    planIdParam: 3,
    name: "Plan M2 - Growth",
    badge: "Most Popular",
    popular: true,
    tagline: "Designed for growing teams needing substantial automation, campaigns, and staff seats.",
    priceMonthly: "$29",
    priceYearly: "$24",
    contacts: "5,000 Contacts",
    templateBots: "50",
    messageBots: "50",
    campaigns: "500 Campaigns",
    aiPrompts: "50 AI Prompts",
    cannedReplies: "500",
    staff: "50 Staff Members",
    conversations: "Unlimited",
    botFlow: "Unlimited",
    restApi: "Unlimited",
    facebookMessenger: "1 Account",
    fbCampaigns: "5",
    fbTemplates: "5",
    whatsappWebhook: "Unlimited",
    highlights: [
      "5,000 Active Contacts",
      "Unlimited Live Conversations",
      "500 Broadcast Campaigns",
      "50 Staff Agent Accounts with Shared Inbox",
      "500 Pre-configured Canned Replies",
      "Unlimited Bot Flows & Drag-and-Drop Triggers",
      "Unlimited REST API & Ecommerce Webhooks",
      "Official Meta WhatsApp Cloud API Support",
    ],
    ctaUrl: "https://whatsappai.rakebig.com/register?plan_id=3",
  },
  {
    id: "enterprise",
    planIdParam: 6,
    name: "Plan M3 - Enterprise",
    badge: "High Volume",
    popular: false,
    tagline: "Engineered for high-volume enterprises, agencies, and large customer support teams.",
    priceMonthly: "$79",
    priceYearly: "$65",
    contacts: "100,000 Contacts",
    templateBots: "10,000",
    messageBots: "10,000",
    campaigns: "10,000 Campaigns",
    aiPrompts: "10,000 AI Prompts",
    cannedReplies: "10,000",
    staff: "10,000 Staff Members",
    conversations: "Unlimited",
    botFlow: "Unlimited",
    restApi: "Unlimited",
    facebookMessenger: "1 Account",
    fbCampaigns: "5",
    fbTemplates: "5",
    whatsappWebhook: "Unlimited",
    typingIndicator: "1 (Live simulated human typing)",
    highlights: [
      "100,000 Contacts & Unlimited Conversations",
      "10,000 Broadcast Campaigns & 10,000 Bots",
      "10,000 AI Prompts for Contextual Intelligence",
      "10,000 Staff Seats with Custom Role Permissions",
      "Live Human Typing Indicator Simulation",
      "Enterprise Priority Meta API Throughput",
      "Dedicated Onboarding & Account Architect",
      "Custom Webhook Ingestion & Perfex CRM Sync",
    ],
    ctaUrl: "https://whatsappai.rakebig.com/register?plan_id=6",
  },
  {
    id: "business-yearly",
    planIdParam: 4,
    name: "Plan Y2 - Business",
    badge: "Best Value",
    popular: false,
    tagline: "Ideal for established businesses seeking yearly savings and uninterrupted automation.",
    priceMonthly: "$49",
    priceYearly: "$39",
    contacts: "1,000 Contacts",
    templateBots: "1,000",
    messageBots: "1,000",
    campaigns: "1,000 Campaigns",
    aiPrompts: "1,000 AI Prompts",
    cannedReplies: "1,000",
    staff: "10 Staff Members",
    conversations: "Unlimited",
    botFlow: "1,000 Bot Flows",
    restApi: "Unlimited",
    facebookMessenger: "1 Account",
    fbCampaigns: "5",
    fbTemplates: "5",
    whatsappWebhook: "Unlimited",
    highlights: [
      "1,000 Contacts & Unlimited Conversations",
      "1,000 Broadcast Campaigns & 1,000 Bot Flows",
      "1,000 AI Prompts & 1,000 Canned Responses",
      "10 Dedicated Staff Inbox Logins",
      "Unlimited REST APIs & Bi-directional Webhooks",
      "Yearly Maintenance & Priority Tech Support",
    ],
    ctaUrl: "https://whatsappai.rakebig.com/register?plan_id=4",
  },
];
