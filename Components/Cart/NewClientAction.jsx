import Image from "next/image";

export const NewClientAction = ({
  action,
  clickAction1,
  clickAction2,
  newClient,
}) => {
  return (
    <>
      {newClient && (
        <>
          <div className="pt-[24px]  max-w-[360px]  md:max-w-fit">
            <p className=" text-[#5A5F69] text-[14px]">
              Акції для нових клієнтів доступні для замовників, що замовляють
              воду вперше у нашій компаніі.
            </p>
          </div>

          <div className="pt-[24px] pb-8 relative">
            <div
              onClick={() => {
                clickAction1();
              }}
              className=" cursor-pointer  max-w-[360px] md:max-w-[859px] h-36 bg-sky-500 rounded-[14px] justify-start items-center gap-4 inline-flex"
            >
              <div className="flex items-center justify-center text-white min-w-[150px] h-full bg-[#005087] rounded-l-[14px]">
                <p className=" text-[12px] px-2 md:px-0 md:text-[14px] ">
                  {action === "action1" ? "Активована" : "Не активна"}
                </p>
              </div>

              <div className=" text-white mt-4 md:mt-0 md:ml-[40px] md:my-[28px]">
                <p className="text-[16px] md:text-[24px] uppercase font-semibold">
                  Перше знайомство
                </p>
                <p className="text-[12px] md:text-[16px]">
                  Купуйте два бутля води по ціні одного при першому замовленні.
                </p>
              </div>

              <div className=" relative hidden md:block">
                <Image
                  className="max-w-none"
                  alt="action1"
                  width={200}
                  height={150}
                  src="/newClientAction1.png"
                ></Image>
                <p className=" rotate-[30deg] z-10 right-0 top-2 uppercase font-semibold  absolute text-white text-[18px]">
                  акція
                </p>
              </div>
              <div
                className={` ${
                  action !== "action2" ? "hidden" : "flex"
                } rounded-[14px] absolute half-gray z-100 left-0 w-[360px] md:w-[100%] lg:max-w-[859px] h-36 `}
              ></div>
            </div>

            {/* /////action 2 */}

            <div
              onClick={() => {
                clickAction2();
              }}
              className="mt-4 cursor-pointer  max-w-[360px] md:max-w-[859px] h-36 bg-sky-500 rounded-[14px] justify-start items-center gap-4 inline-flex"
            >
              <div className="flex items-center justify-center text-white min-w-[150px] h-full bg-[#005087] rounded-l-[14px]">
                <p className=" text-[12px] px-2 md:px-0 md:text-[14px] ">
                  {action === "action2" ? "Активована" : "Не активна"}
                </p>
              </div>

              <div className=" text-white mt-4 md:mt-0 md:ml-[40px] md:my-[28px]">
                <p className="text-[16px] md:text-[24px] uppercase font-semibold">
                  новий клієнт
                </p>
                <p className="text-[12px] md:text-[16px]">
                  Замовляйте три полікарбонатних бутля з водою і отримайте
                  механічну помпу в подарунок. <br /> (якщо у вас є тара на
                  обмін)
                </p>
              </div>

              <div className="relative hidden md:block">
                <Image
                  className="max-w-none"
                  alt="action1"
                  width={186}
                  height={144}
                  src="/newClientAction2.png"
                ></Image>
                <p className=" rotate-[30deg] z-10 right-0 top-2 uppercase font-semibold  absolute text-white text-[18px]">
                  акція
                </p>
              </div>
              <div
                className={` ${
                  action !== "action1" ? "hidden" : "flex"
                } rounded-[14px] absolute half-gray z-100 left-0 w-[360px] md:w-[100%] lg:max-w-[859px] h-36 `}
              ></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
