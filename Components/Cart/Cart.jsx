"use client";

import CartFinalPrice from "../CartFinalPrice/CartFinalPrice";
import CartList from "../CartList/CartList";
import { useContext } from "react";

import Link from "next/link";
import Button from "../Button/Button";
import { useCartStore } from "@/app/zustand/cartState/cartState";

const Cart = () => {
  const cart = useCartStore((state) => state.cartItems);

  return (
    <>
      {cart.length < 1 ? (
        <>
          <div className=" ml-auto mr-auto max-w-[800px]">
            <div className="flex flex-col items-center justify-center bg-white w-[749px] h-[658px]">
              <p className="text-[#B3CBDB] text-[24px] mb-[24px]">
                Кошик порожній
              </p>
              <p className="text-[#B3CBDB] text-[20px] mb-[60px]">
                але то легко виправити :)
              </p>

              <Link href={"/"} className="flex">
                <Button
                  text={"Замовити"}
                  className="px-[77px] py-[18px] flex items-center "
                />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" max-w-[1440px] mx-[72px] ">
            <div className=" ml-[72px] mr-[72px] ">
              <h2 className=" font-bold text-[60px] text-[#F5821E] my-[60px] text-center">
                Кошик
              </h2>
            </div>

            <div className="flex justify-between">
              <CartList cart={cart} />
              <CartFinalPrice cart={cart} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
