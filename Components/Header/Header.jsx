"use client";
import { useCartStore } from "@/app/zustand/cartState/cartState";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const toggleMob = useCartStore((state) => state.toggleShowMob);
  const showMobMenu = useCartStore((state) => state.showMob);
  const cart = useCartStore((state) => state.waterItems);
  const otherProducts = useCartStore((state) => state.otherProducts);
  const toggleShowMob = useCartStore((state) => state.toggleShowMob);

  const cartAllQuantity = cart.reduce((acc, obj) => acc + obj.waterQuantity, 0);
  const otherProductsAllQuantity = otherProducts.reduce(
    (acc, obj) => acc + obj.quantity,
    0
  );

  return (
    <>
      <>
        <header className="bg-[#00AFF0] fixed w-full z-50">
          <div className="bg-[#00AFF0] w-full fixed top-0 left-0 px-2 md:px-6 md:mx-0 justify-between  lg:mx-auto h-[40px]  flex items-center">
            <div className="hidden lg:flex  mr-auto items-center ">
              <Link href={"/#map"} className="flex items-center">
                <Image
                  className=" mt-1 ml-[72px] mr-[8px]"
                  priority
                  src="map-pin.svg"
                  height={18}
                  width={22}
                  alt="icon map"
                />

                <p className="text-white text-sm font-medium  leading-[21px] ">
                  Україна, місто Одеса, вул. Семена Палія, 72
                </p>
              </Link>
            </div>

            <div className="flex  md:w-full lg:mr-[56px]  justify-between md:justify-normal lg:justify-end md:ml-auto lg:ml-0 ">
              <div className="hidden md:flex  md:mr-[32px]">
                <a
                  target="_blank"
                  href={"https://viber://chat?number=%2B380968836688"}
                  className=" flex"
                >
                  <Image
                    className="hover:animate-pulse mr-[8px]"
                    priority
                    src="icon-whatsapp.svg"
                    height={32}
                    width={22}
                    alt="icon whatsapp"
                  />
                </a>

                <a
                  href="https://t.me/zdorova_voda_aquatica"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:animate-pulse flex"
                >
                  <Image
                    className=" "
                    priority
                    src="icon-telegram.svg"
                    height={32}
                    width={22}
                    alt="icon tg"
                  />
                </a>
              </div>

              <a
                href="tel:+38(096)8836688"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:animate-pulse flex items-center"
              >
                <div className="flex justify-center ">
                  <Image
                    className="mr-[1.5px]"
                    priority
                    src="Icon-phone.svg"
                    height={24}
                    width={24}
                    alt="icon phone"
                  />

                  <div className=" flex md:flex flex-col   md:mr-[32px] items-center">
                    <p className=" text-white text-sm font-medium font-['Montserrat'] leading-[21px]">
                      Шоурум &quot;Акватiка&quot;
                    </p>

                    <p className=" text-white text-sm font-medium font-['Montserrat'] leading-[21px]">
                      +38 (096) 883 66 88
                    </p>
                  </div>
                </div>
              </a>

              <div className="hidden md:flex items-center ">
                <a
                  href="mailto:zdorovavodaodesa@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" flex items-center"
                >
                  <Image
                    className="mr-[1.5px]"
                    priority
                    src="Icon-gmail.svg"
                    height={24}
                    width={24}
                    alt="icon gmail"
                  />

                  <p className="hover:animate-pulse text-white text-sm font-medium font-['Montserrat'] leading-[21px]">
                    zdorovavodaodesa@gmail.com
                  </p>
                </a>
              </div>
            </div>
            <div className="lg:hidden  md:mr-4 xl:mr-20">
              <Link
                href={"/"}
                onClick={() => {
                  toggleShowMob();
                }}
              >
                <Image
                  className="flex"
                  priority
                  src="/footer-logo.png"
                  height={30}
                  width={80}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex gap-10 lg:hidden md:mr-4">
              <Link
                className="flex hover:animate-pulse transition-all duration-300"
                href={"/cart"}
              >
                <button className="relative ">
                  <Image
                    className=""
                    priority
                    src="basket.svg"
                    width={46}
                    height={36}
                    alt="logo"
                  />
                  <p
                    className={`    ${
                      cartAllQuantity + otherProductsAllQuantity >= 20
                        ? "text-[12px]"
                        : "text-[13px]"
                    }  absolute w-4 h-4  text-orange-400 font-semibold right-[10%] top-[0%] md:top-[0%] md:right-[10%] `}
                  >
                    {cartAllQuantity + otherProductsAllQuantity}
                  </p>
                </button>
              </Link>
            </div>
            {/* menu btn */}
            <div className="lg:hidden ">
              <button
                onClick={() => {
                  const bodyRef = document.querySelector("body");
                  toggleMob();
                  bodyRef.classList.toggle("no-scroll");
                }}
                className="relative block mx-auto w-6 h-6 cursor-pointer select-none"
              >
                <span
                  className={`block bg-white w-6 h-1 rounded-full mb-1 transition-transform ${
                    showMobMenu ? "transform rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block bg-white w-6 h-1 rounded-full mb-1 transition-opacity ${
                    showMobMenu ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block bg-white w-6 h-1 rounded-full transition-transform ${
                    showMobMenu ? "transform -rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </header>
      </>
    </>
  );
};

export default Header;
