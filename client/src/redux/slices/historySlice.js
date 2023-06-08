import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import { setLoading } from "./loadingSlice";

export const getUserHistory = createAsyncThunk(
  "history/fetch",
  async (userid, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.post("/api/v1/record", {
        userid: userid,
      });
      dispatch(setLoading(false));
      return response.data;
    } catch (err) {
      dispatch(setLoading(false));
      return rejectWithValue(err.response.data);
    }
  },
);

const historySlice = createSlice({
  name: "history",
  initialState: {
    history: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserHistory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.history = action.payload.datos;
      })
      .addCase(getUserHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default historySlice.reducer;
