import Button from "@/Components/Button/Button";

import Faq from "@/Components/Faq/Faq";
import Image from "next/image";

import Hero from "@/Components/Hero/Hero";

import { FeedbackOne } from "@/Components/FeedbackOne/feedbackOne";
import { FeedbackSecond } from "@/Components/FeedbackSecond/FeedbackSecond";
import Slider from "@/Components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Hero />

      <Slider />

      <Faq />
    </>
  );
}
