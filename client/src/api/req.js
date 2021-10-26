import axios from "axios";

const baseURL = `${import.meta.env.VITE_SERVER_BASE_URL}/api`;

const r = axios.create({
  baseURL,
  timeout: 1000,

  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 添加响应拦截器
r.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

export default r;
