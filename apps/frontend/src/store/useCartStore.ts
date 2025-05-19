import { create } from "zustand";
import { CartStore } from "../types";

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  addItems: ({ id, itemName, pricePerQuantity, quantity, price }) => {
    const { cart } = get();
    set({
      cart: [
        ...cart,
        {
          id,
          itemName,
          pricePerQuantity,
          quantity,
          price,
        },
      ],
    });
  },
  removeItems: (id) => {
    set((state) => {
      state.cart = state.cart.filter((item) => item.id !== id);
      return {
        cart: state.cart,
      };
    });
  },
}));
