import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";

export const WaterCoolers = () => {
  return (
    <section className="sectionCooler">
      <div className="wrapperSectionCooler">
        <div className="wrapperCooler">
          <div className="wrapperInfoCooler">
            <div className="itemInfoCooler">
              <p className="itemTitleCooler">кулери</p>
              <ul className="listInfoCooler">
                <li className="itemTextCooler">
                  Кулер для води забезпечить зручний доступ до прохолодної
                  чи гарячої води в будь-який момент, заощадить ваш час. Також
                  має стильний дизайн та різноманітні функції, що гарантує
                  комфорт і задоволення при щоденному споживанні Здорової води.
                  Ми пропонуємо настільні та підлогові варіанти, з верхнім чи
                  нижнім підключенням, з електронним чи компресорним
                  охолодженням, а також деякі моделі, комплектовані шухлядками
                  чи холодильником.
                </li>
                <li className="itemTextCooler">
                  Також ви можете орендувати кулер в нашій компанії. Вартість
                  оренди складає від 300грн 500грн в залежності від моделі.
                </li>
              </ul>
              <Button text="Хочу кулер в оренду" className="buttonCooler" />
            </div>
            <div className="wrapperImgCooler">
              <Image
                className="imgWaterCooler"
                src="/waterCooler.png"
                width={640}
                height={408}
                alt="Water Cooler"
              />
            </div>
          </div>
        </div>

        <div className="wrapperCatalogCooler">
          <ul className="listOfCooler">
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/ViO_Х39-TN_White.png"
                  width={230.4}
                  height={144}
                  alt="ViO Х39-TN White"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">ViO Х39-TN White</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Настільний кулер для води</p>
                <p className="itemSubTitleCooler">нагрів без охолодження</p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">2990.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/ViO_Х903-TN_Black.png"
                  width={230.4}
                  height={144}
                  alt="ViO Х903-TN Black"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">ViO Х903-TN Black</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Настільний кулер для води</p>
                <p className="itemSubTitleCooler">нагрів без охолодження</p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">3550.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/ViO_Х903-TN_White.png"
                  width={230.4}
                  height={144}
                  alt="ViO Х903-TN White"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">ViO Х903-TN White</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Настільний кулер для води</p>
                <p className="itemSubTitleCooler">нагрів без охолодження</p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">3500.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/ViO_Х903-TЕ_Black.png"
                  width={230.4}
                  height={144}
                  alt="ViO Х903- TЕ Black"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">ViO Х903- TЕ Black</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Настільний кулер для води</p>
                <p className="itemSubTitleCooler">з електронним охолодженням</p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">4080.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/ViO_Х903-TЕ_White.png"
                  width={230.4}
                  height={144}
                  alt="ViO Х903- TЕ White"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">ViO Х903- TЕ White</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Настільний кулер для води</p>
                <p className="itemSubTitleCooler">з електронним охолодженням</p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">3980.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/ViO_Х12-FEC_White.png"
                  width={230.4}
                  height={144}
                  alt="ViO Х12-FEC White"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">ViO Х12-FEC White</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">з електронним охолодженням</p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">7690.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/ViO_Х12-FEC_Black.png"
                  width={230.4}
                  height={144}
                  alt="ViO Х12-FEC Black"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">ViO Х12-FEC Black</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">з електронним охолодженням</p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">7850.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/ViO_Х172-FEC.png"
                  width={230.4}
                  height={144}
                  alt="ViO Х172-FEC з шафкою"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">ViO Х172-FEC з шафкою</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">з електронним охолодженням</p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">7850.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/VIO_X903-FEC_White.png"
                  width={230.4}
                  height={144}
                  alt="VIO X903-FEC White"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">VIO X903-FEC White</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">з електронним охолодженням</p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">5720.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/ViO_Х172-FEC.png"
                  width={230.4}
                  height={144}
                  alt="ViO Х172-FСC з шафкою"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">ViO Х172-FСC з шафкою</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">
                  з компресорним охолодженням
                </p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">7925.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/Х172-FСF.png"
                  width={230.4}
                  height={144}
                  alt="Х172-FСF + холодильник"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">Х172-FСF + холодильник</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">
                  з компресорним охолодженням
                </p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">8035.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/ViO_Х217-FCC.png"
                  width={230.4}
                  height={144}
                  alt="ViO Х217-FCC з шафкою"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">ViO Х217-FCC з шафкою</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">
                  з компресорним охолодженням
                </p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">8035.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/ViO_Х217-FCC.png"
                  width={230.4}
                  height={144}
                  alt="Х217-FСF + холодильник"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">Х217-FСF + холодильник</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">
                  з компресорним охолодженням
                </p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">8250.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/VIO_X903_FCC.png"
                  width={230.4}
                  height={144}
                  alt="VIO X903-FCC з шафкою"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">VIO X903-FCC з шафкою</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">
                  з компресорним охолодженням
                </p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">7550.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/VIO_X62-FCC.png"
                  width={230.4}
                  height={144}
                  alt="VIO X62-FCC з шафкою"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">VIO X62-FCC з шафкою</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">
                  з компресорним охолодженням
                </p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">9100.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/X83-FCC_ROSE.png"
                  width={156.1}
                  height={144}
                  alt="X83-FCC ROSE з шафкою"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">X83-FCC ROSE з шафкою</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">
                  з компресорним охолодженням
                </p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">6850.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/X601-FCB_black.png"
                  width={230.4}
                  height={144}
                  alt="X601-FCB black компрес."
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">X601-FCB black компрес</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">з нижнім завантаженням</p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">6850.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
            <li className="itemCatalogCooler">
              <div className="imgCatalogCooler">
                <Image
                  src="/X601-FCB_white.png"
                  width={230.4}
                  height={144}
                  alt="X601-FCB white компрес"
                />
              </div>
              <div className="itemDescriptionCooler">
                <p className="itemTitleMainCooler">X601-FCB white компрес</p>
              </div>
              <div className="itemDescriptionSubCooler">
                <p className="itemSubTitleCooler">Підлоговий кулер для води</p>
                <p className="itemSubTitleCooler">з нижнім завантаженням</p>
              </div>

              <div className="itemDescripPriceCooler">
                <p className="itemPriceUnitCooler">11950.00 ₴</p>
              </div>
              <div className="wrapperButtonCooler">
                <Button text="Замовити" className="buttonOrderCooler" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
