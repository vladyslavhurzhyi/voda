import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// export const useCartStore = create((set) => ({
//   cartItems: [],

//   addItem: (newItem) =>
//     set((state) => {
//       const newContact = newItem;
//       console.log("newContact", newContact);

//       return { cartItems: [...state.cartItems, newContact] };
//     }),

//   deleteItem: (oldItem) =>
//     set((state) => {
//       console.log("oldItem", oldItem);

//       const newState = state.cartItems.filter((item) => item !== oldItem);
//       console.log("newState", newState);
//       return { cartItems: newState };
//     }),
// }));

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      addItem: (newItem) =>
        set((state) => {
          const newContact = newItem;
          console.log("newContact", newContact);

          return { cartItems: [...state.cartItems, newContact] };
        }),

      deleteItem: (oldItem) =>
        set((state) => {
          console.log("oldItem", oldItem);

          const newState = state.cartItems.filter((item) => item !== oldItem);
          console.log("newState", newState);
          return { cartItems: newState };
        }),
    }),
    {
      name: "cartItems", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
