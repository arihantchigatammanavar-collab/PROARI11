// Mobile navigation and lightweight scroll-in animations.
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation a");
const revealElements = document.querySelectorAll(".reveal");
const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

function closeNavigation() {
  if (!menuToggle || !navigation) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const pageSections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window && pageSections.length > 0) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const currentLink = document.querySelector(`.navigation a[href="#${entry.target.id}"]`);
      document.querySelectorAll(".navigation .nav-link").forEach((link) => {
        link.classList.toggle("active", link === currentLink);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  pageSections.forEach((section) => sectionObserver.observe(section));
}
