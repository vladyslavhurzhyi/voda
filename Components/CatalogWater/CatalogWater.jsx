"use client";
import { useState } from "react";
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
              <p className="itemTitleWater ">
                здорова вода: очищена чи мініралізована?
              </p>
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
            </div>
            <div className="wrapperImgCatalog" id="purifiedWater">
              <Image
                className="imgGirlWaterCatalog"
                src="/blonde-girl-taking-glass-water.png"
                width={640}
                height={408}
                alt="Water"
              />
            </div>
          </div>
        </div>

        <div className="wrapperCatalog">
          <ul className="listOfBottles">
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
                <p className="itemTitlePureWater">Очищена</p>
                <p className="itemTitlePureWater">19Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">105.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">85.00 ₴</p>
                <p className="itemPricePerBottle">від 2 до 5 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">75.00 ₴</p>
                <p className="itemPricePerBottle">від 6 до 9 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">70.00 ₴</p>
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
                <p className="itemPricePerBottle">120.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">95.00 ₴</p>
                <p className="itemPricePerBottle">від 2 до 5 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">85.00 ₴</p>
                <p className="itemPricePerBottle">від 6 до 9 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">75.00 ₴</p>
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
                <p className="itemPricePerBottle">60.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle"></p>
                <p className="itemPricePerBottle">мінімум 2 бутлі</p>
              </div>

              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">
                  {quantities.normalWater13 * 60} ₴
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
                <p className="itemPricePerBottle">65.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle"></p>
                <p className="itemPricePerBottle">мінімум 2 бутлі</p>
              </div>

              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">
                  {quantities.mineralWater13 * 65} ₴
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
                <p className="itemPricePerBottle">55.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle"></p>
                <p className="itemPricePerBottle">мінімум 2 бутлі</p>
              </div>

              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">
                  {quantities.normalWater11 * 55} ₴
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
                <p className="itemPricePerBottle">60.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle"></p>
                <p className="itemPricePerBottle">мінімум 2 бутлі</p>
              </div>

              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">
                  {quantities.mineralWater11 * 60} ₴
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
