import { calcDiscount } from "@/app/utils/discountCalculation";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      waterItems: [],
      otherProducts: [],
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

      addProduct: (newProduct) =>
        set((state) => {
          let updatedWaterItems = state.otherProducts.map((item) => {
            if (
              item.name === newProduct.name &&
              item.price === newProduct.price
            ) {
              return {
                ...item,
                quantity: item.quantity + newProduct.quantity,
              };
            }
            return item;
          });

          let searchItemIndex = state.waterItems.findIndex(
            (item) =>
              item.name === newProduct.name && item.price === newProduct.price
          );
          if (searchItemIndex === -1) {
            updatedWaterItems.push(newProduct);
          }

          return { otherProducts: [...updatedWaterItems] };
        }),

      deleteProduct: (oldProduct) =>
        set((state) => {
          console.log("oldProduct", oldProduct);
          const newState = state.otherProducts.filter(
            (item) => item !== oldProduct
          );

          console.log("newState", newState);
          return { otherProducts: newState };
        }),

      decrementProduct: (itemIndex) =>
        set((state) => {
          let newState = state.otherProducts;

          newState[itemIndex].quantity = newState[itemIndex].quantity - 1;

          return { otherProducts: [...newState] };
        }),
      incrementProduct: (itemIndex) =>
        set((state) => {
          let newState = state.otherProducts;

          newState[itemIndex].quantity = newState[itemIndex].quantity + 1;

          return { otherProducts: [...newState] };
        }),

      addItem: (newItem) =>
        set((state) => {
          let updatedWaterItems = state.waterItems.map((item) => {
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

          let searchItemIndex = state.waterItems.findIndex(
            (item) =>
              item.waterType === newItem.waterType &&
              item.waterVolume === newItem.waterVolume
          );
          if (searchItemIndex === -1) {
            updatedWaterItems.push(newItem);
          }

          return { waterItems: updatedWaterItems };
        }),

      deleteItem: (oldItem) =>
        set((state) => {
          const newState = state.waterItems.filter((item) => item !== oldItem);
          return { waterItems: newState };
        }),

      decrement: (itemIndex) =>
        set((state) => {
          let newState = state.waterItems;

          newState[itemIndex].waterQuantity =
            newState[itemIndex].waterQuantity - 1;

          return { waterItems: [...newState] };
        }),
      increment: (itemIndex) =>
        set((state) => {
          let newState = state.waterItems;

          newState[itemIndex].waterQuantity =
            newState[itemIndex].waterQuantity + 1;

          if (newState[itemIndex].waterVolume !== 19)
            return { waterItems: [...newState] };

          newState[itemIndex].discount = calcDiscount(
            newState[itemIndex].waterQuantity,
            newState[itemIndex].waterType
          );

          return { waterItems: [...newState] };
        }),
    }),
    {
      name: "waterItems", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
