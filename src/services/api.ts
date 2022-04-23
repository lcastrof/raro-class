import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create();

api.defaults.baseURL = 'https://3.221.159.196:3320';

api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const authorization = localStorage.getItem('access_token');
    if (authorization && config.headers) {
      config.headers['Authorization'] = `bearer ${authorization}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
