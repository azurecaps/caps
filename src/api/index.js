import axios from "axios";

const TTP_API_URL = "https://api-b4-learning.azurewebsites.net/api/";

axios.defaults.baseURL = TTP_API_URL;
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.interceptors.request.use(config => {
  // TODO add token, handle request cancellation ...
  return config;
});

export * from "./auth";
export * from "./data";
