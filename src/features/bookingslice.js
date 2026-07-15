import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const createBooking = createAsyncThunk(
  "booking/createBooking",
  async (bookingData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      const res = await axios.post(
        `${API_URL}/booking/createBooking`,
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Booking failed"
      );
    }
  }
);

// GET MY BOOKINGS
export const getMyBookings = createAsyncThunk(
  "booking/getMyBookings",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      const res = await axios.post(
        `${API_URL}/booking/getBooking`,
        {
          page: 1,
          limit: 5,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch bookings"
      );
    }
  }
);

const bookingSlice = createSlice({

  name: "booking",

  initialState: {

    bookings: [],

    loading: false,

    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      // PENDING
      .addCase(getMyBookings.pending, (state) => {

        state.loading = true;
      })

      // SUCCESS
      .addCase(getMyBookings.fulfilled, (state, action) => {

        state.loading = false;

        state.bookings = action.payload.bookings;
      })

      // FAILED
      .addCase(getMyBookings.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;
      })
    
      // ================= CREATE BOOKING =================

    .addCase(createBooking.pending, (state) => {
      state.loading = true;
    })

    .addCase(createBooking.fulfilled, (state) => {
      state.loading = false;
    })

    .addCase(createBooking.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default bookingSlice.reducer;