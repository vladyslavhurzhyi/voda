'use client';
import './styles.css';
import { BottleCoverData } from './data';
import { ProductList } from '../ProductList/ProductList';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

export const BottleCover = () => (
  <SectionWrapper>
    <ProductInfo imageSrc={'/bottleCover.png'} imageAlt={'Купити чохли на бутлі в Україні'}>
      <h1 className="itemTitleBottleCover">
        Чохли для бутлів з питної води 19 літрів: захист та комфорт
      </h1>
      <ul className="listInfoBottleCover">
        <li className="itemTextBottleCover">
          На сайті &ldquo;Здорова Вода&rdquo; ви знайдете широкий асортимент питної води в бутлях та
          чохлів для бутлів, які допоможуть гармонійно доповнити будь-який інтер&apos;єр, хоч то
          офіс хоч житлове приміщення.
        </li>
        <li className="itemTextBottleCover">
          Чохол дуже зручний у використанні. Легко надівається зверху, якщо ваш бутиль стоїть на
          столі, якщо ж ви використовуєте підлоговий кулер чохол виготовляємо з дном. Можна нанести
          на чохол назву вашого бренда, логотип фірми тощо. Він може зробити Ваш бутиль яскравим
          акцентом або навпаки непримітним в інтер&apos;єрі.
        </li>
      </ul>
      <ul>
        <span className="perevagy">Переваги чохлів:</span>
        <li className="itemTextBottleCover">
          Стильний аксесуар - це не лише практичний аксесуар, але й стильний елемент для вашого
          інтер&apos;єру.
        </li>
        <li className="itemTextBottleCover">
          Захист - чохли для бутлів забезпечують захист бутлів від пилу, бруду та впливу сонячних
          променів, що допомагає зберегти якість води на довший час.
        </li>
      </ul>
      <p className="itemTextBottleCover">
        Замовляйте воду та чохли для бутлів у нас та насолоджуйтеся якісним продуктом щодня! Наш
        асортимент постійно оновлюється, тому для вибору потрібного кольору чи дизайну, будь ласка,
        залиште замовлення, і наш менеджер зв&apos;яжеться з вами.
      </p>
    </ProductInfo>
    <ProductList list={BottleCoverData} />
  </SectionWrapper>
);
