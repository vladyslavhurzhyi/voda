const baseUrl =
  "https://api.telegram.org/bot7017177531:AAHvpOLQOzTZScs41GpRFoNlcDLATAW0U4c/";

const sendMessageFromFooter = async ({
  name,
  phoneNumber,
 comments,
  
}) => {
 
  const telegramMessage = `
  <b>Заказали звонок!</b>
  
  <b>Имя:</b> ${name}
  <b>Телефон:</b> ${phoneNumber}
  <b>Комментарий:</b> ${comments}
  
`;

  const url = `${baseUrl}sendMessage?chat_id=-4135041896&text=${encodeURIComponent(
    telegramMessage
  )}&parse_mode=html`;

  const response = await fetch(url);

  console.log("response", response);
};

export default sendMessageFromFooter;
