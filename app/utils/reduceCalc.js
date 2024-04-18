export const calculateTotalPrice = (cart) => {
  return cart.reduce((acc, obj) => acc + obj.price * obj.waterQuantity, 0);
};

export const allQuantityWater19l = (cart) =>
  cart.reduce((acc, obj) => {
    return obj.waterVolume === 19 ? acc + obj.waterQuantity : acc;
  }, 0);

export const calculateDiscountPrice = (cart, actionDiscount) => {
  let discountPrice = 0;

  if (allQuantityWater19l(cart) === 1) {
    return 0;
  } else {
    discountPrice =
      cart.reduce((acc, obj) => acc + obj.discount * obj.waterQuantity, 0) +
      actionDiscount;
  }
  return discountPrice;
};
