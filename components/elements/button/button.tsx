type Props = {
  name: string;
  handler?: any
  fill?:boolean
};
const Button = ({ name, handler, fill }: Props) => {
  return (
    <button onClick={handler} className={`${fill ? "bg-brand hover:bg-brand/90" : "bg-transparent text-brand"} cursor-pointer rounded-md py-3 px-6 text-sm text-white transition-all duration-500 hover:scale-105 `}>
      {name}
    </button>
  );
};

export default Button;
