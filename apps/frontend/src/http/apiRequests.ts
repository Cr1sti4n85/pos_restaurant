import { AxiosResponse } from "axios";
import API from "./apiClient";
import { ILoginEmployee, IRegisterEmployee, IUserData } from "../types";

//employee Requests

export const login = async (data: ILoginEmployee): Promise<AxiosResponse> =>
  API.post<ILoginEmployee>("/auth/login", data);

export const register = async (
  data: IRegisterEmployee
): Promise<AxiosResponse> => API.post<IRegisterEmployee>("/users", data);

export const getUserData = async (): Promise<IUserData> => {
  const response = await API.get<IUserData>("/users/profile");
  return response.data;
};

export const logout = async (): Promise<void> => API.get("/auth/logout");
