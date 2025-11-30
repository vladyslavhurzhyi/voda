"use client";

import Image from "next/image";
import Button from "../Button/Button";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CatalogBar from "../CatalogBar/CatalogBar";
import { useCartStore } from "@/app/zustand/cartState/cartState";
//добавила код ниже
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [catalogShow, setCatalogShow] = useState(false);

  const showMobMenu = useCartStore((state) => state.showMob);
  const toggleShowMob = useCartStore((state) => state.toggleShowMob);

  const catalogBarRef = useRef(null);

  const cart = useCartStore((state) => state.waterItems);
  const otherProducts = useCartStore((state) => state.otherProducts);

  const cartAllQuantity = cart.reduce((acc, obj) => acc + obj.waterQuantity, 0);
  const otherProductsAllQuantity = otherProducts.reduce((acc, obj) => acc + obj.quantity, 0);

  const closeCatalogShow = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      const body = document.querySelector("body");
      body.classList.toggle("no-scroll");
    }

    setCatalogShow(false);
    toggleShowMob(false);
  };

  const onMouseEnterHandler = () => {
    setCatalogShow((prevState) => !prevState);
  };

  const onClickHandler = () => {
    setCatalogShow((prevState) => !prevState);
  };
  //добавила новый код
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/cart") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "view_cart",
      });
    }
  }, [pathname]);
  //
  useEffect(() => {
    if (!catalogBarRef || !catalogShow) return;

    const onClick = (e) => catalogBarRef.current.contains(e.target) || setCatalogShow(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [catalogShow]);

  return (
    <>
      <nav
        className={`hidden lg:block z-50 border-b-2 bg-white fixed lg:top-20 w-full  transition-transform duration-300`}
      >
        <div className="flex items-center max-w-[1440px]  mx-auto  justify-between  ">
          <ul className=" ml-[72px] lg:text-[12px] xl:text-[16px]  items-center lg:mr-[20px] xl:mr-[85px] flex gap-[32px] text-sky-800 text-base font-medium  leading-normal">
            <li
              className="p-4 cursor-pointer pt-[28px] pb-[28px]"
              onMouseEnter={onMouseEnterHandler}
            >
              <button
                className={` ${catalogShow ? "text-[#B3CBDB]" : ""} transition-all duration-300`}
              >
                Каталог
              </button>
            </li>
            <li className="transition-all duration-300 hover:text-[#B3CBDB]">
              <a href="/#action">Акції</a>
            </li>
            <li className="transition-all duration-300 hover:text-[#B3CBDB]">
              <a href="/#about-water">Про нашу воду</a>
            </li>
            <li className="transition-all duration-300 hover:text-[#B3CBDB]">
              <a href="/#reviews">Відгуки</a>
            </li>
            <li className="transition-all duration-300 hover:text-[#B3CBDB]">
              <a href="/#map">Контакти</a>
            </li>
          </ul>

          <Link
            id="to_catalog"
            href={"/water"}
            onClick={() => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "view_catalog_water",
              });
            }}
          >
            <Button
              text={"Замовити"}
              className="px-[57.5px] py-[8px] lg:mr-[30px] xl:mr-[64.5px] max-w-[200px] max-h-[40px]"
            />
          </Link>

          <Link
            onClick={() => {
              toggleShowMob(false);
            }}
            className=" hover:animate-pulse transition-all duration-300  "
            href={"/cart"}
          >
            <button className="mr-[72px] relative ">
              <Image className="" priority src="basket.svg" width={46} height={36} alt="logo" />
              <p
                className={
                  "absolute w-4 h-4  text-orange-400 font-semibold  text-[13px] top-[-1px] right-[10%]"
                }
              >
                {cartAllQuantity + otherProductsAllQuantity}
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
        className={`lg:hidden fixed h-[100%] mt-10 w-full z-50   bg-white  duration-700 ${
          showMobMenu ? "translate-x-[+0px]" : "translate-x-[-1500px] "
        }`}
      >
        <div className=" flex flex-col justify-center items-center mx-auto">
          <ul className="my-4   flex flex-col items-center  text-sky-800 text-xl font-medium  leading-normal">
            <li className=" cursor-pointer py-[10px]   " onClick={onClickHandler}>
              <button
                className={` ${catalogShow ? "text-[#B3CBDB]" : ""} transition-all duration-300`}

                // onMouseLeave={onMouseLeaveHandler}
              >
                Каталог
              </button>
            </li>
            <li className=" cursor-pointer py-[5px] transition-all duration-300 hover:text-[#B3CBDB]">
              <a
                onClick={() => {
                  toggleShowMob();
                }}
                href="/#action"
              >
                Акції
              </a>
            </li>
            <li className=" cursor-pointer py-[5px] transition-all duration-300 hover:text-[#B3CBDB]">
              <a
                onClick={() => {
                  toggleShowMob();
                }}
                href="/#about-water"
              >
                Про нашу воду
              </a>
            </li>
            <li className=" cursor-pointer py-[5px] transition-all duration-300 hover:text-[#B3CBDB]">
              <a
                onClick={() => {
                  toggleShowMob();
                }}
                href="/#reviews"
              >
                Відгуки
              </a>
            </li>
            <li className=" cursor-pointer py-[5px] transition-all duration-300 hover:text-[#B3CBDB]">
              <a
                onClick={() => {
                  toggleShowMob();
                }}
                href="/#map"
              >
                Контакти
              </a>
            </li>
          </ul>

          <Link
            onClick={() => {
              toggleShowMob();
            }}
            href="/water"
          >
            <Button
              text={"Замовити"}
              className=" text-xl my-4 px-12 py-4 max-w-[250px] max-h-[60px]"
            />
          </Link>
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
