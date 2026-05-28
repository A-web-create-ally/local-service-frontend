import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const API_URL = import.meta.env.VITE_API_URL;
const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  // 👉 Safety check
  if (!service) {
    return null;
  }

  const handleBooking = () => {

    if (!token) {

      alert("Please login first to book a service");

      return;
    }

    navigate(`/provider/${service._id || service.id}`);
  };

  return (

    <div className="col-lg-4 col-md-6">

      <div
        className="service-card h-100 shadow-sm border-0"
      >

        {/* Image */}
        <div className="service-image position-relative overflow-hidden rounded-top">

          <img
            src={
              service.image
                ? service.image
                : `${API_URL}/uploads/user/image/server-Screenshot (3).png`
            }
            alt={service.title}
            className="img-fluid w-100"
            
          />

        </div>

        {/* Content */}
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
  );
};

export default ServiceCard;