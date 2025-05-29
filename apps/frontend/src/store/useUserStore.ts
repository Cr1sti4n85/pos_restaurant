import { create } from "zustand";
import { UserStore } from "../types";

export const useUserStore = create<UserStore>((set) => ({
  _id: "",
  name: localStorage.getItem("userName") || "",
  email: localStorage.getItem("userEmail") || "",
  phone: localStorage.getItem("userPhone") || "",
  setUser: (user) => {
    localStorage.setItem("userName", user.name);
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userPhone", user.phone);
    set({ ...user });
  },

  removeUser: () => {
    set({
      _id: "",
      name: "",
      phone: "",
      email: "",
    });
  },
}));
