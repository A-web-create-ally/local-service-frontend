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

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/forgot-password`,
        {
          email,
        }
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/verifyOtp`,
        data
      );

      return res.data;

    } catch (error) {

      return rejectWithValue(
        error.response?.data?.message || "OTP verification failed"
      );

    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data, { rejectWithValue }) => {
    try {

      const res = await axios.post(
        `${API_URL}/user/reset-password`,
        data
      );

      return res.data;

    } catch (error) {

      return rejectWithValue(
        error.response?.data?.message || "Password reset failed"
      );

    }
  }
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { rejectWithValue, getState }) => {
    try {

      const token = getState().auth.token;

      const res = await axios.post(
        `${API_URL}/user/getProfile`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data.user;

    } catch (error) {

      return rejectWithValue(
        error.response?.data?.message || "Failed to load profile"
      );

    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (profileData, { rejectWithValue }) => {
    try {

      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${API_URL}/user/updateProfile`,
        profileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Profile update failed"
      );
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (passwordData, { rejectWithValue }) => {
    try {

      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${API_URL}/user/change-password`,
        passwordData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;

    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Password change failed"
      );
    }
  }
);

export const deleteMyAccount = createAsyncThunk(
  "auth/deleteMyAccount",

  async (_, { rejectWithValue }) => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${API_URL}/user/deleteMyAccount`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;

    } catch (error) {

      return rejectWithValue(
        error.response?.data?.message || "Delete account failed"
      );

    }

  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/registerUser`,
        userData
      );

      return res.data;

    } catch (error) {

      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
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
      })

      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(resetPassword.pending, (state) => {
          state.loading = true;
          state.error = null;
      })

      .addCase(resetPassword.fulfilled, (state) => {
          state.loading = false;
      })

      .addCase(resetPassword.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
      })

      .addCase(getProfile.pending, (state) => {
          state.loading = true;
      })

      .addCase(getProfile.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          localStorage.setItem(
            "user",
            JSON.stringify(action.payload)
          );
      })

      .addCase(getProfile.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
      })

      .addCase(updateProfile.fulfilled, (state, action) => {
          state.user = action.payload.user;
      })

      .addCase(deleteMyAccount.fulfilled, (state) => {
          state.user = null;
          state.token = null;
          state.isAuthenticated = false;
      })

      .addCase(registerUser.pending, (state) => {
          state.loading = true;
          state.error = null;
      })

      .addCase(registerUser.fulfilled, (state) => {
          state.loading = false;
      })

      .addCase(registerUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
      });

  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;