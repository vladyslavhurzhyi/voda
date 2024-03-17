"use client";
import { useState } from "react";
import CartFinalPrice from "../CartFinalPrice/CartFinalPrice";
import CartList from "../CartList/CartList";
import { useContext } from "react";
import CartContext from "@/app/context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="ml-[72px] mr-[72px] h-screen">
        <h2 className=" font-bold text-[60px] text-[#F5821E] my-[60px] text-center">
          Кошик
        </h2>
        <div className="flex justify-between">
          <CartList cart={cart} />
          <CartFinalPrice cart={cart} />
        </div>
      </div>
    </>
  );
};

export default Cart;
