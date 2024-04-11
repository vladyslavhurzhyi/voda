import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import NavBar from "@/Components/NavBar/NavBar";
import { ScrollToTop } from "./utils/scrollToTop";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-auto  `}>
        <Header />
        <NavBar />

        {children}
        {/* <Footer />
        <ScrollToTop /> */}
      </body>
    </html>
  );
}
