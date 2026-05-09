export const formatDateUA = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return `${day}.${month}.${year}`;
};
