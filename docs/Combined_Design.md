Creating the combined Design4

**<u>1. Intro Page</u>**

esven-revamp/designs/design1/intro.html

**<u>2. Header</u>**

The header at: esven-revamp/designs/design1/index.html

Keep the shade of blue

<header class="header">
      <nav class="navbar">
        <div class="nav-container">
          <div class="logo">
            <h2>Esalen Ventures</h2>
          </div>
          <div class="nav-links" id="nav-links">
            <a href="/">Home</a>
            <a href="/design1/team.html">Team</a>
            <a href="/design1/portfolio.html">Portfolio</a>
            <!--    <a href="/design1/contact.html">Contact</a> -->
          </div>
        </div>
      </nav>

Except lets make the header sticky at the top like in Design 2 and 3.

**<u>3. Footer</u>**

The footer at: esven-revamp/designs/design1/index.html

keep the shade of blue

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h4>Esalen Ventures</h4>
            <p>We know people. We invest in winners.</p>
          </div>
          <div class="footer-contact">
            <h5>Ready to Partner?</h5>
            <button class="cta-button primary">Get In Touch</button>
          </div>
        </div>
        <div class="footer-bottom">
          <p id="footer-copyright">© (make the year keep up with the current year) 2021 by Esalen Ventures</p>
        </div>
      </div>
    </footer>

<u>**4. Landing Page**</u>

In general we like the overall look of design 3 so lets use that as an overal struture fo this page: esven-revamp/designs/design3/index.html

Now let describe th ecomponents we shoudl freate in a vertical list in order from top of the page to the botom pf the page

A. Hero Section Component

esven-revamp/designs/design2/index.html

<!-- Hero Section -->

    <section class="hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title" id="hero-title">We Know People</h1>
          <h2 class="hero-subtitle" id="hero-subtitle">We Invest in People</h2>
          <div class="hero-description" id="hero-description">
            <!-- Description populated by JS -->
          </div>
          <div class="hero-testimonial">
            <div class="testimonial-quote">
              "Esalen Ventures doesn't just write checks - they become true
              partners in your journey."
            </div>
            <div class="testimonial-author">
              <img
                src="https://via.placeholder.com/60x60"
                alt="Founder"
                class="author-avatar"
              />
              <div class="author-info">
                <div class="author-name">Jessica Park</div>
                <div class="author-title">CEO, InnovateTech (Exit: $2.1B)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="connection-network">
            <div class="network-node central">
              <div class="node-avatar">EV</div>
              <div class="node-label">Esalen Ventures</div>
            </div>
            <div class="network-node founder">
              <div class="node-avatar">👤</div>
              <div class="node-label">Founders</div>
            </div>
            <div class="network-node investor">
              <div class="node-avatar">💼</div>
              <div class="node-label">Co-Investors</div>
            </div>
            <div class="network-node advisor">
              <div class="node-avatar">🎯</div>
              <div class="node-label">Advisors</div>
            </div>
            <div class="network-node talent">
              <div class="node-avatar">⭐</div>
              <div class="node-label">Talent</div>
            </div>
            <!-- Connection lines will be added via CSS -->
          </div>
        </div>
      </div>
    </section>

But instead of the Quote (since we have quotes below) lete include the buttons from the hereo component from design 3

esven-revamp/designs/design3/index.html

          <div class="hero-actions">
            <button class="btn btn-primary">Explore Portfolio</button>
            <button class="btn btn-outline">Partner With Us</button>
          </div>

B. Our Approach Section Component

esven-revamp/designs/design2/index.html

<!-- Our Approach Section -->

    <section class="approach">
      <div class="container">
        <h3 class="section-title">How We Build Success Together</h3>
        <div class="approach-timeline">
          <div class="timeline-item">
            <div class="timeline-icon">🔍</div>
            <div class="timeline-content">
              <h4>Discover</h4>
              <p id="operations-point-1">
                Find the right people with disruptive ideas
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">🤝</div>
            <div class="timeline-content">
              <h4>Connect</h4>
              <p id="operations-point-2">Help them find and fill their gaps</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">🚀</div>
            <div class="timeline-content">
              <h4>Scale</h4>
              <p id="operations-point-3">
                Connect them to people who will take them further
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

C. Testimonials Component

esven-revamp/designs/design1/index.html

<!-- Testimonials -->

    <section class="testimonials">
      <div class="container">
        <h3 class="section-title">What Founders Say</h3>
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <div class="quote">
              "Esalen Ventures didn't just invest in our company - they invested
              in our vision and helped us execute it flawlessly."
            </div>
            <div class="author">
              <div class="author-name">Sarah Chen</div>
              <div class="author-title">CEO, TechCorp (Acquired by Google)</div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="quote">
              "Their network and expertise were invaluable in scaling from
              startup to IPO."
            </div>
            <div class="author">
              <div class="author-name">Michael Rodriguez</div>
              <div class="author-title">Founder, DataFlow (IPO 2023)</div>
            </div>
          </div>
        </div>
      </div>
    </section>

D. Contact sectino component

esven-revamp/designs/design3/index.html

​ <!-- Contact Section -->
​ <section class="contact">
​ <div class="container">
​ <div class="contact-content">
​ <h3 class="section-title">Let's Build Something Extraordinary</h3>
​ <p class="contact-subtitle">
​ Ready to join our portfolio of exceptional companies?
​ </p>
​ <div class="contact-actions">
​ <button class="btn btn-primary large">Start a Conversation</button>
​ </div>
​ </div>
​ </div>
​ </section>

**<u>5. Portfolio Page</u>**

Overall i like the background and general design of esven-revamp/designs/design3/portfolio.html

A. Portfolio Hero Component

esven-revamp/designs/design2/portfolio.html

    <section class="portfolio-hero">
      <div class="container">
        <h1>Stories of Partnership</h1>
        <p class="subtitle">
          Behind every successful company is a founder with a vision and the
          courage to pursue it. These are the stories of the remarkable people
          we've had the privilege to support.
        </p>
      </div>
    </section>

B. Portfolio Stats Component

esven-revamp/designs/design1/portfolio.html

    <section class="portfolio-stats">
      <div class="container">
        <div class="stats-overview">
          <div class="overview-card">
            <div class="overview-number">42</div>
            <div class="overview-label">Portfolio Companies</div>
          </div>
          <div class="overview-card">
            <div class="overview-number">18</div>
            <div class="overview-label">Successful Exits</div>
          </div>
          <div class="overview-card">
            <div class="overview-number">$12.8B</div>
            <div class="overview-label">Total Portfolio Value</div>
          </div>
          <div class="overview-card">
            <div class="overview-number">14.2x</div>
            <div class="overview-label">Average Return Multiple</div>
          </div>
        </div>
      </div>
    </section>

C. Portfolio Filters Component

esven-revamp/designs/design1/portfolio.html

   <section class="portfolio-filters">
      <div class="filter-container">
        <div class="filter-tabs">
          <div class="filter-tab active" data-filter="all">All Companies</div>
          <div class="filter-tab" data-filter="exits">Exits</div>
          <div class="filter-tab" data-filter="unicorns">Unicorns ($1B+)</div>
          <div class="filter-tab" data-filter="enterprise">Enterprise</div>
          <div class="filter-tab" data-filter="consumer">Consumer</div>
          <div class="filter-tab" data-filter="fintech">FinTech</div>
          <div class="filter-tab" data-filter="healthcare">Healthcare</div>
        </div>
      </div>
    </section>

D. Portfolio Grid Component

esven-revamp/designs/design3/portfolio.html

But i think using nextjs, react, tailwinds, and typescriot. instead of hardcoding everything, we can create one card then we shoudl create a list of inputs . this is becasue we have about 60 companies here and wirting all of it out will be cumbersome. It woudl be better to have 1 card type, then have a list of companies with theri filled in informaiton and it auto populated the 60 cards with theri variables.

<!-- Portfolio Grid -->

    <section class="portfolio-grid-section">
      <div class="container">
        <div class="portfolio-grid" id="portfolio-grid">
          <!-- Stripe -->
          <div class="portfolio-company" data-category="fintech exits unicorns">
            <div class="company-logo-container">
              <img
                src="../../assets/images/portfolio/stripe-logo.png"
                alt="Stripe"
              />
              <div class="company-status exit">Exit</div>
            </div>
            <div class="company-info">
              <h3 class="company-name">Stripe</h3>
              <p class="company-description">
                Online payment processing platform for internet businesses of
                all sizes.
              </p>

              <div class="company-metrics">
                <div class="company-metric">
                  <div class="company-metric-value">$95B</div>
                  <div class="company-metric-label">Exit Value</div>
                </div>
                <div class="company-metric">
                  <div class="company-metric-value">47x</div>
                  <div class="company-metric-label">Multiple</div>
                </div>
              </div>

              <div class="company-tags">
                <span class="company-tag">FinTech</span>
                <span class="company-tag">B2B</span>
                <span class="company-tag">Payments</span>
              </div>

              <div class="company-links">
                <a href="#" class="company-link">Details</a>
                <a href="#" class="company-link">Visit</a>
              </div>

​ </div>
​ </div>

​ <!-- Airbnb -->
​ <div
​ class="portfolio-company"
​ data-category="consumer exits unicorns"
​ >
​ <div class="company-logo-container">
​ <img
​ src="../../assets/images/portfolio/airbnb-logo.png"
​ alt="Airbnb"
​ />
​ <div class="company-status exit">Exit</div>
​ </div>
​ <div class="company-info">
​ <h3 class="company-name">Airbnb</h3>
​ <p class="company-description">
​ Global marketplace for unique accommodations and travel
​ experiences.
​ </p>

              <div class="company-metrics">
                <div class="company-metric">
                  <div class="company-metric-value">$75B</div>
                  <div class="company-metric-label">Exit Value</div>
                </div>
                <div class="company-metric">
                  <div class="company-metric-value">38x</div>
                  <div class="company-metric-label">Multiple</div>
                </div>
              </div>

              <div class="company-tags">
                <span class="company-tag">Consumer</span>
                <span class="company-tag">Travel</span>
                <span class="company-tag">Platform</span>
              </div>

              <div class="company-links">
                <a href="#" class="company-link">Details</a>
                <a href="#" class="company-link">Visit</a>
              </div>

​ </div>
​ </div>

​ <!-- Slack -->
​ <div
​ class="portfolio-company"
​ data-category="enterprise exits unicorns"
​ >
​ <div class="company-logo-container">
​ <img
​ src="../../assets/images/portfolio/slack-logo.png"
​ alt="Slack"
​ />
​ <div class="company-status exit">Exit</div>
​ </div>
​ <div class="company-info">
​ <h3 class="company-name">Slack</h3>
​ <p class="company-description">
​ Business communication platform for modern teams.
​ </p>

              <div class="company-metrics">
                <div class="company-metric">
                  <div class="company-metric-value">$27.7B</div>
                  <div class="company-metric-label">Exit Value</div>
                </div>
                <div class="company-metric">
                  <div class="company-metric-value">22x</div>
                  <div class="company-metric-label">Multiple</div>
                </div>
              </div>

              <div class="company-tags">
                <span class="company-tag">Enterprise</span>
                <span class="company-tag">SaaS</span>
                <span class="company-tag">Communication</span>
              </div>

              <div class="company-links">
                <a href="#" class="company-link">Details</a>
                <a href="#" class="company-link">Visit</a>
              </div>

​ </div>
​ </div>

​ <!-- Moderna -->
​ <div class="portfolio-company" data-category="healthcare unicorns">
​ <div class="company-logo-container">
​ <img
​ src="../../assets/images/portfolio/moderna-logo.png"
​ alt="Moderna"
​ />
​ <div class="company-status">Active</div>
​ </div>
​ <div class="company-info">
​ <h3 class="company-name">Moderna</h3>
​ <p class="company-description">
​ Pioneer in messenger RNA therapeutics and vaccines.
​ </p>

              <div class="company-metrics">
                <div class="company-metric">
                  <div class="company-metric-value">$185B</div>
                  <div class="company-metric-label">Peak Value</div>
                </div>
                <div class="company-metric">
                  <div class="company-metric-value">31x</div>
                  <div class="company-metric-label">Multiple</div>
                </div>
              </div>

              <div class="company-tags">
                <span class="company-tag">Healthcare</span>
                <span class="company-tag">Biotech</span>
                <span class="company-tag">mRNA</span>
              </div>

              <div class="company-links">
                <a href="#" class="company-link">Details</a>
                <a href="#" class="company-link">Visit</a>
              </div>

​ </div>
​ </div>

​ <!-- Snowflake -->
​ <div class="portfolio-company" data-category="enterprise unicorns">
​ <div class="company-logo-container">
​ <img
​ src="../../assets/images/portfolio/snowflake-logo.png"
​ alt="Snowflake"
​ />
​ <div class="company-status">Active</div>
​ </div>
​ <div class="company-info">
​ <h3 class="company-name">Snowflake</h3>
​ <p class="company-description">
​ Cloud data platform enabling data-driven organizations.
​ </p>

              <div class="company-metrics">
                <div class="company-metric">
                  <div class="company-metric-value">$45B</div>
                  <div class="company-metric-label">Valuation</div>
                </div>
                <div class="company-metric">
                  <div class="company-metric-value">18x</div>
                  <div class="company-metric-label">Multiple</div>
                </div>
              </div>

              <div class="company-tags">
                <span class="company-tag">Enterprise</span>
                <span class="company-tag">Cloud</span>
                <span class="company-tag">Data</span>
              </div>

              <div class="company-links">
                <a href="#" class="company-link">Details</a>
                <a href="#" class="company-link">Visit</a>
              </div>

​ </div>
​ </div>

​ <!-- Robinhood -->
​ <div
​ class="portfolio-company"
​ data-category="fintech consumer unicorns"
​ >
​ <div class="company-logo-container">
​ <img
​ src="../../assets/images/portfolio/robinhood-logo.png"
​ alt="Robinhood"
​ />
​ <div class="company-status">Active</div>
​ </div>
​ <div class="company-info">
​ <h3 class="company-name">Robinhood</h3>
​ <p class="company-description">
​ Commission-free investing platform democratizing finance.
​ </p>

              <div class="company-metrics">
                <div class="company-metric">
                  <div class="company-metric-value">$8.2B</div>
                  <div class="company-metric-label">Valuation</div>
                </div>
                <div class="company-metric">
                  <div class="company-metric-value">12x</div>
                  <div class="company-metric-label">Multiple</div>
                </div>
              </div>

              <div class="company-tags">
                <span class="company-tag">FinTech</span>
                <span class="company-tag">Consumer</span>
                <span class="company-tag">Trading</span>
              </div>

              <div class="company-links">
                <a href="#" class="company-link">Details</a>
                <a href="#" class="company-link">Visit</a>
              </div>

​ </div>
​ </div>
​ </div>
​ </div>
​ </section>

**<u>6. Team Page</u>**

overall this page: http://localhost:3001/design3/team.html

A. team hero component

esven-revamp/designs/design2/team.html

​ <!-- Team Hero -->
​ <section class="team-hero">
​ <div class="container">
​ <h1>The People Behind the Vision</h1>
​ <p class="subtitle">
​ Every great investment starts with understanding people. Our team
​ brings together diverse backgrounds, shared values, and a deep
​ commitment to building lasting relationships with founders.
​ </p>
​ </div>
​ </section>

B. Team Principle Component

esven-revamp/designs/design3/team.html

<!-- Team Principles -->

    <section class="team-principles">
      <div class="container">
        <div class="principles-grid">
          <div class="principle">
            <div class="principle-icon">⚡</div>
            <h3>Speed</h3>
            <p>
              Quick decisions, fast execution. We respect founders' time and
              move at startup speed.
            </p>
          </div>
          <div class="principle">
            <div class="principle-icon">🎯</div>
            <h3>Focus</h3>
            <p>
              Deep expertise in select sectors. We invest where we can add the
              most value.
            </p>
          </div>
          <div class="principle">
            <div class="principle-icon">🚀</div>
            <h3>Scale</h3>
            <p>
              Building companies that define categories and create lasting value
              at global scale.
            </p>
          </div>
        </div>
      </div>
    </section>

C. Team Grid Component

But i think using nextjs, react, tailwinds, and typescriot. instead of hardcoding everything, we can create one card then we shoudl create a list of inputs . this is becasue we have about 6 team members here and wirting all of it out will be cumbersome. It woudl be better to have 1 card type, then have a list of companies with theri filled in informaiton and it auto populated the 6 cards with their variables.

esven-revamp/designs/design1/team.html

 <!-- Team Grid -->

    <section class="team-grid-section">
      <div class="container">
        <h2 class="section-title">Investment Partners</h2>
        <div class="team-grid">
          <!-- Tom Vorisek -->
          <div class="team-member">
            <div class="member-image">
              <img
                src="../../assets/images/team/tom.avif"
                alt="Tom Vorisek"
              />
              <div class="member-performance">12x Avg Return</div>
            </div>
            <div class="member-info">
              <h3 class="member-name">Tom Vorisek</h3>
              <p class="member-title">Managing Partner & Co-Founder</p>

              <div class="member-metrics">
                <div class="metric">
                  <div class="metric-value">25+</div>
                  <div class="metric-label">Years Experience</div>
                </div>
                <div class="metric">
                  <div class="metric-value">18</div>
                  <div class="metric-label">Portfolio Exits</div>
                </div>
              </div>

              <p class="member-bio">
                Tom brings over 25 years of venture capital and private equity
                experience. Previously a Managing Director at Kleiner Perkins,
                he led investments in 12 companies that achieved billion-dollar
                valuations.
              </p>

              <div class="member-links">
                <a href="#" class="member-link">LinkedIn</a>
                <a href="#" class="member-link">Portfolio</a>
              </div>

​ </div>
​ </div>

​ <!-- Samir Ghosh -->
​ <div class="team-member">
​ <div class="member-image">
​ <img
​ src="../../assets/images/team/samir.avif"
​ alt="Samir Ghosh"
​ />
​ <div class="member-performance">18x Avg Return</div>
​ </div>
​ <div class="member-info">
​ <h3 class="member-name">Samir Ghosh</h3>
​ <p class="member-title">Managing Partner & Co-Founder</p>

              <div class="member-metrics">
                <div class="metric">
                  <div class="metric-value">22+</div>
                  <div class="metric-label">Years Experience</div>
                </div>
                <div class="metric">
                  <div class="metric-value">15</div>
                  <div class="metric-label">Portfolio Exits</div>
                </div>
              </div>

              <p class="member-bio">
                Samir is a seasoned technology investor with deep expertise in
                enterprise software and fintech. Former partner at Sequoia
                Capital, he has a proven track record of identifying
                market-defining companies early.
              </p>

              <div class="member-links">
                <a href="#" class="member-link">LinkedIn</a>
                <a href="#" class="member-link">Portfolio</a>
              </div>

​ </div>
​ </div>

​ <!-- Additional Team Members -->
​ <div class="team-member">
​ <div class="member-image">
​ <img
​ src="../../assets/images/team/scott.avif"
​ alt="Scott Fackert"
​ />
​ <div class="member-performance">14x Avg Return</div>
​ </div>
​ <div class="member-info">
​ <h3 class="member-name">Scott Fackert</h3>
​ <p class="member-title">Senior Partner</p>

              <div class="member-metrics">
                <div class="metric">
                  <div class="metric-value">15+</div>
                  <div class="metric-label">Years Experience</div>
                </div>
                <div class="metric">
                  <div class="metric-value">8</div>
                  <div class="metric-label">Portfolio Exits</div>
                </div>
              </div>

              <p class="member-bio">
                Sarah specializes in early-stage B2B software investments.
                Former VP at Andreessen Horowitz, she has led investments in 6
                unicorn companies and brings deep operational expertise from her
                time as a startup founder.
              </p>

              <div class="member-links">
                <a href="#" class="member-link">LinkedIn</a>
                <a href="#" class="member-link">Portfolio</a>
              </div>

​ </div>
​ </div>

          <div class="team-member">
            <div class="member-image">
              <img
                src="../../assets/images/team/dave.avif"
                alt="Dave Clauson"
              />
              <div class="member-performance">16x Avg Return</div>
            </div>
            <div class="member-info">
              <h3 class="member-name">Dave Clauson</h3>
              <p class="member-title">Principal</p>

              <div class="member-metrics">
                <div class="metric">
                  <div class="metric-value">12+</div>
                  <div class="metric-label">Years Experience</div>
                </div>
                <div class="metric">
                  <div class="metric-value">10</div>
                  <div class="metric-label">Portfolio Exits</div>
                </div>
              </div>

              <p class="member-bio">
                Michael focuses on healthcare technology and biotech
                investments. Former investment director at GV (Google Ventures),
                he has a strong background in identifying breakthrough medical
                technologies with massive market potential.
              </p>

              <div class="member-links">
                <a href="#" class="member-link">LinkedIn</a>
                <a href="#" class="member-link">Portfolio</a>
              </div>

​ </div>
​ </div>

          <div class="team-member">
            <div class="member-image">
              <img
                src="http://localhost:3000/assets/images/team/david.avif"
                alt="David McGrane"
              />
              <div class="member-performance">20x Avg Return</div>
            </div>
            <div class="member-info">
              <h3 class="member-name">David McGrane</h3>
              <p class="member-title">Managing Partner</p>

              <div class="member-metrics">
                <div class="metric">
                  <div class="metric-value">15+</div>
                  <div class="metric-label">Years Experience</div>
                </div>
                <div class="metric">
                  <div class="metric-value">25</div>
                  <div class="metric-label">Portfolio Exits</div>
                </div>
              </div>

              <p class="member-bio">
                David leads our enterprise software investments with deep
                expertise in B2B SaaS and infrastructure technologies.
                Previously partner at Andreessen Horowitz, he has guided
                numerous companies from seed to IPO.
              </p>

              <div class="member-links">
                <a href="#" class="member-link">LinkedIn</a>
                <a href="#" class="member-link">Portfolio</a>
              </div>

​ </div>
​ </div>

          <div class="team-member">
            <div class="member-image">
              <img
                src="http://localhost:3000/assets/images/team/tim.avif"
                alt="Tim Paschke"
              />
              <div class="member-performance">15x Avg Return</div>
            </div>
            <div class="member-info">
              <h3 class="member-name">Tim Paschke</h3>
              <p class="member-title">Partner</p>

              <div class="member-metrics">
                <div class="metric">
                  <div class="metric-value">10+</div>
                  <div class="metric-label">Years Experience</div>
                </div>
                <div class="metric">
                  <div class="metric-value">15</div>
                  <div class="metric-label">Portfolio Exits</div>
                </div>
              </div>

              <p class="member-bio">
                Tim specializes in fintech and consumer technology investments.
                Former VP at Goldman Sachs, he brings deep financial markets
                expertise and has a track record of identifying disruptive
                consumer platforms.
              </p>

              <div class="member-links">
                <a href="#" class="member-link">LinkedIn</a>
                <a href="#" class="member-link">Portfolio</a>
              </div>

​ </div>
​ </div>
​ </div>
​ </div>
​ </section>

**<u>7. Contact Page</u>**

we'll need to create this as it does not exist.

here is a potential example

export default function Example() {
return (
<div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
<svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
<defs>
<pattern
            x="50%"
            y={-64}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
<path d="M100 200V.5M.5 .5H200" fill="none" />
</pattern>
</defs>
<svg x="50%" y={-64} className="overflow-visible fill-gray-50">
<path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
</svg>
<rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
</svg>
<div className="mx-auto max-w-xl lg:max-w-4xl">
<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
Let’s talk about your project
</h2>
<p className="mt-2 text-lg/8 text-gray-600">
We help companies and individuals build out their brand guidelines.
</p>
<div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
<form action="#" method="POST" className="lg:flex-auto">
<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
<div>
<label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
First name
</label>
<div className="mt-2.5">
<input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
</div>
</div>
<div>
<label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
Last name
</label>
<div className="mt-2.5">
<input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
</div>
</div>
<div>
<label htmlFor="budget" className="block text-sm/6 font-semibold text-gray-900">
Budget
</label>
<div className="mt-2.5">
<input
                    id="budget"
                    name="budget"
                    type="text"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
</div>
</div>
<div>
<label htmlFor="website" className="block text-sm/6 font-semibold text-gray-900">
Website
</label>
<div className="mt-2.5">
<input
                    id="website"
                    name="website"
                    type="url"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
</div>
</div>
<div className="sm:col-span-2">
<label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
Message
</label>
<div className="mt-2.5">
<textarea
id="message"
name="message"
rows={4}
className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
defaultValue={''}
/>
</div>
</div>
</div>
<div className="mt-10">
<button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
Let’s talk
</button>
</div>
<p className="mt-4 text-sm/6 text-gray-500">
By submitting this form, I agree to the{' '}
<a href="#" className="font-semibold whitespace-nowrap text-indigo-600">
privacy policy
</a>
.
</p>
</form>
<div className="lg:mt-6 lg:w-80 lg:flex-none">
<img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
              className="h-12 w-auto"
            />

            <figure className="mt-10">
              <blockquote className="text-lg/8 font-semibold text-gray-900">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                  molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                  className="size-12 flex-none rounded-full bg-gray-50"
                />
                <div>
                  <div className="text-base font-semibold text-gray-900">Brenna Goyette</div>
                  <div className="text-sm/6 text-gray-600">CEO of Workcation</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>

)
}
