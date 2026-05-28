const FiltersSidebar = ({
  cityOptions,
  categories,
  price,
  category,
  location,
  ratingFilters,
  availabilityFilters,
  servicesCount,
  onPriceChange,
  onCategoryChange,
  onLocationChange,
  onRatingChange,
  onAvailabilityChange,
  onSortChange,
  onClearFilters
}) => {
  const handleRatingChange = (rating) => {
    onRatingChange(prev => ({
      ...prev,
      [rating]: !prev[rating]
    }));
  };

  const handleAvailabilityChange = (availability) => {
    onAvailabilityChange(prev => ({
      ...prev,
      [availability]: !prev[availability]
    }));
  };

  return (
    <div className="col-lg-3">
      <div className="filter-panel sticky-top">
        <div className="filter-title mb-4">
          <i className="fa fa-sliders me-2" ></i>
          Filters
        </div>

        {/* Location Filter */}
        <div className="filter-section mb-4">
          <label className="form-label fw-bold small mb-2">
            <i className="fa fa-map-marker-alt me-1 text-info"></i>
            Location
          </label>
          <select 
            className="form-select form-input-custom"
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
          >
            {cityOptions.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className="filter-section mb-4">
          <label className="form-label fw-bold small mb-2">Category</label>
          <select 
            className="form-select form-input-custom"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="filter-section mb-4">
          <label className="form-label fw-bold small mb-2">Price Range</label>
          <input 
            type="range" 
            className="form-range range-slider"
            min="100" 
            max="9000" 
            value={price}
            onChange={(e) => onPriceChange(Number(e.target.value))}
          />
          <div className="d-flex justify-content-between small text-muted mt-2">
            <span>₹100</span>
            <span className="fw-bold" >
              ₹{price}
            </span>
            <span>₹9000</span>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="filter-section mb-4">
          <label className="form-label fw-bold small mb-3">Rating</label>
          <div className="filter-check">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="rating5"
                checked={ratingFilters.rating5}
                onChange={() => handleRatingChange('rating5')}
              />
              <label className="form-check-label small" htmlFor="rating5">
                5 Stars ★★★★★
              </label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="rating4"
                checked={ratingFilters.rating4}
                onChange={() => handleRatingChange('rating4')}
              />
              <label className="form-check-label small" htmlFor="rating4">
                4+ Stars ★★★★☆
              </label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="rating3"
                checked={ratingFilters.rating3}
                onChange={() => handleRatingChange('rating3')}
              />
              <label className="form-check-label small" htmlFor="rating3">
                3+ Stars ★★★☆☆
              </label>
            </div>
          </div>
        </div>

        {/* Availability Filter */}
        <div className="filter-section mb-4">
          <label className="form-label fw-bold small mb-3">Availability</label>
          <div className="filter-check">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="today"
                checked={availabilityFilters.today}
                onChange={() => handleAvailabilityChange('today')}
              />
              <label className="form-check-label small" htmlFor="today">
                Available Today
              </label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="week"
                checked={availabilityFilters.week}
                onChange={() => handleAvailabilityChange('week')}
              />
              <label className="form-check-label small" htmlFor="week">
                This Week
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="filter-section">
          <button className="btn btn-outline-secondary w-100 mb-2" onClick={onClearFilters}>
            <i className="fa fa-trash me-2"></i>Clear All
          </button>
          <button className="btn btn-primary w-100">
            <i className="fa fa-check me-2"></i>Apply Filters ({servicesCount})
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;