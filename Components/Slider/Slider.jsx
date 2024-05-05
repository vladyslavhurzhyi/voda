"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FeedbackOne } from "@/Components/FeedbackOne/feedbackOne";
import { FeedbackSecond } from "@/Components/FeedbackSecond/FeedbackSecond";
import { SlideNextButtonReview } from "./nextSwipeReview";
import { SlidePrevButtonReview } from "./prevSwipeReview";

const Slider = () => {
  return (
    <>
      <div className=" relative  bg-[#00AFF0]">
        <Swiper
          loop={true}
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
        >
          <SwiperSlide>
            <SlideNextButtonReview />
            <FeedbackOne />
            <SlidePrevButtonReview />
          </SwiperSlide>

          <SwiperSlide>
            <SlideNextButtonReview />
            <FeedbackSecond />
            <SlidePrevButtonReview />
          </SwiperSlide>
        </Swiper>
        <div className="  absolute z-10 top-[6%] md:top-[15%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          {" "}
          <h2 className="titleFeedback">
            ВІДГУКИ НАШИХ <br /> КЛІЄНТІВ
          </h2>
        </div>
      </div>
    </>
  );
};

export default Slider;
