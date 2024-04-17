import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";

export const Pumps = () => {
  return (
    <section className="sectionPumps">
      <div className="wrapperSectionPumps">
        <div className="wrapperPumps">
          <div className="wrapperInfoPumps">
            <div className="itemInfoPumps">
              <p className="itemTitlePumps">Помпи</p>
              <ul className="listInfoPumps">
                <li className="itemTextPumps">
                  Це пристрій, який спрощує процес використання бутлів з водою
                  чи іншими напоями. Вона забезпечує легкий доступ до води
                  без необхідності піднімання чи переливання важких бутлів,
                  що робить використання зручним та ефективним. На нашому сайті
                  до вибору запропоновані прості механічні помпи або надзручні
                  електричні.
                </li>
                <li className="itemTextPumps">
                  Також пропонуємо Вашій увазі аксесуари для зручності: ручки
                  для переноски бутлей, лійки, пробки та крани-клапани.
                </li>
              </ul>
            </div>
            <div className="wrapperImgPump">
              <Image
                className="imgWaterPump"
                src="/waterPump.png"
                width={640}
                height={408}
                alt="Water Pump"
              />
            </div>
          </div>
        </div>

        <div className="wrapperCatalogPumps">
          <ul className="listOfPumps">
            <li className="itemCatalogPumps">
              <div className="imgCatalogPumps">
                <Image
                  src="/blueRain.png"
                  width={144}
                  height={144}
                  alt="Blue Rain Extra"
                />
              </div>
              <div className="itemDescriptionPumps">
                <p className="itemTitleMainPumps">Blue Rain Extra</p>
              </div>
              <div className="itemDescriptionSubPumps">
                <p className="itemSubTitlePumps">Помпа механічна</p>
              </div>

              <div className="itemDescripPricePumps">
                <p className="itemPriceUnitPump">160.00 ₴</p>
              </div>
              <div className="wrapperButtonPumps">
                <Button text="Замовити" className="buttonBottlesPumps" />
              </div>
            </li>
            <li className="itemCatalogPumps">
              <div className="imgCatalogPumps">
                <Image
                  src="/VioP8.png"
                  width={171.38}
                  height={144}
                  alt="VIO P8"
                />
              </div>
              <div className="itemDescriptionPumps">
                <p className="itemTitleMainPumps">VIO P8</p>
              </div>
              <div className="itemDescriptionSubPumps">
                <p className="itemSubTitlePumps">Помпа механічна з краником</p>
              </div>

              <div className="itemDescripPricePumps">
                <p className="itemPriceUnitPump">220.00 ₴</p>
              </div>
              <div className="wrapperButtonPumps">
                <Button text="Замовити" className="buttonBottlesPumps" />
              </div>
            </li>
            <li className="itemCatalogPumps">
              <div className="imgCatalogPumps">
                <Image
                  src="/LiluStandart.png"
                  width={144}
                  height={144}
                  alt="Lilu Standart Plus"
                />
              </div>
              <div className="itemDescriptionPumps">
                <p className="itemTitleMainPumps">Lilu Standart Plus</p>
              </div>
              <div className="itemDescriptionSubPumps">
                <p className="itemSubTitlePumps">Помпа механічна з краником</p>
              </div>

              <div className="itemDescripPricePumps">
                <p className="itemPriceUnitPump">240.00 ₴</p>
              </div>
              <div className="wrapperButtonPumps">
                <Button text="Замовити" className="buttonBottlesPumps" />
              </div>
            </li>
            <li className="itemCatalogPumps">
              <div className="imgCatalogPumps">
                <Image
                  src="/VioE9.png"
                  width={260.79}
                  height={144}
                  alt="VIO E9 white"
                />
              </div>
              <div className="itemDescriptionPumps">
                <p className="itemTitleMainPumps">VIO E9 white</p>
              </div>
              <div className="itemDescriptionSubPumps">
                <p className="itemSubTitlePumps">Помпа електрична </p>
              </div>

              <div className="itemDescripPricePumps">
                <p className="itemPriceUnitPump">340.00 ₴</p>
              </div>
              <div className="wrapperButtonPumps">
                <Button text="Замовити" className="buttonBottlesPumps" />
              </div>
            </li>
            <li className="itemCatalogPumps">
              <div className="imgCatalogPumps">
                <Image
                  src="/Huanji.png"
                  width={170.67}
                  height={144}
                  alt="HUANJI"
                />
              </div>
              <div className="itemDescriptionPumps">
                <p className="itemTitleMainPumps">HUANJI</p>
              </div>
              <div className="itemDescriptionSubPumps">
                <p className="itemSubTitlePumps">Помпа для води електрична </p>
              </div>

              <div className="itemDescripPricePumps">
                <p className="itemPriceUnitPump">620.00 ₴</p>
              </div>
              <div className="wrapperButtonPumps">
                <Button text="Замовити" className="buttonBottlesPumps" />
              </div>
            </li>
            <li className="itemCatalogPumps">
              <div className="imgCatalogPumps">
                <Image
                  src="/AquaPumpElitBlack.png"
                  width={158.9}
                  height={144}
                  alt="Aqua Pump Elite чорна"
                />
              </div>
              <div className="itemDescriptionPumps">
                <p className="itemTitleMainPumps">Aqua Pump Elite чорна</p>
              </div>
              <div className="itemDescriptionSubPumps">
                <p className="itemSubTitlePumps">Помпа для води електрична </p>
              </div>

              <div className="itemDescripPricePumps">
                <p className="itemPriceUnitPump">650.00 ₴</p>
              </div>
              <div className="wrapperButtonPumps">
                <Button text="Замовити" className="buttonBottlesPumps" />
              </div>
            </li>
            <li className="itemCatalogPumps">
              <div className="imgCatalogPumps">
                <Image
                  src="/AquaPumpElitWhite.png"
                  width={167.67}
                  height={144}
                  alt="Aqua Pump Elite біла"
                />
              </div>
              <div className="itemDescriptionPumps">
                <p className="itemTitleMainPumps">Aqua Pump Elite біла</p>
              </div>
              <div className="itemDescriptionSubPumps">
                <p className="itemSubTitlePumps">Помпа для води електрична </p>
              </div>

              <div className="itemDescripPricePumps">
                <p className="itemPriceUnitPump">650.00 ₴</p>
              </div>
              <div className="wrapperButtonPumps">
                <Button text="Замовити" className="buttonBottlesPumps" />
              </div>
            </li>
            <li className="itemCatalogPumps">
              <div className="imgCatalogPumps">
                <Image
                  src="/AquaPumpElitYellow.png"
                  width={203.61}
                  height={144}
                  alt="Aqua Pump Elite жовта"
                />
              </div>
              <div className="itemDescriptionPumps">
                <p className="itemTitleMainPumps">Aqua Pump Elite жовта</p>
              </div>
              <div className="itemDescriptionSubPumps">
                <p className="itemSubTitlePumps">Помпа для води електрична </p>
              </div>

              <div className="itemDescripPricePumps">
                <p className="itemPriceUnitPump">690.00 ₴</p>
              </div>
              <div className="wrapperButtonPumps">
                <Button text="Замовити" className="buttonBottlesPumps" />
              </div>
            </li>
            <li className="itemCatalogPumps">
              <div className="imgCatalogPumps">
                <Image
                  src="/SaenqQWhite.png"
                  width={173.01}
                  height={144}
                  alt="SaengQ біла"
                />
              </div>
              <div className="itemDescriptionPumps">
                <p className="itemTitleMainPumps">SaengQ біла</p>
              </div>
              <div className="itemDescriptionSubPumps">
                <p className="itemSubTitlePumps">Помпа для води електрична </p>
              </div>

              <div className="itemDescripPricePumps">
                <p className="itemPriceUnitPump">950.00 ₴</p>
              </div>
              <div className="wrapperButtonPumps">
                <Button text="Замовити" className="buttonBottlesPumps" />
              </div>
            </li>
            <li className="itemCatalogPumps">
              <div className="imgCatalogPumps">
                <Image
                  src="/SaenqQBlack.png"
                  width={178.39}
                  height={144}
                  alt="SaengQ чорна"
                />
              </div>
              <div className="itemDescriptionPumps">
                <p className="itemTitleMainPumps">SaengQ чорна</p>
              </div>
              <div className="itemDescriptionSubPumps">
                <p className="itemSubTitlePumps">Помпа для води електрична </p>
              </div>

              <div className="itemDescripPricePumps">
                <p className="itemPriceUnitPump">950.00 ₴</p>
              </div>
              <div className="wrapperButtonPumps">
                <Button text="Замовити" className="buttonBottlesPumps" />
              </div>
            </li>
            <li className="itemCatalogPumps">
              <div className="imgCatalogPumps">
                <Image
                  src="/XiaomiTDS.png"
                  width={178.69}
                  height={144}
                  alt="Xiaomi Xiaolang TDS "
                />
              </div>
              <div className="itemDescriptionPumps">
                <p className="itemTitleMainPumps">Xiaomi Xiaolang TDS </p>
              </div>
              <div className="itemDescriptionSubPumps">
                <p className="itemSubTitlePumps">Помпа для води електрична </p>
              </div>

              <div className="itemDescripPricePumps">
                <p className="itemPriceUnitPump">990.00 ₴</p>
              </div>
              <div className="wrapperButtonPumps">
                <Button text="Замовити" className="buttonBottlesPumps" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
