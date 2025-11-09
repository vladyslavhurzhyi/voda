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
            <h1 className="itemTitleDispenser pt-10">
              Диспенсери для питної води в бутлях: Котовського, Фонтанка,
              Крижанівка
            </h1>
            <ul className="listInfoDispenser">
              <li className="itemTextDispenser">
                Диспенсери для питної води — це пристрої, які дозволяють зручно
                та гігієнічно розливати воду з бутлів. Вони ідеально підходять
                як для офісного, так і для домашнього використання, забезпечуючи
                легкий доступ до холодної або гарячої води залежно від моделі.
              </li>
              <li className="itemTextDispenser">
                Диспенсери є чудовим рішенням для повсякденної зручності. Вони
                прості у використанні, забезпечують швидкий доступ до води
                без необхідності підіймання важких пляшок чи
                встановлення кулерів, мають сучасний та естетичний дизайн.
              </li>
            </ul>

            <ul className="listInfoDispenser">
              Переваги використання диспенсерів:
              <li className="itemTextDispenser">
                Зручність - з диспенсером не потрібно підіймати важкі бутлі або
                використовувати помпи, що робить процес отримання води легким і
                комфортним.
              </li>
              <li className="itemTextDispenser">
                Гігієнічність - диспенсери зберігають воду від потрапляння пилу
                і бруду, що забезпечує її чистоту та безпечність для
                здоров&apos;я.
              </li>
              <li className="itemTextDispenser">
                Економія часу - диспенсери забезпечують швидкий доступ до води,
                що особливо важливо в офісах та громадських місцях.
              </li>
            </ul>
            <h2 className="itemTitleDispenser2 pt-10">
              Замовляйте Диспенсери за найкращими цінами на сайті &ldquo;Здорова
              Вода&rdquo;
            </h2>
            <p className="itemTextDispenser">
              Замовляйте якісні диспенсери для питної води у нас з доставкою до
              Котовського, Фонтанка, Крижанівка та насолоджуйтесь зручним
              доступом до чистої води щодня
            </p>
          </div>
          <div className="wrapperImgDispenser">
            <Image
              className="imgWaterDispenser"
              src="/waterDispenser.png"
              width={440}
              height={280}
              alt="дешевий диспенсер"
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
                      id="order"
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
