import ServiceCard from "./ServiceCard";

const ServicesGrid = ({ services, loading, searchQuery, onClearFilters }) => {
  if (loading) {
    return (
      <div className="text-center py-5">
        <div 
          className="spinner-border text-primary" 
         
        ></div>
        <p className="mt-2 text-muted">
          {searchQuery ? `Searching for "${searchQuery}"...` : "Loading services..."}
        </p>
      </div>
    );
  }

  if (services.length > 0) {
    return (
      <>
        <div className="row g-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        {services.length > 6 && (
          <div className="text-center mt-5">
            <button className="btn btn-outline-secondary me-2">Previous</button>
            <span className="mx-1 px-2">1</span>
            <span className="mx-1 px-2 fw-bold text-primary">2</span>
            <span className="mx-1 px-2 fw-bold text-primary">3</span>
            <button className="btn btn-outline-secondary ms-2">Next</button>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="text-center py-5">
      <i className="fa fa-search fa-3x text-muted mb-3"></i>
      <h5 className="text-muted">
        {searchQuery 
          ? `No results for "${searchQuery}"` 
          : "No services found"
        }
      </h5>
      <p className="text-muted">
        {searchQuery 
          ? `Try different keywords like ${searchQuery === "plumbing" ? "electrician, cleaning" : "plumbing, cleaning"}`
          : "Try adjusting your filters or search for services"
        }
      </p>
      <button className="btn btn-outline-primary" onClick={onClearFilters}>
        Clear All Filters
      </button>
    </div>
  );
};

export default ServicesGrid;