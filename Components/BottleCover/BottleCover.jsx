"use client";
import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import { toast } from "react-toastify";
import { BottleCoverData } from "./data";

export const BottleCover = () => {
  const addProductToCart = useCartStore((state) => state.addProduct);

  const handleClick = (item) => {
    addProductToCart(item);
    toast.success("Додано до кошика");
  };

  return (
    <section className="sectionBottleCover">
      <div className="wrapperSectionBottleCover">
        <div className="wrapperInfoBottleCover">
          <div className="itemInfoBottleCover">
            <h1 className="itemTitleBottleCover">
              Чохли для бутлів з питної води 19 літрів: захист та комфорт
            </h1>
            <ul className="listInfoBottleCover">
              <li className="itemTextBottleCover">
                На сайті &ldquo;Здорова Вода&rdquo; ви знайдете широкий
                асортимент питної води в бутлях та чохлів для бутлів, які
                допоможуть гармонійно доповнити будь-який інтер&apos;єр, хоч то
                офіс хоч житлове приміщення.
              </li>
              <li className="itemTextBottleCover">
                Чохол дуже зручний у використанні. Легко надівається зверху,
                якщо ваш бутиль стоїть на столі, якщо ж ви використовуєте
                підлоговий кулер чохол виготовляємо з дном. Можна нанести на
                чохол назву вашого бренда, логотип фірми тощо. Він може зробити
                Ваш бутиль яскравим акцентом або навпаки непримітним в
                інтер&apos;єрі.
              </li>
            </ul>
            <ul>
              <span className="perevagy">Переваги чохлів:</span>
              <li className="itemTextBottleCover">
                Стильний аксесуар - це не лише практичний аксесуар, але й
                стильний елемент для вашого інтер&apos;єру.
              </li>
              <li className="itemTextBottleCover">
                Захист - чохли для бутлів забезпечують захист бутлів від пилу,
                бруду та впливу сонячних променів, що допомагає зберегти якість
                води на довший час.
              </li>
            </ul>
            <p className="itemTextBottleCover">
              Замовляйте воду та чохли для бутлів у нас та насолоджуйтеся
              якісним продуктом щодня! Наш асортимент постійно оновлюється, тому
              для вибору потрібного кольору чи дизайну, будь ласка, залиште
              замовлення, і наш менеджер зв&apos;яжеться з вами.
            </p>
          </div>
          <div className="wrapperImg">
            <Image
              className="imgBottleCover"
              src="/bottleCover.png"
              width={640}
              height={408}
              alt="Купити чохли на бутлі в Україні"
            />
          </div>
        </div>

        <div className="wrapperCatalogBottleCover">
          <ul className="listOfBottleCover">
            {BottleCoverData.map((item, index) => {
              return (
                <li key={index} className="itemCatalogBottleCover">
                  <div className="imgBottleCoverCatalog">
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
                    <p className="itemSubTitle">{item.description} </p>
                  </div>

                  <div className="itemDescripPrice">
                    <p className="itemPriceUnit">{item.price} ₴</p>
                  </div>
                  <div className="wrapperButton">
                    <Button
                      onClick={() => handleClick(item)}
                      text="Замовити"
                      className="buttonBottleCover"
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
