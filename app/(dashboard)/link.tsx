"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import NextLink from "next/link";

type Props = {
  name: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const Link = ({ name, href, Icon }: Props) => {
  const segments = useSelectedLayoutSegments();
  const currentSegment = href.split("/").slice(-1).toString();
  const activeSegment = segments.at(-1)!.includes(currentSegment);

  return (
    <li key={name}>
      <NextLink
        href={href}
        className={`${
          activeSegment ? "font-bold" : "opacity-fade"
        } smooth flex items-center gap-6 text-sm hover:opacity-100`}>
        <Icon className="mx-auto h-6 w-6 desktop:mx-0" />
        <h3 className="hidden desktop:block">{name}</h3>
      </NextLink>
    </li>
  );
};

export default Link;
