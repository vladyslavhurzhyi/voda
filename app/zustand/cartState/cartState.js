import { calcDiscount } from "@/app/utils/discountCalculation";
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  showMob: false,
  tara: 0,

  toggleShowMob: () =>
    set((state) => {
      return { showMob: !state.showMob };
    }),

  incrementTara: () =>
    set((state) => {
      return { tara: state.tara + 1 };
    }),

  decrementTara: () =>
    set((state) => {
      if (state.tara === 0) {
        return;
      }
      return { tara: state.tara - 1 };
    }),

  addItem: (newItem) =>
    set((state) => {
      let updatedCartItems = state.cartItems.map((item) => {
        if (
          item.waterType === newItem.waterType &&
          item.waterVolume === newItem.waterVolume
        ) {
          // Если находим существующий объект, обновляем его waterQuantity

          const newDiscount = calcDiscount(
            newItem.waterQuantity,
            newItem.waterType
          );

          return {
            ...item,
            waterQuantity: item.waterQuantity + newItem.waterQuantity,
            discount: newDiscount > 0 ? newDiscount : item.discount,
          };
        }
        return item;
      });

      let searchItemIndex = state.cartItems.findIndex(
        (item) =>
          item.waterType === newItem.waterType &&
          item.waterVolume === newItem.waterVolume
      );
      if (searchItemIndex === -1) {
        // Если существующий объект не найден, добавляем новый объект в массив
        updatedCartItems.push(newItem);
      }

      return { cartItems: updatedCartItems };
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
