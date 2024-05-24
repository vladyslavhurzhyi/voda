import Image from "next/image";
import { React } from "react";
import { useSwiper } from "swiper/react";

export const SlidePrevButtonReview = () => {
  const swiper = useSwiper();

  return (
    <button
      className="  flex items-center p-6 absolute left-[15%] bottom-[0%] md:left-[20%] md:bottom-[0%]  lg:left-[40%] lg:bottom-[0%] "
      onClick={() => swiper.slidePrev()}
    >
      <Image src="./arrowLeftReview.svg" width={48} height={48} alt="back" />
    </button>
  );
};
