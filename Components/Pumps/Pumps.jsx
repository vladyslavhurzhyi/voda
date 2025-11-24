'use client';
import './styles.css';
import { pumpsData } from './pumpsData';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { ProductList } from '../ProductList/ProductList';

export const Pumps = () => (
  <SectionWrapper>
    <ProductInfo imageSrc="/waterPump.png" imageAlt="помпа для води">
      <h1 className="itemTitlePumps">
        Помпи для питної води в бутлях та інші аксесуари Котовського, Фонтанка, Крижанівка
      </h1>
      <ul className="listInfoPumps">
        <li className="itemTextPumps">
          Це пристрій, який спрощує процес використання бутлів з водою чи іншими напоями. Вона
          забезпечує легкий доступ до води без необхідності піднімання чи переливання важких бутлів,
          що робить використання зручним та ефективним. На нашому сайті до вибору запропоновані
          прості механічні помпи або надзручні електричні.
        </li>
        <li className="itemTextPumps">
          Також пропонуємо Вашій увазі аксесуари для зручності: ручки для переноски бутлей, лійки,
          пробки та крани-клапани.
        </li>
        <li className="itemTextPumps">
          Легкі та зручні у використанні Помпи за доступними цінами на сайті “Здорова Вода”.
        </li>
      </ul>
      <h2 className="itemTitlePumps2">Види помп для води</h2>
    </ProductInfo>
    <ProductList list={pumpsData} />
  </SectionWrapper>
);
