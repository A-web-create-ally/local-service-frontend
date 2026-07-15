import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState, useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import logo from '../assets/img/justbook-logo.png';

import '../assets/styles/login.css';

import { loginUser, logout } from "../features/auth/authslic";

function Header() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const {
    token,
    user,
    loading,
    error
  } = useSelector((state) => state.auth);

  const [scrolled, setScrolled] = useState(false);

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const [isClosingModal, setIsClosingModal] = useState(false);
  // Login password ke liye state
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Sign-In (Create aur Confirm dono ke liye) state
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  // LOGIN STATE
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    password: "",
    confirmPassword: "",
  });

  // HEADER SCROLL
  useEffect(() => {

    const headerSticky = () => {

      if (window.scrollY > 100) {

        setScrolled(true);

      } else {

        setScrolled(false);
      }
    };

    window.addEventListener("scroll", headerSticky);

    return () =>
      window.removeEventListener("scroll", headerSticky);

  }, []);

  
    useEffect(() => {
      if (location.state?.openLogin) {
        setShowOffcanvas(true);
      }
    }, [location]);


  // CLOSE SIGNUP MODAL
  const closeSignupModal = () => {

    setIsClosingModal(true);

    setTimeout(() => {

      setShowSignupModal(false);

      setIsClosingModal(false);

    }, 500);
  };

  // LOGIN
  const handleLogin = async (e) => {

    e.preventDefault();

    const result = await dispatch(
      loginUser(loginData)
    );

    if (result.meta.requestStatus === "fulfilled") {

      setShowOffcanvas(false);

      navigate("/Home");
    }
  };

  return (

    <div className="index-page">

      {/* HEADER */}
      <header
        id="header"
        className={`header fixed-top ${scrolled ? "header-scrolled" : ""
          }`}
      >

        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

          {/* LOGO */}
          <a href="#hero" className="logo d-flex align-items-center">

            <img src={logo} alt="logo" />

            {/*<h1>JustBook</h1>*/}


          </a>

          {/* NAVBAR */}
          <nav id="navmenu" className="navmenu">

            <ul>

              <li>
                <Link to="/Home">Home</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/booking">My Booking</Link>
              </li>

              <li>
                <Link to="/Contact">Contact</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/Portfolio">Portfolio</Link>
              </li>

            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>

          </nav>

          {/* RIGHT SIDE */}


          <div className="d-flex gap-2 align-items-center">

            {!token ? (
              <>

                {/* SIGNUP */}
                <button
                  className="cta-btn border-0"
                  onClick={() => {

                    setIsClosingModal(false);

                    setShowSignupModal(true);
                  }}
                >
                  Sign In
                </button>

                {/* LOGIN */}
                <button
                  className="cta-btn border-0"
                  onClick={() => setShowOffcanvas(true)}
                >
                  Login
                </button>

              </>
            ) : (

              <>
                {/* USER ICON */}
                <button
                  className="btn  rounded-circle"
                >
                  <i className="bi bi-person-circle fs-3"></i>
                </button>

                {/* LOGOUT BUTTON */}
                <button
                  className="btn btn-danger"
                  onClick={() => {

                    dispatch(logout());

                    navigate("/Home");

                  }}
                >
                  Logout
                </button>
              </>
            )}

          </div>

          <div>

          </div>

        </div>

      </header>

      {/* LOGIN OFFCANVAS */}
      <div
        className={`custom-offcanvas ${showOffcanvas ? "show-offcanvas" : ""
          }`}
      >

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

        <div className="offcanvas-body fade-animation">

          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="mb-3">

              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
              />

            </div>

            {/* ==================== LOGIN PASSWORD ==================== */}
            <div className="mb-3">
              <label className="form-label">Password</label>

              <div className="password-wrapper">
                <input
                  type={showLoginPassword ? "text" : "password"} // Type dynamically change hoga
                  className="form-control"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      password: e.target.value,
                    })
                  }
                  required
                />
                <i
                  className={`bi ${showLoginPassword ? "bi-eye" : "bi-eye-slash"
                    } password-eye`} // Hidden hone par slash dikhega
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                ></i>
              </div>
            </div>
            {/* ERROR */}
            {error && (
              <div className="alert alert-danger py-2">
                {error}
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button
              className="btn btn-primary w-100"
              disabled={loading}
            >

              {loading
                ? "Logging in..."
                : "Login"}

            </button>

            {/* SIGNUP LINK */}
            <p className="text-center mt-3 mb-0 text-white">

              Don’t have an account?{" "}

              <span
                className="fw-semibold signup-login-link"
                onClick={() => {

                  setShowOffcanvas(false);

                  setTimeout(() => {

                    setIsClosingModal(false);

                    setShowSignupModal(true);

                  }, 300);
                }}
              >
                Sign In
              </span>

            </p>

          </form>

        </div>

      </div>

      {/* SIGNUP MODAL */}
      {showSignupModal && (
        <div
          className="signup-modal-overlay modal fade show d-block"
          tabIndex="-1"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`modal-content border-0 shadow-lg rounded-4 ${isClosingModal
                ? "signup-modal-close-animation"
                : "signup-modal-animation"
                }`}
            >

              {/* Modal Header */}
              <div className="modal-header signup-modal-header border-0 text-white">

                <div>
                  <h3 className="modal-title fw-bold mb-1">
                    Create Your Account
                  </h3>

                  <p className="mb-0 opacity-75 small">
                    Join JustBook and book services quickly and easily.
                  </p>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeSignupModal}
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

                    {/* ================= CONTACT & ADDRESS SECTION ================= */}

                    {/*<div className="col-12">
                    <h5 className="fw-bold mb-3 address-heading">
                         Contact & Address Details
                    </h5>
                    </div>*/}

                    {/* Phone Number */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>

                      <div className="input-group modern-input-group">
                        <span className="input-group-text">
                          <i className="bi bi-telephone"></i>
                        </span>

                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Country */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Country
                      </label>

                      <div className="input-group modern-input-group">
                        <span className="input-group-text">
                          <i className="bi bi-globe"></i>
                        </span>

                        <select className="form-control">
                          <option>India</option>
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Australia</option>
                          <option>Mexico</option>
                          <option>South Africa</option>
                          <option>United Kingdom</option>

                        </select>
                      </div>
                    </div>

                    {/* State */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        State
                      </label>

                      <div className="input-group modern-input-group">
                        <span className="input-group-text">
                          <i className="bi bi-map"></i>
                        </span>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="State"
                        />
                      </div>
                    </div>


                    {/* City */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        City
                      </label>

                      <div className="input-group modern-input-group">
                        <span className="input-group-text">
                          <i className="bi bi-buildings"></i>
                        </span>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="City"
                        />
                      </div>
                    </div>

                    {/* Street Address */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Street Address
                      </label>

                      <div className="input-group modern-input-group">
                        <span className="input-group-text">
                          <i className="bi bi-geo-alt"></i>
                        </span>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Street Address"
                        />
                      </div>
                      </div>

                    {/* Pincode */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Pincode
                      </label>

                      <div className="input-group modern-input-group">
                        <span className="input-group-text">
                          <i className="bi bi-mailbox"></i>
                        </span>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Pincode"
                        />
                      </div>
                    </div>

              
                    {/* ==================== SIGN IN / REGISTER PASSWORDS ==================== */}
                    {/* Create Password */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">Password</label>
                      <div className="password-wrapper">
                        <input
                          type={showRegisterPassword ? "text" : "password"}
                          className="form-control"
                          placeholder="Create password"
                        />
                        <i
                          className={`bi ${showRegisterPassword ? "bi-eye" : "bi-eye-slash"
                            } password-eye`}
                          onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        ></i>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Confirm Password</label>
                    <div className="password-wrapper">
                    <input
                    type={showRegisterPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Confirm password"
                    />
                    <i
                    className={`bi ${showRegisterPassword ? "bi-eye" : "bi-eye-slash"
                    } password-eye`}
                    onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                    ></i>
                    </div>
                    </div>
                    </div>                
                    
                    {/* Terms */}
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

                  {/* Submit */}
                  <button
                   type="submit"
                   className="signup-submit-btn btn w-100 py-2 fw-bold rounded-3 text-white"
                  >
                   Create Account
                  </button>

                  {/* Footer */}
                  <p className="text-center mt-3 mb-0 text-muted">
                   Already have an account?{" "}

                    <span
                      className="text-primary fw-semibold signup-login-link"
                      onClick={() => {
                        closeSignupModal();

                        setTimeout(() => {
                          setShowOffcanvas(true);
                        }, 500);
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

      {/* OVERLAY */}
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