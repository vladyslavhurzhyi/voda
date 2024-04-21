import "./styles.css";
import Image from "next/image";
import blueImage from "../../images/blueImage.png";
import greenImage from "../../images/greenImage.png";

export const ChomuZdorova = () => {
  return (
    <div className="wrapperZdorova">
      <h2 className="titleChomu">
        ЧОМУ НАША ВОДА <br /> ЗДОРОВА?
      </h2>
      <div className="wrapperSection">
        <ul className="arguments">
          <li className="itemZdorova">
            <div className="imageZdorova">
              <Image
                className="blueImg"
                src={blueImage}
                height={80}
                width={80}
                alt="blueImage"
              />
            </div>
            <p className="titleZdorova">Виводить токсини</p>
            <p className="textZdorova">
              Здорова вода допомагає організму видаляти шкідливі речовини та
              токсини, сприяючи здоров&apos;ю органів та систем.
            </p>
          </li>
          <li className="itemZdorova">
            <div className="imageZdorova">
              <Image
                className="blueImg"
                src={blueImage}
                height={80}
                width={80}
                alt="blueImage"
              />
            </div>
            <p className="titleZdorova">Покращує обмін речовин</p>
            <p className="textZdorova">
              Ця вода сприяє покращенню обміну речовин, що може допомогти в
              підтримці оптимальної функції організму та енергії.
            </p>
          </li>
          <li className="itemZdorova">
            <div className="imageZdorova">
              <Image
                className="blueImg"
                src={blueImage}
                height={80}
                width={80}
                alt="blueImage"
              />
            </div>
            <p className="titleZdorova">Зміцнює імунітет</p>
            <p className="textZdorova">
              Мінералізована вода містить поживні речовини, які можуть
              підтримати імунну систему, допомагаючи боротися зі захворюваннями.
            </p>
          </li>
          <li className="itemZdorova">
            <div className="imageZdorova">
              <Image
                className="blueImg"
                src={blueImage}
                height={80}
                width={80}
                alt="blueImage"
              />
            </div>
            <p className="titleZdorova">Знижує втому та стрес</p>
            <p className="textZdorova">
              Очищена мінералізована вода може допомогти зменшити втому та
              стрес, оскільки вона надає важливі мінерали та забезпечує гарний
              гідратуючий ефект.
            </p>
          </li>
          <li className="itemZdorova">
            <div className="imageZdorova">
              <Image
                className="blueImg"
                src={blueImage}
                height={80}
                width={80}
                alt="blueImage"
              />
            </div>
            <p className="titleZdorova">Підтримує здоровий кровообіг</p>
            <p className="textZdorova">
              Вона сприяє підтримці здорового кровообігу, що важливо для
              доставки поживних речовин по всьому організму.
            </p>
          </li>

          <li className="itemZdorova">
            <div className="imageZdorova">
              <Image
                className="blueImg"
                src={greenImage}
                height={80}
                width={80}
                alt="greenImage"
              />
            </div>
            <p className="titleZdorova">Без консервантів та добавок</p>
            <p className="textZdorova">
              Ця вода є чистою та природною, вона не містить шкідливих додатків,
              консервантів або хімічних компонентів.
            </p>
          </li>
        </ul>
        <div className="addInformation">
          <div className="ticSvg">
            <Image
              className="ticImg"
              src="tic.svg"
              height={24}
              width={24}
              alt="tic"
            />
          </div>
          <p className="textDescriptionZdor">Регулярний контроль якості</p>
          <div className="ticSvg">
            <Image
              className="ticImg"
              src="tic.svg"
              height={24}
              width={24}
              alt="tic"
            />
          </div>
          <p className="textDescriptionZdor">
            В закритому бутилі <br /> зберігається до 2х місяців
          </p>
        </div>
      </div>
    </div>
  );
};
