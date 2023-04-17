"use client";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Notification from "../../../components/notification";

type Props = {
  children: React.ReactNode;
  params: any;
};

const DocumentsLayout = ({ children, params }: Props) => {
  const [openNotification, setOpenNotification] = useState(false);

  const links = {
    user: [
      {
        name: "Documents",
        href: `${params.userId}/documents`,
      },
      {
        name: "Document Status",
        href: `${params.userId}/documents-status`,
      },
      {
        name: "My Profile",
        href: `${params.userId}/profile`,
      },
      {
        name: "Logout Account",
        href: "/",
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
                    <Link
                      href={link.href}
                      className="text-black hover:text-brand">
                      {link.name}
                    </Link>
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

          {openNotification && (
            <Notification
              handler={() => setOpenNotification(!openNotification)}
            />
          )}
        </div>
      </nav>

      <main className="scrollbar-thumb-rounded-full max-h-screen overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-500">
        <div className="smooth p-4 desktop:p-6">{children}</div>
      </main>
    </div>
  );
};

export default DocumentsLayout;
