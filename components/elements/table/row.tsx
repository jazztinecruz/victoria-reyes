type Props = {
  children: React.ReactNode;
  heading?: boolean;
};

const Row = ({ children, heading }: Props) => {
  return (
    <tr className={`${!heading ? " border-b hover:bg-slate-100" : ""} smooth`}>
      {children}
    </tr>
  );
};

export default Row;
