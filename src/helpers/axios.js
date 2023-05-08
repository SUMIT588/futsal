import axios from "axios";
import httpConfig from "../common/httpconfig/http_config";

const BASE_URL = httpConfig.BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (req) => {
    const user = JSON.parse(localStorage.getItem("auth"));
    if (user && user.accessToken) {
      const { accessToken } = user;
      req.headers.Authorization = `Bearer ${accessToken}`;
    }
    return req;
  },
  (error) => Promise.reject(error)
);
