const baseUrl =
  "https://api.telegram.org/bot7017177531:AAHvpOLQOzTZScs41GpRFoNlcDLATAW0U4c/";

const sendMessage = async ({
  address,
  deliveryDate,
  time,
  house,
  courpus,
  apartment,
  payMethod,
}) => {
  const text = `Address: ${address}, deliveryDate: ${deliveryDate}, time: ${time}, houseNumber: ${house}, courpus: ${courpus}, apartment: ${apartment}, payMethod: ${payMethod}`;
  const url = `${baseUrl}sendMessage?chat_id=-4135041896&text=${text}`;

  const response = await fetch(url);

  console.log("response", response);
};

export default sendMessage;
