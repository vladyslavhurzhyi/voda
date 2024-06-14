import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: true, // Эта опция включает автоматическую настройку
  debug: false, // Включите режим отладки для разработки
};

export const initPixel = () => {
  ReactPixel.init("639833045272051", {}, options);
};

export const trackPageView = () => {
  ReactPixel.pageView();
};
