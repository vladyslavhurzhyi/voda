"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";
import sendMessageOneClickForm from "@/app/utils/api/telegramFormCoolers copy";

export const OneClickForm = ({ handleShowModal, setFormSend, nodeRef }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

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
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (phoneNumber === "") return;

    sendMessageOneClickForm({ phoneNumber, name });
    handleShowModal();
    setFormSend();
  };

  const inputStyle = {
    paddingLeft: "10px",
  };

  return (
    <>
      <div className="containerFormTelegram" ref={nodeRef}>
        <button
          type="button"
          className="wrapperIconCloseForm"
          onClick={() => {
            handleShowModal();
          }}
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
            style={inputStyle}
            className="inputTelegram "
            type="text"
            name="name"
            placeholder="Ім'я"
            value={name}
            onChange={(e) => handleChange(e.target.value, "name")}
          ></input>

          <input
            style={inputStyle}
            className="inputTelegram"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            placeholder=" Номер телефону"
            onChange={(e) => handleChange(e.target.value, "phoneNumber")}
          ></input>

          <div className="wrapperButton">
            <Button
              bg={phoneNumber === "" ? "gray-400" : "[#91C81E]"}
              text="Замовити"
              className={`buttonTelegramSend `}
              onClick={() => {
                handleSubmit();
              }}
            />
          </div>
        </form>
      </div>{" "}
    </>
  );
};
