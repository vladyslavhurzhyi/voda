import Hero from "@/сomponents/Hero/Hero";

import { Best } from "@/сomponents/Best/Best";
import { ChomuZdorova } from "@/сomponents/ChomuZdorova/ChomuZdorova";
import { ChemicalComposition } from "@/сomponents/ChemicalComposition/ChemicalComposition";
import { SafeWater } from "@/сomponents/SafeWater/SafeWater";
import Faq from "@/сomponents/Faq/Faq";
import Steps from "@/сomponents/Steps/Steps";
import { Certificates } from "@/сomponents/Certificates/Certificates";
import { Smak } from "@/сomponents/Smak/Smak";
import GoogleMaps from "@/сomponents/GoogleMaps/GoogleMaps";
import SliderFirstMeet from "@/сomponents/SliderFirstMeet/SliderFirstMeet";
import { SafeWaterForMobile } from "@/сomponents/SafeWaterForMobile/SafeWaterForMobile";
import { PobutComfort } from "@/сomponents/PobutComfort/PobutComfort";

import SliderFeedback from "@/сomponents/SliderFeedback/SliderFeedback";
import { ScrollToTop } from "@/app/utils/scrollToTop";
import { CallUs } from "@/app/utils/callUs";

export default function Home() {
  return (
    <>
      <Hero />
      <SliderFirstMeet />
      <Steps />
      <Best />
      <ChomuZdorova />
      <ChemicalComposition />
      <SafeWater />
      <SafeWaterForMobile />
      <Certificates />
      <Smak />
      <PobutComfort />
      <SliderFeedback />
      <Faq />
      <CallUs />
      <ScrollToTop />
      <GoogleMaps />
    </>
  );
}
