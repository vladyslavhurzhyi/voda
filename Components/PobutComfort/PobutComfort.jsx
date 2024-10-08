import Image from "next/image";
import "./PobutComfort.css";
import Link from "next/link";

export const PobutComfort = () => {
  return (
    <section className="sectionPobut">
      <div className="containerPobut">
        <h2 className="titlePobut">
          ЗРОБИ ПОБУТ <br /> ЗРУЧНІШИМ
        </h2>
        <div className="wrapperItemsPobut">
          <ul className="listAccessories">
            <Link href="/pumps">
              <li className="itemAccessories">
                <div className="wrapperImgAccessories">
                  <Image
                    src="/PumpPobut.png"
                    width={164}
                    height={158}
                    alt="Замовити воду питну в бутлях"
                  />
                </div>
                <p className="descriptionAccessories">ПОМПИ</p>
              </li>
            </Link>
            <Link href="/water-coolers">
              <li className="itemAccessories">
                <div className="wrapperImgAccessories">
                  <Image
                    src="/coolerPobut.png"
                    width={150}
                    height={147}
                    alt="лучшая вода в бутылях"
                  />
                </div>
                <p className="descriptionAccessories">КУЛЕРИ</p>
              </li>
            </Link>
            <Link href="/bottle-stand">
              <li className="itemAccessories">
                <div className="wrapperImgAccessories">
                  <Image
                    src="/standPobut.png"
                    width={162}
                    height={162}
                    alt="Доставка воды Котовского, Фонтанка, Крижанівка, Поскот (Одесская область)"
                  />
                </div>
                <p className="descriptionAccessories">ПІДСТАВКИ</p>
              </li>
            </Link>
            <Link href="/dispensers">
              <li className="itemAccessories">
                <div className="wrapperImgAccessories">
                  <Image
                    src="/dispenserPobut.png"
                    width={140}
                    height={140}
                    alt="лучшая вода в бутылях"
                  />
                </div>
                <p className="descriptionAccessories">ДИСПЕНСЕРИ</p>
              </li>
            </Link>
            <Link href="/bottle-cover">
              <li className="itemAccessories">
                <div className="wrapperImgAccessories">
                  <Image
                    src="/BottleCoverPobut.png"
                    width={152}
                    height={182}
                    alt="Котовського, Фонтанка, Крижанівка, Поскот"
                  />
                </div>
                <p className="descriptionAccessories">ЧОХЛИ</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};
