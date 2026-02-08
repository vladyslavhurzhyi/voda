"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";
import sendMessageFromWaterCooler from "@/app/utils/api/telegramFormCoolers";
const InputMask = dynamic(() => import("react-input-mask"), {
  ssr: false,
});

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

  const handleSubmit = () => {
    if (phoneNumber.length !== 13 || name === "") return;

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
          <Image src="/LogoForTelegramForm.png" width={110} height={40} alt="Логотип" />
        </div>
        <div className="wrapperTitleTelegramForm">
          <p className="titleTelegramForm">Залиште свої контакти</p>
          <p className="subTitleTelegramForm">і ми Вам зателефонуємо</p>
        </div>

        <form className="formTelegram">
          <input
            style={inputStyle}
            className="inputTelegram"
            type="text"
            name="name"
            placeholder="Ім'я"
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
              bg={!name || phoneNumber.length !== 13 ? "bg-gray-400" : "bg-[#91C81E]"}
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
