import axiosOrigin from "axios";

const axios = axiosOrigin.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default axios;
