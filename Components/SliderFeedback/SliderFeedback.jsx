"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FeedbackOne } from "@/Components/FeedbackOne/feedbackOne";
import { FeedbackSecond } from "@/Components/FeedbackSecond/FeedbackSecond";

import { SlideNextButtonReview } from "./nextSwipeReview";
import { SlidePrevButtonReview } from "./prevSwipeReview";
import { FeedbackThree } from "../FeedbackThree/FeedbackThree";
import { FeedbackFour } from "../FeedbackFour/FeedbackFour";
import { FeedbackFive } from "../FeedbackFive/FeedbackFive";

const SliderFeedback = () => {
  return (
    <>
      <div className="relative" id="reviews">
        <div className="  w-full absolute z-10 top-[6%] md:top-[15%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          {" "}
          <h2 className="titleFeedback">
            ВІДГУКИ НАШИХ <br /> КЛІЄНТІВ
          </h2>
        </div>
        <div className=" relative  bg-[#00AFF0]">
          <Swiper
            loop={true}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
          >
            <SwiperSlide>
              <SlideNextButtonReview type={"first"} />
              <FeedbackOne />
              <SlidePrevButtonReview type={"first"} />
            </SwiperSlide>

            <SwiperSlide>
              <SlideNextButtonReview type={"second"} />
              <FeedbackSecond />
              <SlidePrevButtonReview type={"second"} />
            </SwiperSlide>

            <SwiperSlide>
              <SlideNextButtonReview type={"third"} />
              <FeedbackThree />
              <SlidePrevButtonReview type={"third"} />
            </SwiperSlide>

            <SwiperSlide>
              <SlideNextButtonReview type={"fourth"} />
              <FeedbackFour />
              <SlidePrevButtonReview type={"fourth"} />
            </SwiperSlide>

            <SwiperSlide>
              <SlideNextButtonReview type={"fifth"} />
              <FeedbackFive />
              <SlidePrevButtonReview type={"fifth"} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderFeedback;
