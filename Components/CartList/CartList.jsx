import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";

const CartList = ({ cart }) => {
  const deleteItem = useCartStore((state) => state.deleteItem);

  return (
    <>
      <div className="w-[859px]">
        <div className="  flex justify-between">
          <p className="ml-[30px]">Товар</p>

          <div className="flex">
            <p className="mr-[78.5px]">Кількість</p>
            <p className="mr-[118px]">Вартість</p>
          </div>
        </div>

        <div className=" border-t-[1px] mt-[20px]"></div>

        {cart.map((item, index) => {
          return (
            <div key={index}>
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

                  <div className="mr-[118px] ml-[40px]">
                    <p className=" text-[#5A5F69]  text-[20px]">
                      Здорова вода {item.waterVolume}
                    </p>
                    <p className=" text-greenMain">
                      {item.waterType === "normalWater"
                        ? "Очищена"
                        : "Мінералізована"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mr-[118px]">
                  <div className="mr-[115px]">
                    <p className=" text-[20px]  text-[#5A5F69]">
                      {item.waterQuantity}
                    </p>
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
                    <p className={"text-[#00AFF0] text-[24px]"}>
                      {item.price} ₴
                    </p>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        deleteItem(item);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartList;
