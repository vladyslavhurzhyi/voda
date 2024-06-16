export const sendPurchaseEvent = async ({ price }) => {
  const response = await fetch("/api/fb-event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eventName: "Purchase",
      eventData: { value: price, currency: "UAH" },
    }),
  });

  const result = await response.json();
};
