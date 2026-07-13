import { useState } from "react";
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
  setRating,
  setAvailable,
  clearFilters,
} from "../features/service/serviceslice";

// const [page,setPage] = useState(1);
const ServicesDetails = () => {

  const [page,setPage] = useState(1);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // REDUX STATE
  const {
        data,
        totalServices,
        loading,
        error,
        filters,
        currentPage,
        totalPages,
      } = useSelector((state) => state.services);

  // FETCH SERVICES
  useEffect(() => {
    dispatch(
        fetchServices({
            page,
            limit: 5,
            ...filters,
        })
    );
}, [dispatch, page, filters]);
    //   useEffect(()=>{

    // dispatch(fetchServices({
    // page,
    // limit:5,
    // }));

    // },[dispatch,page]);
  // useEffect(() => {

  //   dispatch(fetchServices());

  // }, [dispatch]);

  // APPLY FILTERS
  // useEffect(() => {

  //   dispatch(applyFilters());

  // }, [filters, data, dispatch]);

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

      {/* <Hero /> */}

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
          servicesCount={totalServices}
        />

        <div className="row g-4">

          {/* SIDEBAR */}
          <FiltersSidebar

            categories={categories}

            price={filters.maxPrice}

            category={filters.category}

            location="All Cities"

            rating={filters.rating}
            
            available={filters.available}

            servicesCount={data.length}

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
              dispatch(setRating(value))
            }

            onAvailabilityChange={(value) =>
             dispatch(setAvailable(value))
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

              servicesCount={data.length}

              sortBy={filters.sortBy}

              onSortChange={(value) =>
                dispatch(setSortBy(value))
              }
            />

            <ServicesGrid
              services={data}
              loading={loading}
              searchQuery={filters.search}
              onClearFilters={() => dispatch(clearFilters())}
              currentPage={currentPage}
              totalPages={totalPages}
              onPrevious={() => setPage((prev) => prev - 1)}
              onNext={() => setPage((prev) => prev + 1)}
              onPageChange={(pageNumber) => setPage(pageNumber)}
            />

            {/* <div className="d-flex justify-content-center mt-4">

            <button
            className="btn btn-outline-primary me-2"
            disabled={currentPage===1}
            onClick={()=>setPage(page-1)}
            >
            Previous
            </button>

            <span className="align-self-center">

            Page {currentPage} of {totalPages}

            </span>

            <button
            className="btn btn-outline-primary ms-2"
            disabled={currentPage===totalPages}
            onClick={()=>setPage(page+1)}
            >
            Next
            </button>

            </div> */}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default ServicesDetails;

