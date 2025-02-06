import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    avatar: "",
    dateOfBirth: "",
    role: "",
    avatar: "",
    is_verified: false,
    watchList: [],
    preferences: [],
    likedVideos: [],
    lastLogin: "",
    role: null,
  },
  loading: false,
  error: null,
  token: null,
  tokenExpiration: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login
    login: (state, action) => {
      state.loading = true;
      state.error = null;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.tokenExpiration = action.payload.tokenExpiration;
      state.loading = false;
    },

    // Logout
    logout: () => initialState,

    // Set Auth Error
    setAuthError: (state, action) => {
      state.error = action.payload;
    },

    // Update Profile
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },

    // Set Loading
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { login, logout, setAuthError, setLoading, updateProfile } =
  authSlice.actions;

export default authSlice.reducer;
