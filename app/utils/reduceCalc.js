export const calculateTotalPrice = (cart) => {
  return cart.reduce((acc, obj) => acc + obj.price * obj.waterQuantity, 0);
};

export const calculateDiscountPrice = (cart, actionDiscount) => {
  const discountPrice =
    cart.reduce((acc, obj) => acc + obj.discount * obj.waterQuantity, 0) +
    actionDiscount;

  return discountPrice;
};

export const allQuantityWater19l = (cart) =>
  cart.reduce((acc, obj) => {
    return obj.waterVolume === 19 ? acc + obj.waterQuantity : acc;
  }, 0);
