import Image from "next/image";
import "./styles.css";

export const ChemicalComposition = () => {
  return (
    <section className="containerChemical">
      <div className="custom-wave">
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
      <div className="wrapperChemical">
        <h3 className="titleChemical">ХІМІЧНИЙ СКЛАД НАШОЇ ВОДИ</h3>
        <div className="wrapInfo">
          <div className="styleText">
            <p className="textChemical">
              Головною відмінністю Здорової Води від інших столових та
              мінеральних вод є знижений вміст солей (сухого залишку), а також
              наявність діючих стандартів на загальний склад та властивості:
            </p>
            <p className="textChemical">
              Мінералізація: 30-300мг/дм³ (в залежності від виду води) Норма:
              ≤1000мг/дм³
            </p>
            <p className="textChemical">
              Наша компанія пропонує надійну та швидку доставку питної води
              Котовського, Фонтанка, Крижанівка - яка відповідає найвищим
              стандартам якості.
            </p>
          </div>
          <div>
            <Image
              className="imgChemicalComposition"
              src="/chemicalComposition.png"
              height={606}
              width={532}
              alt="лучшая вода в бутылях"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
