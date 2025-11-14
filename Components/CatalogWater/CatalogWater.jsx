"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";
import {
  calcWaterPrice,
  calculateOnWaterPagePrice,
} from "@/app/utils/calculateWaterPrice";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import { calcDiscount } from "@/app/utils/discountCalculation";
import { toast } from "react-toastify";

export const CatalogWater = () => {
  const [quantities, setQuantities] = useState({
    normalWater19: 1,
    normalWater13: 2,
    normalWater11: 2,
    mineralWater19: 1,
    mineralWater13: 2,
    mineralWater11: 2,
  });

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
        <div className="wrapperWater">
          <div className="wrapperInfoWater">
            <div className="itemInfoWater">
              <h1 className="itemTitleWater">
                Замовити питну воду в бутлях: Котовського Фонтанка, Крижанівка
              </h1>
              <p className="itemTextWater">
                Наша компанія “Здорова Вода” пропонує замовлення питної води в
                бутлях для жителів Котовського, Фонтанка, Крижанівка. Ми дбаємо
                про те, щоб кожна крапля води, яку ви отримуєте, була
                максимально корисною для вашого організму
              </p>

              <h2 className="itemTitleWater2">
                здорова вода: очищена чи мінералізована?
              </h2>
              <ul className="listInfoWater">
                <li className="itemTextWater">
                  Очищена. 100% безпечна: видалені всі шкідливі приміси та важкі
                  метали. Ідеальна для приготування кави, чаю, їжі
                </li>
                <li className="itemTextWater">
                  Мінералізована. Проходить всі ступені очистки що й очищена
                  вода, але додатково насичена корисними мінералами. Містить
                  оптимальну кількість хлориду натрію та солей натрію, кальцію,
                  магнію. Ідеальна для пиття в сирому вигляді, насичує організм
                  корисними мінералами
                </li>
              </ul>
              <h3 className="itemTitleWater3">Переваги нашої доставки води:</h3>
              <ul className="listInfoWater">
                <li className="itemTextWater">
                  Оперативність - швидко доставляємо воду в будь-який куточок
                  Котовського району.
                </li>
                <li className="itemTextWater">
                  Якість - наша вода відповідає всім нормам та стандартам,
                  гарантуємо чистоту кожної пляшки.
                </li>
                <li className="itemTextWater">
                  Зручність - замовлення здійснюється онлайн або телефоном,
                  зручний графік доставки.
                </li>
              </ul>
              <p className="itemTextWater addClass">
                Ми гарантуємо безпечність води та її відповідність всім
                санітарним нормам. Кожен бутель перед заповненням проходить
                ретельну дезінфекцію, що виключає будь-які ризики для вашого
                здоров&apos;я.
              </p>
            </div>
            <div className="wrapperImgCatalog" id="purifiedWater">
              <Image
                className="imgGirlWaterCatalog"
                src="/blonde-girl-taking-glass-water.png"
                width={440}
                height={280}
                alt="Замовити воду питну в бутлях"
              />
            </div>
          </div>
        </div>

        <div className="wrapperCatalog">
          <ul className="listOfBottles">
            <li className="itemCatalogWater">
              <Link
                className="inline-block"
                href="https://voda-aquatica.od.ua/ochishchennaya-voda"
              >
                <div className="imgBottleCatalog">
                  <Image
                    src="/bottle19L.png"
                    width={102}
                    height={144}
                    alt="Bottle 19L"
                  />
                </div>
              </Link>
              <div className="itemDescriptionPrice">
                <Link
                  className="inline-block"
                  href="https://voda-aquatica.od.ua/ochishchennaya-voda"
                >
                  <p className="itemTitlePureWater">Очищена</p>
                </Link>
                <Link
                  className="inline-block"
                  href="https://voda-aquatica.od.ua/ochishchennaya-voda"
                >
                  <p className="itemTitlePureWater">19Л </p>
                </Link>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
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
                  id="order"
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
              <div className="imgBottleCatalog">
                <Image
                  src="/bottle19L.png"
                  width={102}
                  height={144}
                  alt="Bottle 19L"
                />
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemTitleMineralWater">Мінералізована </p>
                <p className="itemTitleMineralWater">19Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">140.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">120.00 ₴</p>
                <p className="itemPricePerBottle">від 2 до 5 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">110.00 ₴</p>
                <p className="itemPricePerBottle">від 6 до 9 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">100.00 ₴</p>
                <p className="itemPricePerBottle">від 10 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">
                  {calculateOnWaterPagePrice(
                    quantities.mineralWater19,
                    "mineralWater"
                  )}{" "}
                  ₴
                </p>

                <div className="inline-flex gap-2 ">
                  <button
                    type="button"
                    onClick={() => {
                      addWater("mineralWater19", "-");
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
                    {quantities.mineralWater19}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      addWater("mineralWater19", "+");
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
              <div className="wrapperButton">
                <Button
                  id="order"
                  disabled={quantities.mineralWater19 === 0}
                  onClick={() =>
                    addToCart(
                      "mineralWater",
                      quantities.mineralWater19,
                      19,
                      "mineralWater19"
                    )
                  }
                  text="Замовити"
                  className="buttonCatalogWater"
                />
              </div>
            </li>
            <li className="itemCatalogWater">
              <div className="imgBottleCatalog">
                <Image
                  src="/bottle13L.png"
                  width={168}
                  height={120}
                  alt="Bottle 13L"
                />
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemTitlePureWater">Очищена</p>
                <p className="itemTitlePureWater">13Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">75.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle"></p>
                <p className="itemPricePerBottle">мінімум 2 бутлі</p>
              </div>

              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">
                  {quantities.normalWater13 * 75} ₴
                </p>

                <div className="inline-flex gap-2 ">
                  <button
                    disabled={quantities.normalWater13 === 2}
                    type="button"
                    onClick={() => {
                      addWater("normalWater13", "-");
                    }}
                  >
                    {" "}
                    <Image
                      className=""
                      priority
                      src="minus-circle-cart.svg"
                      width={24}
                      height={24}
                      alt="зменшити"
                    />
                  </button>
                  <p className="itemChoseQuantity">
                    {quantities.normalWater13}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      addWater("normalWater13", "+");
                    }}
                  >
                    {" "}
                    <Image
                      className=""
                      priority
                      src="plus-circle-green.svg"
                      width={24}
                      height={24}
                      alt="збільшити"
                    />
                  </button>
                </div>
              </div>
              <div className="wrapperButton">
                <Button
                  id="order"
                  disabled={quantities.normalWater13 === 0}
                  onClick={() =>
                    addToCart(
                      "normalWater",
                      quantities.normalWater13,
                      13,
                      "normalWater13"
                    )
                  }
                  text="Замовити"
                  className="buttonCatalogWater"
                />
              </div>
            </li>
            <li className="itemCatalogWater">
              <div className="imgBottleCatalog">
                <Image
                  src="/bottle13L.png"
                  width={168}
                  height={120}
                  alt="Bottle 13L"
                />
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemTitleMineralWater">Мінералізована </p>
                <p className="itemTitleMineralWater">13Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">80.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle"></p>
                <p className="itemPricePerBottle">мінімум 2 бутлі</p>
              </div>

              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">
                  {quantities.mineralWater13 * 80} ₴
                </p>

                <div className="inline-flex gap-2 ">
                  <button
                    disabled={quantities.mineralWater13 === 2}
                    type="button"
                    onClick={() => {
                      addWater("mineralWater13", "-");
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
                    {quantities.mineralWater13}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      addWater("mineralWater13", "+");
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
              <div className="wrapperButton">
                <Button
                  id="order"
                  disabled={quantities.mineralWater13 === 0}
                  onClick={() =>
                    addToCart(
                      "mineralWater",
                      quantities.mineralWater13,
                      13,
                      "mineralWater13"
                    )
                  }
                  text="Замовити"
                  className="buttonCatalogWater"
                />
              </div>
            </li>
            <li className="itemCatalogWater">
              <div className="imgBottleCatalog">
                <Image
                  src="/bottle11L.png"
                  width={140}
                  height={100}
                  alt="Bottle 11L"
                />
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemTitlePureWater">Очищена</p>
                <p className="itemTitlePureWater">11Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">70.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle"></p>
                <p className="itemPricePerBottle">мінімум 2 бутлі</p>
              </div>

              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">
                  {quantities.normalWater11 * 70} ₴
                </p>

                <div className="inline-flex gap-2 ">
                  <button
                    disabled={quantities.normalWater11 === 2}
                    type="button"
                    onClick={() => {
                      addWater("normalWater11", "-");
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
                    {quantities.normalWater11}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      addWater("normalWater11", "+");
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
              <div className="wrapperButton">
                <Button
                  id="order"
                  disabled={quantities.normalWater11 === 0}
                  onClick={() =>
                    addToCart(
                      "normalWater",
                      quantities.normalWater11,
                      11,
                      "normalWater11"
                    )
                  }
                  text="Замовити"
                  className="buttonCatalogWater"
                />
              </div>
            </li>
            <li className="itemCatalogWater">
              <div className="imgBottleCatalog">
                <Image
                  src="/bottle11L.png"
                  width={140}
                  height={100}
                  alt="Bottle 11L"
                />
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemTitleMineralWater">Мінералізована </p>
                <p className="itemTitleMineralWater">11Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">75.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle"></p>
                <p className="itemPricePerBottle">мінімум 2 бутлі</p>
              </div>

              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">
                  {quantities.mineralWater11 * 75} ₴
                </p>

                <div className="inline-flex gap-2 ">
                  <button
                    disabled={quantities.mineralWater11 === 2}
                    type="button"
                    onClick={() => {
                      addWater("mineralWater11", "-");
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
                    {quantities.mineralWater11}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      addWater("mineralWater11", "+");
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
              <div className="wrapperButton">
                <Button
                  id="order"
                  disabled={quantities.mineralWater11 === 0}
                  onClick={() =>
                    addToCart(
                      "mineralWater",
                      quantities.mineralWater11,
                      11,
                      "mineralWater11"
                    )
                  }
                  text="Замовити"
                  className="buttonCatalogWater"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
