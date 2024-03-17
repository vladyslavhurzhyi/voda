"use client";

import Image from "next/image";
import Button from "../Button/Button";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import CatalogBar from "../CatalogBar/CatalogBar";
import CartContext from "@/app/context/CartContext";

const NavBar = () => {
  const [catalogShow, setCatalogShow] = useState(false);

  const catalogBarRef = useRef(null);

  const { cart } = useContext(CartContext);

  const onMouseEnterHandler = () => {
    setCatalogShow((prevState) => !prevState);
  };
  const onMouseLeaveHandler = () => {
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
      <nav className=" border-b-2  bg-white ">
        <div className="flex max-w-[1440px]  mx-auto  justify-between my-[28px] ">
          <ul className="ml-[72px] transition-all duration-1000 items-center mr-[85px] flex gap-[32px] text-sky-800 text-base font-medium  leading-normal">
            <li>
              <button
                className={`${
                  catalogShow ? "text-[#B3CBDB]" : ""
                } transition-all duration-300`}
                onMouseEnter={onMouseEnterHandler}
                // onMouseLeave={onMouseLeaveHandler}
              >
                Каталог
              </button>
            </li>
            <li>
              <a href="#1">Акції</a>
            </li>
            <li>
              <a href="#1">Про нашу воду</a>
            </li>
            <li>
              <a href="#1">Відгуки</a>
            </li>
            <li>
              <a href="#1">Контакти</a>
            </li>
          </ul>

          <Image
            className="mr-[133px]"
            priority
            src="logo.svg"
            height={40}
            width={110}
            alt="logo"
          />

          <Button
            text={"Замовити"}
            className="px-[57.5px] py-[8px] mr-[64.5px]"
          />

          <Link className="flex" href={"/cart"}>
            <button className="mr-[72px] relative ">
              <Image
                className=""
                priority
                src="basket.svg"
                width={46}
                height={36}
                alt="logo"
              />
              <p className="text-[15px] absolute w-4 h-4  text-orange-400 font-semibold right-[10%] top-[0%] ">
                {cart.reduce((acc, obj) => acc + obj.waterQuantity, 0)}
              </p>
            </button>
          </Link>
        </div>
        <CatalogBar
          onMouseLeaveHandler={() => {
            onMouseLeaveHandler();
          }}
          catalogBarRef={catalogBarRef}
          show={catalogShow}
        />
      </nav>
    </>
  );
};

export default NavBar;
