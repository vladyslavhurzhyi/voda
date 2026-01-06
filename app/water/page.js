// import { CatalogWater } from "@/Components/CatalogWater/CatalogWater";

// export const metadata = {
//   title:
//     "Замовити питну воду в бутлях: Котовського, Фонтанка, Крижанівка, Поскот.",
//   description:
//     "Замовляйте “Здорову воду” в бутлях до Котовського, Фонтанка, Крижанівка +38(096) 883 66 88. Швидка доставка, доступні ціни та висока якість для вашого здоров'я. Чиста, безпечна вода для дому та офісу з доставкою.",
//   openGraph: {
//     title:
//       "Замовити питну воду в бутлях: Котовського, Фонтанка, Крижанівка, Поскот.",
//     description:
//       "Замовляйте “Здорову воду” в бутлях до Котовського, Фонтанка, Крижанівка +38(096) 883 66 88. Швидка доставка, доступні ціни та висока якість для вашого здоров'я. Чиста, безпечна вода для дому та офісу з доставкою.",
//     url: "https://voda-aquatica.od.ua/water",
//     type: "website",
//   },
// };

// export default async function WaterPage() {
//   return (
//     <>
//       <h1>Замовити питну воду в бутлях: Котовського, Фонтанка, Крижанівка</h1>
//       <CatalogWater />
//     </>
//   );
// }

import { CatalogWater } from "@/Components/CatalogWater/CatalogWater";
import Head from "next/head";
import Script from "next/script"; // Импортируем компонент Script
import { CallUs } from "@/app/utils/callUs";

export const metadata = {
  title: "Замовити питну воду в бутлях: Котовського, Фонтанка, Крижанівка, Поскот.",
  description:
    "Замовляйте “Здорову воду” в бутлях до Котовського, Фонтанка, Крижанівка +38(096) 883 66 88. Швидка доставка, доступні ціни та висока якість для вашого здоров'я. Чиста, безпечна вода для дому та офісу з доставкою.",
  openGraph: {
    title: "Замовити питну воду в бутлях: Котовського, Фонтанка, Крижанівка, Поскот.",
    description:
      "Замовляйте “Здорову воду” в бутлях до Котовського, Фонтанка, Крижанівка +38(096) 883 66 88. Швидка доставка, доступні ціни та висока якість для вашого здоров'я. Чиста, безпечна вода для дому та офісу з доставкою.",
    url: "https://voda-aquatica.od.ua/water",
    type: "website",
  },
};

export default async function WaterPage() {
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

      {/* Контент страницы */}
      <CatalogWater />
      <CallUs />
    </>
  );
}
