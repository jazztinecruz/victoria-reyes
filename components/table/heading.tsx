type Props = {
  children: React.ReactNode;
};

const Heading = ({ children }: Props) => {
  return (
    <th scope="row" className="whitespace-nowrap py-4 px-6 font-medium">
      {children}
    </th>
  );
};

export default Heading;
