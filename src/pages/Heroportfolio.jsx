// PortfolioHero.jsx

import React from "react";


function PortfolioHero() {
  return (
    <>
      <section className="portfolio-hero mt-lg-5 mt-5 d-flex align-items-center  position-relative overflow-hidden text-#fff">

        {/* Overlay */}
        <div className="portfolio-overlay"></div>

        {/* Floating Shapes */}
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>

        <div className="container position-relative">

          <div className="row justify-content-center text-center">

            <div className="col-lg-8">

              <span className="hero-badge">
                ✨ Our Portfolio
              </span>

              <h1 className="portfolio-title">
                Discover Our <span>Creative Work</span>
              </h1>

              <p className="portfolio-subtitle">
                Explore high-quality home services, creative projects,
                trusted professionals, and customer-focused solutions
                designed with perfection.
              </p>

              <div className="hero-buttons">

                <a href="#portfolio" className="hero-btn primary-btn">
                  Explore Portfolio
                </a>

                <a href="contact" className="hero-btn secondary-btn">
                  Contact Us
                </a>

              </div>

              {/* Stats */}
              <div className="hero-stats">

                <div className="stat-box">
                  <h3>500+</h3>
                  <span>Projects</span>
                </div>

                <div className="stat-box">
                  <h3>4.9★</h3>
                  <span>Ratings</span>
                </div>

                <div className="stat-box">
                  <h3>24/7</h3>
                  <span>Support</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default PortfolioHero;