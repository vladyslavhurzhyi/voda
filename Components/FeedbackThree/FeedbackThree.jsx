import Image from "next/image";
import "./styles.css";

import client5 from "../../images/client5.png";
import client6 from "../../images/client6.png";

export const FeedbackThree = () => {
  return (
    <div className="lg:h-fit w-full">
      <div className="block mt-[100px] px-4 lg:flex h-fit lg:h-[500px] justify-center items-center gap-20">
        <div className="mt-[200px] lg:mt-0  flex justify-center items-center">
          <div className="imageClient">
            <Image
              src={client5}
              className="lg:w-[130px] lg:h-[130px]"
              width={110}
              height={110}
              alt="Our clients"
            />
          </div>
          <div className="clientName">
            <p className="name">Тетяна</p>
            <p className="description">
              Вода, яку я обираю, не лише за її чистоту, але і за користь для
              здоров&apos;я. Цей напій - моя щоденна доза енергії і
              здоров&apos;я. Доставка - завжди оперативна і надійна, що важливо
              для активної жінки.
            </p>
          </div>
        </div>
        <div className="mt-[50px] lg:mt-0 flex justify-center items-center">
          <div className="imageClient">
            <Image
              src={client6}
              className="lg:w-[130px] lg:h-[130px]"
              width={110}
              height={110}
              alt="Our clients"
            />
          </div>
          <div className="clientName">
            <p className="name">Тарас</p>
            <p className="description">
              Вибаглива вода для вибагливих гурманів. Смак, що вражає своєю
              гармонією. Доставка – завжди своєчасна, це якість на рівні вищого
              класу
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
