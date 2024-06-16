"use client";

import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "./styles.css";
import { isSameDay, parse, isAfter, addDays, isSunday } from "date-fns";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";
import CalendarReact from "../Calendar/Calendar";
import { generateDescrip } from "@/app/utils/generateDescription";
import { sendPurchaseEvent } from "@/app/utils/sendPurchaseEvent";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Мінімум 2 символи").required("Поле обов'язкове"),
  phoneNumber: Yup.string()
    .min(10, "Мінімум 10 символів")
    .required("Поле обов'язкове"),
  address: Yup.string().required("Поле обов'язкове"),
  house: Yup.string().required("Поле обов'язкове"),
  courpus: Yup.string(),
  apartment: Yup.string(),
  payMethod: Yup.string(),
  deliveryTime: Yup.string(),
  comment: Yup.string(),
  skipOrderConfirmation: Yup.boolean(),
});

export const FormForOder = () => {
  const cart = useCartStore((state) => state.waterItems);
  const otherProducts = useCartStore((state) => state.otherProducts);
  const taraQuantity = useCartStore((state) => state.tara);

  const name = useCartStore((state) => state.name);
  const setName = useCartStore((state) => state.setName);

  const phoneNumber = useCartStore((state) => state.phoneNumber);
  const setPhoneNumber = useCartStore((state) => state.setPhoneNumber);

  const address = useCartStore((state) => state.address);

  const newClient = useCartStore((state) => state.newClient);
  const newClientAction = useCartStore((state) => state.newClientAction);

  const house = useCartStore((state) => state.house);
  const courpus = useCartStore((state) => state.courpus);
  const apartment = useCartStore((state) => state.apartment);

  const payMethodCart = useCartStore((state) => state.payMethod);
  const setPayMethod = useCartStore((state) => state.setPayMethod);

  const setAddress = useCartStore((state) => state.setAddressToStore);

  const setLocation = useCartStore((state) => state.setLocation);

  const deliveryTime = useCartStore((state) => state.time);
  const setDeliveryTime = useCartStore((state) => state.setTimeToStore);

  const deliveryDate = useCartStore((state) => state.deliveryDate);
  const setDeliveryDate = useCartStore((state) => state.setDeliveryDateToStore);

  const commentState = useCartStore((state) => state.comment);
  const setComment = useCartStore((state) => state.setComment);
  const finalPrice = useCartStore((state) => state.finalPrice);

  const [loading, setLoading] = useState(false);

  const skipOrderConfirmation = useCartStore(
    (state) => state.skipOrderConfirmation
  );
  const setSkipOrderConfirmation = useCartStore(
    (state) => state.setSkipOrderConfirmation
  );

  const [labelColor, setLabelColor] = useState("#b3cbdb");
  const [showCalendar, setShowCalendar] = useState(false);

  function changeCommentHandler() {
    setSkipOrderConfirmation(!skipOrderConfirmation);
  }

  function handleClick() {
    setShowCalendar(false);
  }

  const handleSubmitCash = async (values) => {
    try {
      setAddress(values.address);
      setDeliveryTime(values.time);
      setSkipOrderConfirmation(skipOrderConfirmation);
      setComment(values.comment);
      setName(values.name);
      setLocation("phoneNumber", values.phoneNumber);
      setLocation("house", values.house);
      setLocation("courpus", values.courpus);
      setLocation("apartment", values.apartment);

      setLoading(true);

      await axios.post("/api/telegram", {
        name,
        phoneNumber,
        address,
        house,
        courpus,
        apartment,
        deliveryDate,
        deliveryTime,
        newClient,
        newClientAction,
        payMethodCart,
        commentState,
        skipOrderConfirmation,
        cart,
        otherProducts,
        finalPrice,
        taraQuantity,
      });
      sendPurchaseEvent(finalPrice);
      setLoading(false);

      window.location.href = "/success-pay";
    } catch (error) {
      console.error("Ошибка при отправке данных в Telegram:", error);
    }
  };

  const handlePayment = async (values) => {
    setAddress(values.address);
    setDeliveryTime(values.time);
    setSkipOrderConfirmation(skipOrderConfirmation);
    setComment(values.comment);
    setName(values.name);
    setLocation("phoneNumber", values.phoneNumber);
    setLocation("house", values.house);
    setLocation("courpus", values.courpus);
    setLocation("apartment", values.apartment);

    setLoading(true);
    try {
      const sendToTg = await axios.post("/api/telegram", {
        name,
        phoneNumber,
        address,
        house,
        courpus,
        apartment,
        deliveryDate,
        deliveryTime,
        newClient,
        newClientAction,
        payMethodCart,
        commentState,
        skipOrderConfirmation,
        cart,
        otherProducts,
        finalPrice,
        taraQuantity,
      });
      sendPurchaseEvent(finalPrice);
      setLoading(false);

      console.log("sendToTg", sendToTg);

      const response = await axios.post("/api/liqpay", {
        amount: finalPrice,
        currency: "UAH",
        description: generateDescrip(cart, otherProducts, taraQuantity),
        order_id: `${Date.now()}`,
      });

      const { data, signature } = response.data;

      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://www.liqpay.ua/api/3/checkout/sandbox_i67896207052";

      const dataInput = document.createElement("input");
      dataInput.type = "hidden";
      dataInput.name = "data";
      dataInput.value = data;
      form.appendChild(dataInput);

      const signatureInput = document.createElement("input");
      signatureInput.type = "hidden";
      signatureInput.name = "signature";
      signatureInput.value = signature;
      form.appendChild(signatureInput);

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Ошибка оплаты:", error);
    }
  };

  const fivePM = parse("17:00", "HH:mm", new Date());
  const eightPM = parse("20:00", "HH:mm", new Date());

  const isAfterFivePM = isAfter(new Date(), fivePM);
  const isAfterEightPM = isAfter(new Date(), eightPM);

  const today = new Date();
  const tomorrow = addDays(today, 1);

  const options = [];

  // Если выбранная дата - сегодня
  if (isSameDay(deliveryDate, today)) {
    if (!isAfterFivePM) {
      options.push({ value: "evening", label: "18:00 - 21:00" });
    }
  }

  // Если выбранная дата - завтра и заказ сделан до 20:00
  if (isSameDay(deliveryDate, tomorrow) && !isAfterEightPM) {
    options.push({ value: "morning", label: "9:00 - 12:00" });
    options.push({ value: "evening", label: "18:00 - 21:00" });
  }

  // Если выбранная дата - завтра и заказ сделан после 20:00
  if (isSameDay(deliveryDate, tomorrow) && isAfterEightPM) {
    options.push({ value: "evening", label: "18:00 - 21:00" });
  }

  // Для любой другой даты
  if (!isSameDay(deliveryDate, today) && !isSameDay(deliveryDate, tomorrow)) {
    options.push({ value: "morning", label: "9:00 - 12:00" });
    options.push({ value: "evening", label: "18:00 - 21:00" });
  }

  return (
    <div className="sectionFormOrder mb-8 md:mb-0">
      <div className="containerForm">
        <Formik
          initialValues={{
            name: "",
            phoneNumber: "",
            address: address ? address : "",
            house: house ? house : "",
            courpus: courpus ? courpus : "",
            apartment: apartment ? apartment : "",
            payMethod: payMethodCart ? payMethodCart : "",
            time: deliveryTime ? deliveryTime : "",
            comment: commentState ? commentState : "",
            false: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (payMethodCart === "cash") {
              handleSubmitCash(values);
            } else if (payMethodCart === "on-line") {
              handlePayment(values);
            }
          }}
        >
          {(values) => (
            <Form className="wrapperForm" name="order-form" autoComplete="on">
              <label className="textLabel" style={{ color: labelColor }}>
                Ім&apos;я
                <Field className="inputText" type="text" name="name" />
                <ErrorMessage name="name" component="p" className="error" />
              </label>
              <label className="textLabel" style={{ color: labelColor }}>
                Номер телефону
                <Field className="inputText" type="text" name="phoneNumber" />
                <ErrorMessage
                  name="phoneNumber"
                  component="p"
                  className="error"
                />
              </label>
              <label className="textLabel" style={{ color: labelColor }}>
                Адреса
                <Field className="inputText" type="text" name="address" />
                <ErrorMessage name="address" component="p" className="error" />
              </label>
              <label
                className="textLabelHouseGroup"
                style={{ color: labelColor }}
              >
                Будинок
                <Field className="inputText" type="text" name="house" />
                <ErrorMessage name="house" component="p" className="error" />
              </label>
              <label
                className="textLabelHouseGroup"
                style={{ color: labelColor }}
              >
                Корпус
                <Field className="inputText" type="text" name="courpus" />
                <ErrorMessage name="courpus" component="p" className="error" />
              </label>
              <label
                className="textLabelHouseGroup"
                style={{ color: labelColor }}
              >
                Квартира
                <Field className="inputText" type="text" name="apartment" />
                <ErrorMessage
                  name="apartment"
                  component="p"
                  className="error"
                />
              </label>

              <div className=" h-[50px] w-full md:mt-4 lg:mt-0 border-2  relative rounded-lg ">
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
                    {deliveryDate &&
                      new Date(deliveryDate).toLocaleDateString("uk-UA")}
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

              <div className=" block gap-[15px] md:contents">
                <div>
                  <label
                    className="textLabelHouseGroup"
                    style={{ color: labelColor }}
                  >
                    Метод оплати
                    <Field
                      className="inputText"
                      as="select"
                      name="payMethod"
                      value={payMethodCart}
                      onChange={(e) => {
                        setPayMethod(e.target.value);
                      }}
                    >
                      <option value="">Оберіть метод оплати</option>
                      <option value="cash">Готівкою кур&apos;єру</option>
                      <option value="on-line">Онлайн оплата</option>
                    </Field>
                    <ErrorMessage
                      name="payMethod"
                      component="p"
                      className="error"
                    />
                  </label>
                </div>

                <div>
                  <label
                    className="textLabelHouseGroup"
                    style={{ color: labelColor }}
                  >
                    Час доставки
                    <Field
                      className="inputText"
                      as="select"
                      name="deliveryTime"
                      value={deliveryTime}
                      onChange={(e) => {
                        setDeliveryTime(e.target.value);
                      }}
                    >
                      <option value="">
                        {options.length === 0
                          ? "Оберіть інший день"
                          : "Оберіть час доставки"}
                      </option>
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="deliveryTime"
                      component="p"
                      className="error"
                    />
                  </label>
                </div>
              </div>
              <div className="mt-4 md:mt-0 w-full ">
                <label className="textLabel">
                  Коментар
                  <Field
                    className="inputText min-w-full "
                    as="textarea"
                    name="comment"
                    rows="5"
                    placeholder="Ваш коментар..."
                    value={commentState}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  />
                  <ErrorMessage
                    name="comment"
                    component="p"
                    className="error"
                  />
                </label>
              </div>

              <div className="flex justify-between w-full items-center `">
                <label className="textLabel">
                  <input
                    className="radiobutton "
                    type="checkbox"
                    name="nocall"
                    value="nocall"
                    checked={skipOrderConfirmation}
                    onChange={changeCommentHandler}
                  />
                  Мені можна не телефонувати для підтвердження замовлення
                </label>
                {payMethodCart === "cash" && (
                  <div>
                    <button
                      className={`py-4 px-16 rounded-[14px] duration-200 text-white bg-[#91C81E] font-semibold hover:shadow hover:animate-pulse ${
                        loading
                          ? "opacity-50 cursor-not-allowed"
                          : "border-2 border-[#91C81E]"
                      }`}
                      disabled={loading}
                      type="submit"
                    >
                      {loading ? (
                        <div className="flex items-center">
                          <span>Loading...</span>
                          <div className="ml-2 spinner border-t-2 border-b-2 border-gray-500 rounded-full w-5 h-5"></div>
                        </div>
                      ) : (
                        "Оплата готівкою"
                      )}
                    </button>
                  </div>
                )}

                {payMethodCart === "on-line" && (
                  <div>
                    <button
                      className={`py-4 px-16 rounded-[14px] duration-200 text-white bg-[#91C81E] font-semibold hover:shadow hover:animate-pulse ${
                        loading
                          ? "opacity-50 cursor-not-allowed"
                          : "border-2 border-[#91C81E]"
                      }`}
                      disabled={loading}
                      type="submit"
                    >
                      {loading ? (
                        <div className="flex items-center">
                          <span>Loading...</span>
                          <div className="ml-2 spinner border-t-2 border-b-2 border-gray-500 rounded-full w-5 h-5"></div>
                        </div>
                      ) : (
                        "Оплата з LiqPay"
                      )}
                    </button>
                  </div>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
