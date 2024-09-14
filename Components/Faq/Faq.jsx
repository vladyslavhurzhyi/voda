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
    <section className="wrapperFaq" id="faq">
      <div className="containerFaq">
        <h2 className="titleFaq">ЧАСТІ ЗАПИТАННЯ</h2>
        <div className="faq">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="itemFaq" key={dataItem.id}>
                <div
                  onClick={() => handleSelection(dataItem.id)}
                  className="questionFaq"
                >
                  <p className="textQuestion">{dataItem.question}</p>
                  <div>
                    {multiSelection.includes(dataItem.id) ? (
                      <Image
                        src="minus-circle.svg"
                        height={20}
                        width={20}
                        alt="Доставка воды Котовского, Фонтанка, Крижанівка, Поскот (Одесская область)"
                      />
                    ) : (
                      <Image
                        src="plus-circle.svg"
                        height={20}
                        width={20}
                        alt="лучшая вода в бутылях"
                      />
                    )}
                  </div>
                </div>
                {selected === dataItem.id ||
                multiSelection.indexOf(dataItem.id) !== -1 ? (
                  <div className="answer">
                    {dataItem.answer.split("\n\n").map((sentence, index) => (
                      <p className="newParagraph" key={index}>
                        {sentence}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </section>
  );
}
