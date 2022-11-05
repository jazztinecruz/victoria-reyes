import NextLink from "next/link";

type Props = {
  name: string;
  link: string;
};

const Link = ({ link, name }: Props) => {
  return (
    <NextLink
      href={link}
      className="text-md lg:text-lg font-medium hover:text-green">
      {name}
    </NextLink>
  );
};

export default Link;
