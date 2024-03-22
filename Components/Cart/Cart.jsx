"use client";

import CartFinalPrice from "../CartFinalPrice/CartFinalPrice";
import CartList from "../CartList/CartList";
import { useState } from "react";

import Link from "next/link";
import Button from "../Button/Button";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import { NewClientCheckBox } from "./newClientCheckBox";
import Image from "next/image";

const Cart = () => {
  const cart = useCartStore((state) => state.cartItems);

  const [newClient, setNewClient] = useState(false);

  const toggleNewClient = () => {
    setNewClient((prevState) => !prevState);
  };

  return (
    <>
      {cart.length < 1 ? (
        <>
          <div className=" mx-auto max-w-[800px]">
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
          <div className="mx-auto max-w-[1440px] ">
            <div className=" ml-[72px] mr-[72px] ">
              <h2 className=" font-bold text-[60px] text-[#F5821E] my-[60px] text-center">
                Кошик
              </h2>
            </div>
            <div className="flex justify-between">
              <CartList cart={cart} />
              <CartFinalPrice cart={cart} />
            </div>

            <div>
              <NewClientCheckBox
                newClient={newClient}
                toggleNewClient={toggleNewClient}
              />
            </div>

            <div className="pt-[24px]">
              <div className=" w-[859px] h-36 bg-sky-500 rounded-[14px] justify-start items-center gap-4 inline-flex">
                <div className="flex items-center justify-center text-white w-[200px] h-full bg-[#005087] rounded-l-[14px]">
                  <p className=" text-[14px] px-0 ">Активована</p>
                </div>

                <div className=" text-white ml-[40px] my-[28px]">
                  <p className="text-[24px]">Перше знайомство</p>
                  <p className="text-[16px]">
                    Купуйте два бутля води по ціні одного при першому замовленні
                    якщо маєте тару на обмін.
                  </p>
                </div>

                <div className="relative">
                  <Image
                    alt="action1"
                    width={200}
                    height={150}
                    src="/newClientAction1.png"
                  ></Image>
                  <p className=" rotate-[30deg] z-10 right-0 top-2 uppercase font-semibold  absolute text-white text-[18px]">
                    акція
                  </p>
                </div>
              </div>

              {/* /////action 2 */}

              <div className=" mt-[24px] w-[859px] h-36 bg-sky-500 rounded-[14px] justify-start items-center gap-4 inline-flex ">
                <div className="flex items-center justify-center text-white w-[200px] h-full bg-[#005087] rounded-l-[14px]">
                  <p className=" text-[14px] ">Не активна</p>
                </div>

                <div className=" text-white ml-[40px] my-[28px]">
                  <p className="text-[24px]">новий клієнт</p>
                  <p className="text-[16px]">
                    Замовляйте три полікарбонатних бутля з водою і отримайте
                    механічну помпу в подарунок.
                  </p>
                </div>

                <div className="relative">
                  <Image
                    alt="action1"
                    width={186}
                    height={144}
                    src="/newClientAction2.png"
                  ></Image>
                  <p className=" rotate-[30deg] z-10 right-0 top-2 uppercase font-semibold  absolute text-white text-[18px]">
                    акція
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
