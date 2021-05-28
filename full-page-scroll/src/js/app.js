// DOM Selects
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".header__nav-link");
const navButtons = document.querySelectorAll(".circle a");

// Helper Functions
function activeSectionHandler(dataId) {
  // Nav Links
  navLinks.forEach((link) => {
    if (link.dataset.id === dataId) {
      link.classList.add("active");
      return;
    }
    link.classList.remove("active");
  });

  // Nav Buttons
  navButtons.forEach((button) => {
    if (button.dataset.id === dataId) {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  });
}

// Intersection Observer
function sectionCallback(sectionEntries, observer) {
  sectionEntries.forEach((section) => {
    if (!section.isIntersecting) {
      return;
    }
    activeSectionHandler(section.target.id);
  });
}

const sectionOpt = {
  threshold: 0.6,
};

let sectionObserver = new IntersectionObserver(sectionCallback, sectionOpt);

// Target sections
sections.forEach((section) => {
  sectionObserver.observe(section);
});
