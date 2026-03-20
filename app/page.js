import Hero from "@/components/Hero/Hero";

import { Best } from "@/components/Best/Best";
import { ChomuZdorova } from "@/components/ChomuZdorova/ChomuZdorova";
import { ChemicalComposition } from "@/components/ChemicalComposition/ChemicalComposition";
import { SafeWater } from "@/components/SafeWater/SafeWater";
import Faq from "@/components/Faq/Faq";
import Steps from "@/components/Steps/Steps";
import { Certificates } from "@/components/Certificates/Certificates";
import { Smak } from "@/components/Smak/Smak";
import GoogleMaps from "@/components/GoogleMaps/GoogleMaps";
import SliderFirstMeet from "@/components/SliderFirstMeet/SliderFirstMeet";
import { SafeWaterForMobile } from "@/components/SafeWaterForMobile/SafeWaterForMobile";
import { PobutComfort } from "@/components/PobutComfort/PobutComfort";

import SliderFeedback from "@/components/SliderFeedback/SliderFeedback";
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
