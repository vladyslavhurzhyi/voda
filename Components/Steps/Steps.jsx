import "./steps.css";

const Steps = () => {
  return (
    <div className="md:max-w-[1440px] 2xl:max-w-none flex flex-col">
      <h2
        className="flex mx-auto mt-[60px] text-[#f5821e]  text-[40px] md:max-w-[570px] max-w-[200px]
      md:text-[60px] not-italic text-center  font-['Montserrat',_sans-serif] font-bold leading-[50px] md:leading-[78px] mb-[30px] md:mb-[80px] tracking-[1px] uppercase"
      >
        ВСЬОГО 3 КРОКИ
      </h2>

      <div className="flex lg:block">
        <ul className="steps-list-wrapper">
          <li className="steps-list-item">
            <h3 className="steps-title">1. Замовлення</h3>
            <p className="steps-list-text">
              Телефонуйте або пишіть у Вайбер чи Телеграм:
            </p>
            <ul className="steps-schedule-list">
              <li className="steps-schedule">Пн-Сб: 9:00 - 20:00</li>
              <li className="steps-schedule">Нд: 9:00 - 15:00</li>
            </ul>
            <p className="steps-list-text">Залишайте замовлення на сайті:</p>
            <ul>
              <li className="steps-schedule">Цілодобово</li>
            </ul>
          </li>

          <li className="steps-list-item">
            <h3 className="steps-title">2. Доставка</h3>
            <p className="steps-list-text">Оберіть бажаний час доставки:</p>
            <ul className="steps-schedule-list">
              <li className="steps-schedule">Ранкова: 9:00 - 12:00</li>
              <li className="steps-schedule">Вечірня: 18:00 - 21:00</li>
            </ul>
            <p className="steps-list-text">
              Замовлення, оформлене до 17:00, можна отримати в цей же вечір.
              Доставки в неділю немає.
            </p>
            <p className="text-[#00AFF0] text-[16px] font-[500] mb-[30px]">
              Доставка води безкоштовна.
            </p>
          </li>

          <li className="max-w-[300px]">
            <h3 className="steps-title">3. ОПЛАТА</h3>
            <p className="steps-list-text">Оберіть зручні методи оплати:</p>
            <ul>
              <li className="steps-schedule">Готівкою кур&apos;єру</li>
              <li className="steps-schedule">Apple Pay та Google Pay</li>
              <li className="steps-schedule">Оплата на сайті</li>
              <li className="steps-schedule">Переказ на карту ФОПа</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Steps;
