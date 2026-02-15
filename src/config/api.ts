import axios from "axios";
import { AUTH_KEY, TOKEN_KEY } from "../services/auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401) {
      console.warn("Unauthorized, redirecting to login...");

      localStorage.removeItem(AUTH_KEY);
       localStorage.removeItem(TOKEN_KEY);

      window.location.href = "/login";
    }

    if (error.response?.status === 500) {
      console.error("Server error", originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;
