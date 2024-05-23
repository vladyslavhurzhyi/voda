"use client";

import sendMessageFromFooter from "@/app/utils/api/telegramFormFooter";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

export const TelegramForm = ({ setFormSend }) => {
  const footerModal = useCartStore((state) => state.footerModal);
  const showFooterModal = useCartStore((state) => state.showFooterModal);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");

  const handleShowModal = () => {
    showFooterModal(!footerModal);
  };

  const handleChange = (value, type) => {
    switch (type) {
      case "name":
        setName(value);
        break;
      case "phoneNumber":
        if (/^\d*$/.test(value)) {
          setPhoneNumber(value);
        }
        break;
      case "comments":
        setComments(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (phoneNumber || name === "") return;
    sendMessageFromFooter({ phoneNumber, name, comments });
    showFooterModal(false);
    setFormSend();
  };

  return (
    <>
      <div className="containerFormTelegram">
        <button
          type="button"
          onClick={() => {
            handleShowModal();
          }}
          className="wrapperIconCloseForm"
        >
          <Image
            className="iconCloseForm"
            src="/iconCloseTelegtamForm.png"
            width={24}
            height={24}
            alt="Закрити"
          />
        </button>
        <div className="wrapperLogoTelegram">
          <Image
            src="/LogoForTelegramForm.png"
            width={110}
            height={40}
            alt="Логотип"
          />
        </div>
        <div className="wrapperTitleTelegramForm">
          <p className="titleTelegramForm">Залиште свої контакти</p>
          <p className="subTitleTelegramForm">і ми Вам зателефонуємо</p>
        </div>

        <form className="formTelegram">
          <input
            className="inputTelegram"
            type="text"
            name="name"
            placeholder="Ім'я"
            value={name}
            onChange={(e) => handleChange(e.target.value, "name")}
          ></input>

          <input
            className="inputTelegram"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            placeholder=" Номер телефону"
            onChange={(e) => handleChange(e.target.value, "phoneNumber")}
          ></input>

          <textarea
            className="textComment"
            name="comments"
            rows="4"
            value={comments}
            placeholder="Ваше повідомлення (в разі потреби)"
            onChange={(e) => handleChange(e.target.value, "comments")}
          ></textarea>

          <div className="wrapperButton">
            <Button
              text="Замовити"
              className="buttonTelegramSend"
              onClick={() => {
                handleSubmit();
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};
