import fetch from "node-fetch";

const baseUrl = process.env.TELEGRAM_BASE_URL;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phoneNumber } = req.body;
    const telegramMessage = `
      <b>Заказ в один клик!</b>
      <b>Перезвонить</b>

      <b>Имя:</b> ${name}
      <b>Телефон:</b> ${phoneNumber}
    `;

    const url = `${baseUrl}sendMessage?chat_id=-4135041896&text=${encodeURIComponent(
      telegramMessage
    )}&parse_mode=html`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(response.status).json({ success: false, error: data });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
