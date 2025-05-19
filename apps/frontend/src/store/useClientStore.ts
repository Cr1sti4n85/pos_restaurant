import { create } from "zustand";
import { nanoid } from "nanoid";
import { ClientStore } from "../types";

export const useClientStore = create<ClientStore>((set) => ({
  name: localStorage.getItem("name") || "",
  phone: localStorage.getItem("phone") || "",
  guests: Number(localStorage.getItem("guests")) || 0,
  tableNo: localStorage.getItem("tableNo") || "",
  orderId: localStorage.getItem("orderId") || "",

  setCustomer: ({ name, phone, guests }) => {
    const orderId = nanoid(10);
    localStorage.setItem("orderId", orderId);
    localStorage.setItem("tableNo", "N/A");
    set({
      name,
      phone,
      guests,
      orderId,
    });
  },

  removeCustomer: () => {
    set({
      name: "",
      phone: "",
      guests: 0,
      tableNo: "",
    });
  },

  updateTable: ({ tableNo }) => {
    set((state) => ({
      ...state,
      tableNo: tableNo ?? state.tableNo,
    }));
  },
}));
