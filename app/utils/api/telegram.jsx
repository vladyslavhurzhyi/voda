const baseUrl =
  "https://api.telegram.org/bot7017177531:AAHvpOLQOzTZScs41GpRFoNlcDLATAW0U4c/";

const sendMessage = async ({
  name,
  phoneNumber,
  address,
  house,
  courpus,
  apartment,
  deliveryDate,
  time,
  newClient,
  newClientAction,
  payMethod,
  comment,
  skipOrderConfirmation,
  cart,
  otherProducts,
  finalPrice,
}) => {
  const text = `
  Имя: ${name} \n 
  Телефон: ${phoneNumber} \n 
 Улица: ${address}  \n 
Дом: ${house}   \n 
  Корпус: ${courpus} \n 
  Квартира: ${apartment} \n 
 Дата доставки: ${deliveryDate.toLocaleDateString()}  \n 
 Время доставки: ${time === "morning" ? "9:00 - 12:00" : "18:00 - 21:00"}  \n 

   ${
     newClient
       ? `\n Новый клиент выбрал акцию ${
           newClientAction === "action1"
             ? "два бутля води по ціні одного"
             : "механічна помпа в подарунок."
         }`
       : "\n Постоянный клиент"
   }

  \n К оплате: ${finalPrice} грн
  \n Метод оплаты: ${payMethod}
  \n Комментарий: ${comment}
  \n  ${
    skipOrderConfirmation
      ? "можно не звонить для подтверждения"
      : "надо позвонить для подтверждения"
  }

  
  `;
  console.log("comment", comment);
  const url = `${baseUrl}sendMessage?chat_id=-4135041896&text=${text}`;

  const response = await fetch(url);

  console.log("response", response);
};

export default sendMessage;
