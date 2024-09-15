import { Pumps } from "@/Components/Pumps/Pumps";
import Head from "next/head";

export default function pumps() {
  return (
    <>
      <Head>
        <title>Помпи для питної води в бутлях</title>
        <meta
          name="Помпи для питної води в бутлях: Котовського, Фонтанка,
Крижанівка, Поскот."
          content="Придбайте зручні та надійні помпи для питної
води в бутлях +38(096) 883 66 88. Легке використання, доступні ціни
та швидка доставка."
        />
      </Head>
      <Pumps />
    </>
  );
}
