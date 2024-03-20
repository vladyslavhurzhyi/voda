import Hero from "@/Components/Hero/Hero";
import { Best } from "@/Components/Best/Best";
import { ChomuZdorova } from "@/Components/ChomuZdorova/ChomuZdorova";
import { ChemicalComposition } from "@/Components/ChemicalComposition/ChemicalComposition";
import { SafeWater } from "@/Components/SafeWater/SafeWater";
import Slider from "@/Components/Slider/Slider";
import Faq from "@/Components/Faq/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Best />
      <ChomuZdorova />
      <ChemicalComposition />
      <SafeWater />
      <Slider />
      <Faq />
    </>
  );
}
