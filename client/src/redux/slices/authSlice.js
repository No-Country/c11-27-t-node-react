import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import { setLoading } from "./loadingSlice";

const storedToken = localStorage.getItem("authToken");

const initialState = {
  isAuthenticated: storedToken ? true : false,
  token: storedToken,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.post("/api/v1/login", userData);
      dispatch(setLoading(false));
      return response.data;
    } catch (err) {
      dispatch(setLoading(false));
      return rejectWithValue(err.response.data);
    }
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: null,
    iduser: null,
  },
  reducers: {
    logout: state => {
      state.isAuthenticated = false;
      state.token = null;
      state.iduser = null;
      localStorage.removeItem("authToken");
      localStorage.removeItem("iduser");
    },
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.iduser = action.payload.iduser;
      localStorage.setItem("authToken", action.payload.token);
      localStorage.setItem("iduser", action.payload.iduser);
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
