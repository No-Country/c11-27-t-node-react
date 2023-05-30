import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const generateItinerary = createAsyncThunk(
  "itinerary/generate",
  async (itineraryData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/search",
        itineraryData,
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState: {
    itinerary: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(generateItinerary.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.itinerary = action.payload.data;
      })
      .addCase(generateItinerary.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default itinerarySlice.reducer;
