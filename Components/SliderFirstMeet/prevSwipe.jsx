import Image from "next/image";
import { React } from "react";
import { useSwiper } from "swiper/react";

export const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className=" hidden md:flex items-center p-6"
      onClick={() => swiper.slidePrev()}
    >
      <Image src="/arrowLeftF.svg" width={48} height={48} alt="back" />
    </button>
  );
};
