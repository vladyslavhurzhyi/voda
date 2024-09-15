import { BottleStand } from "@/Components/BottleStand/BottleStand";
import Head from "next/head";

export default function bottleStand() {
  return (
    <>
      <Head>
        <title>Підставки для бутлів</title>
        <meta
          name=": Підставки для бутлів / Здорова Вода:Котовського,
Фонтанка, Крижанівка, Поскот."
          content="Підставки для бутлів у Котовського, Фонтанка,
Крижанівка, Поскот на сайті &rsquo;Здорова Вода&rsquo; +38(096) 883 66 88.
Забезпечте зручне розташування бутлів з водою вдома чи в офісі.
Висока якість, зручність та надійність."
        />
      </Head>
      <BottleStand />
    </>
  );
}
