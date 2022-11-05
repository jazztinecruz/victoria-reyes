type Props = {
  name: string;
  description: string;
};

const Document = ({ name, description }: Props) => {
  return (
    <div className="group flex cursor-pointer flex-col items-center gap-4 px-6 py-4 text-center">
      <span className="text-lg font-semibold group-hover:text-green laptop:text-xl">
        {name}
      </span>
      <p className="leading-relaxed  group-hover:text-green">{description}</p>
    </div>
  );
};

export default Document;
