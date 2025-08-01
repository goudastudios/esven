const portfolioData = [
  {
    id: "upandup",
    name: "Up & Up",
    description:
      "Up&Up helps renters build wealth through profit-sharing rentals while maintaining full control of their living situation.",
    logo: "/assets/images/portfolio/upandup.png",
    status: "active",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$300M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: ["real estate", "rentals", "mortgages"],
    links: [
      { text: "Website", url: "https://www.upandup.co/" },
      {
        text: "News",
        url: "https://upandup.co/stories",
      },
    ],
    categories: ["fintech"],
  },
  {
    id: "petzey",
    name: "Petzey",
    description:
      "Petzey offers on-demand video vet consultations through a mobile app, connecting pet owners with licensed veterinarians 24/7.",
    logo: "/assets/images/portfolio/petzey.png",
    status: "active",
    metrics: [
      { value: "Crowdfunding", label: "Stage" },
      { value: "$2M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: [
      "Pet Tech",
      "Veterinary telehealth",
      "Mobile health",
      "robotics",
      "Virtual vets",
    ],
    links: [
      { text: "Website", url: "https://petzey.com/" },
      {
        text: "News",
        url: "https://petzey.com/blog",
      },
    ],
    categories: ["consumer"],
  },

  {
    id: "argyle",
    name: "Argyle",
    description:
      "Argyle's payroll connectivity platform enables instant income and employment verification for lending, mortgages, and tenant screening with user consent.",
    logo: "/assets/images/portfolio/argyle.png",
    status: "active",
    metrics: [
      { value: "Series C", label: "Stage" },
      { value: "$300M", label: "Value" },
      { value: "2018", label: "Founded" },
    ],
    tags: ["mortgage tech", "payroll", "banking", "big data"],
    links: [
      { text: "Website", url: "https://argyle.com/" },
      {
        text: "News",
        url: "https://argyle.com/blog/",
      },
    ],
    categories: ["fintech"],
  },
  {
    id: "securitypal",
    name: "SecurityPal AI",
    description:
      "SecurityPal offers AI-driven security compliance solutions that automate risk assessments and streamline vendor security reviews for enterprises.",
    logo: "/assets/images/portfolio/securitypalai.png",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$100M", label: "Value" },
      { value: "2020", label: "Founded" },
    ],
    tags: ["security", "cybersecurity", "AI agents"],
    links: [
      { text: "Website", url: "https://www.securitypalhq.com/" },
      {
        text: "News",
        url: "https://www.securitypalhq.com/press",
      },
    ],
    categories: ["infrastructure", "enterprise", "ai"],
  },
  {
    id: "sellergeni",
    name: "SellerGeni",
    description:
      "SellerGeni's AI platform optimizes Amazon product listings and advertising campaigns to boost sales and visibility for e-commerce sellers.",
    logo: "/assets/images/portfolio/sellergeni.jpg",
    status: "active",
    metrics: [
      { value: "Angel", label: "Stage" },
      { value: "$7M", label: "Value" },
      { value: "2018", label: "Founded" },
    ],
    tags: ["machine learning", "AI agents", "e-commerce", "marketing tech"],
    links: [
      { text: "Website", url: "https://www.sellergeni.com/" },
      {
        text: "News",
        url: "https://www.sellergeni.com/success-stories",
      },
    ],
    categories: ["enterprise", "ai"],
  },
  {
    id: "emotive",
    name: "Emotive",
    description:
      "Emotive combines AI and human touch in SMS marketing to help eCommerce brands increase customer engagement and drive sales.",
    logo: "/assets/images/portfolio/emotive.png",
    status: "exit",
    metrics: [
      { value: "2025", label: "Exit Year" },
      { value: "$400M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: ["exit", "marketing", "communications", "mobile", "e-commerce"],
    links: [
      { text: "Website", url: "https://emotive.io/" },
      {
        text: "Exit Article",
        url: "https://www.privy.com/blog/emotive-joins-privy",
      },
    ],
    categories: ["consumer", "ai"],
  },
  {
    id: "sourcemedium",
    name: "Source Medium",
    description:
      "Source Medium offers enterprise data infrastructure that helps e-commerce brands unify and leverage their data for growth.",
    logo: "/assets/images/portfolio/sourcemedium.png",
    status: "active",
    metrics: [
      { value: "Early", label: "Stage" },
      { value: "$30M", label: "Value" },
      { value: "2019", label: "Founded" },
    ],
    tags: ["big data", "database"],
    links: [
      { text: "Website", url: "https://www.sourcemedium.com/" },
      {
        text: "Blog",
        url: "https://www.sourcemedium.com/blog",
      },
    ],
    categories: ["infrastructure", "ai"],
  },
  {
    id: "flourish",
    name: "Flourish Health",
    description:
      "Flourish Health delivers in-home and virtual behavioral health services for children and young adults with complex mental health needs.",
    logo: "/assets/images/portfolio/flourishhealth.png",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$30M", label: "Value" },
      { value: "2020", label: "Founded" },
    ],
    tags: ["healthcare", "Outpatient Services", "mental health"],
    links: [
      { text: "Website", url: "https://www.flourish.health/" },
      {
        text: "Careers",
        url: "https://www.webwire.com/ViewPressRel.asp?aId=309595",
      },
    ],
    categories: ["consumer", "biotech"],
  },
  {
    id: "agvend",
    name: "AgVend",
    description:
      "AgVend's digital platform helps agribusinesses manage operations and strengthen customer relationships through unified engagement tools.",
    logo: "/assets/images/portfolio/agvend.png",
    status: "active",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$200M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: ["agtech", "retail", "communications"],
    links: [
      { text: "Website", url: "https://www.agvend.com/" },
      {
        text: "Blog",
        url: "https://www.agvend.com/blog/",
      },
    ],
    categories: ["consumer", "enterprise"],
  },
  {
    id: "andi",
    name: "Andi",
    description:
      "Andi is an ad-free AI search engine that provides direct, factual answers using generative AI and real-time web data.",
    logo: "/assets/images/portfolio/andi.png",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$20M", label: "Value" },
      { value: "2021", label: "Founded" },
    ],
    tags: ["search engine", "generative ai", "privacy"],
    links: [
      { text: "Website", url: "https://www.andi.co/" },
      {
        text: "Blog",
        url: "https://www.andi.co/blog",
      },
    ],
    categories: ["ai"],
  },
  {
    id: "hammock",
    name: "Hammock",
    description:
      "Hammock simplifies property accounting for UK landlords with automated bookkeeping and real-time tax tracking.",
    logo: "/assets/images/portfolio/hammock.png",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$20M", label: "Value" },
      { value: "2019", label: "Founded" },
    ],
    tags: ["proptech", "accounting", "bookeeping"],
    links: [
      { text: "Website", url: "https://www.usehammock.com/" },
      {
        text: "Blog",
        url: "https://www.usehammock.com/hammock-blog/",
      },
    ],
    categories: ["fintech"],
  },
  {
    id: "konvi",
    name: "Konvi",
    description:
      "Konvi offers fractional investment in luxury assets like watches, wines, and collectibles through its mobile platform.",
    logo: "/assets/images/portfolio/konvi.png",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$5M", label: "Value" },
      { value: "2020", label: "Founded" },
    ],
    tags: ["fractional investing", "alternative assets"],
    links: [
      { text: "Website", url: "https://konvi.app/" },
      {
        text: "News",
        url: "https://drive.google.com/drive/folders/1UU8KwDXy8sKvw949qZZ71sDlZqyRhlfN",
      },
    ],
    categories: ["fintech"],
  },
  {
    id: "inspectiv",
    name: "Inspectiv",
    description:
      "Inspectiv's platform combines crowdsourced and automated security testing to help enterprises find and fix application vulnerabilities.",
    logo: "/assets/images/portfolio/inspectiv.png",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$50M", label: "Value" },
      { value: "2018", label: "Founded" },
    ],
    tags: ["SaaS", "machine learning", "security"],
    links: [
      { text: "Website", url: "https://www.inspectiv.com/" },
      {
        text: "Library",
        url: "https://www.inspectiv.com/resource-center",
      },
    ],
    categories: ["infrastructure", "ai"],
  },
  {
    id: "gavel",
    name: "Gavel",
    description:
      "Gavel uses AI to automate legal document creation, client intake, and workflow management for law firms.",
    logo: "/assets/images/portfolio/gavel.png",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$40M", label: "Value" },
      { value: "2019", label: "Founded" },
    ],
    tags: ["automation", "legal tech", "SaaS"],
    links: [
      { text: "Website", url: "https://www.gavel.io/" },
      {
        text: "Learning Center",
        url: "https://help.gavel.io/",
      },
    ],
    categories: ["enterprise", "ai"],
  },
  {
    id: "instill",
    name: "Instill AI",
    description:
      "Instill AI creates no-code agents that analyze and extract insights from documents, audio, and video.",
    logo: "/assets/images/portfolio/instillai.png",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$15M", label: "Value" },
      { value: "2020", label: "Founded" },
    ],
    tags: ["no-code", "machine learning", "design", "productivity"],
    links: [
      { text: "Website", url: "https://www.instill-ai.com//" },
      {
        text: "Blog",
        url: "https://www.instill-ai.com/blog",
      },
    ],
    categories: ["ai"],
  },
  {
    id: "facet",
    name: "Facet",
    description:
      "Facet provides flat-fee financial planning and investment management to help clients achieve financial security.",
    logo: "/assets/images/portfolio/facet.png",
    status: "soonicorn",
    metrics: [
      { value: "Series D", label: "Stage" },
      { value: "$570M", label: "Value" },
      { value: "2016", label: "Founded" },
    ],
    tags: [
      "soonicorn",
      "fintech",
      "financial planning",
      "investment management",
      "personalized advice",
    ],
    links: [
      { text: "Website", url: "https://facet.com//" },
      {
        text: "Library",
        url: "https://facet.com/learn/",
      },
    ],
    categories: ["fintech"],
  },
  {
    id: "capchase",
    name: "Capchase",
    description:
      "Capchase offers non-dilutive financing for SaaS companies to access future revenue and improve cash flow.",
    logo: "/assets/images/portfolio/capchase.png",
    status: "unicorn",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$1B", label: "Value" },
      { value: "2020", label: "Founded" },
    ],
    tags: [
      "unicorn",
      "fintech",
      "SaaS",
      "flexible financing",
      "non-dilutive financing",
    ],
    links: [
      { text: "Website", url: "https://www.capchase.com/" },
      {
        text: "Blog",
        url: "https://www.capchase.com/blog",
      },
    ],
    categories: ["fintech"],
  },

  {
    id: "swan",
    name: "Swan",
    description:
      "Swan Bitcoin simplifies recurring Bitcoin purchases and offers investor education tools.",
    logo: "/assets/images/portfolio/swan.png",
    status: "soonicorn",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$575M", label: "Value" },
      { value: "2019", label: "Founded" },
    ],
    tags: ["soonicorn", "cryptocurrency", "e-commerce", "bitcoin"],
    links: [
      { text: "Website", url: "www.swanbitcoin.com" },
      {
        text: "News",
        url: "https://www.swanbitcoin.com/articles/",
      },
    ],
    categories: ["fintech"],
  },
  {
    id: "7shifts",
    name: "7shifts",
    description:
      "7shifts offers an all-in-one platform for restaurant scheduling, payroll, and team management to optimize operations and reduce costs.",
    logo: "/assets/images/portfolio/7shifts.png",
    status: "active",
    metrics: [
      { value: "Series C", label: "Stage" },
      { value: "$200M", label: "Value" },
      { value: "2011", label: "Founded" },
    ],
    tags: ["restaurant", "scheduling", "payroll", "team management", "SaaS"],
    links: [
      { text: "Website", url: "https://www.7shifts.com/" },
      {
        text: "Blog",
        url: "https://www.7shifts.com/blog/",
      },
    ],
    categories: ["enterprise"],
  },
  {
    id: "eva",
    name: "Eva",
    description:
      "Eva.guru uses AI to optimize pricing, ads, and inventory for e-commerce brands on Amazon, Walmart, and Shopify.",
    logo: "/assets/images/portfolio/eva.png",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$10M", label: "Value" },
      { value: "2019", label: "Founded" },
    ],
    tags: ["e-commerce", "AI", "machine learning", "SaaS"],
    links: [
      { text: "Website", url: "https://eva.guru/" },
      {
        text: "Blog",
        url: "https://eva.guru/blog/",
      },
    ],
    categories: ["consumer", "ai"],
  },
  {
    id: "iriscx",
    name: "IrisCX",
    description:
      "IrisCX provides AI video tools for businesses to remotely assist and resolve customer issues through live video interactions.",
    logo: "/assets/images/portfolio/iriscx.png",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$10M", label: "Value" },
      { value: "2018", label: "Founded" },
    ],
    tags: ["customer engagement", "video customer engagement", "AI"],
    links: [
      { text: "Website", url: "https://icwhatuc.com/" },
      {
        text: "Blog",
        url: "https://icwhatuc.com/blog",
      },
    ],
    categories: ["enterprise", "ai"],
  },
  {
    id: "gauge",
    name: "Gauge Automotive",
    description:
      "Gauge Automotive's AI marketplace helps car owners get top dollar through competitive bidding from verified buyers.",
    logo: "/assets/images/portfolio/gauge.png",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$30M", label: "Value" },
      { value: "2020", label: "Founded" },
    ],
    tags: ["marketplace", "SaaS", "automotive"],
    links: [
      { text: "Website", url: "https://www.sellgauge.com/" },
      {
        text: "Blog",
        url: "https://www.sellgauge.com/blog",
      },
    ],
    categories: ["consumer"],
  },
  {
    id: "traxyl",
    name: "Traxyl",
    description:
      "TRAXyL's patented technology reduces fiber installation time and costs for telecom's last-mile connectivity needs.",
    logo: "/assets/images/portfolio/traxyl.png",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$30M", label: "Value" },
      { value: "2014", label: "Founded" },
    ],
    tags: [
      "fiber installation",
      "last-mile connectivity",
      "telecom infrastructure",
    ],
    links: [
      { text: "Website", url: "https://www.traxyl.com/" },
      {
        text: "Media",
        url: "https://traxyl.com/media/",
      },
    ],
    categories: ["infrastructure"],
  },
  {
    id: "loop",
    name: "Loop",
    description:
      "Loop's digital frame lets families share photos and videos instantly via app or text, keeping loved ones connected.",
    logo: "/assets/images/portfolio/loop.png",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$10M", label: "Value" },
      { value: "2020", label: "Founded" },
    ],
    tags: [
      "digital frame",
      "family photos",
      "video sharing",
      "social engagement",
    ],
    links: [
      { text: "Website", url: "https://loopfamily.com/" },
      {
        text: "Help Center",
        url: "https://loopfamily.com/pages/help?hcUrl=%2Fen-US",
      },
    ],
    categories: ["consumer"],
  },
  {
    id: "inkshares",
    name: "InkShares",
    description:
      "Inkshares is a reader-powered publishing platform using crowdfunding to determine which books get published.",
    logo: "/assets/images/portfolio/inkshares.jpg",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$10M", label: "Value" },
      { value: "2013", label: "Founded" },
    ],
    tags: ["publishing", "literary rights"],
    links: [
      { text: "Website", url: "https://www.inkshares.com/" },
      {
        text: "News",
        url: "https://www.inkshares.com/press5",
      },
    ],
    categories: ["consumer"],
  },
  {
    id: "threeships",
    name: "Three Ships Beauty",
    description:
      "Three Ships Beauty creates affordable, natural skincare products with a focus on transparency and sustainability.",
    logo: "/assets/images/portfolio/threeships.png",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$10M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: ["skincare", "natural products", "beauty", "sustainability"],
    links: [
      { text: "Website", url: "https://www.threeshipsbeauty.com/" },
      {
        text: "Blog",
        url: "https://www.threeshipsbeauty.com/blogs/news",
      },
    ],
    categories: ["consumer"],
  },
  {
    id: "hownow",
    name: "HowNow",
    description:
      "HowNow's AI platform helps businesses upskill employees by aligning learning with critical business skills.",
    logo: "/assets/images/portfolio/hownow.webp",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$45M", label: "Value" },
      { value: "2018", label: "Founded" },
    ],
    tags: ["learning and upskilling", "business-critical skills"],
    links: [
      { text: "Website", url: "https://www.gethownow.com/" },
      {
        text: "Blog",
        url: "https://www.gethownow.com/blog",
      },
    ],
    categories: ["enterprise", "ai"],
  },

  {
    id: "curve",
    name: "Curve Pay",
    description:
      "Curve consolidates multiple payment cards into one smart wallet to manage spending, avoid fees, and maximize rewards.",
    logo: "/assets/images/portfolio/curve.png",
    status: "active",
    metrics: [
      { value: "Series C", label: "Stage" },
      { value: "$23M", label: "Value" },
      { value: "2015", label: "Founded" },
    ],
    tags: ["mobile commerce", "payment cards", "digital wallet"],
    links: [
      { text: "Website", url: "https://www.curve.com/" },
      {
        text: "Blog",
        url: "https://www.curve.com/blog",
      },
    ],
    categories: ["fintech"],
  },
  {
    id: "proteinqure",
    name: "ProteinQure",
    description:
      "ProteinQure uses AI to design targeted peptide therapeutics for precise drug delivery.",
    logo: "/assets/images/portfolio/proteinqure.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$100M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: ["biotech", "ai", "drug delivery"],
    links: [
      { text: "Website", url: "https://www.proteinqure.com/" },
      {
        text: "News",
        url: "https://www.proteinqure.com/news/",
      },
    ],
    categories: ["biotech", "ai"],
  },
  {
    id: "virgo",
    name: "Virgo",
    description:
      "Virgo's AI software speeds up clinical trials with endoscopic video analysis and patient recruitment tools.",
    logo: "/assets/images/portfolio/virgo.png",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$50M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: ["diagnostic equipment", "medtech"],
    links: [
      { text: "Website", url: "https://virgosvs.com/" },
      {
        text: "News",
        url: "https://virgosvs.com/press/",
      },
    ],
    categories: ["biotech", "ai"],
  },
  {
    id: "begin",
    name: "Begin AI",
    description:
      "Begin AI's bots automate document processing, inventory tracking, and invoicing to save small businesses time.",
    logo: "/assets/images/portfolio/begin.png",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$10M", label: "Value" },
      { value: "2021", label: "Founded" },
    ],
    tags: ["automation", "bots", "SaaS"],
    links: [
      { text: "Website", url: "https://begin.ai/" },
      {
        text: "News",
        url: "https://begin.ai/",
      },
    ],
    categories: ["enterprise", "ai"],
  },
  {
    id: "fireside",
    name: "Fireside Chat",
    description:
      "Fireside lets podcasters host live, interactive shows with real-time audience engagement.",
    logo: "/assets/images/portfolio/fireside.png",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$125M", label: "Value" },
      { value: "2013", label: "Founded" },
    ],
    tags: ["podcasts", "audiotech", "virtual events"],
    links: [
      { text: "Website", url: "https://firesidechat.com/" },
      {
        text: "Blog",
        url: "https://blog.fireside.fm/",
      },
    ],
    categories: ["consumer"],
  },
  {
    id: "gilgamesh",
    name: "Gilgamesh Pharmaceuticals",
    description:
      "Gilgamesh Pharmaceuticals develops novel, next-generation compounds for treating mental health and neurological disorders, leveraging advanced chemistry and drug development expertise.",
    logo: "/assets/images/portfolio/gilgamesh.png",
    status: "unicorn",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$1B", label: "Value" },
      { value: "2019", label: "Founded" },
    ],
    tags: [
      "unicorn",
      "Pharmaceuticals",
      "healthtech",
      "life sciences",
      "drug discovery",
    ],
    links: [
      { text: "Website", url: "https://www.gilgameshpharmaceutical.com/" },
      {
        text: "Unicorn News",
        url: "https://www.bloomberg.com/news/articles/2025-07-30/abbvie-is-said-in-talks-to-acquire-gilgamesh-in-1-billion-deal",
      },
    ],
    categories: ["biotech"],
  },
  {
    id: "bambee",
    name: "Bambee",
    description:
      "Bambee offers affordable, outsourced HR management and compliance for small businesses.",
    logo: "/assets/images/portfolio/bambee.png",
    status: "active",
    metrics: [
      { value: "Series C", label: "Stage" },
      { value: "$300M", label: "Value" },
      { value: "2016", label: "Founded" },
    ],
    tags: ["employee onboarding", "hr automation", "performance tracking"],
    links: [
      { text: "Website", url: "https://www.bambee.com/" },
      {
        text: "Crunchbase",
        url: "https://www.crunchbase.com/organization/bambee",
      },
    ],
    categories: ["enterprise"],
  },
  {
    id: "unit21",
    name: "Unit21",
    description:
      "Unit21's no-code platform helps businesses detect and prevent financial crime and fraud in real time.",
    logo: "/assets/images/portfolio/unit21.png",
    status: "active",
    metrics: [
      { value: "Series C", label: "Stage" },
      { value: "$300M", label: "Value" },
      { value: "2018", label: "Founded" },
    ],
    tags: [
      "identity verification",
      "no-code",
      "transaction monitoring",
      "risk management",
      "case management",
      "operations management",
      "analytics & reporting",
    ],
    links: [
      { text: "Website", url: "https://www.unit21.ai/" },
      {
        text: "News",
        url: "https://www.unit21.ai/company/newsroom",
      },
    ],
    categories: ["fintech", "ai"],
  },
  {
    id: "unstoppabledomains",
    name: "Unstoppable Domains",
    description:
      "Unstoppable Domains creates blockchain domains that replace crypto addresses with readable names for decentralized websites and digital IDs.",
    logo: "/assets/images/portfolio/unstoppabledomains.png",
    status: "unicorn",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$1B", label: "Value" },
      { value: "2018", label: "Founded" },
    ],
    tags: ["unicorn", "blockchain", "crypto", "domain platform"],
    links: [
      { text: "Website", url: "https://unstoppabledomains.com/" },
      {
        text: "Blog",
        url: "https://unstoppabledomains.com/blog",
      },
    ],
    categories: ["blockchain"],
  },
  {
    id: "monarchmoney",
    name: "Monarch Money",
    description:
      "Monarch Money is a privacy-focused personal finance app for tracking, budgeting, and managing all your money in one place.",
    logo: "/assets/images/portfolio/monarch.png",
    status: "soonicorn",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$850M", label: "Value" },
      { value: "2018", label: "Founded" },
    ],
    tags: ["soonicorn", "investment tracking", "personal finance", "budgeting"],
    links: [
      { text: "Website", url: "https://www.monarchmoney.com/" },
      {
        text: "News",
        url: "https://www.monarchmoney.com/press",
      },
    ],
    categories: ["fintech"],
  },

  {
    id: "discord",
    name: "Discord",
    description:
      "Discord is a social platform for communities to connect via voice, video, and text chat, with tools for creators and gamers.",
    logo: "/assets/images/portfolio/discord.png",
    status: "unicorn",
    metrics: [
      { value: "Series I", label: "Stage" },
      { value: "$15B", label: "Value" },
      { value: "2015", label: "Founded" },
    ],
    tags: ["unicorn", "social media", "gaming", "SaaS"],
    links: [
      { text: "Website", url: "https://discord.com/" },
      {
        text: "News",
        url: "https://discord.com/newsroom",
      },
    ],
    categories: ["consumer", "enterprise"],
  },
  {
    id: "aether",
    name: "Aether",
    description:
      "Aether's molecular assembler platform uses AI and robotics to engineer nanoscale machines from protein building blocks.",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: [
      "synthetic biology",
      "enzyme engineering",
      "machine learning",
      "robotics",
      "industrial biotech",
    ],
    links: [
      { text: "Website", url: "https://www.aetherbio.com/" },
      {
        text: "News",
        url: "https://www.webwire.com/ViewPressRel.asp?aId=309595",
      },
    ],
    categories: ["biotech", "ai"],
  },

  {
    id: "better-mortgage",
    name: "Better Mortgage",
    description:
      "Better Mortgage offers a fully digital home lending platform that simplifies and speeds up the mortgage process.",
    logo: "/assets/images/portfolio/better.jpg",
    status: "public",
    metrics: [
      { value: "$200M", label: "Value" },
      { value: "2023", label: "Exit Year" },
      { value: "2014", label: "Founded" },
    ],
    tags: [
      "exit",
      "public",
      "Fintech",
      "Mortgage",
      "Digital Lending",
      "Public Company",
      "AI-Powered Lending",
    ],
    links: [
      { text: "Website", url: "https://better.com/" },
      { text: "News", url: "https://better.com/about-us/media" },
    ],
    categories: ["fintech"],
  },

  {
    id: "blockstream",
    name: "Blockstream",
    description:
      "Blockstream develops Bitcoin infrastructure including the Liquid Network, Core Lightning, and enterprise mining solutions.",
    logo: "/assets/images/portfolio/blockstream.jpg",
    status: "unicorn",
    metrics: [
      { value: "Convertible Note", label: "Stage" },
      { value: "$3.2B", label: "Value" },
      { value: "2014", label: "Founded" },
    ],
    tags: [
      "unicorn",
      "Blockchain",
      "Bitcoin",
      "Cryptocurrency",
      "Enterprise Solutions",
      "Mining",
      "Layer-2 Solutions",
      "Security Tokens",
    ],
    links: [
      { text: "Website", url: "https://blockstream.com/" },
      {
        text: "News",
        url: "https://blockstream.com/press-releases/",
      },
    ],
    categories: ["crypto"],
  },

  {
    id: "cart-com",
    name: "Cart.com",
    description:
      "Cart.com provides end-to-end e-commerce solutions including order management, inventory, and fulfillment for 6,000+ brands.",
    logo: "/assets/images/portfolio/cart.jpg",
    status: "unicorn",
    metrics: [
      { value: "Series D", label: "Stage" },
      { value: "$1.6B", label: "Value" },
      { value: "2020", label: "Founded" },
    ],
    tags: [
      "unicorn",
      "E-commerce",
      "Logistics",
      "SaaS",
      "Unified Commerce",
      "Fulfillment",
      "Omnichannel",
      "Enterprise Software",
    ],
    links: [
      { text: "Website", url: "https://cart.com/" },
      { text: "Newsroom", url: "https://cart.com/newsroom" },
    ],
    categories: ["consumer"],
  },

  {
    id: "coffeeseed",
    name: "Coffeeseed",
    description:
      "Coffeeseed is a digital marketplace transforming specialty coffee trading by connecting buyers and sellers with tools for quality assessment, transactions, and supply chain efficiency.",
    logo: "/assets/images/portfolio/coffeeseed.jpg",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$2.5M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: [
      "AgTech",
      "Supply Chain",
      "B2B Marketplace",
      "Coffee Trading",
      "Blockchain",
      "Traceability",
      "SaaS",
    ],
    links: [{ text: "Website", url: "https://www.coffeeseed.co/" }],
    categories: ["consumer"],
  },

  {
    id: "creatify",
    name: "Creatify AI",
    description:
      "Creatify AI automates video ad creation from product links, generating optimized ads for TikTok, Meta, and YouTube with AI avatars and scripts.",
    logo: "/assets/images/portfolio/creatifyai.png",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$100M", label: "Value" },
      { value: "2023", label: "Founded" },
    ],
    tags: [
      "Generative AI",
      "Marketing Tech",
      "Video Generation",
      "E-commerce",
      "SaaS",
      "Advertising",
      "Creative Automation",
    ],
    links: [
      { text: "Website", url: "https://www.creatify.ai" },
      {
        text: "News",
        url: "https://creatify.ai/blog",
      },
    ],
    categories: ["ai", "consumer"],
  },

  {
    id: "darwin-homes",
    name: "Darwin Homes",
    description:
      "Darwin Homes offers a tech platform for managing single-family rentals, with digital tools for tours, applications, and rent payments.",
    logo: "/assets/images/portfolio/darwin.jpg",
    status: "exit",
    metrics: [
      { value: "2023", label: "Exit Year" },
      { value: "$20M", label: "Value" },
      { value: "2018", label: "Founded" },
    ],
    tags: [
      "exit",
      "PropTech",
      "Property Management",
      "Real Estate Tech",
      "Smart Home",
      "Residential Rental",
      "Proptech SaaS",
    ],
    links: [
      { text: "Website", url: "https://www.darwinhomes.com/" },
      {
        text: "News",
        url: "https://blog.darwinhomes.com/posts/pagaya's-acquisition-of-darwin-homes-powers-premier-tech-enabled-single-family-rental-platform",
      },
    ],
    categories: ["fintech"],
  },

  {
    id: "delix-therapeutics",
    name: "Delix Therapeutics",
    description:
      "Delix Therapeutics develops neuroplastogens, non-hallucinogenic compounds that repair brain connections to treat mental health and cognitive disorders.",
    logo: "/assets/images/portfolio/delix.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$400M", label: "Value" },
      { value: "2019", label: "Founded" },
    ],
    tags: [
      "Neuroscience",
      "Neuroplastogens",
      "Clinical Stage",
      "Mental Health",
      "Neurological Disorders",
      "Psychedelic-Inspired",
    ],
    links: [
      { text: "Website", url: "https://www.delixtherapeutics.com/" },
      { text: "News", url: "https://www.delixtherapeutics.com/news//" },
    ],
    categories: ["biotech"],
  },

  {
    id: "dibs-capital",
    name: "Dibs Capital (formerly Solidblock)",
    description:
      "Dibs Capital tokenizes real estate and private equity assets, creating digital securities for improved liquidity and fractional ownership.",
    logo: "/assets/images/portfolio/solidblock.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$15M", label: "Valuation" },
      { value: "2018", label: "Founded" },
    ],
    tags: [
      "FinTech",
      "Blockchain",
      "Real Estate",
      "Tokenization",
      "Digital Securities",
      "Web3",
      "Alternative Investments",
    ],
    links: [
      { text: "Website", url: "https://dibscapital.com/" },
      { text: "News", url: "https://blog.dibscapital.com/" },
    ],
    categories: ["fintech"],
  },

  {
    id: "feel",
    name: "Feel",
    description:
      "Feel creates clean-label wellness supplements and personal care products with clinically-backed, plant-based ingredients and no synthetic fillers.",
    logo: "/assets/images/portfolio/feel.jpg",
    status: "active",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$45M", label: "Valuation" },
      { value: "2019", label: "Founded" },
    ],
    tags: [
      "Wellness",
      "Nutritional Supplements",
      "Clean Label",
      "Direct-to-Consumer",
      "Vegan",
      "Clean Beauty",
      "Personalized Health",
    ],
    links: [
      { text: "Website", url: "https://wearefeel.com/" },
      { text: "News", url: "https://wearefeel.com/blogs/learn" },
    ],
    categories: ["consumer"],
  },

  {
    id: "generation-conscious",
    name: "Generation Conscious",
    description:
      "Generation Conscious installs plastic-free hygiene refill stations in college dorms to promote sustainability and hygiene access.",
    logo: "/assets/images/portfolio/generationconscious.png",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: [
      "Sustainability",
      "Environmental Justice",
      "Personal Care",
      "Zero Waste",
    ],
    links: [
      { text: "Website", url: "https://generationconscious.co/" },
      {
        text: "News",
        url: "https://generationconscious.co/",
      },
    ],
    categories: ["consumer"],
  },

  {
    id: "geologie",
    name: "Geologie",
    description:
      "Geologie is a men's skincare brand offering personalized, clinical-grade products, now available in Target stores and acquired by Megalabs USA.",
    logo: "/assets/images/portfolio/geologie.jpg",
    status: "exit",
    metrics: [
      { value: "2025", label: "Exit Year" },
      { value: "$28M", label: "Value" },
      { value: "2018", label: "Founded" },
    ],
    tags: [
      "exit",
      "Men's Skincare",
      "Personalized Care",
      "Dermatology",
      "Acne Treatment",
      "Grooming",
      "Acquired",
    ],
    links: [
      { text: "Website", url: "https://geologie.com/" },
      {
        text: "News",
        url: "https://cosmeticsbusiness.com/megalabs-usa-acquires-geologie-to-enhance-skin-care-offering",
      },
    ],
    categories: ["consumer"],
  },

  {
    id: "grove-collaborative",
    name: "Grove Collaborative",
    description:
      "Grove Collaborative is a sustainable home and personal care brand offering natural products through a direct-to-consumer subscription model, now publicly traded.",
    logo: "/assets/images/portfolio/grove.jpg",
    status: "public",
    metrics: [
      { value: "$60M", label: "Value" },
      { value: "2021", label: "Exit Year" },
      { value: "2014", label: "Founded" },
    ],
    tags: [
      "exit",
      "public",
      "Sustainable Products",
      "E-commerce",
      "B-Corp",
      "Plastic Neutral",
    ],
    links: [
      { text: "Website", url: "https://www.grove.co/" },
      { text: "News", url: "https://investors.grove.co/news-events" },
    ],
    categories: ["consumer"],
  },

  {
    id: "hologram",
    name: "Hologram",
    description:
      "Hologram provides global cellular connectivity for IoT devices, offering SIM cards and management tools across 190+ countries through 550+ carrier partners.",
    logo: "/assets/images/portfolio/hologram.jpg",
    status: "active",
    metrics: [
      { value: "2021", label: "Stage" },
      { value: "$500M", label: "Value" },
      { value: "2013", label: "Founded" },
    ],
    tags: [
      "soonicorn",
      "IoT",
      "Cellular Connectivity",
      "5G",
      "Edge Computing",
      "Enterprise SaaS",
      "Chicago",
    ],
    links: [
      { text: "Website", url: "https://www.hologram.io/" },
      { text: "News", url: "https://hologram.io/blog/" },
    ],
    categories: ["infrastructure"],
  },

  {
    id: "hyperscience",
    name: "Hyperscience",
    description:
      "Hyperscience automates document processing with 99.5% accuracy, helping enterprises and government agencies transform unstructured data into actionable insights.",
    logo: "/assets/images/portfolio/hyperscience.jpg",
    status: "active",
    metrics: [
      { value: "Series E", label: "Stage" },
      { value: "$400M", label: "Value" },
      { value: "2014", label: "Founded" },
    ],
    tags: [
      "AI",
      "Document Processing",
      "Workflow Automation",
      "Enterprise Software",
      "Machine Learning",
      "Computer Vision",
    ],
    links: [
      { text: "Website", url: "https://www.hyperscience.ai/" },
      { text: "News", url: "https://www.hyperscience.ai/newsroom/" },
    ],
    categories: ["enterprise", "ai"],
  },

  {
    id: "instil",
    name: "Instil",
    description:
      "Instil offers donor management software for nonprofits, streamlining fundraising, campaign tracking, and donor engagement through an intuitive platform.",
    logo: "/assets/images/portfolio/instil.jpg",
    status: "active",
    metrics: [
      { value: "2023", label: "Stage" },
      { value: "$18M", label: "Value" },
      { value: "2020", label: "Founded" },
    ],
    tags: [
      "SaaS",
      "Nonprofit Tech",
      "Fundraising",
      "Donor Management",
      "Workflow Automation",
      "Cloud-Based",
    ],
    links: [
      { text: "Website", url: "https://www.instil.io/" },
      { text: "News", url: "https://blog.instil.io/" },
    ],
    categories: ["fintech"],
  },

  {
    id: "jumbotail",
    name: "Jumbotail",
    description:
      "Jumbotail is India's leading B2B marketplace for mom & pop stores, offering food/grocery distribution, fintech solutions, and next-day delivery services.",
    logo: "/assets/images/portfolio/jumbotail.jpg",
    status: "active",
    metrics: [
      { value: "Series D", label: "Stage" },
      { value: "$1B", label: "Value" },
      { value: "2015", label: "Founded" },
    ],
    tags: [
      "B2B Marketplace",
      "E-commerce",
      "Food & Grocery",
      "Retail Tech",
      "AI",
      "Acquisition",
    ],
    links: [
      { text: "Website", url: "https://jumbotail.com/" },
      { text: "News", url: "https://jumbotail.com/news-room/" },
    ],
    categories: ["consumer"],
  },

  {
    id: "knix",
    name: "Knix",
    description:
      "Knix is a DTC intimate apparel brand known for leak-proof underwear and loungewear, acquired by Essity in 2022 for $400M.",
    logo: "/assets/images/portfolio/knix.jpg",
    status: "exit",
    metrics: [
      { value: "2022", label: "Exit Year" },
      { value: "$400M", label: "Value" },
      { value: "2012", label: "Founded" },
    ],
    tags: [
      "exit",
      "DTC",
      "Intimate Apparel",
      "Body Positivity",
      "Leak-Proof Technology",
      "Women's Health",
      "Acquired",
      "E-commerce",
      "Loungewear",
      "Inclusive Sizing",
    ],
    links: [
      { text: "Website", url: "https://knix.com/" },
      { text: "News", url: "https://knix.com/blogs/knix-blog" },
    ],
    categories: ["consumer"],
  },

  {
    id: "lalo",
    name: "Lalo",
    description:
      "Lalo creates thoughtfully designed, non-toxic baby essentials including high chairs and play yards that grow with children from infancy.",
    logo: "/assets/images/portfolio/lalo.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$6.5M", label: "Value" },
      { value: "2018", label: "Founded" },
    ],
    tags: ["E-commerce", "Baby & Kids", "DTC", "Parenting", "Consumer Goods"],
    links: [
      { text: "Website", url: "https://www.meetlalo.com/" },
      { text: "News", url: "https://www.crunchbase.com/organization/lalo" },
    ],
    categories: ["consumer"],
  },

  {
    id: "metadata",
    name: "Metadata",
    description:
      "Metadata's AI platform automates and optimizes B2B marketing campaigns across LinkedIn, Google, and Meta to drive pipeline and revenue growth.",
    logo: "/assets/images/portfolio/metadata.jpg",
    status: "active",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$46.5M", label: "Value" },
      { value: "2015", label: "Founded" },
    ],
    tags: [
      "B2B Marketing",
      "Marketing Automation",
      "AI",
      "SaaS",
      "Demand Generation",
    ],
    links: [
      { text: "Website", url: "https://metadata.io/" },
      { text: "News", url: "https://metadata.io/resources/blog/" },
    ],
    categories: ["ai", "consumer"],
  },

  {
    id: "olvin",
    name: "Olvin",
    description:
      "Olvin provides location analytics and consumer behavior insights to help businesses optimize physical locations and understand foot traffic patterns.",
    logo: "/assets/images/portfolio/olvin.jpg",
    status: "exit",
    metrics: [
      { value: "2023", label: "Exit Date" },
      { value: "$15M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: [
      "exit",
      "Location Intelligence",
      "AI",
      "Retail Analytics",
      "Commercial Real Estate",
      "Predictive Analytics",
    ],
    links: [
      { text: "Website", url: "https://olvin.com/" },
      {
        text: "News",
        url: "https://www.crunchbase.com/organization/olvin",
      },
    ],
    categories: ["ai", "consumer"],
  },

  {
    id: "pagaya",
    name: "Pagaya",
    description:
      "Pagaya uses AI to help financial institutions expand access to credit and financial services through its intelligent underwriting platform.",
    logo: "/assets/images/portfolio/pagaya.jpg",
    status: "public",
    metrics: [
      { value: "2022", label: "Exit Date" },
      { value: "$8.5B", label: "Value" },
      { value: "2016", label: "Founded" },
    ],
    tags: [
      "exit",
      "public",
      "unicorn",
      "IPO",
      "AI",
      "Fintech",
      "Banking",
      "Credit",
      "AI",
    ],
    links: [
      { text: "Website", url: "https://pagaya.com/" },
      {
        text: "News",
        url: "https://pagaya.com/news",
      },
    ],
    categories: ["fintech"],
  },

  {
    id: "passport",
    name: "Passport",
    description:
      "Passport provides DTC brands with international shipping, compliance, and payment localization to simplify global e-commerce expansion.",
    logo: "/assets/images/portfolio/passport.jpg",
    status: "active",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$200M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: ["ecommerce", "logistics", "cross-border", "fintech"],
    links: [
      { text: "Website", url: "https://passportglobal.com/" },
      {
        text: "News",
        url: "https://passportglobal.com/news-and-articles/",
      },
    ],
    categories: ["infrastructure"],
  },

  {
    id: "people-ai",
    name: "People.ai",
    description:
      "People.ai's AI platform transforms sales activity data into actionable insights, helping revenue teams optimize performance and close more deals.",
    logo: "/assets/images/portfolio/peopleai.jpg",
    status: "unicorn",
    metrics: [
      { value: "Series D", label: "Stage" },
      { value: "$1.1B", label: "Value" },
      { value: "2016", label: "Founded" },
    ],
    tags: [
      "unicorn",
      "Revenue Operations",
      "Sales Intelligence",
      "AI-Powered Analytics",
      "Enterprise SaaS",
      "Sales Automation",
    ],
    links: [
      { text: "Website", url: "https://www.people.ai/" },
      { text: "News", url: "https://www.people.ai/newsroom" },
    ],
    categories: ["ai", "enterprise"],
  },

  {
    id: "pryon",
    name: "Pryon",
    description:
      "Pryon's Retrieval as a Service (RaaS) platform helps enterprises implement AI-powered knowledge management and retrieval-augmented generation.",
    logo: "/assets/images/portfolio/pryon.jpg",
    status: "active",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$500M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: [
      "unicorn",
      "Enterprise AI",
      "Retrieval as a Service",
      "Generative AI",
      "Knowledge Management",
      "RAG Systems",
    ],
    links: [
      { text: "Website", url: "https://www.pryon.com/" },
      { text: "News", url: "https://www.pryon.com/about/news" },
    ],
    categories: ["enterprise", "ai"],
  },

  {
    id: "quiver",
    name: "Quiver",
    description:
      "Quiver offers emissionless same-day delivery in London using electric vehicles and optimized routing for sustainable quick commerce.",
    logo: "/assets/images/portfolio/quiver.jpg",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$10M", label: "Value" },
      { value: "2021", label: "Founded" },
    ],
    tags: ["Fintech", "Mortgage", "Digital Lending", "AI-Powered Lending"],
    links: [
      { text: "Website", url: "https://quiver.co.uk/" },
      { text: "News", url: "https://quiver.co.uk/about-us" },
    ],
    categories: ["infrastructure"],
  },

  {
    id: "republic",
    name: "Republic",
    description:
      "Republic is an investment platform that lets individuals invest in startups, crypto, and real estate with as little as $50.",
    logo: "/assets/images/portfolio/republic.jpg",
    status: "active",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$500M", label: "Value" },
      { value: "2016", label: "Founded" },
    ],
    tags: [
      "Crowdfunding",
      "Alternative Investments",
      "Crypto",
      "Startup Investing",
      "Retail Investors",
    ],
    links: [
      { text: "Website", url: "https://republic.com/" },
      {
        text: "News",
        url: "https://www.crunchbase.com/organization/republic-co#news",
      },
    ],
    categories: ["fintech"],
  },

  {
    id: "rescale",
    name: "Rescale",
    description:
      "Rescale provides a cloud platform for high-performance computing, enabling engineers to run complex simulations without on-premises infrastructure.",
    logo: "/assets/images/portfolio/rescale.jpg",
    status: "unicorn",
    metrics: [
      { value: "Series D", label: "Stage" },
      { value: "$1B", label: "Value" },
      { value: "2011", label: "Founded" },
    ],
    tags: [
      "unicorn",
      "High Performance Computing",
      "Cloud Computing",
      "Simulation",
      "Scientific Computing",
      "Enterprise Tech",
    ],
    links: [
      { text: "Website", url: "https://rescale.com/" },
      { text: "News", url: "https://rescale.com/news/" },
    ],
    categories: ["infrastructure"],
  },

  {
    id: "rise",
    name: "Rise",
    description:
      "Rise is an AI-powered job platform connecting tech professionals with startup opportunities, focusing on remote work and career development.",
    logo: "/assets/images/portfolio/rise.jpg",
    status: "active",
    metrics: [
      { value: "Pre-Seed", label: "Stage" },
      { value: "$4M", label: "Value" },
      { value: "2021", label: "Founded" },
    ],
    tags: [
      "Job Platform",
      "Tech Careers",
      "AI Recruitment",
      "Talent Acquisition",
      "Career Development",
    ],
    links: [
      { text: "Website", url: "https://joinrise.co/" },
      { text: "News", url: "https://joinrise.co/news/" },
    ],
    categories: ["ai"],
  },

  {
    id: "secure-frame",
    name: "Secure Frame",
    description:
      "Secure Frame automates security compliance (SOC 2, ISO 27001, GDPR) with tools for evidence collection, policy management, and risk assessment.",
    logo: "/assets/images/portfolio/secureframe.jpg",
    status: "active",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$320M", label: "Value" },
      { value: "2020", label: "Founded" },
    ],
    tags: [
      "Compliance Automation",
      "Security",
      "SOC 2",
      "GDPR",
      "Enterprise SaaS",
    ],
    links: [
      { text: "Website", url: "https://secureframe.com/" },
      { text: "News", url: "https://secureframe.com/blog" },
    ],
    categories: ["infrastructure"],
  },

  {
    id: "skysafe",
    name: "SkySafe",
    description:
      "SkySafe provides drone detection and mitigation technology to secure airspace for airports, stadiums, and critical infrastructure.",
    logo: "/assets/images/portfolio/skysafe.jpg",
    status: "active",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$9.4M", label: "Value" },
      { value: "2015", label: "Founded" },
    ],
    tags: [
      "Drone Security",
      "Airspace Management",
      "Counter-Drone",
      "Critical Infrastructure",
      "Aerospace",
    ],
    links: [
      { text: "Website", url: "https://www.skysafe.io/" },
      { text: "News", url: "https://www.skysafe.io/blog" },
    ],
    categories: ["infrastructure"],
  },
  {
    id: "super-plastic",
    name: "Super Plastic",
    description:
      "Super Plastic creates virtual influencer characters and digital collectibles that bridge digital and physical entertainment experiences.",
    logo: "/assets/images/portfolio/superplastic.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$168M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: [
      "Digital Collectibles",
      "Virtual Influencers",
      "NFTs",
      "Entertainment",
      "Luxury Goods",
    ],
    links: [
      { text: "Website", url: "https://superplastic.co/" },
      {
        text: "News",
        url: "https://www.crunchbase.com/organization/superplastic",
      },
    ],
    categories: ["consumer"],
  },
  {
    id: "swiftly",
    name: "Swiftly",
    description:
      "Swiftly provides omnichannel retail technology that helps independent retailers compete with digital tools, personalization, and advertising solutions.",
    logo: "/assets/images/portfolio/swiftly.png",
    status: "unicorn",
    metrics: [
      { value: "Series C", label: "Stage" },
      { value: "$1B", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: [
      "unicorn",
      "Retail Tech",
      "Omnichannel Commerce",
      "Digital Transformation",
      "Retail Media",
      "E-commerce",
    ],
    links: [
      { text: "Website", url: "https://www.swiftly.com/" },
      { text: "News", url: "https://www.swiftly.com/resources/newsroom" },
    ],
    categories: ["consumer"],
  },

  {
    id: "moot-group",
    name: "The MOOT Group",
    description:
      "The MOOT Group invests in and scales e-commerce technology companies, partnering with retail brands to expand their digital presence.",
    logo: "/assets/images/portfolio/tmg.jpg",
    status: "active",
    metrics: [
      { value: "Debt Financing", label: "Stage" },
      { value: "N/A", label: "Value" },
      { value: "2019", label: "Founded" },
    ],
    tags: [
      "E-commerce",
      "Retail Tech",
      "DTC",
      "Marketplace",
      "Digital Transformation",
    ],
    links: [
      { text: "Website", url: "https://www.moot.group/" },
      {
        text: "News",
        url: "https://www.crunchbase.com/organization/moot-9f3d#news",
      },
    ],
    categories: ["fintech"],
  },

  {
    id: "volansi",
    name: "Volansi",
    description:
      "Volansi develops autonomous VTOL drones for middle-mile logistics, specializing in time-critical delivery of medical supplies and industrial parts.",
    logo: "/assets/images/portfolio/volansi.jpg",
    status: "exit",
    metrics: [
      { value: "2022", label: "Exit Date" },
      { value: "$50M", label: "Value" },
      { value: "2020", label: "Founded" },
    ],
    tags: [
      "exit",
      "Drone Delivery",
      "Logistics",
      "Autonomous Vehicles",
      "Middle-Mile",
      "Aerospace",
    ],
    links: [
      {
        text: "Website",
        url: "https://www.crunchbase.com/organization/volans-i",
      },
      {
        text: "News",
        url: "https://www.defensenews.com/air/2022/10/10/sierra-nevada-buys-drone-maker-volansi-after-vc-funding-dries-up/",
      },
    ],
    categories: ["infrastructure"],
  },

  {
    id: "wave-sports",
    name: "Wave Sports and Entertainment",
    description:
      "Wave Sports creates digital sports content and shows featuring top athletes, distributed across YouTube and social media platforms.",
    logo: "/assets/images/portfolio/wavetv.jpg",
    status: "active",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$100M", label: "Value" },
      { value: "2017", label: "Founded" },
    ],
    tags: [
      "Sports Media",
      "Digital Content",
      "Athlete Brands",
      "Podcasts",
      "Sports Entertainment",
    ],
    links: [
      { text: "Website", url: "https://www.wavesportsandentertainment.com/" },
      { text: "News", url: "https://www.crunchbase.com/organization/wavetv" },
    ],
    categories: ["consumer"],
  },

  {
    id: "8bit",
    name: "8-Bit Capital",
    description:
      "8-Bit Capital invests in software tools and platforms that create new connections between people and businesses through network effects.",
    logo: "/assets/images/portfolio/8bitcapital.jpg",
    status: "funds",
    metrics: [
      { value: "28", label: "Portfolio Companies" },
      { value: "Seed - Series A", label: "Investment Stages" },
    ],
    tags: ["funds", "Agree.com", "Hypermode", "Pipedream", "Upstream"],
    links: [
      { text: "Website", url: "https://8bitcapital.com/" },
      {
        text: "News",
        url: "https://jabrams.com/its-all-about-connecting-people/",
      },
    ],
    categories: ["ai", "consumer", "enterprise", "fintech", "infrastructure"],
  },
  {
    id: "blitzscaling",
    name: "Blitzscaling Ventures",
    description:
      "Blitzscaling Ventures partners with tech founders to apply rapid scaling principles developed at Stanford University.",
    logo: "/assets/images/portfolio/blitzscalingventures.jpg",
    status: "funds",
    metrics: [
      { value: "23", label: "Portfolio Companies" },
      { value: "Pre-Seed - Series B", label: "Investment Stages" },
    ],
    tags: [
      "funds",
      "Manus AI",
      "Crew AI",
      "Gametime",
      "Storyboarder",
      "Flexpa",
      "Buffalo Market",
    ],
    links: [
      { text: "Website", url: "https://www.blitzscalingvc.com/" },
      {
        text: "News",
        url: "https://www.blitzscalingvc.com/blog",
      },
    ],
    categories: ["fintech", "ai", "consumer"],
  },
  {
    id: "championhill",
    name: "Champion Hill Ventures",
    description:
      "Champion Hill Ventures backs founders tackling overlooked problems with non-consensus ideas and innovations in underserved markets.",
    logo: "/assets/images/portfolio/championhillventures.jpg",
    status: "funds",
    metrics: [
      { value: "45", label: "Portfolio Companies" },
      { value: "Seed - Series A", label: "Investment Stages" },
    ],
    tags: ["funds", "Space X", "Andruil", "Flexport"],
    links: [
      { text: "Website", url: "https://www.championhillventures.com/" },
      {
        text: "News",
        url: "https://www.championhillventures.com/insights",
      },
    ],
    categories: [
      "ai",
      "biotech",
      "consumer",
      "crypto",
      "fintech",
      "infrastructure",
      "games",
    ],
  },
  {
    id: "frontures",
    name: "Frontier Technology Partners",
    description:
      "Frontier Technology Partners invests in early-stage startups building transformative technology across multiple sectors.",
    logo: "/assets/images/portfolio/frontures.jpg",
    status: "funds",
    metrics: [
      { value: "21", label: "Portfolio Companies" },
      { value: "Pre-Seed - Seed", label: "Investment Stages" },
    ],
    tags: ["funds", "FreeFuse", "Kanari AI", "Pixel Canvas"],
    links: [
      { text: "Website", url: "https://www.frontures.com/" },
      {
        text: "News",
        url: "https://frontures.com/blog/",
      },
    ],
    categories: ["fintech", "ai", "enterprise"],
  },
  {
    id: "fuel",
    name: "Fuel Ventures",
    description:
      "Fuel Ventures provides early-stage funding and support to high-potential technology companies across Europe.",
    logo: "/assets/images/portfolio/fuelventures.jpg",
    status: "funds",
    metrics: [
      { value: "200+", label: "Portfolio Companies" },
      { value: "Pre-Seed - Series A", label: "Investment Stages" },
    ],
    tags: ["funds", "Wombat", "Prosper", "OnBuy", "Paddle", "Shopwave"],
    links: [
      { text: "Website", url: "https://www.fuel.ventures/" },
      {
        text: "News",
        url: "https://www.fuel.ventures/news",
      },
    ],
    categories: ["fintech", "consumer"],
  },
  {
    id: "gaingels",
    name: "Gaingels",
    description:
      "Gaingels is a leading investment platform focused on supporting diverse founders and promoting equity in venture capital.",
    logo: "/assets/images/portfolio/gaingels.jpg",
    status: "funds",
    metrics: [
      { value: "2,000+", label: "Portfolio Companies" },
      { value: "Seed - Pre-IPO", label: "Investment Stages" },
    ],
    tags: [
      "funds",
      "Airtable",
      "Clubhouse",
      "Carta",
      "Brex",
      "Notion",
      "Webflow",
    ],
    links: [
      { text: "Website", url: "https://gaingels.com/" },
      {
        text: "Talent Network",
        url: "https://jobs.gaingels.com/jobs",
      },
    ],
    categories: [
      "fintech",
      "ai",
      "consumer",
      "games",
      "enterprise",
      "infrastructure",
      "biotech",
      "crypto",
      "enterprise",
    ],
  },
  {
    id: "greencow",
    name: "Green Cow Ventures",
    description:
      "Green Cow Ventures is a seed-stage fund backing diverse teams using deep tech to transform global industries like agriculture and finance.",
    logo: "/assets/images/portfolio/greencowvc.jpg",
    status: "funds",
    metrics: [
      { value: "10", label: "Portfolio Companies" },
      { value: "Seed", label: "Investment Stages" },
    ],
    tags: ["funds", "CloudAdmin", "Besser.FM", "Bear Flag Robotics"],
    links: [
      { text: "Website", url: "https://www.greencow.vc/" },
      {
        text: "News",
        url: "https://medium.com/greencowvc",
      },
    ],
    categories: ["fintech", "ai", "enterprise", "infrastructure", "consumer"],
  },
  {
    id: "humanventures",
    name: "Human Ventures",
    description:
      "Human Ventures is a human-first VC firm that invests in diverse, resilient founders across consumer and enterprise technology sectors.",
    logo: "/assets/images/portfolio/humanventures.jpg",
    status: "funds",
    metrics: [
      { value: "60+", label: "Portfolio Companies" },
      { value: "Pre-Seed - Seed", label: "Investment Stages" },
    ],
    tags: ["funds", "Capsule", "Girlboss", "Headspace", "The Skimm", "Valance"],
    links: [
      { text: "Website", url: "https://human.vc/" },
      {
        text: "News",
        url: "https://medium.com/human-ventures",
      },
    ],
    categories: ["ai", "consumer", "enterprise", "fintech"],
  },
  {
    id: "untapped",
    name: "Untapped Capital",
    description:
      "Untapped Capital backs pre-seed startups with unique approaches to large markets, focusing on founders outside traditional networks.",
    logo: "/assets/images/portfolio/untappedcapital.jpg",
    status: "funds",
    metrics: [
      { value: "27", label: "Portfolio Companies" },
      { value: "Pre-Seed", label: "Investment Stages" },
    ],
    tags: ["funds", "Pixels", "Payman", "DocDraft", "Covalent"],
    links: [
      { text: "Website", url: "https://www.untapped.vc/" },
      {
        text: "News",
        url: "https://www.webwire.com/ViewPressRel.asp?aId=309595",
      },
    ],
    categories: [
      "ai",
      "consumer",
      "fintech",
      "consumer",
      "crypto",
      "enterprise",
      "games",
      "infrastructure",
    ],
  },
];

export default portfolioData;
