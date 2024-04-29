import Image from "next/image";
import { React } from "react";
import { useSwiper } from "swiper/react";

export const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className=" hidden md:flex items-center p-6 "
      onClick={() => swiper.slideNext()}
    >
      <Image src="/arrowRightF.svg" width={48} height={48} alt="back" />
    </button>
  );
};
