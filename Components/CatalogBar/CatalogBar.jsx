import Image from "next/image";
import Link from "next/link";

const CatalogBar = ({ show, catalogBarRef }) => {
  return (
    <>
      {show && (
        <div
          ref={catalogBarRef}
          className={`${
            show
              ? " absolute bg-white w-full opacity-1 flex"
              : "hidden opacity-0"
          } justify-center  transition-opacity duration-500 ease-in-out border-t-2`}
        >
          <ul className="flex">
            <Link href="/" className="flex">
              <li className="w-[185px] h-[120px]  flex ">
                <button className="mx-auto">
                  <Image
                    className="mb-[8px]"
                    priority
                    src="0icon.svg"
                    width={48}
                    height={48}
                    alt="logo"
                  />
                  Вода
                </button>
              </li>
            </Link>
            <li className="w-[185px] h-[120px]  flex ">
              <button className="mx-auto">
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
                <Link href="/">Бутлі та аксесуари</Link>
              </button>
            </li>

            <li className="w-[185px] h-[120px]  flex ">
              <button className="mx-auto">
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
                <Link href="/">Помпи</Link>
              </button>
            </li>

            <li className="w-[185px] h-[120px]  flex ">
              <button className="mx-auto">
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
                <Link href="/">Диспенсери</Link>
              </button>
            </li>

            <li className="w-[185px] h-[120px]  flex ">
              <button className="mx-auto">
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
                <Link href="/">Кулери</Link>
              </button>
            </li>

            <li className="w-[185px] h-[120px]  flex ">
              <button className="mx-auto">
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
                <Link href="/">Підставки</Link>
              </button>
            </li>

            <li className="w-[185px] h-[120px]  flex ">
              <button className="mx-auto">
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
                <Link href="/">Чохли</Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default CatalogBar;
