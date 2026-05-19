import { pumpsData } from "@/components/Pumps/pumpsData";
import { coolersData } from "@/components/WaterCoolers/data";
import { dispensersData } from "@/components/Dispensers/data";
import { bottleStandData } from "@/components/BottleStand/bottleStandData";
import { bottlesAndAccessoriesData } from "@/components/BottlesAndAccessories/data";
import { bottleCoverData } from "@/components/BottleCover/data";

export const otherProductsCatalog = [
  ...pumpsData,
  ...coolersData,
  ...dispensersData,
  ...bottleStandData,
  ...bottlesAndAccessoriesData,
  ...bottleCoverData,
];

export const getActualProduct = (cartItem) => {
  return otherProductsCatalog.find((product) => product.id === cartItem.id);
};

export const calculateOtherProductsPrice = (otherProducts) => {
  if (!Array.isArray(otherProducts)) return 0;

  return otherProducts.reduce((acc, cartItem) => {
    const actualProduct = getActualProduct(cartItem);

    if (!actualProduct) {
      return acc;
    }

    return acc + actualProduct.price * cartItem.quantity;
  }, 0);
};
