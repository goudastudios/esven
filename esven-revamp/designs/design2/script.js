// Design 2: "The Relationship Builder" JavaScript - Human-focused functionality

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
    populateApproach(content.operations);
    populatePortfolio(content.portfolio);
    populateFooter(content.meta);

    // Initialize interactive features
    initializeTestimonialCarousel();
    initializeAnimations();
    initializeNetworkVisualization();
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

function populateApproach(operations) {
    // Populate approach timeline from operations data
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

    if (titleEl) titleEl.textContent = 'Our Portfolio Network';
    
    if (companiesEl) {
        if (portfolio.companies && portfolio.companies.length > 0) {
            companiesEl.innerHTML = portfolio.companies
                .map(company => createRelationshipCompanyCard(company))
                .join('');
        } else {
            // Create sample companies for demonstration
            companiesEl.innerHTML = createSampleRelationshipPortfolio();
        }
    }
}

function createRelationshipCompanyCard(company) {
    return `
        <div class="company-card">
            <div class="company-name">${company.name}</div>
            <div class="company-description">${company.description}</div>
            <div class="company-meta">
                <span class="company-tag">${company.category}</span>
                <span class="company-tag">${company.stage}</span>
                <span class="company-tag">${company.status}</span>
            </div>
            <div class="company-links">
                ${company.website ? `<a href="${company.website}" target="_blank">Connect →</a>` : ''}
                ${company.blog ? `<a href="${company.blog}" target="_blank">Learn More →</a>` : ''}
            </div>
        </div>
    `;
}

function createSampleRelationshipPortfolio() {
    const sampleCompanies = [
        {
            name: "TechFlow AI",
            description: "Connected with top AI talent through our network, now leading enterprise automation.",
            category: "Technology",
            stage: "Series B",
            status: "Thriving"
        },
        {
            name: "HealthSync",
            description: "Partnered with healthcare leaders we introduced, scaling globally.",
            category: "Healthcare",
            stage: "Series A",
            status: "Growing"
        },
        {
            name: "FinanceCore",
            description: "Strategic partnerships through our network led to successful exit.",
            category: "FinTech",
            stage: "Exit",
            status: "Success"
        },
        {
            name: "DataVault",
            description: "Built world-class team through Esalen's talent connections.",
            category: "Technology",
            stage: "Series C",
            status: "Scaling"
        },
        {
            name: "MedTech Solutions",
            description: "Regulatory partnerships we facilitated accelerated market entry.",
            category: "Healthcare",
            stage: "Exit",
            status: "Acquired"
        },
        {
            name: "CryptoSecure",
            description: "Connected with enterprise customers, tripling revenue in 18 months.",
            category: "FinTech",
            stage: "Series A",
            status: "Expanding"
        }
    ];

    return sampleCompanies.map(company => createRelationshipCompanyCard(company)).join('');
}

function initializeTestimonialCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto-advance carousel
    setInterval(nextSlide, 6000);
}

function initializeNetworkVisualization() {
    const networkNodes = document.querySelectorAll('.network-node');
    
    networkNodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            // Highlight connections
            networkNodes.forEach(n => {
                if (n !== node) {
                    n.style.opacity = '0.6';
                }
            });
            node.style.transform = node.classList.contains('central') 
                ? 'translate(-50%, -50%) scale(1.1)' 
                : 'scale(1.1)';
        });

        node.addEventListener('mouseleave', () => {
            // Reset all nodes
            networkNodes.forEach(n => {
                n.style.opacity = '1';
            });
            node.style.transform = node.classList.contains('central') 
                ? 'translate(-50%, -50%) scale(1)' 
                : 'scale(1)';
        });
    });

    // Add connection lines dynamically
    createConnectionLines();
}

function createConnectionLines() {
    const network = document.querySelector('.connection-network');
    const central = document.querySelector('.network-node.central');
    const otherNodes = document.querySelectorAll('.network-node:not(.central)');

    if (!network || !central) return;

    otherNodes.forEach((node, index) => {
        const line = document.createElement('div');
        line.className = 'connection-line';
        line.style.cssText = `
            position: absolute;
            height: 2px;
            background: linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
            transform-origin: left center;
            z-index: 1;
            animation: pulse 2s ease-in-out infinite;
            animation-delay: ${index * 0.5}s;
        `;
        
        network.appendChild(line);
        
        // Position line between central and node
        const updateLinePosition = () => {
            const centralRect = central.getBoundingClientRect();
            const nodeRect = node.getBoundingClientRect();
            const networkRect = network.getBoundingClientRect();
            
            const centralX = centralRect.left + centralRect.width / 2 - networkRect.left;
            const centralY = centralRect.top + centralRect.height / 2 - networkRect.top;
            const nodeX = nodeRect.left + nodeRect.width / 2 - networkRect.left;
            const nodeY = nodeRect.top + nodeRect.height / 2 - networkRect.top;
            
            const length = Math.sqrt(Math.pow(nodeX - centralX, 2) + Math.pow(nodeY - centralY, 2));
            const angle = Math.atan2(nodeY - centralY, nodeX - centralX) * 180 / Math.PI;
            
            line.style.left = centralX + 'px';
            line.style.top = centralY + 'px';
            line.style.width = length + 'px';
            line.style.transform = `rotate(${angle}deg)`;
        };
        
        updateLinePosition();
        window.addEventListener('resize', updateLinePosition);
    });
}

function initializeAnimations() {
    // Scroll-triggered animations
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
    document.querySelectorAll('.timeline-item, .story-card, .company-card').forEach(el => {
        observer.observe(el);
    });

    // Staggered animation for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
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
    @keyframes pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.8; }
    }

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

    .timeline-item.animate-in {
        animation: fadeInUp 0.8s ease both;
    }

    .story-card.animate-in {
        animation: fadeInUp 0.8s ease both;
    }

    .company-card.animate-in {
        animation: fadeInUp 0.8s ease both;
    }

    .testimonial-slide {
        animation: fadeIn 0.5s ease-in-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
