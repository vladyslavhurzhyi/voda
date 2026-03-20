import Image from "next/image";
import { React } from "react";
import { useSwiper } from "swiper/react";

export const SlideNextButtonReview = ({ type }) => {
  const swiper = useSwiper();

  const options = {
    first: "bottom-[-1%]",
    second: "bottom-[-27%]",
    third: "bottom-[-23%]",
    fourth: "bottom-[-37%]",
    fifth: "bottom-[-27%]",
  };

  return (
    <button
      className={`flex items-center absolute p-6  right-[15%] ${options[type]} md:right-[20%] md:bottom-[0%]  lg:right-[40%] lg:bottom-[0%]`}
      onClick={() => swiper.slideNext()}
    >
      <Image src="/arrowRightReview.svg" width={48} height={48} alt="back" />
    </button>
  );
};
