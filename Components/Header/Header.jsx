"use client";
import { useEffect, useState } from "react";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

const Header = () => {
  const toggleMob = useCartStore((state) => state.toggleShowMob);
  const showMobMenu = useCartStore((state) => state.showMob);
  const cart = useCartStore((state) => state.waterItems);
  const otherProducts = useCartStore((state) => state.otherProducts);
  const toggleShowMob = useCartStore((state) => state.toggleShowMob);
  const closeMobMenu = useCartStore((state) => state.closeMobMenu);

  const cartAllQuantity = cart.reduce((acc, obj) => acc + obj.waterQuantity, 0);
  const otherProductsAllQuantity = otherProducts.reduce((acc, obj) => acc + obj.quantity, 0);

  return (
    <header className="bg-[#00AFF0] fixed w-full z-50">
      <div className="bg-[#00AFF0] w-full h-auto fixed top-0 left-0 px-2 md:px-6 sm:py-1 md:mx-0 justify-between  lg:mx-auto lg:h-[80px]  flex items-center">
        <div className="hidden lg:flex  mr-auto items-center">
          <Link href={"/"} className="w-[190px] pr-[8px]">
            <Image
              className="ml-auto"
              priority
              src="/logo-white.png"
              height={40}
              width={110}
              alt="Доставка воды Котовского, Фонтанка, Крижанівка, Поскот (одеская область)."
            />
          </Link>
        </div>

        <div className="hidden lg:flex ">
          <Link href={"/#map"} className="flex items-center">
            <Image
              className=" mt-1 ml-[72px] mr-[8px]"
              priority
              src="map-pin.svg"
              height={18}
              width={22}
              alt="icon map"
            />

            <p className="text-white text-sm  lg:text-base font-medium  leading-[21px] whitespace-nowrap mr-[72px]">
              Україна, місто Одеса, вул. Семена Палія, 72
            </p>
          </Link>
        </div>

        <div className="flex  md:w-full lg:mr-[56px] items-center justify-between md:justify-normal lg:justify-end md:ml-auto lg:ml-0 ">
          <p className=" hidden lg:flex w-[100px] sm:w-auto  text-white text-sm  lg:text-lg font-medium font-['Montserrat'] leading-[21px]">
            Шоурум &quot;АкватIКа&quot;
          </p>
          <Link href={"/#map"} className="flex lg:hidden items-center">
            <p className="w-[100px] sm:w-auto  text-white text-sm  lg:text-lg font-medium font-['Montserrat'] leading-[21px]">
              Шоурум &quot;АкватIКа&quot;
            </p>
          </Link>

          <div className="hidden md:flex  md:ml-[32px]">
            <a target="_blank" href={"viber://chat?number=+380968836688"} className=" flex">
              <Image
                className="hover:animate-pulse mr-[8px]"
                priority
                src="icon-whatsapp.svg"
                height={42}
                width={42}
                alt="icon whatsapp"
              />
            </a>

            <a
              href="https://t.me/zdorova_voda_aquatica"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:animate-pulse flex"
            >
              <Image
                className=" "
                priority
                src="icon-telegram.svg"
                height={42}
                width={42}
                alt="icon tg"
              />
            </a>
          </div>
        </div>

        <div className="lg:hidden  md:mr-4 xl:mr-20">
          <Link
            href={"/"}
            onClick={() => {
              closeMobMenu();
            }}
          >
            <Image
              className="flex"
              priority
              src="/footer-logo.png"
              height={30}
              width={80}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex gap-10 lg:hidden md:mr-4">
          <Link className="flex hover:animate-pulse transition-all duration-300" href={"/cart"}>
            <button className="relative ">
              <Image className="" priority src="basket.svg" width={46} height={36} alt="logo" />
              <p
                className={
                  "absolute w-4 h-4 text-[10px] text-orange-400 font-semibold right-[10%] top-[4%] md:top-[0] md:right-[5%]"
                }
              >
                {cartAllQuantity + otherProductsAllQuantity}
              </p>
            </button>
          </Link>
        </div>
        {/* menu btn */}
        <div className="lg:hidden ">
          <button
            onClick={() => {
              const bodyRef = document.querySelector("body");
              toggleMob();
              bodyRef.classList.toggle("no-scroll");
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
      <div className="bg-[#fff] w-full fixed top-[42px] sm:top-[44px] left-0 flex items-center justify-center py-[6px] lg:hidden shadow-[4px_10px_30px_0_rgba(0,0,0,0.06)]">
        <Link
          id="to_catalog"
          className="h-[40px]"
          href={"/water"}
          onClick={() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "view_catalog_water",
            });
          }}
        >
          <Button
            text={"Замовити воду"}
            className="px-10 py-[8px] lg:mr-[30px] xl:mr-[64.5px] max-w-[250px] max-h-[40px]"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
