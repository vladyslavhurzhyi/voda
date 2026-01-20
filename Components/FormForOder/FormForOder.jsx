"use client";

import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import InputMask from "react-input-mask";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import "./styles.css";
import { isSameDay, parse, isAfter, addDays, isSunday } from "date-fns";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import { selectFinalPrice, selectFinalDiscount } from "@/app/zustand/cartState/cartSelectors";
import Image from "next/image";
import CalendarReact from "../Calendar/Calendar";
import { generateDescrip } from "@/app/utils/generateDescription";
import { sendPurchaseEvent } from "@/app/utils/sendPurchaseEvent";
import { isSundayCheck } from "@/app/utils/isSundayChek";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Мінімум 2 символи").required("Поле обов'язкове"),
  phoneNumber: Yup.string()
    .matches(/^\+380 \d{2} \d{3} \d{2} \d{2}$/, "Невірний формат номера")
    .required("Поле обов'язкове"),
  address: Yup.string().required("Поле обов'язкове"),
  house: Yup.string().required("Поле обов'язкове"),
  courpus: Yup.string(),
  apartment: Yup.string(),
  payMethod: Yup.string(),
  deliveryDate: Yup.string().required("Поле обов'язкове"),
  deliveryTime: Yup.string()
    .required("Поле обов'язкове")
    .notOneOf(["Оберіть час доставки", "Оберіть інший день"], "Будь ласка, оберіть час доставки"),
  comment: Yup.string(),
  skipOrderConfirmation: Yup.boolean(),
});

export const FormForOder = () => {
  const cart = useCartStore((state) => state.waterItems);
  const otherProducts = useCartStore((state) => state.otherProducts);
  const taraQuantity = useCartStore((state) => state.tara);
  const finalPrice = useCartStore(selectFinalPrice);
  const finalDiscount = useCartStore(selectFinalDiscount);

  const setName = useCartStore((state) => state.setName);

  const setPhoneNumber = useCartStore((state) => state.setPhoneNumber);

  const addressFromState = useCartStore((state) => state.address);

  const newClient = useCartStore((state) => state.newClient);
  const newClientAction = useCartStore((state) => state.newClientAction);

  const houseFromState = useCartStore((state) => state.house);
  const courpusFromState = useCartStore((state) => state.courpus);
  const apartmentFromState = useCartStore((state) => state.apartment);

  const setPayMethod = useCartStore((state) => state.setPayMethod);

  const setAddress = useCartStore((state) => state.setAddressToStore);

  const setLocation = useCartStore((state) => state.setLocation);

  const setDeliveryTime = useCartStore((state) => state.setTimeToStore);

  const deliveryDateFromState = useCartStore((state) => state.deliveryDate);
  const setDeliveryDate = useCartStore((state) => state.setDeliveryDateToStore);

  const setComment = useCartStore((state) => state.setComment);

  const [loading, setLoading] = useState(false);

  const setSkipOrderConfirmation = useCartStore((state) => state.setSkipOrderConfirmation);

  const [labelColor, setLabelColor] = useState("#b3cbdb");
  const [showCalendar, setShowCalendar] = useState(false);

  const updateZustandState = (values) => {
    setName(values.name);
    setPhoneNumber(values.phoneNumber.replace(/\s/g, ""));
    setAddress(values.address);
    setLocation("house", values.house);
    setLocation("courpus", values.courpus);
    setLocation("apartment", values.apartment);
    setLocation("floor", values.floor);
    setPayMethod(values.payMethod);
    setDeliveryDate(values.deliveryDate);
    setDeliveryTime(values.deliveryTime);
    setComment(values.comment);
    setSkipOrderConfirmation(values.skipOrderConfirmation);
  };

  const handleSubmitCash = async (values) => {
    try {
      updateZustandState(values);

      setLoading(true);

      await axios.post("/api/telegram", {
        name: values.name,
        phoneNumber: values.phoneNumber.replace(/\s/g, ""),
        address: values.address,
        house: values.house,
        courpus: values.courpus,
        apartment: values.apartment,
        floor: values.floor,
        deliveryDate: values.deliveryDate,
        deliveryTime: values.deliveryTime,
        newClient,
        newClientAction,
        payMethodCart: values.payMethod,
        commentState: values.comment,
        skipOrderConfirmation: values.skipOrderConfirmation,
        cart,
        otherProducts,
        finalPrice,
        finalDiscount,
        taraQuantity,
      });
      sendPurchaseEvent(finalPrice);

      // Clear cart first
      useCartStore.getState().resetAllStore();

      setLoading(false);

      //здесь я вставила код для отслеживания события отправки формы. если что-то пойдет не так, удалить его

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "purchase",
      });
      // до этих пор
      window.location.href = "/success-pay";
    } catch (error) {
      console.error("Ошибка при отправке данных в Telegram:", error);
    }
  };

  const handlePayment = async (values) => {
    try {
      updateZustandState(values);

      setLoading(true);

      await axios.post("/api/telegram", {
        name: values.name,
        phoneNumber: values.phoneNumber.replace(/\s/g, ""),
        address: values.address,
        house: values.house,
        courpus: values.courpus,
        apartment: values.apartment,
        floor: values.floor,
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
        finalDiscount,
        taraQuantity,
      });

      //здесь я вставила код для отслживания события. если что-то не так, удалить.

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "purchase",
      });

      //здесь конец вставленного кода

      sendPurchaseEvent(finalPrice);

      // Clear cart first
      useCartStore.getState().resetAllStore();

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

  const threeThirtyPM = parse("15:30", "HH:mm", new Date());
  const sevenThirtyPM = parse("19:30", "HH:mm", new Date());

  const isAfterTheeFirtyPM = isAfter(new Date(), threeThirtyPM);
  const isAfterSevenThirtyPM = isAfter(new Date(), sevenThirtyPM);

  const today = new Date();
  const tomorrow = addDays(today, 1);
  const deliveryDateFormatted = new Date(deliveryDateFromState);
  const options = [];

  // Если выбранная дата - сегодня и заказ сделан до 15:30
  if (isSameDay(deliveryDateFormatted, today) && !isAfterTheeFirtyPM && !isSunday(today)) {
    options.push({ value: "evening", label: "16:00 - 20:00" });
  }

  // Если выбранная дата - завтра и заказ сделан до 19:30
  if (
    isSameDay(deliveryDateFormatted, tomorrow) &&
    !isAfterSevenThirtyPM &&
    !isSunday(deliveryDateFormatted)
  ) {
    options.push({ value: "morning", label: "9:00 - 12:00" });
    options.push({ value: "evening", label: "16:00 - 20:00" });
  }

  // Если выбранная дата - завтра и заказ сделан после 19:30
  if (
    isSameDay(deliveryDateFormatted, tomorrow) &&
    isAfterSevenThirtyPM &&
    !isSunday(deliveryDateFormatted)
  ) {
    options.push({ value: "evening", label: "16:00 - 20:00" });
  }

  // Если выбранная дата воскресенье, завтра и заказ сделан до 19:30
  if (isSunday(tomorrow) && isSameDay(deliveryDateFormatted, tomorrow) && !isAfterSevenThirtyPM) {
    options.push({ value: "morning", label: "9:00 - 12:00" });
  }

  // Если выбранная дата - воскресенье и не сегодня/завтра
  if (
    isSunday(deliveryDateFromState) &&
    !isSameDay(deliveryDateFormatted, today) &&
    !isSameDay(deliveryDateFormatted, tomorrow)
  ) {
    options.push({ value: "morning", label: "9:00 - 12:00" });
  }

  // Для любой другой даты
  if (
    !isSameDay(deliveryDateFormatted, today) &&
    !isSameDay(deliveryDateFormatted, tomorrow) &&
    !isSunday(deliveryDateFormatted)
  ) {
    options.push({ value: "morning", label: "9:00 - 12:00" });
    options.push({ value: "evening", label: "16:00 - 20:00" });
  }

  return (
    <div className="sectionFormOrder mb-8 md:mb-0">
      <div className="containerForm">
        <Formik
          initialValues={{
            name: "",
            phoneNumber: "",
            address: addressFromState || "",
            house: houseFromState || "",
            courpus: courpusFromState || "",
            apartment: apartmentFromState || "",
            floor: "",
            payMethod: "cash",
            deliveryDate: deliveryDateFromState || isSundayCheck(),
            deliveryTime: "Оберіть час доставки",
            comment: "",
            skipOrderConfirmation: false,
          }}
          validationSchema={validationSchema}
          validateOnMount={true}
          onSubmit={(values) => {
            if (values.payMethod === "cash") {
              handleSubmitCash(values);
            } else if (values.payMethod === "on-line") {
              handlePayment(values);
            }
          }}
        >
          {({ values, handleChange, setFieldValue, isValid, dirty }) => (
            <Form id="submit_order" className="wrapperForm" name="order-form" autoComplete="on">
              <label className="textLabel">
                Ім&apos;я<span className="required">*</span>
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
              <label className="textLabel">
                Номер телефону<span className="required">*</span>
                <Field name="phoneNumber">
                  {({ field }) => (
                    <InputMask
                      {...field}
                      mask="+380 99 999 99 99"
                      maskChar={null}
                      value={values.phoneNumber}
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue("phoneNumber", e.target.value);
                        updateZustandState({ ...values, phoneNumber: e.target.value });
                      }}
                    >
                      {(inputProps) => <input {...inputProps} type="text" className="inputText" />}
                    </InputMask>
                  )}
                </Field>
                <ErrorMessage name="phoneNumber" component="p" className="error" />
              </label>
              <label className="textLabel">
                Вулиця<span className="required">*</span>
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
              <label className="textLabel">
                Будинок<span className="required">*</span>
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

              <label className="textLabel">
                Підʼїзд
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
              <label className="textLabel">
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
                <ErrorMessage name="apartment" component="p" className="error" />
              </label>

              <label className="textLabel" style={{ marginBottom: "10px" }}>
                Поверх
                <Field
                  className="inputText"
                  type="text"
                  name="floor"
                  value={values.floor}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldValue("floor", e.target.value);
                    updateZustandState(values);
                  }}
                />
                <ErrorMessage name="floor" component="p" className="error" />
              </label>

              <label className="textLabel">
                Метод оплати<span className="required">*</span>
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
                <ErrorMessage name="payMethod" component="p" className="error" />
              </label>

              <label className="textLabel">
                День доставки<span className="required">*</span>
                <div className=" font-semibold h-[50px] w-full  md:max-w-[360px]  md:mt-4 lg:mt-0 border-2  relative rounded-lg ">
                  {showCalendar && (
                    <CalendarReact
                      changeDeliveryDate={(date) => {
                        setDeliveryDate(date);
                        setFieldValue("deliveryDate", date);
                      }}
                      handleClick={() => {
                        setShowCalendar(false);
                      }}
                      name="deliveryDate"
                      value={deliveryDateFromState}
                    />
                  )}
                  <button
                    onClick={() => {
                      if (!showCalendar) setShowCalendar(true);
                    }}
                    type="button"
                    className="w-full h-full hover:bg-slate-50 rounded-lg"
                  >
                    <p className=" text-greenMain text-start ml-4">
                      {deliveryDateFromState &&
                        new Date(deliveryDateFromState).toLocaleDateString("uk-UA")}
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
                <ErrorMessage name="deliveryDate" component="p" className="error" />
              </label>

              <label className="textLabel">
                Час доставки<span className="required">*</span>
                <Field
                  className={`inputTextTime ${
                    values.deliveryTime === "Оберіть час доставки" ? "text-red-500" : "text-black"
                  }`}
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
                    {options.length === 0 ? "Оберіть інший день" : "Оберіть час доставки"}
                  </option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                <p
                  className={`${
                    isSunday(deliveryDateFromState) ? "text-red-500" : "text-white"
                  } uppercase font-bold`}
                >
                  Неділя - тільки ранок
                </p>
              </label>

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
                  <ErrorMessage name="comment" component="p" className="error" />
                </label>
              </div>

              <div className="flex flex-col md:flex-row gap-[10px] justify-between w-full items-center mb-0">
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

                <button
                  className={`py-4 px-16 rounded-[14px] duration-200 text-white font-semibold hover:shadow hover:animate-pulse
      ${
        loading
          ? "opacity-50 cursor-not-allowed bg-[#91C81E]"
          : isValid
            ? "bg-[#91C81E] border-2 border-[#91C81E]"
            : "bg-[#8e8e8e] cursor-not-allowed"
      }
    `}
                  type="submit"
                  disabled={loading || !isValid || !dirty}
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
