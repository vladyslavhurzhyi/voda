import Button from "../Button/Button";

const CartFinalPrice = () => {
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
              <p>8660$</p>
            </div>

            <div className="flex justify-between mb-4">
              <p>Знижка</p>
              <p>60$</p>
            </div>

            <div className="flex justify-between mb-4">
              <p>Доставлення</p>
              <p>0$</p>
            </div>

            <div className="flex justify-between mb-4 pb-[16px] border-[#B3CBDB] border-b-[1px]">
              <p>Тара</p>
              <p>360$</p>
            </div>

            <div className="flex justify-between mb-4">
              <p>До сплати</p>
              <p>9220 ₴</p>
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
