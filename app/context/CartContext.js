// "use client";

// import { useRouter } from "next/router";
// import { createContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const router = useRouter;

//   const addItemToCart = async ({
//     waterQuantity,
//     waterType,
//     waterVolume,
//     price,
//   }) => {
//     const newItem = {
//       waterQuantity: waterQuantity,
//       waterType: waterType,
//       waterVolume: waterVolume,
//       price: price,
//     };
//     setCart((prevState) => {
//       return [...prevState, newItem];
//     });
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, showMobMenu, addItemToCart, toggleMobMenu }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;
