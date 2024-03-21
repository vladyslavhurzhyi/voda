import "./steps.css";

const Steps = () => {
  return (
    <div className="max-w-[1440px] flex flex-col mx-auto">
      <h2 className="mx-auto mt-[60px] text-[#f5821e] text-[60px] not-italic  text-left font-['Montserrat',_sans-serif] font-bold leading-[78px] mb-[80px] tracking-[3px] uppercase">
        ВСЬОГО 3 КРОКИ
      </h2>

      <div>
        <ul className="steps-list-wrapper">
          <li className="steps-list-item">
            <h3 className="steps-title">1. Замовлення</h3>
            <p className="mb-[12px]">
              Телефонуйте або пишіть у Вайбер чи Телеграм:
            </p>
            <ul className="mb-[20px]">
              <li className="steps-schedule">Пн-Сб: 9:00 - 20:00</li>
              <li className="steps-schedule">Нд: 9:00 - 15:00</li>
            </ul>
            <p className="mb-[12px]">Залишайте замовлення на сайті:</p>
            <ul>
              <li className="steps-schedule">Цілодобово</li>
            </ul>
          </li>

          <li className="steps-list-item">
            <h3 className="steps-title">2. Доставка</h3>
            <p className="mb-[12px]">Оберіть бажаний час доставки:</p>
            <ul className="mb-[20px]">
              <li className="steps-schedule">Ранкова: 9:00 - 12:00</li>
              <li className="steps-schedule">Вечірня: 18:00 - 21:00</li>
            </ul>
            <p className="mb-[12px]">
              Замовлення, оформлене до 17:00, можна отримати в цей же вечір.
              Доставки в неділю немає.
            </p>
            <p className="text-[#00AFF0] text-[16px] font-[500]">
              Доставка води безкоштовна.
            </p>
          </li>

          <li className="max-w-[300px]">
            <h3 className="steps-title">3. ОПЛАТА</h3>
            <p className="mb-[12px]">Оберіть зручні методи оплати:</p>
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
