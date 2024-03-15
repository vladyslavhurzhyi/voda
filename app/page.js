import Button from "@/Components/Button/Button";

import Faq from "@/Components/Faq/Faq";
import Image from "next/image";

import Hero from "@/Components/Hero/Hero";
import FeedbackOne from "@/Components/FeedbackOne/feedbackOne";
// import FeedbackSecond from "@/Components/FeedbackSecond/feedbackSecond";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <FeedbackOne />
      {/* <FeedbackSecond /> */}
      <Faq />
    </>
  );
}
