export interface DiscoverGigItem {
  id: string;
  slug: string;
  title: string;
  sellerName: string;
  sellerUsername: string;
  sellerAvatar: string;
  sellerLevel: string;
  rating: number;
  reviewsCount: number;
  priceUsd: number;
  priceInr: number;
  thumbnail: string;
  badge?: string;
}

export interface DiscoverTab {
  id: string;
  name: string;
  browseBtnText: string;
  browseQuery: string;
  gigs: DiscoverGigItem[];
}

export const DISCOVER_AI_TABS: DiscoverTab[] = [
  {
    id: "ai-voice-calls",
    name: "AI Voice Calls",
    browseBtnText: "Browse AI Voice Agents Developers",
    browseQuery: "ai-voice-agents",
    gigs: [
      {
        id: "495865289",
        slug: "be-ai-developer-for-vapi-ai-chatbot-ai-agent-in-ai-mobile-app-ai-website",
        title: "I will be ai developer for vapi ai chatbot, ai agent in ai mobile app, ai website",
        sellerName: "Palok",
        sellerUsername: "ai_vault1",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 17,
        priceUsd: 30,
        priceInr: 2550,
        thumbnail: "/assets/gigs/discover/gig-495865289.webp"
      },
      {
        id: "503861313",
        slug: "setup-gohighlevel-ghl-ai-voice-agent-chatbot-booking-vapi-retell-ai-automation",
        title: "I will setup gohighlevel ghl ai voice agent chatbot booking vapi retell ai automation",
        sellerName: "Sales Elevated",
        sellerUsername: "sales_elevated",
        sellerAvatar: "/assets/gigs/avatars/avatar-sales_elevated.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 36,
        priceUsd: 25,
        priceInr: 2125,
        thumbnail: "/assets/gigs/discover/gig-503861313.webp"
      },
      {
        id: "505501040",
        slug: "build-retell-ai-voice-agent-vapi-ai-calling-agent-ghl-voice-ai-cold-calling",
        title: "I will build retell ai voice agent, vapi ai calling agent, ghl voice ai cold calling",
        sellerName: "Jim D",
        sellerUsername: "jim_digits",
        sellerAvatar: "/assets/gigs/avatars/avatar-jim_digits.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 22,
        priceUsd: 25,
        priceInr: 2125,
        thumbnail: "/assets/gigs/discover/gig-505501040.webp"
      },
      {
        id: "507761657",
        slug: "make-com-automation-airtable-database-airtable-crm-make-com-softr-expert-vapi-ai",
        title: "I will make com automation airtable database airtable CRM make com softr expert vapi ai",
        sellerName: "Caleb",
        sellerUsername: "expert__caleb",
        sellerAvatar: "/assets/gigs/avatars/avatar-expert__caleb.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 14,
        priceUsd: 20,
        priceInr: 1700,
        thumbnail: "/assets/gigs/discover/gig-507761657.webp"
      },
      {
        id: "504938634",
        slug: "build-n8n-automation-make-com-automation-ai-voice-agent-with-vapi-and-retell",
        title: "I will build n8n automation, make com automation, ai voice agent with vapi and retell",
        sellerName: "Theophilus",
        sellerUsername: "theo_ai_dev",
        sellerAvatar: "/assets/gigs/avatars/avatar-theo_ai_dev.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 19,
        priceUsd: 10,
        priceInr: 850,
        thumbnail: "/assets/gigs/discover/gig-504938634.webp"
      },
      {
        id: "507612143",
        slug: "build-ghl-conversation-ai-ghl-voice-ai-ghl-vapi-ai-ghl-automation-ghl-crm",
        title: "I will build ghl conversation ai, ghl voice ai, ghl vapi ai, ghl automation, ghl crm",
        sellerName: "Jason CRM",
        sellerUsername: "jason_crm_tech",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 15,
        priceUsd: 20,
        priceInr: 1700,
        thumbnail: "/assets/gigs/discover/gig-507612143.webp"
      },
      {
        id: "508316492",
        slug: "build-make-com-automation-ai-voice-agent-ai-receptionist-with-retell-vapi-n8n",
        title: "I will build make com automation ai voice agent ai receptionist with retell, vapi, n8n",
        sellerName: "Micky J",
        sellerUsername: "micky_techflow",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 11,
        priceUsd: 25,
        priceInr: 2125,
        thumbnail: "/assets/gigs/discover/gig-508316492.webp"
      },
      {
        id: "482315802",
        slug: "setup-n8n-ai-agents-zapier-make-vapi-ai-chatbots-and-n8n-workflow-automation",
        title: "I will setup n8n ai agents, zapier, make, vapi ai chatbots and n8n workflow automation",
        sellerName: "Sohrab",
        sellerUsername: "sohrab_ai_pro",
        sellerAvatar: "/assets/gigs/avatars/avatar-sohrab_ai_pro.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 84,
        priceUsd: 50,
        priceInr: 4250,
        thumbnail: "/assets/gigs/discover/gig-482315802.webp"
      }
    ]
  },
  {
    id: "ai-chatbot",
    name: "AI Chatbot",
    browseBtnText: "Browse AI Chatbot Developers",
    browseQuery: "ai-chatbot",
    gigs: [
      {
        id: "492110291",
        slug: "do-ai-mobile-app-development-ai-web-app-and-whatsapp-ai-chatbot",
        title: "I will do ai mobile app development, ai web app and whatsapp ai chatbot",
        sellerName: "FFNA Solutions",
        sellerUsername: "ffna_sol",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 29,
        priceUsd: 80,
        priceInr: 6800,
        thumbnail: "/assets/gigs/discover/gig-492110291.webp"
      },
      {
        id: "478912389",
        slug: "build-ai-chatbot-whatsapp-chatbot-whatsapp-ai-agents-using-whatsapp-api",
        title: "I will build ai chatbot, whatsapp chatbot, whatsapp ai agents using whatsapp API",
        sellerName: "Adnan Ali",
        sellerUsername: "adnanali91",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Top Rated",
        rating: 5.0,
        reviewsCount: 142,
        priceUsd: 50,
        priceInr: 4250,
        thumbnail: "/assets/gigs/discover/gig-478912389.webp"
      },
      {
        id: "488319201",
        slug: "be-generative-ai-ml-llm-engineer-ai-agent-ai-chatbot-python-full-stack-developer",
        title: "I will be generative ai ml llm engineer ai agent ai chatbot python full stack developer",
        sellerName: "Amperor",
        sellerUsername: "amperor285",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 47,
        priceUsd: 65,
        priceInr: 5525,
        thumbnail: "/assets/gigs/discover/gig-488319201.webp"
      },
      {
        id: "501248102",
        slug: "develop-custom-ai-chatbot-for-website-mobile-app-and-crm",
        title: "I will develop custom ai chatbot for website, mobile app and CRM systems",
        sellerName: "DevPulse Studio",
        sellerUsername: "devpulse_ai",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 4.9,
        reviewsCount: 19,
        priceUsd: 35,
        priceInr: 2975,
        thumbnail: "/assets/gigs/discover/gig-501248102.webp"
      },
      {
        id: "499102482",
        slug: "build-customer-support-ai-chatbot-with-openai-rag-pinecone",
        title: "I will build customer support ai chatbot with openai RAG, pinecone and telegram integration",
        sellerName: "Alex Vance",
        sellerUsername: "alex_rag_dev",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 38,
        priceUsd: 45,
        priceInr: 3825,
        thumbnail: "/assets/gigs/discover/gig-499102482.webp"
      },
      {
        id: "502391004",
        slug: "create-manychat-ai-instagram-and-whatsapp-lead-generation-chatbot",
        title: "I will create manychat ai instagram and whatsapp lead generation chatbot",
        sellerName: "Sarah M",
        sellerUsername: "sarah_manychat",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 26,
        priceUsd: 30,
        priceInr: 2550,
        thumbnail: "/assets/gigs/discover/gig-502391004.webp"
      },
      {
        id: "506192831",
        slug: "build-ai-financial-advisor-and-appointment-scheduler-bot",
        title: "I will build ai financial advisor and appointment scheduler bot with cal com sync",
        sellerName: "Lucas Grey",
        sellerUsername: "lucas_ai_bots",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 14,
        priceUsd: 40,
        priceInr: 3400,
        thumbnail: "/assets/gigs/discover/gig-506192831.webp"
      },
      {
        id: "508119283",
        slug: "setup-voiceflow-and-botpress-enterprise-ai-assistant",
        title: "I will setup voiceflow and botpress enterprise ai assistant for your business",
        sellerName: "Victor Hugo",
        sellerUsername: "victor_botpress",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 52,
        priceUsd: 60,
        priceInr: 5100,
        thumbnail: "/assets/gigs/discover/gig-508119283.webp"
      }
    ]
  },
  {
    id: "ai-workflows",
    name: "AI Workflows",
    browseBtnText: "Browse AI Workflows",
    browseQuery: "ai-workflows",
    gigs: [
      {
        id: "498219481",
        slug: "build-make-com-automation-zapier-n8n-workflow-automation",
        title: "I will build make com automation, zapier n8n workflow automation",
        sellerName: "SamuFlow",
        sellerUsername: "samuflow",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 63,
        priceUsd: 40,
        priceInr: 3400,
        thumbnail: "/assets/gigs/discover/gig-498219481.webp"
      },
      {
        id: "497182930",
        slug: "build-ai-automation-workflows-ai-agent-systems-for-your-business-make-zapier-n8n",
        title: "I will build ai automation workflows, ai agent systems for your business make zapier n8n",
        sellerName: "Writer 19 Hours",
        sellerUsername: "writer_19hours",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 28,
        priceUsd: 35,
        priceInr: 2975,
        thumbnail: "/assets/gigs/discover/gig-497182930.webp"
      },
      {
        id: "501928374",
        slug: "zapier-automation-asana-make-com-api-webhook-post-get-trello-make-figma-jira-n8n",
        title: "I will do zapier automation asana make com api webhook post get trello make figma jira n8n",
        sellerName: "Deborah",
        sellerUsername: "deborah_ade022",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 18,
        priceUsd: 25,
        priceInr: 2125,
        thumbnail: "/assets/gigs/discover/gig-501928374.webp"
      },
      {
        id: "504829103",
        slug: "connect-hubspot-salesforce-stripe-using-custom-make-and-n8n-nodes",
        title: "I will connect hubspot salesforce stripe using custom make and n8n nodes",
        sellerName: "Marcus Ray",
        sellerUsername: "marcus_automations",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 41,
        priceUsd: 45,
        priceInr: 3825,
        thumbnail: "/assets/gigs/discover/gig-504829103.webp"
      },
      {
        id: "506721948",
        slug: "build-ai-invoice-processing-ocr-workflow-in-make-com-and-airtable",
        title: "I will build ai invoice processing ocr workflow in make com and airtable",
        sellerName: "Elena Rostova",
        sellerUsername: "elena_flows",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 22,
        priceUsd: 50,
        priceInr: 4250,
        thumbnail: "/assets/gigs/discover/gig-506721948.webp"
      },
      {
        id: "509182374",
        slug: "build-automated-lead-qualification-funnel-with-gpt4-and-slack",
        title: "I will build automated lead qualification funnel with gpt4 and slack notifications",
        sellerName: "Daniel K",
        sellerUsername: "daniel_funnels",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 16,
        priceUsd: 30,
        priceInr: 2550,
        thumbnail: "/assets/gigs/discover/gig-509182374.webp"
      },
      {
        id: "482315802b",
        slug: "deploy-open-source-n8n-on-vps-with-postgresql-and-ai-connectors",
        title: "I will deploy open source n8n on vps with postgresql and ai connectors",
        sellerName: "Sohrab",
        sellerUsername: "sohrab_ai_pro",
        sellerAvatar: "/assets/gigs/avatars/avatar-sohrab_ai_pro.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 84,
        priceUsd: 50,
        priceInr: 4250,
        thumbnail: "/assets/gigs/discover/gig-482315802b.webp"
      },
      {
        id: "504938634b",
        slug: "automate-customer-onboarding-with-stripe-notion-and-sendgrid",
        title: "I will automate customer onboarding with stripe notion and sendgrid",
        sellerName: "Theophilus",
        sellerUsername: "theo_ai_dev",
        sellerAvatar: "/assets/gigs/avatars/avatar-theo_ai_dev.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 19,
        priceUsd: 20,
        priceInr: 1700,
        thumbnail: "/assets/gigs/discover/gig-504938634b.webp"
      }
    ]
  },
  {
    id: "ai-scraping",
    name: "AI Scraping",
    browseBtnText: "Browse AI Scraping Experts",
    browseQuery: "ai-scraping",
    gigs: [
      {
        id: "496182910",
        slug: "build-apify-web-scraping-automation-with-ai-data-extraction",
        title: "I will build apify web scraping automation with ai data extraction",
        sellerName: "Hussain Zaydi",
        sellerUsername: "hussainzaydi_",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 37,
        priceUsd: 40,
        priceInr: 3400,
        thumbnail: "/assets/gigs/discover/gig-496182910.webp"
      },
      {
        id: "498716253",
        slug: "build-ai-automation-fix-make-com-n8n-zapier-apify-build-n8n-automation",
        title: "I will build ai automation, fix make com n8n zapier, apify, build n8n automation",
        sellerName: "Dare Olarinre",
        sellerUsername: "dareolarinre",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 24,
        priceUsd: 25,
        priceInr: 2125,
        thumbnail: "/assets/gigs/discover/gig-498716253.webp"
      },
      {
        id: "502819201",
        slug: "web-scraping-data-extraction-on-bright-data-zenrow-apify-n8n-firecrawl-supabase",
        title: "I will do web scraping data extraction on bright data, zenrow apify n8n firecrawl supabase",
        sellerName: "Dane Buds",
        sellerUsername: "danebuds",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 58,
        priceUsd: 50,
        priceInr: 4250,
        thumbnail: "/assets/gigs/discover/gig-502819201.webp"
      },
      {
        id: "506192837",
        slug: "scrape-google-maps-leads-with-ai-phone-and-email-enrichment",
        title: "I will scrape google maps leads with ai phone and email enrichment",
        sellerName: "Leonid Tech",
        sellerUsername: "leonid_scrape",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 31,
        priceUsd: 30,
        priceInr: 2550,
        thumbnail: "/assets/gigs/discover/gig-506192837.webp"
      },
      {
        id: "507192841",
        slug: "build-linkedin-profile-scraper-with-anti-bot-bypass-and-csv-export",
        title: "I will build linkedin profile scraper with anti bot bypass and csv export",
        sellerName: "Pavel K",
        sellerUsername: "pavel_crawlers",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 19,
        priceUsd: 45,
        priceInr: 3825,
        thumbnail: "/assets/gigs/discover/gig-507192841.webp"
      },
      {
        id: "508192855",
        slug: "create-custom-ecommerce-product-price-monitoring-bot-with-alerts",
        title: "I will create custom ecommerce product price monitoring bot with alerts",
        sellerName: "Zack Martin",
        sellerUsername: "zack_monitors",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 15,
        priceUsd: 35,
        priceInr: 2975,
        thumbnail: "/assets/gigs/discover/gig-508192855.webp"
      },
      {
        id: "482315802c",
        slug: "build-playwright-and-puppeteer-headless-browser-automation",
        title: "I will build playwright and puppeteer headless browser automation",
        sellerName: "Sohrab",
        sellerUsername: "sohrab_ai_pro",
        sellerAvatar: "/assets/gigs/avatars/avatar-sohrab_ai_pro.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 84,
        priceUsd: 55,
        priceInr: 4675,
        thumbnail: "/assets/gigs/discover/gig-482315802c.webp"
      },
      {
        id: "504938634c",
        slug: "scrape-real-estate-listings-into-airtable-with-automated-ai-summaries",
        title: "I will scrape real estate listings into airtable with automated ai summaries",
        sellerName: "Theophilus",
        sellerUsername: "theo_ai_dev",
        sellerAvatar: "/assets/gigs/avatars/avatar-theo_ai_dev.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 19,
        priceUsd: 25,
        priceInr: 2125,
        thumbnail: "/assets/gigs/discover/gig-504938634c.webp"
      }
    ]
  },
  {
    id: "ai-social-media-automation",
    name: "AI Social Media Automation",
    browseBtnText: "Browse Social Media Automation Experts",
    browseQuery: "ai-social-media",
    gigs: [
      {
        id: "495192841",
        slug: "n8n-youtube-automation-social-media-auto-post-n8n-n8n-ai-video-automation",
        title: "I will do n8n youtube automation, social media auto post n8n, n8n ai video automation",
        sellerName: "Yemisi Tech",
        sellerUsername: "yemisi_tech",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 23,
        priceUsd: 30,
        priceInr: 2550,
        thumbnail: "/assets/gigs/discover/gig-495192841.webp"
      },
      {
        id: "498192850",
        slug: "n8n-wordpress-automation-zapier-n8n-social-media-automation-make-com-whatsapp-api",
        title: "I will do n8n wordpres automation zapier n8n social media automation make com whatsapp api",
        sellerName: "Olaluji Victor",
        sellerUsername: "olaluji_victor",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 46,
        priceUsd: 40,
        priceInr: 3400,
        thumbnail: "/assets/gigs/discover/gig-498192850.webp"
      },
      {
        id: "501928471",
        slug: "make-social-media-automation-n8n-social-media-ai-automation-make-com-automation",
        title: "I will make social media automation n8n social media ai automation make com automation",
        sellerName: "Mazee Tech",
        sellerUsername: "mazee_tech",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 31,
        priceUsd: 35,
        priceInr: 2975,
        thumbnail: "/assets/gigs/discover/gig-501928471.webp"
      },
      {
        id: "505501040b",
        slug: "build-ai-ugc-and-faceless-tiktok-youtube-shorts-video-generator",
        title: "I will build ai ugc and faceless tiktok youtube shorts video generator bot",
        sellerName: "Jim D",
        sellerUsername: "jim_digits",
        sellerAvatar: "/assets/gigs/avatars/avatar-jim_digits.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 22,
        priceUsd: 50,
        priceInr: 4250,
        thumbnail: "/assets/gigs/discover/gig-505501040b.webp"
      },
      {
        id: "503861313b",
        slug: "automate-instagram-dm-engagement-funnel-with-ai-voice-notes",
        title: "I will automate instagram DM engagement funnel with ai voice notes and cal booking",
        sellerName: "Sales Elevated",
        sellerUsername: "sales_elevated",
        sellerAvatar: "/assets/gigs/avatars/avatar-sales_elevated.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 36,
        priceUsd: 45,
        priceInr: 3825,
        thumbnail: "/assets/gigs/discover/gig-503861313b.webp"
      },
      {
        id: "495865289b",
        slug: "setup-ai-linkedin-content-scheduler-and-comment-reply-engine",
        title: "I will setup ai linkedin content scheduler and comment reply engine in n8n",
        sellerName: "Palok",
        sellerUsername: "ai_vault1",
        sellerAvatar: "/assets/gigs/avatars/avatar-ai_vault1.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 17,
        priceUsd: 35,
        priceInr: 2975,
        thumbnail: "/assets/gigs/discover/gig-495865289b.webp"
      },
      {
        id: "504938634d",
        slug: "connect-canva-api-to-n8n-for-automated-social-graphics-generation",
        title: "I will connect canva api to n8n for automated social graphics generation and posting",
        sellerName: "Theophilus",
        sellerUsername: "theo_ai_dev",
        sellerAvatar: "/assets/gigs/avatars/avatar-theo_ai_dev.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 19,
        priceUsd: 30,
        priceInr: 2550,
        thumbnail: "/assets/gigs/discover/gig-504938634d.webp"
      },
      {
        id: "482315802d",
        slug: "build-multi-platform-auto-poster-for-x-bluesky-linkedin-threads",
        title: "I will build multi platform auto poster for x, bluesky, linkedin, threads using ai",
        sellerName: "Sohrab",
        sellerUsername: "sohrab_ai_pro",
        sellerAvatar: "/assets/gigs/avatars/avatar-sohrab_ai_pro.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 84,
        priceUsd: 60,
        priceInr: 5100,
        thumbnail: "/assets/gigs/discover/gig-482315802d.webp"
      }
    ]
  }
];

export const DISCOVER_PILLARS = [
  {
    number: "1",
    title: "AI Voice Agents",
    items: [
      { highlight: "Answer customer calls", rest: "24/7 automatically" },
      { highlight: "Book appointments", rest: "over the phone" },
      { highlight: "Handle FAQs", rest: "(hours, services, location)" },
      { highlight: "Route calls", rest: "to your cell" },
      { highlight: "Free you up", rest: "to focus on clients, not the phone" },
    ]
  },
  {
    number: "2",
    title: "AI Chatbots",
    items: [
      { highlight: "Reply instantly", rest: "to incoming texts" },
      { highlight: "Message back customers", rest: "on Instagram or Facebook" },
      { highlight: "Help schedule appointments", rest: "or answer questions" },
      { highlight: "Send reminders", rest: "or follow-ups" },
      { highlight: "Keep clients engaged", rest: "— even when you're busy" },
    ]
  },
  {
    number: "3",
    title: "AI Expert Consulting",
    items: [
      { highlight: "Understand", rest: "how AI can grow your business" },
      { highlight: "Learn", rest: "what tools actually fit your business" },
      { highlight: "Avoid trial and error", rest: "with expert help" },
      { highlight: "Save time", rest: "by automating common tasks" },
      { highlight: "Get a personalized", rest: "AI plan" },
    ]
  }
];
