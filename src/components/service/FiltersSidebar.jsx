
const FiltersSidebar = ({
  categories,
  price,
  category,
  location,
  rating,
  available,
  servicesCount,
  onPriceChange,
  onCategoryChange,
  onLocationChange,
  onRatingChange,
  onAvailabilityChange,
  onSortChange,
  onClearFilters
}) => {


  return (

    <div className="col-lg-3">

      <div className="filter-panel sticky-top">

        <div className="filter-title mb-4">

          <i className="fa fa-sliders me-2"></i>

          Filters

        </div>

        {/* CATEGORY */}
        <div className="filter-section mb-4">

          <label className="form-label fw-bold small mb-2">
            Category
          </label>

          <select
            className="form-select form-input-custom"
            value={category}
            onChange={(e) =>
              onCategoryChange(e.target.value)
            }
          >

            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}

          </select>

        </div>

        {/* PRICE */}
        <div className="filter-section mb-4">

          <label className="form-label fw-bold small mb-2">
            Price Range
          </label>

          <input
            type="range"
            className="form-range range-slider"
            min="100"
            max="9000"
            value={price}
            onChange={(e) =>
              onPriceChange(Number(e.target.value))
            }
          />

          <div className="d-flex justify-content-between small text-muted mt-2">

            <span>₹100</span>

            <span className="fw-bold">
              ₹{price}
            </span>

            <span>₹9000</span>

          </div>

        </div>

        {/* RATING */}
        <div className="filter-section mb-4">

          <label className="form-label fw-bold small mb-3">
            Rating
          </label>

          <div className="filter-check">

            <div className="form-check">

              <input
                  type="radio"
                  checked={rating === 5}
                  onChange={() => onRatingChange(5)}
              />
              <label
                className="form-check-label small"
                htmlFor="rating5"
              >
                5 Stars ★★★★★
              </label>

            </div>

            <div className="form-check">

              <input
                type="radio"
                checked={rating === 4}
                onChange={() => onRatingChange(4)}
              />

              <label
                className="form-check-label small"
                htmlFor="rating4"
              >
                4+ Stars ★★★★☆
              </label>

            </div>

            <div className="form-check">

              <input
                  type="radio"
                  checked={rating === 3}
                  onChange={() => onRatingChange(3)}
              />

              <label
                className="form-check-label small"
                htmlFor="rating3"
              >
                3+ Stars ★★★☆☆
              </label>

            </div>

          </div>

        </div>

        {/* AVAILABILITY */}
        <div className="filter-section mb-4">

          <label className="form-label fw-bold small mb-3">
            Availability
          </label>

          <div className="filter-check">

            <div className="form-check">

              <input
                className="form-check-input"
                type="checkbox"
                id="today"
                checked={available}
                onChange={(e)=>
                onAvailabilityChange(e.target.checked)
                }
              />

              <label
                className="form-check-label small"
                htmlFor="today"
              >
                Available Today
              </label>

            </div>

            {/* <div className="form-check">

              <input
                className="form-check-input"
                type="checkbox"
                id="week"
                checked={availabilityFilters?.week}
                onChange={() =>
                  handleAvailabilityChange("week")
                }
              />

              <label
                className="form-check-label small"
                htmlFor="week"
              >
                This Week
              </label>

            </div> */}

          </div>

        </div>

        {/* BUTTONS */}
        <div className="filter-section">

          <button
            className="btn btn-outline-secondary w-100 mb-2"
            onClick={onClearFilters}
          >
            <i className="fa fa-trash me-2"></i>
            Clear All
          </button>

        </div>

      </div>

    </div>
  );
};

export default FiltersSidebar;
