import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import logo from '../assets/img/logo.png'
import '../assets/styles/login.css'


function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {

    const headerSticky = () => {

      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", headerSticky);

    return () => window.removeEventListener("scroll", headerSticky);

  }, []);

  return (

    <div className="index-page">

      <header
        id="header"
        className={`header fixed-top ${scrolled ? "header-scrolled" : ""}`}
      >

        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

          {/* Logo */}
          <a href="#hero" className="logo d-flex align-items-center">
            <img src={logo} alt="" />
            <h1>JustBook</h1>
          </a>

          {/* Navbar */}
          <nav id="navmenu" className="navmenu">

            <ul>

              <li><Link to="/Home">Home</Link></li>

              <li><Link to="/services">Services</Link></li>

              <li><a href="#booking">My Booking</a></li>

              <li><Link to="/Contact">Contact</Link></li>

               <li><Link to="/about">About Us</Link></li>

            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>

          </nav>

          {/* Login Button */}
          <button
            className="cta-btn border-0"
            onClick={() => setShowOffcanvas(true)}
          >
            Login
          </button>

        </div>

      </header>

      {/* Offcanvas */}
      <div
        className={`custom-offcanvas ${showOffcanvas ? "show-offcanvas" : ""}`}
      >

        {/* Header */}
        <div className="offcanvas-header border-bottom">

          <h5 className="offcanvas-title fw-bold">
            Login Account
          </h5>

          <button
            type="button"
            className="btn-close"
            onClick={() => setShowOffcanvas(false)}
          ></button>

        </div>

        {/* Body */}
        <div className="offcanvas-body fade-animation">

          <form>

            <div className="mb-3">

              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />

            </div>

            <button className="btn btn-primary w-100">
              Login
            </button>

          </form>

        </div>

      </div>

      {/* Overlay */}
      {showOffcanvas && (

        <div
          className="custom-overlay"
          onClick={() => setShowOffcanvas(false)}
        ></div>

      )}

    </div>

  );
}

export default Header;