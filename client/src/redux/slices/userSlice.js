import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import { setLoading } from "./loadingSlice";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.post("/api/v1", userData);
      dispatch(setLoading(false));
      return response.data;
    } catch (err) {
      dispatch(setLoading(false));
      return rejectWithValue(err.response.data);
    }
  },
);

export const updateUserPassword = createAsyncThunk(
  "user/updateUserPassword",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.put("/api/v1/reset", userData);
      dispatch(setLoading(false));
      return response.data;
    } catch (err) {
      dispatch(setLoading(false));
      return rejectWithValue(err.response.data);
    }
  },
);

export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.put("/api/v1/renew", userData);
      dispatch(setLoading(false));
      return response.data;
    } catch (err) {
      dispatch(setLoading(false));
      return rejectWithValue(err.response.data);
    }
  },
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.delete("/api/v1/", {
        data: userData,
      });
      dispatch(setLoading(false));
      return response.data;
    } catch (err) {
      dispatch(setLoading(false));
      return rejectWithValue(err.response.data);
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
