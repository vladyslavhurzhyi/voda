"use client";
import { useState } from "react";
import "./styles.css";
import { isAssetError } from "next/dist/client/route-loader";

export const FormForOder = () => {
  const [value, setValue] = useState("cash");
  const [checked, setChecked] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [labelColor, setLabelColor] = useState("#b3cbdb");

  function changeValue(event) {
    setValue(event.target.value);
  }

  function changeCommentHandler() {
    setChecked(!checked);
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
    <div className="sectionFormOrder">
      <div className="containerForm">
        <form className="wrapperForm" name="order-form" autoComplete="on">
          <label className="textLabel" style={{ color: labelColor }}>
            Ім&apos;я
            <input
              className="inputText"
              type="text"
              name="name"
              minlength="2"
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
              maxlength="13"
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
              minlength="2"
              required
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
          <label className="textLabel">
            Дата доставки
            <input className="calendarForm" type="date" name="date"></input>
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
