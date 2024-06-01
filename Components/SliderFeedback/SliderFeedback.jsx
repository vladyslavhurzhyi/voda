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
import { useState, useEffect } from "react";

const SliderFeedback = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative bg-[#00AFF0]" id="reviews">
        {" "}
        <div className=" lg:max-w-[1440px] mx-auto">
          <div className=" w-full absolute z-10 top-[6%] lg:top-[15%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            {" "}
            <h2 className="titleFeedback">
              ВІДГУКИ НАШИХ <br /> КЛІЄНТІВ
            </h2>
          </div>
          <div className=" relative  ">
            <Swiper
              loop={true}
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
            >
              <SwiperSlide>
                {isWideScreen && <SlideNextButtonReview type={"first"} />}
                <FeedbackOne />
                {isWideScreen && <SlidePrevButtonReview type={"first"} />}
              </SwiperSlide>

              <SwiperSlide>
                {isWideScreen && <SlideNextButtonReview type={"second"} />}
                <FeedbackSecond />
                {isWideScreen && <SlidePrevButtonReview type={"second"} />}
              </SwiperSlide>

              <SwiperSlide>
                {isWideScreen && <SlideNextButtonReview type={"third"} />}
                <FeedbackThree />
                {isWideScreen && <SlidePrevButtonReview type={"third"} />}
              </SwiperSlide>

              <SwiperSlide>
                {isWideScreen && <SlideNextButtonReview type={"fourth"} />}
                <FeedbackFour />
                {isWideScreen && <SlidePrevButtonReview type={"fourth"} />}
              </SwiperSlide>

              <SwiperSlide>
                {isWideScreen && <SlideNextButtonReview type={"fifth"} />}
                <FeedbackFive />
                {isWideScreen && <SlidePrevButtonReview type={"fifth"} />}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderFeedback;
