document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu if open
    mobileMenu.classList.add("hidden");
  });
});

// Add fade-in animation to elements when they come into view
const fadeElements = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

fadeElements.forEach((el) => {
  fadeInObserver.observe(el);
});

// Simulate CV download
document.querySelector('[href=""]').addEventListener("click", function (e) {
  e.preventDefault();
  alert("CV download would start here. This is a demo.");
});

//Email form submission
function handleSubmit(event) {
  event.preventDefault();
  // Construct the mailto link
  // open the user's default email client with the pre-filled information
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = encodeURIComponent(
    document.getElementById("subject").value.trim()
  );
  const message = encodeURIComponent(
    document.getElementById("message").value.trim()
  );

  const mailtoLink = `mailto:t.rakomane55@gmail.com?subject=${subject}&body=From: ${name} (${email})%0A%0A${message}`;

  window.open(mailtoLink, "_blank");
  alert("Thank you for your message! I will get back to you soon.👌");
}
