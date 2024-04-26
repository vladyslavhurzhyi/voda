"use client";

import { useState } from "react";
import "./styles.css";

import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";
import CalendarReact from "../Calendar/Calendar";

export const FormForOder = () => {
  const address = useCartStore((state) => state.address);
  const setAddress = useCartStore((state) => state.setAddressToStore);

  const time = useCartStore((state) => state.time);
  const deliveryDate = useCartStore((state) => state.deliveryDate);
  const setDeliveryDate = useCartStore((state) => state.setDeliveryDateToStore);

  const [value, setValue] = useState("cash");
  const [checked, setChecked] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [labelColor, setLabelColor] = useState("#b3cbdb");

  const [showCalendar, setShowCalendar] = useState(false);

  function changeValue(event) {
    setValue(event.target.value);
  }

  function changeCommentHandler() {
    setChecked(!checked);
  }

  function handleClick() {
    setShowCalendar(false);
  }

  const handleInputChange = (event) => {
    const valueInput = event.target.value;
    setInputValue(valueInput);

    if (valueInput.length >= 2) {
      setLabelColor("#5a5f69");
    } else {
      setLabelColor("#b3cbdb");
    }
  };

  return (
    <div className="sectionFormOrder mb-8 md:mb-0">
      <div className="containerForm">
        <form className="wrapperForm" name="order-form" autoComplete="on">
          <label className="textLabel" style={{ color: labelColor }}>
            Ім&apos;я
            <input
              className="inputText"
              type="text"
              name="name"
              minLength="2"
              required
              onChange={handleInputChange}
              style={{
                color: inputValue.length >= 2 ? "#5A5F69" : "#B3CBDB",
              }}
            ></input>
          </label>
          <label className="textLabel" style={{ color: labelColor }}>
            Номер телефону
            <input
              className="inputText"
              onChange={handleInputChange}
              placeholder="+380501112233"
              pattern="[0-9+]*"
              maxLength="13"
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            ></input>
          </label>
          <label className="textLabel" style={{ color: labelColor }}>
            Країна
            <input
              className="inputText"
              type="text"
              name="country"
              value="Україна"
            ></input>
          </label>
          <label className="textLabel" style={{ color: labelColor }}>
            Місто
            <input
              className="inputText"
              type="text"
              name="city"
              value="Одеса"
            ></input>
          </label>
          <label className="textLabel" style={{ color: labelColor }}>
            Вулиця
            <input
              className="inputText"
              onChange={handleInputChange}
              type="text"
              name="street"
              minLength="2"
              required
              value={address}
            ></input>
          </label>
          <div className="houseGroup">
            <label
              className="textLabelHouseGroup"
              style={{ color: labelColor }}
            >
              Будинок
              <input
                className="inputForHousCourpAppart"
                onChange={handleInputChange}
                type="text"
                name="house"
                required
              ></input>
            </label>
            <label
              className="textLabelHouseGroup"
              style={{ color: labelColor }}
            >
              Корпус
              <input
                className="inputForHousCourpAppart"
                onChange={handleInputChange}
                type="text"
                name="courpus"
              ></input>
            </label>
            <label
              className="textLabelHouseGroup"
              style={{ color: labelColor }}
            >
              Квартира
              <input
                className="inputForHousCourpAppart"
                onChange={handleInputChange}
                type="text"
                name="apartment"
              ></input>
            </label>
          </div>
          {deliveryDate && deliveryDate.toLocaleDateString()}
          <label className="textLabel">
            <div className=" relative">
              <div>
                <p className="flex gap-2 mb-2">
                  Дата доставки
                  <Image
                    className=""
                    priority
                    src="alert-circle.svg"
                    width={16}
                    height={16}
                    alt="logo"
                  />
                </p>
              </div>

              <div className=" h-12 border-2  relative rounded-lg ">
                {showCalendar && (
                  <CalendarReact
                    handleClick={() => handleClick()}
                    changeDeliveryDate={setDeliveryDate}
                  />
                )}
                <button
                  onClick={() => {
                    setShowCalendar(true);
                  }}
                  type="button"
                  className=" w-full h-full hover:bg-slate-50 rounded-lg"
                >
                  <p className=" text-greenMain text-start ml-4">
                    {deliveryDate && deliveryDate.toLocaleDateString()}
                  </p>
                  <Image
                    className=" absolute right-0 top-3 mr-4"
                    priority
                    src="calendar.svg"
                    width={24}
                    height={24}
                    alt="logo"
                  />
                </button>
              </div>
            </div>
          </label>
          <label className="textLabel">
            Час доставки
            <input className="dataForm" type="time" name="time"></input>
          </label>
          <div className="wrapperMethodPayment">
            <p className="textLabel payment">Оплата</p>
            <div className="methodPayment">
              <label className="textLabel radioButtonDescription">
                <input
                  className="radiobutton"
                  type="radio"
                  name="cash"
                  value="cash"
                  checked={value === "cash"}
                  onChange={changeValue}
                />
                Готівкою кур&apos;єру
              </label>
              <label className="textLabel radioButtonDescription">
                <input
                  className="radiobutton"
                  type="radio"
                  name="on-line"
                  value="on-line"
                  checked={value === "on-line"}
                  onChange={changeValue}
                />
                Онлайн оплата
              </label>
              <label className="textLabel radioButtonDescription">
                <input
                  className="radiobutton"
                  type="radio"
                  name="transfer"
                  value="transfer"
                  checked={value === "transfer"}
                  onChange={changeValue}
                />
                Переказ на карту ФОПа
              </label>
            </div>
          </div>
          <label className="textLabel" style={{ color: labelColor }}>
            Коментар
            <textarea
              className="textArea"
              onChange={handleInputChange}
              name="comments"
              rows="5"
              placeholder="Ваш коментар..."
            ></textarea>
          </label>
          <label className="textLabel">
            <input
              className="radiobutton"
              type="checkbox"
              name="nocall"
              value="nocall"
              checked={checked}
              onChange={changeCommentHandler}
            />
            Мені можна не телефонувати для підтвердження замовлення
          </label>
        </form>
      </div>
    </div>
  );
};
