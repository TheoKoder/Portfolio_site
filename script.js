// Mobile menu toggle
document.getElementById("menu-btn").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenu.classList.add("hidden");

      // Scroll to target
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".animate-fadeIn");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
    }
  });
};

//Set initial opacity for animated elements
document.querySelectorAll(".animate-fadeIn").forEach((el) => {
  el.style.opacity = "0";
});

// Add scroll event listener
window.addEventListener("scroll", animateOnScroll);

// Trigger once on page load
window.addEventListener("load", animateOnScroll);
