export const calcDiscount = (waterQuantity, waterType, waterVolume) => {
  if (waterVolume !== 19) return 0;

  let discountAmount = 0;

  if (waterQuantity >= 10) {
    // pricePerBottle = waterType === "mineralWater" ? 70 : 60;
    discountAmount = waterType === "mineralWater" ? 40 : 35;
  } else if (waterQuantity >= 6 && waterQuantity <= 9) {
    // pricePerBottle = waterType === "mineralWater" ? 80 : 65;
    discountAmount = waterType === "mineralWater" ? 30 : 30;
  } else if (waterQuantity >= 2 && waterQuantity <= 5) {
    // pricePerBottle = waterType === "mineralWater" ? 90 : 75;
    discountAmount = waterType === "mineralWater" ? 20 : 20;
  } else {
    // pricePerBottle = priceForWater; // для одной бутылки без скидки
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

// export const calculateDiscountMineralWater = (arr) => {
//   let totalDiscount = 0;

//   arr.forEach((item) => {
//     if (item.waterVolume !== 19) return;
//     if (item.waterType === "mineralWater") {
//       totalDiscount +=
//         calcDiscount(item.waterQuantity, item.waterType) * item.waterQuantity;
//     }
//   });
//   return totalDiscount;
// };

// export const calculateDiscountNormalWater = (arr) => {
//   let totalDiscount = 0;
//   arr.forEach((item) => {
//     if (item.waterVolume !== 19) return;
//     if (item.waterType === "normalWater") {
//       totalDiscount +=
//         calcDiscount(item.waterQuantity, item.waterType) * item.waterQuantity;
//     }
//   });
//   return totalDiscount;
// };
