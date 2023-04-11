type Props = {
  title: string;
  description: string;
  price: number;
};

const Document = ({ title, description, price }: Props) => {
  return (
    <div className="group flex cursor-pointer flex-col items-center gap-4 px-6 py-4 text-center">
      <span className="text-lg font-semibold group-hover:text-brand laptop:text-xl">
        {title}
      </span>
      <p className="leading-relaxed  group-hover:text-brand">{description}</p>
      <span className="font-semibold">Amount: {price}</span>
    </div>
  );
};

export default Document;
