// app/api/liqpay/route.js

import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  const body = await req.json();
  const { amount, currency, description, order_id } = body;

  const LIQPAY_PUBLIC_KEY = process.env.PUBLIC_KEY;
  const LIQPAY_PRIVATE_KEY = process.env.PRIVATE_KEY;

  const liqpayData = {
    version: 3,
    public_key: LIQPAY_PUBLIC_KEY,
    action: "pay",
    amount,
    currency,
    description,
    order_id,
    sandbox: 1, // Уберите это в продакшене
    result_url: "https://voda-aquatica.od.ua/success-pay", // Укажите ваш URL для успешной оплаты
    // server_url: "https://voda-aquatica.od.ua/api/liqpay-callback", // Укажите ваш серверный URL для обратного вызова
    error_url: "https://voda-aquatica.od.ua/fail", // Укажите ваш URL для неудачной оплаты
  };

  const data = Buffer.from(JSON.stringify(liqpayData)).toString("base64");
  const signature = crypto
    .createHash("sha1")
    .update(LIQPAY_PRIVATE_KEY + data + LIQPAY_PRIVATE_KEY)
    .digest("base64");

  return NextResponse.json({ data, signature });
}

export function GET() {
  return new NextResponse("Method Not Allowed", { status: 405 });
}
