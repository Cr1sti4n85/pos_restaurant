import { create } from "zustand";
import { nanoid } from "nanoid";

interface ClientData {
  name: string;
  phone: string;
  guests: number;
  tableNo: string;
  orderId: string;
}

interface ClientStore extends ClientData {
  setCustomer: (customer: Partial<ClientData>) => void;
  removeCustomer: () => void;
  updateTable: (data: Partial<Pick<ClientData, "tableNo">>) => void;
}

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
