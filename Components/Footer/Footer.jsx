"use client";
import Image from "next/image";
import "./styles.css";
import Link from "next/link";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import { CSSTransition } from "react-transition-group";
import { TelegramForm } from "../TelegramForm/TelegramForm";
import FormSuccessful from "../WaterCoolers/FormSuccessful";
import { useRef, useState } from "react";

const Footer = () => {
  const footerModal = useCartStore((state) => state.footerModal);
  const [formSend, setFormSend] = useState(false);
  const [isReturnPolicyOpen, setIsReturnPolicyOpen] = useState(false);
  const showFooterModal = useCartStore((state) => state.showFooterModal);
  const nodeRef = useRef(null);

  const formSendToggle = () => {
    setFormSend(!formSend);
  };

  const handleShowModal = () => {
    showFooterModal(!footerModal);
  };

  return (
    <footer className=" bg-[#00AFF0] relative mt-[60px]  ">
      <CSSTransition
        nodeRef={nodeRef}
        in={footerModal}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <TelegramForm
          nodeRef={nodeRef}
          setFormSend={() => {
            formSendToggle();
          }}
        />
      </CSSTransition>

      <CSSTransition
        nodeRef={nodeRef}
        in={formSend}
        timeout={500}
        classNames="alert"
        unmountOnExit
      >
        <FormSuccessful
          nodeRef={nodeRef}
          setFormSend={() => {
            formSendToggle();
          }}
        />
      </CSSTransition>

      {/* Return Policy Modal */}
      {isReturnPolicyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white px-6 pt-6 pb-2 z-10 flex justify-end border-b border-gray-100">
              <button
                onClick={() => setIsReturnPolicyOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Політика повернення товарів</h2>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3">Продовольчі товари</h3>
                  <p className="mb-4">
                    Відповідно до Постанови Кабінету Міністрів України від 19 березня 1994 р. № 172 «Про реалізацію окремих положень Закону України «Про захист прав споживачів», продовольчі товари (включаючи напої, їжу, дитяче харчування тощо) належної якості не підлягають обміну або поверненню.
                  </p>
                  <p>
                    У випадку придбання споживачем товару неналежної якості, він має право на повернення коштів або заміну товару на продукт, що придатний до вживання, за умови наявності документа, що підтверджує факт покупки.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Непродовольчі товари</h3>
                  <p className="mb-4">
                    Споживач має право повернути непродовольчий товар належної якості протягом 14 днів, якщо товар не відповідає формі, габаритам, фасону, кольору або не може бути використаний за призначенням, але тільки за умови, що товар не використовувався та збережені його споживчі властивості, упаковка, пломби, документи.
                  </p>
                  <p>
                    Якщо на момент обміну аналогічного товару немає в наявності, споживач може вибрати будь-який інший товар або отримати назад кошти за повернений товар, виходячи з вартості на момент покупки.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Відмова у поверненні</h3>
                  <p className="mb-4">
                    Повернення або обмін товару буде відмовлено у таких випадках:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Товар, який був у використанні або не має суттєвих недоліків;</li>
                    <li>Якщо з моменту покупки пройшло більше 14 днів;</li>
                    <li>Якщо товар був пошкоджений, спроби ремонту або порушено інші умови гарантії;</li>
                    <li>Відсутній документ, що підтверджує факт покупки.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Згідно з Закон України «Про захист прав споживачів»</h3>
                  <p className="mb-4">Споживач зобов'язаний:</p>
                  <ol className="list-decimal pl-6 mb-4">
                    <li>Ознайомись з правилами експлуатації товару перед його використанням;</li>
                    <li>У разі необхідності звернутися за роз'ясненнями до продавця;</li>
                    <li>Використовувати товар за його цільовим призначенням, дотримуючись усіх вимог виробника.</li>
                  </ol>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Повернення товару неналежної якості</h3>
                  <p className="mb-4">
                    Якщо товар має недоліки протягом гарантійного терміну, споживач має право вимагати:
                  </p>
                  <ol className="list-decimal pl-6 mb-4">
                    <li>Пропорційного зменшення ціни;</li>
                    <li>Безоплатного усунення недоліків у розумний строк;</li>
                    <li>Відшкодування витрат на усунення дефектів.</li>
                  </ol>
                  <p className="mb-4">
                    У разі істотних недоліків товару, що виникли з вини виробника, споживач має право на повернення коштів або заміну товару. Істотним недоліком є дефект, що унеможливлює використання товару за його призначенням, повторюється після усунення або на його усунення потрібно більше 14 днів.
                  </p>
                  <p>
                    У разі повернення товару неналежної якості, витрати на повернення бере на себе магазин. Якщо товар належної якості, витрати на повернення здійснює покупець.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="custom-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="max-w-[767px] lg:max-w-[1023px] xl:max-w-[1440px] h-fit pb-4 my-0 mx-auto ">
        {/* A */}
        <div className="grid lg:flex h-[100%]  items-center  my-auto md:flex-row flex-col justify-center lg:items-end lg:pt-[80px] px-[30px]">
          <div className="block mr-auto xl:mr-auto xl:mx-0 order-2 lg:order-1">
            <a href="/">
              <Image
                className="w-[163x] h-[60px] lg:w-[163px] lg:h-[60px]"
                src={"/footer-logo.png"}
                alt="Доставка воды Котовского, Фонтанка, Крижанівка, Поскот (одеская область)."
                width={163}
                height={60}
              />
            </a>
          </div>
          <div className="flex order-1 lg:order-2 ">
            <ul className="block lg:flex md:pt-[100px] lg:gap-4 xl:gap-[61px] items-center mb-[20px] lg:mb-0 xl:mb-[20px]">
              <li className="text-white font-semibold xl:leading-[24px] mb-[15px] xl:mb-[0px] hover:text-zinc-200  duration-300 scale-105">
                <Link
                  href="/#water-order"
                  className="p-2 md:p-0  hover:scale-105 duration-300 "
                >
                  Замовити доставку
                </Link>
              </li>

              <li className="text-white font-semibold xl:leading-[24px] mb-[15px] xl:mb-[0px] hover:text-zinc-200  duration-300 scale-105">
                <Link
                  href="/#actions"
                  className="p-2 md:p-0 hover:scale-105 duration-300 "
                >
                  Акції
                </Link>
              </li>

              <li className="text-white font-semibold xl:leading-[24px] mb-[15px] xl:mb-[0px] hover:text-zinc-200  duration-300 scale-105">
                <Link
                  href="/#smak"
                  className="p-2 md:p-0 hover:scale-105 duration-300 "
                >
                  Обрати воду
                </Link>
              </li>

              <li className="text-white font-semibold xl:leading-[24px] mb-[15px] xl:mb-[0px] hover:text-zinc-200  duration-300 scale-105">
                <Link
                  href="/#faq"
                  className="p-2 md:p-0 hover:scale-105 duration-300 "
                >
                  Часті запитання
                </Link>
              </li>

              <li className="text-white font-semibold xl:leading-[24px] mb-[15px] xl:mb-[0px] hover:text-zinc-200  duration-300">
                <button
                  className="p-2 md:p-0 hover:scale-105 duration-300 "
                  type="button"
                  onClick={() => {
                    handleShowModal();
                  }}
                >
                  Замовити дзвінок
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex text-white justify-center gap-4 pb-4">
        <a
          className="cursor-pointer p-2 hover:text-gray-200 transition-colors duration-300"
          href="https://voda-aquatica.od.ua/oferta"
        >
          Оферта
        </a>
        <button
          className="cursor-pointer p-2 hover:text-gray-200 transition-colors duration-300"
          onClick={() => setIsReturnPolicyOpen(true)}
        >
          Обмін та повернення
        </button>
      </div>
    </footer>
  );
};

export default Footer;
