import { calcDiscount } from "@/app/utils/discountCalculation";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
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
            updatedCartItems.push(newItem);
          }

          return { cartItems: updatedCartItems };
        }),

      deleteItem: (oldItem) =>
        set((state) => {
          const newState = state.cartItems.filter((item) => item !== oldItem);
          return { cartItems: newState };
        }),

      decrement: (itemIndex) =>
        set((state) => {
          let newState = state.cartItems;

          newState[itemIndex].waterQuantity =
            newState[itemIndex].waterQuantity - 1;

          return { cartItems: [...newState] };
        }),
      increment: (itemIndex) =>
        set((state) => {
          let newState = state.cartItems;

          newState[itemIndex].waterQuantity =
            newState[itemIndex].waterQuantity + 1;

          if (newState[itemIndex].waterVolume !== 19)
            return { cartItems: [...newState] };

          newState[itemIndex].discount = calcDiscount(
            newState[itemIndex].waterQuantity,
            newState[itemIndex].waterType
          );

          return { cartItems: [...newState] };
        }),
    }),
    {
      name: "cartItems", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
