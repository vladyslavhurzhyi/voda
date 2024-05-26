import Image from "next/image";
import Button from "../Button/Button";
import "./styles.css";
import { SlideNextButton } from "../SliderFirstMeet/nextSwipe";
import { SlidePrevButton } from "../SliderFirstMeet/prevSwipe";
import { ActionNewClient } from "../ActionNewClient/ActionNewClient";
import { useState } from "react";

export const NewClient = () => {
  const [activeButton, setActiveButton] = useState(false);

  const handleActiveButtonClick = () => {
    setActiveButton(!activeButton);
  };

  return (
    <div className="containerNewClient">
      <SlidePrevButton />
      {!activeButton ? (
        <div className="wrapperInfoNewClient">
          <div className="wrapperTextAndButtonNew">
            <h3 className="titleNewClient">новий клієнт</h3>
            <p className="textNewClient">
              Замовляйте три бутля з водою і отримайте помпу в подарунок
            </p>
            <Button
              text="Дізнатись більше "
              className="buttonNewClient"
              onClick={() => handleActiveButtonClick()}
            />
          </div>
          <div className="imagesNewClient hidden md:block ">
            <Image
              className="newClientImage"
              src="/imageBottleNewClient.png"
              width={584}
              height={392}
              alt="Zdorova voda"
            />
          </div>
          <div className="cornerBlueNewClient">
            <Image
              src="/actionFirst.svg"
              width={257}
              height={149}
              alt="blueCorner"
            />
          </div>
        </div>
      ) : (
        <ActionNewClient onDivClick={handleActiveButtonClick} />
      )}

      <SlideNextButton />
      <p className="rotated-textNewClient">акції</p>
    </div>
  );
};
