import Image from "next/image";
import Button from "../Button/Button";
import "./styles.css";

export const TelegramForm = () => {
  return (
    <div className="containerFormTelegram">
      <div className="wrapperIconCloseForm">
        <Image
          src="/iconCloseTelegtamForm.png"
          width={24}
          height={24}
          alt="Закрити"
        />
      </div>
      <div className="wrapperLogoTelegram">
        <Image
          src="/LogoForTelegramForm.png"
          width={110}
          height={40}
          alt="Логотип"
        />
      </div>
      <div className="wrapperTitleTelegramForm">
        <p className="titleTelegramForm">Залиште свої контакти</p>
        <p className="subTitleTelegramForm">і ми Вам зателефонуємо</p>
      </div>

      <form className="formTelegram">
        <input
          className="inputTelegram"
          type="text"
          name="name"
          placeholder="Ім'я"
        ></input>

        <input
          className="inputTelegram"
          type="text"
          name="phoneNumber"
          placeholder=" Номер телефону"
        ></input>

        <textarea
          className="textComment"
          name="comments"
          rows="4"
          placeholder="Ваше повідомлення (в разі потреби)"
        ></textarea>

        <div className="wrapperButton">
          <Button text="Замовити" className="buttonTelegramSend" />
        </div>
      </form>
    </div>
  );
};
