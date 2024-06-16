import { addDays, isSunday } from "date-fns";

export const isSundayCheck = () => {
  const today = new Date();
  if (isSunday(today)) {
    return addDays(today, 1);
  } else {
    return today;
  }
};
