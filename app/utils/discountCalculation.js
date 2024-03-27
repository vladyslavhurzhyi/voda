export const calcDiscount = (waterQuantity, waterType) => {
  let discountAmount;

  if (waterQuantity >= 10) {
    // pricePerBottle = waterType === "mineralWater" ? 70 : 60;
    discountAmount = waterType === "mineralWater" ? 110 - 70 : 95 - 60;
  } else if (waterQuantity >= 6 && waterQuantity <= 9) {
    // pricePerBottle = waterType === "mineralWater" ? 80 : 65;
    discountAmount = waterType === "mineralWater" ? 110 - 80 : 95 - 65;
  } else if (waterQuantity >= 2 && waterQuantity <= 5) {
    // pricePerBottle = waterType === "mineralWater" ? 90 : 75;
    discountAmount = waterType === "mineralWater" ? 110 - 90 : 95 - 75;
  } else {
    // pricePerBottle = priceForWater; // для одной бутылки без скидки
    discountAmount = 0;
  }

  return discountAmount;
};
