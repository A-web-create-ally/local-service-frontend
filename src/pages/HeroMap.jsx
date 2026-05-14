import { useState } from "react";

function HeroMap() {
  const [location, setLocation] = useState("Ahmedabad, Gujarat");

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;

  return (
    <section className="hero-map position-relative ">

      {/* 🔥 Background Map */}
      <iframe
        src={mapSrc}
        className="map-frame"
        loading="lazy"
      ></iframe>

      {/* 🔥 Overlay Content */}
      <div className="overlay d-flex align-items-center justify-content-center text-center">
        <div className="content text-white">

          <h1>Find Local Services Near You</h1>
          <p>Plumbing, Electrician, Cleaning & More</p>

          {/* 🔍 Search Location */}
          <div className="search-box mt-4">
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
            />
          </div>

          <button className="btn btn-primary mt-3">
            Search Services
          </button>

        </div>
      </div>

     
    </section>
  );
}

export default HeroMap;