import { calculateFinalPrice } from "@/app/utils/calculateDiscountFinalPrice";
import { allQuantityWater19l, calculateDiscountPrice } from "@/app/utils/reduceCalc";

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

  const pumpActionPrice = +(state.newClient &&
  state.action === "action2" &&
  allQuantityWater19l(state.waterItems) >= 3 &&
  state.taraQuantity >= 3
    ? 1
    : 0);

  return waterPrice + otherProductsPrice + pumpActionPrice || 0;
};
