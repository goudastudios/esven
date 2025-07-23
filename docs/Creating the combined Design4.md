Creating the combined Design4

**<u>Intro Page</u>**

esven-revamp/designs/design1/intro.html



**<u>Header</u>** 

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

Exceot lets make the header sticky at the top like in Design 2 and 3. 

**<u>Footer</u>**

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

<u>**Index Page**</u>

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



B. Our Approach  Section Component

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

​    <!-- Contact Section -->
    <section class="contact">
      <div class="container">
        <div class="contact-content">
          <h3 class="section-title">Let's Build Something Extraordinary</h3>
          <p class="contact-subtitle">
            Ready to join our portfolio of exceptional companies?
          </p>
          <div class="contact-actions">
            <button class="btn btn-primary large">Start a Conversation</button>
          </div>
        </div>
      </div>
    </section>

**<u>Portfolio Page</u>**

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



**<u>Team Page</u>**

overall this page: http://localhost:3001/design3/team.html





**<u>Contact Page</u>**

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