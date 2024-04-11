import { calcDiscount } from "@/app/utils/discountCalculation";
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  showMob: false,

  toggleShowMob: () =>
    set((state) => {
      return { showMob: !state.showMob };
    }),

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

  decrement: (itemIndex) =>
    set((state) => {
      let newState = state.cartItems;

      newState[itemIndex].waterQuantity = newState[itemIndex].waterQuantity - 1;

      return { cartItems: [...newState] };
    }),
  increment: (itemIndex) =>
    set((state) => {
      let newState = state.cartItems;

      newState[itemIndex].waterQuantity = newState[itemIndex].waterQuantity + 1;

      if (newState[itemIndex].waterVolume !== 19)
        return { cartItems: [...newState] };

      newState[itemIndex].discount = calcDiscount(
        newState[itemIndex].waterQuantity,
        newState[itemIndex].waterType
      );

      return { cartItems: [...newState] };
    }),
}));
