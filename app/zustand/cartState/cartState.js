import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],

  addItem: (newItem) =>
    set((state) => {
      const newContact = newItem;

      return { cartItems: [...state.cartItems, newContact] };
    }),

  deleteItem: (oldItem) =>
    set((state) => {
      console.log("oldItem", oldItem);

      const newState = state.cartItems.filter((item) => item !== oldItem);
      console.log("newState", newState);
      return { cartItems: newState };
    }),
}));
