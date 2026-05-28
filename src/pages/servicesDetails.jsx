import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../pages/hero";

import useServicesData from "../hooks/useServicesData";
import SearchHero from "../components/service/SearchHero";
import FiltersSidebar from "../components/service/FiltersSidebar";
import ServicesGrid from "../components/service/ServicesGrid";
import ServicesHeader from "../components/service/ServicesHeader";
import { fetchServices } from "../features/service/serviceslice";

const ServicesDetails = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 👉 Redux State
  const {
    data: servicesData,
    loading,
    error,
  } = useSelector((state) => state.services);
  console.log(servicesData);

  // 👉 API Call
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  // 👉 Backend Data Compatible For UI
  const allServices = (servicesData || []).map((item) => ({
    ...item,
    id: item._id,
  }));

  // 👉 Filter Helper
 // const { applyFilters } = useServicesData();

  // 👉 Dynamic Cities
  // const cityOptions = [
  //   "All Cities",
  //   ...new Set(allServices.map((service) => service.location)),
  // ];

  // 👉 Dynamic Categories
  const categories = [
    "All Categories",
    ...new Set(allServices.map((service) => service.category)),
  ];

  // 👉 State Management
  const [searchQuery, setSearchQuery] = useState("");

  const [price, setPrice] = useState(9000);

  const [debouncedPrice, setDebouncedPrice] = useState(9000);

  const [category, setCategory] = useState("All");

  const [location, setLocation] = useState("All Cities");
  const [ratingFilters, setRatingFilters] = useState({
    rating5: false,
    rating4: false,
    rating3: false,
  });
  const [availabilityFilters, setAvailabilityFilters] = useState({
    today: false,
    week: false,
  });
  const [sortBy, setSortBy] = useState("Recommended");
  const [loading, setLoading] = useState(false);

  // 👉 Filter Logic
  // const filteredServices = applyFilters({
  //   allServices,
  //   searchQuery,
  //   price,
  //   category,
  //   location,
  //   ratingFilters,
  //   availabilityFilters,
  //   sortBy,
  // });

  // 👉 Clear Filters
  const clearFilters = () => {

    setSearchQuery("");
   // setLocation("All Cities");
    setCategory("All Categories");
    setPrice(2500);

    setRatingFilters({
      rating5: true,
      rating4: true,
      rating3: false,
    });

    setAvailabilityFilters({
      today: true,
      week: false,
    });

    setSortBy("Recommended");
  };

  // 👉 Search
  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 300);
  };

  return (
    <>
      <Header />
      <Hero />

      <div className="container py-5">
        {error && (
  <div className="alert alert-danger">
    {error}
  </div>
)}
        <div className="mb-4">
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate('/')}
          >
            <i className="fa fa-arrow-left me-2"></i>
            Back to Home
          </button>

        </div>

        <SearchHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          location={location}
         // servicesCount={filteredServices.length}
        />

        <div className="row g-4">

          {/* SIDEBAR */}
          <FiltersSidebar
            //cityOptions={cityOptions}
            categories={categories}

            price={price}

            category={category}

            location={location}

            ratingFilters={ratingFilters}

            availabilityFilters={availabilityFilters}

            sortBy={sortBy}
           // servicesCount={filteredServices.length}
            onPriceChange={setPrice}

            onCategoryChange={setCategory}

            onLocationChange={setLocation}

            onRatingChange={setRatingFilters}

            onAvailabilityChange={setAvailabilityFilters}

            onSortChange={setSortBy}

            onClearFilters={clearFilters}
          />

          {/* SERVICES */}
          <div className="col-lg-9">

            <ServicesHeader
              searchQuery={searchQuery}

              location={location}
             // servicesCount={filteredServices.length}
              sortBy={sortBy}

              onSortChange={setSortBy}
            />

            <ServicesGrid
             // services={filteredServices}
              services={allServices}
              loading={loading}

              searchQuery={searchQuery}

              onClearFilters={clearFilters}

              navigate={navigate}
            />

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default ServicesDetails;