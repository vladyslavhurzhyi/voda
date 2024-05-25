import { format, isAfter, parse, isSameDay, addDays } from "date-fns";

// Получение текущего времени
const now = new Date();
export const getCurrentTime = () => {
  const now = new Date();
  const time = format(now, "HH:mm"); // Форматирование времени в часах и минутах

  return time;
};

// Функция для проверки, больше ли текущее время 17:00
export const isAfterFivePM = () => {
  const fivePM = parse("17:00", "HH:mm", new Date());
  return isAfter(now, fivePM);
};

// Функция для проверки, больше ли текущее время 20:00
export const isAfterEightPM = () => {
  const eightPM = parse("20:00", "HH:mm", new Date());
  return isAfter(now, eightPM);
};

// Функция для проверки, совпадает ли сегодняшний день с указанной датой
export const isTodayDeliveryDate = (deliveryDate) => {
  const today = new Date();
  return isSameDay(today, deliveryDate);
};

export const isTomorrowDeliveryDate = (deliveryDate) => {
  const today = new Date();
  const tomorrow = addDays(today, 1);
  return isSameDay(tomorrow, deliveryDate);
};

export const getAvailableDeliveryTimes = (orderTime, deliveryDate) => {
  const fivePM = parse("17:00", "HH:mm", new Date());
  const eightPM = parse("20:00", "HH:mm", new Date());

  const isAfterFivePM = isAfter(orderTime, fivePM);
  const isAfterEightPM = isAfter(orderTime, eightPM);

  const today = new Date();
  const tomorrow = addDays(today, 1);

  const options = [];

  // Если выбранная дата - сегодня
  if (isSameDay(deliveryDate, today)) {
    if (!isAfterFivePM) {
      options.push({ value: "evening", label: "18:00 - 21:00" });
    }
  }

  // Если выбранная дата - завтра и заказ сделан до 20:00
  if (isSameDay(deliveryDate, tomorrow) && !isAfterEightPM) {
    options.push({ value: "morning", label: "9:00 - 12:00" });
    options.push({ value: "evening", label: "18:00 - 21:00" });
  }

  return options;
};
