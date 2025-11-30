export const calcDiscount = (waterQuantity, waterType, waterVolume) => {
  if (waterVolume !== 19) return 0;

  let discountAmount = 0;

  if (waterQuantity >= 10) {
    discountAmount = 40;
  } else if (waterQuantity >= 6 && waterQuantity <= 9) {
    discountAmount = 30;
  } else if (waterQuantity >= 2 && waterQuantity <= 5) {
    discountAmount = 20;
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
