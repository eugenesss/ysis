import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  //  baseURL: "http://localhost:5000/",
  baseURL: "http://178.128.84.254:8000/",
=======
  baseURL: "http://178.128.84.254:8000/",
  //baseURL: "http://localhost:5000/",
>>>>>>> a2160e339819201a2221dd91a0e6e709a966bb95
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
