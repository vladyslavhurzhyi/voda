import Button from "@/Components/Button/Button";

import Faq from "@/Components/Faq/Faq";
import Image from "next/image";

import Hero from "@/Components/Hero/Hero";

import FeedbackOne from "@/Components/FeedbackOne/FeedbackOne";
import FeedbackSecond from "@/Components/FeedbackSecond/FeedbackSecond";


export default function Home() {
  return (
    <>
      <Hero />

      <FeedbackOne />
      <FeedbackSecond />


      <Faq />
    </>
  );
}
