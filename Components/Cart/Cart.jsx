"use client";
import { useState } from "react";
import CartFinalPrice from "../CartFinalPrice/CartFinalPrice";
import CartList from "../CartList/CartList";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <div className="ml-[72px] mr-[72px] h-screen">
        <h2 className=" font-bold text-[60px] text-[#F5821E] my-[60px] text-center">
          Кошик
        </h2>
        <div className="flex justify-between">
          <CartList cartItems={cartItems} />
          <CartFinalPrice />
        </div>
      </div>
    </>
  );
};

export default Cart;
