import Image from "next/image";
// import Image1 from "/feedbackImage.png";
// import Image2 from "/feedbackImage2.png";

export const FeedbackGoogle = () => {
  return (
    <div className="lg:h-fit  w-full">
      <div className="block mt-[100px] px-4 pb-10 lg:flex h-fit lg:h-[500px] justify-center items-center gap-20">
        <div className="mt-[185px] lg:mt-10  flex justify-center items-center">
          <div className="flex flex-col lg:flex-row">
            <Image
              className="mx-auto lg:flex lg:w-[250px] md:w-[200px]"
              alt="f"
              src={"/feedbackImage.png"}
              width={150}
              height={100}
            />
            <h2 className="block mt-10 lg:mt-20 mx-[20px]  font-bold text-4xl leading-[40px] uppercase text-center text-white">
              <a href="https://g.page/r/CcVuVKFRfaXgEBE/review" target="_blank">
                ВИ ТАКОЖ МОЖЕТЕ ЗАЛИШИТИ СВІЙ ВІДГУК, <br /> ПЕРЕЙШОВШИ ЗА
                ПОСИЛАННЯМ ТУТ
              </a>
            </h2>
            <Image
              className="hidden lg:flex lg:w-[250px]"
              alt="f"
              src={"/feedbackImage2.png"}
              width={400}
              height={200}
            />
          </div>
          {/* <div className="clientName">
            <p className="name">Григорій</p>
            <p className="description">
              Вода хороша і смачна, дуже добре вгамовує спрагу. П’ємо як сиру
              так і готуємо на ній їжу, сміливо даємо дітям. Гарний сервіс
              доставки: завжди швидко, зручно, приємний персонал. Сподобалась
              помпа та класний чохол на пляшку. Ми з вами надовго)
            </p>
          </div> */}
        </div>
        {/* <div className="mt-[50px]  lg:mb-[0px] lg:mt-10 flex justify-center items-center">
          <div className="clientName">
            <p className="name">Анастасія</p>
            <p className="description">
              Саме такий сервіс я і шукала! Дуже легко та швидко робити
              замовлення, з доставкою все завжди на висоті. Окреме дякую що
              прийняли на обмін тару від попереднього постачальника. Ну і
              водичка - клас!
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
