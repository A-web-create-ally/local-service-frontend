
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// ================= FETCH SERVICES =================
export const fetchServices = createAsyncThunk(
  "services/fetchServices",

  async (filters = {}, thunkAPI) => {
    try {

      const res = await axios.post(
        `${API_URL}/service/getAllServices`,
        {
          page: filters.page || 1,
          limit: filters.limit || 20,
        }
      );

      return res.data.services;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch services"
      );

    }
  }
);

// ================= SLICE =================
const serviceSlice = createSlice({
  name: "services",

  initialState: {
    data: [],
    filteredServices: [],
    loading: false,
    error: null,

    filters: {
      search: "",
      category: "All",
      maxPrice: 9000,
      sortBy: "Recommended",

      ratingFilters: {
        rating5: false,
        rating4: false,
        rating3: false,
      },

      availabilityFilters: {
        today: false,
        week: false,
      },
    },
  },

  reducers: {

    // SEARCH
    setSearch: (state, action) => {
      state.filters.search = action.payload;
    },

    // CATEGORY
    setCategory: (state, action) => {
      state.filters.category = action.payload;
    },

    // PRICE
    setMaxPrice: (state, action) => {
      state.filters.maxPrice = action.payload;
    },

    // SORT
    setSortBy: (state, action) => {
      state.filters.sortBy = action.payload;
    },

    // RATING
    setRatingFilters: (state, action) => {
      state.filters.ratingFilters = action.payload;
    },

    // AVAILABILITY
    setAvailabilityFilters: (state, action) => {
      state.filters.availabilityFilters = action.payload;
    },

    // CLEAR FILTERS
    clearFilters: (state) => {

      state.filters = {

        search: "",
        category: "All",
        maxPrice: 9000,
        sortBy: "Recommended",

        ratingFilters: {
          rating5: false,
          rating4: false,
          rating3: false,
        },

        availabilityFilters: {
          today: false,
          week: false,
        },
      };

      state.filteredServices = state.data;
    },

    // APPLY FILTERS
    applyFilters: (state) => {

      let filtered = [...state.data];

      // SEARCH
      if (state.filters.search) {

        filtered = filtered.filter((service) =>
          service.title
            ?.toLowerCase()
            .includes(state.filters.search.toLowerCase())
        );
      }

      // CATEGORY
      if (state.filters.category !== "All") {

        filtered = filtered.filter(
          (service) =>
            service.category === state.filters.category
        );
      }

      // PRICE
      filtered = filtered.filter(
        (service) =>
          Number(service.price) <= state.filters.maxPrice
      );

      // RATING
      const {
        rating5,
        rating4,
        rating3,
      } = state.filters.ratingFilters;

      if (rating5 || rating4 || rating3) {

        filtered = filtered.filter((service) => {

          const rating = Number(service.rating || 0);

          if (rating5 && rating >= 5) {
            return true;
          }

          if (rating4 && rating >= 4) {
            return true;
          }

          if (rating3 && rating >= 3) {
            return true;
          }

          return false;
        });
      }

      // AVAILABILITY
      const {
        today,
        week,
      } = state.filters.availabilityFilters;

      if (today || week) {

        filtered = filtered.filter((service) => {

          if (today && service.availableToday) {
            return true;
          }

          if (week && service.availableThisWeek) {
            return true;
          }

          return false;
        });
      }

      // SORTING
      if (state.filters.sortBy === "Price: Low to High") {

        filtered.sort((a, b) => a.price - b.price);
      }

      if (state.filters.sortBy === "Price: High to Low") {

        filtered.sort((a, b) => b.price - a.price);
      }

      state.filteredServices = filtered;
    },
  },

  extraReducers: (builder) => {

    builder

      // PENDING
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // SUCCESS
      .addCase(fetchServices.fulfilled, (state, action) => {

        state.loading = false;

        state.data = action.payload;

        state.filteredServices = action.payload;
      })

      // ERROR
      .addCase(fetchServices.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;
      });

  },
});

export const {
  setSearch,
  setCategory,
  setMaxPrice,
  setSortBy,
  setRatingFilters,
  setAvailabilityFilters,
  clearFilters,
  applyFilters,
} = serviceSlice.actions;

export default serviceSlice.reducer;

