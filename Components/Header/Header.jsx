import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <>
        <header className="bg-[#00AFF0] ">
          <div className="max-w-[1440px] mx-auto h-[40px]  flex items-center">
            <div className=" flex  mr-auto items-center">
              <Link href={"#map"} className="flex  items-center">
                <Image
                  className=" mt-1 ml-[72px] mr-[8px]"
                  priority
                  src="map-pin.svg"
                  height={18}
                  width={22}
                  alt="icon map"
                />

                <p className="text-white text-sm font-medium  leading-[21px]">
                  Україна, місто Одеса, вул. Семена Палія, 72
                </p>
              </Link>
            </div>

            <div className="flex mr-[56px]">
              <div className="flex mr-[32px]">
                <a href={"tel:+380968836688"} className=" flex">
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
                  href="https://t.me/voda"
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

              <div className="flex mr-[32px] items-center">
                <a
                  href="https://t.me/voda"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:animate-pulse flex items-center"
                >
                  <Image
                    className="mr-[1.5px]"
                    priority
                    src="Icon-phone.svg"
                    height={24}
                    width={24}
                    alt="icon phone"
                  />

                  <p className="hover:animate-pulse text-white text-sm font-medium font-['Montserrat'] leading-[21px]">
                    +38 (096) 883 66 88
                  </p>
                </a>
              </div>

              <div className="flex items-center">
                <a
                  href="https://t.me/voda"
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
          </div>
        </header>
      </>
    </>
  );
};

export default Header;
