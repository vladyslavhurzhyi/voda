import Image from "next/image";
import { React } from "react";
import { useSwiper } from "swiper/react";

export const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className="z-50  hidden md:flex items-center p-6 md:p-2"
      onClick={() => swiper.slideNext()}
    >
      <Image src="/arrowRightF.svg" width={48} height={48} alt="back" />
    </button>
  );
};
