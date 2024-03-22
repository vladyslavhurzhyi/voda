import Image from "next/image";
import Button from "../Button/Button";
import "./style.css";

export const FirstMeet = () => {
  return (
    <section className="sectionFirst">
      <div className="containerFirst">
        <div className="arrowLeft">
          <Image src="/arrowLeftF.svg" width={48} height={48} alt="back" />
        </div>
        <div className="wrapperInfoFirst">
          <div className="wrapperTextAndButton">
            <h3 className="titleFirst">Перше знайомство</h3>
            <p className="textFirst">
              Купуйте два бутля води по ціні одного при першому замовленні
            </p>
            <Button text="Дізнатись більше " className="buttonFirst" />
          </div>
          <div className="imagesFirstmeet">
            <Image
              src="/twoBottles.png"
              width={540}
              height={392}
              alt="Zdorova voda"
            />
          </div>
          <div className="cornerBlue">
            <Image
              src="/actionFirst.svg"
              width={257}
              height={149}
              alt="blueCorner"
            />
          </div>
        </div>
        <div className="arrowRight">
          <Image src="/arrowRightF.svg" width={48} height={48} alt="forward" />
        </div>
        <p className="rotated-text">акції</p>
      </div>
      <div className="sliderFirstMeet">
        <Image src="/SliderLinesL.jpg" width={135.89} height={6} alt="slider" />
      </div>
    </section>
  );
};
