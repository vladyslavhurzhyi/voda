"use client";
import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import { toast } from "react-toastify";
import { CoolersData } from "./data";
import { WaterCoolerForm } from "../WaterCoolerForm/WaterCoolerForm";
import { useState } from "react";

export const WaterCoolers = () => {
  const addProductToCart = useCartStore((state) => state.addProduct);

  const [openModal, setOpenModal] = useState(false);

  const handleShowModal = () => {
    setOpenModal(!openModal);
  };

  const handleClick = (item) => {
    addProductToCart(item);
    toast.success("Додано до кошика");
  };

  return (
    <section className="sectionCooler pt-[100px]">
      {openModal && (
        <WaterCoolerForm
          showModal={openModal}
          handleShowModal={handleShowModal}
        />
      )}

      <div className="wrapperSectionCooler">
        <div className="wrapperInfoCooler">
          <div className="itemInfoCooler">
            <p className="itemTitleCooler">кулери</p>
            <ul className="listInfoCooler">
              <li className="itemTextCooler">
                Кулер для води забезпечить зручний доступ до прохолодної
                чи гарячої води в будь-який момент, заощадить ваш час. Також має
                стильний дизайн та різноманітні функції, що гарантує комфорт і
                задоволення при щоденному споживанні Здорової води. Ми
                пропонуємо настільні та підлогові варіанти, з верхнім чи нижнім
                підключенням, з електронним чи компресорним охолодженням, а
                також деякі моделі, комплектовані шухлядками чи холодильником.
              </li>
              <li className="itemTextCooler">
                Також ви можете орендувати кулер в нашій компанії. Вартість
                оренди складає від 300грн 500грн в залежності від моделі.
              </li>
            </ul>
            <Button
              onClick={() => {
                handleShowModal();
              }}
              text="Хочу кулер в оренду"
              className="buttonCooler"
            />
          </div>
          <div className="wrapperImgCooler">
            <Image
              className="imgWaterCooler"
              src="/waterCooler.png"
              width={640}
              height={408}
              alt="Water Cooler"
            />
          </div>
        </div>

        <div className="wrapperCatalogCooler">
          <ul className="listOfCooler">
            {CoolersData.map((item, index) => {
              return (
                <li key={index} className="itemCatalogCooler">
                  <div className="imgCatalogCooler">
                    <Image
                      src={item.image}
                      width={item.width}
                      height={item.height}
                      alt={item.name}
                    />
                  </div>
                  <div className="itemDescriptionCooler">
                    <p className="itemTitleMainCooler">{item.name}</p>
                  </div>
                  <div className="itemDescriptionSubCooler">
                    <p className="itemSubTitleCooler">{item.description}</p>
                  </div>

                  <div className="itemDescripPriceCooler">
                    <p className="itemPriceUnitCooler">{item.price} ₴</p>
                  </div>
                  <div className="wrapperButtonCooler">
                    <Button
                      onClick={() => handleClick(item)}
                      text="Замовити"
                      className="buttonOrderCooler"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
