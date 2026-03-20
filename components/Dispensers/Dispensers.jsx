'use client';
import './styles.css';
import { DispensersData } from './data';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { ProductList } from '../ProductList/ProductList';

export const Dispensers = () => (
  <SectionWrapper>
    <ProductInfo imageSrc="/waterDispenser.png" imageAlt="дешевий диспенсер">
      <h1 className="itemTitleDispenser">
        Диспенсери для питної води в бутлях: Котовського, Фонтанка, Крижанівка
      </h1>
      <ul className="listInfoDispenser">
        <li className="itemTextDispenser">
          Диспенсери для питної води — це пристрої, які дозволяють зручно та гігієнічно розливати
          воду з бутлів. Вони ідеально підходять як для офісного, так і для домашнього використання,
          забезпечуючи легкий доступ до холодної або гарячої води залежно від моделі.
        </li>
        <li className="itemTextDispenser">
          Диспенсери є чудовим рішенням для повсякденної зручності. Вони прості у використанні,
          забезпечують швидкий доступ до води без необхідності підіймання важких пляшок чи
          встановлення кулерів, мають сучасний та естетичний дизайн.
        </li>
      </ul>

      <ul className="listInfoDispenser">
        Переваги використання диспенсерів:
        <li className="itemTextDispenser">
          Зручність - з диспенсером не потрібно підіймати важкі бутлі або використовувати помпи, що
          робить процес отримання води легким і комфортним.
        </li>
        <li className="itemTextDispenser">
          Гігієнічність - диспенсери зберігають воду від потрапляння пилу і бруду, що забезпечує її
          чистоту та безпечність для здоров&apos;я.
        </li>
        <li className="itemTextDispenser">
          Економія часу - диспенсери забезпечують швидкий доступ до води, що особливо важливо в
          офісах та громадських місцях.
        </li>
      </ul>
      <h2 className="itemTitleDispenser2 pt-10">
        Замовляйте Диспенсери за найкращими цінами на сайті &ldquo;Здорова Вода&rdquo;
      </h2>
      <p className="itemTextDispenser">
        Замовляйте якісні диспенсери для питної води у нас з доставкою до Котовського, Фонтанка,
        Крижанівка та насолоджуйтесь зручним доступом до чистої води щодня
      </p>
    </ProductInfo>
    <ProductList list={DispensersData} />
  </SectionWrapper>
);
