import { create } from "zustand";
import { EmployeeRole, UserStore } from "../types";

export const useUserStore = create<UserStore>((set) => ({
  _id: "",
  name: localStorage.getItem("userName") || "",
  email: localStorage.getItem("userEmail") || "",
  phone: localStorage.getItem("userPhone") || "",
  role: (localStorage.getItem("userRole") as EmployeeRole) || "",
  setUser: (user) => {
    localStorage.setItem("userName", user.name);
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userPhone", user.phone);
    localStorage.setItem("userRole", user.role);
    set({ ...user });
  },

  removeUser: () => {
    set({
      _id: "",
      name: "",
      phone: "",
      role: "",
      email: "",
    });
  },
}));
