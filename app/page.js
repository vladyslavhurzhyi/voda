import Hero from "@/Components/Hero/Hero";
import { Best } from "@/Components/Best/Best";
import { ChomuZdorova } from "@/Components/ChomuZdorova/ChomuZdorova";
import { ChemicalComposition } from "@/Components/ChemicalComposition/ChemicalComposition";
import { SafeWater } from "@/Components/SafeWater/SafeWater";
import Slider from "@/Components/Slider/Slider";
import Faq from "@/Components/Faq/Faq";
import Steps from "@/Components/Steps/Steps";
import { Certificates } from "@/Components/Certificates/Certificates";
import { Smak } from "@/Components/Smak/Smak";
import GoogleMaps from "@/Components/GoogleMaps/GoogleMaps";
import SliderFirstMeet from "@/Components/SliderFirstMeet/SliderFirstMeet";
import { ActionFirstMeet } from "@/Components/ActionFirstMeet/ActionFirstMeet";
import { FormForOder } from "@/Components/FormForOder/FormForOder";
import { CatalogWater } from "@/Components/CatalogWater/CatalogWater";
import { BottlesAndAccessories } from "@/Components/BottlesAndAccessories/BottlesAndAccessories";
import { Pumps } from "@/Components/Pumps/Pumps";
import { Dispensers } from "@/Components/Dispensers/Dispensers";

export default function Home() {
  return (
    <>
      <Dispensers />
      {/* <Pumps /> */}
      {/* <BottlesAndAccessories /> */}
      {/* <CatalogWater /> */}
      {/* <Hero /> */}
      {/* <FormForOder />
      <SliderFirstMeet />
      <Steps />
      <Best />
      <ChomuZdorova />
      <ChemicalComposition />
      <SafeWater />
      <Certificates />
      <Smak />
      <Slider />

      <Faq />
      <GoogleMaps /> */}
    </>
  );
}
