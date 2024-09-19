import { BottleCover } from "@/Components/BottleCover/BottleCover";
import Head from "next/head";

export default function bottleCover() {
  return (
    <>
      <Head>
        <title>Чохли для бутлів</title>
        <meta
          name="description"
          content="Чохли для бутлів з питної води 19 літрів: захист та стиль для
води Котовського, Фонтанка, Крижанівка, Поскот"
        />
        <meta property="og:title" content="Чохли для бутлів" />
        <meta
          property="og:description"
          content="Замовляйте воду в бутлях та чохли для бутлів 19 літрів у Котовського, Фонтанка, Крижанівка, Поскот. Захистіть свої бутлі від пилу та сонячних променів."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://voda-aquatica.od.ua/bottle-cover"
        />
      </Head>
      <BottleCover />
    </>
  );
}
