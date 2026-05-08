import { useState } from "react";
import w1 from "../assets/img/working-1.jpg";
import w2 from "../assets/img/working-2.jpg";
import w3 from "../assets/img/working-3.jpg";
import w4 from "../assets/img/working-4.jpg";

function Featured() {
  const [activeTab, setActiveTab] = useState("tab-1");

  const tabs = [
    {
      id: "tab-1",
      icon: "bi-search",
      title: "Find Services",
      img: w1,
      heading: "Search and find trusted local services easily",
      points: [
        "Browse services like plumbing, electrician, cleaning etc.",
        "Filter by rating, price and location",
        "Choose verified professionals near you"
      ],
      desc: "Our platform helps users quickly find reliable service providers in their area."
    },
    {
      id: "tab-2",
      icon: "bi-calendar-check",
      title: "Book Service",
      img: w2,
      heading: "Book appointments in just a few clicks",
      points: [
        "Select date and time as per your convenience",
        "Instant booking confirmation",
        "Flexible scheduling options"
      ],
      desc: "Users can easily book services without calling or waiting."
    },
    {
      id: "tab-3",
      icon: "bi-person-check",
      title: "Verified Professionals",
      img: w3,
      heading: "Get services from trusted experts",
      points: [
        "Background-verified service providers",
        "Ratings and reviews from real users",
        "Quality and safety assurance"
      ],
      desc: "We ensure that only skilled and verified professionals are listed."
    },
    {
      id: "tab-4",
      icon: "bi-wallet2",
      title: "Secure Payment",
      img: w4,
      heading: "Easy and secure payment options",
      points: [
        "Pay online or after service",
        "Multiple payment methods available",
        "Transparent pricing with no hidden charges"
      ],
      desc: "Enjoy safe and hassle-free payments with full transparency."
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">

        {/* Tabs */}
        <ul className="nav nav-tabs row d-flex" data-aos="fade-up">
          {tabs.map((tab) => (
            <li className="nav-item col-3" key={tab.id}>
              <button
                className={`nav-link ${activeTab === tab.id ? "active show" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`bi ${tab.icon}`}></i>
                <h4 className="d-none d-lg-block">{tab.title}</h4>
              </button>
            </li>
          ))}
        </ul>

        {/* Content */}
        <div className="tab-content" data-aos="fade-up">

          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? "active show" : ""}`}
            >
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3">
                  <h3>{tab.heading}</h3>

                  <p className="fst-italic">{tab.desc}</p>

                  <ul>
                    {tab.points.map((point, i) => (
                      <li key={i}>
                        <i className="bi bi-check2-all"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={tab.img} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Featured;