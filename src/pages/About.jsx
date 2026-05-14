import React from "react";
import team1 from '../assets/img/team/team-1.jpg';
import team2 from '../assets/img/team/team-2.jpg';
import team3 from '../assets/img/team/team-3.jpg';
import aboutBg from "../assets/about-bg.jpeg";
import "../assets/styles/About.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const teamMembers = [
  {
    name: "Walter White",
    role: "Frontend Developer",
    image: team1,
    
  },
  {
    name: "Sarah Jhonson",
    role: "Backend Developer",
    image: team2,
   
  },
  {
    name: "William Anderson",
    role: "UI/UX Designer",
    image: team3,
   
  },
];

const About = () => {
  return (
    <>
    <Header/>
    <div className="about-page">       
      <section className="hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            We connect customers with trusted professionals for home services.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make local services easy, affordable, and
          trustworthy for everyone.
        </p>
      </section>

      {/* Vision */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>To become India’s most trusted service marketplace.</p>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>

        <div className="features">
          <div className="feature-card">
            <h3>Verified Professionals</h3>
            <p>Experienced and background-checked service providers.</p>
          </div>

          <div className="feature-card">
            <h3>Quick Booking</h3>
            <p>Book any service in minutes.</p>
          </div>

          <div className="feature-card">
            <h3>Secure Payments</h3>
            <p>100% safe and transparent payment process.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-section">
        <h2>Meet Our Team</h2>

        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
            <img src={member.image}  alt={member.name} /> 
            
          
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="about-section contact">
        <h2>Contact Us</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +91 9876543210</p>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default About;