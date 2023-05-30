import { createSlice } from "@reduxjs/toolkit";
import { setLoading } from "./loading.slice";
import axios from "../../utils/axios";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;

      return user;
    },
  },
});
export const getAllUserTunk = () => dispatch => {
  dispatch(setLoading(true));
  axios
    .get("/")
    .then(res => dispatch(setUser(res.data)))
    .finally(() => dispatch(setLoading(false)));
};

export const createUserTunk = data => dispatch => {
  dispatch(setLoading(true));
  axios
    .post("/register", data)
    .then(() => dispatch(getAllUserTunk()))
    .finally(() => dispatch(setLoading(false)));
};
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
