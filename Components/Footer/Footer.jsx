import Image from "next/image";
import "./styles.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-[#00AFF0] lg:relative mt-[60px] xl:[92px]">
      <div className="custom-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="max-w-[767px] xl:max-w-[1440px] h-[330px] my-0 mx-auto ">
        {/* A */}
        <div className="grid xl:flex h-[100%] items-center  my-auto md:flex-row flex-col justify-center lg:items-end lg:pb-[80px] px-[30px]">
          <div className="block mx-auto xl:mr-auto lg:mx-0 order-2 lg:order-1">
            <a>
              <Image
                className="w-[163x] h-[60px] lg:w-[163px] lg:h-[60px]"
                src={"/footer-logo.png"}
                alt="website logo"
                width={163}
                height={60}
              />
            </a>
          </div>
          <div className="flex order-1 lg:order-2 ">
            <ul className="block lg:flex xl:gap-[61px] items-center mb-[20px]">
              <Link href="#water-order">
                <li className="text-white font-semibold xl:leading-[24px] mb-[15px] xl:mb-[0px]">
                  Замовити доставку
                </li>
              </Link>
              <Link href="#actions">
                <li className="text-white font-semibold xl:leading-[24px] mb-[15px] xl:mb-[0px]">
                  Акції
                </li>
              </Link>
              <Link href="#smak">
                <li className="text-white font-semibold xl:leading-[24px] mb-[15px] xl:mb-[0px]">
                  Обрати воду
                </li>
              </Link>
              <Link href="#faq">
                <li className="text-white font-semibold xl:leading-[24px] mb-[15px] xl:mb-[0px]">
                  Часті запитання
                </li>
              </Link>
              <li className="text-white font-semibold xl:leading-[24px]">
                <a>Замовити дзвінок</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
