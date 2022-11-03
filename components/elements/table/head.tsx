type Props = {
  children: React.ReactNode;
};

const Head = ({ children }: Props) => {
  return (
    <thead className="sticky top-0 border-b bg-slate-200 text-left uppercase">
      {children}
    </thead>
  );
};

export default Head;
