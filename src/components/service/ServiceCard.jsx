import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div className="col-lg-4 col-md-6">
      <div 
        className="service-card h-100 shadow-sm border-0 transition-all hover-scale"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate(`/provider/${service.id}`)}
      >
        <div className="service-image position-relative overflow-hidden rounded-top">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-100 h-48 object-cover img-fluid"
            
          />
          <div className={`position-absolute top-2 end-2 badge ${service.availableToday ? 'bg-success' : 'bg-secondary'}`}>
            {service.availableToday ? 'Today' : 'Soon'}
          </div>
          <div className="position-absolute bottom-2 start-2 badge bg-info text-dark small">
            {service.location}
          </div>
        </div>
        <div className="service-content p-4">
          <div className="service-category text-muted small mb-2">
            {service.category}
          </div>
          <h5 className="service-title mb-3 fw-bold">{service.title}</h5>
          <div className="service-rating mb-3 d-flex align-items-center">
            <span className="text-warning me-1">★★★★★</span>
            <span className="fw-bold me-2">{service.rating}</span>
            <span className="text-muted small">({service.reviews})</span>
          </div>
          <div className="service-price mb-3">
            <span className="h4 fw-bold text-primary">₹{service.price}</span>
            <span className="text-muted small ms-1">starting</span>
          </div>
          <div className="provider-name small text-muted mb-2">
            {service.provider}
          </div>
          <button className="btn btn-primary w-100 mt-auto">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;