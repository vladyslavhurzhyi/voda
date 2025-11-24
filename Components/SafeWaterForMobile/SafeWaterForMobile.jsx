"use client";
import { useState } from "react";

import Button from "../Button/Button";
import data from "./dataNineSteps";

import "./stylesMobile.css";
import Link from "next/link";

export const SafeWaterForMobile = () => {
  const [selected, setSelected] = useState("01");

  function handleSelection(getCurrentId) {
    setSelected(getCurrentId);
  }

  return (
    <section className="sectionSafeMob">
      <div className="container">
        <h2 className="titleSafeMob">ЧИСТОТА ТА БЕЗПЕКА ЗДОРОВОЇ ВОДИ</h2>
        <h3 className="subTitleSafeMob">9 ступенів очищення</h3>
        <div className="wrapperGeneralMob">
          <div>
            {data && data.length > 0 ? (
              data.map((dataItem) => {
                return (
                  <div
                    className="itemMob"
                    key={dataItem.id}
                    onClick={() => handleSelection(dataItem.id)}
                  >
                    <div>
                      <p
                        className={`${
                          selected === dataItem.id ? "active" : "titleStepMob"
                        }`}
                        onClick={() => handleSelection(dataItem.id)}
                      >
                        {dataItem.id}
                        <span> &nbsp;&nbsp;</span>
                        {dataItem.title}
                      </p>
                    </div>
                    {selected === dataItem.id && (
                      <div>
                        {dataItem.description
                          .split("\n\n")
                          .map((sentence, index) => (
                            <p className="textDescriptionMob" key={index}>
                              {sentence}
                            </p>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div>No data found!</div>
            )}
          </div>
          <div className="wrapperButtonMob mb-4">
            <Link href="/water">
              {" "}
              <Button text="Замовити" className="buttonStepsMob" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
