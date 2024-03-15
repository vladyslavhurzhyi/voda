import Image from "next/image";
import "./styles.css";

import client1 from "../../images/client1.png";
import client2 from "../../images/client2.png";
import client3 from "../../images/client3.png";

export const FeedbackSecond = () => {

  return (
    <div className="containerForFeedback">
      <div className="custom-wave-top">
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

      <h2 className="titleFeedback">
        ВІДГУКИ НАШИХ <br /> КЛІЄНТІВ
      </h2>
      <div className="wrapperF">
        <div className="imageClient">

          <Image src={client1} width={130} height={130} alt="Our clients" />

        </div>
        <div className="clientName">
          <p className="name">Петро</p>
          <p className="description">
            Вода, яку хочеться пити щодня. Смак вражає, а доставка завжди
            оперативна та чітка.
          </p>
        </div>
        <div className="imageClient">
          <Image src={client4} width={130} height={130} alt="Our clients" />
        </div>
        <div className="clientName">
          <p className="name">Лариса</p>
          <p className="description">
            Здорова вода - не просто напій, а джерело сил і здоров'я. Її
            освіжаючий смак та корисні властивості зробили її моїм вибором для
            щоденного догляду за здоров'ям.
          </p>
        </div>
        <div className="imageClientLast">
          <Image src={client5} width={130} height={130} alt="Our clients" />
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1710516626">

        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};
