import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";

export const BottlesAndAccessories = () => {
  return (
    <section className="sectionBottles">
      <div className="wrapperSectionBottles">
        <div className="wrapperBottle">
          <div className="wrapperInfoBottle">
            <div className="itemInfoBottle">
              <p className="itemTitleBottle">Бутлі та аксесуари</p>
              <ul className="listInfoBottle">
                <li className="itemTextBottle">
                  Бутлі представляють собою зручні контейнери, що забезпечують
                  можливість надійного зберігання та перенесення води.
                  При замовленні Здорової Води, ви можете їх також придбати і
                  обмінювати при наступних замовленнях вже не витрачаючи коштів.
                  А для Вашої зручності ми також приймаємо на обмін
                  полікарбонатні бутлі інших компаній, тож легко переходьте
                  на Здорову Воду!
                </li>
                <li className="itemTextBottle">
                  Також пропонуємо Вашій увазі аксесуари для зручності: ручки
                  для переноски бутлей, лійки, пробки та крани-клапани.
                </li>
              </ul>
            </div>
            <div className="wrapperImg">
              <Image
                className="imgBottleWater"
                src="/bottleWithWater.png"
                width={640}
                height={408}
                alt="Bottle with water"
              />
            </div>
          </div>
        </div>

        <div className="wrapperCatalogBottle">
          <ul className="listOfBottlesAndAccess">
            <li className="itemCatalogBottlesAccess">
              <div className="imgBottleCatalog">
                <Image
                  src="/Greif11L.png"
                  width={110}
                  height={110}
                  alt="Greif 11L"
                />
              </div>
              <div className="itemDescription">
                <p className="itemTitle">Бутель Greif</p>
                <p className="itemTitle">11л </p>
              </div>
              <div className="itemDescriptionSub">
                <p className="itemSubTitle">Полікарбонатний з ручкою </p>
              </div>

              <div className="itemDescripPrice">
                <p className="itemPriceUnit">300.00 ₴</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonBottles" />
              </div>
            </li>
            <li className="itemCatalogBottlesAccess">
              <div className="imgBottleCatalog">
                <Image
                  src="/Greif13L.png"
                  width={168}
                  height={140}
                  alt="Greif 13L"
                />
              </div>
              <div className="itemDescription">
                <p className="itemTitle">Бутель Greif</p>
                <p className="itemTitle">13л </p>
              </div>
              <div className="itemDescriptionSub">
                <p className="itemSubTitle">Полікарбонатний з ручкою </p>
              </div>

              <div className="itemDescripPrice">
                <p className="itemPriceUnit">320.00 ₴</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonBottles" />
              </div>
            </li>
            <li className="itemCatalogBottlesAccess">
              <div className="imgBottleCatalog">
                <Image
                  src="/Yugin19L.png"
                  width={108}
                  height={144}
                  alt="Yugin 19L"
                />
              </div>
              <div className="itemDescription">
                <p className="itemTitle">Бутель Yugin</p>
                <p className="itemTitle">18.9л </p>
              </div>
              <div className="itemDescriptionSub">
                <p className="itemSubTitle">Полікарбонатний з ручкою </p>
              </div>

              <div className="itemDescripPrice">
                <p className="itemPriceUnit">350.00 ₴</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonBottles" />
              </div>
            </li>
            <li className="itemCatalogBottlesAccess">
              <div className="imgBottleCatalog">
                <Image
                  src="/Greif19L.png"
                  width={137.04}
                  height={144}
                  alt="Greif 19L"
                />
              </div>
              <div className="itemDescription">
                <p className="itemTitle">Бутель Greif</p>
                <p className="itemTitle">18.9л </p>
              </div>
              <div className="itemDescriptionSub">
                <p className="itemSubTitle">Полікарбонатний з ручкою </p>
              </div>

              <div className="itemDescripPrice">
                <p className="itemPriceUnit">390.00 ₴</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonBottles" />
              </div>
            </li>
            <li className="itemCatalogBottlesAccess">
              <div className="imgBottleCatalog">
                <Image
                  src="/Holder11L.png"
                  width={120}
                  height={120}
                  alt="Holder for Bottle 11L"
                />
              </div>
              <div className="itemDescription">
                <p className="itemTitle">Ручка для бутля</p>
                <p className="itemTitle">11л </p>
              </div>
              <div className="itemDescriptionSub">
                <p className="itemSubTitle">В ассортименті</p>
              </div>

              <div className="itemDescripPrice">
                <p className="itemPriceUnit">70.00 ₴</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonBottles" />
              </div>
            </li>
            <li className="itemCatalogBottlesAccess">
              <div className="imgBottleCatalog">
                <Image
                  src="/Holder13L.png"
                  width={271.48}
                  height={144}
                  alt="Holder for Bottle 13L"
                />
              </div>
              <div className="itemDescription">
                <p className="itemTitle">Ручка для бутля</p>
                <p className="itemTitle">13л </p>
              </div>
              <div className="itemDescriptionSub">
                <p className="itemSubTitle">В ассортименті</p>
              </div>

              <div className="itemDescripPrice">
                <p className="itemPriceUnit">80.00 ₴</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonBottles" />
              </div>
            </li>
            <li className="itemCatalogBottlesAccess">
              <div className="imgBottleCatalog">
                <Image
                  src="/Holder19L.png"
                  width={192}
                  height={120}
                  alt="Holder for Bottle 19L"
                />
              </div>
              <div className="itemDescription">
                <p className="itemTitle">Ручка для бутля</p>
                <p className="itemTitle">18.9л </p>
              </div>
              <div className="itemDescriptionSub">
                <p className="itemSubTitle">В ассортименті</p>
              </div>

              <div className="itemDescripPrice">
                <p className="itemPriceUnit">80.00 ₴</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonBottles" />
              </div>
            </li>
            <li className="itemCatalogBottlesAccess">
              <div className="imgBottleCatalog">
                <Image
                  src="/Cork.png"
                  width={120}
                  height={120}
                  alt="Cork  for Bottle 11L"
                />
              </div>
              <div className="itemDescription">
                <p className="itemTitle">Пробка для бутля </p>
                <p className="itemTitle">11л </p>
              </div>
              <div className="itemDescriptionSub">
                <p className="itemSubTitle">Багаторазова</p>
              </div>

              <div className="itemDescripPrice">
                <p className="itemPriceUnit">??.00 ₴</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonBottles" />
              </div>
            </li>
            <li className="itemCatalogBottlesAccess">
              <div className="imgBottleCatalog">
                <Image
                  src="/Klapan11L.png"
                  width={144}
                  height={144}
                  alt="Clapan  for Bottle 11L"
                />
              </div>
              <div className="itemDescription">
                <p className="itemTitle">Кран-клапан </p>
                <p className="itemTitle">11л </p>
              </div>
              <div className="itemDescriptionSub">
                <p className="itemSubTitle">Для бутлів</p>
              </div>

              <div className="itemDescripPrice">
                <p className="itemPriceUnit">??.00 ₴</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonBottles" />
              </div>
            </li>
            <li className="itemCatalogBottlesAccess">
              <div className="imgBottleCatalog">
                <Image
                  src="/wateringPot.png"
                  width={230.4}
                  height={144}
                  alt="Watering Pot"
                />
              </div>
              <div className="itemDescription">
                <p className="itemTitle">Лійка для бутля </p>
                <p className="itemTitle">11л </p>
              </div>
              <div className="itemDescriptionSub">
                <p className="itemSubTitle">Багаторазова</p>
              </div>

              <div className="itemDescripPrice">
                <p className="itemPriceUnit">??.00 ₴</p>
              </div>
              <div className="wrapperButton">
                <Button text="Замовити" className="buttonBottles" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
