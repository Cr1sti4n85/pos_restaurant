import { create } from "zustand";
import { nanoid } from "nanoid";
import { ClientStore } from "../types";

export const useClientStore = create<ClientStore>((set) => ({
  name: localStorage.getItem("clientName") || "",
  phone: localStorage.getItem("clientPhone") || "",
  guests: Number(localStorage.getItem("guests")) || 0,
  table: JSON.parse(localStorage.getItem("table") || "{}"),
  orderId: localStorage.getItem("orderId") || "",

  setCustomer: ({ name, phone, guests }) => {
    const orderId = nanoid(10);
    localStorage.setItem("orderId", orderId);

    set({
      name,
      phone,
      guests,
      orderId,
    });
  },

  removeCustomer: () => {
    localStorage.removeItem("clientName");
    localStorage.removeItem("clientPhone");
    localStorage.removeItem("guests");
    localStorage.removeItem("table");
    localStorage.removeItem("orderId");

    set({
      name: "",
      phone: "",
      guests: 0,
      table: null,
      orderId: "",
    });
  },

  updateTable: (table) => {
    set((state) => ({
      ...state,
      table,
    }));
  },
}));
