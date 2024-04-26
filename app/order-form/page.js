import CartFinalPrice from "@/Components/CartFinalPrice/CartFinalPrice";
import { FormForOder } from "@/Components/FormForOder/FormForOder";

export default function orderForm() {
  return (
    <>
      <>
        <div className="mx-auto md:px-12 pt-12 md:mt-20  md:ml-[72px] md:mr-[72px] lg:mx-auto max-w-[360px] md:max-w-[1440px] ">
          <div className="">
            <h2 className=" uppercase font-bold text-[30px] md:text-[60px] text-[#F5821E] mb-[30px] md:mb-[60px] text-center">
              оформлення
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <FormForOder />
            <CartFinalPrice orderForm={true} />
          </div>
        </div>
      </>
    </>
  );
}
