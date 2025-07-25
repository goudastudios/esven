document.addEventListener("DOMContentLoaded", function () {
  const teamModal = document.getElementById("teamModal");
  if (!teamModal) {
    console.error("Modal element not found!");
    return;
  }

  teamModal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    console.log("Modal triggered by:", button);

    // Get the modal elements
    const modalTitle = teamModal.querySelector(".modal-title");
    const modalBody = teamModal.querySelector(".modal-body");

    // Set the modal content
    if (modalTitle)
      modalTitle.textContent = button.getAttribute("data-member-name");
    if (modalBody)
      modalBody.textContent = button.getAttribute("data-member-bio");
  });
});
