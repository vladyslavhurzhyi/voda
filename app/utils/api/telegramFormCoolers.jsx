const sendMessageFromWaterCooler = async ({ name, phoneNumber, comments }) => {
  const response = await fetch("/api/sendMessageFromWaterCooler", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, phoneNumber, comments }),
  });

  const data = await response.json();
};

export default sendMessageFromWaterCooler;
