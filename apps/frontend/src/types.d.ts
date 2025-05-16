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
export interface MenunItems {
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
  items: MenunItems[];
}
