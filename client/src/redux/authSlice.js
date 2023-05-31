import { createSlice } from "@reduxjs/toolkit";

const storedToken = localStorage.getItem("authToken");

const initialState = {
  isAuthenticated: storedToken ? true : false,
  token: storedToken,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      localStorage.setItem("authToken", action.payload.token);
    },
    logout: state => {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("authToken");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
