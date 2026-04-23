// Wait until the HTML is loaded before selecting page elements.
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section");
  const year = document.querySelector("#year");

  // Show the current year in the footer.
  year.textContent = new Date().getFullYear();

  // Open and close the mobile navigation menu.
  navToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close the mobile menu after a navigation link is selected.
  navItems.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Highlight the navigation link for the section currently in view.
  function updateActiveLink() {
    let currentSectionId = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 140;

      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navItems.forEach(function (link) {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSectionId) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
});
