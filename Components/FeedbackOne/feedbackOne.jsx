import Image from "next/image";
import "./styles.css";
import client1 from "../../images/client1.jpg";
import client2 from "../../images/client2.jpg";
import client3 from "../../images/client3.jpg";

export default function FeedbackOne() {
  return (
    <div className="containerForFeedback">
      <h1 className="titleFeedback">ВІДГУКИ НАШИХ КЛІЄНТІВ</h1>
      <div className="wrapper">
        <div className="imageClient">
          <Image src={client1} width={130} height={130} alt="Our clients" />
        </div>
        <div className="clientName">
          <p>Григорій</p>
          <p>
            Вода хороша і смачна, дуже добре вгамовує спрагу. П’ємо як сиру так
            і готуємо на ній їжу, сміливо даємо дітям. Гарний сервіс доставки:
            завжди швидко, зручно, приємний персонал. Сподобалась помпа та
            класний чохол на пляшку. Ми з вами надовго)
          </p>
        </div>
        <div className="imageClient">
          <Image src={client2} width={130} height={130} alt="Our clients" />
        </div>
        <div className="clientName">
          <p>Анастасія</p>
          <p>
            Саме такий сервіс я і шукала! Дуже легко та швидко робити
            замовлення, з доставкою все завжди на висоті. Окреме дякую що
            прийняли на обмін тару від попереднього постачальника. Ну і водичка
            - клас!
          </p>
        </div>
        <div>
          <Image src={client3} width={130} height={130} alt="Our clients" />
        </div>
      </div>
    </div>
  );
}
