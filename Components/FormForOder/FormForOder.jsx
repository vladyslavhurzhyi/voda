"use client";

import { useState } from "react";
import "./styles.css";

import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";
import CalendarReact from "../Calendar/Calendar";

export const FormForOder = () => {
  const address = useCartStore((state) => state.address);

  const house = useCartStore((state) => state.house);
  const courpus = useCartStore((state) => state.courpus);
  const apartment = useCartStore((state) => state.apartment);

  const payMethod = useCartStore((state) => state.payMethod);

  const setPayMethod = useCartStore((state) => state.setPayMethod);

  const setAddress = useCartStore((state) => state.setAddressToStore);

  const setLocation = useCartStore((state) => state.setLocation);

  const deliveryTime = useCartStore((state) => state.time);
  const setDeliveryTime = useCartStore((state) => state.setTimeToStore);

  const deliveryDate = useCartStore((state) => state.deliveryDate);
  const setDeliveryDate = useCartStore((state) => state.setDeliveryDateToStore);

  // const [deliveryTime, setDeliveryTime] = useState("morning");

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

  const handleDeliveryTimeChange = (event) => {
    setDeliveryTime(event.target.id);
  };

  const handleInputChange = (event) => {
    const valueInput = event.target.value;
    setAddress(valueInput);

    if (valueInput.length >= 2) {
      setLabelColor("#5a5f69");
    } else {
      setLabelColor("#b3cbdb");
    }
  };

  const handleChange = (type, value) => {
    setLocation(type, value);
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
              defaultValue={address}
            ></input>
          </label>
          {house} {courpus} {apartment}
          <div className=" flex gap-[15px]  md:contents  ">
            <div>
              {" "}
              <label
                className="textLabelHouseGroup"
                style={{ color: labelColor }}
              >
                Будинок
                <input
                  className="inputForHousCourpAppart"
                  onChange={(e) => handleChange("house", e.target.value)}
                  type="text"
                  name="house"
                  required
                ></input>
              </label>
            </div>
            <div>
              <label
                className="textLabelHouseGroup"
                style={{ color: labelColor }}
              >
                Корпус
                <input
                  className="inputForHousCourpAppart"
                  onChange={(e) => handleChange("courpus", e.target.value)}
                  type="text"
                  name="courpus"
                ></input>
              </label>
            </div>

            <div>
              <label
                className="textLabelHouseGroup"
                style={{ color: labelColor }}
              >
                Квартира
                <input
                  className="inputForHousCourpAppart"
                  onChange={(e) => handleChange("apartment", e.target.value)}
                  type="text"
                  name="apartment"
                ></input>
              </label>
            </div>
          </div>
          <div className=" block md:flex w-full gap-2">
            <div className="w-full md:w-[50%] relative">
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

              <div className=" h-12  border-2  relative rounded-lg w-full ">
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

            <div className=" mt-4 md:mt-0 w-fit min-w-full md:min-w-[50%] px-[10px] ">
              <label className="textLabel">
                Час доставки{" "}
                <div className="flex  justify-around mt-2">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor="on"
                      data-ripple-dark="true"
                    >
                      <input
                        onChange={handleDeliveryTimeChange}
                        name="type"
                        checked={deliveryTime === "morning" ? true : false}
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-300 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#91C81E]  hover:before:opacity-10"
                        id="morning"
                      />
                      <span className="absolute text-[#91C81E] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle
                            data-name="ellipse"
                            cx="8"
                            cy="8"
                            r="8"
                          ></circle>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px font-light text-gray-700 cursor-pointer select-none"
                      htmlFor="morning"
                    >
                      9:00 - 12:00
                    </label>
                  </div>
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor="off"
                    >
                      <input
                        onChange={handleDeliveryTimeChange}
                        name="type"
                        checked={deliveryTime === "morning" ? false : true}
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full  border-2 border-gray-300 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity  hover:before:opacity-10"
                        id="evening"
                      />
                      <span className="absolute text-[#91C81E] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle
                            data-name="ellipse"
                            cx="8"
                            cy="8"
                            r="8"
                          ></circle>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px font-light text-gray-700 cursor-pointer select-none"
                      htmlFor="evening"
                    >
                      18:00 - 21:00
                    </label>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="wrapperMethodPayment">
            <p className="textLabel payment">Оплата</p>
            <div className="methodPayment">
              <label className="textLabel radioButtonDescription">
                <input
                  className="radiobutton"
                  type="radio"
                  name="cash"
                  value="cash"
                  checked={payMethod === "cash"}
                  onChange={(e) => setPayMethod(e.target.value)}
                />
                Готівкою кур&apos;єру
              </label>
              <label className="textLabel radioButtonDescription">
                <input
                  className="radiobutton"
                  type="radio"
                  name="on-line"
                  value="on-line"
                  checked={payMethod === "on-line"}
                  onChange={(e) => setPayMethod(e.target.value)}
                />
                Онлайн оплата
              </label>
              <label className="textLabel radioButtonDescription">
                <input
                  className="radiobutton"
                  type="radio"
                  name="transfer"
                  value="transfer"
                  checked={payMethod === "transfer"}
                  onChange={(e) => setPayMethod(e.target.value)}
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
