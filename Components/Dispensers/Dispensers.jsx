import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";

export const Dispensers = () => {
  return (
    <section className="sectionDispenser">
      <div className="wrapperSectionDispenser">
        <div className="wrapperDispenser">
          <div className="wrapperInfoDispenser">
            <div className="itemInfoDispenser">
              <p className="itemTitleDispenser pt-10">диспенсери</p>
              <ul className="listInfoDispenser">
                <li className="itemTextDispenser">
                  Диспенсери є чудовим рішенням для повсякденної зручності. Вони
                  прості у використанні, забезпечують швидкий доступ до води
                  без необхідності підіймання важких пляшок чи
                  встановлення кулерів, мають сучасний та естетичний дизайн.
                </li>
              </ul>
            </div>
            <div className="wrapperImgDispenser">
              <Image
                className="imgWaterDispenser"
                src="/waterDispenser.png"
                width={640}
                height={408}
                alt="Water Dispenser"
              />
            </div>
          </div>
        </div>

        <div className="wrapperCatalogDispenser">
          <ul className="listOfDispenser">
            <li className="itemCatalogDispenser">
              <div className="imgCatalogDispenser">
                <Image
                  src="/disp-VIO_PD_B_white.png"
                  width={144}
                  height={144}
                  alt="VIO PD-B white"
                />
              </div>
              <div className="itemDescriptionDispenser">
                <p className="itemTitleMainDispenser">Диспенсер для води </p>
                <p className="itemTitleMainDispenser">19л </p>
              </div>
              <div className="itemDescriptionSubDispenser">
                <p className="itemSubTitleDispenser">ViO PD-B білий</p>
              </div>

              <div className="itemDescripPriceDispenser">
                <p className="itemPriceUnitDispenser">430.00 ₴</p>
              </div>
              <div className="wrapperButtonDispenser">
                <Button text="Замовити" className="buttonBottlesDispenser" />
              </div>
            </li>
            <li className="itemCatalogDispenser">
              <div className="imgCatalogDispenser">
                <Image
                  src="/disp-VIO_PD_B_blue.png"
                  width={230.4}
                  height={144}
                  alt="VIO PD-B blue"
                />
              </div>
              <div className="itemDescriptionDispenser">
                <p className="itemTitleMainDispenser">Диспенсер для води </p>
                <p className="itemTitleMainDispenser">19л </p>
              </div>
              <div className="itemDescriptionSubDispenser">
                <p className="itemSubTitleDispenser">ViO PD-B блакитний</p>
              </div>

              <div className="itemDescripPriceDispenser">
                <p className="itemPriceUnitDispenser">430.00 ₴</p>
              </div>
              <div className="wrapperButtonDispenser">
                <Button text="Замовити" className="buttonBottlesDispenser" />
              </div>
            </li>
            <li className="itemCatalogDispenser">
              <div className="imgCatalogDispenser">
                <Image
                  src="/disp-VIO_PD_C_white.png"
                  width={144}
                  height={144}
                  alt="ViO PD-C white"
                />
              </div>
              <div className="itemDescriptionDispenser">
                <p className="itemTitleMainDispenser">Диспенсер для води </p>
                <p className="itemTitleMainDispenser">19л </p>
              </div>
              <div className="itemDescriptionSubDispenser">
                <p className="itemSubTitleDispenser">ViO PD-C білий </p>
              </div>

              <div className="itemDescripPriceDispenser">
                <p className="itemPriceUnitDispenser">450.00 ₴</p>
              </div>
              <div className="wrapperButtonDispenser">
                <Button text="Замовити" className="buttonBottlesDispenser" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
