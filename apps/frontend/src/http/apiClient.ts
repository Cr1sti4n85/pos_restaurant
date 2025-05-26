import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios";
import queryClient from "../config/queryClient";

const options: CreateAxiosDefaults = {
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

//creation of new axios instance in order to avoid loops
const TokenRefreshClient: AxiosInstance = axios.create(options);
TokenRefreshClient.interceptors.response.use((response) => response);

const API: AxiosInstance = axios.create(options);

API.interceptors.response.use(
  (response) => response, //in case of success we return response.data
  async (error: AxiosError) => {
    const { config, response } = error;
    if (!response) return Promise.reject(error);
    console.log(error);

    const { data, status } = response as AxiosResponse; //Error response from api
    //try to refresh access token
    if (status === 401 && data?.message === "invalid_access_token") {
      try {
        await TokenRefreshClient.get("/auth/refresh");
        if (config) {
          return TokenRefreshClient(config);
        }
      } catch {
        queryClient.clear();
        // redirect to login page
        window.location.href = "/inicio";
      }
    }

    return Promise.reject({ status, ...data });
  }
);

export default API;
