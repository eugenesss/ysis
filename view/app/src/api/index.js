import axios from "axios";

console.log(process.env.NODE_ENV);
const api = axios.create({
<<<<<<< HEAD
//  baseURL: "http://178.128.84.254:8000/",
  baseURL: "http://localhost:5000/",
=======
  // baseURL:
  //   process.env.NODE_ENV === "production"
  //     ? "http://178.128.84.254:8000/"
  //     : "http://localhost:5000/",
  //baseURL: "http://localhost:5000/",
  baseURL: "http://178.128.84.254:8000/",
>>>>>>> f7fe65f391221ea785bf91ed13870b6717b09aaf
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
