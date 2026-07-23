import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import "../../assets/styles/serviceCard.css"
import { useDispatch } from "react-redux";
import { createBooking } from "../../features/bookingSlice.js";

const API_URL = import.meta.env.VITE_API_URL;

const ServiceCard = ({ service }) => {

  console.log(service);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const [bookingData, setBookingData] = useState({
  bookingDate: "",
  bookingTime: "",
  address: "",
  mobileNumber: "",
  });
  
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

const handleBookingSubmit = async (e) => {
  e.preventDefault();

  const result = await dispatch(
    createBooking({
      service: service._id,
      bookingDate: bookingData.bookingDate,
      bookingTime: bookingData.bookingTime,
      address: bookingData.address,
      mobileNumber: bookingData.mobileNumber,
    })
  );

  if (result.meta.requestStatus === "fulfilled") {

    toast.success("Booking created successfully!");

    setShowBookingPopup(false);
    setBookingData({
      bookingDate: "",
      bookingTime: "",
      address: "",
      mobileNumber: "",
    });

  } else {

    toast.error(result.payload || "Booking failed");

  }
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
                onClick={() =>
                navigate("/Home", {
                  state: { openLogin: true },
                  })
                 }
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
          
            <div className="booking-header">

              <img
                src={
                  service.image
                    ? `${API_URL}${service.image.startsWith("/") ? "" : "/"}${service.image}`
                    : `${API_URL}/uploads/user/image/server-Screenshot (3).png`
                }
                alt={service.title}
                className="booking-service-image"
              />

              <div className="booking-service-info">

                <h3>{service.title}</h3>

                <div className="booking-meta">

                  <span className="rating">
                    ⭐ {service.rating || 4.8}
                  </span>

                  <span className="price">
                    ₹{service.price}
                  </span>

                </div>

                <small className="booking-duration">
                  ⏱ {service.duration || "45 Minutes"}
                </small>

              </div>

            </div>

            <form onSubmit={handleBookingSubmit}>

                <div className="booking-phone">
                    <i className="bi bi-telephone"></i>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="booking-input phone-input"
                        value={bookingData.mobileNumber}
                        onChange={(e)=>
                            setBookingData({
                                ...bookingData,
                                mobileNumber:e.target.value,
                            })
                        }
                    />
                </div>

                <div className="booking-row">

                    <div className="booking-field">
                    
                    <i
                      className="bi bi-calendar3"
                      onClick={() => dateRef.current?.showPicker()}
                    />

                        <input
                            ref={dateRef}
                            type="date"
                            className="booking-input"
                            value={bookingData.bookingDate}
                            onChange={(e) =>
                                setBookingData({
                                    ...bookingData,
                                    bookingDate: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="booking-field">
                        
                        <i
                            className="bi bi-clock-fill"
                            onClick={() => timeRef.current?.showPicker()}
                        />

                        <input
                            ref={timeRef}
                            type="time"
                            className="booking-input"
                            value={bookingData.bookingTime}
                            onChange={(e) =>
                                setBookingData({
                                    ...bookingData,
                                    bookingTime: e.target.value,
                                })
                            }
                        />
                    </div>

                </div>  

              <div className="booking-address">
                    <i className="bi bi-geo-alt-fill"></i>

                    <textarea
                        rows="3"
                        placeholder="Enter Address"
                        className="booking-input address-input"
                        value={bookingData.address}
                        onChange={(e)=>
                            setBookingData({
                                ...bookingData,
                                address:e.target.value,
                            })
                        }
                    />
                </div>
              

              <div className="booking-footer">
                  <button
                      type="submit"
                      className="booking-btn"
                  >
                      Confirm Booking
                  </button>
              </div>

            </form>

          </div>

        </div>
      )}

    </>
  );
};

export default ServiceCard;

