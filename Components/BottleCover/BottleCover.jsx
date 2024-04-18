import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";

export const BottleCover = () => {
  return (
    <section className="sectionBottleCover ">
      <div className="wrapperSectionBottleCover">
        <div className="wrapperBottleCover">
          <div className="wrapperInfoBottleCover">
            <div className="itemInfoBottleCover">
              <p className="itemTitleBottleCover pt-10">чохли</p>
              <ul className="listInfoBottleCover">
                <li className="itemTextBottleCover">
                  Чохли для бутлів— стильний аксесуар та захист від сонячних
                  променів і подряпин.
                </li>
                <li className="itemTextBottleCover">
                  Він може зробити Ваш бутиль яскравим акцентом або навпаки
                  непримітним в інтер&apos;єрі.
                </li>
                <li className="itemTextBottleCover">
                  Чохол дуже зручний у використанні. Легко надівається зверху,
                  якщо ваш бутиль стоїть на столі, якщо ж ви використовуєте
                  підлоговий кулер чохол виготовляємо з дном. Можна нанести на
                  чохол назву вашого бренда, логотип фірми тощо.
                </li>
              </ul>
            </div>
            <div className="wrapperImg">
              <Image
                className="imgBottleCover"
                src="/bottleCover.png"
                width={640}
                height={408}
                alt="Bottle Cover"
              />
            </div>
          </div>
        </div>

        <div className="wrapperCatalogBottleCover">
          <ul className="listOfBottleCoverAndAccess">
            <li className="itemCatalogBottleCoverAccess">
              <div className="imgBottleCoverCatalog">
                <Image
                  src="/bottlCoverAssort.png"
                  width={272}
                  height={160}
                  alt="Bottle Cover"
                />
              </div>
              <div className="itemDescription">
                <p className="itemTitle">Чохол на бутиль</p>
                <p className="itemTitle">19л </p>
              </div>
              <div className="itemDescriptionSub">
                <p className="itemSubTitle">арт 0001 </p>
              </div>

              <div className="itemDescripPrice">
                <p className="itemPriceUnit">490.00 ₴</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonBottleCover" />
              </div>
            </li>
            <li className="itemCatalogBottleCoverAccess">
              <div className="imgBottleCoverCatalog">
                <Image
                  src="/bottlCoverAssort1.png"
                  width={272}
                  height={160}
                  alt="Bottle Cover"
                />
              </div>
              <div className="itemDescription">
                <p className="itemTitle">Чохол на бутиль</p>
                <p className="itemTitle">19л </p>
              </div>
              <div className="itemDescriptionSub">
                <p className="itemSubTitle">арт 0002 </p>
              </div>

              <div className="itemDescripPrice">
                <p className="itemPriceUnit">490.00 ₴</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonBottleCover" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
