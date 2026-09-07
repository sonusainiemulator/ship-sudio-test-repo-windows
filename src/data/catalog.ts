// ---------------------------------------------------------------------------
// Rakebig Services — offerings catalog (single source of truth)
//
// Every offering in this array gets its own SEO page at /services/<slug>.
// Add an offering here and the page is generated automatically; remove one and
// its page disappears. `related` must point at other slugs in this file — a
// build-time check below throws if one is wrong.
//
// WRITING RULES (keep pages easy to read and SEO-friendly):
// - Plain, concrete copy in first-plural ("we"). Sentences ≤ ~20 words.
// - Name the real stack/tools we use: Perfex CRM, Laravel, Vue, Flutter,
//   Docker, GitHub Actions / Jenkins, WhatsApp Business API, IP telephony,
//   payment gateways, SSL, domains.
// - Answer what a buyer wants to know: who is it for, what problem it removes,
//   and what they get when it ships.
// - Avoid SEO clichés and empty adjectives: no "seamless", "robust",
//   "empower", "revolutionize", "cutting-edge", "world-class".
// - metaDescription: 120–160 characters, distinct per page, leads with the
//   primary keyword and a concrete promise.
// - heroTitle: short and keyword-led; every H1 must differ from the others.
// ---------------------------------------------------------------------------

export type OfferingType = "product" | "service";

export interface Offering {
  slug: string;
  name: string;
  type: OfferingType;
  /** One line used on related cards / menus. */
  shortSummary: string;
  /** 120–160 chars, unique per page. */
  metaDescription: string;
  /** Keyword-led H1; must be unique across pages. */
  heroTitle: string;
  /** Lead paragraph under the H1. */
  heroLead: string;
  /** 1–2 plain-language paragraphs. */
  whatItIs: string[];
  features: { title: string; body: string }[];
  outcomes: { label: string; body: string }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** Slugs of other offerings this page links to (internal linking). */
  related: string[];
}

export const offerings: Offering[] = [
  {
    slug: "perfex-crm-solutions",
    name: "Perfex CRM Solutions",
    type: "product",
    shortSummary: "Custom modules, multi-tenant SaaS, and workflow automation built on Perfex CRM.",
    metaDescription:
      "Custom Perfex CRM development: modules, workflow automation, integrations, and multi-tenant SaaS built to match how your team sells and supports.",
    heroTitle: "Perfex CRM built around how you sell",
    heroLead:
      "A default Perfex install is only a starting point. We customise your CRM — modules, automation, integrations — so it matches the way your team actually sells, supports, and delivers.",
    whatItIs: [
      "Perfex CRM is a flexible, open-source CRM for sales, support, invoicing, and projects. Out of the box it handles the basics, but every team works differently — so most Perfex businesses need it adjusted to their real process.",
      "Rakebig Services builds on Perfex rather than around it. We add the modules you need, wire in the tools you already use, and set up multi-tenant SaaS when you sell Perfex to your own customers. You keep a system your team already half-knows, shaped to your workflow.",
    ],
    features: [
      { title: "Custom modules", body: "Lead scoring, commission rules, order flows, or any field and screen your team fills in daily — built as Perfex modules, not bolted on." },
      { title: "Workflow automation", body: "Rules that move records, send follow-ups, and assign tasks automatically, so the busywork stops needing a human." },
      { title: "Integrations", body: "WhatsApp, payment gateways, IP telephony, and third-party APIs connected to the records and reports your staff already use." },
      { title: "Multi-tenant SaaS setup", body: "Turn one Perfex install into a product you can sell to many clients, with separate companies, branding, and billing per tenant." },
      { title: "Data migration & cleanup", body: "We move records from spreadsheets or an old CRM into Perfex, deduplicate, and fix the gaps before you go live." },
    ],
    outcomes: [
      { label: "One screen for the whole team", body: "Sales, support, and billing stop living in different tools." },
      { label: "Less manual follow-up", body: "Automation nudges the right person at the right time, automatically." },
      { label: "A CRM that grows with you", body: "New fields, flows, and integrations are added as your process changes." },
    ],
    steps: [
      { title: "Map your process", body: "We shadow the steps your team takes today — deals, tickets, handoffs — and find where Perfex slows them down." },
      { title: "Scope the build", body: "You get a written list of modules, automations, and integrations with a fixed price before we write code." },
      { title: "Build against your data", body: "We develop against real records and edge cases, not sample data, and show you working screens as we go." },
      { title: "Go live and support", body: "We migrate your data, train your staff, and stay on for fixes and the next round of changes." },
    ],
    faqs: [
      { q: "We already use Perfex. Can you change it without breaking our current data?", a: "Yes. Most projects start from the install you have today. We work on a copy first, then migrate your records across when the new modules are tested." },
      { q: "Can you turn Perfex into a SaaS product we sell?", a: "Yes — we build multi-tenant Perfex setups where each client has its own company, branding, and billing, so you can offer Perfex as a service." },
      { q: "How long does a typical Perfex customisation take?", a: "A focused module or automation usually ships in 2–4 weeks. Larger SaaS builds take longer, and we scope each one with a fixed quote first." },
    ],
    related: ["web-application-development", "business-integrations", "maintenance-support"],
  },

  {
    slug: "saas-platform-development",
    name: "SaaS Platform Development",
    type: "product",
    shortSummary: "Multi-tenant SaaS platforms with billing, roles, and dashboards, built on Laravel and Vue.",
    metaDescription:
      "Multi-tenant SaaS platform development on Laravel and Vue: subscriptions, tenant management, roles, and dashboards architected to scale.",
    heroTitle: "SaaS platforms architected to scale",
    heroLead:
      "You have a product idea with recurring revenue behind it. We build the multi-tenant SaaS platform — tenants, billing, roles, dashboards — on Laravel and Vue, so it is built to be sold many times over.",
    whatItIs: [
      "A SaaS platform is software you rent to many customers at once. Each customer is a tenant — with their own data, settings, and billing — and they should never see or affect each other.",
      "We architect that separation from day one. Laravel handles the API and business logic, Vue powers the dashboards your customers use, and the whole thing is designed so a new tenant is a sale, not a project.",
    ],
    features: [
      { title: "Multi-tenant architecture", body: "Each client gets an isolated company with its own data and rules — no cross-tenant leaks, ever." },
      { title: "Subscriptions & billing", body: "Plans, trials, usage limits, and invoices wired to Stripe, so signup to paid is automatic." },
      { title: "Roles & permissions", body: "Admin, staff, and customer accounts with clear access levels your customers can manage themselves." },
      { title: "Custom dashboards", body: "Reports and admin screens built around the metric your business is actually paid on." },
      { title: "White-label options", body: "Your customers see your brand, not ours — including custom domains where it matters." },
    ],
    outcomes: [
      { label: "Sell the same build many times", body: "A new tenant goes live without new engineering." },
      { label: "Billing that runs itself", body: "Trials convert and invoices send without a spreadsheet in sight." },
      { label: "A platform you can extend", body: "New modules and tenants are added on a foundation that stays stable." },
    ],
    steps: [
      { title: "Define the tenant model", body: "We pin down what separates tenants, what they share, and how you price them." },
      { title: "Architect the core", body: "Data model, roles, and billing are locked before the UI is designed." },
      { title: "Build the customer app", body: "Dashboards and flows are built in Vue against the Laravel API, in working slices." },
      { title: "Launch and scale", body: "We deploy with CI/CD, add tenants, and monitor uptime in production." },
    ],
    faqs: [
      { q: "What stack do you build SaaS on?", a: "Laravel for the backend and API, Vue for the customer-facing app, and Postgres or MySQL for data. It is a stack we can support long-term." },
      { q: "Can you take over a SaaS we already started?", a: "Usually, yes. We start with a code and architecture review, then take over the roadmap in stages." },
      { q: "Do you handle payments and compliance?", a: "We wire Stripe for subscriptions and invoicing. For heavy compliance needs we work with your legal team to scope what applies to your market." },
    ],
    related: ["web-application-development", "cloud-deployment-devops", "dedicated-team"],
  },

  {
    slug: "web-application-development",
    name: "Web Application Development",
    type: "product",
    shortSummary: "Custom portals, admin panels, and real-time dashboards built on Laravel and Vue.",
    metaDescription:
      "Custom web application development on Laravel and Vue — portals, admin panels, and real-time dashboards built around the way your team works.",
    heroTitle: "Web apps built around your team's work",
    heroLead:
      "Off-the-shelf tools rarely match how an internal team actually operates. We build custom web applications — portals, admin panels, dashboards — on Laravel and Vue, shaped to your process and your data.",
    whatItIs: [
      "A web application is software your staff or customers use in the browser every day. Unlike a website, it holds your data and helps people do work — manage orders, review cases, run reports, coordinate handoffs.",
      "We build these on Laravel and Vue so they stay fast, secure, and maintainable long after launch. You get exactly the screens and rules you asked for, not a product full of features nobody uses.",
    ],
    features: [
      { title: "Portals", body: "Client or partner logins where people can submit, track, and download what they need without emailing you." },
      { title: "Admin panels", body: "Internal back-ends to manage orders, users, inventory, or content — with the exact fields your staff use." },
      { title: "Real-time dashboards", body: "Live views of the numbers that matter, updated as your data changes, not once a day." },
      { title: "Role-based access", body: "Different people see different screens, so a field worker and a director each get a clean view." },
      { title: "API-ready core", body: "Built so the app can talk to your CRM, payment tools, or a mobile app later." },
    ],
    outcomes: [
      { label: "Workflows match reality", body: "The screens mirror the process, so training time drops." },
      { label: "Data in one place", body: "No more re-keying between spreadsheets and tools." },
      { label: "Built to change", body: "New screens and rules are added without rewriting the app." },
    ],
    steps: [
      { title: "Understand the job", body: "We watch how the task happens today and write down what the app must replace." },
      { title: "Scope the screens", body: "Every screen, field, and rule is listed and quoted before code starts." },
      { title: "Build in slices", body: "You see working screens every week and steer each one before it is finished." },
      { title: "Ship and train", body: "We deploy, set up your team, and keep supporting the app." },
    ],
    faqs: [
      { q: "When is a custom web app the right choice over a template?", a: "When your process has rules no template handles — custom fields, approval flows, integrations, or reporting. Templates win when a standard tool fits 90% of the job." },
      { q: "Do you integrate web apps with our CRM?", a: "Yes. Perfex CRM is the most common system we connect to, and we also link to payment gateways, WhatsApp, and third-party APIs." },
      { q: "Who owns the code?", a: "You do. The code lives in a repository you control, so you are never locked in to us." },
    ],
    related: ["perfex-crm-solutions", "mobile-app-development", "saas-platform-development"],
  },

  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    type: "product",
    shortSummary: "Flutter apps for Android and iOS — CRM companions and business tools on the go.",
    metaDescription:
      "Mobile app development with Flutter for Android and iOS — CRM companion apps and business tools your field teams can use on the go.",
    heroTitle: "Mobile apps that put your system on the go",
    heroLead:
      "Your team works away from a desk — on site, on the road, at the client. We build Flutter apps for Android and iOS that keep your CRM, orders, and approvals working in their pocket.",
    whatItIs: [
      "A mobile app turns a desk-bound system into something your team uses anywhere. Salespeople log visits, engineers update jobs, and managers approve work from their phone.",
      "We build with Flutter, so one codebase ships to both Android and iOS. The app talks to your existing web app or Perfex CRM, which means field data lands in the same place your office sees it.",
    ],
    features: [
      { title: "Cross-platform build", body: "One Flutter codebase, native speed and feel on both Android and iOS." },
      { title: "CRM companion", body: "Add leads, log calls, and update deals in Perfex from the field — online or with offline sync." },
      { title: "Approvals on the go", body: "Managers review and approve requests from their phone instead of chasing a laptop." },
      { title: "Push notifications", body: "Get notified the moment a record needs attention, wherever the team is." },
      { title: "Works offline", body: "Forms and notes queue on the device and sync when a connection returns." },
    ],
    outcomes: [
      { label: "Field teams stay current", body: "Data is captured at the source, not re-typed later." },
      { label: "Faster approvals", body: "Nothing waits on someone returning to their desk." },
      { label: "One system everywhere", body: "Mobile, web, and CRM share the same records." },
    ],
    steps: [
      { title: "Choose what moves to mobile", body: "We decide which desk tasks genuinely help on a phone — and which should stay put." },
      { title: "Design the flows", body: "Tap-by-tap flows are drawn for the short sessions your team actually has." },
      { title: "Build & sync", body: "The app is built in Flutter and wired to your backend or CRM with offline support." },
      { title: "Test on real devices", body: "We test on Android and iPhone before you release to your team." },
    ],
    faqs: [
      { q: "Flutter — why not two native apps?", a: "One Flutter codebase covers Android and iOS, so changes ship twice as fast and cost less to maintain. For most business apps the app-store experience is indistinguishable." },
      { q: "Can the app work without internet?", a: "Yes. Forms and notes store on the device and sync when a connection returns, which matters for site and field work." },
      { q: "Do we need to publish on app stores?", a: "Only if your team installs through the stores. We can also set up a private distribution link for staff-only apps." },
    ],
    related: ["web-application-development", "business-integrations", "perfex-crm-solutions"],
  },

  {
    slug: "app-clone-development",
    name: "App Clone Development",
    type: "product",
    shortSummary: "Blinkit, Zapto, Uber, WhatsApp, TikTok, dating, and streaming-style app clones built to your brand.",
    metaDescription:
      "App clone development by Rakebig: Blinkit, Zapto, Uber, WhatsApp, TikTok, dating, and streaming-style app clones built to your brand on proven stacks.",
    heroTitle: "Your own version of the apps users already love",
    heroLead:
      "Clone apps give you a proven product model with your brand on top. We rebuild the core mechanics of popular apps — quick-commerce, ride-hailing, chat, short-video, dating, streaming — as clean original code, then add the features and design that make it yours.",
    whatItIs: [
      "An app clone is a fresh build that recreates the core experience of a popular app — not a copy of its source code, logo, or store listing. Users get an interface they already understand, while you get a product you own and can change.",
      "We start from architecture we have built before: a user app, an admin dashboard, payments, notifications, and the maps, feeds, chat, or calls the category needs. You pick the model — Blinkit, Zapto, Uber, WhatsApp, TikTok, dating, streaming, or conferencing — and we shape it around your market and your brand.",
    ],
    features: [
      { title: "Proven templates", body: "Quick-commerce, ride-hailing, chat, short-video, dating, streaming, and conferencing models to start from — no blank canvas, no guessing." },
      { title: "User app + admin dashboard", body: "A customer-facing app plus an admin panel to manage orders, rides, listings, users, and content in one place." },
      { title: "Payments & notifications", body: "Stripe or Razorpay checkout, wallet balances, and push and SMS alerts wired in from the start." },
      { title: "Location, feed & chat", body: "Maps and live tracking, discovery feeds, messaging, and calls included where your category needs them." },
      { title: "Your brand & differentiators", body: "Your name, colours, and the features that make your version different from the model it is based on." },
    ],
    outcomes: [
      { label: "Launch in months, not years", body: "A proven base means the first release is configuration, not a rebuild." },
      { label: "Code you own", body: "Everything we write is yours — no licensing fees or lock-in to a white-label vendor." },
      { label: "Runs the way you operate", body: "Admin tools and rules are shaped to your delivery, pricing, and team." },
    ],
    steps: [
      { title: "Pick your model", body: "We compare app categories with your market — who you serve, how they pay, and what you can out-deliver." },
      { title: "Scope your version", body: "A written list of features and screens, plus what makes yours different, at a fixed price." },
      { title: "Build and configure", body: "We build on Flutter and Laravel, wire payments and push, and set up admin rules with your team." },
      { title: "Test and launch", body: "We test on real devices, prepare store listings, and stay on for fixes and the next release." },
    ],
    faqs: [
      { q: "Is building an app clone legal?", a: "We write original code that recreates a product's experience — never its source, brand assets, or store listing. Functional clones are common in every market; copying another company's exact code or design is not work we take on." },
      { q: "Do I own the source code?", a: "Yes. The code lives in a repository you control, priced so you own the base outright rather than renting a white-label licence." },
      { q: "How long until my app launches?", a: "A focused clone with payments and an admin panel ships in roughly 8–12 weeks. Store listings are prepared as part of the build so launch is not held up on our side." },
    ],
    related: ["mobile-app-development", "saas-platform-development", "web-application-development", "app-publish-solution", "business-integrations"],
  },

  {
    slug: "app-publish-solution",
    name: "App Publish Solution",
    type: "service",
    shortSummary: "Launch your app to stores and production with a 24x7 AI agent answering users and triaging issues.",
    metaDescription:
      "App publishing with a 24x7 AI agent: we release your web or mobile app to app stores and production, and an always-on AI agent handles support around the clock.",
    heroTitle: "Publish your app with a 24x7 AI agent on duty",
    heroLead:
      "Shipping an app is one thing; running it is another. We take your build from ready to live — app stores, production hosting — and put a 24x7 AI agent on your side to answer users, triage issues, and surface what needs a human.",
    whatItIs: [
      "Getting an app live is a checklist: store listings, review screenshots, privacy pages, release signing, production servers, and a way for users to reach you afterwards. Many teams nail the build and stumble on the publish.",
      "We handle the whole publish for you. We prepare and release your app to Google Play and the App Store, or deploy your web app and SaaS platform to production, and we set up an always-on AI agent that answers common questions, triages support messages, and flags genuine problems to a human — day and night.",
    ],
    features: [
      { title: "Store readiness", body: "Listings, screenshots, privacy pages, and release accounts prepared so your submission passes review the first time." },
      { title: "Store submission & release", body: "We manage Play and App Store submissions, review feedback, and roll out staged releases safely." },
      { title: "Production deployment", body: "Web apps and SaaS deploy to production with domains and SSL configured and monitored." },
      { title: "24x7 AI support agent", body: "An always-on agent answers common questions in your brand voice and helps users self-serve, in any timezone." },
      { title: "Human escalation", body: "The agent triages and routes real problems — bugs, billing, edge cases — to your team with context, not noise." },
    ],
    outcomes: [
      { label: "Users get answers any hour", body: "Routine questions are handled the moment they're asked." },
      { label: "Launches that stick", body: "Store submissions prepared properly pass review instead of bouncing." },
      { label: "Real issues reach humans fast", body: "Escalations arrive with context, so your team fixes instead of filtering." },
    ],
    steps: [
      { title: "Prepare for launch", body: "Store listings, release assets, privacy pages, and hosting are readied." },
      { title: "Submit & monitor review", body: "We handle store review, fix feedback, and manage the release." },
      { title: "Go live", body: "Your app ships to users and your web or SaaS platform deploys to production." },
      { title: "Run the agent", body: "The 24x7 AI agent answers and triages while we monitor uptime and tune the rules." },
    ],
    faqs: [
      { q: "Does the AI agent replace our support team?", a: "No. It handles the routine questions that flood your inbox and escalates anything real — bugs, billing, edge cases — to your team with full context." },
      { q: "How long does publishing take?", a: "Store review times vary by platform, but we prepare everything in parallel so your app is ready to submit the day you say go." },
      { q: "Can we keep the AI agent after launch?", a: "Yes. It runs as part of our support plan, tuned to your product and updated as your FAQ and features grow." },
    ],
    related: ["mobile-app-development", "ai-business-automation", "cloud-deployment-devops"],
  },

  {
    slug: "ai-business-automation",
    name: "AI Business Automation",
    type: "product",
    shortSummary: "Practical AI that routes tickets, triages messages, and automates reporting.",
    metaDescription:
      "AI business automation that routes tickets, triages inbound messages, and writes reports inside the Perfex CRM and tools your team already runs.",
    heroTitle: "AI that does the repetitive work",
    heroLead:
      "AI is only useful when it removes real work. We build practical automation — ticket routing, message triage, report drafting — into the CRM and tools you already run, not a separate AI product nobody opens.",
    whatItIs: [
      "Business automation with AI takes the tasks your team repeats hundreds of times and handles them in the background: sorting enquiries, drafting replies, summarising calls, building reports.",
      "We start where the volume is. If your team drowns in tickets or message channels, we automate the intake — AI reads, tags, routes, and drafts a first response, and a human approves. The AI works inside Perfex and your existing tools, so there is no new place to look.",
    ],
    features: [
      { title: "Intelligent ticket routing", body: "Incoming tickets are read, tagged, and sent to the right owner before a human looks at them." },
      { title: "Message triage", body: "WhatsApp and email enquiries are summarised, prioritised, and given a draft reply for your team to approve." },
      { title: "Report drafting", body: "Sales and ops reports are generated from your CRM data on a schedule, ready for review instead of built from scratch." },
      { title: "Call & meeting summaries", body: "Recordings become clean summaries with action items, filed back into the right record." },
      { title: "Guardrails you control", body: "Every automation runs inside permission rules your team sets, and humans approve anything outbound." },
    ],
    outcomes: [
      { label: "Hours back every week", body: "The intake work that ate the morning now runs itself." },
      { label: "Faster response", body: "Leads and tickets get a reply in seconds instead of when someone is free." },
      { label: "AI you can trust", body: "It drafts and routes; your team stays the decision-maker." },
    ],
    steps: [
      { title: "Find the high-volume task", body: "We pick the one repetitive job costing your team the most time." },
      { title: "Map the rules", body: "You define what good routing and a good reply look like, and where AI stops." },
      { title: "Build it into the tool", body: "The automation is wired into your CRM or inbox — no new system for staff to learn." },
      { title: "Measure and tune", body: "We track hours saved and accuracy, and adjust the rules with you." },
    ],
    faqs: [
      { q: "Will AI make mistakes on our customers?", a: "Anything outbound is drafted for a human to approve. Automation only acts alone where it is safe and reversible — like tagging and routing." },
      { q: "Do we need an AI subscription or special model access?", a: "No. We use the models that fit the job and run them through your own accounts, so there is no hidden platform lock-in." },
      { q: "What if our process changes?", a: "The rules live in config, not buried in code, so we adjust them as your team's process evolves." },
    ],
    related: ["business-integrations", "it-consulting", "perfex-crm-solutions"],
  },

  {
    slug: "business-integrations",
    name: "Business Integrations",
    type: "service",
    shortSummary: "WhatsApp, IP telephony, payment gateways, and third-party APIs wired into one system.",
    metaDescription:
      "Business integrations for WhatsApp, IP telephony, payment gateways, and third-party APIs — every channel wired into your CRM or platform.",
    heroTitle: "Every channel wired into one system",
    heroLead:
      "Your customers reach you across WhatsApp, phone, email, and forms — but your team has to check five tools to keep up. We connect each channel into your CRM or platform, so everything lands in one timeline.",
    whatItIs: [
      "An integration connects two systems so data flows between them without copy-paste. We specialise in the channels businesses actually live on: WhatsApp messages, phone calls over IP, payments, and the third-party APIs your industry depends on.",
      "The result is simple to describe and hard to build well: a customer message arrives, a record opens in your CRM, the right person is notified, and the whole conversation is filed against that customer.",
    ],
    features: [
      { title: "WhatsApp Business API", body: "Two-way WhatsApp in your CRM with templates, automated replies, and a full message history per contact." },
      { title: "IP telephony", body: "Calls, recordings, and click-to-call linked to customer records so nobody asks 'who was that?'" },
      { title: "Payment gateways", body: "Invoices and payments synced — Stripe, Razorpay, or your gateway — with status reflected in the CRM." },
      { title: "Third-party APIs", body: "Shipping, ERP, email, or industry tools connected through clean, tested integrations." },
      { title: "Central activity feed", body: "Every channel's events shown on one timeline against the right customer or job." },
    ],
    outcomes: [
      { label: "No more tool-hopping", body: "Staff work from one screen instead of five tabs." },
      { label: "Nothing slips through", body: "Every message and call is filed, so follow-ups are never lost." },
      { label: "Data that agrees", body: "Two systems stop arguing about the same customer." },
    ],
    steps: [
      { title: "Audit the channels", body: "We list every place customers reach you and where that data currently dies." },
      { title: "Pick the integrations", body: "We prioritise by volume and pain — WhatsApp and payments almost always lead." },
      { title: "Wire and test", body: "Each integration is built against real accounts and tested with your live scenarios." },
      { title: "Roll out to the team", body: "We train the team and monitor message and payment flows in production." },
    ],
    faqs: [
      { q: "Can you connect WhatsApp to our CRM properly?", a: "Yes, through the official WhatsApp Business API — real two-way messaging with message templates, not a hack. It works inside Perfex CRM and other platforms." },
      { q: "Do integrations need a lot of maintenance?", a: "APIs change occasionally. We monitor the ones we build and patch them under your maintenance plan, so they keep working quietly." },
      { q: "We already use Zapier — why build custom?", a: "Zapier is great for light glue. When you need two-way sync, error handling, or data mapped into custom CRM fields, a purpose-built integration is more reliable and cheaper at volume." },
    ],
    related: ["perfex-crm-solutions", "ai-business-automation", "web-application-development"],
  },

  {
    slug: "cloud-deployment-devops",
    name: "Cloud Deployment & DevOps",
    type: "service",
    shortSummary: "Docker, CI/CD, servers, domains, and SSL managed from staging through production.",
    metaDescription:
      "Cloud deployment and DevOps for Perfex CRM, apps, and SaaS — Docker, CI/CD pipelines, servers, domains, SSL, and monitoring from staging to production.",
    heroTitle: "Infrastructure that doesn't fall over",
    heroLead:
      "A great app on a fragile server is still a fragile product. We deploy your Perfex CRM, apps, and SaaS on infrastructure that is automated, monitored, and backed up — so it stays up when it matters.",
    whatItIs: [
      "DevOps is the work that keeps software running after it is built: servers, deployment pipelines, domains, SSL, backups, and monitoring. It is invisible when it works and very loud when it does not.",
      "We handle this end to end. Docker containers make your app portable, CI/CD ships new versions safely, and monitoring tells us the moment something slows or fails — usually before your customers notice.",
    ],
    features: [
      { title: "Dockerised deployment", body: "Your app runs in containers, so it behaves the same in staging as production." },
      { title: "CI/CD pipelines", body: "GitHub Actions or Jenkins test and ship every change, with rollback if a deploy goes wrong." },
      { title: "Servers & hosting", body: "Setup on the provider that fits — VPS, Coolify, or aaPanel — sized to your traffic and budget." },
      { title: "Domains & SSL", body: "Domains, DNS, email, and certificates configured and renewed so nothing quietly expires." },
      { title: "Monitoring & backups", body: "Uptime checks, logs, and scheduled backups, with restore tested — not just scheduled." },
    ],
    outcomes: [
      { label: "Ships without fear", body: "New versions deploy in minutes and roll back if needed." },
      { label: "Up when it matters", body: "Monitoring catches issues before customers report them." },
      { label: "A server you own", body: "No mystery vendor — your credentials and config stay yours." },
    ],
    steps: [
      { title: "Review what you run", body: "We map your apps, data, and current hosting to find the weak points." },
      { title: "Set up the pipeline", body: "Containerisation and CI/CD are configured so deploys become routine." },
      { title: "Move to production", body: "We cut over domains and SSL with a rollback plan and zero-drama switch." },
      { title: "Monitor and maintain", body: "Checks, logs, and backups run on a schedule, and we're on call for incidents." },
    ],
    faqs: [
      { q: "We host on shared hosting. Do we need Docker and CI/CD?", a: "Not everything does. If you are stable on shared hosting we can leave it — but if you ship changes often or want to scale, containers and a pipeline pay for themselves fast." },
      { q: "Where do you host our apps?", a: "We work with the providers that fit the job — commonly a VPS, Coolify, or aaPanel. You keep the account, so you are never locked in." },
      { q: "What happens if the server goes down?", a: "Monitoring alerts us first. Under your support plan we respond, restore, and give you a written post-incident note on what changed." },
    ],
    related: ["maintenance-support", "saas-platform-development", "dedicated-team"],
  },

  {
    slug: "maintenance-support",
    name: "Maintenance & Support",
    type: "service",
    shortSummary: "Ongoing updates, monitoring, and fixes that keep your systems reliable after launch.",
    metaDescription:
      "Maintenance and support for Perfex CRM, web apps, and SaaS: updates, monitoring, bug fixes, and backups that keep your systems reliable after launch.",
    heroTitle: "Support that keeps your systems reliable",
    heroLead:
      "Launch is not the finish line. Your Perfex CRM, apps, and SaaS need updates, monitoring, and someone to call when something breaks. We provide that — on a plan, at a predictable cost.",
    whatItIs: [
      "Software slowly rots if nobody tends it: dependencies go stale, small bugs surface, and backups only help if they are tested. Maintenance is the quiet work that keeps a system dependable year after year.",
      "We act as your ongoing engineering partner. On a fixed monthly plan we handle updates, monitor uptime, fix bugs, and improve small things — so your team never has to chase a developer who 'isn't available anymore'.",
    ],
    features: [
      { title: "Scheduled updates", body: "Frameworks, security patches, and Perfex versions updated on a regular cadence, never silently." },
      { title: "Monitoring & alerts", body: "Uptime and error checks that flag problems before your customers do." },
      { title: "Bug fixing", body: "Issues are triaged and fixed within agreed response times, with a changelog of what changed." },
      { title: "Backups that are tested", body: "Automated backups with regular restore drills, so recovery actually works." },
      { title: "Small improvements", body: "A monthly allowance for tweaks — new fields, reports, and fixes that never justify their own project." },
    ],
    outcomes: [
      { label: "Problems get solved", body: "A real team answers, with clear response times." },
      { label: "Software stays current", body: "Security and updates handled so nothing rots quietly." },
      { label: "Predictable cost", body: "One monthly plan covers the support, not hourly surprises." },
    ],
    steps: [
      { title: "Health check", body: "We review your systems, backups, and update status to set a baseline." },
      { title: "Pick a plan", body: "Response times, hours, and scope are agreed — from light care to full partnership." },
      { title: "Run the rhythm", body: "Updates, checks, and backups run on schedule, with a log you can see." },
      { title: "Improve monthly", body: "A standing meeting reviews what broke, what we fixed, and what to improve next." },
    ],
    faqs: [
      { q: "What happens if you don't fix it in time?", a: "Response times are part of your plan. If we miss a target you get credit — the plan is written so you always know what to expect." },
      { q: "Can you support systems another developer built?", a: "Yes. We start with a code and infrastructure review, then take over maintenance once we understand the system." },
      { q: "How is this different from hiring a freelancer?", a: "A plan means continuity. There is always a team that knows your system, a written schedule, and tested backups — not a single person who might disappear." },
    ],
    related: ["dedicated-team", "cloud-deployment-devops", "perfex-crm-solutions"],
  },

  {
    slug: "dedicated-team",
    name: "Dedicated Development Team",
    type: "service",
    shortSummary: "A focused engineering squad embedded with your product and ops leads.",
    metaDescription:
      "A dedicated development team from Rakebig — engineers embedded with your product and ops leads, working your roadmap at a predictable monthly cost.",
    heroTitle: "An engineering team on your side",
    heroLead:
      "When the roadmap is longer than a single project, you need a team — not a one-off contractor. We embed a dedicated squad with your product and ops leads to ship your backlog, month after month.",
    whatItIs: [
      "A dedicated team is our engineers working for you full-time on your roadmap. Unlike a fixed-scope project, they stay on as priorities shift — building new features, fixing issues, and refining the system as you learn what works.",
      "You set the priorities; we bring the skills. One senior point of contact, a clear monthly cost, and the same engineers who build your project stay to maintain it.",
    ],
    features: [
      { title: "A squad that knows your system", body: "The engineers who built your software stay with it — no context lost to handovers." },
      { title: "Your roadmap, our backlog", body: "You prioritise; we estimate and deliver in steady weekly slices." },
      { title: "Senior leads", body: "A named lead owns delivery, demos, and your one clear line of communication." },
      { title: "Predictable billing", body: "One monthly plan covers the team — no timesheet surprises or hourly creep." },
      { title: "Flexible size", body: "Grow the squad for a push or shrink it when the roadmap thins out." },
    ],
    outcomes: [
      { label: "Momentum that compounds", body: "The same team ships faster every month as they learn your business." },
      { label: "No hiring headache", body: "You get senior engineers without recruitment, payroll, or bench risk." },
      { label: "Control stays with you", body: "You own the roadmap, the code, and every decision." },
    ],
    steps: [
      { title: "Match the team", body: "We size the squad to your roadmap and introduce the lead who will run it." },
      { title: "Set the rhythm", body: "Weekly demos, a shared backlog, and a written plan for the first month." },
      { title: "Ship in slices", body: "The team works your priorities in order, demoing as features land." },
      { title: "Review and adjust", body: "A monthly review tunes priorities, team size, and process." },
    ],
    faqs: [
      { q: "How is a dedicated team different from hiring employees?", a: "We handle hiring, payroll, leave, and bench. You get a stable team that keeps your systems running, without the overhead of employing engineers directly." },
      { q: "What if we only need part-time?", a: "Plans are sized in engineer increments — many teams start with one or two engineers and grow as the roadmap proves out." },
      { q: "Can this replace a fixed-quote project?", a: "Yes. If you know the outcome but the scope will keep moving, a dedicated team often suits better than a fixed quote, because changes don't restart negotiations." },
    ],
    related: ["it-consulting", "web-application-development", "maintenance-support"],
  },

  {
    slug: "it-consulting",
    name: "IT Consulting & Strategy",
    type: "service",
    shortSummary: "A stack audit and a technical roadmap scoped from your real workflows before you build.",
    metaDescription:
      "IT consulting and technology strategy from Rakebig — a stack audit and practical roadmap scoped from your real workflows before you spend on custom build.",
    heroTitle: "A clear technology plan before you spend",
    heroLead:
      "Before you pay for custom software, you should know it is the right call. We audit the tools you run, map what is broken, and give you a plain roadmap — buy, build, or automate — before a single line of code.",
    whatItIs: [
      "Consulting here is not a slide deck. We sit with your team, watch how work actually happens, and audit the software that supports it. Then we tell you plainly which systems are worth fixing, which to replace, and what to automate.",
      "The outcome is a written roadmap you can act on with any team — ours or someone else's. If a cheaper standard tool solves it, we say so. That honesty is why clients come back.",
    ],
    features: [
      { title: "Stack audit", body: "A review of your CRM, tools, and infrastructure with the gaps and risks spelled out." },
      { title: "Workflow mapping", body: "The manual steps and handoffs that cost your team time, documented in plain language." },
      { title: "Buy vs build advice", body: "A straight answer on whether a standard tool, a custom build, or automation is the right call." },
      { title: "Roadmap & estimates", body: "Prioritised next steps with realistic cost and timeline ranges, in writing." },
      { title: "AI opportunity scan", body: "Where automation and AI can remove real work — and where they would be a waste." },
    ],
    outcomes: [
      { label: "Spend on the right thing", body: "No budget wasted on software that misses the real problem." },
      { label: "A plan everyone can follow", body: "Clear priorities your team, investors, or a new vendor can execute." },
      { label: "Honest answers", body: "We recommend the cheapest fix that works — even if it isn't us." },
    ],
    steps: [
      { title: "Listen", body: "We interview the people who do the work and watch the tools in action." },
      { title: "Audit", body: "Systems, data, and infrastructure are reviewed against how work actually flows." },
      { title: "Write the roadmap", body: "You receive a plain-language plan: what to fix, buy, build, or automate, in order." },
      { title: "Decide together", body: "We walk you through the plan so you can act on it — with us or anyone." },
    ],
    faqs: [
      { q: "Do you charge for the initial consultation?", a: "The audit and roadmap are quoted up front at a fixed price, so you know the cost before we start. No open-ended consulting bills." },
      { q: "We already have a development team. Is consulting still useful?", a: "Often yes — an outside audit sees what an internal team has gone blind to, and the roadmap can be handed to your own engineers to execute." },
      { q: "Will you push us toward buying your services?", a: "No. The roadmap is written so it is honest either way, and it works with whichever vendor you choose." },
    ],
    related: ["perfex-crm-solutions", "ai-business-automation", "dedicated-team"],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export const offeringHref = (slug: string): string => `/services/${slug}`;

export function offeringBySlug(slug: string): Offering | undefined {
  return offerings.find((o) => o.slug === slug);
}

/** Returns the related offerings in the order they were listed. */
export function relatedOfferings(offering: Offering): Offering[] {
  const map = new Map(offerings.map((o) => [o.slug, o]));
  return offering.related.map((slug) => map.get(slug)).filter((o): o is Offering => Boolean(o));
}

// Build-time guard: fail loudly if a related slug doesn't exist or slugs collide.
const seen = new Set<string>();
for (const offering of offerings) {
  if (seen.has(offering.slug)) {
    throw new Error(`catalog.ts: duplicate offering slug "${offering.slug}"`);
  }
  seen.add(offering.slug);
  for (const rel of offering.related) {
    if (!seen.has(rel) && !offerings.some((o) => o.slug === rel)) {
      throw new Error(
        `catalog.ts: offering "${offering.slug}" references missing related slug "${rel}"`
      );
    }
  }
}
