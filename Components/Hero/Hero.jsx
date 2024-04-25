"use client";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import CalendarReact from "../Calendar/Calendar";
import Button from "../Button/Button";
import Link from "next/link";
import { useCartStore } from "@/app/zustand/cartState/cartState";

import {
  calcDiscount,
  calculateDiscountMineralWater,
  calculateDiscountNormalWater,
} from "@/app/utils/discountCalculation";
import { calcWaterPrice } from "@/app/utils/calculateWaterPrice";

const Hero = () => {
  const cart = useCartStore((state) => state.waterItems);

  const addItem = useCartStore((state) => state.addItem);

  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [selectWater, setSelectWater] = useState(false);
  const [selectWaterVolume, setSelectWaterVolume] = useState(false);

  const [waterType, setWaterType] = useState("mineralWater");
  const [waterVolume, setWaterVolume] = useState(19);
  const [waterQuantity, setWaterQuantity] = useState(0);

  const [discount, setDiscount] = useState(0);

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [deliveryTime, setDeliveryTime] = useState("morning");

  const [price, setPrice] = useState(0);
  const [bottlePrice, setBottlePrice] = useState(0);

  useEffect(() => {
    if (waterQuantity !== 1) {
      setDiscount(calcDiscount(waterQuantity, waterType));
    }

    const priceForWater = calcWaterPrice(waterVolume, waterType, waterQuantity);

    setBottlePrice(priceForWater);

    setPrice(priceForWater * waterQuantity);
  }, [waterQuantity, waterType, waterVolume, discount]);

  const addToCartHandler = () => {
    if (waterQuantity === 0) return;
    addItem({
      waterType: waterType,
      waterQuantity: waterQuantity,
      waterVolume: waterVolume,
      price: bottlePrice,
      discount: discount,
    });

    setDiscount(0);
  };

  const scroll = () => {
    scrollTo({
      top: 300,
      left: 0,
      behavior: "smooth",
    });
  };

  const toggleFirstMenu = (e) => {
    e.stopPropagation();
    setFirst((prevState) => !prevState);
    setSecond(false);
    setThird(false);
    setShowCalendar(false);
  };

  const toggleSecondMenu = (e) => {
    e.stopPropagation();
    setFirst(false);
    setSecond((prevState) => !prevState);
    setThird(false);
    setShowCalendar(false);
  };

  const toggleThirdMenu = (e) => {
    e.stopPropagation();
    setFirst(false);
    setSecond(false);
    setThird((prevState) => !prevState);
    setShowCalendar(false);
  };

  const resetOrder = () => {
    setWaterType("mineralWater");
    setWaterVolume(19);
    setWaterQuantity(0);
  };

  const addWater = (buttonName) => {
    switch (buttonName) {
      case "+":
        setWaterQuantity((prevState) => prevState + 1);
        break;

      case "-":
        setWaterQuantity((prevState) => {
          if (prevState === 0) return 0;
          return prevState - 1;
        });
        break;

      default:
        break;
    }
  };

  const handleDeliveryTimeChange = (event) => {
    setDeliveryTime(event.target.id);
  };

  const handleClick = (buttonName) => {
    switch (buttonName) {
      case "waterVolume19":
        setWaterVolume(19);
        setSelectWaterVolume(false);

        break;

      case "waterVolume13":
        setWaterVolume(13);
        setSelectWaterVolume(false);
        setDiscount(0);

        break;

      case "waterVolume11":
        setWaterVolume(11);
        setSelectWaterVolume(false);
        setDiscount(0);

        break;

      case "mineralWater":
        setWaterType("mineralWater");
        setSelectWater(false);
        break;

      case "normalWater":
        setWaterType("normalWater");
        setSelectWater(false);
        break;

      case "selectWater":
        setSelectWater((prevState) => !prevState);
        break;

      case "selectWaterVolume":
        setSelectWaterVolume((prevState) => !prevState);
        break;

      case "first":
        setFirst((prevState) => !prevState);
        setSecond(false);
        setThird(false);
        setShowCalendar(false);
        break;
      case "second":
        setFirst(false);
        setSecond((prevState) => !prevState);
        setThird(false);
        setShowCalendar(false);
        break;
      case "third":
        setFirst(false);
        setSecond(false);
        setThird((prevState) => !prevState);
        setShowCalendar(false);
        setSelectWaterVolume(false);
        setSelectWater(false);

        break;

      case "calendar":
        setShowCalendar((prevState) => !prevState);
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <>
      <div className="pb-6 pt-[100px] h-full min-h-screen bg-[#00AFF0] md:pb-2 w-full">
        <div className="flex-col  justify-center text-white text-center pt-[96px] pb-[60px]">
          <p className=" uppercase  font-bold text-[30px] lg:text-[80px] leading-[56px] lg:leading-[96px] tracking-[3px]">
            чиста питна <br /> вода для вас
          </p>
          <p className="text-white text-xl font-medium   leading-[30px]">
            Доставка здорової води в Одессі селище Котовського
          </p>
        </div>

        <div className=" flex-col md:flex-row items-center md:items-start   flex justify-center  mx-auto">
          <div className="">
            <div
              className={`max-w-[360px] min-w-[360px]   md:w-[400px] ${
                !first && "cursor-pointer"
              }  p-5   justify-between items-center rounded-tl-[14px] rounded-tr-[14px] md:rounded-tl-[0px] md:rounded-tr-[0px]   md:rounded-bl-[14px] 
            
            ${
              first
                ? "rounded-bl-[0px] md:rounded-bl-[14px] rounded-br-[0px] md:rounded-br-[14px] bg-white bg-opacity-100"
                : "bg-greenHero bg-opacity-80"
            } `}
            >
              <div
                className=" w-full  pl-4 pr-2 "
                onClick={() => {
                  handleClick("first");
                }}
              >
                <div
                  className={`${
                    address && "text-greenMain"
                  } justify-between items-end flex`}
                >
                  {address || "Куди"}
                </div>

                <div className="flex self-stretch justify-between   mt-2">
                  <div className=" text-gray-600 text-base font-semibold  leading-normal tracking-tight">
                    {
                      <p
                        className={`${
                          first ? "text-orange-400" : "text-black"
                        } `}
                      >
                        {!first && address
                          ? "Змінити адресу"
                          : "Введіть адресу"}
                      </p>
                    }
                  </div>

                  <button
                    className=""
                    type="button"
                    onClick={(e) => toggleFirstMenu(e)}
                  >
                    <Image
                      className={`${!first && "rotate-180"}`}
                      priority
                      src="chevron-btn.svg"
                      width={24}
                      height={24}
                      alt="logo"
                    />
                  </button>
                </div>
              </div>
              <div className={`${first ? "" : "hidden"}  bg-white  mt-10 `}>
                <div className=" relative">
                  <input
                    onChange={handleChange}
                    type="search"
                    id="search-dropdown"
                    className="w-full p-2.5 z-20 text-sm text-gray-900 border-b-2 border-black"
                    required
                    value={address}
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 mr-2 h-full text-white "
                  >
                    <Image
                      className="bg-white z-20"
                      priority
                      src="loop.svg"
                      width={20}
                      height={20}
                      alt="logo"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* час */}

          <div
            className={`${
              !second && "cursor-pointer"
            }  max-w-[360px] min-w-[360px]  md:w-[400px] `}
          >
            <div
              className={`  ${
                second
                  ? "rounded-br-[0px] rounded-bl-[0px] md:rounded-br-[14px] md:rounded-bl-[14px] bg-white bg-opacity-100"
                  : "bg-greenHero bg-opacity-80 "
              }  p-5  relative  justify-between items-center  `}
            >
              {showCalendar && (
                <CalendarReact
                  handleClick={() => {
                    handleClick("calendar");
                  }}
                  changeDeliveryDate={setDeliveryDate}
                />
              )}
              <div
                className="pl-4 pr-2 w-full"
                onClick={() => {
                  handleClick("second");
                }}
              >
                <div className={` justify-between items-end flex`}>
                  {deliveryDate && deliveryTime ? (
                    <div className="flex gap-4">
                      <p className="text-greenMain">
                        {deliveryDate.toLocaleDateString()}
                      </p>
                      <p className="text-greenMain">
                        {deliveryTime === "morning"
                          ? "9:00 - 12:00"
                          : "18:00 - 21:00"}
                      </p>
                    </div>
                  ) : (
                    "Час"
                  )}{" "}
                </div>

                <div className={` mt-2`}>
                  <div className="flex  justify-between   text-start text-base font-semibold  leading-normal tracking-tight">
                    <p className={`${second ? "text-orange-500" : ""}`}>
                      {deliveryDate && deliveryTime && !second
                        ? "Змінити час"
                        : "Оберіть час"}
                    </p>
                    <button
                      className=""
                      type="button"
                      onClick={(e) => toggleSecondMenu(e)}
                    >
                      <Image
                        className={`${!second && "rotate-180"}`}
                        priority
                        src="chevron-btn.svg"
                        width={24}
                        height={24}
                        alt="logo"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={`${second ? "" : "hidden"}    mt-10  `}>
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
                    <button
                      onClick={() => {
                        handleClick("calendar");
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

                  <div>
                    <p className=" text-start mt-4 mb-4">
                      Оберіть час доставки:
                    </p>

                    {/* //////radiobtn */}
                    <div className="flex  justify-between">
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* тип */}

          <div className="">
            <div
              className={` max-w-[360px] min-w-[360px]  md:w-[400px] ${
                !third && "cursor-pointer"
              }   p-5 rounded-tr-[0px]  md:rounded-tr-[14px]  rounded-bl-[14px] md:rounded-bl-[0px]  rounded-br-[14px]  items-center ${
                third
                  ? "lg:rounded-bl-[14px] bg-white bg-opacity-100"
                  : "bg-greenHero bg-opacity-80"
              }`}
            >
              <div
                className="  w-full pl-4 pr-2 flex-col"
                onClick={() => {
                  handleClick("third");
                }}
              >
                <div className="flex  justify-between">Тип </div>

                <div className="flex  justify-between mt-2">
                  <div
                    className={`${
                      third ? " text-orange-400" : "  text-black"
                    } text-base  font-semibold  leading-normal tracking-tight `}
                  >
                    <p>
                      {" "}
                      {third ? "Оберіть свою Здорову воду" : "Оберіть воду"}
                    </p>
                  </div>
                  <button
                    className=""
                    type="button"
                    onClick={(e) => toggleThirdMenu(e)}
                  >
                    <Image
                      className={`${!third && "rotate-180"}`}
                      priority
                      src="chevron-btn.svg"
                      width={24}
                      height={24}
                      alt="logo"
                    />
                  </button>
                </div>
              </div>
              {selectWater && third && (
                <div className="w-full ">
                  <button
                    onClick={() => {
                      handleClick("normalWater");
                    }}
                    type="button"
                    className={` ${
                      waterType === "normalWater"
                        ? "border-greenMain text-greenMain"
                        : "border-gray-400"
                    } w-full mb-[16px] mt-4 text-[20px] pt-[8px] pb-[8px] rounded-xl border-2`}
                  >
                    Очищена
                  </button>

                  <button
                    onClick={() => {
                      handleClick("mineralWater");
                    }}
                    type="button"
                    className={` ${
                      waterType === "mineralWater"
                        ? "border-greenMain text-greenMain"
                        : "border-gray-400"
                    } w-full text-[20px] pt-[8px] pb-[8px] rounded-xl border-2`}
                  >
                    Мінералізована
                  </button>
                </div>
              )}{" "}
              {selectWaterVolume && third && (
                <div className="w-full   bg-white  px-4">
                  <button
                    onClick={() => {
                      handleClick("waterVolume19");
                    }}
                    type="button"
                    className={` ${
                      waterVolume === 19
                        ? "border-greenMain text-greenMain"
                        : "border-gray-400"
                    } w-full mb-[16px] mt-4 text-[20px] pt-[8px] pb-[8px] rounded-xl border-2`}
                  >
                    19л
                  </button>

                  <button
                    onClick={() => {
                      handleClick("waterVolume13");
                    }}
                    type="button"
                    className={` ${
                      waterVolume === 13
                        ? "border-greenMain text-greenMain"
                        : "border-gray-400"
                    } w-full mb-[16px] text-[20px] pt-[8px] pb-[8px] rounded-xl border-2`}
                  >
                    13л - мин 2 бут
                  </button>

                  <button
                    onClick={() => {
                      handleClick("waterVolume11");
                    }}
                    type="button"
                    className={` ${
                      waterVolume === 11
                        ? "border-greenMain text-greenMain"
                        : "border-gray-400"
                    } w-full text-[20px] pt-[8px] pb-[8px] rounded-xl border-2`}
                  >
                    11л - мин 2 бут
                  </button>
                </div>
              )}
              {
                <div className={`${third ? "" : "hidden"}  bg-white mt-4 `}>
                  <div className=" relative">
                    <div className="flex justify-between border-t-[1px] pt-[24px] mb-8 border-gray-300">
                      <button
                        onClick={() => {
                          handleClick("selectWater");
                        }}
                        type="button"
                        className=" inline-flex  mr-[20px]"
                      >
                        {waterType === "normalWater"
                          ? "Очищена"
                          : "Мінералізована "}
                        <Image
                          className=""
                          priority
                          src="chevron-down.svg"
                          width={24}
                          height={24}
                          alt="logo"
                        />
                      </button>

                      <button
                        type="button"
                        className=" inline-flex"
                        onClick={() => {
                          handleClick("selectWaterVolume");
                        }}
                      >
                        {waterVolume}л{" "}
                        <Image
                          className=""
                          priority
                          src="chevron-down.svg"
                          width={24}
                          height={24}
                          alt="logo"
                        />
                      </button>
                      <div className="inline-flex gap-2 ">
                        <button
                          type="button"
                          onClick={() => {
                            addWater("-");
                          }}
                        >
                          {" "}
                          <Image
                            className=""
                            priority
                            src="minus-circle-cart.svg"
                            width={24}
                            height={24}
                            alt="logo"
                          />
                        </button>
                        <p>{waterQuantity}</p>
                        <button
                          type="button"
                          onClick={() => {
                            addWater("+");
                          }}
                        >
                          {" "}
                          <Image
                            className=""
                            priority
                            src="plus-circle-green.svg"
                            width={24}
                            height={24}
                            alt="logo"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-b-[1px] border-gray-300 pb-[24px]  ">
                    <div className="flex items-center justify-between">
                      <div>Вартість</div>
                      <div>
                        <p
                          className={`${
                            price !== 0
                              ? " text-black font-semibold"
                              : "text-gray-200"
                          }  text-[24px]`}
                        >
                          {price === 0 ? "00.00" : price} ₴
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>Знижка</div>
                      <div>
                        <p
                          className={`${
                            discount !== 0
                              ? " text-black font-semibold"
                              : "text-gray-200"
                          }  text-[24px]`}
                        >
                          {discount === 0
                            ? "00.00"
                            : waterQuantity !== 1
                            ? discount * waterQuantity
                            : "00.00"}{" "}
                          ₴
                        </p>
                      </div>
                    </div>
                  </div>

                  {(cart.length === 0 && price === 0 && (
                    <div>
                      <p className=" text-center py-[24px] border-2 border-orange-400 mt-4  rounded-xl px-[61px] text-orange-400">
                        Оберіть тип води, об’єм та кількість бутлів
                      </p>
                    </div>
                  )) || (
                    <>
                      <div>
                        <Button
                          text={"Замовити"}
                          className={`py-[18px] w-full mt-8 mb-6 ${
                            waterQuantity === 0
                              ? " bg-gray-400 cursor-not-allowed"
                              : " bg-greenMain"
                          }`}
                          onClick={() => {
                            addToCartHandler();
                            resetOrder();
                            scroll();
                          }}
                        />
                      </div>
                    </>
                  )}

                  {cart.length > 0 && (
                    <div className=" border-t-[1px]  border-gray-300 pt-4 pb-4">
                      <div className="flex mb-2 justify-between text-[16px]  font-semibold text-[#5A5F69]">
                        <p className="">В кошику</p>
                        <p>
                          {cart.reduce(
                            (acc, obj) => acc + obj.price * obj.waterQuantity,
                            0
                          )}
                          ₴
                        </p>
                      </div>

                      {cart &&
                        cart.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="flex text-[#5A5F69] mb-2"
                            >
                              <p className=" mr-4">
                                {item.waterType === "mineralWater"
                                  ? "Мінералізована"
                                  : "Очищена"}
                              </p>
                              <p>
                                {item.waterVolume}л - {item.waterQuantity}x
                              </p>
                            </div>
                          );
                        })}

                      <div className="flex justify-between pb-4">
                        <p> Знижка </p>
                        <p
                          className={`${" text-black font-semibold"}  text-[16px]`}
                        >
                          {calculateDiscountMineralWater(cart) +
                            calculateDiscountNormalWater(cart)}
                          ₴
                        </p>
                      </div>

                      <div className="flex justify-end pt-5 border-t-2">
                        <p
                          className={
                            "text-[24px] font-semibold text-[#F5821E] "
                          }
                        >
                          {cart.reduce(
                            (acc, obj) => acc + obj.price * obj.waterQuantity,
                            0
                          ) -
                            cart.reduce(
                              (acc, obj) =>
                                acc + obj.discount * obj.waterQuantity,
                              0
                            )}
                          ₴
                        </p>
                      </div>

                      <div>
                        <Link href={"/cart"}>
                          <Button
                            text={"Оформити замовлення"}
                            className={`py-[18px] w-full mt-8 mb-6`}
                            bg={"white"}
                            border
                            textColor
                          />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
