// Fades each ".reveal" section in as it scrolls into view.

// Find every section that should animate in
const revealItems = document.querySelectorAll(".reveal");

// Watch for each one entering the screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible"); // triggers the CSS animation
      observer.unobserve(entry.target);      // only animate once
    }
  });
}, { threshold: 0.15 });

revealItems.forEach((item) => observer.observe(item));
