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
      className={`fixed z-50 bottom-2 right-[-10%] md:right-2 p-[40px] text-white transition-transform duration-200 ${
        showButton
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-4"
      }`}
      style={{ transition: "opacity 0.5s, transform 0.5s" }}
    >
      <Image
        alt="arrowTop"
        src={"/arrowTop.png"}
        width={120}
        height={120}
        className="w-16 h-16 md:w-14 md:h-14 lg:w-20 lg:h-20 hover:scale-110 transition-transform duration-200"
      />
    </button>
  );
};
