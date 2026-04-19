export const waterQuantities = {
  normalWater19: 1,
  normalWater13: 2,
  normalWater11: 2,
  mineralWater19: 1,
  mineralWater13: 2,
  mineralWater11: 2,
};

export const taraPrice = 410;

export const normalWater19lPrice = 165;
export const mineralWater19lPrice = 175;

export const discount19lFrom2To5 = 25;
export const discount19lFrom6To9 = 35;
export const discount19lFrom10 = 45;

export const catalogWaterData = [
  {
    name: "Очищена",
    description: "Здорова Вода",
    price: normalWater19lPrice,
    priceFrom2To5: 140,
    priceFrom6To9: 130,
    priceFrom10: 120,
    image: "/bottle19L.png",
    volume: 19,
    width: 102,
    height: 144,
    type: "normalWater",
  },
  {
    name: "Мінералізована",
    description: "Здорова Вода",
    price: mineralWater19lPrice,
    priceFrom2To5: 150,
    priceFrom6To9: 140,
    priceFrom10: 130,
    image: "/bottle19L.png",
    volume: 19,
    width: 102,
    height: 144,
    type: "mineralWater",
  },
];
