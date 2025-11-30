"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";
import { calculateOnWaterPagePrice } from "@/app/utils/calculateWaterPrice";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import { calcDiscount } from "@/app/utils/discountCalculation";
import { toast } from "react-toastify";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { ProductInfo } from "../ProductInfo/ProductInfo";
import { catalogWaterData, waterQuantities } from "./data";

export const CatalogWater = () => {
  const [quantities, setQuantities] = useState(waterQuantities);

  const addItem = useCartStore((state) => state.addItem);
  const newClient = useCartStore((state) => state.newClient);
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
      discount: newClient ? 0 : calcDiscount(quantity, type, volume),
    });

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: 0,
    }));

    toast.success("Додано до кошика");
  };

  return (
    <>
      <SectionWrapper>
        <ProductInfo
          imageSrc="/blonde-girl-taking-glass-water.png"
          imageAlt="Замовити воду питну в бутлях"
        >
          <h1 className="itemTitleWater">
            Замовити питну воду в бутлях: Котовського Фонтанка, Крижанівка
          </h1>
          <p className="itemTextWater">
            Наша компанія “Здорова Вода” пропонує замовлення питної води в бутлях для жителів
            Котовського, Фонтанка, Крижанівка. Ми дбаємо про те, щоб кожна крапля води, яку ви
            отримуєте, була максимально корисною для вашого організму
          </p>

          <h2 className="itemTitleWater2">здорова вода: очищена чи мінералізована?</h2>
          <ul className="listInfoWater">
            <li className="itemTextWater">
              Очищена. 100% безпечна: видалені всі шкідливі приміси та важкі метали. Ідеальна
              для приготування кави, чаю, їжі
            </li>
            <li className="itemTextWater">
              Мінералізована. Проходить всі ступені очистки що й очищена вода, але додатково
              насичена корисними мінералами. Містить оптимальну кількість хлориду натрію та солей
              натрію, кальцію, магнію. Ідеальна для пиття в сирому вигляді, насичує організм
              корисними мінералами
            </li>
          </ul>
          <h3 className="itemTitleWater3">Переваги нашої доставки води:</h3>
          <ul className="listInfoWater">
            <li className="itemTextWater">
              Оперативність - швидко доставляємо воду в будь-який куточок Котовського району.
            </li>
            <li className="itemTextWater">
              Якість - наша вода відповідає всім нормам та стандартам, гарантуємо чистоту кожної
              пляшки.
            </li>
            <li className="itemTextWater">
              Зручність - замовлення здійснюється онлайн або телефоном, зручний графік доставки.
            </li>
          </ul>
          <p className="itemTextWater addClass">
            Ми гарантуємо безпечність води та її відповідність всім санітарним нормам. Кожен бутель
            перед заповненням проходить ретельну дезінфекцію, що виключає будь-які ризики для вашого
            здоров&apos;я.
          </p>
        </ProductInfo>
        <ul className="listOfBottles">
          {catalogWaterData.map(
            (
              {
                name,
                description,
                price,
                priceFrom2To5,
                priceFrom6To9,
                priceFrom10,
                image,
                volume,
                width,
                height,
                type,
              },
              index,
            ) => {
              const calculatedPrice = calculateOnWaterPagePrice(
                quantities[`${type}${volume}`],
                price,
                priceFrom2To5,
                priceFrom6To9,
                priceFrom10,
              );

              return (
                <li key={index} className="itemCatalogWater">
                  {type === "normalWater" && volume === 19 ? (
                    <Link
                      className="inline-block"
                      href="https://voda-aquatica.od.ua/ochishchennaya-voda"
                    >
                      <div className="imgBottleCatalog">
                        <Image
                          src={image}
                          width={width}
                          height={height}
                          alt={`Bottle ${volume}L`}
                        />
                      </div>
                      <div className="itemDescriptionPrice">
                        <p className="itemTitlePureWater">{name}</p>
                        <p className="itemTitlePureWater">{volume}Л</p>
                      </div>
                    </Link>
                  ) : (
                    <>
                      <div className="imgBottleCatalog">
                        <Image
                          src={image}
                          width={width}
                          height={height}
                          alt={`Bottle ${volume}L`}
                        />
                      </div>
                      <div className="itemDescriptionPrice">
                        <p
                          className={
                            type === "normalWater" ? "itemTitlePureWater" : "itemTitleMineralWater"
                          }
                        >
                          {name}
                        </p>
                        <p
                          className={
                            type === "normalWater" ? "itemTitlePureWater" : "itemTitleMineralWater"
                          }
                        >
                          {volume}Л
                        </p>
                      </div>
                    </>
                  )}
                  <div className="itemDescriptionPrice">
                    <p className="itemSubTitle">{description}</p>
                  </div>
                  <div className="itemDescriptionPrice">
                    <p className="itemPricePerBottle">{price}.00 ₴</p>
                    <p className="itemPricePerBottle">за 1 шт</p>
                  </div>
                  {priceFrom2To5 && (
                    <div className="itemDescriptionPrice">
                      <p className="itemPricePerBottle">{priceFrom2To5}.00 ₴</p>
                      <p className="itemPricePerBottle">від 2 до 5 шт</p>
                    </div>
                  )}
                  {priceFrom6To9 && (
                    <div className="itemDescriptionPrice">
                      <p className="itemPricePerBottle">{priceFrom6To9}.00 ₴</p>
                      <p className="itemPricePerBottle">від 6 до 9 шт</p>
                    </div>
                  )}
                  {priceFrom10 && (
                    <div className="itemDescriptionPrice">
                      <p className="itemPricePerBottle">{priceFrom10}.00 ₴</p>
                      <p className="itemPricePerBottle">від 10 шт</p>
                    </div>
                  )}
                  {!priceFrom2To5 && (
                    <div className="itemDescriptionPrice">
                      <p className="itemPricePerBottle"></p>
                      <p className="itemPricePerBottle">мінімум 2 бутлі</p>
                    </div>
                  )}
                  <div className="itemDescriptionPrice">
                    <p className="itemChoseQuantity">{calculatedPrice}.00 ₴</p>

                    <div className="inline-flex gap-2 ">
                      <button
                        type="button"
                        disabled={
                          quantities[`${type}${volume}`] < waterQuantities[`${type}${volume}`]
                        }
                        onClick={() => {
                          addWater(`${type}${volume}`, "-");
                        }}
                      >
                        <Image
                          className={
                            quantities[`${type}${volume}`] < waterQuantities[`${type}${volume}`]
                              ? "block"
                              : "hidden"
                          }
                          priority
                          src={"minus-circle-cart.svg"}
                          width={24}
                          height={24}
                          alt="logo"
                        />
                        <Image
                          className={
                            quantities[`${type}${volume}`] >= waterQuantities[`${type}${volume}`]
                              ? "block"
                              : "hidden"
                          }
                          priority
                          src={"minus-circle-cart-green.svg"}
                          width={24}
                          height={24}
                          alt="logo"
                        />
                      </button>
                      <p className="itemChoseQuantity">{quantities[`${type}${volume}`]}</p>
                      <button
                        type="button"
                        onClick={() => {
                          addWater(`${type}${volume}`, "+");
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
                  <div className="wrapperButton" id={type}>
                    <Button
                      id="order"
                      disabled={quantities[`${type}${volume}`] === 0}
                      onClick={() =>
                        addToCart(
                          type,
                          quantities[`${type}${volume}`],
                          volume,
                          `${type}${volume}`,
                          price,
                        )
                      }
                      text="Замовити"
                      className="buttonCatalogWater"
                    />
                  </div>
                </li>
              );
            },
          )}
        </ul>
      </SectionWrapper>
    </>
  );
};
