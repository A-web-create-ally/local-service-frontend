
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../pages/hero";

import SearchHero from "../components/service/SearchHero";
import FiltersSidebar from "../components/service/FiltersSidebar";
import ServicesGrid from "../components/service/ServicesGrid";
import ServicesHeader from "../components/service/ServicesHeader";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchServices,
  setSearch,
  setCategory,
  setMaxPrice,
  setSortBy,
  setRatingFilters,
  setAvailabilityFilters,
  clearFilters,
  applyFilters,
} from "../features/service/serviceslice";

const ServicesDetails = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // REDUX STATE
  const {
    data,
    filteredServices,
    loading,
    error,
    filters,
  } = useSelector((state) => state.services);

  // FETCH SERVICES
  useEffect(() => {

    dispatch(fetchServices());

  }, [dispatch]);

  // APPLY FILTERS
  useEffect(() => {

    dispatch(applyFilters());

  }, [filters, dispatch]);

  // SERVICES
  const allServices = (data || []).map((item) => ({
    ...item,
    id: item._id,
  }));

  // CATEGORIES
  const categories = [
    "All",
    ...new Set(allServices.map((service) => service.category)),
  ];

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

        {/* BACK BUTTON */}
        <div className="mb-4">

          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate('/')}
          >
            <i className="fa fa-arrow-left me-2"></i>
            Back to Home
          </button>

        </div>

        {/* SEARCH HERO */}
        <SearchHero
          searchQuery={filters.search}
          setSearchQuery={(value) =>
            dispatch(setSearch(value))
          }
          location="All Cities"
          servicesCount={filteredServices.length}
        />

        <div className="row g-4">

          {/* SIDEBAR */}
          <FiltersSidebar

            categories={categories}

            price={filters.maxPrice}

            category={filters.category}

            location="All Cities"

            ratingFilters={filters.ratingFilters}

            availabilityFilters={filters.availabilityFilters}

            servicesCount={filteredServices.length}

            onPriceChange={(value) =>
              dispatch(setMaxPrice(value))
            }

            onCategoryChange={(value) =>
              dispatch(setCategory(value))
            }

            onSortChange={(value) =>
              dispatch(setSortBy(value))
            }

            onRatingChange={(value) =>
              dispatch(setRatingFilters(value))
            }

            onAvailabilityChange={(value) =>
              dispatch(setAvailabilityFilters(value))
            }

            onClearFilters={() =>
              dispatch(clearFilters())
            }
          />

          {/* SERVICES */}
          <div className="col-lg-9">

            <ServicesHeader

              searchQuery={filters.search}

              location="All Cities"

              servicesCount={filteredServices.length}

              sortBy={filters.sortBy}

              onSortChange={(value) =>
                dispatch(setSortBy(value))
              }
            />

            <ServicesGrid

              services={filteredServices}

              loading={loading}

              searchQuery={filters.search}

              onClearFilters={() =>
                dispatch(clearFilters())
              }

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

