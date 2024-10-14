// import { Dispensers } from "@/Components/Dispensers/Dispensers";

// export const metadata = {
//   title:
//     "Диспенсери для питної води в бутлях: Котовського, Фонтанка, Крижанівка, Поскот.",
//   description:
//     "Замовляйте якісні диспенсери для питної води за найкращими цінами, Котовського, Фонтанка, Крижанівка, Поскот +38(096) 883 66 88. (Одеська обл). Забезпечте собі комфортне та зручне користування питною водою вдома чи в офісі.",
//   openGraph: {
//     title:
//       "Диспенсери для питної води в бутлях: Котовського, Фонтанка, Крижанівка, Поскот.",
//     description:
//       "Замовляйте якісні диспенсери для питної води за найкращими цінами, Котовського, Фонтанка, Крижанівка, Поскот +38(096) 883 66 88. (Одеська обл). Забезпечте собі комфортне та зручне користування питною водою вдома чи в офісі.",
//     url: "https://voda-aquatica.od.ua/dispensers",
//     type: "website",
//   },
// };

// export default async function DispensersPage() {
//   return (
//     <>
//       <h1>
//         Диспенсери для питної води в бутлях: Котовського, Фонтанка, Крижанівка
//       </h1>
//       <Dispensers />
//     </>
//   );
// }

import { Dispensers } from "@/Components/Dispensers/Dispensers";
import Head from "next/head";
import Script from "next/script"; // Импорт компонента Script

export const metadata = {
  title:
    "Диспенсери для питної води в бутлях: Котовського, Фонтанка, Крижанівка, Поскот.",
  description:
    "Замовляйте якісні диспенсери для питної води за найкращими цінами, Котовського, Фонтанка, Крижанівка, Поскот +38(096) 883 66 88. (Одеська обл). Забезпечте собі комфортне та зручне користування питною водою вдома чи в офісі.",
  openGraph: {
    title:
      "Диспенсери для питної води в бутлях: Котовського, Фонтанка, Крижанівка, Поскот.",
    description:
      "Замовляйте якісні диспенсери для питної води за найкращими цінами, Котовського, Фонтанка, Крижанівка, Поскот +38(096) 883 66 88. (Одеська обл). Забезпечте собі комфортне та зручне користування питною водою вдома чи в офісі.",
    url: "https://voda-aquatica.od.ua/dispensers",
    type: "website",
  },
};

export default async function DispensersPage() {
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
      <h1>
        Диспенсери для питної води в бутлях: Котовського, Фонтанка, Крижанівка
      </h1>
      <Dispensers />
    </>
  );
}
