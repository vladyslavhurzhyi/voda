import { CatalogWater } from "@/Components/CatalogWater/CatalogWater";
import Head from "next/head";

export default function catalogWater() {
  return (
    <>
      <Head>
        <title>
          Замовити питну воду в бутлях: Котовського, Фонтанка, Крижанівка,
          Поскот.
        </title>
        <meta
          name="Замовити питну воду в бутлях: Котовського, Фонтанка,
Крижанівка, Поскот."
          content="Замовляйте “Здорову воду” в бутлях до
Котовського, Фонтанка, Крижанівка +38(096) 883 66 88. Швидка
доставка, доступні ціни та висока якість для вашого здоров'я. Чиста,
безпечна вода для дому та офісу з доставкою."
        />
      </Head>
      <CatalogWater />
    </>
  );
}
