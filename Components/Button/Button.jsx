const Button = ({ text, className }) => {
  return (
    <button
      className={`${className} w-[240px] h-[60px] py-[18px] px-[77.5px] rounded-[14px] duration-200 text-white bg-[#91C81E] font-semibold hover:shadow `}
    >
      {text}
    </button>
  );
};

export default Button;
