import Image from "next/image";

const PumpMechanic = () => {
  return (
    <>
      <div>
        <div className=" flex md:pr-10 flex-col md:flex-row  mb-10  border-b-[1px] md:justify-between py-10  md:items-center">
          <div className="flex mr-auto  md:items-center">
            <div className="w-[70px] h-[80px] md:w-[108px] md:h-[134px]">
              <Image
                src={"/pumpMechanic.png"}
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
                Механічна помпа у подарунок
              </p>
            </div>
          </div>

          <div className="flex  items-center mt-[20px] md:mt-0">
            <div className=" mr-[auto] md:mr-[100px]"></div>

            <div className="min-w-[60px] ">
              <p className={"text-[#00AFF0] text-[24px]"}>00.00₴</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PumpMechanic;
