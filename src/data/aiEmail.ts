// AI Email — AI-powered Email Automation Platform with MCP support
// Product URL: email.ttinfotechs.com

export interface AIEmailFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  bullets: string[];
  color: string;
  tint: string;
  isNew?: boolean;
}

export interface AIEmailPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  priceMonthly: string;
  priceYearly: string;
  aiCredits: string;
  contacts: string;
  emails: string;
  mcpTools: string;
  agents: string;
  highlights: string[];
  ctaLabel: string;
  ctaUrl: string;
}

export const AIEMAIL_FEATURES: AIEmailFeature[] = [
  {
    id: "mcp-protocol",
    title: "Model Context Protocol (MCP) Support",
    subtitle: "Connect your AI email platform to any MCP-compatible tool or agent.",
    description:
      "The first email marketing platform with native MCP (Model Context Protocol) support. Connect Claude, GPT-4, or any MCP-compatible AI agent directly to your email workflows. Let AI agents read subscriber data, write campaigns, trigger automations, and query performance stats — all through a standardised tool interface.",
    icon: "mcp",
    color: "#7c3aed",
    tint: "#F5F3FF",
    isNew: true,
    bullets: [
      "Native MCP server exposing email tools to AI agents",
      "Claude Desktop & Cursor IDE integration ready",
      "AI agents can create, schedule & analyse campaigns",
      "Standardised tool schema — works with any MCP client",
      "Streaming responses for real-time AI campaign writing",
    ],
  },
  {
    id: "ai-copywriter",
    title: "AI Copywriter & Subject Line Generator",
    subtitle: "Write high-converting emails in seconds with GPT-powered assistance.",
    description:
      "Generate full email bodies, subject lines, preview text, and CTA copy with AI trained on millions of high-performing email campaigns. Input your product, audience, and goal — get 5 variations instantly. A/B test AI-written vs human-written automatically and learn what converts for your list.",
    icon: "pen",
    color: "#0284c7",
    tint: "#E0F2FE",
    bullets: [
      "Full email body generation from a single prompt",
      "5 subject line variants with open-rate prediction",
      "Tone-matching: formal, casual, urgency, storytelling",
      "Spam-score checker before send",
      "Personalisation token injection: name, city, product",
    ],
  },
  {
    id: "ai-segmentation",
    title: "AI-Powered Smart Segmentation",
    subtitle: "Stop guessing who to email. Let AI build your segments.",
    description:
      "Our AI analyses subscriber behaviour, purchase history, engagement patterns, and demographic signals to automatically create predictive audience segments. Send the right campaign to the right person at the right time — without writing a single segment rule manually.",
    icon: "users",
    color: "#059669",
    tint: "#ECFDF5",
    bullets: [
      "Predictive engagement scoring per subscriber",
      "AI-detected purchase-intent segments",
      "Churn-risk segments with automated win-back",
      "Lookalike audience suggestions",
      "Natural language segment builder: 'people who bought X but not Y'",
    ],
  },
  {
    id: "ai-automation",
    title: "Agentic Email Automation",
    subtitle: "AI agents that plan, write, and send campaigns — autonomously.",
    description:
      "Move beyond static drip sequences. Our AI agents monitor your business events, detect opportunities (new signups, cart abandonment, milestone triggers), and autonomously draft, schedule, and optimise email sequences — informing you only when human approval is needed.",
    icon: "agent",
    color: "#d97706",
    tint: "#FFFBEB",
    bullets: [
      "Event-triggered autonomous campaign drafting",
      "Human-in-the-loop approval workflow",
      "Multi-step agent planning with campaign calendar",
      "Auto-optimise send time per subscriber",
      "Self-healing automations: detects & fixes dead flows",
    ],
  },
  {
    id: "ai-analytics",
    title: "AI Insights & Predictive Analytics",
    subtitle: "Understand your campaigns through natural language conversation.",
    description:
      "Ask questions like 'Which campaign drove the most revenue last month?' or 'Which subject lines perform best for our VIP segment?' and get instant AI-generated insights. Predictive models forecast open rates, revenue, and unsubscribe risk before you even press send.",
    icon: "chart",
    color: "#e11d48",
    tint: "#FFF1F2",
    bullets: [
      "Natural language campaign analytics Q&A",
      "Pre-send open rate & revenue prediction",
      "Anomaly detection: unusual bounce spikes, drop-offs",
      "AI-generated weekly performance summaries",
      "Competitor benchmark comparisons (industry data)",
    ],
  },
  {
    id: "deliverability-ai",
    title: "AI Deliverability Optimiser",
    subtitle: "Land in the inbox — not the spam folder — every time.",
    description:
      "Our AI continuously monitors inbox placement across Gmail, Outlook, Apple Mail, and Yahoo. It automatically adjusts sending patterns, rotates IPs, rewrites spammy phrasing, and warms new domains — keeping your sender reputation in the green without any manual intervention.",
    icon: "shield",
    color: "#6366f1",
    tint: "#EEF2FF",
    bullets: [
      "Real-time inbox placement monitoring (Gmail, Outlook, etc.)",
      "AI-powered spam content rewriting suggestions",
      "Automated IP rotation & warm-up schedules",
      "Domain reputation tracking & alerts",
      "One-click DKIM, SPF, DMARC validation assistant",
    ],
  },
];

export const AIEMAIL_PLANS: AIEmailPlan[] = [
  {
    id: "free",
    name: "Explorer",
    tagline: "Try AI email automation for free",
    priceMonthly: "Free",
    priceYearly: "Free",
    aiCredits: "500 / mo",
    contacts: "1,000",
    emails: "5,000 / mo",
    mcpTools: "3 tools",
    agents: "1 agent",
    highlights: [
      "AI subject line generator",
      "Basic MCP tools (read-only)",
      "Smart segmentation preview",
      "1 automation flow",
      "Community support",
    ],
    ctaLabel: "Start Free",
    ctaUrl: "https://email.ttinfotechs.com/register",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "AI-powered email for growing teams",
    badge: "Most Popular",
    popular: true,
    priceMonthly: "₹3,499",
    priceYearly: "₹29,999",
    aiCredits: "10,000 / mo",
    contacts: "20,000",
    emails: "100,000 / mo",
    mcpTools: "All tools",
    agents: "5 agents",
    highlights: [
      "Everything in Explorer",
      "Full MCP server access",
      "AI copywriter (full body + subject)",
      "Predictive smart segmentation",
      "Agentic automations",
      "Pre-send performance predictions",
      "AI deliverability optimiser",
      "Priority support",
    ],
    ctaLabel: "Go Pro",
    ctaUrl: "https://email.ttinfotechs.com/register",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "High-volume AI email for large businesses",
    priceMonthly: "₹8,999",
    priceYearly: "₹74,999",
    aiCredits: "Unlimited",
    contacts: "Unlimited",
    emails: "Unlimited",
    mcpTools: "All tools + custom",
    agents: "Unlimited",
    highlights: [
      "Everything in Pro",
      "Custom MCP tool development",
      "White-label AI agents",
      "Multi-workspace management",
      "Custom AI model fine-tuning",
      "Enterprise SSO (SAML/OIDC)",
      "Dedicated infrastructure",
      "SLA-backed support",
    ],
    ctaLabel: "Contact Sales",
    ctaUrl: "/contact",
  },
];

export const AIEMAIL_MCP_TOOLS = [
  {
    name: "list_campaigns",
    description: "List all email campaigns with status, metrics, and schedule",
    category: "Read",
    color: "#0284c7",
  },
  {
    name: "create_campaign",
    description: "Draft and schedule a new email campaign with AI-generated content",
    category: "Write",
    color: "#059669",
  },
  {
    name: "get_subscribers",
    description: "Query subscriber list with filters, segments, and engagement data",
    category: "Read",
    color: "#0284c7",
  },
  {
    name: "send_campaign",
    description: "Trigger an immediate or scheduled campaign send to a segment",
    category: "Action",
    color: "#d97706",
  },
  {
    name: "get_analytics",
    description: "Fetch campaign performance: opens, clicks, revenue, bounces",
    category: "Read",
    color: "#0284c7",
  },
  {
    name: "generate_copy",
    description: "Generate AI email copy, subject lines, and CTAs from a prompt",
    category: "AI",
    color: "#7c3aed",
  },
  {
    name: "create_segment",
    description: "Create subscriber segments with natural language or rule builder",
    category: "Write",
    color: "#059669",
  },
  {
    name: "analyse_deliverability",
    description: "Run inbox placement test and get AI recommendations",
    category: "AI",
    color: "#7c3aed",
  },
];

export const AIEMAIL_STATS = [
  { value: "94%", label: "Inbox Placement Rate" },
  { value: "3.7×", label: "Higher Open Rates vs Manual" },
  { value: "8 MCP", label: "Native AI Tools" },
  { value: "< 2s", label: "AI Response Time" },
];
