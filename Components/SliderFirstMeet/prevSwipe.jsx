import Image from "next/image";
import { React } from "react";
import { useSwiper } from "swiper/react";

export const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className=" items-center p-6 flex"
      onClick={() => swiper.slidePrev()}
    >
      <Image src="/arrowLeftF.svg" width={48} height={48} alt="back" />
    </button>
  );
};
