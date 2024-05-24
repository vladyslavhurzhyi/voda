import { calcDiscount } from "../discountCalculation";

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
  taraQuantity,
}) => {
  let waterList = [];
  let productsList = [];

  cart?.forEach((item) => {
    console.log("item", item);
    const discount = calcDiscount(
      item?.waterQuantity,
      item?.waterType,
      item?.waterVolume
    );

    const waterType =
      item.waterType === "normalWater" ? "Очищена" : "Мінералізована";

    const totalPrice = item.price * item.waterQuantity;

    waterList.push({
      waterType: waterType,
      waterVolume: item.waterVolume,
      waterQuantity: item.waterQuantity,
      totalPrice: totalPrice + "₴",
      discount: discount,
    });
  });

  otherProducts?.forEach((item) => {
    const totalPrice = item.price * item.quantity;

    productsList.push({
      name: item.name,
      description: item.description,
      quantity: item.quantity,
      totalPrice: totalPrice + "₴",
    });
  });

  let waterMessage = "";
  waterList.forEach((item, index) => {
    waterMessage += ` \n  <b>Позиция № ${index + 1}:</b>  \n `;
    waterMessage += `<b>Тип воды:</b> ${item.waterType}, \n `;
    waterMessage += `<b>Объем воды:</b> ${item.waterVolume}, \n `;
    waterMessage += `<b>Количество:</b> ${item.waterQuantity}, \n `;
    waterMessage += `<b>Цена:</b> ${item.totalPrice}  \n `;

    waterMessage += `<b>Скидка:</b> ${
      item.discount * item?.waterQuantity
    }  \n `;
  });

  let productsMessage = "";
  productsList.forEach((item, index) => {
    productsMessage += `  \n  <b>Товар № ${index + 1}:</b>  \n `;
    productsMessage += `<b>Название:</b> ${item.name} - ${item.description}, \n `;
    productsMessage += `<b>Количество:</b> ${item.quantity}, \n `;
    productsMessage += `<b>Цена:</b> ${item.totalPrice}  \n `;
  });

  const telegramMessage = `
  <b>Имя:</b> ${name}
  <b>Телефон:</b> ${phoneNumber}
  <b>Улица:</b> ${address}
  <b>Дом:</b> ${house}
  <b>Корпус:</b> ${courpus}
  <b>Квартира:</b> ${apartment}
  <b>Дата доставки:</b> ${new Date(deliveryDate).toLocaleDateString("uk-UA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
  <b>Время доставки:</b> ${
    time === "morning" ? "9:00 - 12:00" : "18:00 - 21:00"
  }

  ${
    newClient
      ? `<b>Новый клиент выбрал акцию</b> ${
          newClientAction === "action1"
            ? "два бутля води по ціні одного"
            : "механічна помпа в подарунок."
        }`
      : "<b>Постоянный клиент</b>"
  }

 

  <b>ЗАКАЗ ВОДЫ:</b>
  ${waterMessage}

  <b>ЗАКАЗ ДРУГИХ ТОВАРОВ:</b>
  ${productsMessage}

  <b>Тара:</b> ${taraQuantity} шт.

 <b>Общая сумма к оплате:</b> ${finalPrice} грн
  <b>Метод оплаты:</b> ${payMethod}
  <b>Комментарий:</b> ${comment ? comment : "нет комментария"}


  ${
    skipOrderConfirmation
      ? "<b>можно не звонить для подтверждения</b>"
      : "<b>надо позвонить для подтверждения</b>"
  }

`;

  const url = `${baseUrl}sendMessage?chat_id=-4135041896&text=${encodeURIComponent(
    telegramMessage
  )}&parse_mode=html`;

  const response = await fetch(url);

  console.log("response", response);
};

export default sendMessage;
