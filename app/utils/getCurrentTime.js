export const getCurrentTime = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Добавляем ведущий ноль, если число меньше 10
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${hours}:${minutes}`;
};

console.log(getCurrentTime()); // Например, "18:00"
