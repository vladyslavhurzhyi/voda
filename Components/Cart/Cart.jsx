"use client";

import { useEffect } from "react";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import CartFinalPrice from "../CartFinalPrice/CartFinalPrice";
import CartList from "../CartList/CartList";
import Link from "next/link";
import Button from "../Button/Button";
import { NewClientCheckBox } from "./newClientCheckBox";
import { NewClientAction } from "./NewClientAction";
import {
  allQuantityMineralWater19l,
  allQuantityNormalWater19l,
} from "@/app/utils/reduceCalc";

// import { NewClientActionOnlySecond } from "./NewClientActionOnlySecond";

const Cart = () => {
  const cart = useCartStore((state) => state.waterItems);
  const actionDiscount = useCartStore((state) => state.actionDiscount);
  const setActionDiscount = useCartStore((state) => state.setActionDiscount);
  const otherProducts = useCartStore((state) => state.otherProducts);

  const action = useCartStore((state) => state.newClientAction);
  const setAction = useCartStore((state) => state.setNewClientAction);

  const taraQuantity = useCartStore((state) => state.tara);

  const newClient = useCartStore((state) => state.newClient);
  const setNewClient = useCartStore((state) => state.setNewClient);

  const cartWaterQuantity = cart.reduce(
    (acc, obj) => acc + obj.waterQuantity,
    0
  );

  const toggleNewClient = () => {
    setNewClient(!newClient);
  };

  const toggleAction = () => {
    if (action === "action1") {
      setAction("action2");
    }
    if (action === "action2") {
      setAction("action1");
    }
  };

  const clickAction1 = () => {
    setAction("action1");
  };

  const clickAction2 = () => {
    setAction("action2");
  };

  useEffect(() => {
    if (!newClient) {
      setActionDiscount(0);
    }
    if (cart.length === 0) {
      setActionDiscount(0);

      return;
    }

    const allQuantityMineral = allQuantityMineralWater19l(cart);

    const allQuantityNormal = allQuantityNormalWater19l(cart);

    const waterTypeInCart = cart.filter((item) => {
      return item.waterQuantity >= 2;
    });

    let discount = 0;

    // Условие для normalWater
    if (allQuantityMineral >= 2 && newClient && action === "action1") {
      if (waterTypeInCart[0]?.waterType === "normalWater") {
        discount = 70;
      } else {
        discount = 80;
      }
    }

    // Условие для mineralWater
    if (allQuantityNormal >= 2 && newClient && action === "action1") {
      if (waterTypeInCart[0]?.waterType === "mineralWater") {
        discount = 200;
      } else {
        discount = 70;
      }
    }

    setActionDiscount(discount);
  }, [
    newClient,
    action,
    cart,
    setActionDiscount,
    cartWaterQuantity,
    taraQuantity,
  ]);

  return (
    <>
      <div className="page-container">
        {cart.length < 1 && otherProducts.length < 1 && taraQuantity < 1 ? (
          <>
            <div className="max-w-[360px] flex items-center flex-1  mx-auto md:max-w-[700px] lg:max-w-[800px]">
              <div className=" flex-row  justify-center mx-auto items-center pt-[200px] bg-white pb-[20px]  md:pb-[0px]   w-[360px]    h-[658px]">
                <p className="text-[#B3CBDB] text-[24px] mb-[24px] text-center">
                  Кошик порожній
                </p>
                <p className="text-[#B3CBDB] text-[20px] mb-[60px] text-center">
                  але то легко виправити :)
                </p>

                <Link href={"/water"} className="flex ">
                  <Button
                    text={"Замовити"}
                    className="px-[77px] py-[18px]  mx-auto "
                  />
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mx-auto md:px-12 pt-12 md:mt-20  lg:mx-auto max-w-[360px] md:max-w-[1440px] ">
              <div className="">
                <h2 className=" font-bold text-[30px] md:text-[60px] text-[#F5821E] mb-[30px] md:mb-[60px] text-center">
                  Кошик
                </h2>
              </div>
              <div className="xl:flex flex-col  lg:flex-row justify-between md:items-center lg:items-start gap-10">
                <CartList
                  cart={cart}
                  otherProducts={otherProducts}
                  action={action}
                  newClient={newClient}
                >
                  <NewClientCheckBox
                    newClient={newClient}
                    toggleNewClient={toggleNewClient}
                  />

                  {/* ///////закомментировать если не нужна 1 акция*/}
                  <NewClientAction
                    newClient={newClient}
                    action={action}
                    clickAction1={clickAction1}
                    clickAction2={clickAction2}
                  />

                  {/* ///////раскомментировать если нужна 2 акция*/}

                  {/* <NewClientActionOnlySecond
              newClient={newClient}
              action={action}
              toggleAction={toggleAction}
            /> */}
                </CartList>
                <CartFinalPrice
                  otherProducts={otherProducts}
                  cart={cart}
                  actionDiscount={actionDiscount}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
