import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/loginUser`,
        userData
      );

      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      return res.data;

    } catch (error) {

      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );

    }
  }
);

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: localStorage.getItem("token") || null,

    user: JSON.parse(
      localStorage.getItem("user")
    ) || null,

    loading: false,
    error: null,
  },

  reducers: {
    logout: (state) => {

      state.user = null;
      state.token = null;

      localStorage.removeItem("token");
      localStorage.removeItem("user");

    },
  },

  extraReducers: (builder) => {

    builder

      .addCase(loginUser.pending, (state) => {

        state.loading = true;
        state.error = null;

      })

      .addCase(loginUser.fulfilled, (state, action) => {

        state.loading = false;

        state.user = action.payload.user;

        state.token = action.payload.token;

      })

      .addCase(loginUser.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      });

  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;