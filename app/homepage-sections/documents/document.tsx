interface DcoumentProps {
  name: string;
  paragraph: string;
}

const Document = ({ name, paragraph }: DcoumentProps) => {
  return (
    <div className="group flex cursor-pointer flex-col items-center gap-4 px-6 py-4 text-center">
      <span className="text-lg font-semibold group-hover:text-green">
        {name}
      </span>
      <p className="leading-relaxed group-hover:text-green">{paragraph}</p>
    </div>
  );
};

export default Document;
