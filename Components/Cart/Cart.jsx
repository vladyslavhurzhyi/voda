"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import CartFinalPrice from "../CartFinalPrice/CartFinalPrice";
import CartList from "../CartList/CartList";
import Link from "next/link";
import Button from "../Button/Button";
import { NewClientCheckBox } from "./newClientCheckBox";
import { NewClientAction } from "./NewClientAction";

const Cart = () => {
  const cart = useCartStore((state) => state.cartItems);
  const taraQuantity = useCartStore((state) => state.tara);

  const [newClient, setNewClient] = useState(false);

  const [action, setAction] = useState("action1");

  const [actionDiscount, setActionDiscount] = useState(0);

  const toggleNewClient = () => {
    setNewClient((prevState) => !prevState);
  };

  const clickAction1 = () => {
    setAction("action1");
  };

  const clickAction2 = () => {
    setAction("action2");
  };

  useEffect(() => {
    if (cart.length === 0) return;
    const allQuantity = cart.reduce((acc, obj) => {
      return obj.waterVolume === 19 ? acc + obj.waterQuantity : acc;
    }, 0);

    const waterTypeInCart = cart.map((item) => {
      return item.waterQuantity >= 2 && item.waterType;
    });

    allQuantity >= 2 && newClient && action === "action1"
      ? waterTypeInCart == "mineralWater"
        ? setActionDiscount(70)
        : setActionDiscount(65)
      : setActionDiscount(0);
  }, [newClient, action, cart]);

  return (
    <>
      {cart.length < 1 ? (
        <>
          <div className="max-w-[360px] mx-auto md:max-w-[800px]">
            <div className="flex flex-col items-center justify-center bg-white pb-[20px]  md:pb-[0px]   w-[360px] md:w-[749px]   h-[658px]">
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
          <div className="mx-auto  md:ml-[72px] md:mr-[72px] max-w-[360px] md:max-w-[1440px] ">
            <div className="">
              <h2 className=" font-bold text-[30px] md:text-[60px] text-[#F5821E] my-[60px] text-center">
                Кошик
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <CartList cart={cart} />
              <CartFinalPrice
                cart={cart}
                taraQuantity={taraQuantity}
                actionDiscount={actionDiscount}
              />
            </div>

            <div>
              <NewClientCheckBox
                newClient={newClient}
                toggleNewClient={toggleNewClient}
              />
            </div>

            <NewClientAction
              newClient={newClient}
              action={action}
              clickAction1={clickAction1}
              clickAction2={clickAction2}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
