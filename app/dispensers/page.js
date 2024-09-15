import { Dispensers } from "@/Components/Dispensers/Dispensers";
import Head from "next/head";

export default function bottleCover() {
  return (
    <>
      <Head>
        <title> Диспенсери для питної води в бутлях</title>
        <meta
          name=" Диспенсери для питної води в бутлях: Котовського,
Фонтанка, Крижанівка, Поскот."
          content="Замовляйте якісні диспенсери для питної води
за найкращими цінами, Котовського, Фонтанка, Крижанівка,
Поскот +38(096) 883 66 88. (Одеська обл). Забезпечте собі
комфортне та зручне користування питною водою вдома чи в офісі."
        />
      </Head>
      <Dispensers />
    </>
  );
}
