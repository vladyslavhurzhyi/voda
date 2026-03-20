import Image from "next/image";
import "./styles.css";
import Button from "../Button/Button";
import Link from "next/link";

export const ActionNewClient = ({ onDivClick }) => {
  return (
    <div className="wrapperNewClient" onClick={onDivClick}>
      <div className="wrapperTextAndButtonNewClient">
        <h3 className="titleActionNewClient">акція новий клієнт</h3>
        <p className="textActionNewClient">
          Придбайте три полікарбонатні тари і воду, та отримайте механічну помпу
          в подарунок.
        </p>
        <div className="additionalInfoNewClient">
          <div className="textDescriptionAction">
            <span className="attention">
              <Image
                className="imgAlertCircle"
                src="/alert-circle.svg"
                width={16}
                height={16}
                alt="Замовлення питної води"
              />
            </span>
            <p className="subTextDescription">
              Якщо ви ніколи не купували раніше воду з доставкою і у Вас немає
              своєї тари.
            </p>
          </div>
          <div className="textDescriptionAction">
            <span className="attention">
              <Image
                className="imgAlertCircle"
                src="/alert-circle.svg"
                width={16}
                height={16}
                alt="Замовлення питної води"
              />
            </span>
            <p className="subTextDescription">
              В подарунок йде помпа Blue Rain Extra.
            </p>
          </div>
        </div>
        <Link href="/water">
          <Button text="Замовити" className="buttonActionNewClient" />
        </Link>
      </div>
    </div>
  );
};
