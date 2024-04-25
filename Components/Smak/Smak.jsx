import Image from "next/image";
import Button from "../Button/Button";
import "./styles.css";

export const Smak = () => {
  return (
    <section className="sectionSmak" id="smak">
      <div className="containerSmak">
        <h2 className="titleSmak">
          ОБЕРИ СВІЙ СМАК <br /> ЗДОРОВОЇ ВОДИ
        </h2>
        <div className="cardOneSmak">
          <div className="wrapperImageCard1">
            <Image src="/bottle.png" width={492} height={356} alt="bottle" />
            <Image
              className="price1"
              src="/price1.png"
              width={164}
              height={164}
              alt="price1"
            />
          </div>
          <div className="containerInfoSmak">
            <h3 className="subtitleSmak">очищена вода</h3>
            <p className="textInfoSmak">
              Це безпечна для споживання вода, яка пройшла процес фільтрації
              та видалення забруднень, бактерій та хімічних сполук. Вона має
              кращий смак, є безпечною для використання у побуті та кулінарії
              та сприяє збереженню природних ресурсів.
            </p>
            <Button text="Замовити" className="buttonSmak" />
          </div>
        </div>
        <div className="cardTowSmak ">
          <div className="containerInfoSmak card2">
            <h3 className="subtitleSmak">Мінералізована вода</h3>
            <p className="textInfoSmak">
              Проходить всі ступені очистки що й очищена вода, але додатково
              насичена корисними мінералами. Містить оптимальну кількість
              хлориду натрію та солей натрію, кальцію, магнію. Ідеальна
              для пиття в сирому вигляді, насичує організм корисними мінералами
            </p>
            <Button text="Замовити" className="buttonSmak" />
          </div>
          <div className="wrapperImageCard1">
            <Image src="/bottle.png" width={492} height={356} alt="bottle" />
            <Image
              className="price2"
              src="/price2.png"
              width={164}
              height={164}
              alt="price2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
