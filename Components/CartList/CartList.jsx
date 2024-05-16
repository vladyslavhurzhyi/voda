"use client";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";
import PumpMechanic from "./PumpMechanic";
import { allQuantityWater19l } from "@/app/utils/reduceCalc";

const CartList = ({ cart, otherProducts, action }) => {
  
  const deleteItem = useCartStore((state) => state.deleteItem);
  const deleteProductFromCart = useCartStore((state) => state.deleteProduct);
  const incrementProduct = useCartStore((state) => state.incrementProduct);
  const decrementProduct = useCartStore((state) => state.decrementProduct);

  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  const incrementTaraB = useCartStore((state) => state.incrementTara);
  const decrementTaraB = useCartStore((state) => state.decrementTara);
  const taraQuantity = useCartStore((state) => state.tara);

  return (
    <>
      <div className="w-[360px] md:w-[650px] lg:w-[859px]">
        <div className=" flex ">
          <p className="md:ml-[30px] mr-auto">Товар</p>

          <div className="flex">
            <p className="hidden md:block md:mr-[88.5px]">Кількість</p>
            <p className=" md:mr-[50px]">Вартість</p>
          </div>
        </div>

        <div className=" border-t-[1px] mt-[20px]"></div>

        {cart.map((item, index) => {
          return (
            <div key={index}>
              <div className=" flex  flex-col md:flex-row  mb-10 border-b-[1px] md:justify-between  py-10  md:items-center">
                <div className="flex  md:items-center">
                  <div className="w-[200px] flex justify-center items-center">
                    <Image
                      src={"/water.png"}
                      alt="water"
                      width={item.width ? item.width : 108}
                      height={item.height ? item.height : 134}
                    ></Image>
                  </div>

                  <div className="mr-auto lg:mr-[118px] lg:ml-[40px]">
                    <p className=" text-[#5A5F69] text-[14px]  md:text-[20px] text-end md:text-start">
                      Здорова вода {item.waterVolume}л
                    </p>
                    <p className=" text-greenMain text-[14px]  md:text-[20px] text-end md:text-start">
                      {item.waterType === "normalWater"
                        ? "Очищена"
                        : "Мінералізована"}
                    </p>
                  </div>

                  <button
                    className="flex md:hidden "
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

                <div className="mx-auto md:mx-0  md:flex  justify-end items-center md:min-w-[300px]">
                  <div className=" flex gap-20 md:gap-0 justify-end  items-center mt-[20px] md:mt-0">
                    <div className=" mr-[auto] md:mr-[100px] ">
                      <div className="inline-flex gap-2 ">
                        <button
                          disabled={
                            item.waterQuantity === 0 ||
                            (item.waterVolume < 19 && item.waterQuantity === 2)
                          }
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

                    <div className="min-w-[60px]">
                      <p className={"text-[#00AFF0] text-[24px]"}>
                        {item.price * item.waterQuantity}₴
                      </p>
                    </div>
                  </div>
                  <button
                    className="hidden md:flex ml-4"
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
            </div>
          );
        })}

        {/* //////otherProd */}
        {otherProducts?.map((item, index) => {
          return (
            <div key={index}>
              <div className=" flex  flex-col md:flex-row  mb-10 border-b-[1px] md:justify-between py-10  md:items-center">
                <div className="flex  md:items-center">
                  <div className="min-w-[200px] max-w-[200px] overflow-hidden flex justify-center items-center ">
                    <Image
                      src={item.image}
                      alt={item.image}
                      width={item.width ? item.width : 108}
                      height={item.height ? item.height : 134}
                    ></Image>
                  </div>

                  <div className="mr-auto md:mr-[118px] md:ml-[40px]">
                    <p className=" text-[#5A5F69] text-[14px]  md:text-[20px] text-end md:text-start">
                      {item.name}
                    </p>
                    <p className=" text-greenMain text-[14px]  md:text-[20px] text-end md:text-start">
                      {item.description}
                    </p>
                  </div>

                  <button
                    className="flex md:hidden  min-w-[24px] ml-2"
                    type="button"
                    onClick={() => {
                      deleteProductFromCart(item);
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

                <div className="mx-auto md:mx-0  md:flex  justify-end items-center md:min-w-[300px]">
                  <div className="flex gap-20 md:gap-0 justify-end  items-center mt-[20px] md:mt-0">
                    <div className="mr-[auto] md:mr-[100px] ">
                      <div className="inline-flex gap-2 ">
                        <button
                          disabled={item.quantity === 0}
                          type="button"
                          onClick={() => {
                            decrementProduct(index);
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
                          {item.quantity}
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            incrementProduct(index);
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

                    <div className="min-w-[60px]">
                      <p className={"text-[#00AFF0] text-[24px]"}>
                        {item.price * item.quantity}₴
                      </p>
                    </div>
                  </div>
                  <button
                    className="hidden md:flex ml-4"
                    type="button"
                    onClick={() => {
                      deleteProductFromCart(item);
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
            </div>
          );
        })}

        {/* /////// action*/}

        {action === "action2" && allQuantityWater19l(cart) >= 3 && (
          <PumpMechanic />
        )}

        {/* /////tara */}

        <div>
          <div className=" flex  flex-col md:flex-row  mb-10 border-b-[1px] md:justify-between py-10  md:items-center">
            <div className="flex  md:items-center">
              <div className="min-w-[183px] max-w-[183px] md:min-w-[200px] overflow-hidden flex justify-center items-center ">
                <Image
                  src={"/tara.png"}
                  alt={"/tara.png"}
                  width={108}
                  height={134}
                ></Image>
              </div>

              <div className=" mr-4 max-w-[150px] md:max-w-fit ml-auto lg:mr-[118px] lg:ml-[40px] ">
                <p className="text-[#5A5F69] text-[14px]  md:text-[20px] text-end md:text-start">
                  Вам потрібна тара?
                </p>
                <p className=" text-greenMain text-[12px]  md:text-[14px] text-end md:text-start ">
                  Якщо у вас немає тари на обмін, додайте потрібну кількість
                </p>
              </div>
            </div>

            <div className="mx-auto md:mx-0  md:flex  justify-end items-center md:min-w-[300px]">
              <div className="flex  gap-20 md:gap-0 justify-end  items-center mt-[20px] md:mt-0  ">
                <div className="mr-[auto] md:mr-[100px] ">
                  <div className="inline-flex gap-2 ">
                    <button
                      disabled={taraQuantity === 0}
                      type="button"
                      onClick={() => {
                        decrementTaraB();
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
                      {taraQuantity}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        incrementTaraB();
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

                <div className="min-w-[60px]">
                  <p className={"text-[#00AFF0] text-[24px]"}>
                    {taraQuantity * 350} ₴
                  </p>
                </div>
              </div>
              <button className=" opacity-0 hidden md:flex ml-4">
                <Image
                  src={"/delete.svg"}
                  alt="delete-icon"
                  width={24}
                  height={24}
                ></Image>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
