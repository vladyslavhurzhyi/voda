import Image from "next/image";
import { React } from "react";
import { useSwiper } from "swiper/react";

export const SlideNextButtonReview = () => {
  const swiper = useSwiper();

  return (
    <button
      className="  flex items-center absolute p-6  right-[15%] bottom-[-15%] md:right-[20%] md:bottom-[0%]  lg:right-[40%] lg:bottom-[0%] "
      onClick={() => swiper.slideNext()}
    >
      <Image src="/arrowRightReview.svg" width={48} height={48} alt="back" />
    </button>
  );
};
