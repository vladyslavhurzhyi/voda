import Image from "next/image";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="m-w-[1440px] h-[330px] bg-[#00AFF0] relative">
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
        {/* A */}
        <div className="flex ml-[72px] mr-[72px] pt-[180px]">
          <div className="mr-auto">
            <a className="ml-[]">
              <Image
                src={"futer-logo.svg"}
                alt="website logo"
                width={163}
                height={60}
              />
            </a>
          </div>
          <div className="flex">
            <ul className="flex gap-[61px] items-center">
              <li className="text-white  font-semibold leading-[15px]">
                <a>Замовити доставку</a>
              </li>
              <li className="text-white font-semibold">
                <a>Акції</a>
              </li>
              <li className="text-white font-semibold">
                <a>Обрати воду</a>
              </li>
              <li className="text-white font-semibold">
                <a>Часті запитання</a>
              </li>
              <li className="text-white font-semibold">
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
