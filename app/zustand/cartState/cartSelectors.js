import { calculateFinalPrice } from "@/app/utils/calculateDiscountFinalPrice";
import { calculateOtherProductsPrice } from "@/app/utils/calculateOtherProductsPrice";
import { allQuantityWater19l, calculateDiscountPrice } from "@/app/utils/reduceCalc";

export const selectFinalDiscount = (state) => {
  return (
    calculateDiscountPrice(
      state.waterItems,
      // state.actionDiscount, state.newClientAction
    ) || 0
  );
};

export const selectFinalPrice = (state) => {
  const waterPrice = calculateFinalPrice(
    state.waterItems,
    state.taraQuantity,
    // state.actionDiscount,
    // state.newClientAction,
  );

  const otherProductsPrice = calculateOtherProductsPrice(state.otherProducts) || 0;

  const pumpActionPrice =
    state.newClient &&
    state.newClientAction === "action2" &&
    allQuantityWater19l(state.waterItems) >= 3 &&
    state.taraQuantity >= 3
      ? 1
      : 0;

  console.log("state", state);
  console.log("pumpActionPrice", pumpActionPrice);

  return waterPrice + otherProductsPrice + pumpActionPrice || 0;
};
