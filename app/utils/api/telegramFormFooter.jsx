const sendMessageFromFooter = async ({ name, phoneNumber }) => {
  const response = await fetch("/api/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, phoneNumber }),
  });

  const data = await response.json();
  console.log("response", data);
};

export default sendMessageFromFooter;
