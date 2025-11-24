// import { BottleStand } from "@/Components/BottleStand/BottleStand";

// export const metadata = {
//   title:
//     "Підставки для бутлів / Здорова Вода:Котовського, Фонтанка, Крижанівка, Поскот.",
//   description:
//     "Підставки для бутлів у Котовського, Фонтанка, Крижанівка, Поскот на сайті &rsquo;Здорова Вода&rsquo;  +38(096) 883 66 88. Забезпечте зручне розташування бутлів з водою вдома чи в офісі. Висока якість, зручність та надійність.",
//   openGraph: {
//     title:
//       "Підставки для бутлів / Здорова Вода:Котовського, Фонтанка, Крижанівка, Поскот.",
//     description:
//       "Підставки для бутлів у Котовського, Фонтанка, Крижанівка, Поскот на сайті &rsquo;Здорова Вода&rsquo;  +38(096) 883 66 88. Забезпечте зручне розташування бутлів з водою вдома чи в офісі. Висока якість, зручність та надійність.",
//     url: "https://voda-aquatica.od.ua/bottle-stand",
//     type: "website",
//   },
// };

// export default async function BottleStandPage() {
//   return (
//     <>
//       <h1>
//         Підставки для бутлів зручність для вашого простору: Котовського,
//         Фонтанка, Крижанівка
//       </h1>
//       <BottleStand />
//     </>
//   );
// }

import { BottleStand } from '@/Components/BottleStand/BottleStand';
import Head from 'next/head';
import Script from 'next/script'; // Импорт компонента Script

export const metadata = {
  title: 'Підставки для бутлів / Здорова Вода:Котовського, Фонтанка, Крижанівка, Поскот.',
  description:
    'Підставки для бутлів у Котовського, Фонтанка, Крижанівка, Поскот на сайті &rsquo;Здорова Вода&rsquo;  +38(096) 883 66 88. Забезпечте зручне розташування бутлів з водою вдома чи в офісі. Висока якість, зручність та надійність.',
  openGraph: {
    title: 'Підставки для бутлів / Здорова Вода:Котовського, Фонтанка, Крижанівка, Поскот.',
    description:
      'Підставки для бутлів у Котовського, Фонтанка, Крижанівка, Поскот на сайті &rsquo;Здорова Вода&rsquo;  +38(096) 883 66 88. Забезпечте зручне розташування бутлів з водою вдома чи в офісі. Висока якість, зручність та надійність.',
    url: 'https://voda-aquatica.od.ua/bottle-stand',
    type: 'website',
  },
};

export default async function BottleStandPage() {
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
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      {/* Контент страницы */}
      <BottleStand />
    </>
  );
}
