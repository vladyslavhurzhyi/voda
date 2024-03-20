"use client";
import { useState } from "react";

import "./styles.css";
import Image from "next/image";
import Button from "../Button/Button";
import data from "./dataNineSteps";

export const SafeWater = () => {
  const [selected, setSelected] = useState("01");

  function handleSelectionSteps(currentId) {
    setSelected(currentId);
  }
  return (
    <div className="wrapperSafe">
      <h2 className="titleSafe">
        ЧИСТОТА ТА БЕЗПЕКА <br /> ЗДОРОВОЇ ВОДИ
      </h2>
      <div className="wrapperGeneral">
        <div className="wrapForInfo">
          <div className="wrapForSvg">
            <div>
              <Image src="steps.svg" height={121.32} width={83} alt="9 Steps" />
            </div>
            <div>
              <Image src="level.svg" height={120.3} width={300} alt="9 Steps" />
            </div>
          </div>

          <div className="containerForSteps">
            <div className="contSpace">
              <div className="blockDescription">
                {data.map((item) => {
                  if (item.id === selected)
                    return item.description
                      .split("\n\n")
                      .map((sentence, index) => (
                        <p className="textDescription" key={index}>
                          {sentence}{" "}
                        </p>
                      ));
                })}
              </div>
              <div>
                <Button text="Замовити" className="buttonSteps" />
              </div>
            </div>
            <div className="textSteps">
              {data.map((dataItem) => (
                <ul key={dataItem.id}>
                  <li className="item">
                    <p
                      className={`${
                        selected === dataItem.id ? "active" : "titleStep"
                      }`}
                      onClick={() => handleSelectionSteps(dataItem.id)}
                    >
                      {dataItem.id}
                      <span> &nbsp;&nbsp;</span>
                      {dataItem.title}
                    </p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
