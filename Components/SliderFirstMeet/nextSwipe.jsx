import Image from "next/image";
import { React } from "react";
import { useSwiper } from "swiper/react";

export const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className=" items-center p-6 flex"
      onClick={() => swiper.slideNext()}
    >
      <Image src="/arrowRightF.svg" width={48} height={48} alt="back" />
    </button>
  );
};
