"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FirstMeet } from "../FirstMeet/FirstMeet";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NewClient } from "../NewClient/NewClient";
import { EconomSunday } from "../EconomSunday/EconomSunday";

const SliderFirstMeet = () => {
  const swiper = useSwiper();

  return (
    <div className=" block " id="action">
      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <FirstMeet swiper={swiper} />
        </SwiperSlide>
        <SwiperSlide>
          <NewClient swiper={swiper} />
        </SwiperSlide>
        <SwiperSlide>
          <EconomSunday swiper={swiper} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderFirstMeet;
