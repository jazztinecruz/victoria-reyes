import Link from "next/link";

interface NavLinkProps {
  name: string;
  link: string;
}

const NavLink = ({ link, name }: NavLinkProps) => {
  return <Link href={link} className="text-md lg:text-lg  font-medium">{name}</Link>;
};

export default NavLink;
