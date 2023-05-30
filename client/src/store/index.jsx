import loadingSlice from "./slice/loading.slice";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice";

export default configureStore({
  reducer: {
    loading: loadingSlice,
    user: userSlice,
  },
});
