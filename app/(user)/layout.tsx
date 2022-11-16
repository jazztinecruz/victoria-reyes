"use client";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import Notification from "../../components/notification";

type Props = {
  children: React.ReactNode;
};

const DocumentsLayout = ({ children }: Props) => {
  const [openNotification, setOpenNotification] = useState(false);

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
    <div className="relative grid h-screen grid-rows-[auto,1fr] gap-4  tablet:gap-10">
      <nav>
        <div className="navbar bg-base-100 py-4 px-5">
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
            <div className="relative ml-10 flex items-center gap-4">
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
              <h1 className="whitespace-nowrap">
                Barangay{" "}
                <span className="whitespace-nowrap font-bold">
                  Victoria Reyes
                </span>
              </h1>
            </div>
          </div>
          <div className="navbar-end flex cursor-pointer items-center gap-6">
            <div className="flex items-center gap-2 group">
              <BellIcon
                onClick={() => setOpenNotification(!openNotification)}
                className="h-5 w-5 group-hover:text-brand"
              />
              <span
                onClick={() => setOpenNotification(!openNotification)}
                className="text-sm hover:text-brand">
                Notifications
              </span>
            </div>

            <div className="flex items-center gap-2 group">
              <UserCircleIcon className="w-5 h-5 group-hover:text-brand"/>
              <span className="text-sm hover:text-brand">Logout my Account</span>
            </div>
          </div>

          {openNotification && (
            <Notification
              handler={() => setOpenNotification(!openNotification)}
            />
          )}
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default DocumentsLayout;
