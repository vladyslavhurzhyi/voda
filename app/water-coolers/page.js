import { WaterCoolers } from "@/Components/WaterCoolers/WaterCoolers";

export const metadata = {
  title:
    "Кулери для води: купити або орендувати / Придбати кулери Котовського, Фонтанка, Крижанівка, Поскот.",
  description:
    "Купівля або оренда кулерів для вашого дому чи офісу на сайті &rsquo;Здорова Вода&rsquo;  +38(096) 883 66 88. Великий вибір кулерів для води Котовського, Фонтанка, Крижанівка, Поскот. Забезпечте себе постійним доступом до холодної та гарячої води.",
  openGraph: {
    title:
      "Кулери для води: купити або орендувати / Придбати кулери Котовського, Фонтанка, Крижанівка, Поскот.",
    description:
      "Купівля або оренда кулерів для вашого дому чи офісу на сайті &rsquo;Здорова Вода&rsquo;  +38(096) 883 66 88. Великий вибір кулерів для води Котовського, Фонтанка, Крижанівка, Поскот. Забезпечте себе постійним доступом до холодної та гарячої води.",
    url: "https://voda-aquatica.od.ua/water-coolers",
    type: "website",
  },
};

export default async function WaterCoolersPage() {
  return (
    <>
      <h1>Купити кулери для води: Котовського, Фонтанка, Крижанівка</h1>
      <WaterCoolers />
    </>
  );
}
