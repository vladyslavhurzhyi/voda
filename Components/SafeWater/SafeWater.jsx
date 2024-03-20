"use client";
import { useState } from "react";

import "./styles.css";
import Image from "next/image";
import Button from "../Button/Button";
import data from "./dataNineSteps";

export const SafeWater = () => {
  const [selected, setSelected] = useState("01");
  // const [step, setStep] = useState([]);

  function handleSelectionSteps(currentId) {
    console.log("currentID", currentId);
    setSelected(currentId);
    console.log("selected", selected);

    // const arraySteps = [...step];
    // const indexOfCurrentId = arraySteps.indexOf(currentId);
    // if (indexOfCurrentId === -1) arraySteps.push(currentId);
    // else arraySteps.splice(indexOfCurrentId, 1);
    // setSelected(!selected);
    // setStep(arraySteps);
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

          <div className="flex justify-between">
            <div className=" w-[400px] ">
              {data.map((item) => {
                if (item.id === selected) return item.description;
              })}
            </div>

            <div className="textSteps">
              {data.map((dataItem) => (
                <div key={dataItem.id}>
                  <div>
                    <div className="numberStep">{dataItem.id}</div>
                    <div
                      className="titleStep"
                      onClick={() => handleSelectionSteps(dataItem.id)}
                    >
                      <p>{dataItem.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Button text="Замовити" className="buttonSteps" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
