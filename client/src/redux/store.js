import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import itineraryReducer from "./itinerarySlice";
import historyReducer from "./historySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    itinerary: itineraryReducer,
    history: historyReducer,
  },
});
