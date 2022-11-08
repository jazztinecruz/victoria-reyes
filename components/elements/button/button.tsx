type Props = {
  name: string;
};
const Button = ({ name }: Props) => {
  return (
    <button className="cursor-pointer rounded-md bg-brand py-3 px-6 text-sm text-white transition-all duration-500 hover:scale-105 hover:bg-brand/90">
      {name}
    </button>
  );
};

export default Button;
