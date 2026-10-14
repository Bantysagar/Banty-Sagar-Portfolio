document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const navPanel = document.querySelector(".nav-panel");
  const navLinks = document.querySelectorAll(".nav-link");
  const footerYear = document.getElementById("footer-year");
  const profileAvatar = document.querySelector(".profile-avatar");

  // Footer year
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // Theme management
  const updateThemeButton = () => {
    if (!themeToggle) return;

    const isDark = html.dataset.theme === "dark";
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
    themeToggle.setAttribute("aria-pressed", String(isDark));
  };

  updateThemeButton();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme =
        html.dataset.theme === "dark" ? "light" : "dark";

      html.dataset.theme = nextTheme;
      updateThemeButton();

      try {
        localStorage.setItem("banty-portfolio-theme", nextTheme);
      } catch (error) {
        // The theme still works if browser storage is unavailable.
      }
    });
  }

  // Mobile navigation
  const closeMenu = () => {
    if (!menuToggle || !navPanel) return;

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navPanel.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  if (menuToggle && navPanel) {
    menuToggle.addEventListener("click", () => {
      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Open navigation menu" : "Close navigation menu"
      );

      navPanel.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (
        navPanel.classList.contains("is-open") &&
        !navPanel.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeMenu();
    });
  }

  // Active navigation link based on visible section
  const sections = document.querySelectorAll(
    "main section[id]"
  );

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const sectionId = entry.target.id;

          navLinks.forEach((link) => {
            const isActive =
              link.getAttribute("href") === `#${sectionId}`;

            link.classList.toggle("active", isActive);

            if (isActive) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  // Profile image fallback
  if (profileAvatar) {
    profileAvatar.addEventListener("error", () => {
      if (profileAvatar.dataset.fallbackApplied === "true") return;

      profileAvatar.dataset.fallbackApplied = "true";
      profileAvatar.src = "./assets/images/github-avatar.png";
    });
  }

  // Smooth scrolling for same-page links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
        block: "start"
      });

      if (history.replaceState) {
        history.replaceState(null, "", targetId);
      }
    });
  });
});