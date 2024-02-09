import Image from "next/image";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <>
      <nav className="max-w-[1440px] mx-auto h-[120px] bg-white">
        <div className="flex  ml-[72px] justify-between my-[28px] ">
          <ul className="mr-[85px] flex gap-[32px] text-sky-800 text-base font-medium  leading-normal">
            <li>
              <a href="#1">Каталог</a>
            </li>
            <li>
              <a href="#1">Акції</a>
            </li>
            <li>
              <a href="#1">Про нашу воду</a>
            </li>
            <li>
              <a href="#1">Відгуки</a>
            </li>
            <li>
              <a href="#1">Контакти</a>
            </li>
          </ul>

          <Image
            className="mr-[133px]"
            priority
            src="logo.svg"
            height={40}
            width={110}
            alt="logo"
          />

          <Button
            text={"Замовити"}
            className="px-[57.5px] py-[8px] mr-[64.5px]"
          />

          <button className="mr-[72px]">
            <Image
              className=""
              priority
              src="basket.svg"
              width={46}
              height={36}
              alt="logo"
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
