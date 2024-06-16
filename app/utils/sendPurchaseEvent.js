export const sendPurchaseEvent = async ({ price }) => {
  const response = await fetch("/api/fb-event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eventName: "Lead",
      eventData: { value: price, currency: "USD" },
    }),
  });

  const result = await response.json();
};
