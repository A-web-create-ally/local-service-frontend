const SearchHero = ({
  searchQuery,
  setSearchQuery,
  location,
  servicesCount
}) => (

  <div className="search-hero mb-5 p-4 rounded-4">

    <div className="row align-items-center g-3">

      <div className="col-lg-8">

        <div className="d-flex gap-2">

          <div className="flex-grow-1">

            <div className="input-group input-group-lg">

              <span className="input-group-text bg-transparent border-0 text-white">
                <i className="fa fa-search"></i>
              </span>

              <input
                type="text"
                className="form-control bg-white border-0 shadow-sm py-3 px-4"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
              />

            </div>

          </div>

        </div>

      </div>

      <div className="col-lg-4 text-center text-lg-end">

        <div className="small opacity-75">

          <i className="fa fa-map-marker-alt me-1"></i>

          {location}

        </div>

        <div className="h5 fw-bold mt-1 mb-0">
          {servicesCount} Services
        </div>

      </div>

    </div>

  </div>
);

export default SearchHero;