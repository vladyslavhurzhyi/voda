import Hero from "@/Components/Hero/Hero";
import { Best } from "@/Components/Best/Best";
import { ChomuZdorova } from "@/Components/ChomuZdorova/ChomuZdorova";
import { ChemicalComposition } from "@/Components/ChemicalComposition/ChemicalComposition";
import { SafeWater } from "@/Components/SafeWater/SafeWater";
import Slider from "@/Components/Slider/Slider";
import Faq from "@/Components/Faq/Faq";
import Steps from "@/Components/Steps/Steps";

export default function Home() {
  return (
    <>
      <Hero />
      <Steps />
      <Best />
      <ChomuZdorova />
      <ChemicalComposition />
      <SafeWater />
      <Slider />
      <Faq />
    </>
  );
}
