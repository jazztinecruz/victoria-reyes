import Link from "./link";

type Props = {
  name: string;
  list: {
    name: string;
    href: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }[];
};

const Links = ({ name, list }: Props) => {
  return (
    <div className="space-content">
      <h2 className="font-medium hidden desktop:block">{name}</h2>
      <ul className="space-content">
        {list.map(({ name, href, Icon }) => (
          <Link key={name} name={name} href={href} Icon={Icon} />
        ))}
      </ul>
    </div>
  );
};

export default Links;
