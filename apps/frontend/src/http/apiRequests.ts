import { AxiosResponse } from "axios";
import API from "./apiClient";
import { EmployeeRole } from "../types";

//employee Requests
interface ILogin {
  email: string;
  password: string;
}

interface IRegister extends ILogin {
  fullName: string;
  phone: string;
  role: EmployeeRole;
}

interface IUser extends IRegister, ILogin {}

export const login = async (data: ILogin): Promise<AxiosResponse> =>
  API.post<ILogin>("/login", data);

export const register = async (data: IRegister): Promise<AxiosResponse> =>
  API.post<IRegister>("/register", data);

export const getUserData = async (): Promise<IUser> => {
  const response = await API.get<IUser>("/users/profile");
  return response.data;
};
