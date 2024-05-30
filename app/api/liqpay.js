import crypto from "crypto";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { amount, currency, description, order_id } = req.body;

    const LIQPAY_PUBLIC_KEY = process.env.LIQPAY_PUBLIC_KEY;
    const LIQPAY_PRIVATE_KEY = process.env.LIQPAY_PRIVATE_KEY;

    const liqpayData = {
      version: 3,
      public_key: LIQPAY_PUBLIC_KEY,
      action: "pay",
      amount,
      currency,
      description,
      order_id,
      sandbox: 1, // Уберите это в продакшене
    };

    const data = Buffer.from(JSON.stringify(liqpayData)).toString("base64");
    const signature = crypto
      .createHash("sha1")
      .update(LIQPAY_PRIVATE_KEY + data + LIQPAY_PRIVATE_KEY)
      .digest("base64");

    res.status(200).json({ data, signature });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
