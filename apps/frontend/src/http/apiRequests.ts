import { AxiosResponse } from "axios";
import API from "./apiClient";
import { ILoginEmployee, IRegisterEmployee } from "../types";

//employee Requests

export const login = async (data: ILoginEmployee): Promise<AxiosResponse> =>
  API.post<ILoginEmployee>("/auth/login", data);

export const register = async (
  data: IRegisterEmployee
): Promise<AxiosResponse> => API.post<IRegisterEmployee>("/users", data);

export const getUserData = async (): Promise<IRegisterEmployee> => {
  const response = await API.get<IRegisterEmployee>("/users/profile");
  return response.data;
};

export const logout = async (): Promise<void> => API.get("/auth/logout");
