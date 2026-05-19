import { catalogWaterData } from "@/components/CatalogWater/data";
import { calculateOnWaterPagePrice } from "./calculateWaterPrice";

export const calculateTotalPrice = (cart) => {
  return cart.reduce((acc, obj) => {
    const actualWater = catalogWaterData.find(
      (item) => item.type === obj.waterType && item.volume === obj.waterVolume,
    );

    if (!actualWater) {
      return acc;
    }

    const itemTotalPrice = calculateOnWaterPagePrice(obj.waterQuantity, actualWater.price);

    return acc + itemTotalPrice;
  }, 0);
};

export const sortMineral19First = (cart) => {
  return cart.sort((a, b) => {
    const aIsMineral19 = a.waterVolume === 19 && a.waterType === "mineralWater";
    const bIsMineral19 = b.waterVolume === 19 && b.waterType === "mineralWater";

    if (aIsMineral19 && !bIsMineral19) return -1;
    if (!aIsMineral19 && bIsMineral19) return 1;

    return 0;
  });
};

export const allQuantityWater19l = (cart) =>
  cart.reduce((acc, obj) => {
    return obj.waterVolume === 19 ? acc + obj.waterQuantity : acc;
  }, 0);

export const allQuantityNormalWater19l = (cart) =>
  cart.reduce((acc, obj) => {
    return obj.waterVolume === 19 && obj.waterType === "normalWater"
      ? acc + obj.waterQuantity
      : acc;
  }, 0);

export const allQuantityMineralWater19l = (cart) =>
  cart.reduce((acc, obj) => {
    return obj.waterVolume === 19 && obj.waterType === "mineralWater"
      ? acc + obj.waterQuantity
      : acc;
  }, 0);

export const calculateDiscountPrice = (cart, actionDiscount = 0) => {
  const discountPrice = cart.reduce((acc, obj) => {
    const actualWater = catalogWaterData.find(
      (item) => item.type === obj.waterType && item.volume === obj.waterVolume,
    );

    if (!actualWater) {
      return acc;
    }

    const totalWithoutDiscount = actualWater.price * obj.waterQuantity;

    const totalWithDiscount = calculateOnWaterPagePrice(
      obj.waterQuantity,
      actualWater.price,
      actualWater.priceFrom2To5,
      actualWater.priceFrom6To9,
      actualWater.priceFrom10,
    );

    return acc + (totalWithoutDiscount - totalWithDiscount);
  }, 0);

  return discountPrice + actionDiscount;
};
