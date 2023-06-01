import axios from "axios";
import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
});

const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_URL,
});

export default axiosInstance;
