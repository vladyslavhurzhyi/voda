"use client";
import "./styles.css";
import { pumpsData } from "./pumpsData";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { ProductInfo } from "../ProductInfo/ProductInfo";
import { ProductList } from "../ProductList/ProductList";
import { ProductTypography } from "../ProductTypography/ProductTypography";

export const Pumps = () => (
  <SectionWrapper>
    <ProductInfo imageSrc="/waterPump.png" imageAlt="помпа для води">
      <ProductTypography
        variant="h1"
        text="Помпи для питної води в бутлях та інші аксесуари Котовського, Фонтанка, Крижанівка"
      />
      <ul className="listInfoPumps">
        <li>
          <ProductTypography
            text="Це пристрій, який спрощує процес використання бутлів з водою чи іншими напоями. Вона
          забезпечує легкий доступ до води без необхідності піднімання чи переливання важких бутлів,
          що робить використання зручним та ефективним. На нашому сайті до вибору запропоновані
          прості механічні помпи або надзручні електричні."
          />
        </li>
        <li>
          <ProductTypography
            text="Також пропонуємо Вашій увазі аксесуари для зручності: ручки для переноски бутлей, лійки,
          пробки та крани-клапани."
          />
        </li>
        <li>
          <ProductTypography text="Легкі та зручні у використанні Помпи за доступними цінами на сайті “Здорова Вода”." />
        </li>
      </ul>
      <ProductTypography variant="h3" text="Види помп для води" />
    </ProductInfo>
    <ProductList list={pumpsData} />
  </SectionWrapper>
);
