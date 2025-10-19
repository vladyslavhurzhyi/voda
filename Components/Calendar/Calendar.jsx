"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import "react-calendar/dist/Calendar.css";
import { isSundayCheck } from "@/app/utils/isSundayChek";

const CalendarReact = ({ changeDeliveryDate, handleClick }) => {
  const [date, changeDate] = useState(isSundayCheck());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      return date < today;
    }
    return false;
  };

  function changeValue(value) {
    const formattedDate = `${value.getFullYear()}-${(
      "0" +
      (value.getMonth() + 1)
    ).slice(-2)}-${("0" + value.getDate()).slice(-2)}`;

    const isSunday = value.getDay() === 0;

    changeDate(formattedDate);

    // Передаём родителю: для воскресенья только вечер
    changeDeliveryDate(formattedDate, isSunday ? "evening" : "any");

    handleClick("calendar");
  }

  return (
    <div>
      <Calendar
        onChange={changeValue}
        value={date}
        locale="uk-uk"
        minDate={today}
        tileDisabled={tileDisabled}
      />
    </div>
  );
};

export default CalendarReact;
