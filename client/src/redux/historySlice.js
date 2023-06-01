import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const dotenv = require("dotenv");

dotenv.config({
  path: "../../.env",
});

export const fetchHistory = createAsyncThunk(
  "history/fetch",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/record`,
        {
          _id: userId,
        },
      );
      return response.data;
    } catch (err) {
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
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.history = action.payload.data;
      })
      .addCase(fetchHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default historySlice.reducer;
