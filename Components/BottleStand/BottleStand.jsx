import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";

export const BottleStand = () => {
  return (
    <section className="sectionStand">
      <div className="wrapperSectionStand">
        <div className="wrapperStand">
          <div className="wrapperInfoStand">
            <div className="itemInfoStand">
              <p className="itemTitleStand pt-10">підставки для бутлів</p>
              <ul className="listInfoStand">
                <li className="itemTextStand">
                  Підставки для бутлів — це практичне рішення для організації
                  простору, забезпечують порядок та зручний доступ до напоїв,
                  мінімізують ризик перекидання чи розливання рідини, дозволяють
                  естетично впорядкувати приміщення та підкреслити його стиль.
                </li>
              </ul>
            </div>
            <div className="wrapperImgStand">
              <Image
                className="imgWaterStand"
                src="/waterStand.png"
                width={640}
                height={408}
                alt="Water Stand"
              />
            </div>
          </div>
        </div>

        <div className="wrapperCatalogStand">
          <ul className="listOfStand">
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_WS-1.png"
                  width={230.4}
                  height={144}
                  alt="ViO WS-1 бук"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO WS-1 бук</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка дерев&apos;яна під 1 бутель
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">615.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_WS-1_venge.png"
                  width={230.4}
                  height={144}
                  alt="ViO WS-1 венге"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO WS-1 венге</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка дерев&apos;яна під 1 бутель
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">690.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_WS-2_buk.png"
                  width={230.4}
                  height={144}
                  alt="ViO WS-2 бук"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO WS-2 бук</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка дерев&apos;яна під 2 бутлi
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">760.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_WS-2_venge.png"
                  width={230.4}
                  height={144}
                  alt="ViO WS-2 венге"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO WS-2 венге</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка дерев&apos;яна під 2 бутлi
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">820.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_WS-2_zebrano.png"
                  width={230.4}
                  height={144}
                  alt="ViO WS-2 зебрано"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO WS-2 зебрано</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка дерев&apos;яна під 2 бутлi
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">780.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_WS-3_buk.png"
                  width={230.4}
                  height={144}
                  alt="ViO WS-3 бук"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO WS-3 бук</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка дерев&apos;яна під 3 бутлi
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">970.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_WS-3_venge.png"
                  width={230.4}
                  height={144}
                  alt="ViO WS-3 венге"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO WS-3 венге</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка дерев&apos;яна під 3 бутлi
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">990.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_WS-3_zebrano.png"
                  width={230.4}
                  height={144}
                  alt="ViO WS-3 зебрано"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO WS-3 зебрано</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка під диспенсер низька
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">990.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_WSD-1_buk.png"
                  width={230.4}
                  height={144}
                  alt="ViO WSD-1 бук"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO WSD-1 бук</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка під диспенсер низька
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">300.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_WSD-1_venge.png"
                  width={230.4}
                  height={144}
                  alt="ViO WSD-1 венге"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO WSD-1 венге</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка під диспенсер низька
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">320.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_MS-1_metBlack.png"
                  width={230.4}
                  height={144}
                  alt="ViO MS-1 металева чорна"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO MS-1 металева чорна</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка під 1 бутель настільна
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">350.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_MS-2_metWhite.png"
                  width={230.4}
                  height={144}
                  alt="ViO MS-2 металева біла"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO MS-2 металева біла</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка під 1 бутель настільна
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">350.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/VIO_MS-3_met.png"
                  width={230.4}
                  height={144}
                  alt="VIO MS-3 похила металева"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">VIO MS-3 похила металева</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка під 1 бутель настільна
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">420.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_AХ-1-metConst.png"
                  width={230.4}
                  height={144}
                  alt="ViO AХ-1 металева збірна"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO AХ-1 металева збірна</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка під 2 бутлі напольна
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">980.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_AD-2_metConst.png"
                  width={100.27}
                  height={144}
                  alt="ViO AD-2 металева збірна"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO AD-2 металева збірна</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка під 3 бутлі напольна
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">1480.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_AD-3_metConst.png"
                  width={72}
                  height={144}
                  alt="ViO AD-3 металева збірна"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO AD-3 металева збірна</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка під 4 бутлі напольна
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">1890.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
            <li className="itemCatalogStand">
              <div className="imgCatalogStand">
                <Image
                  src="/ViO_AD-11_metConst.png"
                  width={230.4}
                  height={144}
                  alt="ViO AD-11 металева збірна"
                />
              </div>
              <div className="itemDescriptionStand">
                <p className="itemTitleMainStand">ViO AD-11 металева збірна</p>
              </div>
              <div className="itemDescriptionSubStand">
                <p className="itemSubTitleStand">
                  Підставка під 6 бутлів напольна
                </p>
              </div>

              <div className="itemDescripPriceStand">
                <p className="itemPriceUnitStand">1980.00 ₴</p>
              </div>
              <div className="wrapperButtonStand">
                <Button text="Замовити" className="buttonOrderStand" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
