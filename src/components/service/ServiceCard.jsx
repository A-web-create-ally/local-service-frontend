
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const ServiceCard = ({ service }) => {

  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const [showBookingPopup, setShowBookingPopup] = useState(false);

  // SAFETY CHECK
  if (!service) {
    return null;
  }

  // BOOKING
  const handleBooking = () => {

    // LOGIN CHECK
    if (!token) {

      setShowLoginPopup(true);

      return;
    }

    // SHOW BOOKING FORM
    setShowBookingPopup(true);
  };

  return (

    <>
      <div className="col-lg-4 col-md-6">

        <div className="service-card h-100 shadow-sm border-0">

          {/* IMAGE */}
          <div className="service-image position-relative overflow-hidden rounded-top">

            <img
              src={
                service.image
                  ? `${API_URL}${service.image.startsWith("/") ? "" : "/"}${service.image}`
                  : `${API_URL}/uploads/user/image/server-Screenshot (3).png`
              }
              alt={service.title}
              className="img-fluid w-100"
            />

          </div>

          {/* CONTENT */}
          <div className="service-content p-4">

            <div className="service-category text-muted small mb-2">
              {service.category}
            </div>

            <h5 className="service-title mb-3 fw-bold">
              {service.title}
            </h5>

            <div className="service-price mb-3">

              <span className="h4 fw-bold text-primary">
                ₹{service.price}
              </span>

            </div>

            <button
              className="btn btn-primary w-100"
              onClick={handleBooking}
            >
              Book Now
            </button>

          </div>

        </div>

      </div>

      {/* LOGIN POPUP */}
      {showLoginPopup && (

        <div className="booking-overlay">

          <div className="booking-popup">

            <button
              className="booking-close"
              onClick={() => setShowLoginPopup(false)}
            >
              ×
            </button>

            <h3 className="booking-title">
              Login Required
            </h3>

            <p className="booking-subtitle">
              Please login first to book a service.
            </p>

            <div className="d-flex gap-2">

              <button
                className="btn btn-secondary w-50"
                onClick={() => setShowLoginPopup(false)}
              >
                Cancel
              </button>

              <button
                className="btn btn-primary w-50"
                onClick={() => navigate("/Home")}
              >
                Login
              </button>

            </div>

          </div>

        </div>
      )}

      {/* BOOKING FORM POPUP */}
      {showBookingPopup && (

        <div className="booking-overlay">

          <div className="booking-popup">

            <button
              className="booking-close"
              onClick={() => setShowBookingPopup(false)}
            >
              ×
            </button>

            <h3 className="booking-title">
              Book Service
            </h3>

            <p className="booking-subtitle">
              Fill details to continue booking
            </p>

            <form>

              <input
                type="text"
                placeholder="Full Name"
                className="booking-input"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="booking-input"
              />

              <input
                type="date"
                className="booking-input"
              />

              <textarea
                rows="4"
                placeholder="Enter Address"
                className="booking-input"
              ></textarea>

              <button
                type="submit"
                className="booking-btn"
              >
                Confirm Booking
              </button>

            </form>

          </div>

        </div>
      )}

    </>
  );
};

export default ServiceCard;

