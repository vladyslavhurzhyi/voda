"use client";
import "./styles.css";
import { BottleCoverData } from "./data";
import { ProductList } from "../ProductList/ProductList";
import { ProductInfo } from "../ProductInfo/ProductInfo";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { ProductTypography } from "../ProductTypography/ProductTypography";

export const BottleCover = () => (
  <SectionWrapper>
    <ProductInfo imageSrc={"/bottleCover.png"} imageAlt={"Купити чохли на бутлі в Україні"}>
      <ProductTypography
        variant="h1"
        text="Чохли для бутлів з питної води 19 літрів: захист та комфорт"
      />
      <ul className="listInfoBottleCover">
        <li>
          <ProductTypography
            text="На сайті &ldquo;Здорова Вода&rdquo; ви знайдете широкий асортимент питної води в бутлях та
          чохлів для бутлів, які допоможуть гармонійно доповнити будь-який інтер'єр, хоч то
          офіс хоч житлове приміщення."
          />
        </li>
        <li>
          <ProductTypography
            text="Чохол дуже зручний у використанні. Легко надівається зверху, якщо ваш бутиль стоїть на
          столі, якщо ж ви використовуєте підлоговий кулер чохол виготовляємо з дном. Можна нанести
          на чохол назву вашого бренда, логотип фірми тощо. Він може зробити Ваш бутиль яскравим
          акцентом або навпаки непримітним в інтер'єрі."
          />
        </li>
      </ul>
      <ul>
        <ProductTypography variant="h3" text="Переваги чохлів:" />
        <li>
          <ProductTypography
            text="Стильний аксесуар - це не лише практичний аксесуар, але й стильний елемент для вашого
          інтер'єру."
          />
        </li>
        <li>
          <ProductTypography
            text="Захист - чохли для бутлів забезпечують захист бутлів від пилу, бруду та впливу сонячних
          променів, що допомагає зберегти якість води на довший час."
          />
        </li>
      </ul>
      <ProductTypography
        text="Замовляйте воду та чохли для бутлів у нас та насолоджуйтеся якісним продуктом щодня! Наш
        асортимент постійно оновлюється, тому для вибору потрібного кольору чи дизайну, будь ласка,
        залиште замовлення, і наш менеджер зв'яжеться з вами."
      />
    </ProductInfo>
    <ProductList list={BottleCoverData} />
  </SectionWrapper>
);
