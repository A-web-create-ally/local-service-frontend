{/* // templateScripts.js
import AOS from "aos";
import Swiper from "swiper";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded/imagesloaded.pkgd";
import GLightbox from "glightbox";

export function initTemplateScripts() {
  "use strict";

  /* ===== Scroll header ===== 
  const toggleScrolled = () => {
    const body = document.body;
    const header = document.querySelector("#header");
    if (!header) return;

    if (
      !header.classList.contains("scroll-up-sticky") &&
      !header.classList.contains("sticky-top") &&
      !header.classList.contains("fixed-top")
    )
      return;

    window.scrollY > 100
      ? body.classList.add("scrolled")
      : body.classList.remove("scrolled");
  };
  window.addEventListener("scroll", toggleScrolled);
  toggleScrolled();

  /* ===== Mobile Nav Toggle ===== 
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
  const mobileNavToggle = () => {
    document.body.classList.toggle("mobile-nav-active");
    mobileNavToggleBtn?.classList.toggle("bi-list");
    mobileNavToggleBtn?.classList.toggle("bi-x");
  };
  mobileNavToggleBtn?.addEventListener("click", mobileNavToggle);

  /* ===== Scroll Top Button ===== 
  const scrollTop = document.querySelector(".scroll-top");
  const toggleScrollTop = () => {
    if (!scrollTop) return;
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  };
  scrollTop?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", toggleScrollTop);
  toggleScrollTop();

  /* ===== AOS ===== 
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  /* ===== GLightbox ===== 
  GLightbox({ selector: ".glightbox" });

  /* ===== Swiper Sliders ===== 
  document.querySelectorAll(".init-swiper").forEach((swiperEl) => {
    const configEl = swiperEl.querySelector(".swiper-config");
    if (!configEl) return;
    const config = JSON.parse(configEl.innerHTML.trim());
    new Swiper(swiperEl, config);
  });

  /* ===== Isotope ===== 
  document.querySelectorAll(".isotope-layout").forEach((layoutEl) => {
    const container = layoutEl.querySelector(".isotope-container");
    if (!container) return;

    imagesLoaded(container, () => {
      const iso = new Isotope(container, {
        itemSelector: ".isotope-item",
        layoutMode: layoutEl.dataset.layout || "masonry",
      });

      layoutEl.querySelectorAll(".isotope-filters li").forEach((filter) => {
        filter.addEventListener("click", () => {
          layoutEl
            .querySelector(".filter-active")
            ?.classList.remove("filter-active");
          filter.classList.add("filter-active");
          iso.arrange({ filter: filter.dataset.filter });
          AOS.refresh(); // refresh animations
        });
      });
    });
  });

  /* ===== Preloader ===== 
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }
} */}

import { useEffect } from "react";
import AOS from "aos";
import Swiper from "swiper";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded/imagesloaded.pkgd";
import GLightbox from "glightbox";

export default function useTemplateScripts() {
  useEffect(() => {

    /* ===== Scroll Header ===== */
    const toggleScrolled = () => {
      const body = document.body;
      const header = document.querySelector("#header");
      if (!header) return;

      if (
        !header.classList.contains("scroll-up-sticky") &&
        !header.classList.contains("sticky-top") &&
        !header.classList.contains("fixed-top")
      )
        return;

      window.scrollY > 100
        ? body.classList.add("scrolled")
        : body.classList.remove("scrolled");
    };

    /* ===== Scroll Top ===== */
    const scrollTop = document.querySelector(".scroll-top");
    const toggleScrollTop = () => {
      if (!scrollTop) return;
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };

    /* ===== Mobile Nav ===== */
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    const mobileNavToggle = () => {
      document.body.classList.toggle("mobile-nav-active");
      mobileNavToggleBtn?.classList.toggle("bi-list");
      mobileNavToggleBtn?.classList.toggle("bi-x");
    };

    /* ===== Events ===== */
    window.addEventListener("scroll", toggleScrolled);
    window.addEventListener("scroll", toggleScrollTop);
    mobileNavToggleBtn?.addEventListener("click", mobileNavToggle);

    scrollTop?.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    toggleScrolled();
    toggleScrollTop();

    /* ===== AOS ===== */
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    /* ===== GLightbox ===== */
    const lightbox = GLightbox({ selector: ".glightbox" });

    /* ===== Swiper ===== */
    document.querySelectorAll(".init-swiper").forEach((swiperEl) => {
      const configEl = swiperEl.querySelector(".swiper-config");
      if (!configEl) return;
      const config = JSON.parse(configEl.innerHTML.trim());
      new Swiper(swiperEl, config);
    });

    /* ===== Isotope ===== */
    document.querySelectorAll(".isotope-layout").forEach((layoutEl) => {
      const container = layoutEl.querySelector(".isotope-container");
      if (!container) return;

      imagesLoaded(container, () => {
        const iso = new Isotope(container, {
          itemSelector: ".isotope-item",
          layoutMode: layoutEl.dataset.layout || "masonry",
        });

        layoutEl.querySelectorAll(".isotope-filters li").forEach((filter) => {
          filter.addEventListener("click", () => {
            layoutEl
              .querySelector(".filter-active")
              ?.classList.remove("filter-active");
            filter.classList.add("filter-active");
            iso.arrange({ filter: filter.dataset.filter });
            AOS.refresh();
          });
        });
      });
    });

    /* ===== Preloader ===== */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }

    /* ===== CLEANUP (VERY IMPORTANT) ===== */
    return () => {
      window.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("scroll", toggleScrollTop);
      mobileNavToggleBtn?.removeEventListener("click", mobileNavToggle);
      lightbox?.destroy();
    };

  }, []);
}


