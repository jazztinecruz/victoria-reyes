import { BellIcon } from "@heroicons/react/24/outline";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

const DocumentsLayout = ({ children }: Props) => {
  const links = {
    user: [
      {
        name: "Documents",
        href: "/documents",
      },
      {
        name: "Document Status",
        href: "/documents-status",
      },
      {
        name: "My Profile",
        href: "/profile",
      },
    ],
  };

  return (
    <div className="grid h-screen grid-rows-[auto,1fr]">
      <nav>
        <div className="navbar bg-base-100 py-4">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn-ghost btn-circle btn">
                <Bars3BottomLeftIcon className="h-5 w-5" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
                {links.user.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-black">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <section className="relative z-40 flex items-center gap-4">
              <Image
                alt="Victoria Reyes Logo"
                src="/images/victoria-reyes-logo.svg"
                blurDataURL="/images/victoria-reyes-logo.svg"
                placeholder="blur"
                priority
                width={48}
                height={48}
                className="object-cover"
              />
              <h1 className="notebook:hidden desktop:block">
                Barangay <span className="font-bold">Victoria Reyes</span>
              </h1>
            </section>
          </div>
          <div className="navbar-end">
            <button className="btn-ghost btn-circle btn">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
            <button className="btn-ghost btn-circle btn">
              <BellIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default DocumentsLayout;
