const sendMessageFromFooter = async ({ name, phoneNumber, comments }) => {
  const response = await fetch("/api/sendMessageFromFooter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, phoneNumber, comments }),
  });

  const data = await response.json();
  console.log("response", data);
};

export default sendMessageFromFooter;
