"use client";

import Image from "next/image";
import Button from "../Button/Button";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import CatalogBar from "../CatalogBar/CatalogBar";
import { useCartStore } from "@/app/zustand/cartState/cartState";

const NavBar = () => {
  const [catalogShow, setCatalogShow] = useState(false);

  const showMobMenu = useCartStore((state) => state.showMob);
  const toggleShowMob = useCartStore((state) => state.toggleShowMob);

  const catalogBarRef = useRef(null);

  const cart = useCartStore((state) => state.cartItems);

  const closeCatalogShow = () => {
    setCatalogShow(false);
    toggleShowMob(false);
  };

  const onMouseEnterHandler = () => {
    setCatalogShow((prevState) => !prevState);
  };

  useEffect(() => {
    if (!catalogBarRef || !catalogShow) return;

    const onClick = (e) =>
      catalogBarRef.current.contains(e.target) || setCatalogShow(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [catalogShow]);

  return (
    <>
      <nav className="hidden lg:block border-b-2  bg-white ">
        <div className="flex items-center max-w-[1440px]  mx-auto  justify-between  ">
          <ul className=" ml-[72px]  items-center mr-[85px] flex gap-[32px] text-sky-800 text-base font-medium  leading-normal">
            <li
              className="p-4 cursor-pointer pt-[28px] pb-[28px]"
              onMouseEnter={onMouseEnterHandler}
            >
              <button
                className={` ${
                  catalogShow ? "text-[#B3CBDB]" : ""
                } transition-all duration-300`}

                // onMouseLeave={onMouseLeaveHandler}
              >
                Каталог
              </button>
            </li>
            <li className="transition-all duration-300 hover:text-[#B3CBDB]">
              <a href="#1">Акції</a>
            </li>
            <li className="transition-all duration-300 hover:text-[#B3CBDB]">
              <a href="#1">Про нашу воду</a>
            </li>
            <li className="transition-all duration-300 hover:text-[#B3CBDB]">
              <a href="#1">Відгуки</a>
            </li>
            <li className="transition-all duration-300 hover:text-[#B3CBDB]">
              <a href="#1">Контакти</a>
            </li>
          </ul>

          <Link href={"/cart"}>
            <Image
              className="mr-[133px]"
              priority
              src="logo.svg"
              height={40}
              width={110}
              alt="logo"
            />
          </Link>

          <Button
            text={"Замовити"}
            className="px-[57.5px] py-[8px] mr-[64.5px] max-w-[200px] max-h-[40px]"
          />

          <Link
            className="flex hover:animate-pulse transition-all duration-300"
            href={"/cart"}
          >
            <button className="mr-[72px] relative ">
              <Image
                className=""
                priority
                src="basket.svg"
                width={46}
                height={36}
                alt="logo"
              />
              <p className="text-[15px] absolute w-4 h-4  text-orange-400 font-semibold right-[10%] top-[-5%] ">
                {cart.reduce((acc, obj) => acc + obj.waterQuantity, 0)}
              </p>
            </button>
          </Link>
        </div>
        <CatalogBar
          closeCatalogShow={() => {
            closeCatalogShow();
          }}
          catalogBarRef={catalogBarRef}
          show={catalogShow}
        />
      </nav>

      {/* //////mob */}
      <nav
        className={`lg:hidden absolute h-[100%]  w-full z-50   bg-white  duration-700 ${
          showMobMenu ? "translate-x-[+0px]" : "translate-x-[-1000px] "
        }`}
      >
        <div className=" flex flex-col justify-center items-center mx-auto">
          <ul className="my-4   flex flex-col items-center  text-sky-800 text-base font-medium  leading-normal">
            <li className=" cursor-pointer " onMouseEnter={onMouseEnterHandler}>
              <button
                className={` ${
                  catalogShow ? "text-[#B3CBDB]" : ""
                } transition-all duration-300`}

                // onMouseLeave={onMouseLeaveHandler}
              >
                Каталог
              </button>
            </li>
            <li className="transition-all duration-300 hover:text-[#B3CBDB]">
              <a href="#1">Акції</a>
            </li>
            <li className="transition-all duration-300 hover:text-[#B3CBDB]">
              <a href="#1">Про нашу воду</a>
            </li>
            <li className="transition-all duration-300 hover:text-[#B3CBDB]">
              <a href="#1">Відгуки</a>
            </li>
            <li className="transition-all duration-300 hover:text-[#B3CBDB]">
              <a href="#1">Контакти</a>
            </li>
          </ul>

          <div className="flex gap-10">
            <Link
              className="flex hover:animate-pulse transition-all duration-300"
              href={"/cart"}
            >
              <button className="relative ">
                <Image
                  className=""
                  priority
                  src="basket.svg"
                  width={46}
                  height={36}
                  alt="logo"
                />
                <p className="text-[12px] absolute w-4 h-4  text-orange-400 font-semibold right-[10%] top-[0%] ">
                  {cart.reduce((acc, obj) => acc + obj.waterQuantity, 0)}
                </p>
              </button>
            </Link>
          </div>

          <Button
            text={"Замовити"}
            className="my-4 px-[57.5px] py-[8px] max-w-[200px] max-h-[40px]"
          />
        </div>
        <div
          className={`lg:hidden w-fit mx-auto   duration-500  ${
            catalogShow ? "translate-x-[+0px]" : "translate-x-[-1000px]"
          }`}
        >
          <CatalogBar
            closeCatalogShow={() => {
              closeCatalogShow();
            }}
            catalogBarRef={catalogBarRef}
            show={catalogShow}
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
