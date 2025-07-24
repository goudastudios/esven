console.log('Portfolio script loaded');
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded');
  // Get all filter tabs and portfolio items
  const filterTabs = document.querySelectorAll('.filter-tab');
  const portfolioItems = document.querySelectorAll('.portfolio-company');
  let activeFilters = {
    tag: null,
    category: null
  };
  
  // Helper function to check if an item matches the active filters
  const itemMatchesFilters = (item) => {
    const itemData = JSON.parse(item.getAttribute('data-item'));
    const itemTags = itemData.tags.map(tag => tag.toLowerCase());
    const itemCategories = itemData.categories.map(cat => cat.toLowerCase());
    
    // Special case for 'exit' tag which is a status in the data
    if (activeFilters.tag === 'exit') {
      if (itemData.status !== 'exit') return false;
    } else if (activeFilters.tag === 'unicorn') {
      if (!itemCategories.includes('unicorns')) return false;
    }
    
    // Check category filter
    if (activeFilters.category) {
      if (!itemCategories.includes(activeFilters.category)) {
        return false;
      }
    }
    
    return true;
  };
  
  // Filter and show/hide items based on active filters
  const updateFilteredItems = () => {
    let hasActiveFilter = false;
    
    // Check if any filters are active
    Object.values(activeFilters).forEach(filter => {
      if (filter !== null) hasActiveFilter = true;
    });
    
    portfolioItems.forEach(item => {
      if (!hasActiveFilter) {
        // No filters active, show all
        item.style.display = 'block';
      } else {
        // Check if item matches all active filters
        const matches = itemMatchesFilters(item);
        item.style.display = matches ? 'block' : 'none';
      }
    });
    
    // Smooth scroll to top of portfolio grid
    const gridSection = document.querySelector('.portfolio-grid-section');
    if (gridSection) {
      gridSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  // Add click event listeners to filter tabs
  console.log('Setting up filter tabs:', filterTabs.length);
  filterTabs.forEach(tab => {
    console.log('Adding click listener to:', tab.textContent.trim());
    tab.addEventListener('click', function() {
      console.log('Filter tab clicked:', this.textContent.trim());
      const filterType = this.getAttribute('data-type');
      const filterValue = this.getAttribute('data-filter').toLowerCase();
      
      // Reset all tabs of the same type
      if (filterType === 'all') {
        // Reset all filters and deactivate all tabs
        document.querySelectorAll('.filter-tab').forEach(t => {
          t.classList.remove('active');
        });
        this.classList.add('active');
        activeFilters = { tag: null, category: null };
      } else {
        // For other filter types, only reset tabs of the same type
        document.querySelectorAll(`.filter-tab[data-type="${filterType}"]`).forEach(t => {
          t.classList.remove('active');
        });
        
        // Toggle active state and update filters
        if (this.classList.contains('active')) {
          this.classList.remove('active');
          activeFilters[filterType] = null;
        } else {
          this.classList.add('active');
          activeFilters[filterType] = filterValue;
        }
        
        // Ensure 'All Companies' is active only when no other filters
        const allTab = document.querySelector('.filter-tab[data-type="all"]');
        if (activeFilters.tag !== null || activeFilters.category !== null) {
          allTab.classList.remove('active');
        } else {
          allTab.classList.add('active');
        }
      }
      
      updateFilteredItems();
    });
  });
  
  // Add animation to portfolio items on scroll
  const animateOnScroll = function() {
    const items = document.querySelectorAll('.portfolio-company');
    
    items.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (itemPosition < screenPosition) {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial styles for animation
  document.querySelectorAll('.portfolio-company').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
  });
  
  // Run animation on load and scroll
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
  
  // Initialize animation on page load
  setTimeout(animateOnScroll, 300);
});
