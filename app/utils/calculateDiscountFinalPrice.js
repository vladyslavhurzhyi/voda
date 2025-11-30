import { taraPrice } from "@/Components/CatalogWater/data";
import { calculateDiscountPrice, calculateTotalPrice, sortMineral19First } from "./reduceCalc";

export const calculateFinalPrice = (cart, taraQuantity, actionDiscount, newClient) => {
  let finalPrice;

  const sortedWater = sortMineral19First(cart);
  const tara = taraQuantity * taraPrice;
  finalPrice =
    calculateTotalPrice(sortedWater) -
    calculateDiscountPrice(sortedWater, actionDiscount, newClient) +
    tara;

  return finalPrice;
};
