"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
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
    <button
      onClick={scrollTop}
      className={`z-[100] bg-slate-50 bg-opacity-15 flex justify-center items-center hover:scale-110 border-solid border-[#91c81e] border-2  rounded-full w-[40px] h-[40px]  fixed bottom-4  right-[4%] md:right-2 lg:right-8  transition-transform duration-200 ${
        showButton
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-4"
      }`}
      style={{ transition: "opacity 0.5s, transform 0.5s" }}
    >
      <Image
        className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
        src={"/arrowTop.png"}
        alt={"arrowTop"}
        width={70}
        height={70}
      />
    </button>
  );
};
