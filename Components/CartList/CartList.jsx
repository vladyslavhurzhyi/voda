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
  console.log("otherProducts", otherProducts);
  console.log("cart", cart);
  return (
    <>
      <div className="w-[360px] lg:w-[859px]">
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
              <div className=" flex  flex-col md:flex-row  mb-10 border-b-[1px] md:justify-between py-10  md:items-center">
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

                  <div className="mr-auto md:mr-[118px] md:ml-[40px]">
                    <p className=" text-[#5A5F69] text-[14px]  md:text-[20px]">
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

                <div className="md:flex  justify-end items-center md:min-w-[300px]">
                  <div className="flex justify-end  items-center mt-[20px] md:mt-0">
                    <div className=" mr-[auto] md:mr-[100px] ">
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
                  <div className="w-[70px] h-[80px] md:w-[108px] md:h-[134px]">
                    <Image
                      src={item.image}
                      alt={item.image}
                      width={108}
                      height={134}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    ></Image>
                  </div>

                  <div className="mr-auto md:mr-[118px] md:ml-[40px]">
                    <p className=" text-[#5A5F69] text-[14px]  md:text-[20px]">
                      {item.name}
                    </p>
                    <p className=" text-greenMain text-[14px]  md:text-[20px] text-end md:text-start">
                      {item.description}
                    </p>
                  </div>

                  <button
                    className="flex md:hidden "
                    type="button"
                    onClick={() => {
                      deleteProductFromCart(item);
                      item;
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

                <div className="md:flex  justify-end items-center md:min-w-[300px]">
                  <div className="flex justify-end  items-center mt-[20px] md:mt-0">
                    <div className=" mr-[auto] md:mr-[100px] ">
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
        <div className=" rounded-xl">
          <div>
            <p className="hidden md:flex ml-4 text-[12px] mt-4">
              Вам потрібна тара?
              <br />
              Якщо у вас немає тари на обмін, додайте потрібну кількість
            </p>
            <div className=" flex flex-col md:flex-row  mb-10 border-b-[1px]  py-10   md:items-center   justify-between">
              <div className="flex  md:items-center">
                <div className="w-[90px] h-[60px] md:w-[108px] md:h-[78px]">
                  <Image
                    src={"/tara.png"}
                    alt="tara"
                    width={108}
                    height={78}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  ></Image>
                </div>

                <div className="md:ml-[40px]">
                  <p className=" text-[#5A5F69] text-[14px]  md:text-[20px]">
                    Тара
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-[20px] md:mt-0  md:min-w-[270px]">
                <div className=" mr-[auto] md:mr-[100px]">
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

                <div className="min-w-[60px] text-end ">
                  <p className={"text-[#00AFF0] text-[24px]"}>
                    {taraQuantity * 350} ₴
                  </p>
                </div>
              </div>

              <p className="md:hidden text-[12px] mt-4">
                Вам потрібна тара?
                <br />
                Якщо у вас немає тари на обмін, додайте потрібну кількість
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
