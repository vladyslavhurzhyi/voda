import Image from "next/image";

export const NewClientActionOnlySecond = ({
  action,
  toggleAction,
  newClient,
}) => {
  return (
    <>
      {newClient && (
        <>
          <div
            onClick={() => {
              toggleAction();
            }}
            className="mt-4 mb-4 cursor-pointer  max-w-[360px] md:max-w-[859px] h-36 bg-sky-500 rounded-[14px] justify-start items-center gap-4 inline-flex"
          >
            <div className="flex items-center justify-center text-white w-[200px] h-full bg-[#005087] rounded-l-[14px]">
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
                механічну помпу в подарунок.
              </p>
            </div>

            <div className="relative hidden md:block">
              <Image
                alt="action2"
                width={295}
                height={144}
                src="/newClientAction2.png"
              ></Image>
              <p className=" rotate-[30deg] z-10 right-1 top-2.5 uppercase font-semibold  absolute text-white text-[16px]">
                акція
              </p>
            </div>
            <div
              className={` ${
                action !== "action1" ? "hidden" : "flex"
              } rounded-[14px] absolute half-gray z-100 w-[360px] md:w-[859px] h-36 `}
            ></div>
          </div>
        </>
      )}
    </>
  );
};
