const Button = ({ text, className }) => {
  return (
    <button
      className={`${className}  rounded-[14px] duration-200 text-white bg-[#91C81E] font-semibold hover:shadow `}
    >
      {text}
    </button>
  );
};

export default Button;
