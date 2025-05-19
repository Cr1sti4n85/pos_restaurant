import React, { ReactElement } from "react";

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
}
