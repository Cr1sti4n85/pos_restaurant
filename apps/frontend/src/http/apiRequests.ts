import { AxiosResponse } from "axios";
import API from "./apiClient";
import {
  IAddTableData,
  IAuthUser,
  ILoginEmployee,
  IOrderData,
  IRegisterEmployee,
  IReturnedOrdersData,
  ITableData,
  OrderStatus,
  UpdateOrder,
  UpdateTable,
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

export const updateTable = async (
  data: UpdateTable,
  id: string
): Promise<UpdateTable> => {
  const response = await API.patch(`/tables/${id}`, data);
  return await response.data;
};

//Order requests

export const createOrder = async (
  data: Partial<IOrderData>
): Promise<AxiosResponse> => API.post<Partial<IOrderData>>("/orders", data);

export const getOrders = async (): Promise<IReturnedOrdersData[]> => {
  const response = await API.get<IReturnedOrdersData[]>("/orders");
  return response.data;
};

export const updateOrderStatus = async (
  data: OrderStatus,
  id: string
): Promise<UpdateOrder> => {
  const response = await API.patch(`/orders/${id}`, { orderStatus: data });
  return response.data;
};
