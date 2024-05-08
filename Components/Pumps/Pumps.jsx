"use client";
import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";
import { pumpsData } from "./pumpsData";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import { toast } from "react-toastify";

export const Pumps = () => {
  const addProductToCart = useCartStore((state) => state.addProduct);

  const handleClick = (item) => {
    addProductToCart(item);
    toast.success("Додано до кошика");
  };

  return (
    <section className="sectionPumps pt-[100px]">
      <div className="wrapperSectionPumps">
        <div className="wrapperInfoPumps">
          <div className="itemInfoPumps">
            <p className="itemTitlePumps pt-10">Помпи</p>
            <ul className="listInfoPumps">
              <li className="itemTextPumps">
                Це пристрій, який спрощує процес використання бутлів з водою
                чи іншими напоями. Вона забезпечує легкий доступ до води
                без необхідності піднімання чи переливання важких бутлів,
                що робить використання зручним та ефективним. На нашому сайті
                до вибору запропоновані прості механічні помпи або надзручні
                електричні.
              </li>
              <li className="itemTextPumps">
                Також пропонуємо Вашій увазі аксесуари для зручності: ручки для
                переноски бутлей, лійки, пробки та крани-клапани.
              </li>
            </ul>
          </div>
          <div className="wrapperImgPump">
            <Image
              className="imgWaterPump"
              src="/waterPump.png"
              width={640}
              height={408}
              alt="Water Pump"
            />
          </div>
        </div>

        <div className="wrapperCatalogPumps">
          <ul className=" listOfPumps">
            {pumpsData.map((item, index) => {
              return (
                <li key={index} className="itemCatalogPumps">
                  <div className="imgCatalogPumps">
                    <Image
                      src={item.image}
                      width={item.width}
                      height={item.height}
                      alt={item.name}
                    />
                  </div>
                  <div className="itemDescriptionPumps">
                    <p className="itemTitleMainPumps">{item.name}</p>
                  </div>
                  <div className="itemDescriptionSubPumps">
                    <p className="itemSubTitlePumps">{item.description}</p>
                  </div>

                  <div className="itemDescripPricePumps">
                    <p className="itemPriceUnitPump">{item.price} ₴</p>
                  </div>
                  <div className="wrapperButtonPumps">
                    <Button
                      onClick={() => handleClick(item)}
                      text="Замовити"
                      className="buttonBottlesPumps"
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
