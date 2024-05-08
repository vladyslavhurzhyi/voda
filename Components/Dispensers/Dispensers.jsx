"use client";
import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import { DispensersData } from "./data";
import { toast } from "react-toastify";

export const Dispensers = () => {
  const addProductToCart = useCartStore((state) => state.addProduct);

  const handleClick = (item) => {
    addProductToCart(item);
    toast.success("Додано до кошика");
  };
  return (
    <section className="sectionDispenser pt-[100px]">
      <div className="wrapperSectionDispenser">
        
          <div className="wrapperInfoDispenser">
            <div className="itemInfoDispenser">
              <p className="itemTitleDispenser pt-10">диспенсери</p>
              <ul className="listInfoDispenser">
                <li className="itemTextDispenser">
                  Диспенсери є чудовим рішенням для повсякденної зручності. Вони
                  прості у використанні, забезпечують швидкий доступ до води
                  без необхідності підіймання важких пляшок чи
                  встановлення кулерів, мають сучасний та естетичний дизайн.
                </li>
              </ul>
            </div>
            <div className="wrapperImgDispenser">
              <Image
                className="imgWaterDispenser"
                src="/waterDispenser.png"
                width={640}
                height={408}
                alt="Water Dispenser"
              />
            </div>
          </div>
       

        <div className="wrapperCatalogDispenser">
          <ul className="listOfDispenser">
            {DispensersData.map((item, index) => {
              return (
                <li key={index} className="itemCatalogDispenser">
                  <div className="imgCatalogDispenser">
                    <Image
                      src={item.image}
                      width={item.width}
                      height={item.height}
                      alt={item.description}
                    />
                  </div>
                  <div className="itemDescriptionDispenser">
                    <p className="itemTitleMainDispenser">{item.name}</p>
                    <p className="itemTitleMainDispenser">{item.volume}л </p>
                  </div>
                  <div className="itemDescriptionSubDispenser">
                    <p className="itemSubTitleDispenser">{item.description}</p>
                  </div>

                  <div className="itemDescripPriceDispenser">
                    <p className="itemPriceUnitDispenser">{item.price} ₴</p>
                  </div>
                  <div className="wrapperButtonDispenser">
                    <Button
                      onClick={() => handleClick(item)}
                      text="Замовити"
                      className="buttonBottlesDispenser"
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
