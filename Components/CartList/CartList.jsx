import Image from "next/image";

const CartList = ({ cart }) => {
  console.log("cart", cart);
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

        {cart.map((item) => {
          return (
            <>
              <div className=" flex  mb-10 border-b-[1px] justify-between py-10  items-center">
                <div className="flex items-center">
                  <div className="">
                    <Image
                      src={"/water.png"}
                      alt="water"
                      width={108}
                      height={144}
                    ></Image>
                  </div>

                  <div className="mr-[118px] ">
                    <p>Здорова вода {item.waterVolume}</p>
                    <p>
                      {item.waterType === "normalWater"
                        ? "Очищена"
                        : "Мінералізована"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mr-[118px]">
                  <div className="mr-[40px]">
                    <p>{item.waterQuantity}</p>
                    {/* <div className="inline-flex gap-2 ">
                    <button
                      type="button"
                      onClick={() => {
                        addWater("-");
                      }}
                    >
                      {" "}
                      <Image
                        className=""
                        priority
                        src="minus-circle-cart.svg"
                        width={24}
                        height={24}
                        alt="logo"
                      />
                    </button>
                    <p>{1}</p>
                    <button
                      type="button"
                      onClick={() => {
                        addWater("+");
                      }}
                    >
                      {" "}
                      <Image
                        className=""
                        priority
                        src="plus-circle-green.svg"
                        width={24}
                        height={24}
                        alt="logo"
                      />
                    </button>
                  </div> */}
                  </div>

                  <div className="">
                    <p
                      className={`${
                        1 !== 0 ? " text-black font-semibold" : "text-gray-200"
                      }  text-[24px]`}
                    >
                      {item.price} ₴
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CartList;
