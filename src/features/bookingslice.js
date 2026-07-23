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

// Reschedule Booking
export const rescheduleBooking = createAsyncThunk(
  "booking/rescheduleBooking",

  async ({ bookingId, bookingData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const res = await axios.put(

        `${API_URL}/booking/rescheduleBooking/${bookingId}`,
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
        error.response?.data?.message || "Failed to reschedule booking"
      );

    }
  }
);

// GET MY BOOKINGS
export const getMyBookings = createAsyncThunk(
  "booking/getMyBooking",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const res = await axios.post(
        `${API_URL}/booking/getMyBooking`,
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

//cancelBooking
export const cancelBooking = createAsyncThunk(
  "booking/cancelBooking",
  async (bookingId, thunkAPI) => {
    try {

      const token = thunkAPI.getState().auth.token;

      const res = await axios.put(
        `${API_URL}/booking/cancelBooking/${bookingId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data.booking;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Cancel failed"
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
    })
    //Reshedule booking
    .addCase(rescheduleBooking.pending, (state) => {
        state.loading = true;
    })
    .addCase(rescheduleBooking.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBooking = action.payload.booking;
        state.bookings = state.bookings.map((booking) =>
            booking._id === updatedBooking._id
                ? {
                      ...booking,
                      bookingDate: updatedBooking.bookingDate,
                      bookingTime: updatedBooking.bookingTime,
                      address: updatedBooking.address,
                  }
                : booking
        );
    })
    .addCase(rescheduleBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    //cancel booking
    .addCase(cancelBooking.fulfilled, (state, action) => {
    state.loading = false;
    const index = state.bookings.findIndex(
        booking => booking._id === action.payload._id
    );

    if(index !== -1){
        state.bookings[index] = action.payload;
    }
    })

    .addCase(cancelBooking.pending, (state)=>{
        state.loading = true;
    })

    .addCase(cancelBooking.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    });
      },
});

export default bookingSlice.reducer;