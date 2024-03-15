import Image from "next/image";
import "./styles.css";
import client1 from "../../images/client1.png";
import client2 from "../../images/client2.png";
import client3 from "../../images/client3.png";

export default function FeedbackOne() {
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
          <p className="name">Григорій</p>
          <p className="description">
            Вода хороша і смачна, дуже добре вгамовує спрагу. П’ємо як сиру так
            і готуємо на ній їжу, сміливо даємо дітям. Гарний сервіс доставки:
            завжди швидко, зручно, приємний персонал. Сподобалась помпа та
            класний чохол на пляшку. Ми з вами надовго)))))))))))
          </p>
        </div>
        <div className="imageClient">
          <Image src={client2} width={130} height={130} alt="Our clients" />
        </div>
        <div className="clientName">
          <p className="name">Анастасія</p>
          <p className="description">
            Саме такий сервіс я і шукала! Дуже легко та швидко робити
            замовлення, з доставкою все завжди на висоті. Окреме дякую що
            прийняли на обмін тару від попереднього постачальника. Ну і водичка
            - клас!
          </p>
        </div>
        <div className="imageClientLast">
          <Image src={client3} width={130} height={130} alt="Our clients" />
        </div>
      </div>
      <div className="custom-wave-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill bottom-wave"
          ></path>
        </svg>
      </div>
    </div>
  );
}
