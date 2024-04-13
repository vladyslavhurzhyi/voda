const Button = ({ text, className, onClick, bg, border, textColor }) => {
  return (
    <button
      onClick={onClick}
      className={`${className}  hover:animate-pulse rounded-[14px] duration-200 ${
        textColor ? "text-[#91C81E]" : "text-white"
      } bg-${bg || "[#91C81E]"} font-semibold hover:shadow ${
        border && "border-2 border-[#91C81E] text-greenMain"
      } `}
    >
      {text}
    </button>
  );
};

export default Button;
