const Button = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className}  hover:animate-pulse rounded-[14px] duration-200 text-white bg-[#91C81E] font-semibold hover:shadow `}
    >
      {text}
    </button>
  );
};

export default Button;
