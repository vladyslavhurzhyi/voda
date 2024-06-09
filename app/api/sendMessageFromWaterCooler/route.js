import { NextResponse } from "next/server";

const baseUrl = process.env.TELEGRAM_BASE_URL;
const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export async function POST(req) {
  if (req.method === "POST") {
    const { name, phoneNumber, comments } = await req.json(); // Используем await req.json() вместо req.body
    const telegramMessage = `
       <b>Хотят кулер в аренду!</b>
      <b>Имя:</b> ${name}
      <b>Телефон:</b> ${phoneNumber}
      <b>Комментарий:</b> ${comments}
      
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
        message: "Сообщение успешно отправлено в Telegram",
      });
    } catch (error) {
      console.error("Ошибка при отправке сообщения в Telegram:", error);
      return NextResponse.json(
        { message: "Не удалось отправить сообщение в Telegram" },
        { status: 500 }
      );
    }
  }
}

export function GET() {
  return new NextResponse("Метод не разрешен", { status: 405 });
}
