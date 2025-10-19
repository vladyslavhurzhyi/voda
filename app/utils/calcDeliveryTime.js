import { parse, isAfter, isSameDay, addDays, getDay } from "date-fns";

export const getDeliveryOptions = (deliveryDate, currentTime = new Date()) => {
  const today = new Date();
  const tomorrow = addDays(today, 1);

  const fifteenThirty = parse("15:30", "HH:mm", today);
  const nineteenThirty = parse("19:30", "HH:mm", today);

  const isAfter1530 = isAfter(currentTime, fifteenThirty);
  const isAfter1930 = isAfter(currentTime, nineteenThirty);

  const options = [];
  const dayOfWeek = getDay(deliveryDate); // 0 = воскресенье

  // --- Воскресенье: только вечер ---
  if (dayOfWeek === 0) {
    options.push({ value: "evening", label: "16:00 - 20:00" });
    return options;
  }

  // --- Пн-Сб ---
  // Утро
  if (isSameDay(deliveryDate, today) && !isAfter1930) {
    options.push({ value: "morning", label: "9:00 - 12:00" });
  } else if (isSameDay(deliveryDate, tomorrow) && !isAfter1930) {
    options.push({ value: "morning", label: "9:00 - 12:00" });
  } else if (
    !isSameDay(deliveryDate, today) &&
    !isSameDay(deliveryDate, tomorrow)
  ) {
    options.push({ value: "morning", label: "9:00 - 12:00" });
  }

  // Вечер
  if (isSameDay(deliveryDate, today) && !isAfter1530) {
    options.push({ value: "evening", label: "16:00 - 20:00" });
  } else if (!isSameDay(deliveryDate, today)) {
    options.push({ value: "evening", label: "16:00 - 20:00" });
  }

  return options;
};

// import { parse, isAfter, isSameDay, addDays, getDay } from "date-fns";

// export const getAvailableDeliveryTimes = (orderTime, deliveryDate) => {
//   const now = new Date();

//   const fifteenThirty = parse("15:30", "HH:mm", new Date());
//   const nineteenThirty = parse("19:30", "HH:mm", new Date());

//   const isAfter1530 = isAfter(now, fifteenThirty);
//   const isAfter1930 = isAfter(now, nineteenThirty);

//   const today = new Date();
//   const tomorrow = addDays(today, 1);

//   const options = [];

//   const dayOfWeek = getDay(deliveryDate); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

//   // --- Утренний интервал ---
//   if (isSameDay(deliveryDate, tomorrow) && !isAfter1930) {
//     options.push({ value: "morning", label: "9:00 - 12:00" });
//   }

//   if (!isSameDay(deliveryDate, today) && !isSameDay(deliveryDate, tomorrow)) {
//     options.push({ value: "morning", label: "9:00 - 12:00" });
//   }

//   // --- Вечерний интервал (пн-сб) ---
//   if (dayOfWeek >= 1 && dayOfWeek <= 6) {
//     if (isSameDay(deliveryDate, today) && !isAfter1530) {
//       options.push({ value: "evening", label: "16:00 - 20:00" });
//     }

//     if (!isSameDay(deliveryDate, today)) {
//       options.push({ value: "evening", label: "16:00 - 20:00" });
//     }
//   }

//   return options;
// };
