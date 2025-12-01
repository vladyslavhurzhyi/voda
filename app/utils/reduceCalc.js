export const calculateTotalPrice = (cart) => {
  return cart.reduce((acc, obj) => acc + obj.price * obj.waterQuantity, 0);
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

export const calculateDiscountPrice = (cart, actionDiscount, newClient) => {
  if (allQuantityWater19l(cart) <= 1) {
    return 0;
  }

  const hasNormal19 = allQuantityNormalWater19l(cart) >= 2;
  const hasMineral19 = allQuantityMineralWater19l(cart) >= 2;

  if (hasNormal19 && !hasMineral19 && !!newClient) {
    const discountNormal = cart
      .filter((item) => item.waterVolume === 19 && item.waterType === "normalWater")
      .reduce((acc, obj) => acc + obj.discount * (obj.waterQuantity - 2), 0);

    return actionDiscount + discountNormal;
  }

  if (hasMineral19 && !hasNormal19 && !!newClient) {
    const discountMineral = cart
      .filter((item) => item.waterVolume === 19 && item.waterType === "mineralWater")
      .reduce((acc, obj) => acc + obj.discount * (obj.waterQuantity - 2), 0);

    return actionDiscount + discountMineral;
  }

  let discountPrice = 0;

  if (hasNormal19 && hasMineral19 && !!newClient) {
    const discountMineral = cart
      .filter((item) => item.waterVolume === 19 && item.waterType === "mineralWater")
      .reduce((acc, obj) => acc + obj.discount * (obj.waterQuantity - 2), 0);

    const discountNormal = cart
      .filter((item) => item.waterVolume === 19 && item.waterType === "normalWater")
      .reduce((acc, obj) => acc + obj.discount * obj.waterQuantity, 0);

    return discountNormal + discountMineral + actionDiscount;
  }

  const discountPriceNormalWater = cart
    .filter((item) => item.waterType === "normalWater")
    .reduce((acc, obj) => acc + obj.discount * obj.waterQuantity, 0);

  const discountPriceMineralWater = cart
    .filter((item) => item.waterType === "mineralWater")
    .reduce((acc, obj) => acc + obj.discount * obj.waterQuantity, 0);

  discountPrice = discountPriceNormalWater + discountPriceMineralWater;

  return discountPrice + actionDiscount;
};
