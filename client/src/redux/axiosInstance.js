import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  },
);

export default axiosInstance;
