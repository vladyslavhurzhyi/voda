'use client';
import './styles.css';
import { BottlesAndAccessoriesData } from './data';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { ProductList } from '../ProductList/ProductList';

export const BottlesAndAccessories = () => (
  <SectionWrapper>
    <ProductInfo
      imageSrc={'/bottleWithWater.png'}
      imageAlt={'якісна вода в бутлях Котовського, Фонтанка, Крижанівка, Поскот.'}
    >
      <h1 className="itemTitleBottle">Купити воду в бутлях Котовського, Фонтанка, Крижанівка</h1>
      <ul className="listInfoBottle">
        <li className="itemTextBottle">
          Бутлі представляють собою зручні контейнери, що забезпечують можливість надійного
          зберігання та перенесення води. При замовленні Здорової Води, ви можете їх також придбати
          і обмінювати при наступних замовленнях вже не витрачаючи коштів. А для Вашої зручності
          ми також приймаємо на обмін полікарбонатні бутлі інших компаній, тож легко переходьте
          на Здорову Воду!
        </li>
        <li className="itemTextBottle">
          Також пропонуємо Вашій увазі аксесуари для зручності: ручки для переноски бутлей, лійки,
          пробки та крани-клапани.
        </li>
        <li className="itemTextBottle">
          <span className="OrderWater">Як замовити воду? </span> Це просто! Залиште заявку на сайті
          або зателефонуйте нам, і ми доставимо воду в зручний для вас час.
        </li>
      </ul>
    </ProductInfo>
    <ProductList list={BottlesAndAccessoriesData} />
  </SectionWrapper>
);
