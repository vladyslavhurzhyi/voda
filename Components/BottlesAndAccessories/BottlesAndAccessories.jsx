"use client";
import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import { BottlesAndAccessoriesData } from "./data";
import { toast } from "react-toastify";

export const BottlesAndAccessories = () => {
  const addProductToCart = useCartStore((state) => state.addProduct);

  const handleClick = (item) => {
    addProductToCart(item);
    toast.success("Додано до кошика");
  };

  return (
    <section className="sectionBottles pt-[100px]">
      <div className="wrapperSectionBottles">
        <div className="wrapperBottle">
          <div className="wrapperInfoBottle">
            <div className="itemInfoBottle">
              <p className="itemTitleBottle pt-10">Бутлі та аксесуари</p>
              <ul className="listInfoBottle">
                <li className="itemTextBottle">
                  Бутлі представляють собою зручні контейнери, що забезпечують
                  можливість надійного зберігання та перенесення води.
                  При замовленні Здорової Води, ви можете їх також придбати і
                  обмінювати при наступних замовленнях вже не витрачаючи коштів.
                  А для Вашої зручності ми також приймаємо на обмін
                  полікарбонатні бутлі інших компаній, тож легко переходьте
                  на Здорову Воду!
                </li>
                <li className="itemTextBottle">
                  Також пропонуємо Вашій увазі аксесуари для зручності: ручки
                  для переноски бутлей, лійки, пробки та крани-клапани.
                </li>
              </ul>
            </div>
            <div className="wrapperImg ">
              <Image
                className="imgBottleWater"
                src="/bottleWithWater.png"
                width={640}
                height={408}
                alt="Bottle with water"
              />
            </div>
          </div>
        </div>

        <div className="wrapperCatalogBottle">
          <ul className="listOfBottlesAndAccess">
            {BottlesAndAccessoriesData.map((item, index) => {
              return (
                <li key={index} className="itemCatalogBottlesAccess">
                  <div className="imgBottleCatalog">
                    <Image
                      src={item.image}
                      width={item.width}
                      height={item.height}
                      alt={item.name}
                    />
                  </div>
                  <div className="itemDescription">
                    <p className="itemTitle">{item.name}</p>
                    <p className="itemTitle">{item.volume}л </p>
                  </div>
                  <div className="itemDescriptionSub">
                    <p className="itemSubTitle">{item.description}</p>
                  </div>

                  <div className="itemDescripPrice">
                    <p className="itemPriceUnit">{item.price} ₴</p>
                  </div>
                  <div className="wrapperButton">
                    <Button
                      onClick={() => handleClick(item)}
                      text="Замовити"
                      className="buttonBottles"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
