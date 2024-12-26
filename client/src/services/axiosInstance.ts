import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
