import CartFinalPrice from "@/Components/CartFinalPrice/CartFinalPrice";
import CartList from "@/Components/CartList/CartList";

export default function cart() {
  return (
    <>
      <div className="ml-[72px] mr-[72px] h-screen">
        <h2 className=" font-bold text-[60px] text-[#F5821E] my-[60px] text-center">
          Кошик
        </h2>
        <div className="flex justify-between">
          <CartList />
          <CartFinalPrice />
        </div>
      </div>
    </>
  );
}
