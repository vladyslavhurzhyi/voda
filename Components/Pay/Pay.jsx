"use client";

import { useCartStore } from "@/app/zustand/cartState/cartState";
import { useEffect } from "react";
import { ModalThankYou } from "../ModalThankYou/ModalThankYou";

const Pay = () => {
  const cart = useCartStore((state) => state.waterItems);
  const otherProducts = useCartStore((state) => state.otherProducts);

  const resetWaterItems = useCartStore((state) => state.resetWaterItems);
  const resetOtherProducts = useCartStore((state) => state.resetOtherProducts);

  useEffect(() => {
    if (cart.length === 0 || otherProducts.length === 0) return;
    resetWaterItems();
    resetOtherProducts();
  }, [resetWaterItems, resetOtherProducts, cart, otherProducts]);

  return (
    <div className="flex items-center mt-[50px] md:mt-[150px] ">
      <ModalThankYou />
    </div>
  );
};

export default Pay;
