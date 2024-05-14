export const calcDiscount = (waterQuantity, waterType, waterVolume) => {
  if (waterVolume !== 19) return 0;

  let discountAmount;

  if (waterQuantity >= 10) {
    // pricePerBottle = waterType === "mineralWater" ? 70 : 60;
    discountAmount = waterType === "mineralWater" ? 120 - 75 : 105 - 70;
  } else if (waterQuantity >= 6 && waterQuantity <= 9) {
    // pricePerBottle = waterType === "mineralWater" ? 80 : 65;
    discountAmount = waterType === "mineralWater" ? 120 - 85 : 105 - 75;
  } else if (waterQuantity >= 2 && waterQuantity <= 5) {
    // pricePerBottle = waterType === "mineralWater" ? 90 : 75;
    discountAmount = waterType === "mineralWater" ? 120 - 95 : 105 - 85;
  } else {
    // pricePerBottle = priceForWater; // для одной бутылки без скидки
    discountAmount = 0;
  }

  return discountAmount;
};

export const calculateDiscountMineralWater = (arr) => {
  let totalDiscount = 0;

  arr.forEach((item) => {
    if (item.waterVolume !== 19) return;
    if (item.waterType === "mineralWater") {
      totalDiscount +=
        calcDiscount(item.waterQuantity, item.waterType) * item.waterQuantity;
    }
  });
  return totalDiscount;
};

export const calculateDiscountNormalWater = (arr) => {
  let totalDiscount = 0;
  arr.forEach((item) => {
    if (item.waterVolume !== 19) return;
    if (item.waterType === "normalWater") {
      totalDiscount +=
        calcDiscount(item.waterQuantity, item.waterType) * item.waterQuantity;
    }
  });
  return totalDiscount;
};
