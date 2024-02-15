"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [adress, setAdress] = useState("");

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const handleClick = (buttonName) => {
    switch (buttonName) {
      case "first":
        setFirst((prevState) => !prevState);
        break;
      case "second":
        setSecond((prevState) => !prevState);
        break;
      case "third":
        setThird((prevState) => !prevState);
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    setAdress(event.target.value);
  };

  return (
    <>
      <div className=" h-screen bg-[#00AFF0] w-full">
        <div className="flex-col  justify-center text-white text-center pt-[96px] pb-[60px]">
          <p className=" uppercase  font-bold text-[80px] leading-[96px] tracking-[3px]">
            чиста питна <br /> вода для вас
          </p>
          <p className="text-white text-xl font-medium   leading-[30px]">
            Доставка здорової води в Одессі селище Котовського
          </p>
        </div>

        <div className="flex justify-center">
          <div className=" ">
            <div
              className={` p-5  bg-opacity-80 justify-between items-center    rounded-bl-[14px] 
            
            ${
              first
                ? "rounded-br-[14px] bg-white bg-opacity-100"
                : "bg-greenHero"
            } `}
            >
              <button
                className="  w-[272px] pl-4 pr-2 flex-col"
                onClick={() => {
                  handleClick("first");
                }}
              >
                <div className=" justify-between items-end flex">Куди </div>

                <div className="self-stretch justify-between   mt-2">
                  <div className="text-gray-600 text-base font-semibold  leading-normal tracking-tight">
                    {adress || "Введіть адресу"}
                  </div>
                </div>
              </button>
              <div className={`${first ? "" : "hidden"}  bg-white  mt-10 `}>
                <div className=" relative">
                  <input
                    onChange={handleChange}
                    type="search"
                    id="search-dropdown"
                    className="w-full p-2.5 z-20 text-sm text-gray-900 border-b-2 border-black"
                    required
                    value={adress}
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

          <div className="">
            <button
              className="  w-[366px]"
              onClick={() => {
                handleClick("second");
              }}
            >
              <div
                className={`   ${
                  second
                    ? "rounded-br-[14px] rounded-bl-[14px] bg-white bg-opacity-100"
                    : "bg-green"
                }  p-5 bg-white bg-opacity-80 justify-between items-center  `}
              >
                <div className=" justify-between items-end flex">Час </div>

                <div className="  mt-2">
                  <div className="text-gray-600 text-start text-base font-semibold  leading-normal tracking-tight">
                    {adress || "Оберіть час "}
                  </div>
                </div>

                <div className={`${second ? "" : "hidden"}  bg-white  mt-10  `}>
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
                      <Image
                        className=" absolute right-0 mt-2.5 mr-4"
                        priority
                        src="calendar.svg"
                        width={24}
                        height={24}
                        alt="logo"
                      />
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
                              name="type"
                              type="radio"
                              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#91C81E]  hover:before:opacity-10"
                              id="on"
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
                            htmlFor="on"
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
                              name="type"
                              type="radio"
                              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity  hover:before:opacity-10"
                              id="off"
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
                            htmlFor="off"
                          >
                            18:00 - 21:00
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* куди */}

          <div className="">
            <div
              className={` p-5 bg-white bg-opacity-80 rounded-tr-[14px]  rounded-br-[14px] justify-between items-center ${
                third ? "rounded-bl-[14px] bg-white bg-opacity-100" : "bg-green"
              }`}
            >
              <button
                className="  w-[272px] pl-4 pr-2 flex-col"
                onClick={() => {
                  handleClick("third");
                }}
              >
                <div className=" justify-between items-end flex">Тип </div>

                <div className="self-stretch justify-between   mt-2">
                  <div className="text-gray-600 text-base font-semibold  leading-normal tracking-tight">
                    {adress || "Оберіть воду"}
                  </div>
                </div>
              </button>
              <div className={`${third ? "" : "hidden"}  bg-white  mt-10 `}>
                <div className=" relative">
                  <input
                    onChange={handleChange}
                    type="search"
                    id="search-dropdown"
                    className="w-full p-2.5 z-20 text-sm text-gray-900"
                    required
                    value={adress}
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
        </div>
      </div>
    </>
  );
};

export default Hero;
