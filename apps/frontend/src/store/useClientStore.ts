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
  name: "",
  phone: "",
  guests: 0,
  tableNo: "",
  orderId: "",

  setCustomer: ({ name, phone, guests, tableNo }) => {
    set({
      name,
      phone,
      guests,
      tableNo,
      orderId: nanoid(10),
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
