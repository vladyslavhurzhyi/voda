import { calculateFinalPrice } from "@/app/utils/calculateDiscountFinalPrice";
import Button from "../Button/Button";
import {
  calculateDiscountPrice,
  calculateTotalPrice,
} from "@/app/utils/reduceCalc";

const CartFinalPrice = ({
  cart,
  taraQuantity,
  actionDiscount,
  otherProducts,
}) => {
  const cartWaterQuantity = cart.reduce(
    (acc, obj) => acc + obj.waterQuantity,
    0
  );

  const otherProdFinalPrice = otherProducts.reduce(
    (acc, obj) => acc + obj.price * obj.quantity,
    0
  );

  return (
    <>
      <div className="w-[312px] h-[418px] bg-[#E6EBF0] rounded-lg mx-auto md:mx-0">
        <div>
          <p className=" mt-[40px] mx-[62px] font-semibold text-[24px] uppercase">
            замовлення
          </p>

          <div className=" mx-[32px] mt-[24px] mb-[40px]  ">
            <div className="flex justify-between mb-4 border-t-[1px] border-[#B3CBDB] pt-[16px]">
              <p>Сума</p>

              <p>
                {" "}
                {cart.length > 0 || otherProdFinalPrice > 0 ? (
                  <span>
                    {" "}
                    {calculateTotalPrice(cart) + otherProdFinalPrice} ₴
                  </span>
                ) : (
                  "00.00 ₴"
                )}
              </p>
            </div>

            <div className="flex justify-between mb-4">
              <p>Знижка</p>
              <p className="block w-fit">
                -{" "}
                {cartWaterQuantity === 1
                  ? 0
                  : calculateDiscountPrice(cart, actionDiscount)}{" "}
                ₴
              </p>
            </div>

            <div className="flex justify-between mb-4">
              <p>Доставлення</p>
              <p>0 ₴</p>
            </div>

            <div className="flex justify-between mb-4">
              <p>Тара</p>
              <p>{taraQuantity * 350} ₴</p>
            </div>

            <div className="flex justify-between mb-4 text-[20px] font-medium">
              <p>До сплати</p>
              <p className=" text-[#00AFF0]">
                {calculateFinalPrice(cart, taraQuantity, actionDiscount) +
                  otherProdFinalPrice}{" "}
                ₴
              </p>
            </div>

            <Button
              text={"Підтвердити"}
              className={" py-[18px] px-[68.5px]"}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartFinalPrice;
