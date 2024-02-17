"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import "react-calendar/dist/Calendar.css";

const CalendarReact = ({ changeDeliveryDate, handleClick }) => {
  const [date, changeDate] = useState(new Date());

  const tileDisabled = ({ date }) => date.getDay() === 0;

  function changeValue(val) {
    changeDate(val);
    changeDeliveryDate(val);
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
