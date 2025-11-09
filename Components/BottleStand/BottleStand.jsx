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
    <section className="sectionStand">
      <div className="wrapperSectionStand">
        <div className="wrapperInfoStand">
          <div className="itemInfoStand">
            <h1 className="itemTitleStand">
              Підставки для бутлів зручність для вашого простору: Котовського,
              Фонтанка, Крижанівка
            </h1>
            <ul className="listInfoStand">
              <li className="itemTextStand">
                На сайті &ldquo;Здорова Вода&rdquo; ви можете замовити підставки
                для бутлів, які забезпечать зручне та безпечне розташування води
                у вашому домі чи офісі.
              </li>
              <li className="itemTextStand">
                Підставки для бутлів — це практичне рішення для організації
                простору, забезпечують порядок та зручний доступ до напоїв,
                мінімізують ризик перекидання чи розливання рідини, дозволяють
                естетично впорядкувати приміщення та підкреслити його стиль.
              </li>
              <li className="itemTextStand">
                Підставки дозволяють оптимально використовувати простір,
                запобігають прокидання бутлів, і роблять користування водою
                комфортнішим.
              </li>
            </ul>
            <h2 className="itemTitleStand2">
              Підставки та Стелажі для пляшок на сайті &ldquo;Здорова
              Вода&rdquo;
            </h2>
            <ul className="listInfoStand">
              <li className="itemTextStand">
                Ми пропонуємо різні моделі підставок, які підходять для
                будь-якого інтер&apos;єру та відповідають вашим потребам.
                Незалежно від того, чи потрібна вам підставка для одного бутля
                або для декількох, на сайті &ldquo;Здорова Вода&rdquo; ви
                знайдете те, що шукаєте.
              </li>
              <li className="itemTextStand">
                Замовляйте підставки для бутлів: Котовського, Фонтанка,
                Крижанівка з доставкою прямо до вашого дому або офісу. Ваша
                зручність - наш пріоритет!
              </li>
            </ul>
          </div>
          <div className="wrapperImgStand">
            <Image
              className="imgWaterStand"
              src="/waterStand.png"
              width={640}
              height={408}
              alt="Подставка под бутыль с водой aquatica"
            />
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
                      id="order"
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
