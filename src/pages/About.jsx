import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/About.css";
import team1 from "../assets/img/team/team-1.jpg";
import team2 from "../assets/img/team/team-2.jpg";
import team3 from "../assets/img/team/team-3.jpg";

const teamMembers = [
  {
    name: "Walter White",
    /*role: "Frontend Developer",*/
    image: team1,
  },
  {
    name: "Sarah Johnson",
    /*role: "Backend Developer",*/
    image: team2,
  },
  {
    name: "William Anderson",
    /*role: "UI/UX Designer",*/
    image: team3,
  },
];

const stats = [
  { number: "10K+", label: "Happy Customers" },
  { number: "500+", label: "Verified Professionals" },
  { number: "50+", label: "Cities Covered" },
  { number: "24/7", label: "Customer Support" },
];

const features = [
  {
    title: "Verified Experts",
    desc: "Background-checked and experienced professionals.",
  },
  {
    title: "Quick Booking",
    desc: "Book any service in just a few clicks.",
  },
  {
    title: "Secure Payments",
    desc: "Safe and transparent payment process.",
  },
  {
    title: "24/7 Support",
    desc: "Our support team is always ready to help.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />

      <div
        
      >
        
        <section className="about-hero">
          <div className="hero-overlay"></div>

          <div className="hero-content" data-aos="fade-up">
            <span className="hero-badge">About Our Services</span>

            <h1>
              Connecting Customers with
              <span> Trusted Local Experts</span>
            </h1>

            <p>
              We make home services simple, reliable and affordable across
              India.
            </p>
          </div>
        </section>

      
        <section className="glass-section" data-aos="fade-up">
          <h2>Who We Are</h2>
          <p>
            Our platform helps customers book trusted professionals for
            plumbing, electrical work, cleaning, appliance repair and many
            other home services.
          </p>
        </section>

        
        <section className="stats-section">
          {stats.map((item, index) => (
            <div
              className="stat-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </section>

       
        <section className="two-column">
          <div className="glass-card" data-aos="fade-right">
            <h2>Our Mission</h2>
            <p>
              To make local services easy, affordable and trustworthy for
              everyone.
            </p>
          </div>

          <div className="glass-card" data-aos="fade-left">
            <h2>Our Vision</h2>
            <p>
              To become India’s most trusted marketplace for home services.
            </p>
          </div>
        </section>

        
        <section className="glass-section" data-aos="fade-up">
          <h2>Why Choose Us</h2>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                className="feature-card"
                key={index}
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        
        <section className="glass-section" data-aos="fade-up">
          <h2>Meet Our Team</h2>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                className="team-card"
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
              >
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>  
            ))}
          </div>
        </section>

        
        <section className="contact-cta" data-aos="fade-up">
          <h2>Ready to Book a Service?</h2>
          <p>Join thousands of customers who trust us every day.</p>
          <button>Get Started</button>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;