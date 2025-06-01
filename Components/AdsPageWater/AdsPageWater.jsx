"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./styles.css";
import {
  calcWaterPrice,
  calculateOnWaterPagePrice,
} from "@/app/utils/calculateWaterPrice";
import { calcDiscount } from "@/app/utils/discountCalculation";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import Button from "../Button/Button";

const ButtonComponent = dynamic(() => import("../Button/Button"), {
  ssr: false,
});

const ClientButton = ({ onClick, disabled, className }) => {
  return (
    <div suppressHydrationWarning>
      <Button
        disabled={disabled}
        onClick={onClick}
        text="Замовити"
        className={className}
      />
    </div>
  );
};

export const AdsPageWater = () => {
  const [quantities, setQuantities] = useState({
    normalWater19: 1,
    normalWater13: 2,
    normalWater11: 2,
    mineralWater19: 1,
    mineralWater13: 2,
    mineralWater11: 2,
  });
  const [buttonText, setButtonText] = useState("Замовити");

  useEffect(() => {
    setButtonText("Замовити");
  }, []);

  const addItem = useCartStore((state) => state.addItem);

  const addWater = (type, action) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [type]:
        action === "+"
          ? prevQuantities[type] + 1
          : Math.max(prevQuantities[type] - 1, 0),
    }));
  };

  const addToCart = (type, quantity, volume, name) => {
    if (quantity === 0) return;

    addItem({
      waterType: type,
      waterQuantity: quantity,
      waterVolume: volume,
      price: calcWaterPrice(volume, type, quantity),
      discount: calcDiscount(quantity, type, volume),
    });

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: 0,
    }));

    toast.success("Додано до кошика");
  };

  return (
    <section className="sectionWater">
      <div className="wrapperSection">
        <div className="flex justify-around items-start mt-10">
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center">
            <Image
              src="/waterBig.png"
              width={400}
              height={500}
              alt="Bottle 19L"
              className="object-contain"
            />
          </div>
          <ul className="">
            <li className="itemCatalogWater">
              <div className="itemDescriptionPrice">
                <p className="itemTitlePureWater">Вода питна очищена</p>
                <p className="itemTitlePureWater">19Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">
                  При замовленні від двох бутлів - знижка
                </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">
                  За умови відсутності бутлів на обмін необхідно додатково
                  придбати тару
                </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">130.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">110.00 ₴</p>
                <p className="itemPricePerBottle">від 2 до 5 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">100.00 ₴</p>
                <p className="itemPricePerBottle">від 6 до 9 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">95.00 ₴</p>
                <p className="itemPricePerBottle">від 10 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">
                  {calculateOnWaterPagePrice(
                    quantities.normalWater19,
                    "normalWater"
                  )}{" "}
                  ₴
                </p>

                <div className="inline-flex gap-2 ">
                  <button
                    type="button"
                    onClick={() => {
                      addWater("normalWater19", "-");
                    }}
                  >
                    {" "}
                    <Image
                      className=""
                      priority
                      src="minus-circle-cart.svg"
                      width={24}
                      height={24}
                      alt="logo"
                    />
                  </button>
                  <p className="itemChoseQuantity">
                    {quantities.normalWater19}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      addWater("normalWater19", "+");
                    }}
                  >
                    {" "}
                    <Image
                      className=""
                      priority
                      src="plus-circle-green.svg"
                      width={24}
                      height={24}
                      alt="logo"
                    />
                  </button>
                </div>
              </div>
              <div className="wrapperButton" id="mineralWater">
                <Button
                  disabled={quantities.normalWater19 === 0}
                  onClick={() =>
                    addToCart(
                      "normalWater",
                      quantities.normalWater19,
                      19,
                      "normalWater19"
                    )
                  }
                  text="Замовити"
                  className="buttonCatalogWater"
                />
              </div>
            </li>
            <li className="itemCatalogWater">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/delivery.png"
                  width={24}
                  height={24}
                  alt="delivery"
                />
                <h3 className="text-lg font-semibold">Доставка</h3>
              </div>
              <p className="mb-2">
                Доставка води Одеса: Доставляємо в райони: Молдаванка,
                Лузанівка, Криванівка
              </p>
              <p className="mb-2">Доставка щодня, окрім неділі</p>
              <p className="mb-4">Доставка безкоштовна</p>

              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/money.png"
                  width={24}
                  height={24}
                  alt="payment"
                />
                <h3 className="text-lg font-semibold">Способи оплати</h3>
              </div>
              <p className="mb-2">
                ✅ Безготівковий переказ на рахунок компанії
              </p>
              <p className="mb-2">
                ✅ Оплата готівкою кур&apos;єру при доставці
              </p>
              <p>✅ Оплата переказом на карту Приватбанку</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
