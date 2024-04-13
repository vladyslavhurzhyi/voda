import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";

const CartList = ({ cart }) => {
  const deleteItem = useCartStore((state) => state.deleteItem);
  const decrement = useCartStore((state) => state.decrement);
  const increment = useCartStore((state) => state.increment);

  return (
    <>
      <div className="w-[360px] lg:w-[859px]">
        <div className=" flex ">
          <p className="md:ml-[30px] mr-auto">Товар</p>

          <div className="flex">
            <p className="hidden md:block md:mr-[88.5px]">Кількість</p>
            <p className=" md:mr-[140px]">Вартість</p>
          </div>
        </div>

        <div className=" border-t-[1px] mt-[20px]"></div>

        {cart.map((item, index) => {
          return (
            <div key={index}>
              <div className=" flex flex-col md:flex-row  mb-10 border-b-[1px] md:justify-between py-10  md:items-center">
                <div className="flex  md:items-center">
                  <div className="w-[70px] h-[80px] md:w-[108px] md:h-[134px]">
                    <Image
                      src={"/water.png"}
                      alt="water"
                      width={108}
                      height={134}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    ></Image>
                  </div>

                  <div className=" md:mr-[118px] ml-[auto] md:ml-[40px]">
                    <p className=" text-[#5A5F69] text-[14px]  md:text-[20px]">
                      Здорова вода {item.waterVolume}л
                    </p>
                    <p className=" text-greenMain text-[14px]  md:text-[20px] text-end md:text-start">
                      {item.waterType === "normalWater"
                        ? "Очищена"
                        : "Мінералізована"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-[20px] md:mt-0">
                  <div className=" mr-[auto] md:mr-[115px]">
                    <div className="inline-flex gap-2 ">
                      <button
                        disabled={item.waterQuantity === 0}
                        type="button"
                        onClick={() => {
                          decrement(index);
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
                      <p className=" text-[20px]  text-[#5A5F69]">
                        {item.waterQuantity}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          increment(index);
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
                    </div>
                  </div>

                  <div className="">
                    <p className={"text-[#00AFF0] text-[24px]"}>
                      {item.price * item.waterQuantity}₴
                    </p>
                  </div>
                </div>
                <button
                  className="hidden md:flex mr-[30px]"
                  type="button"
                  onClick={() => {
                    deleteItem(item);
                  }}
                >
                  <Image
                    src={"/delete.svg"}
                    alt="delete-icon"
                    width={24}
                    height={24}
                  ></Image>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartList;
