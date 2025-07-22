// Original Design JavaScript - Vanilla JS
// Populates content from shared data source

document.addEventListener('DOMContentLoaded', function() {
    // Check if content is available
    if (typeof window.EsvenContent === 'undefined') {
        console.error('EsvenContent not loaded');
        return;
    }

    const content = window.EsvenContent;

    // Populate Navigation
    populateNavigation(content.navigation);

    // Populate Hero Section
    populateHero(content.hero);

    // Populate Operations Section
    populateOperations(content.operations);

    // Populate Strategy Section
    populateStrategy(content.strategy);

    // Populate Portfolio Section
    populatePortfolio(content.portfolio);

    // Populate Footer
    populateFooter(content.meta);
});

function populateNavigation(navigation) {
    const navLinks = document.getElementById('nav-links');
    if (!navLinks) return;

    navLinks.innerHTML = '';
    
    navigation.forEach(item => {
        if (item.submenu) {
            // Create dropdown for portfolio
            const dropdown = document.createElement('div');
            dropdown.className = 'nav-dropdown';
            dropdown.innerHTML = `
                <a href="${item.url}">${item.name}</a>
                <div class="dropdown-content">
                    ${item.submenu.map(sub => `<a href="${sub.url}">${sub.name}</a>`).join('')}
                </div>
            `;
            navLinks.appendChild(dropdown);
        } else {
            const link = document.createElement('a');
            link.href = item.url;
            link.textContent = item.name;
            if (item.active) link.className = 'active';
            navLinks.appendChild(link);
        }
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

function populateOperations(operations) {
    const titleEl = document.getElementById('operations-title');
    const contentEl = document.getElementById('operations-content');

    if (titleEl) titleEl.textContent = operations.title;
    if (contentEl) {
        contentEl.innerHTML = operations.points
            .map(point => `<p>${point}</p>`)
            .join('');
    }
}

function populateStrategy(strategy) {
    const contentEl = document.getElementById('strategy-content');
    if (!contentEl) return;

    contentEl.innerHTML = `
        <h3>${strategy.title}</h3>
        ${strategy.points.map(point => `<p>${point}</p>`).join('')}
    `;
}

function populatePortfolio(portfolio) {
    const titleEl = document.getElementById('portfolio-title');
    const descriptionEl = document.getElementById('portfolio-description');
    const companiesEl = document.getElementById('portfolio-companies');

    if (titleEl) titleEl.textContent = portfolio.title;
    if (descriptionEl) descriptionEl.innerHTML = `<p>${portfolio.description}</p>`;
    
    if (companiesEl) {
        if (portfolio.companies && portfolio.companies.length > 0) {
            companiesEl.innerHTML = portfolio.companies
                .map(company => createCompanyCard(company))
                .join('');
        } else {
            companiesEl.innerHTML = `
                <div class="placeholder-message">
                    <p>Portfolio companies will be displayed here once the data is updated.</p>
                </div>
            `;
        }
    }
}

function createCompanyCard(company) {
    return `
        <div class="company-card">
            <div class="company-name">${company.name}</div>
            <div class="company-description">${company.description}</div>
            <div class="company-meta">
                <span class="company-tag">${company.category}</span>
                <span class="company-tag">${company.stage}</span>
                <span class="company-tag">${company.valuation}</span>
                <span class="company-tag status-${company.status.toLowerCase()}">${company.status}</span>
            </div>
            <div class="company-links">
                ${company.website ? `<a href="${company.website}" target="_blank">Website</a>` : ''}
                ${company.blog ? `<a href="${company.blog}" target="_blank">Blog</a>` : ''}
            </div>
        </div>
    `;
}

function populateFooter(meta) {
    const copyrightEl = document.getElementById('footer-copyright');
    if (copyrightEl) {
        copyrightEl.textContent = meta.copyright;
    }
}

// Dynamic Scroll Text Animation
class ScrollTextAnimator {
    constructor() {
        this.container = document.getElementById('scrollTextContainer');
        this.progressBar = document.getElementById('progressBar');
        this.sections = document.querySelectorAll('.scroll-section');
        this.currentSection = 0;
        this.scrollThreshold = 100; // pixels to scroll before changing section
        this.lastScrollY = 0;
        this.accumulatedScroll = 0;
        
        if (this.container && this.sections.length > 0) {
            this.init();
        }
    }
    
    init() {
        // Show first section
        this.sections[0].classList.add('active');
        this.updateProgress();
        
        // Add scroll listener
        window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
        
        // Add wheel listener for more responsive scrolling
        window.addEventListener('wheel', this.handleWheel.bind(this), { passive: true });
    }
    
    handleScroll() {
        const scrollY = window.scrollY;
        const scrollDelta = scrollY - this.lastScrollY;
        
        // Only process if we're in the hero section area
        if (scrollY < window.innerHeight) {
            this.accumulatedScroll += Math.abs(scrollDelta);
            
            if (this.accumulatedScroll >= this.scrollThreshold) {
                if (scrollDelta > 0 && this.currentSection < this.sections.length - 1) {
                    // Scrolling down - next section
                    this.nextSection();
                } else if (scrollDelta < 0 && this.currentSection > 0) {
                    // Scrolling up - previous section
                    this.previousSection();
                }
                this.accumulatedScroll = 0;
            }
        }
        
        this.lastScrollY = scrollY;
    }
    
    handleWheel(e) {
        // More responsive wheel handling
        if (window.scrollY < window.innerHeight) {
            this.accumulatedScroll += Math.abs(e.deltaY) * 0.5;
            
            if (this.accumulatedScroll >= this.scrollThreshold) {
                if (e.deltaY > 0 && this.currentSection < this.sections.length - 1) {
                    this.nextSection();
                } else if (e.deltaY < 0 && this.currentSection > 0) {
                    this.previousSection();
                }
                this.accumulatedScroll = 0;
            }
        }
    }
    
    nextSection() {
        if (this.currentSection < this.sections.length - 1) {
            this.sections[this.currentSection].classList.add('exiting');
            this.sections[this.currentSection].classList.remove('active');
            
            this.currentSection++;
            
            setTimeout(() => {
                this.sections[this.currentSection].classList.add('active');
                this.sections[this.currentSection - 1].classList.remove('exiting');
            }, 200);
            
            this.updateProgress();
        }
    }
    
    previousSection() {
        if (this.currentSection > 0) {
            this.sections[this.currentSection].classList.add('exiting');
            this.sections[this.currentSection].classList.remove('active');
            
            this.currentSection--;
            
            setTimeout(() => {
                this.sections[this.currentSection].classList.add('active');
                this.sections[this.currentSection + 1].classList.remove('exiting');
            }, 200);
            
            this.updateProgress();
        }
    }
    
    updateProgress() {
        const progress = ((this.currentSection + 1) / this.sections.length) * 100;
        if (this.progressBar) {
            this.progressBar.style.width = `${progress}%`;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new ScrollTextAnimator();
});

// Add some basic interactivity
document.addEventListener('click', function(e) {
    // Handle navigation dropdown
    if (e.target.closest('.nav-dropdown')) {
        const dropdown = e.target.closest('.nav-dropdown');
        dropdown.classList.toggle('active');
    }
});
