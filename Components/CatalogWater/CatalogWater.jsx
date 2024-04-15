import Image from "next/image";
import "./styles.css";

export const CatalogWater = () => {
  return (
    <section className="sectionWater">
      <div className="wrapperWater">
        <div className="wrapperInfoWater">
          <div className="itemInfoWater">
            <p className="itemTitleWater">
              здорова вода: очищена чи мініралізована?
            </p>
            <ul className="listInfoWater">
              <li className="itemTextWater">
                Очищена. 100% безпечна: видалені всі шкідливі приміси та важкі
                метали. Ідеальна для приготування кави, чаю, їжі
              </li>
              <li className="itemTextWater">
                Мінералізована. Проходить всі ступені очистки що й очищена вода,
                але додатково насичена корисними мінералами. Містить оптимальну
                кількість хлориду натрію та солей натрію, кальцію, магнію.
                Ідеальна для пиття в сирому вигляді, насичує організм корисними
                мінералами
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/blonde-girl-taking-glass-water.png"
              width={640}
              height={408}
              alt="Water"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
