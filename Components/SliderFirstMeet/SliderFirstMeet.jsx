"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FirstMeet } from "../FirstMeet/FirstMeet";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderFirstMeet = () => {
  const swiper = useSwiper();

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <FirstMeet swiper={swiper} />
        </SwiperSlide>
        <SwiperSlide>
          <FirstMeet swiper={swiper} />
        </SwiperSlide>
        <SwiperSlide>
          <FirstMeet swiper={swiper} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderFirstMeet;
