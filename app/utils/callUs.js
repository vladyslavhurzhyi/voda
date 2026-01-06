"use client";

import Image from "next/image";

export const CallUs = () => (
  <a
    href="tel:+38(096)8836688"
    className={
      "z-[100] bg-[#f5821e] flex lg:hidden justify-center items-center scale-100 hover:scale-110 border-solid border-[#f5821e] border-2 rounded-full w-[60px] h-[60px] fixed bottom-5 right-[4%] md:right-4 animate-pulse"
    }
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
