"use client";
import { calculateFinalPrice } from "@/app/utils/calculateDiscountFinalPrice";

import Button from "../Button/Button";
import {
  calculateDiscountPrice,
  calculateTotalPrice,
} from "@/app/utils/reduceCalc";
import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import sendMessage from "@/app/utils/api/telegram";

const CartFinalPrice = ({ orderForm }) => {
  const cart = useCartStore((state) => state.waterItems);
  const actionDiscount = useCartStore((state) => state.actionDiscount);
  const otherProducts = useCartStore((state) => state.otherProducts);
  const taraQuantity = useCartStore((state) => state.tara);
  const finalPrice = useCartStore((state) => state.finalPrice);
  const setFinalPrice = useCartStore((state) => state.setFinalPrice);

  const name = useCartStore((state) => state.name);
  const phoneNumber = useCartStore((state) => state.phoneNumber);
  const address = useCartStore((state) => state.address);
  const deliveryDate = useCartStore((state) => state.deliveryDate);
  const time = useCartStore((state) => state.time);

  const house = useCartStore((state) => state.house);
  const courpus = useCartStore((state) => state.courpus);
  const apartment = useCartStore((state) => state.apartment);
  const payMethod = useCartStore((state) => state.payMethod);
  const newClient = useCartStore((state) => state.newClient);
  const newClientAction = useCartStore((state) => state.newClientAction);
  const comment = useCartStore((state) => state.comment);

  const skipOrderConfirmation = useCartStore(
    (state) => state.skipOrderConfirmation
  );

  const cartWaterQuantity = cart.reduce(
    (acc, obj) => acc + obj.waterQuantity,
    0
  );

  const otherProdFinalPrice = otherProducts.reduce(
    (acc, obj) => acc + obj.price * obj.quantity,
    0
  );

  useEffect(() => {
    const finalPrice =
      calculateFinalPrice(cart, taraQuantity, actionDiscount) +
      otherProdFinalPrice;
    setFinalPrice(finalPrice);
  }, [actionDiscount, cart, otherProdFinalPrice, taraQuantity, setFinalPrice]);

  const handleSubmit = async ({ target }) => {
    const href = target.parentNode.getAttribute("href");
    console.log("href", href);
    if (href !== "/pay") {
      console.log("Its not /pay");
      return;
    }

    try {
      console.log("comment in cartFinalPrice =>", comment);
      await sendMessage({
        name,
        phoneNumber,
        address,
        house,
        courpus,
        apartment,
        deliveryDate,
        time,
        newClient,
        newClientAction,
        payMethod,
        comment,
        skipOrderConfirmation,
        cart,
        otherProducts,
        finalPrice,
      });
    } catch (error) {
      console.log(error.message);
    } finally {
    }
    console.log("It is /pay");
  };

  return (
    <>
      <div className="w-[312px] h-[418px] bg-[#E6EBF0] rounded-lg mx-auto md:mx-0 sticky top-[10%]">
        <div>
          <p className=" mt-[40px] mx-[62px] font-semibold text-[24px] uppercase">
            замовлення
          </p>

          <div className=" mx-[32px] mt-[24px] mb-[40px]  ">
            <div className="flex justify-between mb-4 border-t-[1px] border-[#B3CBDB] pt-[16px]">
              <p>Сума</p>

              <p>
                {" "}
                {cart.length > 0 || otherProdFinalPrice > 0 ? (
                  <span>
                    {" "}
                    {calculateTotalPrice(cart) + otherProdFinalPrice} ₴
                  </span>
                ) : (
                  "00.00 ₴"
                )}
              </p>
            </div>

            <div className="flex justify-between mb-4">
              <p>Знижка</p>
              <p className="block w-fit">
                -{" "}
                {cartWaterQuantity === 1
                  ? 0
                  : calculateDiscountPrice(cart, actionDiscount)}{" "}
                ₴
              </p>
            </div>

            <div className="flex justify-between mb-4">
              <p>Доставлення</p>
              <p>0 ₴</p>
            </div>

            <div className="flex justify-between mb-4">
              <p>Тара</p>
              <p>{taraQuantity * 350} ₴</p>
            </div>

            <div className="flex justify-between mb-4 text-[20px] font-medium">
              <p>До сплати</p>
              <p className=" text-[#00AFF0]">{finalPrice} ₴</p>
            </div>

            <Link href={orderForm ? "/pay" : "/order-form"}>
              <Button
                text={"Підтвердити"}
                className={" py-[18px] px-[68.5px]"}
                onClick={handleSubmit}
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartFinalPrice;
