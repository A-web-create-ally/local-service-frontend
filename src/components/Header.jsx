
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState,useEffect } from 'react';

import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";
// import { useState } from 'react'

function Header() {
  const [scrolled, setScrolled] = useState(false);
   useEffect (()=>{
    const headerSticky=()=>{
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", headerSticky);
     return () => window.removeEventListener("scroll", headerSticky);
  })
  return (
   
     <div className="index-page">

       <header id="header" className={`header fixed-top ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <a href="#hero" className="logo d-flex align-items-center">
          <i className="bx bxl-dribbble"></i>          
           <h1>JustBook</h1>        </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              
              <li> <Link to="/Home">Home</Link></li>
               <li><Link to="/services">Services</Link></li>
               <li><a href="#By Booking">By Booking</a></li>
              <li><a href="#Dashboard">Dashboard</a></li>
               <li><Link to="/logIn">LogIn</Link></li>
            <li><a href="#">Sing up</a></li>               
             <li><a href="#contact">Contact</a></li>
             
             
             </ul>
     
            {/* Mobile menu icon */}
           <i className="mobile-nav-toggle d-xl-none bi bi-x bi-list"></i>
          </nav>

         <a className="cta-btn" href="#about">Get Started</a>

        </div>
      </header>
       </div>
//   )
/* <header id="header" className={`header fixed-top ${scrolled ? "header-scrolled" : ""}`}>
<nav className="navmenu" id="Navmanu">
  <div className="container">
    <div className="d-flex align-items-center justify-content-between gap-3">
      <a className="nav-logo" onclick="showPage('home')" href="javascript:void(0)">Just<span>Book</span></a>
      <div className="d-none d-md-flex align-items-center gap-1">
        <a className="nav-link-custom active-page" data-page="home">Home</a>
        <a className="nav-link-custom" data-page="services">Services</a>
        <a className="nav-link-custom" data-page="bookings">My Bookings</a>
        <a className="nav-link-custom" data-page="provider-dashboard">Dashboard</a>
        <a className="nav-link-custom" data-page="admin">Admin</a>
      </div>
      <div className="d-flex align-items-center gap-2">
        <div style={{ position: "relative" }}>
          <button className="btn-outline-custom d-none d-md-inline-flex align-items-center gap-2" onclick="toggleNotif()" id="notifBtn">
            <i className="fa fa-bell" style={{ fontSize: "15px" }}></i>
            <span style={{ background: "var(--accent)", color: "white", width: "18px", height: "18px", borderRadius: "50%", fontSize: "11px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700" }}>3</span>
          </button>
          <div class="notif-dropdown" id="notifDropdown">
            
          </div>
        </div>
        <button className="btn-outline-custom" onclick="showPage('auth')">Login</button>
        <button className="btn-primary-custom" onclick="showPage('auth')">Sign Up</button>
      </div>
    </div>
  </div>
</nav>
</header> */
)}
export default Header