"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./styles.css";
import { calculateOnWaterPagePrice } from "@/app/utils/calculateWaterPrice";
import { calcDiscount } from "@/app/utils/discountCalculation";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import Button from "../Button/Button";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { catalogWaterData, waterQuantities } from "../CatalogWater/data";

const ButtonComponent = dynamic(() => import("../Button/Button"), {
  ssr: false,
});

const ClientButton = ({ onClick, disabled, className }) => {
  return (
    <div suppressHydrationWarning>
      <Button
        id="order"
        disabled={disabled}
        onClick={onClick}
        text="Замовити"
        className={className}
      />
    </div>
  );
};

export const AdsPageWater = () => {
  const [quantities, setQuantities] = useState(waterQuantities);
  const [buttonText, setButtonText] = useState("Замовити");

  useEffect(() => {
    setButtonText("Замовити");
  }, []);

  const dataNormalWater = catalogWaterData.find(
    ({ volume, type }) => type === "normalWater" && volume === 19,
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
              <p className="itemTitlePureWater">Вода питна очищена</p>
              <p className="itemTitlePureWater">{dataNormalWater.volume}Л </p>
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
              <p className="itemPricePerBottle">{dataNormalWater.price}.00 ₴</p>
              <p className="itemPricePerBottle">за 1 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottle">{dataNormalWater.priceFrom2To5}.00 ₴</p>
              <p className="itemPricePerBottle">від 2 до 5 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottle">{dataNormalWater.priceFrom6To9}.00 ₴</p>
              <p className="itemPricePerBottle">від 6 до 9 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottle">{dataNormalWater.priceFrom10}.00 ₴</p>
              <p className="itemPricePerBottle">від 10 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemChoseQuantity">
                {calculateOnWaterPagePrice(
                  quantities.normalWater19,
                  dataNormalWater.price,
                  dataNormalWater.priceFrom2To5,
                  dataNormalWater.priceFrom6To9,
                  dataNormalWater.priceFrom10,
                )}
                .00 ₴
              </p>

              <div className="inline-flex gap-2 ">
                <button
                  type="button"
                  disabled={quantities.normalWater19 === 0}
                  onClick={() => {
                    addWater(`${dataNormalWater.type}${dataNormalWater.volume}`, "-");
                  }}
                >
                  <Image
                    className={quantities.normalWater19 === 0 ? "block" : "hidden"}
                    priority
                    src={"minus-circle-cart.svg"}
                    width={24}
                    height={24}
                    alt="logo"
                  />
                  <Image
                    className={quantities.normalWater19 !== 0 ? "block" : "hidden"}
                    priority
                    src={"minus-circle-cart-green.svg"}
                    width={24}
                    height={24}
                    alt="logo"
                  />
                </button>
                <p className="itemChoseQuantity">{quantities.normalWater19}</p>
                <button
                  type="button"
                  onClick={() => {
                    addWater(`${dataNormalWater.type}${dataNormalWater.volume}`, "+");
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
                disabled={quantities.normalWater19 === 0}
                onClick={() =>
                  addToCart(
                    dataNormalWater.type,
                    quantities.normalWater19,
                    dataNormalWater.volume,
                    `${dataNormalWater.type}${dataNormalWater.volume}`,
                    dataNormalWater.price,
                  )
                }
                text="Замовити"
                className="buttonCatalogWater"
              />
            </div>
          </li>
          {/* <li className="itemCatalogWater">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/delivery.png" width={24} height={24} alt="delivery" />
              <h3 className="text-lg font-semibold">Доставка води Одеса</h3>
            </div>

            <p className="mb-4">
              Доставка води в Одесі здійснюється в райони: Котовського, Фонтанка, Крижанівка
            </p>
            <p className="mb-4">
              щоденно з 9.00 до 12.00 та з 18.00 до 21.00. Неділя- вихідний для доставки
            </p>
            <p className="mb-4">
              Мінімальне замовлення по Котовського - 1 бутель <br /> Фонтанка, Крижанівка - від 2
              бутелей
            </p>
            <p className="mb-4">Доставка безкоштовна</p>
            <p className="mb-4">Самовивіз доступний за адресою: м. Одеса, вул. Семена Палія 72</p>

            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/money.png" width={24} height={24} alt="payment" />
              <h3 className="text-lg font-semibold">Оплата</h3>
            </div>
            <p className="mb-4">✅ Оплата готівкою при доставці кур&#39;єру</p>
            <p className="mb-4">✅ Безготівковий переказ на рахунок компанії</p>
            <p className="mb-4">✅ Оплата на сайті</p>

            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">Опис:</h3>
            </div>
            <p className="mb-4">
              Очищена питна вода повністю безпечна для споживання в сирому вигляді, підходить для
              приготування чаю, кави, а також для приготування їжі. Здорова вода пройшла 9 ступенів
              фільтрації включаючи видалення забруднень, бактерій та хімічних сполук. Очищена вода —
              це низькомінералізована вода з ідеальним смаком та якостями.
            </p>
          </li> */}
        </ul>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Image src="/images/delivery.png" width={24} height={24} alt="delivery" />
          <h3 className="text-lg font-semibold">Доставка води Одеса</h3>
        </div>

        <p>Доставка води в Одесі здійснюється в райони: Котовського, Фонтанка, Крижанівка</p>
        <p>щоденно з 9.00 до 12.00 та з 18.00 до 21.00. Неділя - з 9.00 до 12.00.</p>
        <p>
          Мінімальне замовлення по Котовського - 1 бутель <br /> Фонтанка, Крижанівка - від 2
          бутелей
        </p>
        <p>Доставка безкоштовна</p>
        <p>Самовивіз доступний за адресою: м. Одеса, вул. Семена Палія 72</p>

        <div className="flex items-center gap-2 my-4">
          <Image src="/images/money.png" width={24} height={24} alt="payment" />
          <h3 className="text-lg font-semibold">Оплата</h3>
        </div>
        <p>✅ Оплата готівкою при доставці кур&#39;єру</p>
        <p>✅ Безготівковий переказ на рахунок компанії</p>
        <p>✅ Оплата на сайті</p>

        <div className="flex items-center gap-2 my-4">
          <h3 className="text-lg font-semibold">Опис:</h3>
        </div>
        <p>
          Очищена питна вода повністю безпечна для споживання в сирому вигляді, підходить для
          приготування чаю, кави, а також для приготування їжі. Здорова вода пройшла 9 ступенів
          фільтрації включаючи видалення забруднень, бактерій та хімічних сполук. Очищена вода — це
          низькомінералізована вода з ідеальним смаком та якостями.
        </p>
      </div>
    </SectionWrapper>
  );
};
