"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";
import sendMessageFromWaterCooler from "@/app/utils/api/telegramFormCoolers";

export const WaterCoolerForm = ({ handleShowModal, setFormSend, nodeRef }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");

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
    // if (phoneNumber || name === "") return;

    sendMessageFromWaterCooler({ phoneNumber, name, comments });
    handleShowModal();
    setFormSend();
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
              disabled={phoneNumber === ""}
              bg={phoneNumber === "" ? "gray-400" : "[#91C81E]"}
              text="Замовити"
              className="buttonTelegramSend"
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
