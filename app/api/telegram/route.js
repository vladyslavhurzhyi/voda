import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      name,
      phoneNumber,
      address,
      house,
      courpus,
      apartment,
      deliveryTime,
      comment,
      payMethod,
    } = req.body;

    const message = `
      Нова заявка:
      Ім'я: ${name}
      Номер телефону: ${phoneNumber}
      Адреса: ${address}, Будинок: ${house}, Корпус: ${courpus}, Квартира: ${apartment}
      Час доставки: ${deliveryTime}
      Коментар: ${comment}
      Метод оплати: ${payMethod}
    `;

    try {
      await axios.post(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
        }
      );

      res
        .status(200)
        .json({ message: "Message sent to Telegram successfully" });
    } catch (error) {
      console.error("Ошибка при отправке сообщения в Telegram:", error);
      res.status(500).json({ message: "Failed to send message to Telegram" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
