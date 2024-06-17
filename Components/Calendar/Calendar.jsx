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
    changeDate(value);
    changeDeliveryDate(value);
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
