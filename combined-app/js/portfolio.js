console.log("Portfolio script loaded");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  // Get all filter tabs
  const filterTabs = document.querySelectorAll(".filter-tab");
  const portfolioGrid = document.getElementById("portfolio-grid");
  const loadingIndicator = document.getElementById("loading-indicator");

  // Parse portfolio data and extract companies and seed
  const { companies, seed } = JSON.parse(
    document.getElementById("portfolio-data").textContent
  );

  // Simple seeded random function for consistent client-side shuffling
  const seededRandom = (seed) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  // Shuffle array using Fisher-Yates algorithm with seed
  const shuffleArray = (array, seed) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom(seed + i) * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Store the original companies array for filtering
  const allCompanies = [...companies];
  // Shuffle initial display for 'All Companies' view
  const portfolioData = shuffleArray(allCompanies, seed);

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
    // Defensive: ensure all category values are strings and lowercased
    const itemCategories = (item.categories || []).map((cat) =>
      cat ? String(cat).toLowerCase() : ""
    );

    // Check for special tag filters
    if (activeFilters.tag) {
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
    }

    // Check category filter
    if (activeFilters.category) {
      const categoryLower = String(activeFilters.category).toLowerCase();
      const match = itemCategories.includes(categoryLower);
      console.log(
        `Matching company [${item.name}] categories:`,
        itemCategories,
        "against filter:",
        categoryLower,
        "RESULT:",
        match
      );
      if (!match) {
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

  // Handle scroll event for infinite scroll with mobile support
  const handleScroll = () => {
    if (isLoading || allItemsLoaded) return;

    // Get the document height and current scroll position
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    // Get the current scroll position (cross-browser compatible)
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // Get the viewport height (cross-browser compatible)
    const viewportHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      0;

    // Load more when user is 500px from the bottom on mobile, 200px on desktop
    const threshold = window.innerWidth < 768 ? 500 : 200;

    if (documentHeight - (scrollPosition + viewportHeight) < threshold) {
      loadMoreItems();
    }
  };

  // Add touch event listeners for better mobile support
  let touchStartY = 0;
  let touchEndY = 0;

  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY = e.touches[0].clientY;
    handleScroll(); // Check if we should load more during touch move
  };

  // Filter items based on active filters
  const updateFilteredItems = () => {
    console.log("Updating filters:", activeFilters);

    // Reset pagination
    currentPage = 0;
    allItemsLoaded = false;
    portfolioGrid.innerHTML = "";

    // Always filter from the original companies array
    let filtered = allCompanies.filter((item) => {
      const matches = itemMatchesFilters(item);
      console.log(
        `Item ${item.name} matches filters:`,
        matches,
        "Filters:",
        activeFilters
      );
      return matches;
    });

    // Shuffle filtered results for display
    filteredItems = shuffleArray(filtered, seed);

    console.log("Filtered items count:", filteredItems.length);

    // Re-attach scroll handler
    window.addEventListener("scroll", handleScroll, { passive: true });

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

  // Initialize the portfolio
  const initPortfolio = () => {
    // Load initial items
    loadMoreItems();

    // Add event listeners for infinite scroll with mobile support
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Add touch event listeners for mobile
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Handle orientation changes
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Recalculate layout after orientation change
        if (window.innerWidth < 768) {
          // Force reflow for mobile
          portfolioGrid.style.display = "none";
          void portfolioGrid.offsetHeight; // Trigger reflow
          portfolioGrid.style.display = "";
        }
      }, 250);
    });

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

    // REMOVE DUPLICATE filterTabs event listener block below (if present)
  };

  // Initialize the portfolio
  initPortfolio();
});
