"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const CallUs = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="tel:+38(096)8836688"
      className={`z-[100] bg-[#f5821e] flex lg:hidden justify-center items-center hover:scale-110 border-solid border-[#f5821e] border-2  rounded-full w-[40px] h-[40px]  fixed bottom-20  right-[4%] md:right-2 lg:right-8  transition-transform duration-200 ${
        showButton ? "opacity-100 transform translate-y-4" : "opacity-0 transform translate-y-8"
      }`}
      style={{ transition: "opacity 0.5s, transform 0.5s" }}
    >
      <Image
        className="mr-[1.5px]"
        priority
        src="Icon-phone.svg"
        height={70}
        width={70}
        alt="icon phone"
      />
    </a>
  );
};
