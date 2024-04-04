"use client";
import { useState } from "react";
import "./styles.css";

export const FormForOder = () => {
  const [value, setValue] = useState("cash");
  const [checked, setChecked] = useState(true);

  function changeValue(event) {
    setValue(event.target.value);
  }

  function changeCommentHandler() {
    setChecked(!checked);
  }

  return (
    <div className="containerForm">
      <form className="wrapperForm" name="order-form" autoComplete="on">
        <label className="textLabel">
          Ім&apos;я
          <input
            className="inputText"
            type="text"
            name="name"
            autoFocus
            required
          ></input>
        </label>
        <label className="textLabel">
          Номер телефону
          <input
            className="inputText"
            mask="+38(099)999-99-99"
            placeholder="+38(0__)___-__-__"
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <label className="textLabel">
          Країна
          <input
            className="inputText"
            type="text"
            name="country"
            value="Україна"
          ></input>
        </label>
        <label className="textLabel">
          Місто
          <input
            className="inputText"
            type="text"
            name="city"
            value="Одеса"
          ></input>
        </label>
        <label className="textLabel">
          Вулиця
          <input
            className="inputText"
            type="text"
            name="street"
            required
          ></input>
        </label>
        <label className="textLabel">
          Будинок
          <input
            className="inputForHousCourpAppart"
            type="text"
            name="house"
            required
          ></input>
        </label>
        <label className="textLabel">
          Корпус
          <input
            className="inputForHousCourpAppart"
            type="text"
            name="courpus"
          ></input>
        </label>
        <label className="textLabel">
          Квартира
          <input
            className="inputForHousCourpAppart"
            type="text"
            name="apartment"
          ></input>
        </label>
        <label className="textLabel">
          Дата доставки
          <input className="calendarForm" type="date" name="date"></input>
        </label>
        <label className="textLabel">
          Час доставки
          <input className="dataForm" type="time" name="time"></input>
        </label>
        <p className="textLabel">Оплата</p>
        <label className="textLabel">
          <input
            type="radio"
            name="cash"
            value="cash"
            checked={value === "cash"}
            onChange={changeValue}
          />
          Готівкою кур&apos;єру
        </label>
        <label className="textLabel">
          <input
            type="radio"
            name="on-line"
            value="on-line"
            checked={value === "on-line"}
            onChange={changeValue}
          />
          Онлайн оплата
        </label>
        <label className="textLabel">
          <input
            type="radio"
            name="transfer"
            value="transfer"
            checked={value === "transfer"}
            onChange={changeValue}
          />
          Переказ на карту ФОПа
        </label>
        <label className="textLabel">
          Коментар
          <textarea
            className="textArea"
            name="comments"
            rows="5"
            placeholder="Ваш коментар..."
          ></textarea>
        </label>
        <label className="textLabel">
          <input
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
  );
};
