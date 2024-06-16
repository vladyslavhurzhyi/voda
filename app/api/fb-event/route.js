import { NextResponse } from "next/server";
import axios from "axios";

const FB_PIXEL_ID = process.env.FB_PIXEL_ID;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

export async function POST(req) {
  const body = await req.json();
  const { eventName, eventData } = body;

  const url = `https://graph.facebook.com/v11.0/${FB_PIXEL_ID}/events`;

  const data = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(new Date() / 1000),
        action_source: "website",
        event_id: "12345",
        user_data: {},
        custom_data: eventData,
      },
    ],
    access_token: ACCESS_TOKEN,
  };

  try {
    const response = await axios.post(url, data);
    return NextResponse.json({ success: true, response: response.data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export function GET() {
  return new NextResponse("Method Not Allowed", { status: 405 });
}
