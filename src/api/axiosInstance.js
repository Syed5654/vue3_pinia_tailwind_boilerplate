import axios from 'axios';
import TokenService from '@services/Token.Service';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors
    // Example: Redirect to login on 401 error
    // if (error.response.status === 401) {
    //   // Redirect to login or show an error message
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
