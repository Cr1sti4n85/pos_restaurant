import React, { ReactElement } from "react";
import { IconType } from "react-icons/lib";

export type MiniCardProps = {
  title: string;
  icon: ReactElement;
  number: number;
  footerNum: number;
};

export type ModalProps = {
  title: string;
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

//menus
export interface MenuItems {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface Menus {
  id: number;
  name: string;
  bgColor: string;
  icon: string;
  items: MenuItems[];
}

//ClientStore

interface IClientData {
  name: string;
  phone: string;
  guests: number;
  tableNo: string;
  orderId: string;
}

export interface ClientStore extends IClientData {
  setCustomer: (customer: Partial<IClientData>) => void;
  removeCustomer: () => void;
  updateTable: (data: Partial<Pick<IClientData, "tableNo">>) => void;
}

//Cart
interface ICartData {
  id: string;
  itemName: string;
  pricePerQuantity: number;
  quantity: number;
  price: number;
}

export interface CartStore {
  cart: ICartData[];
  addItems: (item: ICartData) => void;
  removeItems: (id: string) => void;
  getTotalPrice: () => number;
}

//Employees
export enum EmployeeRole {
  ADMIN = "admin",
  WAITER = "mesero",
  CASHIER = "cajero",
}

interface ILoginEmployee {
  email: string;
  password: string;
}

interface IRegisterEmployee extends ILoginEmployee {
  name: string;
  phone: string;
  role: EmployeeRole | "";
}

//UserStore
export interface IUserData {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface UserStore extends IUserData {
  setUser: (user: IUserData) => void;
  removeUser: () => void;
}

export interface IAuthUser extends IUserData {
  role: EmployeeRole;
}

//buttons and tabs for dashboard

export type Buttons = {
  label: string;
  icon: ReactElement<IconType>;
  action: string;
};

export enum Tabs {
  Metrics = "Métricas",
  Orders = "Órdenes",
  Payment = "Pago",
}

//Dashboard modal

export type DashboardModalProps = {
  setIsTableModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ITableData {
  tableNo: string;
  seats: string;
}
