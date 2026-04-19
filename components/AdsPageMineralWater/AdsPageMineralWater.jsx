"use client";
import { useState } from "react";
import Image from "next/image";
import "./styles.css";
import { calculateOnWaterPagePrice } from "@/app/utils/calculateWaterPrice";
import { calcDiscount } from "@/app/utils/discountCalculation";
import { toast } from "react-toastify";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import Button from "../Button/Button";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { catalogWaterData, waterQuantities } from "../CatalogWater/data";
import { eveningDeliveryOption, morningDeliveryOption } from "@/staticData/time";

export const AdsPageMineralWater = () => {
  const [quantities, setQuantities] = useState(waterQuantities);

  const dataMineralWater = catalogWaterData.find(
    ({ volume, type }) => type === "mineralWater" && volume === 19,
  );

  const addItem = useCartStore((state) => state.addItem);

  const addWater = (type, action) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [type]: action === "+" ? prevQuantities[type] + 1 : Math.max(prevQuantities[type] - 1, 0),
    }));
  };

  const addToCart = (type, quantity, volume, name, price) => {
    if (quantity === 0) return;

    addItem({
      waterType: type,
      waterQuantity: quantity,
      waterVolume: volume,
      price: price,
      discount: calcDiscount(quantity, type, volume),
    });

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: 0,
    }));

    toast.success("Додано до кошика");
  };

  return (
    <SectionWrapper>
      <div className="flex justify-around items-start mt-10 pt-[80px]">
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
              <p className="itemTitlePureWater">Вода питна мінералізована</p>
              <p className="itemTitlePureWater">{dataMineralWater.volume}Л </p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemSubTitle font-bold">При замовленні від 2 бутлів - знижка</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemSubTitle">
                За умови відсутності бутлів на обмін необхідно придбати тару під обрану кількість
                води
              </p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottle">{dataMineralWater.price}.00 ₴</p>
              <p className="itemPricePerBottle">за 1 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottle">{dataMineralWater.priceFrom2To5}.00 ₴</p>
              <p className="itemPricePerBottle">від 2 до 5 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottle">{dataMineralWater.priceFrom6To9}.00 ₴</p>
              <p className="itemPricePerBottle">від 6 до 9 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottle">{dataMineralWater.priceFrom10}.00 ₴</p>
              <p className="itemPricePerBottle">від 10 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemChoseQuantity">
                {calculateOnWaterPagePrice(
                  quantities.mineralWater19,
                  dataMineralWater.price,
                  dataMineralWater.priceFrom2To5,
                  dataMineralWater.priceFrom6To9,
                  dataMineralWater.priceFrom10,
                )}
                .00 ₴
              </p>

              <div className="inline-flex gap-2 ">
                <button
                  type="button"
                  disabled={quantities.mineralWater19 === 0}
                  onClick={() => {
                    addWater(`${dataMineralWater.type}${dataMineralWater.volume}`, "-");
                  }}
                >
                  <Image
                    className={quantities.mineralWater19 === 0 ? "block" : "hidden"}
                    priority
                    src={"minus-circle-cart.svg"}
                    width={24}
                    height={24}
                    alt="logo"
                  />
                  <Image
                    className={quantities.mineralWater19 !== 0 ? "block" : "hidden"}
                    priority
                    src={"minus-circle-cart-green.svg"}
                    width={24}
                    height={24}
                    alt="logo"
                  />
                </button>
                <p className="itemChoseQuantity">{quantities.mineralWater19}</p>
                <button
                  type="button"
                  onClick={() => {
                    addWater(`${dataMineralWater.type}${dataMineralWater.volume}`, "+");
                  }}
                >
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
                id="order"
                disabled={quantities.mineralWater19 === 0}
                onClick={() =>
                  addToCart(
                    dataMineralWater.type,
                    quantities.mineralWater19,
                    dataMineralWater.volume,
                    `${dataMineralWater.type}${dataMineralWater.volume}`,
                    dataMineralWater.price,
                  )
                }
                text="Замовити"
                className="buttonCatalogWater"
              />
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Image src="/images/delivery.png" width={24} height={24} alt="delivery" />
          <h3 className="text-lg font-semibold text-[#5a5f69]">Доставка води Одеса</h3>
        </div>

        <p>Доставка води в Одесі здійснюється в райони: Котовського, Фонтанка, Крижанівка</p>
        <p>
          щоденно {morningDeliveryOption.label} та {eveningDeliveryOption.label}. Неділя:{" "}
          {morningDeliveryOption.label}
        </p>
        <p>
          Мінімальне замовлення по Котовського - 1 бутель <br /> Фонтанка, Крижанівка - від 2
          бутелей
        </p>
        <p>Доставка безкоштовна</p>
        <p>Самовивіз доступний за адресою: м. Одеса, вул. Семена Палія 72</p>

        <div className="flex items-center gap-2 my-4">
          <Image src="/images/money.png" width={24} height={24} alt="payment" />
          <h3 className="text-lg font-semibold text-[#5a5f69]">Оплата</h3>
        </div>
        <p>✅ Оплата готівкою при доставці кур&#39;єру</p>
        <p>✅ Безготівковий переказ на рахунок компанії</p>
        <p>✅ Оплата на сайті</p>

        <div className="flex items-center gap-2 my-4">
          <h3 className="text-lg font-semibold text-[#5a5f69]">Опис:</h3>
        </div>
        <p>
          Мінералізована вода проходить повний цикл сучасної очистки — 9 ступенів, включаючи
          мембранну фільтрацію, вугільне очищення, пом’якшення та ультрафіолетове знезараження, що
          гарантує її чистоту, безпеку та стабільну якість. Після цього вода додатково збагачується
          комплексом необхідних мінералів — хлоридом натрію, солями натрію, кальцієм і магнієм, що
          забезпечує збалансований склад, приємний смак і користь для організму. Ідеально підходить
          для щоденного вживання, добре втамовує спрагу та підтримує водно-сольовий баланс.
        </p>
      </div>
    </SectionWrapper>
  );
};
