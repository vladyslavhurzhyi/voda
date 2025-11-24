'use client';
import Image from 'next/image';
import './styles.css';

import { useRef, useState } from 'react';
import { useCartStore } from '@/app/zustand/cartState/cartState';
import { toast } from 'react-toastify';
import { CoolersData } from './data';
import Button from '../Button/Button';
import { WaterCoolerForm } from '../WaterCoolerForm/WaterCoolerForm';
import { CSSTransition } from 'react-transition-group';
import FormSuccessful from './FormSuccessful';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { ProductList } from '../ProductList/ProductList';

export const WaterCoolers = () => {
  const addProductToCart = useCartStore((state) => state.addProduct);

  const [openModal, setOpenModal] = useState(false);
  const [formSend, setFormSend] = useState(false);

  const nodeRef = useRef(null);

  const handleShowModal = () => {
    setOpenModal(!openModal);
  };

  const formSendToggle = () => {
    setFormSend(!formSend);
  };

  const handleClick = (item) => {
    addProductToCart(item);
    toast.success('Додано до кошика');
  };

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={openModal}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <WaterCoolerForm
          nodeRef={nodeRef}
          handleShowModal={handleShowModal}
          setFormSend={() => {
            formSendToggle();
          }}
        />
      </CSSTransition>

      <CSSTransition nodeRef={nodeRef} in={formSend} timeout={500} classNames="alert" unmountOnExit>
        <FormSuccessful
          nodeRef={nodeRef}
          setFormSend={() => {
            formSendToggle();
          }}
        />
      </CSSTransition>

      <SectionWrapper>
        <ProductInfo imageSrc="/waterCooler.png" imageAlt={'Кулери для води Котовського'}>
          <h1 className="itemTitleCooler">
            Купити кулери для води: Котовського, Фонтанка, Крижанівка
          </h1>
          <ul className="listInfoCooler">
            <li className="itemTextCooler">
              На сайті &ldquo;Здорова Вода&rdquo; ви можете легко купити або орендувати кулери для
              води Котовського, Фонтанка, Крижанівка. Наші кулери забезпечують постійний доступ до
              холодної та гарячої води, що робить їх ідеальним вибором для дому або офісу. Купівля
              кулера - дозволяє вам інвестувати в якісне обладнання, яке довго служитиме,
              забезпечуючи зручний доступ до води в будь-який час. Ви можете обрати модель, яка
              найкраще відповідає вашим потребам, і вона завжди буде під рукою.
            </li>
            <li className="itemTextCooler">
              Оренда кулера - це відмінний варіант для тих, хто не хоче витрачати великі кошти на
              покупку або планує використовувати кулер тимчасово. Ми пропонуємо гнучкі умови оренди,
              що дозволяє вам отримати всі переваги кулера без великих фінансових витрат. Ви можете
              орендувати кулер в нашій компанії. Вартість оренди складає від 300 грн - 500 грн
              залежно від моделі.
            </li>
          </ul>
          <h2 className="itemTitleCooler2">
            Як купити або орендувати кулери на сайті &ldquo;Здорова Вода&rdquo;
          </h2>
          <ul className="listInfoCooler">
            <li className="itemTextCooler">
              Ми пропонуємо настільні та підлогові варіанти, з верхнім чи нижнім підключенням, з
              електронним чи компресорним охолодженням, а також деякі моделі, комплектовані
              шухлядками чи холодильником.
            </li>
            <li className="itemTextCooler">
              Виберіть зручний для вас варіант на сайті &ldquo;Здорова Вода&rdquo; і замовте кулер з
              доставкою Котовського, Фонтанка, Крижанівка. Насолоджуйтесь комфортом та зручністю
              щодня!
            </li>
          </ul>
          <Button
            onClick={() => {
              handleShowModal();
            }}
            text="Хочу кулер в оренду"
            className="buttonCooler"
          />
        </ProductInfo>
        <ProductList list={CoolersData} />
      </SectionWrapper>
    </>
  );
};
