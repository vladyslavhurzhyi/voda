import Image from "next/image";
import "./styles.css";

import client3 from "../../images/client3.png";
import client4 from "../../images/client4.png";
import client5 from "../../images/client5.png";

export const FeedbackThree = () => {
  return (
    <div className="  h-[500px] md:h-fit  w-full">
      <div className="block px-4 pb-10 md:flex h-fit md:h-[800px] justify-center items-center gap-20">
        <div className="mt-40 md:mt-0 flex justify-center items-center">
          <div className="imageClient">
            <Image src={client5} width={130} height={130} alt="Our clients" />
          </div>
          <div className="clientName">
            <p className="name">Оксана</p>
            <p className="description">
              Привіт! Хочу поділитися враженнями про воду, яку я використовую
              для щоденного догляду за здоров&apos;ям. Її освіжаючий смак та
              корисні властивості зробили її моїм незамінним вибором. Це джерело
              сил і здоров&apos;я, яке я рекомендую спробувати!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
