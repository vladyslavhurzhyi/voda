export const calcWaterPrice = (waterVolume, waterType) => {
  let priceForWater = 0;

  if (waterVolume === 19) {
    priceForWater = waterType === "mineralWater" ? 140 : 130;
  } else if (waterVolume === 13) {
    priceForWater = waterType === "mineralWater" ? 80 : 75;
  } else if (waterVolume === 11) {
    priceForWater = waterType === "mineralWater" ? 75 : 70;
  }

  return priceForWater;
};

export const calculateOnWaterPagePrice = (waterQuantity, waterType) => {
  let bottlePrice;
  if (waterQuantity >= 10) {
    // pricePerBottle = waterType === "mineralWater" ? 70 : 60;
    bottlePrice = waterType === "mineralWater" ? 100 : 95;
  } else if (waterQuantity >= 6 && waterQuantity <= 9) {
    // pricePerBottle = waterType === "mineralWater" ? 80 : 65;
    bottlePrice = waterType === "mineralWater" ? 110 : 100;
  } else if (waterQuantity >= 2 && waterQuantity <= 5) {
    // pricePerBottle = waterType === "mineralWater" ? 90 : 75;
    bottlePrice = waterType === "mineralWater" ? 120 : 110;
  } else {
    // pricePerBottle = priceForWater; // для одной бутылки без скидки
    bottlePrice = waterType === "mineralWater" ? 140 : 130;
  }

  return waterQuantity * bottlePrice;
};

export const calculateSmallBottleOnWaterPagePrice = (
  waterQuantity,
  waterType
) => {
  let bottlePrice;
  if (waterQuantity >= 10) {
    // pricePerBottle = waterType === "mineralWater" ? 70 : 60;
    bottlePrice = waterType === "mineralWater" ? 85 : 75;
  } else if (waterQuantity >= 6 && waterQuantity <= 9) {
    // pricePerBottle = waterType === "mineralWater" ? 80 : 65;
    bottlePrice = waterType === "mineralWater" ? 95 : 85;
  } else if (waterQuantity >= 2 && waterQuantity <= 5) {
    // pricePerBottle = waterType === "mineralWater" ? 90 : 75;
    bottlePrice = waterType === "mineralWater" ? 105 : 95;
  }

  return waterQuantity * bottlePrice;
};
