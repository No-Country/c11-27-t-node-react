import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import { setLoading } from "./loadingSlice";

export const generateItinerary = createAsyncThunk(
  "itinerary/generate",
  async (itineraryData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.post(
        "/api/v1/search",
        itineraryData,
      );
      dispatch(setLoading(false));
      return response.data;
    } catch (err) {
      dispatch(setLoading(false));
      return rejectWithValue(err.response.data);
    }
  },
);

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState: {
    id: null,
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(generateItinerary.pending, state => {
        state.status = "loading";
      })
      .addCase(generateItinerary.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.id = action.payload.ID;
        state.data = action.payload.data.search;
      })
      .addCase(generateItinerary.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default itinerarySlice.reducer;
