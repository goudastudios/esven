console.log("Portfolio script loaded");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  // Get all filter tabs
  const filterTabs = document.querySelectorAll(".filter-tab");
  const portfolioGrid = document.getElementById("portfolio-grid");
  const loadingIndicator = document.getElementById("loading-indicator");
  const portfolioData = JSON.parse(
    document.getElementById("portfolio-data").textContent
  );

  // Pagination variables
  let currentPage = 0;
  const itemsPerPage = 10; // Initial load
  const itemsPerScroll = 10; // Load 10 more on scroll
  let isLoading = false;
  let allItemsLoaded = false;

  // Store filtered items
  let filteredItems = [...portfolioData];

  // Active filters
  let activeFilters = {
    tag: null,
    category: null,
  };

  // Helper function to check if an item matches the active filters
  const itemMatchesFilters = (item) => {
    const itemTags = item.tags ? item.tags.map((tag) => tag.toLowerCase()) : [];
    const itemCategories = item.categories
      ? item.categories.map((cat) => cat.toLowerCase())
      : [];

    // Check for special tag filters
    if (activeFilters.tag === "exit") {
      if (item.status !== "exit" && !itemTags.includes("exit")) return false;
    } else if (activeFilters.tag === "inactive") {
      if (item.status !== "inactive") return false;
    } else if (activeFilters.tag === "unicorn") {
      if (!itemTags.includes("unicorn")) return false;
    } else if (activeFilters.tag === "soonicorn") {
      if (!itemTags.includes("soonicorn")) return false;
    } else if (activeFilters.tag === "funds") {
      if (!itemTags.includes("funds")) return false;
    } else if (activeFilters.tag === "public") {
      if (!itemTags.includes("public")) return false;
    }

    // Check category filter
    if (activeFilters.category) {
      if (!itemCategories.includes(activeFilters.category)) {
        return false;
      }
    }

    return true;
  };

  // Create portfolio item element
  const createPortfolioItem = (company) => {
    const item = document.createElement("div");
    item.className = "portfolio-company";
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    // Set data attributes for filtering
    item.setAttribute(
      "data-item",
      JSON.stringify({
        id: company.id,
        name: company.name,
        tags: company.tags || [],
        categories: company.categories || [],
      })
    );

    // Create status text based on company status
    let statusText = "Active";
    if (company.status) {
      const status = company.status.toLowerCase();
      statusText =
        status === "exit"
          ? "Exit"
          : status === "inactive"
          ? "Inactive"
          : status === "unicorn"
          ? "Unicorn ($1B+)"
          : status === "soonicorn"
          ? "Soonicorn ($500M-$999M)"
          : status === "funds"
          ? "Investment Fund"
          : status === "public"
          ? "Public"
          : "Active";
    }

    // Create the HTML for the portfolio card - matching the original EJS template
    item.innerHTML = `
      <div class="company-logo-container">
        <img src="${
          company.logo || "/assets/images/portfolio/placeholder.jpg"
        }" 
             alt="${company.name}" 
             class="company-logo" 
             onerror="this.src='/assets/images/portfolio/placeholder.jpg'"
             loading="lazy">
        ${
          company.status
            ? `<div class="company-status ${company.status}">${statusText}</div>`
            : ""
        }
      </div>
      <div class="company-info">
        <h3 class="company-name">${company.name}</h3>
        <p class="company-description">${company.description}</p>
        
        ${
          company.metrics && company.metrics.length
            ? `
          <div class="company-metrics">
            ${company.metrics
              .map(
                (metric) => `
              <div class="company-metric">
                <div class="company-metric-value">${metric.value}</div>
                <div class="company-metric-label">${metric.label}</div>
              </div>
            `
              )
              .join("")}
          </div>
        `
            : ""
        }
        
        ${
          company.links && company.links.length
            ? `
          <div class="portfolio-company-links">
            ${company.links
              .map(
                (link, index) => `
              <a href="${link.url}" 
                 class="portfolio-company-link ${index === 0 ? "primary" : ""}" 
                 target="_blank" 
                 rel="noopener noreferrer">
                ${link.text}
              </a>
            `
              )
              .join("")}
          </div>
        `
            : ""
        }
      </div>
    `;

    // Add click event to open company website if available
    if (company.links && company.links.length > 0) {
      const websiteLink = company.links.find(
        (link) => link.text.toLowerCase() === "website"
      );
      if (websiteLink) {
        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
          window.open(websiteLink.url, "_blank");
        });
      }
    }

    return item;
  };

  // Load more items
  const loadMoreItems = () => {
    if (isLoading || allItemsLoaded) return;

    isLoading = true;
    loadingIndicator.style.display = "block";

    // Simulate network delay for demo purposes
    setTimeout(() => {
      const startIdx = currentPage * itemsPerPage;
      const endIdx =
        startIdx + (currentPage === 0 ? itemsPerPage : itemsPerScroll);

      // Get the items to display
      const itemsToShow = filteredItems.slice(startIdx, endIdx);

      // Create and append items
      itemsToShow.forEach((company, index) => {
        const item = createPortfolioItem(company);
        portfolioGrid.appendChild(item);

        // Animate the item
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, 50 * (index % 10)); // Stagger animations
      });

      // Update current page and check if we've loaded all items
      currentPage++;
      const totalItemsShown = Math.min(
        currentPage * (currentPage === 1 ? itemsPerPage : itemsPerScroll),
        filteredItems.length
      );

      allItemsLoaded = totalItemsShown >= filteredItems.length;
      isLoading = false;
      loadingIndicator.style.display = "none";

      // If we've loaded all items, remove scroll listener
      if (allItemsLoaded) {
        window.removeEventListener("scroll", handleScroll);
      }
    }, 300); // Simulated network delay
  };

  // Handle scroll event for infinite scroll
  const handleScroll = () => {
    if (isLoading || allItemsLoaded) return;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Load more when user is 200px from the bottom
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      loadMoreItems();
    }
  };

  // Filter items based on active filters
  const updateFilteredItems = () => {
    // Reset pagination
    currentPage = 0;
    allItemsLoaded = false;
    portfolioGrid.innerHTML = "";

    // Apply filters
    filteredItems = portfolioData.filter((item) => {
      return itemMatchesFilters(item);
    });

    // Re-attach scroll handler
    window.addEventListener("scroll", handleScroll);

    // Load initial items
    loadMoreItems();

    // Smooth scroll to top of portfolio grid
    const gridSection = document.querySelector(".portfolio-grid-section");
    if (gridSection) {
      gridSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Add click event listeners to filter tabs
  console.log("Setting up filter tabs:", filterTabs.length);
  filterTabs.forEach((tab) => {
    console.log("Adding click listener to:", tab.textContent.trim());
    tab.addEventListener("click", function () {
      console.log("Filter tab clicked:", this.textContent.trim());
      const filterType = this.getAttribute("data-type");
      const filterValue = this.getAttribute("data-filter").toLowerCase();

      // If this is the 'All' tab, reset all filters
      if (filterType === "all") {
        // Reset all filters and deactivate all tabs
        document.querySelectorAll(".filter-tab").forEach((t) => {
          t.classList.remove("active");
        });
        this.classList.add("active");
        activeFilters = { tag: null, category: null };
      }
      // If this is a status filter (tag type)
      else if (filterType === "tag") {
        // First reset all status filters (tag type) and the 'All' tab
        document
          .querySelectorAll(
            '.filter-tab[data-type="tag"], .filter-tab[data-type="all"]'
          )
          .forEach((t) => {
            t.classList.remove("active");
          });

        // Toggle the clicked tab
        if (
          this.classList.contains("active") &&
          activeFilters.tag === filterValue
        ) {
          // If clicking the active tab, deactivate it and show all
          this.classList.remove("active");
          activeFilters.tag = null;
        } else {
          // Otherwise, activate the clicked tab and set the filter
          this.classList.add("active");
          activeFilters.tag = filterValue;
        }
      }
      // For category filters (sectors)
      else if (filterType === "category") {
        // Toggle active state and update filters
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          activeFilters.category = null;
        } else {
          // First deactivate all category filters
          document
            .querySelectorAll('.filter-tab[data-type="category"]')
            .forEach((t) => {
              t.classList.remove("active");
            });

          // Then activate the clicked one
          this.classList.add("active");
          activeFilters.category = filterValue;
        }
      }

      // Update the filtered items
      updateFilteredItems();

      // If no filters are active, activate the 'All' tab
      if (activeFilters.tag === null && activeFilters.category === null) {
        const allTab = document.querySelector('.filter-tab[data-type="all"]');
        if (allTab) allTab.classList.add("active");
      }
    });
  });

  // Initialize the portfolio
  const initPortfolio = () => {
    // Load initial items
    loadMoreItems();

    // Add scroll event listener for infinite scroll
    window.addEventListener("scroll", handleScroll);

    // Add click event listeners to filter tabs
    filterTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const filterType = this.getAttribute("data-type");
        const filterValue = this.getAttribute("data-filter").toLowerCase();

        // If this is the 'All' tab, reset all filters
        if (filterType === "all") {
          // Reset all filters and deactivate all tabs
          document.querySelectorAll(".filter-tab").forEach((t) => {
            t.classList.remove("active");
          });
          this.classList.add("active");
          activeFilters = { tag: null, category: null };
        }
        // If this is a status filter (tag type)
        else if (filterType === "tag") {
          // First reset all status filters (tag type) and the 'All' tab
          document
            .querySelectorAll(
              '.filter-tab[data-type="tag"], .filter-tab[data-type="all"]'
            )
            .forEach((t) => {
              t.classList.remove("active");
            });

          // Toggle the clicked tab
          if (
            this.classList.contains("active") &&
            activeFilters.tag === filterValue
          ) {
            // If clicking the active tab, deactivate it and show all
            this.classList.remove("active");
            activeFilters.tag = null;
          } else {
            // Otherwise, activate the clicked tab and set the filter
            this.classList.add("active");
            activeFilters.tag = filterValue;
          }
        }
        // For category filters (sectors)
        else if (filterType === "category") {
          // Toggle active state and update filters
          if (this.classList.contains("active")) {
            this.classList.remove("active");
            activeFilters.category = null;
          } else {
            // First deactivate all category filters
            document
              .querySelectorAll('.filter-tab[data-type="category"]')
              .forEach((t) => {
                t.classList.remove("active");
              });

            // Then activate the clicked one
            this.classList.add("active");
            activeFilters.category = filterValue;
          }
        }

        // Update the filtered items
        updateFilteredItems();

        // If no filters are active, activate the 'All' tab
        if (activeFilters.tag === null && activeFilters.category === null) {
          const allTab = document.querySelector('.filter-tab[data-type="all"]');
          if (allTab) allTab.classList.add("active");
        }
      });
    });
  };

  // Initialize the portfolio
  initPortfolio();
});
