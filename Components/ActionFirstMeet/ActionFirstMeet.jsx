import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";

export const ActionFirstMeet = ({ onDivClick }) => {
  return (
    <div className="wrapperActionFirst" onClick={onDivClick}>
      <div className="wrapperTextAndButtonActionFirst">
        <h3 className="titleActionFirstMeet">акція Перше знайомство</h3>
        <p className="textActionFirstMeet">
          Якщо раніше вже купували воду з доставкою і у Вас є власна тара, то ця
          акція для Вас. Замовляйте два бутелі Здорової води по 19л - платіть за
          один.
        </p>
        <div className="additionalInfoFirstMee">
          <Image
            src="/frameTextAction.png"
            width={858}
            height={71}
            alt="attention"
          />
        </div>
        <Button text="Замовити" className="buttonActionFirstMeet" />
      </div>
    </div>
  );
};
