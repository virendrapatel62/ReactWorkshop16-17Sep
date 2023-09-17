import axios from "axios";

const api = axios.create({});

api.interceptors.request.use((config) => {
  console.log(config.url);
  config.headers.Authorization = localStorage.getItem("token");
  return config;
});
api.interceptors.response.use((config) => {
  console.log("On Response");
  return config;
});

export { api };
