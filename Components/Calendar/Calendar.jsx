"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import "react-calendar/dist/Calendar.css";
import { isSundayCheck } from "@/app/utils/isSundayChek";

const CalendarReact = ({ changeDeliveryDate, handleClick }) => {
  const [date, changeDate] = useState(isSundayCheck());

  const tileDisabled = ({ date }) =>
    date.getDay() === 0 && date.getDate() !== 1;

  function changeValue(value) {
    console.log("value from Calendar", value);

    // Преобразование даты в нужный формат (YYYY-MM-DD)
    const formattedDate = `${value.getFullYear()}-${(
      "0" +
      (value.getMonth() + 1)
    ).slice(-2)}-${("0" + value.getDate()).slice(-2)}`;

    changeDate(formattedDate);
    changeDeliveryDate(formattedDate); // Отправка даты в нужном формате
    handleClick("calendar");
  }

  return (
    <>
      <div>
        <Calendar
          onChange={changeValue}
          value={date}
          locale="uk-uk"
          minDate={isSundayCheck()}
          tileDisabled={tileDisabled}
        />
      </div>
    </>
  );
};

export default CalendarReact;
