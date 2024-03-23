import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";

const CartList = ({ cart }) => {
  const deleteItem = useCartStore((state) => state.deleteItem);
  const decrement = useCartStore((state) => state.decrement);
  const increment = useCartStore((state) => state.increment);

  return (
    <>
      <div className="w-[859px]">
        <div className="  flex ">
          <p className="ml-[30px] mr-auto">Товар</p>

          <div className="flex">
            <p className="mr-[88.5px]">Кількість</p>
            <p className="mr-[140px]">Вартість</p>
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
                      Здорова вода {item.waterVolume}л
                    </p>
                    <p className=" text-greenMain">
                      {item.waterType === "normalWater"
                        ? "Очищена"
                        : "Мінералізована"}
                    </p>
                  </div>
                </div>

                <div className="flex  items-center">
                  <div className="mr-[115px]">
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
                  className="mr-[30px]"
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
