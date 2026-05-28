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

          category: filters.category || "All",

          maxPrice: filters.maxPrice || 9000,

          rating: filters.rating || 0,

          available: filters.available || false,
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
    loading: false,
    error: null,

    search: "",
    category: "All",
  },

  reducers: {

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

  },

  extraReducers: (builder) => {

    builder

      // Pending
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Success
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      // Error
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});

export const { setSearch, setCategory } = serviceSlice.actions;

export default serviceSlice.reducer;