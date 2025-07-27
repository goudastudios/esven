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
    
    // Check for special tag filters
    if (activeFilters.tag === 'exit') {
      // Check both status field and tags array for backward compatibility
      if (itemData.status !== 'Exit' && !itemTags.includes('exit')) return false;
    } else if (activeFilters.tag === 'unicorn') {
      if (!itemTags.includes('unicorn')) return false;
    } else if (activeFilters.tag === 'funds') {
      // Check if item has 'funds' in its categories
      if (!itemCategories.includes('funds')) return false;
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
      
      // If this is the 'All' tab, reset all filters
      if (filterType === 'all') {
        // Reset all filters and deactivate all tabs
        document.querySelectorAll('.filter-tab').forEach(t => {
          t.classList.remove('active');
        });
        this.classList.add('active');
        activeFilters = { tag: null, category: null };
      } 
      // If this is a status filter (tag type)
      else if (filterType === 'tag') {
        // First reset all status filters (tag type) and the 'All' tab
        document.querySelectorAll('.filter-tab[data-type="tag"], .filter-tab[data-type="all"]').forEach(t => {
          t.classList.remove('active');
        });
        
        // Toggle the clicked tab
        if (this.classList.contains('active') && activeFilters.tag === filterValue) {
          // If clicking the active tab, deactivate it and show all
          this.classList.remove('active');
          activeFilters.tag = null;
        } else {
          // Otherwise, activate the clicked tab and set the filter
          this.classList.add('active');
          activeFilters.tag = filterValue;
        }
      } 
      // For category filters (sectors)
      else if (filterType === 'category') {
        // Toggle active state and update filters
        if (this.classList.contains('active')) {
          this.classList.remove('active');
          activeFilters.category = null;
        } else {
          // First deactivate all category filters
          document.querySelectorAll('.filter-tab[data-type="category"]').forEach(t => {
            t.classList.remove('active');
          });
          
          // Then activate the clicked one
          this.classList.add('active');
          activeFilters.category = filterValue;
        }
      }
      
      // Update the filtered items
      updateFilteredItems();
      
      // If no filters are active, activate the 'All' tab
      if (activeFilters.tag === null && activeFilters.category === null) {
        const allTab = document.querySelector('.filter-tab[data-type="all"]');
        if (allTab) allTab.classList.add('active');
      }
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
