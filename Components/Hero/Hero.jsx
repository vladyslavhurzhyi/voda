"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [adress, setAdress] = useState("");

  const [first, setFirst] = useState(false);

  const handleClick = () => {
    setFirst((prevState) => !prevState);
  };
  const handleChange = (event) => {
    setAdress(event.target.value);
  };

  return (
    <>
      <div className=" h-screen bg-blue-300 w-full">
        <div className="flex-col  justify-center text-white text-center ">
          <p className=" uppercase  font-bold text-[80px] leading-[96px] tracking-[3px]">
            чиста питна <br /> вода для вас
          </p>
          <p className="text-white text-xl font-medium   leading-[30px]">
            Доставка здорової води в Одессі селище Котовського
          </p>
        </div>

        <div className="flex justify-center">
          <div className=" p-5 bg-white bg-opacity-80 rounded-tr-[14px] rounded-bl-[14px] rounded-br-[14px] justify-between items-center ">
            <button
              className="  w-[272px] pl-4 pr-2 flex-col"
              onClick={handleClick}
            >
              <div className=" justify-between items-end flex">Куди </div>

              <div className="self-stretch justify-between   mt-2">
                <div className="text-gray-600 text-base font-semibold  leading-normal tracking-tight">
                  {adress || "Введіть адресу"}
                </div>
              </div>
            </button>
            <div
              className={`${first ? "" : "hidden"}  bg-white h-[200px] mt-10 `}
            >
              <div className="border-b-2 border-black relative">
                <input
                  onChange={handleChange}
                  type="search"
                  id="search-dropdown"
                  class="w-full p-2.5 z-20 text-sm text-gray-900"
                  required
                  value={adress}
                />
                <button
                  type="submit"
                  class="absolute top-0 end-0 mr-2 h-full text-white "
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
    </>
  );
};

export default Hero;
