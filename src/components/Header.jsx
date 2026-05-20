import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import logo from '../assets/img/logo.png';
import '../assets/styles/login.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false); // Login Offcanvas
  const [showSignupModal, setShowSignupModal] = useState(false); // Sign In Modal

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
            <img src={logo} alt="logo" />
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
              <li><Link to="/Portfolio">Portfolio</Link></li>
            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          {/* Sign In and Login Buttons */}
          <div className="d-flex gap-2">
            {/* Sign In Button */}
            <button
              className="cta-btn border-0"
              onClick={() => setShowSignupModal(true)}
            >
              Sign In
            </button>

            {/* Login Button */}
            <button
              className="cta-btn border-0"
              onClick={() => setShowOffcanvas(true)}
            >
              Login
            </button>
          </div>
        </div>
      </header>

      {/* ================= LOGIN OFFCANVAS ================= */}
      <div
        className={`custom-offcanvas ${
          showOffcanvas ? "show-offcanvas" : ""
        }`}
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold">Login Account</h5>

          <button
            type="button"
            className="btn-close"
            onClick={() => setShowOffcanvas(false)}
          ></button>
        </div>

        <div className="offcanvas-body fade-animation">
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
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

      {/* ================= SIGN IN MODAL ================= */}
      {showSignupModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(5px)",
          }}
          onClick={() => setShowSignupModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 👇 Animation class added here */}
            <div
              className="modal-content border-0 shadow-lg rounded-4 signup-modal-animation"
              style={{ overflow: "hidden" }}
            >
              {/* Modal Header */}
              <div
                className="modal-header border-0 text-white"
                style={{
                  background: "rgba(15, 23, 42, 0.75)",
                  border: "none",
                }}
              >
                <div>
                  <h3 className="modal-title fw-bold mb-1">
                    Create Your Account
                  </h3>
                  <p className="mb-0 opacity-75 small">
                    Join JustBook and book services quickly and easily.
                  </p>
                </div>

                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowSignupModal(false)}
                ></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body p-4 p-md-5">
                <form>
                  <div className="row">
                    {/* Full Name */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Address */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your address"
                      />
                    </div>

                    {/* Password */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Create password"
                      />
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="termsCheck"
                    />
                    <label
                      className="form-check-label small text-muted"
                      htmlFor="termsCheck"
                    >
                      I agree to the Terms & Conditions and Privacy Policy.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn w-100 py-2 fw-bold rounded-3 text-white"
                    style={{
                      background: "linear-gradient(135deg, #ff4a17, #ff4a17)",
                      border: "none",
                    }}
                  >
                    Create Account
                  </button>

                  {/* Footer */}
                  <p className="text-center mt-3 mb-0 text-muted">
                    Already have an account?{" "}
                    <span
                      className="text-primary fw-semibold"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setShowSignupModal(false);
                        setShowOffcanvas(true);
                      }}
                    >
                      Login
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      
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