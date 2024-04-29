import Image from "next/image";
import Button from "../Button/Button";
import "./styles.css";

export const FirstMeetCard = ({ onClick }) => {
  return (
    <div className="wrapperInfoFirstCard  ">
      <div className="wrapperTextAndButtonFirstCard">
        <h3 className="titleFirstCard">Перше знайомство</h3>
        <p className="textFirstCard">
          Купуйте два бутля води по ціні одного при першому замовленні
        </p>
        <Button
          text="Дізнатись більше "
          className="buttonFirstCard"
          onClick={onClick}
        />
      </div>
      <div className="imagesFirstmeetCard">
        <Image
          src="/twoBottles.png"
          width={540}
          height={392}
          alt="Zdorova voda"
        />
      </div>
      <div className="cornerBlueCard">
        <Image
          src="/actionFirst.svg"
          width={257}
          height={149}
          alt="blueCorner"
        />
      </div>
      <p className="rotated-textCard">акції</p>
    </div>
  );
};
