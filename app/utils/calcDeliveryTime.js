import {
  earlyOrderTime,
  eveningDeliveryOption,
  lateOrderTime,
  morningDeliveryOption,
} from "@/staticData/time";
import { parse, isAfter, isSameDay, addDays, getDay } from "date-fns";

export const getDeliveryOptions = (deliveryDate, currentTime = new Date()) => {
  const today = new Date();
  const tomorrow = addDays(today, 1);

  const fifteenThirty = parse(earlyOrderTime, "HH:mm", today);
  const nineteenThirty = parse(lateOrderTime, "HH:mm", today);

  const isAfter1530 = isAfter(currentTime, fifteenThirty);
  const isAfter1930 = isAfter(currentTime, nineteenThirty);

  const options = [];
  const dayOfWeek = getDay(deliveryDate); // 0 = воскресенье

  // --- Воскресенье: только вечер ---
  if (dayOfWeek === 0) {
    options.push(eveningDeliveryOption);
    return options;
  }

  // --- Пн-Сб ---
  // Утро
  if (isSameDay(deliveryDate, today) && !isAfter1930) {
    options.push(morningDeliveryOption);
  } else if (isSameDay(deliveryDate, tomorrow) && !isAfter1930) {
    options.push(morningDeliveryOption);
  } else if (!isSameDay(deliveryDate, today) && !isSameDay(deliveryDate, tomorrow)) {
    options.push(morningDeliveryOption);
  }

  // Вечер
  if (isSameDay(deliveryDate, today) && !isAfter1530) {
    options.push(eveningDeliveryOption);
  } else if (!isSameDay(deliveryDate, today)) {
    options.push(eveningDeliveryOption);
  }

  return options;
};
