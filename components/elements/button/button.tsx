type Props = {
  name: string;
};
const Button = ({ name }: Props) => {
  return (
    <button className="cursor-pointer rounded-md bg-green py-3 px-6 text-sm text-white transition-all duration-500 hover:scale-105 hover:bg-green/90">
      {name}
    </button>
  );
};

export default Button;
