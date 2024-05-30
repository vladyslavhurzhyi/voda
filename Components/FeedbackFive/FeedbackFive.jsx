import Image from "next/image";
import "../FeedbackThree/styles.css";

import client9 from "../../images/client9.png";
import client10 from "../../images/client10.png";

export const FeedbackFive = () => {
  return (
    <div className="md:h-fit  w-full">
      <div className="block mt-[100px] px-4 pb-10 md:flex h-fit md:h-[500px] justify-center items-center gap-20">
        <div className="mt-40 md:mt-0 flex justify-center items-center">
          <div className="imageClient">
            <Image src={client9} width={130} height={130} alt="Our clients" />
          </div>
          <div className="clientName">
            <p className="name">Тетяна</p>
            <p className="description">
              Ця вода - справжнє джерело живлення для мого організму. Її
              неповторний смак дарує не тільки задоволення, а й користь для
              здоров&apos;я. Рекомендую для вибагливих.
            </p>
          </div>
        </div>
        <div className="mt-[50px] md:mt-0 flex justify-center items-center">
          <div className="imageClient">
            <Image src={client10} width={130} height={130} alt="Our clients" />
          </div>
          <div className="clientName">
            <p className="name">Тарас</p>
            <p className="description">
              Якість води - головний пріоритет. Чистота, свіжість і швидка
              доставка. Вражений обслуговуванням!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
