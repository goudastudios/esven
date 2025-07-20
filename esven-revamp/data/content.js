// Shared content data for all Esven.us designs
// This file serves as the single source of truth for all content

const content = {
  // Site metadata
  meta: {
    title: "Esalen Ventures",
    tagline: "We know people",
    subtitle: "We invest in people",
    description: "We can spot the people who will succeed who live eat and breath their ideas and will stop at nothing to achieve them",
    copyright: "© 2021 by Esalen Ventures"
  },

  // Navigation structure
  navigation: [
    { name: "Home", url: "/", active: true },
    { name: "Team", url: "/team" },
    { 
      name: "Portfolio", 
      url: "/portfolio",
      submenu: [
        { name: "Recent investments", url: "/recent-investments" },
        { name: "Funds", url: "/portfolio-funds" }
      ]
    },
    { name: "Contact", url: "/contact" }
  ],

  // Hero section content
  hero: {
    mainHeading: "We know people",
    subHeading: "We invest in people",
    description: "We can spot the people who will succeed who live eat and breath their ideas and will stop at nothing to achieve them who understand the need for a compounding advantage have a compelling vision that is disruptive; who can and will attract talent and capital."
  },

  // How we operate section
  operations: {
    title: "How we operate:",
    points: [
      "Find the right people with disruptive ideas.",
      "Help them find and fill their gaps.",
      "Connect them to the people we know who will take them further. Much further."
    ]
  },

  // Strategy section
  strategy: {
    title: "Our strategy is one of concentration with diversification.",
    points: [
      "There is no 'One Right Way'.",
      "We utilize multiple strategies.",
      "We know we don't know it all.",
      "But we know people who do.",
      "Knowing the right people leads to a lot more clarity, simplicity and productivity."
    ]
  },

  // Portfolio section (to be updated with real data)
  portfolio: {
    title: "Who we've helped:",
    description: "Obviously what we invest in doesn't tell you as much as who we invest in. These are the companies and funds that represent the people who we know will succeed or have already succeeded",
    companies: [
      // Placeholder - will be replaced with real portfolio data
      {
        id: 1,
        name: "Company 1",
        description: "Innovative tech startup",
        category: "Technology",
        stage: "Series A",
        valuation: "$10M",
        status: "Active",
        website: "https://example.com",
        blog: "https://example.com/blog",
        logo: "/assets/images/company1-logo.png"
      }
      // More companies will be added here
    ]
  },

  // Team information (placeholder)
  team: {
    title: "Our Team",
    members: [
      // To be populated with actual team data
    ]
  },

  // Contact information
  contact: {
    title: "Contact Us",
    // Contact details to be added
  }
};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = content;
}

// Export for browser
if (typeof window !== 'undefined') {
  window.EsvenContent = content;
}
