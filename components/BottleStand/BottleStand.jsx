"use client";
import "./styles.css";
import { bottleStandData } from "./bottleStandData";
import { ProductList } from "../ProductList/ProductList";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { ProductInfo } from "../ProductInfo/ProductInfo";
import { ProductTypography } from "../ProductTypography/ProductTypography";

export const BottleStand = () => (
  <SectionWrapper>
    <ProductInfo imageSrc={"/waterStand.png"} imageAlt={"Подставка под бутыль с водой aquatica"}>
      <ProductTypography
        variant="h1"
        text="Підставки для бутлів зручність для вашого простору: Котовського, Фонтанка, Крижанівка"
      />
      <ul className="listInfoStand">
        <li>
          <ProductTypography
            text="На сайті &ldquo;Здорова Вода&rdquo; ви можете замовити підставки для бутлів, які
          забезпечать зручне та безпечне розташування води у вашому домі чи офісі."
          />
        </li>
        <li>
          <ProductTypography
            text="Підставки для бутлів — це практичне рішення для організації простору, забезпечують порядок
          та зручний доступ до напоїв, мінімізують ризик перекидання чи розливання рідини,
          дозволяють естетично впорядкувати приміщення та підкреслити його стиль."
          />
        </li>
        <li>
          <ProductTypography
            text="Підставки дозволяють оптимально використовувати простір, запобігають прокидання бутлів, і
          роблять користування водою комфортнішим."
          />
        </li>
      </ul>
      <ProductTypography
        variant="h2"
        text="Підставки та Стелажі для пляшок на сайті &ldquo;Здорова Вода&rdquo;"
      />
      <ul className="listInfoStand">
        <li>
          <ProductTypography
            text="Ми пропонуємо різні моделі підставок, які підходять для будь-якого інтер'єру та
          відповідають вашим потребам. Незалежно від того, чи потрібна вам підставка для одного
          бутля або для декількох, на сайті &ldquo;Здорова Вода&rdquo; ви знайдете те, що шукаєте."
          />
        </li>
        <li>
          <ProductTypography
            text="Замовляйте підставки для бутлів: Котовського, Фонтанка, Крижанівка з доставкою прямо до
          вашого дому або офісу. Ваша зручність - наш пріоритет!"
          />
        </li>
      </ul>
    </ProductInfo>
    <ProductList list={bottleStandData} />
  </SectionWrapper>
);
