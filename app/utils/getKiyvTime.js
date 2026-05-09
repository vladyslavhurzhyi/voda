export const KYIV_TIME_ZONE = "Europe/Kyiv";

export const getKyivDateString = () => {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: KYIV_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
};

export const getKyivTimeParts = () => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: KYIV_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (type) => parts.find((part) => part.type === type)?.value || "0";

  return {
    hour: Number(get("hour")),
    minute: Number(get("minute")),
  };
};

export const getKyivCurrentMinutes = () => {
  const { hour, minute } = getKyivTimeParts();

  return hour * 60 + minute;
};

export const timeToMinutes = (time) => {
  const [hour, minute] = time.split(":").map(Number);

  return hour * 60 + minute;
};

export const addDaysToDateString = (dateString, days) => {
  const date = new Date(`${dateString}T12:00:00`);

  date.setDate(date.getDate() + days);

  return new Intl.DateTimeFormat("en-CA", {
    timeZone: KYIV_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};

export const isSundayDateString = (dateString) => {
  const date = new Date(`${dateString}T12:00:00`);

  return (
    new Intl.DateTimeFormat("en-US", {
      timeZone: KYIV_TIME_ZONE,
      weekday: "long",
    }).format(date) === "Sunday"
  );
};
