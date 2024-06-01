import Image from "next/image";
import "./styles.css";
import client1 from "../../images/client1.png";
import client2 from "../../images/client2.png";

export const FeedbackOne = () => {
  return (
    <div className="lg:h-fit  w-full">
      <div className="block mt-[100px] px-4 pb-10 lg:flex h-fit lg:h-[500px] justify-center items-center gap-20">
        <div className="mt-[185px] lg:mt-10  flex justify-center items-center">
          <div className="imageClient">
            <Image
              src={client1}
              className="lg:w-[130px] lg:h-[130px]"
              width={110}
              height={110}
              alt="Our clients"
            />
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
        <div className="mt-[50px]  lg:mb-[0px] lg:mt-10 flex justify-center items-center">
          <div className="imageClient">
            <Image
              src={client2}
              className="lg:w-[130px] lg:h-[130px]"
              width={110}
              height={110}
              alt="Our clients"
            />
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
      </div>
    </div>
  );
};
