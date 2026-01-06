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

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Доставка води Котовського / Питна вода з доставкою Фонтанка, Крижанівка, Поскот.",
  description:
    "Надійна доставка питної води Одеса &quot;Здорова Вода&quot; Котовського, Фонтанка, Крижанівка, Поскот. Замовляйте чисту та свіжу воду за доступною ціною з оперативною доставкою. +38(096)883 66 88. Вода для вашого здоров'я та комфорту!",
  metadataBase: new URL("https://voda-aquatica.od.ua"),
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
          name="description"
          content='Надійна доставка питної води Одеса "Здорова Вода" Котовського, Фонтанка, Крижанівка, Поскот. Замовляйте чисту та свіжу воду за доступною ціною з оперативною доставкою. +38(096) 883 66 88. Вода для вашого здоров&apos;я та комфорту!'
        />
        <meta
          property="og:description"
          content="Замовляйте чисту та свіжу воду Котовського, Фонтанка, Крижанівка, Поскот за доступною ціною з оперативною доставкою +38(096) 883 66 88. Здорова Вода для вашого здоров'я та комфорту!"
        />
        <meta property="og:image" content="https://voda-aquatica.od.ua/logo.svg" />
        <meta property="og:url" content="https://voda-aquatica.od.ua/" />
      </head>
      <body className={`${montserrat.className} mx-auto`}>
        {/* Вставка Google Tag Manager в head */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K7PVQCNF');
          `}
        </Script>

        {/* Вставка Google Tag Manager (noscript) сразу после открытия body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K7PVQCNF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CZ6K0NH19S"
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
