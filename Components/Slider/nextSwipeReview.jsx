import Image from "next/image";
import { React } from "react";
import { useSwiper } from "swiper/react";

export const SlideNextButtonReview = () => {
  const swiper = useSwiper();

  return (
    <button
      className=" hidden md:flex items-center absolute p-6 right-[45%] bottom-[10%] "
      onClick={() => swiper.slideNext()}
    >
      <Image src="/arrowRightReview.svg" width={48} height={48} alt="back" />
    </button>
  );
};
