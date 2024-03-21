import Hero from "@/Components/Hero/Hero";
import { Best } from "@/Components/Best/Best";
import { ChomuZdorova } from "@/Components/ChomuZdorova/ChomuZdorova";
import { ChemicalComposition } from "@/Components/ChemicalComposition/ChemicalComposition";
import { SafeWater } from "@/Components/SafeWater/SafeWater";
import Slider from "@/Components/Slider/Slider";
import Faq from "@/Components/Faq/Faq";
import { Certificates } from "@/Components/Certificates/Certificates";
import { Smak } from "@/Components/Smak/Smak";

export default function Home() {
  return (
    <>
      <Hero />
      <Best />
      <ChomuZdorova />
      <ChemicalComposition />
      <SafeWater />
      <Certificates />
      <Smak />
      <Slider />
      <Faq />
    </>
  );
}
