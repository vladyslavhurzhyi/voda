import Image from "next/image";

const FormSuccessful = ({ setFormSend }) => {
  return (
    <div className="containerFormTelegram ">
      <button
        type="button"
        onClick={() => {
          setFormSend();
        }}
        className="wrapperIconCloseForm"
      >
        <Image
          className="iconCloseForm"
          src="/iconCloseTelegtamForm.png"
          width={24}
          height={24}
          alt="Закрити"
        />
      </button>
      <div className="flex flex-col gap-10">
        <div className="wrapperLogoTelegram formClose">
          <Image
            src="/LogoForTelegramForm.png"
            width={110}
            height={40}
            alt="Логотип"
          />
        </div>
        <div className="wrapperTitleTelegramForm textMb300">
          <p className="titleTelegramForm">Відправлено</p>
        </div>
      </div>
    </div>
  );
};

export default FormSuccessful;
