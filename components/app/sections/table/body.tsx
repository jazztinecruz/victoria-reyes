type Props = {
  children: React.ReactNode;
};

const Body = ({ children }: Props) => {
  return <tbody>{children}</tbody>;
};

export default Body;
