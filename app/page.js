import Hero from "@/Components/Hero/Hero";

import { Best } from "@/Components/Best/Best";
import { ChomuZdorova } from "@/Components/ChomuZdorova/ChomuZdorova";
import { ChemicalComposition } from "@/Components/ChemicalComposition/ChemicalComposition";
import { SafeWater } from "@/Components/SafeWater/SafeWater";
import Faq from "@/Components/Faq/Faq";
import Steps from "@/Components/Steps/Steps";
import { Certificates } from "@/Components/Certificates/Certificates";
import { Smak } from "@/Components/Smak/Smak";
import GoogleMaps from "@/Components/GoogleMaps/GoogleMaps";
import SliderFirstMeet from "@/Components/SliderFirstMeet/SliderFirstMeet";
import { SafeWaterForMobile } from "@/Components/SafeWaterForMobile/SafeWaterForMobile";
import { PobutComfort } from "@/Components/PobutComfort/PobutComfort";

import SliderFeedback from "@/Components/SliderFeedback/SliderFeedback";
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
