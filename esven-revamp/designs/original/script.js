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

// Add some basic interactivity
document.addEventListener('click', function(e) {
    // Handle navigation dropdown
    if (e.target.closest('.nav-dropdown')) {
        const dropdown = e.target.closest('.nav-dropdown');
        dropdown.classList.toggle('active');
    }
});
