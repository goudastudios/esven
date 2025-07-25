document.addEventListener("DOMContentLoaded", function () {
  console.log("Team page script loaded");

  // Get the modal and its elements
  const modal = document.getElementById("teamModal");
  const closeBtn = document.querySelector(".close-modal");
  const modalImage = document.getElementById("modalMemberImage");
  const modalName = document.getElementById("modalMemberName");
  const modalTitle = document.getElementById("modalMemberTitle");
  const modalMetrics = document.getElementById("modalMemberMetrics");
  const modalBio = document.getElementById("modalMemberBio");
  const modalLinks = document.getElementById("modalMemberLinks");

  // Function to show member bio in modal
  function showMemberBio(event) {
    event.preventDefault();
    event.stopPropagation();

    const member = event.target.closest(".team-member");
    const imageSrc = member.querySelector(".member-image img").src;
    const name = member.querySelector(".member-name").textContent;
    const title = member.querySelector(".member-title").textContent;
    const bio = member.getAttribute("data-bio") || "No biography available.";

    // Set modal content
    modalImage.src = imageSrc;
    modalImage.alt = `${name}'s profile picture`;
    modalName.textContent = name;
    modalTitle.textContent = title;
    modalBio.innerHTML = bio.replace(/\n/g, "<br><br>"); // Preserve line breaks in bio

    // Clone and move metrics to modal
    const metricsContainer = member.querySelector(".member-metrics");
    if (metricsContainer) {
      modalMetrics.innerHTML = "";
      metricsContainer.querySelectorAll(".metric").forEach((metric) => {
        modalMetrics.appendChild(metric.cloneNode(true));
      });
    }

    // Clone and move links to modal (excluding bio button)
    const linksContainer = member.querySelector(".member-links");
    if (linksContainer) {
      modalLinks.innerHTML = "";
      linksContainer.querySelectorAll("a").forEach((link) => {
        if (!link.classList.contains("bio-trigger")) {
          const clone = link.cloneNode(true);
          modalLinks.appendChild(clone);
        }
      });
    }

    // Show modal
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  // Attach event listeners to all bio-trigger buttons
  document.querySelectorAll(".bio-trigger").forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      console.log("Bio button clicked!", event.target);
      showMemberBio(event);
    });
  });

  // Close modal when clicking the close button
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("show")) {
      modal.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });
});
