const baseUrl =
  "https://api.telegram.org/bot7017177531:AAHvpOLQOzTZScs41GpRFoNlcDLATAW0U4c/";

const sendMessageFromWaterCooler = async ({
  feedback,
  name,
  phoneNumber,
  comments,
}) => {
  let telegramMessage;

  if (feedback) {
    telegramMessage = `
  <b>Оставили отзыв!</b>
  
  <b>Имя:</b> ${name}
  <b>Отзыв:</b> ${comments}
`;
  } else {
    telegramMessage = `
  <b>Хотят кулер в аренду!</b>
  
  <b>Имя:</b> ${name}
  <b>Телефон:</b> ${phoneNumber}
  <b>Комментарий:</b> ${comments}
`;
  }

  const url = `${baseUrl}sendMessage?chat_id=-4135041896&text=${encodeURIComponent(
    telegramMessage
  )}&parse_mode=html`;

  const response = await fetch(url);

  console.log("response", response);
};

export default sendMessageFromWaterCooler;
