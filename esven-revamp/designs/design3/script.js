// Design 3: "The Modern Minimalist" JavaScript - Clean, Premium functionality

document.addEventListener('DOMContentLoaded', function() {
    // Check if content is available
    if (typeof window.EsvenContent === 'undefined') {
        console.error('EsvenContent not loaded');
        return;
    }

    const content = window.EsvenContent;

    // Populate all sections
    populateNavigation(content.navigation);
    populateHero(content.hero);
    populatePhilosophy(content.strategy);
    populateStrategy(content.operations);
    populatePortfolio(content.portfolio);
    populateFooter(content.meta);

    // Initialize interactive features
    initializeScrollEffects();
    initializePortfolioFilters();
    initializeCounters();
    initializeNavToggle();
});

function populateNavigation(navigation) {
    const navLinks = document.getElementById('nav-links');
    if (!navLinks) return;

    navLinks.innerHTML = '';
    
    navigation.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.name;
        if (item.active) link.className = 'active';
        navLinks.appendChild(link);
    });
}

function populateHero(hero) {
    const titleEl = document.getElementById('hero-title');
    const subtitleEl = document.getElementById('hero-subtitle');
    const descriptionEl = document.getElementById('hero-description');

    if (titleEl) titleEl.textContent = hero.mainHeading;
    if (subtitleEl) subtitleEl.textContent = hero.subHeading;
    if (descriptionEl) {
        descriptionEl.innerHTML = `<p>${hero.description}</p>`;
    }
}

function populatePhilosophy(strategy) {
    const philosophyPoints = document.getElementById('philosophy-points');
    if (!philosophyPoints) return;

    philosophyPoints.innerHTML = `
        <h4>${strategy.title}</h4>
        ${strategy.points.map(point => `<div class="philosophy-point">${point}</div>`).join('')}
    `;
}

function populateStrategy(operations) {
    // Populate strategy points from operations data
    const points = [
        document.getElementById('operations-point-1'),
        document.getElementById('operations-point-2'),
        document.getElementById('operations-point-3')
    ];

    operations.points.forEach((point, index) => {
        if (points[index]) {
            points[index].textContent = point;
        }
    });
}

function populatePortfolio(portfolio) {
    const titleEl = document.getElementById('portfolio-title');
    const companiesEl = document.getElementById('portfolio-companies');

    if (titleEl) titleEl.textContent = 'Portfolio';
    
    if (companiesEl) {
        if (portfolio.companies && portfolio.companies.length > 0) {
            companiesEl.innerHTML = portfolio.companies
                .map(company => createMinimalistCompanyCard(company))
                .join('');
        } else {
            // Create sample companies for demonstration
            companiesEl.innerHTML = createSampleMinimalistPortfolio();
        }
    }
}

function createMinimalistCompanyCard(company) {
    return `
        <div class="company-card" data-category="${company.category.toLowerCase()}">
            <div class="company-name">${company.name}</div>
            <div class="company-description">${company.description}</div>
            <div class="company-meta">
                <span class="company-tag">${company.category}</span>
                <span class="company-tag">${company.stage}</span>
                <span class="company-tag">${company.status}</span>
            </div>
            <div class="company-links">
                ${company.website ? `<a href="${company.website}" target="_blank">Visit →</a>` : ''}
                ${company.blog ? `<a href="${company.blog}" target="_blank">Learn →</a>` : ''}
            </div>
        </div>
    `;
}

function createSampleMinimalistPortfolio() {
    const sampleCompanies = [
        {
            name: "TechFlow AI",
            description: "Enterprise AI platform revolutionizing workflow automation with intelligent decision-making capabilities.",
            category: "Technology",
            stage: "Series B",
            status: "Active"
        },
        {
            name: "HealthSync",
            description: "Digital health ecosystem connecting patients with personalized care through advanced analytics.",
            category: "Healthcare",
            stage: "Series A",
            status: "Growing"
        },
        {
            name: "FinanceCore",
            description: "Next-generation financial infrastructure enabling seamless global transactions.",
            category: "FinTech",
            stage: "Exit",
            status: "Acquired"
        },
        {
            name: "DataVault",
            description: "Secure cloud platform providing enterprise-grade data management and analytics solutions.",
            category: "Technology",
            stage: "Series C",
            status: "Scaling"
        },
        {
            name: "MedTech Solutions",
            description: "Innovative medical device company improving patient outcomes through cutting-edge technology.",
            category: "Healthcare",
            stage: "Exit",
            status: "IPO"
        },
        {
            name: "CryptoSecure",
            description: "Advanced blockchain security platform protecting digital assets for institutional clients.",
            category: "FinTech",
            stage: "Series A",
            status: "Active"
        }
    ];

    return sampleCompanies.map(company => createMinimalistCompanyCard(company)).join('');
}

function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.strategy-item, .company-card, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

function initializePortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-tag');
    const companyCards = document.querySelectorAll('.company-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Filter companies with smooth animation
            companyCards.forEach((card, index) => {
                const shouldShow = filter === 'all' || 
                    (filter === 'exits' && (card.textContent.includes('Exit') || card.textContent.includes('IPO') || card.textContent.includes('Acquired'))) ||
                    card.getAttribute('data-category') === filter;

                if (shouldShow) {
                    card.style.display = 'block';
                    card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        if (current > target) current = target;
                        
                        // Format number based on target
                        if (target >= 1000) {
                            counter.textContent = (current / 1000).toFixed(1);
                        } else if (target % 1 !== 0) {
                            counter.textContent = current.toFixed(1);
                        } else {
                            counter.textContent = Math.floor(current);
                        }
                        
                        requestAnimationFrame(updateCounter);
                    }
                };

                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function initializeNavToggle() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

function populateFooter(meta) {
    const copyrightEl = document.getElementById('footer-copyright');
    if (copyrightEl) {
        copyrightEl.textContent = meta.copyright;
    }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .strategy-item.animate-in {
        animation: fadeInUp 0.8s ease both;
    }

    .company-card.animate-in {
        animation: fadeInUp 0.8s ease both;
    }

    .stat-item.animate-in {
        animation: slideInLeft 0.8s ease both;
    }

    /* Mobile navigation styles */
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 80px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 80px);
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 2rem;
            transition: left 0.3s ease;
        }

        .nav-links.active {
            left: 0;
        }

        .nav-links a {
            font-size: 1.2rem;
            margin: 1rem 0;
        }

        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);
