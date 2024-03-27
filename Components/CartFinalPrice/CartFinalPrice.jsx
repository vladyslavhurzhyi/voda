import Button from "../Button/Button";

const CartFinalPrice = ({ cart }) => {
  return (
    <>
      <div className="w-[312px] h-[418px] bg-[#E6EBF0] rounded-lg">
        <div>
          <p className=" mt-[40px] mx-[62px] font-semibold text-[24px] uppercase">
            замовлення
          </p>

          <div className=" mx-[32px] mt-[24px] mb-[40px]  ">
            <div className="flex justify-between mb-4 border-t-[1px] border-[#B3CBDB] pt-[16px]">
              <p>Сума</p>
              <p>
                {" "}
                {cart.length > 0 ? (
                  <span>
                    {" "}
                    {cart.reduce(
                      (acc, obj) => acc + obj.price * obj.waterQuantity,
                      0
                    )}{" "}
                    ₴
                  </span>
                ) : (
                  "00.00 ₴"
                )}
              </p>
            </div>

            <div className="flex justify-between mb-4">
              <p>Знижка</p>
              <p>
                {cart.reduce(
                  (acc, obj) => acc + obj.discount * obj.waterQuantity,
                  0
                )}{" "}
                ₴
              </p>
            </div>

            <div className="flex justify-between mb-4">
              <p>Доставлення</p>
              <p>0 ₴</p>
            </div>

            <div className="flex justify-between mb-4 text-[20px] font-medium">
              <p>До сплати</p>
              <p className=" text-[#00AFF0]">
                {cart.reduce(
                  (acc, obj) => acc + obj.price * obj.waterQuantity,
                  0
                ) -
                  cart.reduce(
                    (acc, obj) => acc + obj.discount * obj.waterQuantity,
                    0
                  )}{" "}
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
