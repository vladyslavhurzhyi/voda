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
            <p className="itemTitleBottleCover">чохли</p>
            <ul className="listInfoBottleCover">
              <li className="itemTextBottleCover">
                Чохли для бутлів— стильний аксесуар та захист від сонячних
                променів і подряпин.
              </li>
              <li className="itemTextBottleCover">
                Він може зробити Ваш бутиль яскравим акцентом або навпаки
                непримітним в інтер&apos;єрі.
              </li>
              <li className="itemTextBottleCover">
                Чохол дуже зручний у використанні. Легко надівається зверху,
                якщо ваш бутиль стоїть на столі, якщо ж ви використовуєте
                підлоговий кулер чохол виготовляємо з дном. Можна нанести на
                чохол назву вашого бренда, логотип фірми тощо.
              </li>
              <li className="itemTextBottleCover">
                Наш асортимент постійно оновлюється, тому для вибору потрібного
                кольору чи дизайну, будь ласка, залиште замовлення, і наш
                менеджер зв&apos;яжеться з вами.
              </li>
            </ul>
          </div>
          <div className="wrapperImg">
            <Image
              className="imgBottleCover"
              src="/bottleCover.png"
              width={640}
              height={408}
              alt="Bottle Cover"
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
