import { BottleCover } from "@/Components/BottleCover/BottleCover";
import Head from "next/head";
import Script from "next/script"; // Импорт компонента Script
import { CallUs } from "../utils/callUs";

export const metadata = {
  title:
    "Чохли для бутлів з питної води 19 літрів: захист та стиль для води Котовського, Фонтанка, Крижанівка, Поскот",
  description:
    "Замовляйте воду в бутлях та чохли для бутлів 19 літрів у Котовського, Фонтанка, Крижанівка, Поскот +38(096) 883 66 88. Захистіть свої бутлі від пилу та сонячних променів, додайте стиль до інтер'єру.",
  openGraph: {
    title:
      "Чохли для бутлів з питної води 19 літрів: захист та стиль для води Котовського, Фонтанка, Крижанівка, Поскот",
    description:
      "Замовляйте воду в бутлях та чохли для бутлів 19 літрів у Котовського, Фонтанка, Крижанівка, Поскот +38(096) 883 66 88. Захистіть свої бутлі від пилу та сонячних променів, додайте стиль до інтер'єру.",
    url: "https://voda-aquatica.od.ua/bottle-cover",
    type: "website",
  },
};

export default async function BottleCoverPage() {
  return (
    <>
      {/* Добавляем теги метаданных в <head> */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

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

      <BottleCover />
      <CallUs />
    </>
  );
}

// import { BottleCover } from "@/Components/BottleCover/BottleCover";

// export const metadata = {
//   title:
//     "Чохли для бутлів з питної води 19 літрів: захист та стиль для води Котовського, Фонтанка, Крижанівка, Поскот",
//   description:
//     "Замовляйте воду в бутлях та чохли для бутлів 19 літрів у Котовського, Фонтанка, Крижанівка, Поскот +38(096) 883 66 88. Захистіть свої бутлі від пилу та сонячних променів, додайте стиль до інтер'єру.",
//   openGraph: {
//     title:
//       "Чохли для бутлів з питної води 19 літрів: захист та стиль для води Котовського, Фонтанка, Крижанівка, Поскот",
//     description:
//       "Замовляйте воду в бутлях та чохли для бутлів 19 літрів у Котовського, Фонтанка, Крижанівка, Поскот +38(096) 883 66 88. Захистіть свої бутлі від пилу та сонячних променів, додайте стиль до інтер'єру.",
//     url: "https://voda-aquatica.od.ua/bottle-cover",
//     type: "website",
//   },
// };

// export default async function BottleCoverPage() {
//   return (
//     <>
//       <h1>Чохли для бутлів з питної води 19 літрів: захист та комфорт</h1>
//       <BottleCover />
//     </>
//   );
// }
