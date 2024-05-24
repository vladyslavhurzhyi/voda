import "./styles.css";
import Button from "../Button/Button";
import Image from "next/image";
import Link from "next/link";

export const ActionFirstMeet = ({ onDivClick }) => {
  return (
    <div className="wrapperActionFirst " onClick={onDivClick}>
      <div className="wrapperTextAndButtonActionFirst">
        <h3 className="titleActionFirstMeet">акція Перше знайомство</h3>
        <p className="textActionFirstMeet">
          Замовляйте два бутелі Здорової води по 19л - платіть за один.
        </p>
        <div className="additionalInfoFirstMeet">
          <div className="textDescriptionFirstMeetAction">
            <span className="attention">
              <Image
                className="imgAttention"
                src="/alert-circle.svg"
                width={16}
                height={16}
                alt="Attention!"
              />
            </span>
            <p className="subTextDescriptionFirstMeet">
              Ви можете обрати Очищену або Мінералізовану воду.
            </p>
          </div>
          <div className="textDescriptionFirstMeetAction">
            <span className="attention">
              <Image
                className="imgAttention"
                src="/alert-circle.svg"
                width={16}
                height={16}
                alt="Attention!"
              />
            </span>
            <p className="subTextDescriptionFirstMeet">
              Якщо у вас вже є чиста, неушкоджена та не зношена полікарбонатна
              тара, ми приймемо її на обмін. Якщо тари немає, ви можете придбати
              її у нас.
            </p>
          </div>
        </div>
        <Link href="/water">
          <Button text="Замовити" className="buttonActionFirstMeet" />
        </Link>
      </div>
    </div>
  );
};
