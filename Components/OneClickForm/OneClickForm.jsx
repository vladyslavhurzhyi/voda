"use client";

import InputMask from "react-input-mask";
import sendMessageFromFooter from "@/app/utils/api/telegramFormFooter";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

export const OneClickForm = ({ setFormSend, nodeRef }) => {
  const oneClickModal = useCartStore((state) => state.oneClickModal);
  const showOneClickModal = useCartStore((state) => state.showOneClickModal);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleShowModal = () => {
    showOneClickModal(!oneClickModal);
  };

  const handleChange = (value, type) => {
    switch (type) {
      case "name":
        setName(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "comments":
        setComments(value);
        break;
      default:
        break;
    }
  };

  const inputStyle = {
    paddingLeft: "10px",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 13 || !name) {
      return;
    }

    try {
      await sendMessageFromFooter({ phoneNumber, name, comments });
      showOneClickModal(false);
      setFormSend();
    } catch (error) {
      setErrorMessage("Не вдалося надіслати повідомлення. Будь ласка, спробуйте пізніше.");
      console.error("Ошибка при отправке сообщения в Telegram:", error);
    }
  };

  return (
    <>
      <div className="containerFormTelegram" ref={nodeRef}>
        <button type="button" onClick={handleShowModal} className="wrapperIconCloseForm">
          <Image
            className="iconCloseForm"
            src="/iconCloseTelegtamForm.png"
            width={24}
            height={24}
            alt="Закрыть"
          />
        </button>
        <div className="wrapperLogoTelegram">
          <Image src="/LogoForTelegramForm.png" width={110} height={40} alt="Логотип" />
        </div>
        <div className="wrapperTitleTelegramForm">
          <p className="titleTelegramForm">Залиште свої контакти</p>
          <p className="subTitleTelegramForm">і ми вам передзвонимо</p>
        </div>

        <form className="formTelegram" onSubmit={handleSubmit}>
          <input
            style={inputStyle}
            className="inputTelegram"
            type="text"
            name="name"
            placeholder=" Імʼя"
            value={name}
            onChange={(e) => handleChange(e.target.value, "name")}
          ></input>
          <InputMask
            mask="+380 99 999 99 99"
            maskChar={null}
            value={phoneNumber}
            onChange={(e) => handleChange(e.target.value.replace(/\s/g, ""), "phoneNumber")}
          >
            {(inputProps) => (
              <input
                {...inputProps}
                style={inputStyle}
                type="text"
                name="phoneNumber"
                className="inputTelegram"
                placeholder=" Номер телефона"
              />
            )}
          </InputMask>
          <textarea
            style={inputStyle}
            className="textComment"
            name="comments"
            rows="4"
            value={comments}
            placeholder="Ваше повідомлення (за необхідності)"
            onChange={(e) => handleChange(e.target.value, "comments")}
          ></textarea>

          {errorMessage && <p className=" pb-4 text-center text-red-500">{errorMessage}</p>}

          <div className="wrapperButton">
            <Button
              bg={phoneNumber.length !== 13  || !name ? "bg-gray-400" : "bg-[#91C81E]"}
              text="Замовити"
              className="buttonTelegramSend"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};
