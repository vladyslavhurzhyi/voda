import { calcDiscount } from "@/app/utils/discountCalculation";
import { NextResponse } from "next/server";

const baseUrl = process.env.TELEGRAM_BASE_URL;
const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export async function POST(req) {
  const {
    name,
    phoneNumber,
    address,
    house,
    courpus,
    apartment,
    deliveryDate,
    deliveryTime,
    newClient,
    newClientAction,
    payMethodCart,
    comment,
    skipOrderConfirmation,
    cart,
    otherProducts,
    finalPrice,
    taraQuantity,
  } = await req.json();

  let waterList = [];
  let productsList = [];

  cart?.forEach((item) => {
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
    deliveryTime === "morning" ? "9:00 - 12:00" : "18:00 - 21:00"
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
  <b>Метод оплаты:</b> ${payMethodCart}
  <b>Комментарий:</b> ${comment ? comment : "нет комментария"}

  ${
    skipOrderConfirmation
      ? "<b>можно не звонить для подтверждения</b>"
      : "<b>надо позвонить для подтверждения</b>"
  }
`;

  const url = `${baseUrl}sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    telegramMessage
  )}&parse_mode=html&disable_web_page_preview=true`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${botToken}`,
      },
    });
    return NextResponse.json({
      message: "Повідомлення успішно надіслано в Telegram",
    });
  } catch (error) {
    console.error("Помилка при надсиланні повідомлення в Telegram:", error);
    return NextResponse.json(
      { message: "Не вдалося надіслати повідомлення в Telegram" },
      { status: 500 }
    );
  }
}

export function GET() {
  return new NextResponse("Метод не дозволений", { status: 405 });
}
