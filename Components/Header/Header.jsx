"use client";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const toggleMob = useCartStore((state) => state.toggleShowMob);
  const showMobMenu = useCartStore((state) => state.showMob);

  return (
    <>
      <>
        <header className="bg-[#00AFF0]">
          <div className="max-w-[1440px] mx-2 justify-between  lg:mx-auto h-[40px]  flex items-center">
            <div className="hidden lg:flex  mr-auto items-center ">
              <Link href={"#map"} className="flex items-center">
                <Image
                  className=" mt-1 ml-[72px] mr-[8px]"
                  priority
                  src="map-pin.svg"
                  height={18}
                  width={22}
                  alt="icon map"
                />

                <p className="text-white text-sm font-medium  leading-[21px] ">
                  Україна, місто Одеса, вул. Семена Палія, 72
                </p>
              </Link>
            </div>

            <div className="flex  md:w-[768px] lg:mr-[56px]  justify-between md:justify-normal xl:justify-end md:ml-auto lg:ml-0 ">
              <div className="hidden md:flex  md:mr-[32px]">
                <a href={"tel:+380968836688"} className=" flex">
                  <Image
                    className="hover:animate-pulse mr-[8px]"
                    priority
                    src="icon-whatsapp.svg"
                    height={32}
                    width={22}
                    alt="icon whatsapp"
                  />
                </a>

                <a
                  href="https://t.me/voda"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:animate-pulse flex"
                >
                  <Image
                    className=" "
                    priority
                    src="icon-telegram.svg"
                    height={32}
                    width={22}
                    alt="icon tg"
                  />
                </a>
              </div>

              <div className=" flex md:flex   md:mr-[32px] items-center">
                <a
                  href="https://t.me/voda"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:animate-pulse flex items-center"
                >
                  <Image
                    className="mr-[1.5px]"
                    priority
                    src="Icon-phone.svg"
                    height={24}
                    width={24}
                    alt="icon phone"
                  />

                  <p className="hover:animate-pulse text-white text-sm font-medium font-['Montserrat'] leading-[21px]">
                    +38 (096) 883 66 88
                  </p>
                </a>
              </div>

              <div className="hidden md:flex items-center ">
                <a
                  href="https://t.me/voda"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" flex items-center"
                >
                  <Image
                    className="mr-[1.5px]"
                    priority
                    src="Icon-gmail.svg"
                    height={24}
                    width={24}
                    alt="icon gmail"
                  />

                  <p className="hover:animate-pulse text-white text-sm font-medium font-['Montserrat'] leading-[21px]">
                    zdorovavodaodesa@gmail.com
                  </p>
                </a>
              </div>
            </div>

            <div className="lg:hidden">
              <Link href={"/"}>
                <Image
                  className="flex"
                  priority
                  src="/logoMobWhite.png"
                  height={30}
                  width={80}
                  alt="logo"
                />
              </Link>
            </div>

            {/* menu btn */}
            <div className="lg:hidden">
              <button
                onClick={() => {
                  toggleMob();
                }}
                className="relative block mx-auto w-6 h-6 cursor-pointer select-none"
              >
                <span
                  className={`block bg-white w-6 h-1 rounded-full mb-1 transition-transform ${
                    showMobMenu ? "transform rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block bg-white w-6 h-1 rounded-full mb-1 transition-opacity ${
                    showMobMenu ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block bg-white w-6 h-1 rounded-full transition-transform ${
                    showMobMenu ? "transform -rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </header>
      </>
    </>
  );
};

export default Header;
