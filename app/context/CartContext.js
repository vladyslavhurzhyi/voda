"use client";

import { useRouter } from "next/router";
import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      waterQuantity: 0,
      waterType: "normal",
    },
  ]);

  const router = useRouter;

  const addItemToCart = async ({ waterQuantity, waterType }) => {
    const newItem = {
      waterQuantity: waterQuantity,
      waterType: waterType,
    };
    setCart((prevState) => {
      return [...prevState, newItem];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
