"use client";

import { Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CheckCircleIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  PresentationChartLineIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment } from "react";

const Burger = () => {
  const links = [
    {
      name: "Dashboard",
      href: "/dashboard/123/",
      Icon: HomeIcon,
    },
    {
      name: "Requests",
      href: "/dashboard/123/requests",
      Icon: DocumentDuplicateIcon,
    },
    {
      name: "Verifcations",
      href: "/dashboard/123/verifications",
      Icon: CheckCircleIcon,
    },
    // {
    //   name: "Reports",
    //   href: "/dashboard/123/reports",
    //   Icon: PresentationChartLineIcon,
    // },
    // {
    //   name: "Account",
    //   href: "/dashboard/123/account",
    //   Icon: UserIcon,
    // },
    // {
    //   name: "Registration",
    //   href: "/dashboard/123/registration",
    //   Icon: UserPlusIcon,
    // },
    // {
    //   name: "Settings",
    //   href: "/dashboard/123/settings",
    //   Icon: Cog6ToothIcon,
    // },
  ];

  return (
    <Menu as="div" className="relative flex items-center">
      <Menu.Button className="relative h-6 w-6 notebook:hidden">
        <Bars3Icon className="smooth absolute top-0 h-full w-full" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute top-[200%] right-0 z-30 w-[calc(100vw-2rem)] rounded border bg-white p-1 shadow-lg notebook:hidden">
          {links.map(({ name, href, Icon }) => (
            <Menu.Item key={name}>
              {({ active }) => (
                <Link
                  href={href}
                  className={`${
                    active ? "opacity-100 bg-slate-200 hover:bg-slate-200" : ""
                  } smooth flex gap-4 rounded p-2 text-sm `}>
                  <Icon className="h-6 w-6" />
                  <h3>{name}</h3>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Burger;
