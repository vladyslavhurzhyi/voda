import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import NavBar from "@/Components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ScrollToTop } from "./utils/scrollToTop";
import { FacebookPixelEvents } from "@/Components/Pixel-events/Pixel-events";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Доставка Води Aquatica",
  description: "Доставка здорової води в Одессі селище Котовського",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <FacebookPixelEvents />
      <body className={`${montserrat.className} mx-auto  `}>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="colored"
        />

        <Header />
        <NavBar />
        {children}

        <Footer />
        {/* <ScrollToTop /> */}
      </body>
    </html>
  );
}
