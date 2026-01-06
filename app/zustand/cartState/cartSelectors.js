import { calculateFinalPrice } from "@/app/utils/calculateDiscountFinalPrice";
import { calculateDiscountPrice } from "@/app/utils/reduceCalc";

export const selectFinalDiscount = (state) => {
  return calculateDiscountPrice(state.waterItems, state.actionDiscount, state.newClient) || 0;
};

export const selectFinalPrice = (state) => {
  const waterPrice = calculateFinalPrice(
    state.waterItems,
    state.tara,
    state.actionDiscount,
    state.newClient,
  );

  const otherProductsPrice = Array.isArray(state.otherProducts)
    ? state.otherProducts.reduce((acc, p) => acc + p.price * p.quantity, 0)
    : 0;

  return waterPrice + otherProductsPrice || 0;
};
