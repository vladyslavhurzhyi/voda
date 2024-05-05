import Image from "next/image";
import "./styles.css";
import client1 from "../../images/client1.png";
import client2 from "../../images/client2.png";
import client3 from "../../images/client3.png";

export const FeedbackOne = () => {
  return (
    <div className=" bg-[#00AFF0]    w-full">
      <div className="block px-4 pb-10 md:flex h-fit md:h-[800px] justify-center items-center gap-20">
        <div className="pt-40 md:pt-0 mt-10 md:mt-0  flex justify-center items-center">
          <div className="imageClient">
            <Image src={client1} width={130} height={130} alt="Our clients" />
          </div>
          <div className="clientName">
            <p className="name">Григорій</p>
            <p className="description">
              Вода хороша і смачна, дуже добре вгамовує спрагу. П’ємо як сиру
              так і готуємо на ній їжу, сміливо даємо дітям. Гарний сервіс
              доставки: завжди швидко, зручно, приємний персонал. Сподобалась
              помпа та класний чохол на пляшку. Ми з вами надовго)
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-0 flex justify-center items-center">
          <div className="imageClient">
            <Image src={client2} width={130} height={130} alt="Our clients" />
          </div>
          <div className="clientName">
            <p className="name">Анастасія</p>
            <p className="description">
              Саме такий сервіс я і шукала! Дуже легко та швидко робити
              замовлення, з доставкою все завжди на висоті. Окреме дякую що
              прийняли на обмін тару від попереднього постачальника. Ну і
              водичка - клас!
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-0 flex justify-center items-center">
          <div className="imageClient">
            <Image src={client3} width={130} height={130} alt="Our clients" />
          </div>
          <div className="clientName">
            <p className="name">Петро</p>
            <p className="description">
              Вода, яку хочеться пити щодня. Смак вражає, а доставка завжди
              оперативна та чітка.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
