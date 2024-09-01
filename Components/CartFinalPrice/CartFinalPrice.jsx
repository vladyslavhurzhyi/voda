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

const CartFinalPrice = ({ orderForm }) => {
  const cart = useCartStore((state) => state.waterItems);
  const otherProducts = useCartStore((state) => state.otherProducts);

  const actionDiscount = useCartStore((state) => state.actionDiscount);
  const taraQuantity = useCartStore((state) => state.tara);
  const finalPrice = useCartStore((state) => state.finalPrice);
  const setFinalPrice = useCartStore((state) => state.setFinalPrice);

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

  return (
    <>
      <div className="w-[312px]  md:w-[80%] xl:w-[312px] h-[380px] md:h-[400px] bg-[#E6EBF0] rounded-lg mx-auto  sticky top-[10%]">
        <div>
          <p className=" mt-[40px] pt-4 xl:pt-0 mx-[62px] font-semibold text-[24px] uppercase  md:text-center">
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
              <p>{taraQuantity * 370} ₴</p>
            </div>

            <div className="flex justify-between mb-4 text-[20px] font-medium">
              <p>До сплати</p>
              <p className=" text-[#00AFF0]">{finalPrice} ₴</p>
            </div>

            <Link
              href={"/order-form"}
              className={`${orderForm ? " hidden" : ""}`}
            >
              <Button
                text={"Підтвердити"}
                className={" py-[18px] px-[68.5px] md:mx-auto block"}
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartFinalPrice;
