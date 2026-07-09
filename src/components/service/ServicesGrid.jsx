import ServiceCard from "./ServiceCard";

const ServicesGrid = ({
  services,
  loading,
  searchQuery,
  onClearFilters,
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageChange
}) => {

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary"></div>

        <p className="mt-2 text-muted">
          {searchQuery
            ? `Searching for "${searchQuery}"...`
            : "Loading services..."}
        </p>
      </div>
    );
  }

  if (services.length > 0) {
    return (
      <>
        <div className="row g-4">
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              service={service}
            />
          ))}
        </div>

        {/* Pagination */}

        {totalPages > 1 && (
          // <div className="d-flex justify-content-center align-items-center mt-5 gap-3">

          //   <button
          //     className="btn btn-outline-primary"
          //     disabled={currentPage === 1}
          //     onClick={onPrevious}
          //   >
          //     Previous
          //   </button>

          //   <span className="fw-bold">
          //     Page {currentPage} of {totalPages}
          //   </span>

          //   <button
          //     className="btn btn-outline-primary"
          //     disabled={currentPage === totalPages}
          //     onClick={onNext}
          //   >
          //     Next
          //   </button>

          // </div>
              <div className="d-flex justify-content-center align-items-center mt-5 gap-2">

              <button
                className="btn btn-outline-primary"
                disabled={currentPage === 1}
                onClick={onPrevious}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`btn ${
                    currentPage === index + 1
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => onPageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className="btn btn-outline-primary"
                disabled={currentPage === totalPages}
                onClick={onNext}
              >
                Next
              </button>

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
          : "No services found"}
      </h5>

      <p className="text-muted">
        {searchQuery
          ? `Try different keywords`
          : "Try adjusting your filters"}
      </p>

      <button
        className="btn btn-outline-primary"
        onClick={onClearFilters}
      >
        Clear All Filters
      </button>

    </div>
  );
};

export default ServicesGrid;