import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState, useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import logo from '../assets/img/logo.png';

import '../assets/styles/login.css';

import {loginUser,logout} from "../features/auth/authslic";

function Header() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    token,
    user,
    loading,
    error
  } = useSelector((state) => state.auth);

  const [scrolled, setScrolled] = useState(false);

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const [showSignupModal, setShowSignupModal] = useState(false);

  const [isClosingModal, setIsClosingModal] = useState(false);

  // LOGIN STATE
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
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
        className={`header fixed-top ${
          scrolled ? "header-scrolled" : ""
        }`}
      >

        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

          {/* LOGO */}
          <a href="#hero" className="logo d-flex align-items-center">

            <img src={logo} alt="logo" />

            <h1>JustBook</h1>

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



        </div>

      </header>

      {/* LOGIN OFFCANVAS */}
      <div
        className={`custom-offcanvas ${
          showOffcanvas ? "show-offcanvas" : ""
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

            {/* PASSWORD */}
            <div className="mb-3">

              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
              />

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
              className={`modal-content border-0 shadow-lg rounded-4 ${
                isClosingModal
                  ? "signup-modal-close-animation"
                  : "signup-modal-animation"
              }`}
            >

              {/* HEADER */}
              <div className="modal-header signup-modal-header border-0 text-white">

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
                  onClick={closeSignupModal}
                ></button>

              </div>

              {/* BODY */}
              <div className="modal-body p-4 p-md-5">

                <form>

                  <div className="row">

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

                  <button
                    type="submit"
                    className="signup-submit-btn btn w-100 py-2 fw-bold rounded-3 text-white"
                  >
                    Create Account
                  </button>

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