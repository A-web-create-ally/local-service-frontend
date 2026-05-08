import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroMap from "./HeroMap";

function Contact() {
  const [address, setAddress] = useState("Ahmedabad, Gujarat, India");

  // Convert address to map URL
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <>
    <Header/>
    <HeroMap />
      <section id="contact" className="contact section position-relative">

        {/* 🔥 Background Map */}
        <div className="map-bg">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Overlay Content */}
        <div className="container section-title text-center" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>Get in touch with us for any service</p>
        </div>

        <div className="container position-relative" data-aos="fade-up">

          <div className="row gy-4">

            {/* LEFT SIDE */}
            <div className="col-lg-6">
              <div className="info-box p-4 shadow bg-white rounded">

                <h4>Our Address</h4>

                {/* Dynamic Address Input */}
                <input
                  type="text"
                  className="form-control mb-3"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                <p>{address}</p>

                <hr />

                <p><strong>Phone:</strong> +91 9876543210</p>
                <p><strong>Email:</strong> support@localservices.com</p>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="col-lg-6">
              <div className="form-box p-4 shadow bg-white rounded">
                <form>
                  <div className="row gy-3">

                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Your Name" required />
                    </div>

                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="Your Email" required />
                    </div>

                    <div className="col-md-12">
                      <input type="text" className="form-control" placeholder="Subject" required />
                    </div>

                    <div className="col-md-12">
                      <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <button className="btn btn-primary w-100">
                        Send Message
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>

      </section>

     <Footer/>
      
      
    </>
  );
}

export default Contact;