import Image from "next/image";
import "../FeedbackThree/styles.css";

import client7 from "../../images/client7.png";
import client8 from "../../images/client8.png";

export const FeedbackFour = () => {
  return (
    <div className="md:h-fit  w-full">
      <div className="block mt-[100px] px-4 pb-10 md:flex h-fit md:h-[500px] justify-center items-center gap-20">
        <div className="mt-[160px] md:mt-0 flex justify-center items-center">
          <div className="imageClient">
            <Image
              src={client7}
              className="lg:w-[130px] lg:h-[130px]"
              width={110}
              height={110}
              alt="Our clients"
            />
          </div>
          <div className="clientName">
            <p className="name">Катерина</p>
            <p className="description">
              Найкращий вибір для тих, хто дбає про своє здоров&apos;я. Вода не
              лише освіжає, але і насичує організм корисними елементами. Це не
              просто вода, а бальзам для здоров&apos;я. Також люблю ваш сервіс.
            </p>
          </div>
        </div>
        <div className="mt-[50px] md:mt-0 flex justify-center items-center">
          <div className="imageClient">
            <Image
              src={client8}
              className="lg:w-[130px] lg:h-[130px]"
              width={110}
              height={110}
              alt="Our clients"
            />
          </div>
          <div className="clientName">
            <p className="name">Ігор</p>
            <p className="description">
              Воду замовляю регулярно, смак - ідеальний. Доставка точна,
              обслуговування відмінне!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
