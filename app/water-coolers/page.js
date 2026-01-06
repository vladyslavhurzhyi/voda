// import { WaterCoolers } from "@/Components/WaterCoolers/WaterCoolers";

// export const metadata = {
//   title:
//     "Кулери для води: купити або орендувати / Придбати кулери Котовського, Фонтанка, Крижанівка, Поскот.",
//   description:
//     "Купівля або оренда кулерів для вашого дому чи офісу на сайті &rsquo;Здорова Вода&rsquo;  +38(096) 883 66 88. Великий вибір кулерів для води Котовського, Фонтанка, Крижанівка, Поскот. Забезпечте себе постійним доступом до холодної та гарячої води.",
//   openGraph: {
//     title:
//       "Кулери для води: купити або орендувати / Придбати кулери Котовського, Фонтанка, Крижанівка, Поскот.",
//     description:
//       "Купівля або оренда кулерів для вашого дому чи офісу на сайті &rsquo;Здорова Вода&rsquo;  +38(096) 883 66 88. Великий вибір кулерів для води Котовського, Фонтанка, Крижанівка, Поскот. Забезпечте себе постійним доступом до холодної та гарячої води.",
//     url: "https://voda-aquatica.od.ua/water-coolers",
//     type: "website",
//   },
// };

// export default async function WaterCoolersPage() {
//   return (
//     <>
//       <h1>Купити кулери для води: Котовського, Фонтанка, Крижанівка</h1>
//       <WaterCoolers />
//     </>
//   );
// }

import { WaterCoolers } from "@/Components/WaterCoolers/WaterCoolers";
import Head from "next/head";
import Script from "next/script"; // Импортируем компонент Script
import { CallUs } from "@/app/utils/callUs";

export const metadata = {
  title:
    "Кулери для води: купити або орендувати / Придбати кулери Котовського, Фонтанка, Крижанівка, Поскот.",
  description:
    "Купівля або оренда кулерів для вашого дому чи офісу на сайті &rsquo;Здорова Вода&rsquo;  +38(096) 883 66 88. Великий вибір кулерів для води Котовського, Фонтанка, Крижанівка, Поскот. Забезпечте себе постійним доступом до холодної та гарячої води.",
  openGraph: {
    title:
      "Кулери для води: купити або орендувати / Придбати кулери Котовського, Фонтанка, Крижанівка, Поскот.",
    description:
      "Купівля або оренда кулерів для вашого дому чи офісу на сайті &rsquo;Здорова Вода&rsquo;  +38(096) 883 66 88. Великий вибір кулерів для води Котовського, Фонтанка, Крижанівка, Поскот. Забезпечте себе постійним доступом до холодної та гарячої води.",
    url: "https://voda-aquatica.od.ua/water-coolers",
    type: "website",
  },
};

export default async function WaterCoolersPage() {
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
      <WaterCoolers />
      <CallUs />
    </>
  );
}
