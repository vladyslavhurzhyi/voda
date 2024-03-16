import "./styles.css";
import Image from "next/image";
import blueImage from "../../images/blueImage.png";
import greenImage from "../../images/greenImage.png";

export const ChomuZdorova = () => {
  return (
    <div className="wrapper">
      <h2 className="titleChomu">
        ЧОМУ НАША ВОДА <br /> ЗДОРОВА?
      </h2>
      <div className="wrapperSection">
        <ul className="arguments">
          <li className="item">
            <div className="image">
              <Image
                priority
                src={blueImage}
                height={80}
                width={80}
                alt="blueImage"
              />
            </div>
            <p className="title">Виводить токсини</p>
            <p className="text">
              Здорова вода допомагає організму видаляти шкідливі речовини та
              токсини, сприяючи здоров&apos;ю органів та систем.
            </p>
          </li>
          <li className="item">
            <div className="image">
              <Image
                priority
                src={blueImage}
                height={80}
                width={80}
                alt="blueImage"
              />
            </div>
            <p className="title">Покращує обмін речовин</p>
            <p className="text">
              Ця вода сприяє покращенню обміну речовин, що може допомогти в
              підтримці оптимальної функції організму та енергії.
            </p>
          </li>
          <li className="item">
            <div className="image">
              <Image
                priority
                src={blueImage}
                height={80}
                width={80}
                alt="blueImage"
              />
            </div>
            <p className="title">Зміцнює імунітет</p>
            <p className="text">
              Мінералізована вода містить поживні речовини, які можуть
              підтримати імунну систему, допомагаючи боротися зі захворюваннями.
            </p>
          </li>
          <li className="item">
            <div className="image">
              <Image
                priority
                src={blueImage}
                height={80}
                width={80}
                alt="blueImage"
              />
            </div>
            <p className="title">Підтримує здоровий кровообіг</p>
            <p className="text">
              Вона сприяє підтримці здорового кровообігу, що важливо для
              доставки поживних речовин по всьому організму.
            </p>
          </li>
          <li className="item">
            <div className="image">
              <Image
                priority
                src={blueImage}
                height={80}
                width={80}
                alt="blueImage"
              />
            </div>
            <p className="title">Знижує втому та стрес</p>
            <p className="text">
              Очищена мінералізована вода може допомогти зменшити втому та
              стрес, оскільки вона надає важливі мінерали та забезпечує гарний
              гідратуючий ефект.
            </p>
          </li>
          <li className="item">
            <div className="image">
              <Image
                priority
                src={greenImage}
                height={80}
                width={80}
                alt="greenImage"
              />
            </div>
            <p className="title">Без консервантів та добавок</p>
            <p className="text">
              Ця вода є чистою та природною, вона не містить шкідливих додатків,
              консервантів або хімічних компонентів.
            </p>
          </li>
        </ul>
      </div>
      <div className="addInformation">
        <div className="ticSvg">
          <Image src="tic.svg" height={24} width={24} alt="tic" />
        </div>
        <p className="textDescription">Регулярний контроль якості</p>
        <div className="ticSvg">
          <Image src="tic.svg" height={24} width={24} alt="tic" />
        </div>
        <p className="textDescription">
          В закритому бутилі <br /> зберігається до 2х місяців
        </p>
      </div>
    </div>
  );
};
