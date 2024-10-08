import Image from "next/image";
import Button from "../Button/Button";
import "./styles.css";

import Link from "next/link";

export const Best = () => {
  return (
    <section className="sectionBest ">
      <div className="wrapperBest">
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
        <div className="wrapperInfoBest">
          <div>
            <Image
              className="imgTaraBest"
              src="tara.svg"
              width={425}
              height={425}
              alt="Доставка воды Котовского, Фонтанка, Крижанівка, Поскот (Одесская область)"
            />
          </div>
          <div className="containerInfoBest">
            <h2 className="titleBest">
              І НАВІТЬ ЯКЩО МИ У ВАС НЕ ПЕРШІ — МИ ХОЧЕМО СТАТИ НАЙКРАЩИМИ
            </h2>
            <h3 className="textTara">
              Приймаємо на заміну&nbsp;
              <span className="spanBest">полікарбонатні бутлі</span> &nbsp;інших
              компаній. Ми прагнемо зробити ваше життя комфортнішим, тому
              надаємо вигідні умови співпраці.
            </h3>
            <div>
              <Link href="/water">
                <Button text="Замовити" className="buttonBest" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
