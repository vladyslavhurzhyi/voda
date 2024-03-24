import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";

export const ActionNewClient = ({ onDivClick }) => {
  return (
    <div className="wrapperNewClient" onClick={onDivClick}>
      <div className="wrapperTextAndButtonNewClient">
        <h3 className="titleActionNewClient">акція новий клієнт</h3>
        <p className="textActionNewClient">
          Замовляйте три полікарбонатних бутля з водою і отримайте механічну
          помпу в подарунок.
        </p>
        <div className="additionalInfoNewClient">
          <Image
            src="/frameTextActionNewClient.png"
            width={858}
            height={50}
            alt="attention"
          />
        </div>
        <Button text="Замовити" className="buttonActionNewClient" />
      </div>
    </div>
  );
};
