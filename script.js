// Mobile menu functionality
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const mobileNav = document.querySelector(".mobile-nav")
const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-icon")

// Navigation functionality
const navLinks = document.querySelectorAll(".nav-link")

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running"
    }
  })
}, observerOptions)

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const lucide = window.lucide // Declare the variable before using it
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  updateActiveSection()

  // Add animation delays to skill badges
  const skillBadges = document.querySelectorAll(".skill-badge")
  skillBadges.forEach((badge, index) => {
    badge.style.animationDelay = `${index * 0.1}s`
  })

  // Add animation delays to project cards
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })

  // Observe animated elements
  const animatedElements = document.querySelectorAll(".skill-badge, .project-card")
  animatedElements.forEach((el) => {
    el.style.animationPlayState = "paused"
    observer.observe(el)
  })
})

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    if (mobileNav) {
      mobileNav.classList.toggle("hidden")
    }
    if (menuIcon) {
      menuIcon.classList.toggle("hidden")
    }
    if (closeIcon) {
      closeIcon.classList.toggle("hidden")
    }
  })
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 80 // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }

  // Close mobile menu if open
  if (mobileNav) {
    mobileNav.classList.add("hidden")
  }
  if (menuIcon) {
    menuIcon.classList.remove("hidden")
  }
  if (closeIcon) {
    closeIcon.classList.add("hidden")
  }
}

// Add click event listeners to navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const sectionId = e.target.getAttribute("data-section")
    if (sectionId) {
      scrollToSection(sectionId)
    }
  })
})

// Add click event listeners to CTA buttons
document.querySelectorAll("[data-section]").forEach((button) => {
  if (!button.classList.contains("nav-link")) {
    button.addEventListener("click", (e) => {
      const sectionId =
        e.target.getAttribute("data-section") || e.target.closest("[data-section]").getAttribute("data-section")
      if (sectionId) {
        scrollToSection(sectionId)
      }
    })
  }
})

// Active section highlighting
function updateActiveSection() {
  const sections = ["home", "about", "skills", "education", "projects", "contact"]
  const scrollPosition = window.scrollY + 100

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        // Remove active class from all nav links
        navLinks.forEach((link) => link.classList.remove("active"))

        // Add active class to current section links
        navLinks.forEach((link) => {
          if (link.getAttribute("data-section") === sectionId) {
            link.classList.add("active")
          }
        })
        break
      }
    }
  }
}

// Scroll event listener for active section highlighting
window.addEventListener("scroll", updateActiveSection)
