interface ButtonProps {
  name: string;
}
const Button = ({ name }: ButtonProps) => {
  return (
    <button className="cursor-pointer text-sm rounded-md bg-green py-3 px-6 text-white transition-all duration-500 hover:scale-105 hover:bg-green/90">
      {name}
    </button>
  );
};

export default Button;
