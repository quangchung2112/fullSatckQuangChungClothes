import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8088",
  headers: {
    "Content-Type": "application/json",
    // Thêm các header khác nếu cần
  },
});
axiosInstance.defaults.withCredentials = true;
axiosInstance.interceptors.request.use(function (config) {
  const token = Cookies.get("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default axiosInstance;
