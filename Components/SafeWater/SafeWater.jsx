"use client";
import { useState } from "react";

import "./styles.css";
import Image from "next/image";
import Button from "../Button/Button";
import data from "./dataNineSteps";
import Link from "next/link";

export const SafeWater = () => {
  const [selected, setSelected] = useState("01");

  function handleSelectionSteps(currentId) {
    setSelected(currentId);
  }
  return (
    <section className="wrapperSafe">
      <div className="containerSection">
        <h4 className="titleSafe">
          ЧИСТОТА ТА БЕЗПЕКА <br /> ЗДОРОВОЇ ВОДИ
        </h4>
        <div className="wrapperGeneral">
          <div className="wrapForInfo">
            <div className="wrapForSvg">
              <div>
                <Image
                  className="imgSteps"
                  src="steps.svg"
                  height={121.32}
                  width={83}
                  alt="9 Steps"
                />
              </div>
              <div>
                <Image
                  className="imgLevel"
                  src="level.svg"
                  height={120.3}
                  width={300}
                  alt="9 Steps"
                />
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
                            {sentence}
                          </p>
                        ));
                  })}
                </div>
                <div>
                  <Link href="/water">
                    <Button text="Замовити" className="buttonSteps" />
                  </Link>
                </div>
              </div>
              <div className="textSteps">
                {data.map((dataItem) => (
                  <ul key={dataItem.id}>
                    <li className="item">
                      <p
                        className={`${
                          selected === dataItem.id ? "activeStep" : "titleStep"
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
    </section>
  );
};
