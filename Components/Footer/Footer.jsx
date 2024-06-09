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
  const showFooterModal = useCartStore((state) => state.showFooterModal);
  const nodeRef = useRef(null);

  const formSendToggle = () => {
    setFormSend(!formSend);
  };

  const handleShowModal = () => {
    showFooterModal(!footerModal);
  };

  return (
    <footer className=" bg-[#00AFF0] relative mt-[60px] pb-[70px]li xl:[92px]">
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
          setFormSend={() => {
            formSendToggle();
          }}
        />
      </CSSTransition>
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
        <div className="grid lg:flex h-[100%]  items-center  my-auto md:flex-row flex-col justify-center lg:items-end lg:py-[80px] px-[30px]">
          <div className="block mr-auto xl:mr-auto xl:mx-0 order-2 lg:order-1">
            <a href="/">
              <Image
                className="w-[163x] h-[60px] lg:w-[163px] lg:h-[60px]"
                src={"/footer-logo.png"}
                alt="website logo"
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
    </footer>
  );
};

export default Footer;
