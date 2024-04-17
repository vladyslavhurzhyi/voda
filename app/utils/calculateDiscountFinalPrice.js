import { calculateDiscountPrice, calculateTotalPrice } from "./reduceCalc";

export const calculateFinalPrice = (cart, taraQuantity, actionDiscount) => {
  // const discountPrice = console.log(
  //   "cart.reduce((acc, obj) => acc + obj.price * obj.waterQuantity, 0)",
  //   cart.reduce((acc, obj) => acc + obj.price * obj.waterQuantity, 0)
  // );

  // console.log(
  //   "calculateDiscountPrice(cart, actionDiscount)",
  //   calculateDiscountPrice(cart, actionDiscount)
  // );
  // cart.reduce((acc, obj) => acc + obj.price * obj.waterQuantity, 0) -
  //   calculateDiscountPrice(cart, actionDiscount) +
  //   taraQuantity * 350 -
  //   actionDiscount;

  let finalPrice;

  const tara = taraQuantity * 350;
  finalPrice =
    calculateTotalPrice(cart) -
    calculateDiscountPrice(cart, actionDiscount) +
    tara;

  return finalPrice;
};
