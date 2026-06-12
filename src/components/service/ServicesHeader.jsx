const ServicesHeader = ({
  searchQuery,
  location,
  servicesCount,
  sortBy,
  onSortChange
}) => (

  <div className="d-flex align-items-center justify-content-between mb-4">

    <div>

      <h3 className="fw-bold mb-1">

        {searchQuery
          ? `"${searchQuery}"`
          : "All Services"}

      </h3>

      <p className="text-muted mb-0">

        {servicesCount} services found in {location}

      </p>

    </div>

    <div className="d-flex gap-2">

      <select
        className="form-select form-input-custom"
        style={{ width: 'auto' }}
        value={sortBy}
        onChange={(e) =>
          onSortChange(e.target.value)
        }
      >

        <option value="Recommended">
          Recommended
        </option>

        <option value="Price: Low to High">
          Price: Low to High
        </option>

        <option value="Price: High to Low">
          Price: High to Low
        </option>

      </select>

    </div>

  </div>
);

export default ServicesHeader;