"use client";

import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import "./styles.css";
import { isSameDay, parse, isAfter, addDays, isSunday } from "date-fns";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";
import CalendarReact from "../Calendar/Calendar";
import { generateDescrip } from "@/app/utils/generateDescription";
import { sendPurchaseEvent } from "@/app/utils/sendPurchaseEvent";
import { isSundayCheck } from "@/app/utils/isSundayChek";


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
  deliveryTime: Yup.string().required("Виберіть час доставки"),
  comment: Yup.string(),
  skipOrderConfirmation: Yup.boolean(),
});

export const FormForOder = () => {
  const cart = useCartStore((state) => state.waterItems);
  const otherProducts = useCartStore((state) => state.otherProducts);
  const taraQuantity = useCartStore((state) => state.tara);

  const nameFromState = useCartStore((state) => state.name);
  const setName = useCartStore((state) => state.setName);

  const phoneNumberFromState = useCartStore((state) => state.phoneNumber);
  const setPhoneNumber = useCartStore((state) => state.setPhoneNumber);

  const addressFromState = useCartStore((state) => state.address);

  const newClient = useCartStore((state) => state.newClient);
  const newClientAction = useCartStore((state) => state.newClientAction);

  const houseFromState = useCartStore((state) => state.house);
  const courpusFromState = useCartStore((state) => state.courpus);
  const apartmentFromState = useCartStore((state) => state.apartment);

  const payMethodCart = useCartStore((state) => state.payMethod);
  const setPayMethod = useCartStore((state) => state.setPayMethod);

  const setAddress = useCartStore((state) => state.setAddressToStore);

  const setLocation = useCartStore((state) => state.setLocation);

  const deliveryTimeFromState = useCartStore((state) => state.time);
  const setDeliveryTime = useCartStore((state) => state.setTimeToStore);

  const deliveryDateFromState = useCartStore((state) => state.deliveryDate);
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

  const [formValues, setFormValues] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    house: "",
    courpus: "",
    apartment: "",
    payMethod: "cash",
    deliveryDate: deliveryDateFromState || isSundayCheck(),
    deliveryTime: "",
    comment: "",
    skipOrderConfirmation: false,
  });

  useEffect(() => {
    setFormValues((prevValues) => ({
      ...prevValues,
      address: addressFromState || "",
      house: houseFromState || "",
      courpus: courpusFromState || "",
      apartment: apartmentFromState || "",
      deliveryTime: deliveryTimeFromState || "",
    }));
  }, []);

  function changeCommentHandler() {
    setSkipOrderConfirmation(!skipOrderConfirmation);
  }

  function handleClick() {
    setShowCalendar(false);
  }

  const updateZustandState = (values) => {
    setName(values.name);
    setPhoneNumber(values.phoneNumber);
    setAddress(values.address);
    setLocation("house", values.house);
    setLocation("courpus", values.courpus);
    setLocation("apartment", values.apartment);
    setPayMethod(values.payMethod);
    setDeliveryTime(values.deliveryTime);
    setComment(values.comment);
    setSkipOrderConfirmation(values.skipOrderConfirmation);
  };

  const handleSubmitCash = async (values) => {
    try {
      updateZustandState(values);

      setLoading(true);
      const dateToString = deliveryDateFromState.toString();
      console.log("dateToString1", dateToString);
      await axios.post("/api/telegram", {
        name: values.name,
        phoneNumber: values.phoneNumber,
        address: values.address,
        house: values.house,
        courpus: values.courpus,
        apartment: values.apartment,
        deliveryDate: deliveryDateFromState,
        deliveryTime: values.deliveryTime,
        newClient,
        newClientAction,
        payMethodCart: values.payMethod,
        commentState: values.comment,
        skipOrderConfirmation: values.skipOrderConfirmation,
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
    updateZustandState(values);

    setLoading(true);

    const dateToString = deliveryDateFromState.toString();
    console.log("dateToString2", dateToString);
    try {
      const sendToTg = await axios.post("/api/telegram", {
        name: values.name,
        phoneNumber: values.phoneNumber,
        address: values.address,
        house: values.house,
        courpus: values.courpus,
        apartment: values.apartment,
        deliveryDate: deliveryDateFromState,
        deliveryTime: values.deliveryTime,
        newClient,
        newClientAction,
        payMethodCart: values.payMethod,
        commentState: values.comment,
        skipOrderConfirmation: values.skipOrderConfirmation,
        cart,
        otherProducts,
        finalPrice,
        taraQuantity,
      });
      sendPurchaseEvent(finalPrice);
      setLoading(false);

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
  if (isSameDay(deliveryDateFromState, today)) {
    if (!isAfterFivePM) {
      options.push({ value: "evening", label: "18:00 - 21:00" });
    }
  }

  // Если выбранная дата - завтра и заказ сделан до 20:00
  if (isSameDay(deliveryDateFromState, tomorrow) && !isAfterEightPM) {
    options.push({ value: "morning", label: "9:00 - 12:00" });
    options.push({ value: "evening", label: "18:00 - 21:00" });
  }

  // Если выбранная дата - завтра и заказ сделан после 20:00
  if (isSameDay(deliveryDateFromState, tomorrow) && isAfterEightPM) {
    options.push({ value: "evening", label: "18:00 - 21:00" });
  }

  // Для любой другой даты
  if (
    !isSameDay(deliveryDateFromState, today) &&
    !isSameDay(deliveryDateFromState, tomorrow)
  ) {
    options.push({ value: "morning", label: "9:00 - 12:00" });
    options.push({ value: "evening", label: "18:00 - 21:00" });
  }

  return (
    <div className="sectionFormOrder mb-8 md:mb-0">
      <div className="containerForm">
        <Formik
          initialValues={formValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(values) => {
            if (values.payMethod === "cash") {
              handleSubmitCash(values);
            } else if (values.payMethod === "on-line") {
              handlePayment(values);
            }
          }}
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form className="wrapperForm" name="order-form" autoComplete="on">
              <label className="textLabel" style={{ color: labelColor }}>
                Ім&apos;я
                <Field
                  className="inputText"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldValue("name", e.target.value);
                    updateZustandState(values);
                  }}
                />
                <ErrorMessage name="name" component="p" className="error" />
              </label>
              <label className="textLabel" style={{ color: labelColor }}>
                Номер телефону
                <Field
                  className="inputText"
                  type="text"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldValue("phoneNumber", e.target.value);
                    updateZustandState(values);
                  }}
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="p"
                  className="error"
                />
              </label>
              <label className="textLabel" style={{ color: labelColor }}>
                Адреса
                <Field
                  className="inputText"
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldValue("address", e.target.value);
                    updateZustandState(values);
                  }}
                />
                <ErrorMessage name="address" component="p" className="error" />
              </label>
              <label
                className="textLabelHouseGroup"
                style={{ color: labelColor }}
              >
                Будинок
                <Field
                  className="inputText"
                  type="text"
                  name="house"
                  value={values.house}
                  onChange={(e) => {
                    handleChange(e);

                    setFieldValue("house", e.target.value);
                    updateZustandState(values);
                  }}
                />
                <ErrorMessage name="house" component="p" className="error" />
              </label>
              <label
                className="textLabelHouseGroup"
                style={{ color: labelColor }}
              >
                Корпус
                <Field
                  className="inputText"
                  type="text"
                  name="courpus"
                  value={values.courpus}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldValue("courpus", e.target.value);
                    updateZustandState(values);
                  }}
                />
                <ErrorMessage name="courpus" component="p" className="error" />
              </label>
              <label
                className="textLabelHouseGroup"
                style={{ color: labelColor }}
              >
                Квартира
                <Field
                  className="inputText"
                  type="text"
                  name="apartment"
                  value={values.apartment}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldValue("apartment", e.target.value);
                    updateZustandState(values);
                  }}
                />
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
                    {deliveryDateFromState &&
                      new Date(deliveryDateFromState).toLocaleDateString(
                        "uk-UA"
                      )}
                  </p>
                  <Image
                    className=" absolute right-0 top-3 mr-4"
                    priority
                    src="calendar.svg"
                    width={24}
                    height={24}
                    alt="Доставка воды Котовского, Фонтанка, Крижанівка, Поскот (одеская область)."
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
                      value={values.payMethod}
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue("payMethod", e.target.value);
                        updateZustandState(values);
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
                      value={values.deliveryTime}
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue("deliveryTime", e.target.value);
                        updateZustandState(values);
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
                    value={values.comment}
                    onChange={(e) => {
                      handleChange(e);
                      setFieldValue("comment", e.target.value);
                      updateZustandState(values);
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
                    className="radiobutton"
                    type="checkbox"
                    name="skipOrderConfirmation"
                    checked={values.skipOrderConfirmation}
                    onChange={(e) => {
                      const { checked } = e.target;
                      handleChange(e);
                      setFieldValue("skipOrderConfirmation", checked);
                      updateZustandState("skipOrderConfirmation", checked);
                    }}
                  />
                  Мені можна не телефонувати для підтвердження замовлення
                </label>
                {values.payMethod === "cash" && (
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
                        "Оформити замовлення"
                      )}
                    </button>
                  </div>
                )}

                {values.payMethod === "on-line" && (
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
                        "Оформити замовлення"
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
