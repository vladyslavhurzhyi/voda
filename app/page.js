import Button from "@/Components/Button/Button";
import Header from "@/Components/Header/Header";
import NavBar from "@/Components/NavBar/NavBar";
import Faq from "@/Components/Faq/Faq";
import Image from "next/image";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";


export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <Hero />
      <Faq />
      <Footer />
    </>
  );
}
