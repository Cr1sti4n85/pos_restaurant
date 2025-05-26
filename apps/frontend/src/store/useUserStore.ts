import { create } from "zustand";
import { UserStore } from "../types";

export const useUserStore = create<UserStore>((set) => ({
  _id: "",
  name: "",
  email: "",
  phone: "",
  role: "",
  isAuth: false,
  setUser: (user) => {
    set({ ...user });
  },

  removeUser: () => {
    set({
      _id: "",
      name: "",
      phone: "",
      role: "",
      email: "",
      isAuth: false,
    });
  },
}));
