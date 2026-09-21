// ---------------------------------------------------------------------------
// Rakebig Services — Solutions Catalog (Single Source of Truth)
//
// Each solution gets a dedicated, high-converting SEO inner page at /solutions/<slug>.
// ---------------------------------------------------------------------------

export interface SolutionItem {
  slug: string;
  name: string;
  category: "AI Applications" | "AI Agents & Workflows";
  tagline: string;
  shortSummary: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  accentColor: string;
  tintColor: string;
  icon: string;
  whatItIs: string[];
  capabilities: { title: string; body: string; badge?: string }[];
  architecture: { step: string; title: string; desc: string }[];
  steps: { title: string; body: string }[];
  outcomes: { metric: string; label: string; desc: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export const solutions: SolutionItem[] = [
  {
    slug: "ai-assistants-chatbots",
    name: "AI Assistants & Chatbots",
    category: "AI Applications",
    tagline: "24/7 Intelligent Brand Representation",
    shortSummary: "Context-aware AI chatbots and customer assistants trained on your documentation, CRM, and brand voice.",
    metaDescription: "Deploy intelligent, conversational AI assistants and chatbots that resolve 80% of customer support tickets 24/7 in your brand voice.",
    heroTitle: "AI assistants that actually know your business",
    heroLead: "Forget rigid rule-based bots that frustrate customers. We build contextual, LLM-powered AI assistants connected to your CRM, product catalog, and knowledge base that resolve inquiries in seconds.",
    accentColor: "#22A06B",
    tintColor: "#E8F8EF",
    icon: "chat",
    whatItIs: [
      "Modern buyers expect immediate answers at 2 AM on a Sunday. Traditional chatbots fail because they rely on scripted decision trees that break on simple edge cases.",
      "Rakebig engineers custom AI assistants powered by Retrieval-Augmented Generation (RAG) and tool calling. They ingest your support docs, inventory, and Perfex CRM records to answer accurately, schedule meetings, create tickets, and escalate complex issues to human agents seamlessly."
    ],
    capabilities: [
      {
        title: "Omnichannel Deployment",
        body: "Deploy across web widgets, WhatsApp Business API, Telegram, Slack, and in-app mobile chats from a single brain.",
        badge: "Multi-Channel"
      },
      {
        title: "CRM & Tool Calling",
        body: "Your assistant doesn't just chat; it checks order statuses, creates Perfex CRM tickets, updates client records, and triggers webhooks.",
        badge: "Active Agent"
      },
      {
        title: "Hallucination Guardrails",
        body: "Strict factual guardrails ensure answers are grounded exclusively in your verified company knowledge base.",
        badge: "Zero-Hallucination"
      },
      {
        title: "Human Handoff Protocols",
        body: "Automatically detects sentiment and frustation, transferring context and chat history to your live support reps instantly.",
        badge: "Seamless SLA"
      }
    ],
    architecture: [
      { step: "01", title: "Knowledge Ingestion", desc: "Embed your PDFs, HelpDesk docs, CRM data, and product catalogs into high-speed vector stores." },
      { step: "02", title: "RAG & Context Retrieval", desc: "Retrieve semantic context instantly when a customer asks questions in any natural language." },
      { step: "03", title: "Guardrails & Reasoning", desc: "Model evaluates prompt against safety rules, tone guidelines, and brand policies." },
      { step: "04", title: "Action & Resolution", desc: "Generates grounded answers, updates CRM records, or triggers backend webhooks." }
    ],
    steps: [
      { title: "Knowledge & Persona Audit", body: "We map your existing FAQs, support history, CRM data, and brand voice guidelines." },
      { title: "Vector Pipeline Setup", body: "We configure semantic chunking, embedding models, and private vector storage for your company data." },
      { title: "Tool & API Integration", body: "We wire the agent to your CRM, WhatsApp Cloud API, Cal.com scheduling, and ticket systems." },
      { title: "Pilot Testing & Red Teaming", body: "We stress-test edge cases, adversarial prompts, and accuracy before deploying to live traffic." }
    ],
    outcomes: [
      { metric: "75-80%", label: "Deflection Rate", desc: "Standard repetitive tickets resolved without human intervention." },
      { metric: "< 2 sec", label: "Response Time", desc: "Instantaneous contextual replies 24 hours a day, 365 days a year." },
      { metric: "99.2%", label: "Factual Accuracy", desc: "Grounded strictly in your verified documentation and databases." }
    ],
    faqs: [
      {
        q: "How does the AI assistant learn about our specific products and services?",
        a: "We connect your internal documentation, knowledge base, PDF manuals, website content, and Perfex CRM records to a dedicated vector database via secure RAG pipelines. It constantly stays synchronized with your updates."
      },
      {
        q: "Can the chatbot take real actions like booking meetings or updating tickets?",
        a: "Yes. Using LLM function calling and secure REST APIs, the assistant can create tickets, book appointments via Cal.com, look up customer invoice statuses, and trigger automated notifications."
      },
      {
        q: "What happens if the AI encounters a question it cannot answer?",
        a: "When confidence is low or when sentiment analysis detects customer urgency, the assistant smoothly notifies your human team via Slack, email, or Perfex ticket, passing the full conversation context."
      },
      {
        q: "Is our customer data kept private and secure?",
        a: "Absolutely. We build with enterprise privacy standards: data is encrypted in transit and at rest, and your proprietary knowledge is never used to train public foundational models."
      }
    ],
    related: ["ai-business-automation", "document-data-extraction", "custom-ai-integrations"]
  },
  {
    slug: "document-data-extraction",
    name: "Document & Data Extraction",
    category: "AI Agents & Workflows",
    tagline: "Turn Unstructured PDFs & Files into Clean Data",
    shortSummary: "Automated OCR and multimodal LLM document extraction for invoices, contracts, receipts, and forms.",
    metaDescription: "Automate document processing with AI: Extract structured JSON data from messy PDFs, invoices, contracts, and receipts directly into your CRM or database.",
    heroTitle: "Stop typing data from PDFs into spreadsheets",
    heroLead: "Manual data entry wastes hours and causes costly typos. We build automated document intelligence pipelines that parse messy invoices, bank statements, contracts, and scans into clean, verified structured data.",
    accentColor: "#E67E22",
    tintColor: "#FFF3E8",
    icon: "doc",
    whatItIs: [
      "Every growing business receives hundreds of unstructured files every month: vendor invoices, shipping manifests, legal contracts, identity proofs, and receipts.",
      "Rakebig deploys multimodal vision models and specialized OCR agents that parse complex tables, handwritten notes, and multi-page layouts into clean JSON schemas, automatically validating totals and inserting records into your CRM or accounting software."
    ],
    capabilities: [
      {
        title: "Complex Table & Layout Parsing",
        body: "Flawlessly extracts multi-line items, nested columns, and irregular tables from scanned or digital PDFs.",
        badge: "Multimodal Vision"
      },
      {
        title: "Automated Math & Schema Validation",
        body: "Performs checksum calculations on taxes, discounts, and totals before writing to your database.",
        badge: "Zero Errors"
      },
      {
        title: "Direct CRM & Database Pipeline",
        body: "Inserts extracted line items straight into Perfex CRM invoices, MySQL, PostgreSQL, or Google Sheets.",
        badge: "End-to-End"
      },
      {
        title: "Human-in-the-Loop Review UI",
        body: "Flags uncertain values or low-confidence fields for quick 1-click human verification.",
        badge: "Quality Control"
      }
    ],
    architecture: [
      { step: "01", title: "Document Ingestion", desc: "Files arrive via email attachments, file drops, mobile uploads, or webhooks." },
      { step: "02", title: "Multimodal OCR & Vision", desc: "Vision models extract semantic structure, key-value pairs, and line-item tables." },
      { step: "03", title: "Schema Formatting & Checks", desc: "Data is normalized into target JSON schemas with math reconciliation." },
      { step: "04", title: "System Sync", desc: "Data is written to your CRM, ERP, or accounting system with attached source files." }
    ],
    steps: [
      { title: "Sample Document Analysis", body: "We review your document variations, messy layouts, and required output schemas." },
      { title: "Extraction Pipeline Build", body: "We build tailored prompt chains, vision extractors, and normalization rules." },
      { title: "Integration & Validation", body: "We connect the pipeline to your incoming email inbox, cloud storage, and CRM." },
      { title: "Testing & Go-Live", body: "We run hundreds of historical sample files to verify 99%+ accuracy before automating live flows." }
    ],
    outcomes: [
      { metric: "99.4%", label: "Extraction Accuracy", desc: "High precision across scanned documents, images, and digital PDFs." },
      { metric: "90%", label: "Time Saved", desc: "Eliminate manual data entry and invoice logging." },
      { metric: "Instant", label: "Processing Speed", desc: "Multi-page documents processed and ingested in under 15 seconds." }
    ],
    faqs: [
      {
        q: "Can this handle poorly scanned documents and handwritten text?",
        a: "Yes. We use advanced multimodal vision models that excel at reading low-resolution scans, slanted photos taken from mobile phones, and clear handwriting."
      },
      {
        q: "How does the system ensure numbers are not hallucinated?",
        a: "We implement deterministic post-processing: line items must sum up to the invoice total, tax percentages must mathematically match, and dates are strictly validated against target schemas."
      },
      {
        q: "Can incoming emails with PDF attachments be processed automatically?",
        a: "Yes. We set up automated email webhooks that detect attachments, run extraction, file the document in cloud storage, and create the corresponding record in your CRM."
      },
      {
        q: "What formats can you export the data to?",
        a: "We export to JSON, CSV, Excel, direct REST API webhooks, or directly populate your database and CRM."
      }
    ],
    related: ["ai-business-automation", "ai-workflow-automation", "custom-ai-integrations"]
  },
  {
    slug: "custom-ai-integrations",
    name: "Custom AI Integrations",
    category: "AI Agents & Workflows",
    tagline: "Embed AI Intelligence into Your Core Tech Stack",
    shortSummary: "Connect frontier AI models (OpenAI, Anthropic Claude, Gemini, DeepSeek, Llama) directly into your apps and CRMs.",
    metaDescription: "Custom AI integrations by Rakebig: Connect state-of-the-art LLMs, APIs, and custom embeddings into your existing software, Perfex CRM, and web applications.",
    heroTitle: "Bring frontier AI directly into your existing software",
    heroLead: "You don't need to rebuild your company's software from scratch to leverage AI. We integrate OpenAI, Claude, Gemini, and open-source models straight into your existing databases, portals, and legacy systems.",
    accentColor: "#3B82F6",
    tintColor: "#E8F1FF",
    icon: "bolt",
    whatItIs: [
      "Off-the-shelf AI tools operate in silos. If your team has to copy-paste between ChatGPT and your CRM or ERP, your workflow is still fundamentally broken.",
      "Rakebig builds native API integrations that inject AI directly into your day-to-day screens. Whether you need auto-generated client summaries in Perfex CRM, automated email draft generation, or intelligent search across your database, we engineer the glue that makes it work securely."
    ],
    capabilities: [
      {
        title: "Model-Agnostic Architecture",
        body: "Seamlessly switch or route between OpenAI, Anthropic Claude, Google Gemini, DeepSeek, and local Llama models based on cost and latency.",
        badge: "Flexible"
      },
      {
        title: "Secure API Middleware",
        body: "Custom proxy with rate-limiting, token tracking, caching, and enterprise security guardrails.",
        badge: "Production-Ready"
      },
      {
        title: "Semantic Vector Search",
        body: "Transform your SQL databases into semantic search engines where teams search by meaning rather than exact keywords.",
        badge: "Vector AI"
      },
      {
        title: "Native CRM & Portal Plugins",
        body: "Custom UI widgets inside your existing admin dashboards for 1-click AI generation and insights.",
        badge: "Native UI"
      }
    ],
    architecture: [
      { step: "01", title: "API Gateway & Security", desc: "Requests pass through a secure gateway with PII sanitization and caching." },
      { step: "02", title: "Smart Model Router", desc: "Routes tasks to the most cost-effective model (e.g. lightweight for extraction, reasoning for complex synthesis)." },
      { step: "03", title: "Tool Execution", desc: "Models call external APIs, fetch real-time database rows, and synthesize outputs." },
      { step: "04", title: "UI Ingestion", desc: "Results render inside your existing web or mobile app natively." }
    ],
    steps: [
      { title: "Architecture Discovery", body: "We audit your existing tech stack, database schemas, and API capabilities." },
      { title: "Integration Blueprint", body: "We design the data contract, model selection, prompt pipelines, and security layers." },
      { title: "Module Development", body: "We engineer the integration, test token usage, implement semantic caching, and build UI components." },
      { title: "Deployment & Monitoring", body: "We deploy to production with real-time observability on latency, cost, and output quality." }
    ],
    outcomes: [
      { metric: "60%", label: "Cost Optimization", desc: "Intelligent prompt routing and semantic caching cut monthly API costs." },
      { metric: "100%", label: "Stack Compatibility", desc: "Works with PHP, Laravel, Node.js, Python, Flutter, and SQL databases." },
      { metric: "Enterprise", label: "Data Security", desc: "Zero data leakage and automated PII anonymization before model ingestion." }
    ],
    faqs: [
      {
        q: "Which AI models can you integrate?",
        a: "We integrate OpenAI (GPT-4o), Anthropic Claude (Sonnet, Opus), Google Gemini, DeepSeek, Groq, and self-hosted open-source models like Llama 3 on private GPUs."
      },
      {
        q: "Can you add AI directly into Perfex CRM?",
        a: "Yes. We build custom Perfex CRM modules that add AI summary widgets, auto-reply generators, lead scoring, and automated task assignments directly to the admin interface."
      },
      {
        q: "How do you prevent high API bills?",
        a: "We implement semantic caching (so identical queries do not hit paid APIs repeatedly), token limits, and tiered model routing (using fast, inexpensive models for simple tasks)."
      },
      {
        q: "Can we use on-premise or private models for complete data privacy?",
        a: "Yes. For strict compliance requirements, we deploy open-weights models (like Llama) on private cloud servers (AWS, Hetzner, RunPod) where no data leaves your network."
      }
    ],
    related: ["ai-business-automation", "ai-workflow-automation", "ai-strategy-consulting"]
  },
  {
    slug: "ai-workflow-automation",
    name: "AI Workflow Automation",
    category: "AI Agents & Workflows",
    tagline: "Autonomous Multi-Step Workflows That Run Your Operations",
    shortSummary: "Chain AI reasoning, APIs, and tools together to automate complex multi-department business processes.",
    metaDescription: "Automate complex business operations with multi-step AI agents and workflows: Lead qualification, client onboarding, dispatching, and ticket triage.",
    heroTitle: "Automate workflows that require actual decision-making",
    heroLead: "Traditional automation tools break when inputs vary. Our AI workflows combine reasoning, deterministic APIs, and external tools to execute multi-step operations without human babysitting.",
    accentColor: "#8B5CF6",
    tintColor: "#F3E8FF",
    icon: "workflow",
    whatItIs: [
      "Basic Zapier or Make automations are fragile: if an email contains unexpected text, the whole webhook fails. Real work requires understanding context, judgment, and dynamic tool orchestration.",
      "Rakebig designs autonomous AI workflows that handle end-to-end operational processes: intake, categorization, validation, CRM record updates, team notification, and customer follow-up—all with audit logs and human oversight controls."
    ],
    capabilities: [
      {
        title: "Multi-Agent Collaboration",
        body: "Specialized agents handle separate stages: an intake agent qualifies, a research agent gathers data, and an execution agent updates the CRM.",
        badge: "Autonomous"
      },
      {
        title: "Error-Tolerant & Self-Healing",
        body: "When an edge case arises, the agent attempts alternative routes or escalates cleanly with full context.",
        badge: "Reliable"
      },
      {
        title: "Full Audit Trail & Logs",
        body: "Every decision, tool call, and API output is logged chronologically for transparency and review.",
        badge: "Audit-Ready"
      },
      {
        title: "Human Approval Gates",
        body: "Configure approval steps for high-stakes actions (e.g. sending quotes, approving payments, deleting records).",
        badge: "Supervised"
      }
    ],
    architecture: [
      { step: "01", title: "Trigger & Ingestion", desc: "Webhook, scheduled cron, or incoming email initiates the workflow." },
      { step: "02", title: "Agent Evaluation", desc: "AI parses unstructured payload, identifies intent, and breaks into sub-tasks." },
      { step: "03", title: "Chained Tool Execution", desc: "Interacts with CRM, database, payment gateway, or messaging channels." },
      { step: "04", title: "Completion & Handoff", desc: "Updates database, notifies stakeholders via WhatsApp/Slack, and records audit trail." }
    ],
    steps: [
      { title: "Process Mapping", body: "We document the manual steps, tools, decision branches, and failure points in your current workflow." },
      { title: "Workflow Architecture", body: "We design agent prompt chains, fallback mechanisms, and tool definitions." },
      { title: "System Wiring", body: "We connect your CRM, databases, email servers, and messaging APIs." },
      { title: "Dry-Run & Phased Rollout", body: "We test across real production data in shadow mode before handing off live execution." }
    ],
    outcomes: [
      { metric: "10x", label: "Speed of Execution", desc: "Multi-hour manual handoffs completed autonomously in seconds." },
      { metric: "0", label: "Dropped Leads", desc: "100% of leads and customer requests routed and responded to immediately." },
      { metric: "100%", label: "Traceability", desc: "Complete visibility into every action taken by the AI pipeline." }
    ],
    faqs: [
      {
        q: "How does AI workflow automation differ from Zapier or Make?",
        a: "Zapier is linear and brittle—it strictly follows fixed rules (if X, then Y). AI workflows understand messy natural language, can make conditional decisions, handle unexpected formats, and retry dynamically."
      },
      {
        q: "What types of workflows can be automated?",
        a: "Lead triage and enrichment, support ticket categorization and auto-resolution, client onboarding flows, invoice matching and reconciliation, and automated status reporting."
      },
      {
        q: "Can we require human sign-off before certain actions happen?",
        a: "Yes. We configure approval gates: for example, the AI drafts the proposal and prepares the contract, but notifies a manager via Slack or WhatsApp to approve with one click before sending."
      },
      {
        q: "Where do these workflows run?",
        a: "We host workflows on private cloud servers with Docker, or serverless cloud infrastructure with guaranteed uptime and 24/7 health monitoring."
      }
    ],
    related: ["ai-business-automation", "document-data-extraction", "custom-ai-integrations"]
  },
  {
    slug: "ai-strategy-consulting",
    name: "AI Strategy & Consulting",
    category: "AI Agents & Workflows",
    tagline: "Honest Technical Roadmaps for Practical AI ROI",
    shortSummary: "Strategic technical guidance on where AI creates measurable ROI in your business—and where it doesn't.",
    metaDescription: "AI Strategy & Consulting from Rakebig: Practical roadmaps, technical feasibility audits, architecture reviews, and ROI analysis for engineering leaders.",
    heroTitle: "Practical AI strategy from engineers who build, not theorists",
    heroLead: "Most AI advice is filled with hype and empty buzzwords. We provide pragmatic, engineering-led consulting to identify exactly where AI saves hours, cuts operational overhead, and generates genuine business ROI.",
    accentColor: "#E11D8C",
    tintColor: "#FFE8F3",
    icon: "consult",
    whatItIs: [
      "Company leadership is constantly told they must 'use AI,' but rarely given concrete guidance on what to build, what it will cost, or what the actual return will be.",
      "Rakebig conducts practical architectural audits. We sit down with your operations, product, and technical teams to map bottlenecks, evaluate model feasibility, calculate inference costs, and give you a prioritized, fixed-price implementation roadmap."
    ],
    capabilities: [
      {
        title: "Feasibility & ROI Audits",
        body: "Detailed technical evaluation of your workflow ideas with projected cost-per-call, timeline, and ROI models.",
        badge: "Concrete Numbers"
      },
      {
        title: "Vendor & Model Selection",
        body: "Unbiased recommendations on proprietary vs. open-source models, vector databases, and cloud providers.",
        badge: "Vendor-Neutral"
      },
      {
        title: "Data Readiness & Architecture",
        body: "Auditing your databases, CRM records, and documentation structure to prepare them for AI ingestion.",
        badge: "Data-Ready"
      },
      {
        title: "Security & Compliance Review",
        body: "Ensuring zero proprietary data leakage, DPDP/GDPR compliance, and safe AI usage policies.",
        badge: "Compliant"
      }
    ],
    architecture: [
      { step: "01", title: "Workflow Discovery", desc: "Identify operational bottlenecks where manual human hours are concentrated." },
      { step: "02", title: "Technical Feasibility", desc: "Evaluate whether current LLM capabilities can solve the problem reliably." },
      { step: "03", title: "Cost & Architecture Plan", desc: "Design the exact stack, token budgets, and integration points." },
      { step: "04", title: "Implementation Roadmap", desc: "Deliver a phased, milestone-based build plan with clear deliverables." }
    ],
    steps: [
      { title: "Initial Scope Session", body: "A 60-minute deep dive into your business operations, current software, and team goals." },
      { title: "Technical Audit", body: "Our engineers inspect your data cleanliness, API capabilities, and potential failure points." },
      { title: "Strategy & Architecture Deliverable", body: "We deliver a comprehensive roadmap with architectural diagrams, stack selection, and budget." },
      { title: "Implementation Hand-off or Build", body: "You can execute with your internal team, or partner with Rakebig to build and ship the systems." }
    ],
    outcomes: [
      { metric: "100%", label: "Practical Focus", desc: "Zero fluff: only systems that deliver measurable operational improvements." },
      { metric: "Detailed", label: "Cost Modeling", desc: "Accurate monthly infrastructure and token cost estimates before building." },
      { metric: "2-3 Weeks", label: "Audit Timeline", desc: "Rapid roadmap delivery to turn ideas into engineering tickets quickly." }
    ],
    faqs: [
      {
        q: "Who is this consulting service for?",
        a: "Founders, CTOs, and Operations VPs at growing companies who want to automate operations with AI but want an experienced engineering partner to evaluate feasibility and costs first."
      },
      {
        q: "Do you only provide advice, or can you also build the systems?",
        a: "We are primarily a software engineering agency. While we offer standalone strategic audits, most clients choose us because we can also engineer, deploy, and maintain the exact systems we propose."
      },
      {
        q: "What do we receive at the end of the consulting engagement?",
        a: "A comprehensive technical architecture document, data flow diagrams, security and compliance guidelines, model benchmarks, cost projections, and a sprint-by-sprint development roadmap."
      },
      {
        q: "How do we get started?",
        a: "Book an introductory consultation on our Cal.com scheduling link (https://cal.com/rakebigservices) to discuss your current operational setup."
      }
    ],
    related: ["ai-business-automation", "custom-ai-integrations", "ai-workflow-automation"]
  },
  {
    slug: "app-publish-solution",
    name: "App Publish Solution",
    category: "AI Applications",
    tagline: "End-to-End Store Approval with 24/7 AI Support",
    shortSummary: "Turn your app into a published asset with store approvals and a 24x7 AI support agent handling user inquiries.",
    metaDescription: "App Publish Solution by Rakebig: Google Play Store & Apple App Store publishing, automated CI/CD builds, and 24x7 AI support agents.",
    heroTitle: "Get your app approved, live, and supported 24/7",
    heroLead: "Building an app is only half the battle. We handle store compliance, asset generation, rejection resolution on Google Play & App Store, and bundle an embedded AI support agent that answers your users 24/7.",
    accentColor: "#2F6BFF",
    tintColor: "#E8F1FF",
    icon: "launch",
    whatItIs: [
      "Getting mobile apps approved on Google Play and Apple App Store has never been harder. Between 20-tester closed testing policies, privacy compliance, and strict metadata guidelines, launches get delayed for months.",
      "Rakebig manages the entire publish lifecycle: certificates, provisioning profiles, store listings, compliance documentation, and build automation. Once live, our pre-integrated AI support agent handles user questions right inside the app."
    ],
    capabilities: [
      {
        title: "Store Approval Guarantee",
        body: "Full assistance through Google Play (including 14-day closed testing requirements) and Apple App Store review.",
        badge: "Guaranteed"
      },
      {
        title: "Automated Build Pipelines",
        body: "GitHub Actions / Fastlane CI/CD to build, sign, and release APK, AAB, and IPA files on every git tag.",
        badge: "Automated"
      },
      {
        title: "Embedded 24/7 AI Agent",
        body: "In-app conversational assistant to onboard new users, answer FAQs, and log bug reports directly to your CRM.",
        badge: "AI Powered"
      },
      {
        title: "Compliance & Privacy Pack",
        body: "Generation of compliant Terms of Service, Privacy Policy, Account Deletion endpoints, and Data Safety declarations.",
        badge: "Full Compliance"
      }
    ],
    architecture: [
      { step: "01", title: "Compliance Audit", desc: "Audit permissions, SDKs, policies, and store metadata requirements." },
      { step: "02", title: "CI/CD & Signing", desc: "Automate build signing, keystore management, and certificate generation." },
      { step: "03", title: "Store Submission", desc: "Handle store listing assets, testing tracks, and review feedback." },
      { step: "04", title: "Live AI Support", desc: "In-app AI assistant monitors user feedback and resolves questions immediately." }
    ],
    steps: [
      { title: "App Inspection", body: "We review your Flutter, React Native, or Native code for policy compliance." },
      { title: "Asset & Policy Prep", body: "We prepare screenshots, feature graphics, privacy declarations, and account deletion flows." },
      { title: "Testing & Submission", body: "We orchestrate closed testing tracks, fix review feedback, and submit for production release." },
      { title: "Go-Live & Agent Activation", body: "We monitor production launch metrics and activate your 24/7 in-app AI assistant." }
    ],
    outcomes: [
      { metric: "100%", label: "Store Approval", desc: "Full resolution of rejections on Google Play & App Store." },
      { metric: "< 2 Weeks", label: "Launch Window", desc: "Fast-tracked release timeline with automated CI/CD." },
      { metric: "24/7", label: "In-App Support", desc: "AI assistant handles live user questions from day one." }
    ],
    faqs: [
      {
        q: "How do you handle Google Play's 20-tester 14-day requirement?",
        a: "We organize and manage the entire closed testing phase with verified testers, ensuring all activity and feedback criteria are met before applying for production access."
      },
      {
        q: "What happens if Apple or Google rejects our app?",
        a: "Our engineering team directly handles review correspondence, updates required policies or code, and resubmits until full approval is achieved."
      },
      {
        q: "What does the embedded AI agent do inside our app?",
        a: "It provides users with an instant, branded chat drawer to answer questions about using the app, troubleshoot issues, and collect bug reports directly into your CRM."
      },
      {
        q: "Can you set up automated builds so we don't have to upload manually?",
        a: "Yes. We configure Fastlane and GitHub Actions so that whenever your team merges code, production-ready builds are automatically signed and uploaded to the stores."
      }
    ],
    related: ["ai-assistants-chatbots", "ai-business-automation", "custom-ai-integrations"]
  },
  {
    slug: "ai-business-automation",
    name: "AI Business Automation",
    category: "AI Applications",
    tagline: "Intelligent Workflows for Operations, Sales & Support",
    shortSummary: "Practical AI workflows that route tickets, triage customer messages, draft proposals, and eliminate repetitive back-office work.",
    metaDescription: "AI Business Automation by Rakebig: Connect AI models to your CRM, messaging channels, and internal databases to automate repetitive operations.",
    heroTitle: "Practical AI automation built for how your business runs",
    heroLead: "Automate manual handoffs, ticket routing, and repetitive operational tasks. We build reliable, end-to-end AI automations that connect your CRM, WhatsApp, email, and databases into one cohesive machine.",
    accentColor: "#E11D8C",
    tintColor: "#FFE8F3",
    icon: "ai",
    whatItIs: [
      "Most operational work is repetitive: reading incoming emails, assigning leads to sales reps, typing invoice data into CRMs, and generating routine status reports.",
      "Rakebig builds practical AI automation systems tailored to your specific process. We link frontier models with your existing software stack, eliminating mundane work so your team focuses on high-value client delivery."
    ],
    capabilities: [
      {
        title: "Intelligent Ticket Triage",
        body: "Automatically classify, prioritize, and route customer tickets to the right department with sentiment scoring.",
        badge: "High Accuracy"
      },
      {
        title: "Automated Proposal & Quote Drafting",
        body: "AI synthesizes client notes and requirements into professional, scoped quotes ready for manager sign-off.",
        badge: "Sales Velocity"
      },
      {
        title: "CRM & WhatsApp Synchronization",
        body: "Every customer conversation on WhatsApp automatically logs into Perfex CRM with summarized action items.",
        badge: "Unified Data"
      },
      {
        title: "Executive Summaries & Reports",
        body: "Scheduled AI agents compile daily sales, pipeline updates, and support KPIs delivered to your Slack or WhatsApp.",
        badge: "Instant Insights"
      }
    ],
    architecture: [
      { step: "01", title: "Channel Listener", desc: "Webhooks listen to WhatsApp, email inboxes, support tickets, and CRM events." },
      { step: "02", title: "AI Classification & Extraction", desc: "Model categorizes requests and extracts critical parameters." },
      { step: "03", title: "Database & Tool Action", desc: "Executes CRM updates, notification dispatches, and document generation." },
      { step: "04", title: "Review & Closure", desc: "Confirms delivery, logs to audit trail, and notifies relevant team members." }
    ],
    steps: [
      { title: "Workflow Audit", body: "We identify the 3 highest-ROI manual workflows draining your team's time." },
      { title: "Architecture & Integrations", body: "We engineer prompt pipelines, safety checks, and API connectors." },
      { title: "Shadow Testing", body: "We run the automation alongside your team to verify 100% accuracy on real traffic." },
      { title: "Full Automation & Monitoring", body: "We launch live with 24/7 health monitoring and performance dashboards." }
    ],
    outcomes: [
      { metric: "15+ hrs", label: "Saved Per Employee/Week", desc: "Reclaim repetitive administrative and clerical hours." },
      { metric: "0 min", label: "Lead Response Delay", desc: "Instantaneous qualification and CRM assignment for every new inquiry." },
      { metric: "100%", label: "CRM Hygiene", desc: "Clean, consistent data and audit logs without manual entry." }
    ],
    faqs: [
      {
        q: "Will this replace our existing employees?",
        a: "No. Our AI automations handle the tedious, mechanical chores (data entry, copy-pasting, routing) so your team can focus on client relationships and complex problem-solving."
      },
      {
        q: "How reliable are these automations?",
        a: "We build with strict deterministic validation and fallback logic. If an input is ambiguous, the system flags it for human review rather than guessing."
      },
      {
        q: "Can this connect directly to our Perfex CRM installation?",
        a: "Yes. We specialize in Perfex CRM and can build custom modules or direct API bridges that read and write directly to your Perfex database."
      },
      {
        q: "What is the typical implementation timeline?",
        a: "Most single-workflow automations ship in 2 to 3 weeks; full departmental operational automation takes 4 to 6 weeks."
      }
    ],
    related: ["ai-assistants-chatbots", "ai-workflow-automation", "document-data-extraction"]
  }
];

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return solutions.find((s) => s.slug === slug);
}
