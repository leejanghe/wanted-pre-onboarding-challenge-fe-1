import axios from "axios";
const instance = axios.create({ baseURL: "http://localhost:8080" });

const setToken = (config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers = { Authorization: token };
  return config;
};

instance.interceptors.request.use(setToken);
instance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    throw new Error(error);
  }
);

export default instance;
