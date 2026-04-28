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

const ServicesDetails = () => {
  const navigate = useNavigate();
  const { allServices, cityOptions, categories } = useServicesData();

  // State Management
  const [searchQuery, setSearchQuery] = useState("");
  const [price, setPrice] = useState(2500);
  const [category, setCategory] = useState("All Categories");
  const [location, setLocation] = useState("All Cities");
  const [ratingFilters, setRatingFilters] = useState({
    rating5: true,
    rating4: true,
    rating3: false,
  });
  const [availabilityFilters, setAvailabilityFilters] = useState({
    today: true,
    week: false,
  });
  const [sortBy, setSortBy] = useState("Recommended");
  const [loading, setLoading] = useState(false);

  // Filter Logic
  const filteredServices = useServicesData().applyFilters({
    allServices,
    searchQuery,
    price,
    category,
    location,
    ratingFilters,
    availabilityFilters,
    sortBy
  });

  const clearFilters = () => {
    setSearchQuery("");
    setLocation("All Cities");
    setCategory("All Categories");
    setPrice(2500);
    setRatingFilters({ rating5: true, rating4: true, rating3: false });
    setAvailabilityFilters({ today: true, week: false });
    setSortBy("Recommended");
  };

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 300);
  };

  return (
    <>
      <Header />
      <Hero/>
      
      <div className="container py-5">
        <div className="mb-4">
          <button 
            className="btn btn-outline-secondary"
            onClick={() => navigate('/')}
          >
            <i className="fa fa-arrow-left me-2"></i>Back to Home
          </button>
        </div>

        <SearchHero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          location={location}
          servicesCount={filteredServices.length}
        />

        <div className="row g-4">
          <FiltersSidebar
            cityOptions={cityOptions}
            categories={categories}
            price={price}
            category={category}
            location={location}
            ratingFilters={ratingFilters}
            availabilityFilters={availabilityFilters}
            sortBy={sortBy}
            servicesCount={filteredServices.length}
            onPriceChange={setPrice}
            onCategoryChange={setCategory}
            onLocationChange={setLocation}
            onRatingChange={setRatingFilters}
            onAvailabilityChange={setAvailabilityFilters}
            onSortChange={setSortBy}
            onClearFilters={clearFilters}
          />

          <div className="col-lg-9">
            <ServicesHeader
              searchQuery={searchQuery}
              location={location}
              servicesCount={filteredServices.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            <ServicesGrid
              services={filteredServices}
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