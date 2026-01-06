// import { Pumps } from "@/Components/Pumps/Pumps";

// export const metadata = {
//   title:
//     "Помпи для питної води в бутлях: Котовського, Фонтанка, Крижанівка, Поскот",
//   description:
//     "Придбайте зручні та надійні помпи для питної води в бутлях +38(096) 883 66 88. Легке використання, доступні ціни та швидка доставка.",
//   openGraph: {
//     title:
//       "Помпи для питної води в бутлях: Котовського, Фонтанка, Крижанівка, Поскот",
//     description:
//       "Придбайте зручні та надійні помпи для питної води в бутлях +38(096) 883 66 88. Легке використання, доступні ціни та швидка доставка.",
//     url: "https://voda-aquatica.od.ua/pumps",
//     type: "website",
//   },
// };

// export default async function PumpsPage() {
//   return (
//     <>
//       <h1>
//         Помпи для питної води в бутлях та інші аксесуари Котовського, Фонтанка,
//         Крижанівка
//       </h1>
//       <Pumps />
//     </>
//   );
// }

import { Pumps } from "@/Components/Pumps/Pumps";
import Head from "next/head";
import Script from "next/script"; // Импорт компонента Script
import { CallUs } from "@/app/utils/callUs";

export const metadata = {
  title: "Помпи для питної води в бутлях: Котовського, Фонтанка, Крижанівка, Поскот",
  description:
    "Придбайте зручні та надійні помпи для питної води в бутлях +38(096) 883 66 88. Легке використання, доступні ціни та швидка доставка.",
  openGraph: {
    title: "Помпи для питної води в бутлях: Котовського, Фонтанка, Крижанівка, Поскот",
    description:
      "Придбайте зручні та надійні помпи для питної води в бутлях +38(096) 883 66 88. Легке використання, доступні ціни та швидка доставка.",
    url: "https://voda-aquatica.od.ua/pumps",
    type: "website",
  },
};

export default async function PumpsPage() {
  return (
    <>
      {/* Метаданные для страницы */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
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
      <Pumps />
      <CallUs />
    </>
  );
}
