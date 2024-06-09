import { useState } from "react";
import axios from "axios";

const LiqpayForm = ({ amount, currency, description, orderId }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const response = await axios.post("/api/liqpay", {
        amount,
        currency,
        description,
        order_id: orderId,
      });

      const { data, signature } = response.data;

      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://www.liqpay.ua/uk/checkout/i92826351256";

      const dataInput = document.createElement("input");
      dataInput.type = "hidden";
      dataInput.name = "data";
      dataInput.value = data;
      form.appendChild(dataInput);

      const signatureInput = document.createElement("input");
      signatureInput.type = "hidden";
      signatureInput.name = "signature";
      signatureInput.value = signature;
      form.appendChild(signatureInput);

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handlePayment}
        disabled={loading}
        type="submit"
        className={` py-4 px-16 hover:animate-pulse rounded-[14px] duration-200 text-white bg-[#91C81E] font-semibold hover:shadow "border-2 border-[#91C81E] text-greenMain"
                `}
      >
        {loading ? "Processing..." : "Pay with LiqPay"}
      </button>
    </div>
  );
};

export default LiqpayForm;
