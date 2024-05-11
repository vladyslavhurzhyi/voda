"use client";

import sendMessage from "@/app/utils/api/telegram";
import { useCartStore } from "@/app/zustand/cartState/cartState";

const Pay = () => {
  const cart = useCartStore((state) => state.waterItems);
  const otherProducts = useCartStore((state) => state.otherProducts);
  const finalPrice = useCartStore((state) => state.finalPrice);

  const name = useCartStore((state) => state.name);
  const phoneNumber = useCartStore((state) => state.phoneNumber);
  const address = useCartStore((state) => state.address);
  const deliveryDate = useCartStore((state) => state.deliveryDate);
  const time = useCartStore((state) => state.time);
  const house = useCartStore((state) => state.house);
  const courpus = useCartStore((state) => state.courpus);
  const apartment = useCartStore((state) => state.apartment);
  const payMethod = useCartStore((state) => state.payMethod);
  const newClient = useCartStore((state) => state.newClient);
  const newClientAction = useCartStore((state) => state.newClientAction);
  const comment = useCartStore((state) => state.comment);
  const skipOrderConfirmation = useCartStore(
    (state) => state.skipOrderConfirmation
  );
  const taraQuantity = useCartStore((state) => state.tara);

  sendMessage({
    name,
    phoneNumber,
    address,
    house,
    courpus,
    apartment,
    deliveryDate,
    time,
    newClient,
    newClientAction,
    payMethod,
    comment,
    skipOrderConfirmation,
    cart,
    otherProducts,
    finalPrice,
    taraQuantity,
  });

  return (
    <div className=" flex w-[500px] h-[500px] justify-center items-center mx-auto">
      все ок
    </div>
  );
};

export default Pay;