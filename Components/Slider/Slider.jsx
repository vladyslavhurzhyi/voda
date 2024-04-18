"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FeedbackOne } from "@/Components/FeedbackOne/feedbackOne";
import { FeedbackSecond } from "@/Components/FeedbackSecond/FeedbackSecond";

const Slider = () => {
  return (
    <>
      <Swiper spaceBetween={0} slidesPerView={1}>
        <SwiperSlide>
          <FeedbackOne />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackSecond />
        </SwiperSlide>
        ...
      </Swiper>
    </>
  );
};

export default Slider;
