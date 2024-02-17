"use client";
import Image from "next/image";
import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Faq() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState([]);

  function handleSelection(getCurrentId) {
    const answerArray = [...multiSelection];
    const indexOfCurrentId = answerArray.indexOf(getCurrentId);
    if (indexOfCurrentId === -1) answerArray.push(getCurrentId);
    else answerArray.splice(indexOfCurrentId, 1);

    setSelected(!selected);
    setMultiSelection(answerArray);
  }
  return (
    <div className="wrapper">
      <div className="faq">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => handleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <div>
                  {multiSelection.includes(dataItem.id) ? (
                    <Image
                      priority
                      src="minus-circle.svg"
                      height={20}
                      width={20}
                      alt="open"
                    />
                  ) : (
                    <Image
                      priority
                      src="plus-circle.svg"
                      height={20}
                      width={20}
                      alt="open"
                    />
                  )}
                </div>
              </div>
              {selected === dataItem.id ||
              multiSelection.indexOf(dataItem.id) !== -1 ? (
                <div className="answer">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
