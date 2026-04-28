const SearchHero = ({ searchQuery, setSearchQuery, onSearch, location, servicesCount }) => (
  <div className="search-hero mb-5 p-4 rounded-4">
    <div className="row align-items-center g-3">
      <div className="col-lg-8">
        <form onSubmit={(e) => { e.preventDefault(); onSearch(); }} className="d-flex gap-2">
          <div className="flex-grow-1">
            <div className="input-group input-group-lg">
              <span className="input-group-text bg-transparent border-0 text-white">
                <i className="fa fa-search"></i>
              </span>
              <input 
                type="text"
                className="form-control bg-white border-0 shadow-sm py-3 px-4"
                placeholder="Search for plumber, electrician, cleaning, AC repair..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <button 
            type="submit" 
            className="btn btn-light btn-lg px-5 fw-bold"
          >
            <i className="fa fa-search me-2"></i>Search
          </button>
        </form>
      </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div className="small opacity-75">
          <i className="fa fa-map-marker-alt me-1"></i>
          {location !== "All Cities" ? location : "All Cities"}
        </div>
        <div className="h5 fw-bold mt-1 mb-0">{servicesCount} Services</div>
      </div>
    </div>
  </div>
);

export default SearchHero;