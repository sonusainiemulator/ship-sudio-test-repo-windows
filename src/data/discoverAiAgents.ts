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
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/89f2bd03308a2cd79cc607a6e5e79c0e-1790498805453/a9fb6dde-8730-4051-ac24-5e08ad6638b7.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 17,
        priceUsd: 30,
        priceInr: 2550,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495865289/original/314cba346183b51eb9fe2155aec2b7c0b0cea2bf.jpg"
      },
      {
        id: "503861313",
        slug: "setup-gohighlevel-ghl-ai-voice-agent-chatbot-booking-vapi-retell-ai-automation",
        title: "I will setup gohighlevel ghl ai voice agent chatbot booking vapi retell ai automation",
        sellerName: "Sales Elevated",
        sellerUsername: "sales_elevated",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/51c4a17cfc49d8c4e46eaae093b46950-1736768228399/1e19cb64-d9ae-44d5-a339-dae967a5b3a4.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 36,
        priceUsd: 25,
        priceInr: 2125,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/503861313/original/83d7a8f8e1fae9ef0efebfa52be1bb3eef466a9c.png"
      },
      {
        id: "505501040",
        slug: "build-retell-ai-voice-agent-vapi-ai-calling-agent-ghl-voice-ai-cold-calling",
        title: "I will build retell ai voice agent, vapi ai calling agent, ghl voice ai cold calling",
        sellerName: "Jim D",
        sellerUsername: "jim_digits",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6fa1311ea35ffc2e40a02dbf02ae79fb-1738760975618/eb421422-9214-411a-abdf-2fc9dbdc3c3c.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 22,
        priceUsd: 25,
        priceInr: 2125,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/505501040/original/58e235fe60803c7379659b89d4fe0f77983637e7.png"
      },
      {
        id: "507761657",
        slug: "make-com-automation-airtable-database-airtable-crm-make-com-softr-expert-vapi-ai",
        title: "I will make com automation airtable database airtable CRM make com softr expert vapi ai",
        sellerName: "Caleb",
        sellerUsername: "expert__caleb",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9fc2b77cbf9b2e591ea70643eaad7d4f-1740924976721/8e1c667a-115f-4bf0-a35d-a60d0322b28c.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 14,
        priceUsd: 20,
        priceInr: 1700,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/507761657/original/35d0337c8651f84260f89832cce611a300d6fb92.png"
      },
      {
        id: "504938634",
        slug: "build-n8n-automation-make-com-automation-ai-voice-agent-with-vapi-and-retell",
        title: "I will build n8n automation, make com automation, ai voice agent with vapi and retell",
        sellerName: "Theophilus",
        sellerUsername: "theo_ai_dev",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/44f50f2aa7da6d396a40bf5e8e89f89e-1738152528751/6968ec9e-f4e9-4464-9430-c313ce474e2a.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 19,
        priceUsd: 10,
        priceInr: 850,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/504938634/original/6c65099d0ca9cb84f186ff9029d5b08e7a02798e.png"
      },
      {
        id: "507612143",
        slug: "build-ghl-conversation-ai-ghl-voice-ai-ghl-vapi-ai-ghl-automation-ghl-crm",
        title: "I will build ghl conversation ai, ghl voice ai, ghl vapi ai, ghl automation, ghl crm",
        sellerName: "Jason CRM",
        sellerUsername: "jason_crm_tech",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8834f89d5a9fae93f98242137688fa90-1740751912975/b8ee3467-3367-46e3-ae9e-128a1ce74c05.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 15,
        priceUsd: 20,
        priceInr: 1700,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/507612143/original/6636735e054ba9b76612e3ea86fb5a4982635904.png"
      },
      {
        id: "508316492",
        slug: "build-make-com-automation-ai-voice-agent-ai-receptionist-with-retell-vapi-n8n",
        title: "I will build make com automation ai voice agent ai receptionist with retell, vapi, n8n",
        sellerName: "Micky J",
        sellerUsername: "micky_techflow",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/329486c4765d7869ec11077759adfbce-1741364536214/eef66710-bc5c-4860-ae95-654cb29c3bfa.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 11,
        priceUsd: 25,
        priceInr: 2125,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/508316492/original/a0209ea1712a1f1a54fae78b17b20e0ffcfb8e21.png"
      },
      {
        id: "482315802",
        slug: "setup-n8n-ai-agents-zapier-make-vapi-ai-chatbots-and-n8n-workflow-automation",
        title: "I will setup n8n ai agents, zapier, make, vapi ai chatbots and n8n workflow automation",
        sellerName: "Sohrab",
        sellerUsername: "sohrab_ai_pro",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/1269ec4602f067d26bb2fa4c0d5e1ee7-1718878235614/77405be6-dbda-4ddf-99e7-f0d5718ee495.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 84,
        priceUsd: 50,
        priceInr: 4250,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/482315802/original/61f22ad8029fa03e87d46da975e5b302c342eb66.png"
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
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/4363ee0dae7c3b95eb0c50a1dfa0d182-1725884219451/72e811c4-b4a1-42e1-a070-5c6218d867c2.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 29,
        priceUsd: 80,
        priceInr: 6800,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/492110291/original/91b70d5fbfe1ad2db2ee6e996b79758e57ee714d.png"
      },
      {
        id: "478912389",
        slug: "build-ai-chatbot-whatsapp-chatbot-whatsapp-ai-agents-using-whatsapp-api",
        title: "I will build ai chatbot, whatsapp chatbot, whatsapp ai agents using whatsapp API",
        sellerName: "Adnan Ali",
        sellerUsername: "adnanali91",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e1bb425c2859942e584288d61b36be9f-1715421598463/7fe8466e-2191-4475-b9aa-7bf6ef0b40eb.png",
        sellerLevel: "Top Rated",
        rating: 5.0,
        reviewsCount: 142,
        priceUsd: 50,
        priceInr: 4250,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/478912389/original/8702c2e5b721ea7f12e2df0cf086ebf456108f9c.png"
      },
      {
        id: "488319201",
        slug: "be-generative-ai-ml-llm-engineer-ai-agent-ai-chatbot-python-full-stack-developer",
        title: "I will be generative ai ml llm engineer ai agent ai chatbot python full stack developer",
        sellerName: "Amperor",
        sellerUsername: "amperor285",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9b2762a78f24c3e800d927cfa0292728-1721021481198/088522ee-48c0-424f-b3a6-843eecbe0a59.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 47,
        priceUsd: 65,
        priceInr: 5525,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/488319201/original/2443ce4b47eb59c2794eb8e3ef34d3bb0e10b1dc.png"
      },
      {
        id: "501248102",
        slug: "develop-custom-ai-chatbot-for-website-mobile-app-and-crm",
        title: "I will develop custom ai chatbot for website, mobile app and CRM systems",
        sellerName: "DevPulse Studio",
        sellerUsername: "devpulse_ai",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/89f2bd03308a2cd79cc607a6e5e79c0e-1790498805453/a9fb6dde-8730-4051-ac24-5e08ad6638b7.png",
        sellerLevel: "Level 1",
        rating: 4.9,
        reviewsCount: 19,
        priceUsd: 35,
        priceInr: 2975,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495865289/original/314cba346183b51eb9fe2155aec2b7c0b0cea2bf.jpg"
      },
      {
        id: "499102482",
        slug: "build-customer-support-ai-chatbot-with-openai-rag-pinecone",
        title: "I will build customer support ai chatbot with openai RAG, pinecone and telegram integration",
        sellerName: "Alex Vance",
        sellerUsername: "alex_rag_dev",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/51c4a17cfc49d8c4e46eaae093b46950-1736768228399/1e19cb64-d9ae-44d5-a339-dae967a5b3a4.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 38,
        priceUsd: 45,
        priceInr: 3825,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/503861313/original/83d7a8f8e1fae9ef0efebfa52be1bb3eef466a9c.png"
      },
      {
        id: "502391004",
        slug: "create-manychat-ai-instagram-and-whatsapp-lead-generation-chatbot",
        title: "I will create manychat ai instagram and whatsapp lead generation chatbot",
        sellerName: "Sarah M",
        sellerUsername: "sarah_manychat",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6fa1311ea35ffc2e40a02dbf02ae79fb-1738760975618/eb421422-9214-411a-abdf-2fc9dbdc3c3c.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 26,
        priceUsd: 30,
        priceInr: 2550,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/505501040/original/58e235fe60803c7379659b89d4fe0f77983637e7.png"
      },
      {
        id: "506192831",
        slug: "build-ai-financial-advisor-and-appointment-scheduler-bot",
        title: "I will build ai financial advisor and appointment scheduler bot with cal com sync",
        sellerName: "Lucas Grey",
        sellerUsername: "lucas_ai_bots",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/44f50f2aa7da6d396a40bf5e8e89f89e-1738152528751/6968ec9e-f4e9-4464-9430-c313ce474e2a.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 14,
        priceUsd: 40,
        priceInr: 3400,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/504938634/original/6c65099d0ca9cb84f186ff9029d5b08e7a02798e.png"
      },
      {
        id: "508119283",
        slug: "setup-voiceflow-and-botpress-enterprise-ai-assistant",
        title: "I will setup voiceflow and botpress enterprise ai assistant for your business",
        sellerName: "Victor Hugo",
        sellerUsername: "victor_botpress",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/1269ec4602f067d26bb2fa4c0d5e1ee7-1718878235614/77405be6-dbda-4ddf-99e7-f0d5718ee495.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 52,
        priceUsd: 60,
        priceInr: 5100,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/482315802/original/61f22ad8029fa03e87d46da975e5b302c342eb66.png"
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
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/4363ee0dae7c3b95eb0c50a1dfa0d182-1725884219451/72e811c4-b4a1-42e1-a070-5c6218d867c2.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 63,
        priceUsd: 40,
        priceInr: 3400,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/507761657/original/35d0337c8651f84260f89832cce611a300d6fb92.png"
      },
      {
        id: "497182930",
        slug: "build-ai-automation-workflows-ai-agent-systems-for-your-business-make-zapier-n8n",
        title: "I will build ai automation workflows, ai agent systems for your business make zapier n8n",
        sellerName: "Writer 19 Hours",
        sellerUsername: "writer_19hours",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8834f89d5a9fae93f98242137688fa90-1740751912975/b8ee3467-3367-46e3-ae9e-128a1ce74c05.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 28,
        priceUsd: 35,
        priceInr: 2975,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/507612143/original/6636735e054ba9b76612e3ea86fb5a4982635904.png"
      },
      {
        id: "501928374",
        slug: "zapier-automation-asana-make-com-api-webhook-post-get-trello-make-figma-jira-n8n",
        title: "I will do zapier automation asana make com api webhook post get trello make figma jira n8n",
        sellerName: "Deborah",
        sellerUsername: "deborah_ade022",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/329486c4765d7869ec11077759adfbce-1741364536214/eef66710-bc5c-4860-ae95-654cb29c3bfa.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 18,
        priceUsd: 25,
        priceInr: 2125,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/508316492/original/a0209ea1712a1f1a54fae78b17b20e0ffcfb8e21.png"
      },
      {
        id: "504829103",
        slug: "connect-hubspot-salesforce-stripe-using-custom-make-and-n8n-nodes",
        title: "I will connect hubspot salesforce stripe using custom make and n8n nodes",
        sellerName: "Marcus Ray",
        sellerUsername: "marcus_automations",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6fa1311ea35ffc2e40a02dbf02ae79fb-1738760975618/eb421422-9214-411a-abdf-2fc9dbdc3c3c.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 41,
        priceUsd: 45,
        priceInr: 3825,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/505501040/original/58e235fe60803c7379659b89d4fe0f77983637e7.png"
      },
      {
        id: "506721948",
        slug: "build-ai-invoice-processing-ocr-workflow-in-make-com-and-airtable",
        title: "I will build ai invoice processing ocr workflow in make com and airtable",
        sellerName: "Elena Rostova",
        sellerUsername: "elena_flows",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/51c4a17cfc49d8c4e46eaae093b46950-1736768228399/1e19cb64-d9ae-44d5-a339-dae967a5b3a4.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 22,
        priceUsd: 50,
        priceInr: 4250,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/503861313/original/83d7a8f8e1fae9ef0efebfa52be1bb3eef466a9c.png"
      },
      {
        id: "509182374",
        slug: "build-automated-lead-qualification-funnel-with-gpt4-and-slack",
        title: "I will build automated lead qualification funnel with gpt4 and slack notifications",
        sellerName: "Daniel K",
        sellerUsername: "daniel_funnels",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/89f2bd03308a2cd79cc607a6e5e79c0e-1790498805453/a9fb6dde-8730-4051-ac24-5e08ad6638b7.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 16,
        priceUsd: 30,
        priceInr: 2550,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495865289/original/314cba346183b51eb9fe2155aec2b7c0b0cea2bf.jpg"
      },
      {
        id: "482315802b",
        slug: "deploy-open-source-n8n-on-vps-with-postgresql-and-ai-connectors",
        title: "I will deploy open source n8n on vps with postgresql and ai connectors",
        sellerName: "Sohrab",
        sellerUsername: "sohrab_ai_pro",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/1269ec4602f067d26bb2fa4c0d5e1ee7-1718878235614/77405be6-dbda-4ddf-99e7-f0d5718ee495.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 84,
        priceUsd: 50,
        priceInr: 4250,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/482315802/original/61f22ad8029fa03e87d46da975e5b302c342eb66.png"
      },
      {
        id: "504938634b",
        slug: "automate-customer-onboarding-with-stripe-notion-and-sendgrid",
        title: "I will automate customer onboarding with stripe notion and sendgrid",
        sellerName: "Theophilus",
        sellerUsername: "theo_ai_dev",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/44f50f2aa7da6d396a40bf5e8e89f89e-1738152528751/6968ec9e-f4e9-4464-9430-c313ce474e2a.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 19,
        priceUsd: 20,
        priceInr: 1700,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/504938634/original/6c65099d0ca9cb84f186ff9029d5b08e7a02798e.png"
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
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/4363ee0dae7c3b95eb0c50a1dfa0d182-1725884219451/72e811c4-b4a1-42e1-a070-5c6218d867c2.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 37,
        priceUsd: 40,
        priceInr: 3400,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/503861313/original/83d7a8f8e1fae9ef0efebfa52be1bb3eef466a9c.png"
      },
      {
        id: "498716253",
        slug: "build-ai-automation-fix-make-com-n8n-zapier-apify-build-n8n-automation",
        title: "I will build ai automation, fix make com n8n zapier, apify, build n8n automation",
        sellerName: "Dare Olarinre",
        sellerUsername: "dareolarinre",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/89f2bd03308a2cd79cc607a6e5e79c0e-1790498805453/a9fb6dde-8730-4051-ac24-5e08ad6638b7.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 24,
        priceUsd: 25,
        priceInr: 2125,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495865289/original/314cba346183b51eb9fe2155aec2b7c0b0cea2bf.jpg"
      },
      {
        id: "502819201",
        slug: "web-scraping-data-extraction-on-bright-data-zenrow-apify-n8n-firecrawl-supabase",
        title: "I will do web scraping data extraction on bright data, zenrow apify n8n firecrawl supabase",
        sellerName: "Dane Buds",
        sellerUsername: "danebuds",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6fa1311ea35ffc2e40a02dbf02ae79fb-1738760975618/eb421422-9214-411a-abdf-2fc9dbdc3c3c.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 58,
        priceUsd: 50,
        priceInr: 4250,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/505501040/original/58e235fe60803c7379659b89d4fe0f77983637e7.png"
      },
      {
        id: "506192837",
        slug: "scrape-google-maps-leads-with-ai-phone-and-email-enrichment",
        title: "I will scrape google maps leads with ai phone and email enrichment",
        sellerName: "Leonid Tech",
        sellerUsername: "leonid_scrape",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/51c4a17cfc49d8c4e46eaae093b46950-1736768228399/1e19cb64-d9ae-44d5-a339-dae967a5b3a4.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 31,
        priceUsd: 30,
        priceInr: 2550,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/507761657/original/35d0337c8651f84260f89832cce611a300d6fb92.png"
      },
      {
        id: "507192841",
        slug: "build-linkedin-profile-scraper-with-anti-bot-bypass-and-csv-export",
        title: "I will build linkedin profile scraper with anti bot bypass and csv export",
        sellerName: "Pavel K",
        sellerUsername: "pavel_crawlers",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8834f89d5a9fae93f98242137688fa90-1740751912975/b8ee3467-3367-46e3-ae9e-128a1ce74c05.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 19,
        priceUsd: 45,
        priceInr: 3825,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/507612143/original/6636735e054ba9b76612e3ea86fb5a4982635904.png"
      },
      {
        id: "508192855",
        slug: "create-custom-ecommerce-product-price-monitoring-bot-with-alerts",
        title: "I will create custom ecommerce product price monitoring bot with alerts",
        sellerName: "Zack Martin",
        sellerUsername: "zack_monitors",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/329486c4765d7869ec11077759adfbce-1741364536214/eef66710-bc5c-4860-ae95-654cb29c3bfa.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 15,
        priceUsd: 35,
        priceInr: 2975,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/508316492/original/a0209ea1712a1f1a54fae78b17b20e0ffcfb8e21.png"
      },
      {
        id: "482315802c",
        slug: "build-playwright-and-puppeteer-headless-browser-automation",
        title: "I will build playwright and puppeteer headless browser automation",
        sellerName: "Sohrab",
        sellerUsername: "sohrab_ai_pro",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/1269ec4602f067d26bb2fa4c0d5e1ee7-1718878235614/77405be6-dbda-4ddf-99e7-f0d5718ee495.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 84,
        priceUsd: 55,
        priceInr: 4675,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/482315802/original/61f22ad8029fa03e87d46da975e5b302c342eb66.png"
      },
      {
        id: "504938634c",
        slug: "scrape-real-estate-listings-into-airtable-with-automated-ai-summaries",
        title: "I will scrape real estate listings into airtable with automated ai summaries",
        sellerName: "Theophilus",
        sellerUsername: "theo_ai_dev",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/44f50f2aa7da6d396a40bf5e8e89f89e-1738152528751/6968ec9e-f4e9-4464-9430-c313ce474e2a.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 19,
        priceUsd: 25,
        priceInr: 2125,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/504938634/original/6c65099d0ca9cb84f186ff9029d5b08e7a02798e.png"
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
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/4363ee0dae7c3b95eb0c50a1dfa0d182-1725884219451/72e811c4-b4a1-42e1-a070-5c6218d867c2.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 23,
        priceUsd: 30,
        priceInr: 2550,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/508316492/original/a0209ea1712a1f1a54fae78b17b20e0ffcfb8e21.png"
      },
      {
        id: "498192850",
        slug: "n8n-wordpress-automation-zapier-n8n-social-media-automation-make-com-whatsapp-api",
        title: "I will do n8n wordpres automation zapier n8n social media automation make com whatsapp api",
        sellerName: "Olaluji Victor",
        sellerUsername: "olaluji_victor",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/89f2bd03308a2cd79cc607a6e5e79c0e-1790498805453/a9fb6dde-8730-4051-ac24-5e08ad6638b7.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 46,
        priceUsd: 40,
        priceInr: 3400,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/507612143/original/6636735e054ba9b76612e3ea86fb5a4982635904.png"
      },
      {
        id: "501928471",
        slug: "make-social-media-automation-n8n-social-media-ai-automation-make-com-automation",
        title: "I will make social media automation n8n social media ai automation make com automation",
        sellerName: "Mazee Tech",
        sellerUsername: "mazee_tech",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6fa1311ea35ffc2e40a02dbf02ae79fb-1738760975618/eb421422-9214-411a-abdf-2fc9dbdc3c3c.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 31,
        priceUsd: 35,
        priceInr: 2975,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/507761657/original/35d0337c8651f84260f89832cce611a300d6fb92.png"
      },
      {
        id: "505501040b",
        slug: "build-ai-ugc-and-faceless-tiktok-youtube-shorts-video-generator",
        title: "I will build ai ugc and faceless tiktok youtube shorts video generator bot",
        sellerName: "Jim D",
        sellerUsername: "jim_digits",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6fa1311ea35ffc2e40a02dbf02ae79fb-1738760975618/eb421422-9214-411a-abdf-2fc9dbdc3c3c.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 22,
        priceUsd: 50,
        priceInr: 4250,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/505501040/original/58e235fe60803c7379659b89d4fe0f77983637e7.png"
      },
      {
        id: "503861313b",
        slug: "automate-instagram-dm-engagement-funnel-with-ai-voice-notes",
        title: "I will automate instagram DM engagement funnel with ai voice notes and cal booking",
        sellerName: "Sales Elevated",
        sellerUsername: "sales_elevated",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/51c4a17cfc49d8c4e46eaae093b46950-1736768228399/1e19cb64-d9ae-44d5-a339-dae967a5b3a4.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 36,
        priceUsd: 45,
        priceInr: 3825,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/503861313/original/83d7a8f8e1fae9ef0efebfa52be1bb3eef466a9c.png"
      },
      {
        id: "495865289b",
        slug: "setup-ai-linkedin-content-scheduler-and-comment-reply-engine",
        title: "I will setup ai linkedin content scheduler and comment reply engine in n8n",
        sellerName: "Palok",
        sellerUsername: "ai_vault1",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/89f2bd03308a2cd79cc607a6e5e79c0e-1790498805453/a9fb6dde-8730-4051-ac24-5e08ad6638b7.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 17,
        priceUsd: 35,
        priceInr: 2975,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/495865289/original/314cba346183b51eb9fe2155aec2b7c0b0cea2bf.jpg"
      },
      {
        id: "504938634d",
        slug: "connect-canva-api-to-n8n-for-automated-social-graphics-generation",
        title: "I will connect canva api to n8n for automated social graphics generation and posting",
        sellerName: "Theophilus",
        sellerUsername: "theo_ai_dev",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/44f50f2aa7da6d396a40bf5e8e89f89e-1738152528751/6968ec9e-f4e9-4464-9430-c313ce474e2a.png",
        sellerLevel: "Level 1",
        rating: 5.0,
        reviewsCount: 19,
        priceUsd: 30,
        priceInr: 2550,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/504938634/original/6c65099d0ca9cb84f186ff9029d5b08e7a02798e.png"
      },
      {
        id: "482315802d",
        slug: "build-multi-platform-auto-poster-for-x-bluesky-linkedin-threads",
        title: "I will build multi platform auto poster for x, bluesky, linkedin, threads using ai",
        sellerName: "Sohrab",
        sellerUsername: "sohrab_ai_pro",
        sellerAvatar: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/1269ec4602f067d26bb2fa4c0d5e1ee7-1718878235614/77405be6-dbda-4ddf-99e7-f0d5718ee495.png",
        sellerLevel: "Level 2",
        rating: 5.0,
        reviewsCount: 84,
        priceUsd: 60,
        priceInr: 5100,
        thumbnail: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/482315802/original/61f22ad8029fa03e87d46da975e5b302c342eb66.png"
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
