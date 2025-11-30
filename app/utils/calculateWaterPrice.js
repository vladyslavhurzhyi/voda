export const calculateOnWaterPagePrice = (
  waterQuantity,
  price,
  priceFrom2To5,
  priceFrom6To9,
  priceFrom10,
) => {
  let bottlePrice;
  if (waterQuantity >= 10 && priceFrom10) {
    bottlePrice = priceFrom10;
  } else if (waterQuantity >= 6 && waterQuantity <= 9 && priceFrom6To9) {
    bottlePrice = priceFrom6To9;
  } else if (waterQuantity >= 2 && waterQuantity <= 5 && priceFrom2To5) {
    bottlePrice = priceFrom2To5;
  } else {
    bottlePrice = price;
  }

  return waterQuantity * bottlePrice;
};
