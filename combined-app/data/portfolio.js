const portfolioData = [
  {
    id: "aether",
    name: "Aether",
    description:
      "Aether provides a molecular assembler platform that combines high-throughput robotics, machine learning, and synthetic biology to map millions of enzyme-reaction combinations, enabling the engineering of new classes of nanoscale machines using protein building blocks called molecular assemblers.",
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
    id: "almanac",
    name: "Almanac",
    description:
      "Almanac is a modern document collaboration platform designed for remote teams, offering version control, automated workflows, and structured knowledge management. It serves as a next-generation alternative to traditional office suites, focusing on async collaboration and productivity for distributed teams.",
    logo: "/assets/images/portfolio/almanac.jpg",
    status: "inactive",
    metrics: [
      { value: "2025", label: "Inactive Date" },
      { value: "2017", label: "Founded" },
    ],
    tags: [
      "Document Collaboration",
      "Remote Work",
      "Productivity",
      "Knowledge Management",
      "SaaS",
    ],
    links: [
      { text: "Website", url: "https://get.almanac.io/" },

      { text: "News", url: "https://get.almanac.io/go-forward" },
    ],
    categories: ["enterprise"],
  },

  {
    id: "better-mortgage",
    name: "Better Mortgage",
    description:
      "Better Mortgage is a technology-driven mortgage lender dedicated to simplifying home financing through a fully digital platform. The company was founded in 2014 with the mission to streamline the mortgage process, making it faster, more transparent, and more affordable by eliminating unnecessary fees and leveraging technology to automate traditionally manual processes.",
    logo: "/assets/images/portfolio/better.jpg",
    status: "exit",
    metrics: [
      { value: "$200M", label: "Value" },
      { value: "2023", label: "Exit Year" },
      { value: "2014", label: "Founded" },
    ],
    tags: [
      "exit",
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
      "Blockstream is a leading Bitcoin and blockchain technology company that develops infrastructure for the emerging Bitcoin economy. Founded in 2014 by Dr. Adam Back and other Bitcoin developers, Blockstream builds products that enhance the security, privacy, and functionality of Bitcoin, including the Liquid Network (a Bitcoin sidechain), Core Lightning implementation, and enterprise-grade Bitcoin mining solutions.",
    logo: "/assets/images/portfolio/blockstream.jpg",
    status: "active",
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
      "Cart.com is a leading provider of unified commerce and logistics solutions, enabling B2C and B2B companies to manage their entire commerce operations from discovery to delivery. The company offers a comprehensive suite of services including order management, inventory management, fulfillment, and digital commerce solutions, helping over 6,000 brands streamline their operations and enhance customer experiences.",
    logo: "/assets/images/portfolio/cart.jpg",
    status: "active",
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
      "Coffeeseed is a technology company focused on transforming the specialty coffee industry by creating a more accessible and efficient trading platform. The company provides a comprehensive solution that connects coffee buyers and sellers through a digital marketplace, offering tools for quality assessment, transaction management, and trade finance. Coffeeseed's platform aims to streamline the coffee supply chain by replacing traditional, fragmented communication methods with an integrated system that benefits all stakeholders in the specialty coffee value chain.",
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
      "Creatify AI is an AI-powered platform that transforms product links into high-performing video advertisements in minutes. The platform automates the entire video ad creation process, from competitive analysis to final export, helping marketers and e-commerce brands scale their creative output. With features like AI avatars, automated scriptwriting, and performance optimization, Creatify enables users to generate dozens of video ad variants optimized for platforms like TikTok, Meta, YouTube, and Snapchat.",
    logo: "/assets/images/portfolio/creatify.jpg",
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
      "Darwin Homes is a vertically-integrated real estate investment management platform specializing in single-family rental properties. The company offers a comprehensive, tech-enabled solution for property acquisition, renovation, and management, focusing on making the rental experience seamless for both property owners and residents. Their platform includes features like self-guided tours with smart locks, digital applications, online rent payments, and 24/7 digital support.",
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
      "Delix Therapeutics is a clinical-stage neuroscience company developing a novel class of neuroplasticity-promoting therapeutics called neuroplastogens. These compounds are designed to treat a wide range of neuropsychiatric and neurodegenerative disorders by promoting the growth and repair of neural connections in the brain. The company's approach builds on the discovery that certain compounds can induce neuroplasticity without the hallucinogenic effects of traditional psychedelics, potentially offering safer, more scalable treatment options for conditions like depression, PTSD, addiction, and cognitive impairment.",
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
      "Dibs Capital is a financial technology company specializing in the tokenization of real estate and private equity assets. The company provides an end-to-end platform that transforms traditional assets into digital securities, enabling improved liquidity, fractional ownership, and more efficient capital markets. Dibs Capital's distributed investment banking platform leverages blockchain technology to create a compliant ecosystem for issuing, managing, and trading digital securities, with a focus on real estate and other alternative assets.",
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
      "Feel is a wellness company that develops clinically-backed, clean-label nutritional supplements and wellness products. The company focuses on creating high-quality, bioavailable formulas using patented ingredients, botanicals, and plant extracts. Feel's product line includes multivitamins, hair care, skin care, and energy supplements, all designed with a focus on scientific research and clean formulations. The company differentiates itself by avoiding synthetic fillers and using research-backed doses of premium ingredients.",
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
    id: "fuzzy",
    name: "Fuzzy",
    description:
      "Fuzzy is a digital pet care company that provides subscription-based veterinary services through a mobile application. The platform connects pet parents with licensed veterinarians 24/7 for virtual consultations, offering convenient access to pet healthcare. Fuzzy also provides home delivery of medications, supplements, and pet essentials, creating a comprehensive ecosystem for pet wellness. The company aims to make veterinary care more accessible and affordable while reducing strain on traditional veterinary clinics.",
    logo: "/assets/images/portfolio/fuzzy.jpg",
    status: "inactive",
    metrics: [
      { value: "2023", label: "Inactive Date" },
      { value: "2016", label: "Founded" },
    ],
    tags: [
      "Pet Care",
      "Veterinary Telemedicine",
      "Digital Health",
      "Subscription Service",
      "Pet Wellness",
      "Acquired",
    ],
    links: [
      { text: "Website", url: "https://www.yourfuzzy.com/" },
      { text: "News", url: "https://www.crunchbase.com/organization/fuzzy" },
    ],
    categories: ["consumer"],
  },

  {
    id: "geologie",
    name: "Geologie",
    description:
      "Geologie is a direct-to-consumer men's skincare brand that offers personalized skin, hair, and body care products. The company uses a data-driven approach to create customized skincare routines based on individual skin type and concerns. Geologie's product line includes clinically-formulated products such as the Retinol Night Cream, Natural Deodorant, and Tone Control Face Cream. The brand expanded into retail with its Clear System acne care line available in over 900 Target stores. In 2025, Geologie was acquired by Megalabs USA, a pharmaceutical company, to enhance its position in the dermatology and personal care market.",
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
      "Grove Collaborative is a digitally native, sustainable consumer products company that offers a curated selection of natural home, personal care, and wellness products. The company operates as a Certified B Corp with a mission to transform the consumer products industry into a force for human and environmental good. Grove's direct-to-consumer platform provides a convenient subscription service for eco-friendly household essentials, including cleaning supplies, personal care items, and pet care products. In 2022, Grove went public through a SPAC merger with Virgin Group Acquisition Corp II, trading on the NYSE under the ticker 'GROV' with a $1.5 billion valuation.",
    logo: "/assets/images/portfolio/grove.jpg",
    status: "exit",
    metrics: [
      { value: "$60M", label: "Value" },
      { value: "2021", label: "Exit Year" },
      { value: "2014", label: "Founded" },
    ],
    tags: [
      "exit",
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
      "Hologram is a leading cellular connectivity platform for IoT devices, providing global, reliable connectivity solutions for businesses deploying connected devices. The company's platform offers SIM cards and connectivity management tools that enable seamless IoT deployments across 190+ countries through 550+ carrier partners. Hologram's technology powers a wide range of IoT applications, from industrial equipment monitoring to smart city infrastructure. The company raised $65 million in Series B funding led by Tiger Global in 2021 to expand its global network and platform capabilities.",
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
      "Hyperscience is an enterprise AI platform that specializes in intelligent document processing (IDP) and workflow automation. The company's machine learning-powered platform helps organizations transform unstructured content into structured, actionable data with industry-leading accuracy rates of 99.5%. Hyperscience serves federal, state, and local agencies, as well as enterprises across various sectors, by automating document-intensive processes such as mortgage applications, insurance claims, and student visa processing. The company has raised over $400 million in funding and is known for its FedRAMP High authorization, ensuring the highest levels of security and compliance for government and regulated industries.",
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
      "Instil is a modern nonprofit software platform designed to transform donor relationships and maximize social impact. The company provides an intuitive, mobile-friendly donor management system that helps nonprofit organizations manage major gifts, capital campaigns, planned giving, and grant tracking. Instil's platform offers a 360-degree view of donor relationships, enabling fundraisers to make data-driven decisions and improve donor engagement. With a focus on user experience, Instil's tools require minimal training and help nonprofits increase their fundraising effectiveness and operational efficiency.",
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
      "Jumbotail is India's leading B2B marketplace and New Retail platform, serving over 250,000 mom & pop stores (\"Kiranas\") across 50+ cities in India. The company operates a full-stack platform that includes a B2B marketplace, supply chain & logistics, fintech solutions, and a retail operating system. Jumbotail's ecosystem helps streamline food and grocery distribution, providing next-day storefront delivery to small retailers. In June 2025, Jumbotail raised $120 million in a funding round led by SC Ventures, bringing its total funding to $263 million, and completed the acquisition of Solv, a B2B agritech platform.",
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
      "Knix is a direct-to-consumer intimate apparel brand known for its innovative, comfortable, and leak-proof underwear and loungewear. Founded in 2012 by Joanna Griffiths, Knix revolutionized the intimate apparel industry with its body-positive approach and proprietary technology for period and bladder leak protection. In July 2022, Knix was acquired by Essity for $400 million, making Essity the global market leader in leakproof apparel. The company continues to operate independently under Essity's ownership, with Joanna Griffiths retaining a 20% stake and remaining as President. Knix's product line includes leakproof underwear, bras, swimwear, and loungewear, all designed with a focus on comfort, functionality, and body positivity.",
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
    id: "konvi",
    name: "Konvi",
    description:
      "Konvi is a mobile investment platform that democratizes access to alternative assets, including luxury goods, art, and collectibles. Founded in 2020 by Eran Peer and Ioana Surdu-Bob, Konvi enables users to invest in high-value assets that were traditionally accessible only to institutional investors or high-net-worth individuals. The platform offers curated investment opportunities in assets like blue-chip artwork, fine wine, and other alternative investments, with potential returns of 8-35% annually. Konvi's model allows fractional ownership, making these investments accessible to a broader audience while providing portfolio diversification beyond traditional asset classes.",
    logo: "/assets/images/portfolio/konvi.jpg",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$5M", label: "Value" },
      { value: "2020", label: "Founded" },
    ],
    tags: ["active"],
    links: [
      { text: "Website", url: "https://konvi.app/" },
      {
        text: "News",
        url: "https://www.crunchbase.com/organization/konvi",
      },
    ],
    categories: ["fintech"],
  },

  {
    id: "lalo",
    name: "Lalo",
    description:
      "Lalo is a direct-to-consumer baby and toddler product company that designs and sells high-quality, thoughtfully designed essentials for modern families. Founded by Greg Davidson and Michael Wieder, Lalo focuses on creating durable, safe, and stylish products that grow with children from infancy through toddlerhood. The company emphasizes clean design, non-toxic materials, and thoughtful functionality in its product line, which includes high chairs, play yards, and other nursery essentials. In June 2023, Lalo raised $10.1 million in Series A funding led by Spin Master Ventures, with participation from Babylist and Kevin Durant's Thirty Five Ventures, bringing their total funding to $17.2 million.",
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
    id: "lolly",
    name: "Lolly",
    description:
      "Lolly is a social dating platform that revolutionizes online dating through short-form video profiles, allowing users to express their personalities more authentically. Founded in 2020 by Marc Baghadjian and Sacha Schermerhorn, Lolly aims to create more meaningful connections by moving beyond static photos to dynamic video content. The platform focuses on helping users showcase their true selves through creative video profiles, making the online dating experience more engaging and transparent. Lolly has raised funding from multiple investors, including Adven, and has positioned itself as a fresh alternative in the competitive dating app market.",
    logo: "/assets/images/portfolio/lolly.jpg",
    status: "inactive",
    metrics: [
      { value: "2022", label: "Inactive Date" },

      { value: "2018", label: "Founded" },
    ],
    tags: ["Dating", "Social Media", "Gen Z", "Mobile App", "Video"],
    links: [
      { text: "Website", url: "https://www.thelollyapp.com/" },
      {
        text: "News",
        url: "https://www.crunchbase.com/organization/skippit",
      },
    ],
    categories: ["consumer"],
  },

  {
    id: "metadata",
    name: "Metadata",
    description:
      "Metadata is a B2B marketing automation platform that leverages AI to optimize and automate digital advertising campaigns across multiple channels including LinkedIn, Google, and Meta. The company's AI-driven platform helps marketing teams scale their demand generation efforts by automating targeting, bidding, and campaign optimization. Metadata's unique approach focuses on driving actual pipeline and revenue rather than just clicks and leads, making it a powerful tool for account-based marketing (ABM) and go-to-market (GTM) strategies. In March 2022, Metadata raised $40 million in Series B funding, bringing its total funding to over $58.5 million from investors including Resolute Ventures and LAUNCH.",
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
      "Olvin is an analytics platform that provides location-based intelligence and consumer behavior insights for businesses. The company's platform analyzes location data, demographics, and behavioral patterns to offer valuable insights into consumer movements and preferences. Olvin's technology helps businesses understand foot traffic patterns, optimize store locations, and make data-driven decisions about their physical presence. The company raised funding in a seed round in August 2021, with participation from investors including Francisco Crespo and Untapped Capital. Olvin's solutions are particularly valuable for retail, real estate, and consumer-facing businesses looking to enhance their market strategy with location intelligence.",
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
      "Pagaya is financial technology company that enables financial institutions to expand access to more customers through its artificial intelligence network.",
    logo: "/assets/images/portfolio/pagaya.jpg",
    status: "exit",
    metrics: [
      { value: "2022", label: "Exit Date" },
      { value: "$8.5B", label: "Value" },
      { value: "2016", label: "Founded" },
    ],
    tags: [
      "exit",
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
      "Passport is a leading international shipping and compliance platform designed specifically for direct-to-consumer (DTC) e-commerce brands. The company provides comprehensive cross-border solutions including international shipping, compliance management, and payment localization to help brands expand globally. Passport's technology handles customs clearance, duties, and taxes while providing a seamless checkout experience for international customers. In January 2022, Passport raised $39 million in Series B funding led by TCV, with participation from Flexport, FJ Labs, and Pure Imagination, bringing their total funding to over $39 million. The platform supports millions of parcels annually across multiple markets and currencies, with clients including BrüMate, Tommy John, and KraveBeauty.",
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
      "People.ai is a leading revenue operations and intelligence platform that leverages artificial intelligence to transform business activity data into actionable insights for sales teams. The company's AI-powered platform helps organizations automate data capture, provide real-time deal intelligence, and optimize revenue operations. People.ai's technology connects to existing tools in a company's tech stack to automatically capture customer interactions and provide visibility into the entire revenue lifecycle. In August 2021, the company achieved unicorn status with a $100 million Series D funding round at a $1.1 billion valuation, co-led by Akkadian Ventures and Mubadala Capital, bringing their total funding to over $200 million.",
    logo: "/assets/images/portfolio/peopleai.jpg",
    status: "active",
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
      "Pryon is an enterprise AI company that provides a Retrieval as a Service (RaaS) platform designed to accelerate generative and agentic AI adoption in large organizations. The company's technology offers a secure, scalable solution for enterprises to implement Retrieval-Augmented Generation (RAG) systems, enabling instant, verifiable answers from all forms of content. Pryon's platform includes components like the Ingestion Engine, Retrieval Engine, and Generative Engine, which work together to transform enterprise knowledge into actionable insights. In September 2023, Pryon raised $100 million in Series B funding, with participation from the US Innovative Technology Fund and other investors, bringing their total funding to over $130 million.",
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
      "Quiver is a London-based technology company that provides emissionless same-day delivery services, focusing on quick commerce (q-commerce) solutions. Founded in 2021, Quiver enables brands and retailers to offer fast, sustainable delivery options to their customers. The company's platform leverages electric vehicles and optimized routing to provide a more environmentally friendly alternative to traditional delivery services. Quiver's technology focuses on unlocking speed, customer-centricity, and sustainability in last-mile delivery, helping businesses meet the growing demand for instant, eco-conscious delivery options in urban environments like London.",
    logo: "/assets/images/portfolio/quiver.jpg",
    status: "active",
    metrics: [
      { value: "Seed", label: "Stage" },
      { value: "$10M", label: "Value" },
      { value: "2021", label: "Founded" },
    ],
    tags: [
      "Fintech",
      "Mortgage",
      "Digital Lending",
      "Public Company",
      "AI-Powered Lending",
    ],
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
      "Republic is a leading investment platform that enables individuals to invest in startups, crypto, real estate, and other alternative assets with as little as $50. Founded in 2013, the company operates one of the largest private investment platforms, having helped raise over $2.6 billion for more than 3,000 companies. Republic's platform provides access to a wide range of investment opportunities, including equity crowdfunding, tokenized assets, and venture funds. The company has played a significant role in democratizing access to private market investments, with notable success stories including Revolut, which saw over 5,000% growth for early investors. Republic also offers services such as community engagement, RWA (Real World Assets) tokenization, and web3 advisory.",
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
      "Rescale is a San Francisco-based company that provides a full-stack platform for high-performance computing (HPC) in the cloud. Founded in 2011, Rescale enables engineers and scientists to run complex simulations and perform large-scale computing tasks without the need for on-premises infrastructure. The company's platform offers access to a wide range of cloud-based computing resources, AI/ML tools, and simulation software, making it easier for organizations to accelerate their research and development processes. Rescale has raised $369 million across 10 funding rounds, with backing from prominent investors including Initialized Capital, M12 (Microsoft's venture fund), and Y Combinator. The company serves industries such as aerospace, automotive, biotech, and energy, helping them reduce costs and speed up time-to-market for innovative products.",
    logo: "/assets/images/portfolio/rescale.jpg",
    status: "active",
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
      "Rise is a tech-focused job platform that connects professionals with opportunities at startups and tech companies. The platform serves as an AI-powered job search copilot, helping candidates find roles in various domains including engineering, product, design, marketing, sales, and operations. Founded to create a more supportive and efficient job search experience, Rise offers a free platform for job seekers to build their digital presence and connect with mission-aligned companies. The company emphasizes remote work opportunities and has built a community around career development in the tech industry. Rise's platform is designed to help both job seekers and employers in the tech ecosystem find better matches through its curated approach to job listings and talent discovery.",
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
      "Secure Frame is a compliance automation platform that helps organizations achieve and maintain various security and privacy compliance certifications. Founded in 2020 by Shrav Mehta and Natasja Nielsen, the company provides a comprehensive solution for managing compliance with standards such as SOC 2, ISO 27001, PCI DSS, HIPAA, and GDPR. Secure Frame's platform automates the compliance process, including evidence collection, policy management, and risk assessment, significantly reducing the time and resources required for audits. The company has raised $79 million across three funding rounds, with a $56 million Series B led by Accomplice, and serves thousands of businesses including AngelList, Ramp, Remote, and Coda. Secure Frame's mission is to simplify security compliance for companies of all sizes, enabling them to build trust with customers and partners.",
    logo: "/assets/images/portfolio/secureframe.jpg",
    status: "active",
    metrics: [
      { value: "Series B", label: "Stage" },
      { value: "$294M", label: "Value" },
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
    id: "seller-geni",
    name: "SellerGeni",
    description:
      "SellerGeni is an Amazon seller software platform that helps e-commerce businesses optimize their Amazon marketplace performance. Founded in 2018 and based in Bangalore, India, the company provides tools for product research, keyword tracking, competition analysis, and sales optimization specifically designed for Amazon sellers. SellerGeni's platform enables businesses to make data-driven decisions to improve their product listings, advertising campaigns, and overall sales performance on Amazon. The company has raised $642,000 across five seed funding rounds, with the largest being $307,000 in December 2021. SellerGeni serves a global customer base of e-commerce sellers looking to scale their Amazon businesses more effectively.",
    logo: "/assets/images/portfolio/sellergeni.jpg",
    status: "active",
    metrics: [
      { value: "Angel", label: "Stage" },
      { value: "$6.6M", label: "Value" },
      { value: "2019", label: "Founded" },
    ],
    tags: [
      "E-commerce",
      "Amazon Seller Tools",
      "Marketplace Analytics",
      "Product Research",
      "Retail Tech",
    ],
    links: [
      { text: "Website", url: "https://www.sellergeni.com/" },
      { text: "Website", url: "https://www.sellergeni.com/blog/" },
    ],
    categories: ["consumer"],
  },

  {
    id: "skysafe",
    name: "SkySafe",
    description:
      "SkySafe is a leader in airspace security, providing advanced drone detection and mitigation solutions. The company's cloud-based platform enables organizations to identify, track, and analyze drone activity in real-time, offering protection against potential security threats. SkySafe's technology is used across various sectors including airports, correctional facilities, critical infrastructure, military installations, and major sporting events. The company has raised $49.61 million across 8 funding rounds, with its latest being a Series B round in December 2021. SkySafe's solutions are trusted by organizations like the PGA Tour and Big 10 Stadiums for their ability to provide comprehensive airspace awareness and security against unauthorized drone activities.",
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
      "Super Plastic is a character design studio and entertainment company that creates animated celebrities, vinyl toys, and digital collectibles. The company is known for its unique virtual influencers and characters like Janky, Guggimon, and Dayzee, who exist across various digital and physical platforms. Super Plastic combines art, music, fashion, and storytelling to create a new form of entertainment where virtual characters have real-world influence. The company has raised $68.07 million across multiple funding rounds, with investors including The Alexa Fund, Google Ventures, Craft Ventures, and Sony Japan. Super Plastic's characters have collaborated with major brands and artists, appearing in music videos, video games, and exclusive merchandise drops.",
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
      "Swiftly is a retail technology platform that provides omnichannel tools for regional and independent retailers, helping them compete with larger chains in the digital space. The company's end-to-end digital platform enables retailers to enhance customer engagement, boost sales through personalization, and generate new profit streams. Swiftly also offers a retail media network that connects brands with retailers' customers through targeted advertising. The company achieved unicorn status with a $1 billion+ valuation following a $100 million Series C funding round led by BRV Capital Management. Swiftly's platform is designed to help retailers own the customer journey and leverage data analytics for better business outcomes.",
    logo: "/assets/images/portfolio/swiftly.jpg",
    status: "active",
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
      "The MOOT Group (TMG) is a technology investment firm that partners with transformative technology companies to disrupt markets and shape the future. Specializing in the digital economy, TMG invests in and acquires technology and digital businesses that solve complex challenges and enhance everyday life. With a focus on e-commerce technology, TMG provides end-to-end solutions for retail brands looking to scale their direct-to-consumer offerings across multiple channels and international markets. The company has secured £5 million in seed funding led by Fuel Ventures and has demonstrated rapid growth, with a reported 1300% growth rate and on track to reach £100M in revenue. TMG's portfolio includes partnerships with major retail brands like Sports Direct and The White Company.",
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
    id: "vialu",
    name: "Vialu",
    description:
      "Vialu (formerly Valiu) is a fintech company that developed financial solutions for emerging markets, with a particular focus on Latin America. The company was founded in 2018 and was based in Bogotá, Colombia. Vialu aimed to create the first crypto-economy in Venezuela, providing digital financial services to help users protect their savings from hyperinflation. The company went through Y Combinator's startup accelerator program and gained significant traction in the region. However, according to reports, Vialu has since shut down its operations. At its peak, the company had 17 employees and was recognized for its innovative approach to financial inclusion in challenging economic environments.",
    logo: "/assets/images/portfolio/vialu.jpg",
    status: "inactive",
    metrics: [
      { value: "2021", label: "Inactive Date" },
      { value: "2018", label: "Founded" },
    ],
    tags: [
      "Fintech",
      "Emerging Markets",
      "Financial Inclusion",
      "Crypto",
      "Latin America",
    ],
    links: [
      {
        text: "Website",
        url: "https://valiu.com/",
      },
      {
        text: "News",
        url: "https://www.crunchbase.com/organization/valiu",
      },
    ],
    categories: ["fintech"],
  },

  {
    id: "volansi",
    name: "Volansi",
    description:
      "Volansi is a developer of autonomous drone delivery solutions specializing in middle-mile logistics. The company focuses on vertical take-off and landing (VTOL) drones for time-critical delivery of parts and medical supplies. Volansi's technology enables automated, on-demand delivery services for industries requiring rapid transportation of essential items. The company has raised significant funding, including a $50 million Series B round led by Icon Ventures, with participation from Lightspeed Venture Partners and other investors. Volansi has partnered with organizations like the North Carolina Department of Transportation to implement commercial middle-mile delivery services. The company's drones are designed to operate in challenging environments and provide reliable delivery solutions for healthcare, industrial, and government sectors.",
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
      "Wave Sports and Entertainment (WSE) is a leading sports media company that creates and distributes digital content for the next generation of sports fans. The company focuses on building brands, original content, talent, and products for digitally native audiences. WSE produces popular sports shows and podcasts featuring notable athletes and personalities, including 'New Heights with Jason and Travis Kelce' and '7PM in Brooklyn' with Carmelo Anthony. The company has raised $59 million across multiple funding rounds, including a $27 million Series B. Wave Sports and Entertainment works with major brands and athletes to create engaging sports content across various digital platforms, including YouTube and social media.",
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
    id: "wyre",
    name: "Wyre",
    description:
      "Wyre was a cryptocurrency payment infrastructure company that provided APIs for businesses to accept crypto payments, manage digital assets, and facilitate fiat-to-crypto transactions. Founded in 2013 and based in San Francisco, Wyre developed a suite of payment solutions that enabled seamless integration of cryptocurrency transactions for businesses. The company was acquired by RockWallet in 2024, with its customer base being transitioned to the RockWallet platform. Wyre's technology allowed businesses to accept crypto payments, generate unique invoice addresses, and manage digital asset settlements. The company played a significant role in the crypto payment infrastructure space before its acquisition and subsequent shutdown of its original platform in 2023.",
    logo: "/assets/images/portfolio/wyre.jpg",
    status: "exit",
    metrics: [
      { value: "2024", label: "Exit Date" },
      { value: "$1.5B", label: "Value" },
      { value: "2013", label: "Founded" },
    ],
    tags: [
      "exit",
      "unicorn",
      "Crypto Payments",
      "Blockchain",
      "Fintech",
      "Digital Assets",
      "Payment Infrastructure",
    ],
    links: [
      { text: "Website", url: "https://www.sendwyre.com/" },

      {
        text: "News",
        url: "https://www.rockwallet.com/blog/rockwallet-to-onboard-former-wyre-users-after-acquisition-of-its-customer-base",
      },
    ],
    categories: ["crypto"],
  },
  {
    id: "8bit",
    name: "8-Bit Capital",
    description:
      "8-Bit Capital invests in startups that connect people and businesses in new ways. We invest in software tools and platforms that use the power of networksAether provides a molecular assembler platform that combines high-throughput robotics, machine learning, and synthetic biology to map millions of enzyme-reaction combinations, enabling the engineering of new classes of nanoscale machines using protein building blocks called molecular assemblers.",
    logo: "/assets/images/portfolio/8bitcapital.jpg",
    status: "active",
    metrics: [
      { value: "28", label: "Portfolio Companies" },
      { value: "Seed - Series A", label: "Investment Stages" },
    ],
    tags: [
      "funds",
      "AI",
      "Cloud",
      "Cybersecurity",
      "Enterprise",
      "Fintech",
      "Social",
    ],
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
      "The Experts on Scale. We partner with tech founders to apply the principles of blitzscaling that we developed at Stanford University with Chris Yeh and Reid Hoffman.",
    logo: "/assets/images/portfolio/blitzscalingventures.jpg",
    status: "active",
    metrics: [
      { value: "23", label: "Portfolio Companies" },
      { value: "Pre-Seed - Series B", label: "Investment Stages" },
    ],
    tags: [
      "funds",
      "machine learning",
      "marketplaces",
      "payments",
      "services",
      "platforms",
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
      "Champion Hill Ventures seeks founders solving large problems hiding in plain sight. To find them, we look for non-consensus ideas, pre-category behavior, or innovation that is structurally underserved by the capital markets. ",
    logo: "/assets/images/portfolio/championhillventures.jpg",
    status: "active",
    metrics: [
      { value: "45", label: "Portfolio Companies" },
      { value: "Seed - Series A", label: "Investment Stages" },
    ],
    tags: [
      "funds",
      "Defense",
      "Hard Technology",
      "New Computing",
      "Digital Sovereignty",
      "Curveballs",
    ],
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
    description: "Disrupting the Status Quo to Build a Better Future",
    logo: "/assets/images/portfolio/frontures.jpg",
    status: "active",
    metrics: [
      { value: "21", label: "Portfolio Companies" },
      { value: "Pre-Seed - Seed", label: "Investment Stages" },
    ],
    tags: [
      "funds",
      "Manufacturing technology",
      "Software",
      "Information Technology (IT)",
      "Engineering sectors",
      "Payments",
    ],
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
    description: "Fueling the growth of ambitious tech companies.",
    logo: "/assets/images/portfolio/fuelventures.jpg",
    status: "active",
    metrics: [
      { value: "200+", label: "Portfolio Companies" },
      { value: "Pre-Seed - Series A", label: "Investment Stages" },
    ],
    tags: [
      "funds",
      "B2B",
      "Marketplaces",
      "SaaS",
      "E-commerce",
      "Marketplaces",
      "Food & Delivery",
    ],
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
      "Gaingels is amongst the largest investors in the world aiming to show the world that equity of access and representation in venture capital delivers positive returns.",
    logo: "/assets/images/portfolio/gaingels.jpg",
    status: "active",
    metrics: [
      { value: "2,000+", label: "Portfolio Companies" },
      { value: "Seed - Pre-IPO", label: "Investment Stages" },
    ],
    tags: [
      "funds",
      "Digital Assets & Web 3.0",
      "Climate & Greentech",
      "Healthcare",
      "Robotics",
      "Proptech",
      "Media & Entertainment",
      "Space & Aviation",
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
      "We are a seed-stage fund seeking diverse founding teams leveraging deep tech to solve problems in foundational, global industries from farming to finance.",
    logo: "/assets/images/portfolio/greencowvc.jpg",
    status: "active",
    metrics: [
      { value: "10", label: "Portfolio Companies" },
      { value: "Seed", label: "Investment Stages" },
    ],
    tags: [
      "funds",
      "Deep Tech",
      "Robotics",
      "Financial Services",
      "Food & Agriculture",
      "IT Infrastructure",
    ],
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
      "We are a next generation venture capital firm, one that takes a human-first approach to investing. Builders ourselves, we invest in the humans as much as their companies. No matter where we invest, our founders embody the diversity, resilience, and ambition of New York.",
    logo: "/assets/images/portfolio/humanventures.jpg",
    status: "active",
    metrics: [
      { value: "60+", label: "Portfolio Companies" },
      { value: "Pre-Seed - Seed", label: "Investment Stages" },
    ],
    tags: [
      "funds",
      "Health & Wellness",
      "Future of Work",
      "Future of Money",
      "Community",
      "Media",
    ],
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
      "We invest in earliest of pre-seed startups, led by founders outside of typical networks, selling into large and growing markets, with a unique approach or insight.",
    logo: "/assets/images/portfolio/untappedcapital.jpg",
    status: "active",
    metrics: [
      { value: "27", label: "Portfolio Companies" },
      { value: "Pre-Seed", label: "Investment Stages" },
    ],
    tags: [
      "funds",
      "Web 3",
      "Blockchain",
      "Deep Tech",
      "B2B",
      "Life Sciences",
      "Healthcare",
      "E-commmerce",
    ],
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
  {
    id: "upandup",
    name: "Up & Up",
    description:
      "Up&Up is the smartest way for renters to build wealth while they rent. By renting an Up&Up home, renters participate in rental profits from day one, and are completely in control of their home",
    logo: "/assets/images/portfolio/upandup.svg",
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
    description: "",
    logo: "/assets/images/portfolio/petzey.jpg",
    status: "active",
    metrics: [
      { value: "Crowdfunding", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
      { text: "Website", url: "https://petzey.com/" },
      {
        text: "News",
        url: "https://www.webwire.com/ViewPressRel.asp?aId=309595",
      },
    ],
    categories: ["biotech", "ai"],
  },
  {
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: " ",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
    id: "aether",
    name: "Aether",
    description: "",
    logo: "/assets/images/portfolio/aether.jpg",
    status: "active",
    metrics: [
      { value: "Series A", label: "Stage" },
      { value: "$200M+", label: "Value" },
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
];

export default portfolioData;
