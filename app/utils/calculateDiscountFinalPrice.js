import { calculateDiscountPrice, calculateTotalPrice } from "./reduceCalc";

export const calculateFinalPrice = (cart, taraQuantity, actionDiscount) => {
  let finalPrice;

  const tara = taraQuantity * 380;
  finalPrice =
    calculateTotalPrice(cart) -
    calculateDiscountPrice(cart, actionDiscount) +
    tara;

  return finalPrice;
};
