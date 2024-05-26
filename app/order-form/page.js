import CartFinalPrice from "@/Components/CartFinalPrice/CartFinalPrice";
import { FormForOder } from "@/Components/FormForOder/FormForOder";

export default function orderForm() {
  return (
    <>
      <>
        <div className="mx-auto xl:px-12 pt-20 lg:mt-20  lg:ml-[72px] lg:mr-[72px] lg:mx-auto max-w-[360px] md:max-w-[1440px] ">
          <div className="">
            <h2 className=" uppercase font-bold text-[30px]  md:text-[50px] lg:text-[60px] text-[#F5821E] lg:mb-[60px] text-center">
              оформлення
            </h2>
          </div>
          <div className="mx-auto md:mt-6 md:flex md:flex-col xl:flex-row  xl:mx-auto max-w-[360px] md:max-w-[1440px]  gap-4">
            <FormForOder />
            <CartFinalPrice orderForm={true} />
          </div>
        </div>
      </>
    </>
  );
}
