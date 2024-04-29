import Button from "../Button/Button";
import "./styles.css";

export const TelegramForm = () => {
  return (
    <div className="containerFormTelegram">
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
