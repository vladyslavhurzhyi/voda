import Image from "next/image";
import Button from "../Button/Button";
import "./style.css";
import { SlideNextButton } from "../SliderFirstMeet/nextSwipe";
import { SlidePrevButton } from "../SliderFirstMeet/prevSwipe";
import { useState } from "react";
import { ActionFirstMeet } from "../ActionFirstMeet/ActionFirstMeet";
import { FirstMeetCard } from "../FirstMeetCard/FirstMeetCard";

export const FirstMeet = () => {
  const [activeButton, setActiveButton] = useState(false);

  const handleActiveButtonClick = () => {
    setActiveButton(!activeButton);
  };

  return (
    <section className="sectionFirst" id="actions">
      <div className="containerFirst">
        <SlidePrevButton />
        {!activeButton ? (
          <FirstMeetCard onClick={handleActiveButtonClick} />
        ) : (
          <ActionFirstMeet onDivClick={handleActiveButtonClick} />
        )}

        <SlideNextButton />
      </div>
    </section>
  );
};
