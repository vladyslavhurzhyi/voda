import Image from "next/image";
import Link from "next/link";

const CatalogBar = ({
  show,
  closeCatalogShow,
  catalogBarRef,
  onMouseLeaveHandler,
}) => {
  return (
    <>
      {
        <div
          ref={catalogBarRef}
          className={`  justify-center lg:border-t-2  transition-opacity duration-500 ease-in-out   bg-white  
            
          ${show ? "opacity-100" : "opacity-0 hidden"}
          
          `}
        >
          <ul className="min-w-[360px] mx-auto max-w-[400px] md:max-w-[580px] lg:max-w-[1440px] flex flex-wrap justify-center  gap-1">
            <li className=" w-[120px] lg:w-[185px]  hover:scale-110 transition-all duration-300  h-[120px]  flex ">
              <button className="mx-auto" onClick={closeCatalogShow}>
                <Link href="/water" className="block">
                  {" "}
                  <div className="flex justify-center">
                    <Image
                      className="mb-[8px]"
                      priority
                      src="0icon.svg"
                      width={48}
                      height={48}
                      alt="logo"
                    />
                  </div>
                  Вода
                </Link>
              </button>
            </li>

            <li className=" w-[120px] lg:w-[185px]  hover:scale-110 transition-all duration-300  h-[120px]  flex ">
              <button className="mx-auto" onClick={closeCatalogShow}>
                <Link href="/bottles" className="block">
                  <div className="flex justify-center">
                    <Image
                      className="mb-[8px]"
                      priority
                      src="1icon.svg"
                      width={48}
                      height={48}
                      alt="logo"
                    />
                  </div>
                  Бутлі та аксесуари
                </Link>
              </button>
            </li>

            <li className="  w-[120px] lg:w-[185px] hover:scale-110 transition-all duration-300  h-[120px]  flex ">
              <button className="mx-auto" onClick={closeCatalogShow}>
                <Link href="/pumps" className="block">
                  <div className="flex justify-center">
                    <Image
                      className="mb-[8px]"
                      priority
                      src="pomp.svg"
                      width={48}
                      height={48}
                      alt="logo"
                    />
                  </div>
                  Помпи
                </Link>
              </button>
            </li>

            <li className=" w-[120px] lg:w-[185px]  hover:scale-110 transition-all duration-300  h-[120px]  flex ">
              <button className="mx-auto" onClick={closeCatalogShow}>
                <Link href="/dispensers" className="block">
                  <div className="flex justify-center">
                    <Image
                      className="mb-[8px]"
                      priority
                      src="dispencLogo.svg"
                      width={48}
                      height={48}
                      alt="logo"
                    />
                  </div>
                  Диспенсери
                </Link>
              </button>
            </li>

            <li className=" w-[120px] lg:w-[185px]  hover:scale-110 transition-all duration-300  h-[120px]  flex ">
              <button className="mx-auto" onClick={closeCatalogShow}>
                <Link href="/water-coolers" className="block">
                  <div className="flex justify-center">
                    <Image
                      className="mb-[8px]"
                      priority
                      src="culler.svg"
                      width={48}
                      height={48}
                      alt="logo"
                    />
                  </div>
                  Кулери
                </Link>
              </button>
            </li>

            <li className=" w-[120px] lg:w-[185px]  hover:scale-110 transition-all duration-300  h-[120px]  flex ">
              <button className="mx-auto" onClick={closeCatalogShow}>
                <Link href="/bottle-stand" className="block">
                  <div className="flex justify-center">
                    <Image
                      className="mb-[8px]"
                      priority
                      src="stand.svg"
                      width={48}
                      height={27}
                      alt="logo"
                    />
                  </div>
                  Підставки
                </Link>
              </button>
            </li>

            <li className=" w-[120px] lg:w-[185px]  hover:scale-110 transition-all duration-300  h-[120px]  flex ">
              <button className="mx-auto" onClick={closeCatalogShow}>
                <Link href="/bottle-cover" className="block">
                  <div className="flex justify-center">
                    <Image
                      className="mb-[8px]"
                      priority
                      src="case.svg"
                      width={27}
                      height={42}
                      alt="logo"
                    />
                  </div>
                  Чохли
                </Link>
              </button>
            </li>
          </ul>
        </div>
      }
    </>
  );
};

export default CatalogBar;
