"use client";
import Image from "next/image";

import "../CatalogWater/styles.css";
import { useRef, useState } from "react";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import "./transitions.style.css";

import { CSSTransition } from "react-transition-group";
import FormSuccessful from "../WaterCoolers/FormSuccessful";
import { catalogWaterData } from "../CatalogWater/data";
import { OneClickForm } from "../OneClickForm/OneClickForm";

const Hero = () => {
  const oneClickModal = useCartStore((state) => state.oneClickModal);
  const showOneClickModal = useCartStore((state) => state.showOneClickModal);
  const [formSend, setFormSend] = useState(false);

  const nodeRef = useRef(null);

  const formSendToggle = () => {
    setFormSend(!formSend);
  };

  const handleShowModal = () => {
    showOneClickModal(!oneClickModal);
  };

  const dataMineralWater = catalogWaterData.find(
    ({ volume, type }) => type === "mineralWater" && volume === 19,
  );

  const dataNormalWater = catalogWaterData.find(
    ({ volume, type }) => type === "normalWater" && volume === 19,
  );

  return (
    <section
      className={`pb-6  pt-[100px] lg:pt-[50px]  bg-[#00AFF0] md:pb-2 xl:pb-[40px] w-full  min-h-screen `}
    >
      <div className="container">
        <div className="flex-col  justify-center text-white text-center md:pt-[96px] pb-[0px] lg:pt-[150px]">
          <h1 className="   font-bold text-[30px] lg:text-[60px] leading-[40px] lg:leading[56px] lg:leading-[96px] tracking-[3px] mb-4 max-w-[70%] mx-auto">
            ДОСТАВКА ВОДИ: Котовського, Фонтанка, Крижанівка
          </h1>
          <p className="text-white text-xl lg:text-[40px] font-medium   leading-[35px]">
            чиста питна вода для вас <br /> швидко, якісно, вигідно.
          </p>
        </div>

        <div className="flex justify-center relative">
          <div className="hidden w-[calc((100%-300px)/2)] lg:flex flex-col bg-white bg-opacity-0 p-10">
            <div className="itemDescriptionPrice">
              <p className="subTitleSafeMob">{dataNormalWater.name}</p>
              <p className="subTitleSafeMob">{dataNormalWater.volume}Л </p>
            </div>

            <div className="itemDescriptionPrice ">
              <h2 className="itemPricePerBottleWhiteText"> Ціни на воду</h2>
            </div>

            <div className="itemDescriptionPrice gap-20">
              <p className="itemPricePerBottleWhiteText">{dataNormalWater.price}.00 ₴</p>
              <p className="itemPricePerBottleWhiteText">за 1 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottleWhiteText">{dataNormalWater.priceFrom2To5}.00 ₴</p>
              <p className="itemPricePerBottleWhiteText">від 2 до 5 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottleWhiteText">{dataNormalWater.priceFrom6To9}.00 ₴</p>
              <p className="itemPricePerBottleWhiteText">від 6 до 9 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottleWhiteText">{dataNormalWater.priceFrom10}.00 ₴</p>
              <p className="itemPricePerBottleWhiteText">від 10 шт</p>
            </div>
          </div>

          <div className="flex justify-center align-center w-[300px] h-[300px]">
            <Image alt="heroImage" width={300} height={300} src={"/heroImage.png"}></Image>

            <CSSTransition
              nodeRef={nodeRef}
              in={oneClickModal}
              timeout={300}
              classNames="alert"
              unmountOnExit
            >
              <OneClickForm
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

            <button
              onClick={() => {
                handleShowModal();
              }}
              type="button"
              className=" absolute top-[80%]  p-4  bg-greenMain bg-opacity-95 rounded-md hover:scale-110  duration-300 ease-in-out uppercase font-bold shadow-md animate-bounce hover:bg-opacity-100 hover:text-white"
            >
              <p className="text-opacity-70 ">Замовити в один клік!</p>
            </button>
          </div>

          <div className="hidden w-[calc((100%-300px)/2)] lg:flex flex-col bg-white bg-opacity-0 p-10 ">
            <div className="itemDescriptionPrice ">
              <p className="subTitleSafeMob ">{dataMineralWater.name}</p>
              <p className="itemTitlePureWater "> &nbsp; &nbsp;</p>
              <p className="subTitleSafeMob">{dataMineralWater.volume}Л</p>
            </div>

            <div className="itemDescriptionPrice ">
              <h2 className="itemPricePerBottleWhiteText"> Ціни на воду</h2>
            </div>

            <div className="itemDescriptionPrice gap-20">
              <p className="itemPricePerBottleWhiteText">{dataMineralWater.price}.00 ₴</p>
              <p className="itemPricePerBottleWhiteText">за 1 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottleWhiteText">{dataMineralWater.priceFrom2To5}.00 ₴</p>
              <p className="itemPricePerBottleWhiteText">від 2 до 5 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottleWhiteText">{dataMineralWater.priceFrom6To9}.00 ₴</p>
              <p className="itemPricePerBottleWhiteText">від 6 до 9 шт</p>
            </div>
            <div className="itemDescriptionPrice">
              <p className="itemPricePerBottleWhiteText">{dataMineralWater.priceFrom10}.00 ₴</p>
              <p className="itemPricePerBottleWhiteText">від 10 шт</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
