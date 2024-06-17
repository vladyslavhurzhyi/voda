"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import "react-calendar/dist/Calendar.css";

const CalendarReact = ({ changeDeliveryDate, handleClick }) => {
  const [date, changeDate] = useState(new Date());

  const tileDisabled = ({ date }) =>
    date.getDay() === 0 && date.getDate() !== 1;

  function changeValue(value) {
    console.log("value from Calendar", value);

    // Преобразование выбранной даты в формат ISO 8601
    const isoDateString = value.toISOString(); // преобразует дату в формат 2024-06-24T22:00:00.000Z

    changeDate(value);
    changeDeliveryDate(isoDateString); // передача преобразованной даты
    handleClick("calendar");
  }

  return (
    <>
      <div>
        <Calendar
          onChange={changeValue}
          value={date}
          locale="uk-uk"
          minDate={new Date()}
          tileDisabled={tileDisabled}
        />
      </div>
    </>
  );
};

export default CalendarReact;
