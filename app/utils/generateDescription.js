export const generateDescrip = (cart, otherProducts, taraQuantity) => {
  const formatProduct = (product) => {
    if (
      product &&
      product.waterType &&
      product.waterQuantity &&
      product.waterVolume &&
      product.price
    ) {
      const totalPrice = product.price * product.waterQuantity;
      return `${
        product.waterType === "normalWater"
          ? "Нормальная вода"
          : "Минеральная вода"
      } - ${product.waterVolume} л - ${
        product.waterQuantity
      } - ${totalPrice} грн`;
    } else if (
      product &&
      product.name &&
      product.description &&
      product.quantity &&
      product.price
    ) {
      return `${product.name} - ${product.description} - ${product.quantity} - ${product.price} грн`;
    } else {
      return "";
    }
  };

  const cartDescription = cart.map(formatProduct).join(", ");
  const otherProductsDescription = otherProducts.map(formatProduct).join(", ");
  const taraDescription = taraQuantity > 0 ? `Тара - ${taraQuantity} шт.` : "";

  const descriptions = [
    cartDescription,
    otherProductsDescription,
    taraDescription,
  ].filter(Boolean);

  return descriptions.join(", ");
};
