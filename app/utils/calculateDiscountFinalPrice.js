export const calculateFinalPrice = (cart, taraQuantity, actionDiscount) => {
  const discountPrice =
    cart.reduce((acc, obj) => acc + obj.price * obj.waterQuantity, 0) -
    cart.reduce((acc, obj) => acc + obj.discount * obj.waterQuantity, 0) +
    taraQuantity * 350 -
    actionDiscount;

  return discountPrice;
};
