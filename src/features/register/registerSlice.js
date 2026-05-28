

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

// ================= REGISTER USER =================
export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${API_URL}/user/registerUser`,
        userData
      );

      return response.data;
    } catch (error) {
        console.log(error.response.data);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

// ================= INITIAL STATE =================
const initialState = {
  loading: false,
  user: null,
  success: false,
  error: null,
};

// ================= SLICE =================
const registerSlice = createSlice({
  name: "register",
  initialState,

  reducers: {
    clearRegisterState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Pending
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Success
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })

      // Failed
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearRegisterState } = registerSlice.actions;

export default registerSlice.reducer;