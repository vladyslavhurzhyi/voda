"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import "react-calendar/dist/Calendar.css";
import { isSundayCheck } from "@/app/utils/isSundayChek";

const CalendarReact = ({ changeDeliveryDate, handleClick }) => {
  const [date, changeDate] = useState(new Date());

  const tileDisabled = ({ date }) =>
    date.getDay() === 0 && date.getDate() !== 1;

  function changeValue(value) {
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
          minDate={isSundayCheck()}
          tileDisabled={tileDisabled}
        />
      </div>
    </>
  );
};

export default CalendarReact;
