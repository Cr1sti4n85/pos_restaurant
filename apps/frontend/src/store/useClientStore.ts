import { create } from "zustand";

interface ClientData {
  name: string;
  phone: string;
  guests: number;
  tableNo: string;
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

  setCustomer: ({ name, phone, guests, tableNo }) => {
    set({
      name,
      phone,
      guests,
      tableNo,
    });
    console.log(name, phone, guests, tableNo);
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
