const CartList = ({ cart }) => {
  return (
    <>
      <div className="min-w-[859px]">
        <div className="  flex justify-between">
          <p>Товар</p>

          <div className="flex">
            <p className="mr-[78.5px]">Кількість</p>
            <p className="mr-[118px]">Вартість</p>
          </div>
        </div>

        <div className=" border-t-[1px] mt-[20px]"></div>
      </div>
    </>
  );
};

export default CartList;
