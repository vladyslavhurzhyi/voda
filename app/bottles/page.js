// import { BottlesAndAccessories } from "@/Components/BottlesAndAccessories/BottlesAndAccessories";

// export const metadata = {
//   title:
//     "Купити воду в бутлях з доставкою Котовського, Фонтанка, Крижанівка, Поскот.",
//   description:
//     "Купуйте чисту та свіжу воду в бутлях ”Здорова Вода” Котовського, Фонтанка, Крижанівка, Поскот. Оперативна доставка, доступні ціни +38(096) 883 66 88. Гарантуємо високу якість та безпечність кожної краплі.",
//   openGraph: {
//     title:
//       "Купити воду в бутлях з доставкою Котовського, Фонтанка, Крижанівка, Поскот.",
//     description:
//       "Купуйте чисту та свіжу воду в бутлях ”Здорова Вода” Котовського, Фонтанка, Крижанівка, Поскот. Оперативна доставка, доступні ціни +38(096) 883 66 88. Гарантуємо високу якість та безпечність кожної краплі.",
//     url: "https://voda-aquatica.od.ua/bottles",
//     type: "website",
//   },
// };

// export default async function BottlesPage() {
//   return (
//     <>
//       <h1>Купити воду в бутлях Котовського, Фонтанка, Крижанівка</h1>
//       <BottlesAndAccessories />
//     </>
//   );
// }

import { BottlesAndAccessories } from "@/Components/BottlesAndAccessories/BottlesAndAccessories";
import Head from "next/head";
import Script from "next/script"; // Импорт компонента Script

export const metadata = {
  title:
    "Купити воду в бутлях з доставкою Котовського, Фонтанка, Крижанівка, Поскот.",
  description:
    "Купуйте чисту та свіжу воду в бутлях ”Здорова Вода” Котовського, Фонтанка, Крижанівка, Поскот. Оперативна доставка, доступні ціни +38(096) 883 66 88. Гарантуємо високу якість та безпечність кожної краплі.",
  openGraph: {
    title:
      "Купити воду в бутлях з доставкою Котовського, Фонтанка, Крижанівка, Поскот.",
    description:
      "Купуйте чисту та свіжу воду в бутлях ”Здорова Вода” Котовського, Фонтанка, Крижанівка, Поскот. Оперативна доставка, доступні ціни +38(096) 883 66 88. Гарантуємо високу якість та безпечність кожної краплі.",
    url: "https://voda-aquatica.od.ua/bottles",
    type: "website",
  },
};

export default async function BottlesPage() {
  return (
    <>
      {/* Метаданные для страницы */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
      </Head>

      {/* Вставка Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K7PVQCNF');
        `}
      </Script>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K7PVQCNF"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Контент страницы */}
      <h1>Купити воду в бутлях Котовського, Фонтанка, Крижанівка</h1>
      <BottlesAndAccessories />
    </>
  );
}
