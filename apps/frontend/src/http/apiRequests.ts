import { AxiosResponse } from "axios";
import API from "./apiClient";
import {
  IAddTableData,
  IAuthUser,
  ILoginEmployee,
  IRegisterEmployee,
  ITableData,
} from "../types";

//employee Requests

export const login = async (data: ILoginEmployee): Promise<AxiosResponse> =>
  API.post<ILoginEmployee>("/auth/login", data);

export const register = async (
  data: IRegisterEmployee
): Promise<AxiosResponse> => API.post<IRegisterEmployee>("/users", data);

export const getUserData = async (): Promise<IAuthUser> => {
  const response = await API.get<IAuthUser>("/users/profile");
  return response.data;
};

export const logout = async (): Promise<void> => API.get("/auth/logout");

//Table requests

export const addTable = async (data: IAddTableData): Promise<AxiosResponse> =>
  API.post<IAddTableData>("/tables", data);

export const getTables = async (): Promise<ITableData[]> => {
  const response = await API.get<ITableData[]>("/tables");
  return response.data;
};
