import Button from "@/Components/Button/Button";

import Faq from "@/Components/Faq/Faq";

import Hero from "@/Components/Hero/Hero";

import Slider from "@/Components/Slider/Slider";
import { ChomuZdorova } from "@/Components/ChomuZdorova/ChomuZdorova";
import { SafeWater } from "@/Components/SafeWater/SafeWater";
import { ChemicalComposition } from "@/Components/ChemicalComposition/ChemicalComposition";

export default function Home() {
  return (
    <>
      <Hero />

      <SafeWater />

      <Slider />

      <ChomuZdorova />

      <ChemicalComposition />

      <Faq />
    </>
  );
}
