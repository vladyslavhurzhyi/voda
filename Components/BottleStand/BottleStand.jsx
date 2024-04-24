"use client";
import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";
import { bottleStandData } from "./bottleStandData";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import { toast } from "react-toastify";

export const BottleStand = () => {
  const addProductToCart = useCartStore((state) => state.addProduct);

  const handleClick = (item) => {
    addProductToCart(item);
    toast.success("Додано до кошика");
  };

  return (
    <section className="sectionStand pt-[100px]">
      <div className="wrapperSectionStand">
        <div className="wrapperStand">
          <div className="wrapperInfoStand">
            <div className="itemInfoStand">
              <p className="itemTitleStand pt-10">підставки для бутлів</p>
              <ul className="listInfoStand">
                <li className="itemTextStand">
                  Підставки для бутлів — це практичне рішення для організації
                  простору, забезпечують порядок та зручний доступ до напоїв,
                  мінімізують ризик перекидання чи розливання рідини, дозволяють
                  естетично впорядкувати приміщення та підкреслити його стиль.
                </li>
              </ul>
            </div>
            <div className="wrapperImgStand">
              <Image
                className="imgWaterStand"
                src="/waterStand.png"
                width={640}
                height={408}
                alt="Water Stand"
              />
            </div>
          </div>
        </div>

        <div className="wrapperCatalogStand">
          <ul className="listOfStand">
            {bottleStandData.map((item, index) => {
              return (
                <li key={index} className="itemCatalogStand">
                  <div className="imgCatalogStand">
                    <Image
                      src={item.image}
                      width={item.width}
                      height={item.height}
                      alt={item.image}
                    />
                  </div>
                  <div className="itemDescriptionStand">
                    <p className="itemTitleMainStand">{item.name}</p>
                  </div>
                  <div className="itemDescriptionSubStand">
                    <p className="itemSubTitleStand">{item.description}</p>
                  </div>

                  <div className="itemDescripPriceStand">
                    <p className="itemPriceUnitStand">{item.price} ₴</p>
                  </div>
                  <div className="wrapperButtonStand">
                    <Button
                      onClick={() => handleClick(item)}
                      text="Замовити"
                      className="buttonOrderStand"
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
