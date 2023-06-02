import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import itineraryReducer from "./slices/itinerarySlice";
import historyReducer from "./slices/historySlice";
import loadingReducer from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    itinerary: itineraryReducer,
    history: historyReducer,
    loading: loadingReducer,
  },
});
