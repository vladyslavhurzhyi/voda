import Image from "next/image";
import { React } from "react";
import { useSwiper } from "swiper/react";

export const SlidePrevButtonReview = ({ type }) => {
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
      className={`flex items-center p-6 absolute left-[15%] ${options[type]} md:left-[20%] md:bottom-[0%]  lg:left-[40%] lg:bottom-[0%]`}
      onClick={() => swiper.slidePrev()}
    >
      <Image src="./arrowLeftReview.svg" width={48} height={48} alt="back" />
    </button>
  );
};
