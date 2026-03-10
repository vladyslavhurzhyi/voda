import {
  discount19lFrom10,
  discount19lFrom2To5,
  discount19lFrom6To9,
} from "@/Components/CatalogWater/data";

export const calcDiscount = (waterQuantity, waterType, waterVolume) => {
  if (waterVolume !== 19) return 0;

  let discountAmount = 0;

  if (waterQuantity >= 10) {
    discountAmount = discount19lFrom10;
  } else if (waterQuantity >= 6 && waterQuantity <= 9) {
    discountAmount = discount19lFrom6To9;
  } else if (waterQuantity >= 2 && waterQuantity <= 5) {
    discountAmount = discount19lFrom2To5;
  } else {
    discountAmount = 0;
  }

  return discountAmount;
};

export const calculateDiscountMineralWater = (cart) => {
  return cart
    .filter((item) => item.waterType === "mineralWater")
    .reduce((acc, obj) => acc + obj.discount * obj.waterQuantity, 0);
};

export const calculateDiscountNormalWater = (cart) => {
  return cart
    .filter((item) => item.waterType === "normalWater")
    .reduce((acc, obj) => acc + obj.discount * obj.waterQuantity, 0);
};
