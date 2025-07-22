// Design 1: "The Track Record" JavaScript - Data-driven functionality

document.addEventListener('DOMContentLoaded', function() {
    // Check if content is available
    if (typeof window.EsvenContent === 'undefined') {
        console.error('EsvenContent not loaded');
        return;
    }

    const content = window.EsvenContent;

    // Populate all sections
    // populateNavigation(content.navigation); // Disabled - using hardcoded navigation with absolute URLs
    populateHero(content.hero);
    populateStrategy(content.operations);
    populatePortfolio(content.portfolio);
    populateFooter(content.meta);

    // Initialize interactive features
    initializePortfolioFilters();
    initializeAnimations();
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

    if (titleEl) titleEl.textContent = 'Proven Track Record';
    if (subtitleEl) subtitleEl.textContent = 'We invest in sure bets';
    if (descriptionEl) {
        descriptionEl.innerHTML = `<p>${hero.description}</p>`;
    }
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

    if (titleEl) titleEl.textContent = 'Investment Portfolio';
    
    if (companiesEl) {
        if (portfolio.companies && portfolio.companies.length > 0) {
            companiesEl.innerHTML = portfolio.companies
                .map(company => createTrackRecordCompanyCard(company))
                .join('');
        } else {
            // Create sample companies for demonstration
            companiesEl.innerHTML = createSamplePortfolio();
        }
    }
}

function createTrackRecordCompanyCard(company) {
    return `
        <div class="company-card" data-category="${company.category.toLowerCase()}">
            <div class="company-name">${company.name}</div>
            <div class="company-description">${company.description}</div>
            <div class="company-meta">
                <span class="company-tag">${company.category}</span>
                <span class="company-tag">${company.stage}</span>
                <span class="company-tag valuation">${company.valuation}</span>
                <span class="company-tag ${company.status === 'Exit' ? 'exit' : ''}">${company.status}</span>
            </div>
            <div class="company-links">
                ${company.website ? `<a href="${company.website}" target="_blank">Website →</a>` : ''}
                ${company.blog ? `<a href="${company.blog}" target="_blank">Blog →</a>` : ''}
                <a href="#" class="valuation-link">Latest Valuation →</a>
            </div>
        </div>
    `;
}

function createSamplePortfolio() {
    const sampleCompanies = [
        {
            name: "TechFlow AI",
            description: "Revolutionary AI platform transforming enterprise workflows with intelligent automation.",
            category: "Technology",
            stage: "Series B",
            valuation: "$150M",
            status: "Active"
        },
        {
            name: "HealthSync",
            description: "Digital health platform connecting patients with personalized care solutions.",
            category: "Healthcare",
            stage: "Series A",
            valuation: "$75M",
            status: "Active"
        },
        {
            name: "FinanceCore",
            description: "Next-generation financial infrastructure for modern businesses.",
            category: "FinTech",
            stage: "Exit",
            valuation: "$500M",
            status: "Exit"
        },
        {
            name: "DataVault",
            description: "Secure cloud storage and analytics platform for enterprise data management.",
            category: "Technology",
            stage: "Series C",
            valuation: "$300M",
            status: "Active"
        },
        {
            name: "MedTech Solutions",
            description: "Innovative medical devices improving patient outcomes worldwide.",
            category: "Healthcare",
            stage: "Exit",
            valuation: "$800M",
            status: "Exit"
        },
        {
            name: "CryptoSecure",
            description: "Advanced blockchain security solutions for financial institutions.",
            category: "FinTech",
            stage: "Series A",
            valuation: "$120M",
            status: "Active"
        }
    ];

    return sampleCompanies.map(company => createTrackRecordCompanyCard(company)).join('');
}

function initializePortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const companyCards = document.querySelectorAll('.company-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Filter companies
            companyCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (filter === 'exits') {
                    const isExit = card.querySelector('.company-tag.exit');
                    card.style.display = isExit ? 'block' : 'none';
                } else {
                    const category = card.getAttribute('data-category');
                    card.style.display = category === filter ? 'block' : 'none';
                }
            });

            // Animate filtered results
            setTimeout(() => {
                const visibleCards = Array.from(companyCards).filter(card => 
                    card.style.display !== 'none'
                );
                visibleCards.forEach((card, index) => {
                    card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
                });
            }, 100);
        });
    });
}

function initializeAnimations() {
    // Animate metrics on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.metric, .strategy-card, .company-card').forEach(el => {
        observer.observe(el);
    });

    // Chart bar hover effects
    document.querySelectorAll('.chart-bar').forEach((bar, index) => {
        bar.addEventListener('mouseenter', () => {
            bar.style.background = `linear-gradient(to top, #64b5f6, #1a1a2e)`;
        });
        
        bar.addEventListener('mouseleave', () => {
            bar.style.background = `linear-gradient(to top, #1a1a2e, #64b5f6)`;
        });
    });
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

    .metric.animate {
        animation: fadeInUp 0.6s ease both;
    }

    .strategy-card.animate {
        animation: fadeInUp 0.6s ease both;
    }

    .company-card.animate {
        animation: fadeInUp 0.6s ease both;
    }
`;
document.head.appendChild(style);
