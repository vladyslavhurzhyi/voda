import Image from "next/image";
import Button from "../Button/Button";
import "./styles.css";

export const TelegramForm = () => {
  return (
    <div className="containerFormTelegram">
      <div className="wrapperIconCloseForm">
        <Image src="iconCloseModal.svg" width={24} height={24} alt="Закрити" />
      </div>
      <form className="formTelegram">
        <label className="labelTelegram">
          Ім&apos;я
          <input
            className="inputTelegram"
            type="text"
            name="name"
            placeholder="Ім'я"
          ></input>
        </label>
        <label className="labelTelegram">
          Номер телефону
          <input
            className="inputTelegram"
            type="text"
            name="phoneNumber"
            placeholder=" Номер телефону"
          ></input>
        </label>
        <label className="labelTelegram">
          Коментар
          <textarea
            className="textComment"
            name="comments"
            rows="4"
            placeholder="Ваш коментар..."
          ></textarea>
        </label>
        <div className="wrapperButton">
          <Button text="Надіслати" className="buttonTelegramSend" />
        </div>
      </form>
    </div>
  );
};
