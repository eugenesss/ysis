import axios from "axios";

const api = axios.create({
  //  baseURL: "http://localhost:5000/",
  baseURL: "http://178.128.84.254:8000/",
  timeout: 8000
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem("ysis_token");
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
});

export default api;
