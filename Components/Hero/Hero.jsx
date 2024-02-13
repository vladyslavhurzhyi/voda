const Hero = () => {
  return (
    <>
      <div className=" h-screen bg-blue-300 w-full">
        <div className="flex-col  justify-center text-white text-center ">
          <p className=" uppercase  font-bold text-[80px] leading-[96px] tracking-[3px]">
            чиста питна <br /> вода для вас
          </p>
          <p className="text-white text-xl font-medium   leading-[30px]">
            Доставка здорової води в Одессі селище Котовського
          </p>
        </div>

        <div className="flex justify-center">
          <div className=" p-5 bg-white bg-opacity-80 rounded-tr-[14px] rounded-bl-[14px] rounded-br-[14px] justify-between items-center ">
            <button className=" w-[272px] pl-4 pr-2 flex-col">
              <div className=" justify-between items-end flex">Куди </div>

              <div className="self-stretch justify-between items-center mt-2">
                <div className="text-gray-600 text-base font-semibold  leading-normal tracking-tight">
                  Введіть адресу
                </div>
              </div>
            </button>
            <div className="h-[300px] mt-10">
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
