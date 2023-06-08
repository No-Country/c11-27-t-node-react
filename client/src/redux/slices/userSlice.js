import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import { setLoading } from "./loadingSlice";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.post("/api/v1/register", userData);
      dispatch(setLoading(false));
      return response.data;
    } catch (err) {
      dispatch(setLoading(false));
      return rejectWithValue(err.response.data);
    }
  },
);

export const recoverUserPassword = createAsyncThunk(
  "user/recoverUserPassword",
  async (emailData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.post("/api/v1/send", emailData);
      dispatch(setLoading(false));
      return response.data;
    } catch (err) {
      dispatch(setLoading(false));
      return rejectWithValue(err.response.data);
    }
  },
);

export const resetUserPassword = createAsyncThunk(
  "user/resetUserPassword",
  async (resetData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.put("/api/v1/reset", resetData);
      dispatch(setLoading(false));
      return response.data;
    } catch (err) {
      dispatch(setLoading(false));
      return rejectWithValue(err.response.data);
    }
  },
);

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.get("/api/v1/me");
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
      .addCase(recoverUserPassword.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(recoverUserPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(resetUserPassword.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(resetUserPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
      })
      .addCase(getUserData.rejected, (state, action) => {
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
