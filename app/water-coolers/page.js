import { WaterCoolers } from "@/Components/WaterCoolers/WaterCoolers";
import Head from "next/head";

export default function bottleCover() {
  return (
    <>
      <Head>
        <title>Кулери для води</title>
        <meta
          name="Кулери для води: купити або орендувати / Придбати
кулери Котовського, Фонтанка, Крижанівка, Поскот."
          content=": Купівля або оренда кулерів для вашого дому чи
офісу на сайті &rsquo;Здорова Вода&rsquo; +38(096) 883 66 88. Великий вибір
кулерів для води Котовського, Фонтанка, Крижанівка, Поскот.
Забезпечте себе постійним доступом до холодної та гарячої води"
        />
      </Head>
      <WaterCoolers />
    </>
  );
}
