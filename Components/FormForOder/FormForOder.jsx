"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import "./styles.css";

import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";
import CalendarReact from "../Calendar/Calendar";
import Link from "next/link";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Мінімум 2 символи").required("Поле обов'язкове"),
  phoneNumber: Yup.string().min(10).required("Поле обов'язкове"),
  address: Yup.string()
    .min(2, "Мінімум 2 символи")
    .required("Поле обов'язкове"),
  house: Yup.string().required("Поле обов'язкове"),
  courpus: Yup.string(),
  apartment: Yup.string(),
  payMethod: Yup.string().required("Поле обов'язкове"),
  deliveryTime: Yup.string().required("Поле обов'язкове"),
  comment: Yup.string(),
  skipOrderConfirmation: Yup.boolean(),
});

export const FormForOder = () => {
  const name = useCartStore((state) => state.name);
  const setName = useCartStore((state) => state.setName);

  const phoneNumber = useCartStore((state) => state.phoneNumber);
  const setPhoneNumber = useCartStore((state) => state.setPhoneNumber);

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

  const comment = useCartStore((state) => state.comment);
  const setComment = useCartStore((state) => state.setComment);

  const skipOrderConfirmation = useCartStore(
    (state) => state.skipOrderConfirmation
  );
  const setSkipOrderConfirmation = useCartStore(
    (state) => state.setSkipOrderConfirmation
  );

  const [labelColor, setLabelColor] = useState("#b3cbdb");
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    if (!deliveryDate) {
      setDeliveryDate(new Date());
    }
  }, [setDeliveryDate, deliveryDate]);
  function changeCommentHandler() {
    setSkipOrderConfirmation(!skipOrderConfirmation);
  }

  function handleClick() {
    setShowCalendar(false);
  }

  const handleDeliveryTimeChange = (event) => {
    setDeliveryTime(event.target.id);
  };

  const handleCommentChange = (newComment) => {
    console.log("newComment", newComment);
    setComment(newComment);
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

  // const handleInputName = (newName) => {
  //   setName(newName);
  // };
  // const handleInputTel = (newTel) => {
  //   setPhoneNumber(newTel);
  // };

  const handleChange = (type, value) => {
    setLocation(type, value);
  };

  const handleSubmit = (values) => {
    setAddress(values.address);
    setDeliveryTime(values.deliveryTime);
    setSkipOrderConfirmation(skipOrderConfirmation);
    setComment(values.comment);
    setName(values.name);
    setLocation("phoneNumber", values.phoneNumber);
    setLocation("house", values.house);
    setLocation("courpus", values.courpus);
    setLocation("apartment", values.apartment);
    setPayMethod(values.payMethod);

    window.location.href = "/pay";
  };

  return (
    <div className="sectionFormOrder mb-8 md:mb-0">
      <div className="containerForm">
        <Formik
          initialValues={{
            name: "",
            phoneNumber: "",
            address: address ? address : "",
            house: "",
            courpus: "",
            apartment: "",
            payMethod: "",
            deliveryTime: "",
            comment: "",
            false: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="wrapperForm" name="order-form" autoComplete="on">
              <label className="textLabel" style={{ color: labelColor }}>
                Ім&apos;я
                <Field className="inputText" type="text" name="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </label>
              <label className="textLabel" style={{ color: labelColor }}>
                Номер телефону
                <Field className="inputText" type="text" name="phoneNumber" />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="error"
                />
              </label>
              <label className="textLabel" style={{ color: labelColor }}>
                Адреса
                <Field className="inputText" type="text" name="address" />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error"
                />
              </label>
              <label
                className="textLabelHouseGroup"
                style={{ color: labelColor }}
              >
                Будинок
                <Field className="inputText" type="text" name="house" />
                <ErrorMessage name="house" component="div" className="error" />
              </label>
              <label
                className="textLabelHouseGroup"
                style={{ color: labelColor }}
              >
                Корпус
                <Field className="inputText" type="text" name="courpus" />
                <ErrorMessage
                  name="courpus"
                  component="div"
                  className="error"
                />
              </label>
              <label
                className="textLabelHouseGroup"
                style={{ color: labelColor }}
              >
                Квартира
                <Field className="inputText" type="text" name="apartment" />
                <ErrorMessage
                  name="apartment"
                  component="div"
                  className="error"
                />
              </label>

              <div className=" h-[50px] w-full  border-2  relative rounded-lg ">
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
                    <Field className="inputText" as="select" name="payMethod">
                      <option value="">Оберіть метод оплати</option>
                      <option value="cash">Готівкою кур&apos;єру</option>
                      {/* <option value="on-line">Онлайн оплата</option> */}
                    </Field>
                    <ErrorMessage
                      name="payMethod"
                      component="div"
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
                    >
                      <option value="">Оберіть час доставки</option>
                      <option value="morning">9:00 - 12:00</option>
                      <option value="evening">18:00 - 21:00</option>
                    </Field>
                    <ErrorMessage
                      name="deliveryTime"
                      component="div"
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
                  />
                  <ErrorMessage
                    name="comment"
                    component="div"
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

                <button
                  type="submit"
                  className={` py-4 px-16 hover:animate-pulse rounded-[14px] duration-200 text-white bg-[#91C81E] font-semibold hover:shadow "border-2 border-[#91C81E] text-greenMain"
                `}
                >
                  Замовити
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
