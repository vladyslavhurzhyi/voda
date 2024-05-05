import Image from "next/image";
import { React } from "react";
import { useSwiper } from "swiper/react";

export const SlidePrevButtonReview = () => {
  const swiper = useSwiper();

  return (
    <button
      className=" hidden md:flex items-center p-6 absolute left-[45%] bottom-[10%]  "
      onClick={() => swiper.slidePrev()}
    >
      <Image src="./arrowLeftReview.svg" width={48} height={48} alt="back" />
    </button>
  );
};
