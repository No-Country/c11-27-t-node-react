import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
