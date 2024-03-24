import Image from "next/image";
import Button from "../Button/Button";
import "./styles.css";
import { SlideNextButton } from "../SliderFirstMeet/nextSwipe";
import { SlidePrevButton } from "../SliderFirstMeet/prevSwipe";
import Link from "next/link";

export const EconomSunday = () => {
  return (
    <div className="containerEconom">
      <SlidePrevButton />
      <div className="wrapperInfoEconom">
        <div className="wrapperTextAndButtonEconom">
          <h3 className="titleEconom">економна неділя</h3>
          <p className="textEconom">
            Кожної неділі знижка на купівлю води у магазині у свою тару!
          </p>
          <Link href="#map">
            <Button text="Показати адресу" className="buttonEconom" />
          </Link>
        </div>
        <div className="imagesEconom">
          <Image
            src="/BottlesSundayPrice.png"
            width={642}
            height={425}
            alt="Zdorova voda"
          />
        </div>
        <div className="cornerEconom">
          <Image
            src="/actionFirst.svg"
            width={257}
            height={149}
            alt="blueCorner"
          />
        </div>
      </div>
      <SlideNextButton />
      <p className="rotated-textEconom">акції</p>
    </div>
  );
};
