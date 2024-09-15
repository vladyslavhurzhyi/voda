import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import NavBar from "@/Components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FacebookPixelEvents } from "@/Components/Pixel-events/Pixel-events";
import { Suspense } from "react";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Доставка Води Aquatica",
  description: "Доставка здорової води в Одессі селище Котовського",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <head>
        <meta
          name="google-site-verification"
          content="n7zcIEbq-VyFZwRBxFTnKntB-dBYjWG0fiplq-Q-lvE"
        />
        <meta
          name="google-site-verification"
          content="4XWW2bQPWmrrWCl_5JMkHvelB_qiPO9yCLwpgPQu1M0"
        />

        <meta
          property="og:title"
          content="Доставка воды Котовського, Фонтанка, Крижанівка, Поскот"
        />
        <meta
          property="og:description"
          content="Замовляйте чисту та свіжу воду Котовського, Фонтанка,
Крижанівка, Поскот за доступною ціною з оперативною
доставкою +38(096) 883 66 88. Здорова Вода для
вашого здоров'я та комфорту!"
        />

        <meta property="og:image" content="/public/logo.svg" />
        <meta property="og:url" content="https://voda-aquatica.od.ua/" />

        {/* <!-- Google tag (gtag.js) -->
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CZ6K0NH19S"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag(`js`, new Date()); gtag(`config`, `G-CZ6K0NH19S`);
        </script> */}
      </head>
      <body className={`${montserrat.className} mx-auto  `}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CZ6K0NH19S');
        `}
        </Script>
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

        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
      </body>
    </html>
  );
}
