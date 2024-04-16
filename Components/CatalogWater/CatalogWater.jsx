import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";

export const CatalogWater = () => {
  return (
    <section className="sectionWater">
      <div className="wrapperSection">
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
                  Мінералізована. Проходить всі ступені очистки що й очищена
                  вода, але додатково насичена корисними мінералами. Містить
                  оптимальну кількість хлориду натрію та солей натрію, кальцію,
                  магнію. Ідеальна для пиття в сирому вигляді, насичує організм
                  корисними мінералами
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

        <div className="wrapperCatalog">
          <ul className="listOfBottles">
            <li className="itemCatalogWater">
              <div className="imgBottleCatalog">
                <Image
                  src="/bottle19L.png"
                  width={102}
                  height={144}
                  alt="Bottle 19L"
                />
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemTitlePureWater">Очищена</p>
                <p className="itemTitlePureWater">19Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">105.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">85.00 ₴</p>
                <p className="itemPricePerBottle">від 2 до 5 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">75.00 ₴</p>
                <p className="itemPricePerBottle">від 6 до 9 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">70.00 ₴</p>
                <p className="itemPricePerBottle">від 10 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">105.00 ₴</p>
                <p className="itemChoseQuantity">1</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonCatalogWater" />
              </div>
            </li>
            <li className="itemCatalogWater">
              <div className="imgBottleCatalog">
                <Image
                  src="/bottle19L.png"
                  width={102}
                  height={144}
                  alt="Bottle 19L"
                />
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemTitleMineralWater">Мінералізована </p>
                <p className="itemTitlePureWater">19Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">120.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">95.00 ₴</p>
                <p className="itemPricePerBottle">від 2 до 5 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">85.00 ₴</p>
                <p className="itemPricePerBottle">від 6 до 9 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">75.00 ₴</p>
                <p className="itemPricePerBottle">від 10 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">120.00 ₴</p>
                <p className="itemChoseQuantity">1</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonCatalogWater" />
              </div>
            </li>
            <li className="itemCatalogWater">
              <div className="imgBottleCatalog">
                <Image
                  src="/bottle13L.png"
                  width={168}
                  height={120}
                  alt="Bottle 13L"
                />
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemTitlePureWater">Очищена</p>
                <p className="itemTitlePureWater">13Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">60.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle"></p>
                <p className="itemPricePerBottle">мінімум 2 бутлі</p>
              </div>

              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">60.00 ₴</p>
                <p className="itemChoseQuantity">1</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonCatalogWater" />
              </div>
            </li>
            <li className="itemCatalogWater">
              <div className="imgBottleCatalog">
                <Image
                  src="/bottle13L.png"
                  width={168}
                  height={120}
                  alt="Bottle 13L"
                />
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemTitleMineralWater">Мінералізована </p>
                <p className="itemTitlePureWater">13Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">65.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle"></p>
                <p className="itemPricePerBottle">мінімум 2 бутлі</p>
              </div>

              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">65.00 ₴</p>
                <p className="itemChoseQuantity">1</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonCatalogWater" />
              </div>
            </li>
            <li className="itemCatalogWater">
              <div className="imgBottleCatalog">
                <Image
                  src="/bottle11L.png"
                  width={140}
                  height={100}
                  alt="Bottle 11L"
                />
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemTitlePureWater">Очищена</p>
                <p className="itemTitlePureWater">11Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">55.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle"></p>
                <p className="itemPricePerBottle">мінімум 2 бутлі</p>
              </div>

              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">55.00 ₴</p>
                <p className="itemChoseQuantity">1</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonCatalogWater" />
              </div>
            </li>
            <li className="itemCatalogWater">
              <div className="imgBottleCatalog">
                <Image
                  src="/bottle11L.png"
                  width={140}
                  height={100}
                  alt="Bottle 11L"
                />
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemTitleMineralWater">Мінералізована </p>
                <p className="itemTitlePureWater">11Л </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemSubTitle">Здорова Вода </p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle">60.00 ₴</p>
                <p className="itemPricePerBottle">за 1 шт</p>
              </div>
              <div className="itemDescriptionPrice">
                <p className="itemPricePerBottle"></p>
                <p className="itemPricePerBottle">мінімум 2 бутлі</p>
              </div>

              <div className="itemDescriptionPrice">
                <p className="itemChoseQuantity">60.00 ₴</p>
                <p className="itemChoseQuantity">1</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonCatalogWater" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
