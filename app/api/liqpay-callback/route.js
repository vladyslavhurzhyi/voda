import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  const body = await req.json();
  const { data, signature } = body;

  const LIQPAY_PRIVATE_KEY = process.env.LIQPAY_PRIVATE_KEY;

  const expectedSignature = crypto
    .createHash("sha1")
    .update(LIQPAY_PRIVATE_KEY + data + LIQPAY_PRIVATE_KEY)
    .digest("base64");

  if (signature === expectedSignature) {
    const liqpayData = JSON.parse(
      Buffer.from(data, "base64").toString("utf-8")
    );

    // Обработка данных LiqPay
    console.log("LiqPay Callback Data:", liqpayData);

    // Верните успешный ответ
    return NextResponse.json({ status: "success" });
  } else {
    // Верните ошибку, если подпись не совпадает
    return NextResponse.json(
      { status: "error", message: "Invalid signature" },
      { status: 400 }
    );
  }
}

export function GET() {
  return new NextResponse("Method Not Allowed", { status: 405 });
}
