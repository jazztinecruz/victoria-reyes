import { Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CheckCircleIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  // Cog6ToothIcon,
  // PresentationChartLineIcon,
  // UserIcon,
  // UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment } from "react";

const Burger = () => {
  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      Icon: HomeIcon,
    },
    {
      name: "Requests",
      href: "/dashboard/requests",
      Icon: DocumentDuplicateIcon,
    },
    {
      name: "Verifcations",
      href: "/dashboard/verifications",
      Icon: CheckCircleIcon,
    },
    // {
    //   name: "Reports",
    //   href: "/administrator/dashboard/reports",
    //   Icon: PresentationChartLineIcon,
    // },
    // {
    //   name: "Account",
    //   href: "/administrator/dashboard/account",
    //   Icon: UserIcon,
    // },
    // {
    //   name: "Registration",
    //   href: "/administrator/dashboard/registration",
    //   Icon: UserPlusIcon,
    // },
    // {
    //   name: "Settings",
    //   href: "/administrator/dashboard/settings",
    //   Icon: Cog6ToothIcon,
    // },
  ];

  return (
    <Menu as="div" className="relative flex items-center">
      {({ open }) => (
        <>
          <Transition
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="smooth fixed inset-0 z-20 bg-black/25 backdrop-blur-sm notebook:hidden" />
          </Transition>
          <Menu.Button className="relative z-30 h-6 w-6 notebook:hidden">
            <Bars3Icon
              className={`${
                open ? "opacity-0" : "opacity-100"
              } smooth absolute top-0 h-full w-full`}
            />
            <XMarkIcon
              className={`${
                open ? "opacity-100" : "opacity-0"
              } smooth absolute top-0 h-full w-full`}
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="space-y-2 absolute top-[200%] right-0 z-30 w-[calc(100vw-2rem)] rounded border bg-white p-2 shadow-lg notebook:hidden">
              {links.map(({ name, href, Icon }) => (
                <Menu.Item key={name}>
                  {({ active }) => (
                    <Link
                      href={href}
                      className={`${
                        active
                          ? "bg-slate-200 opacity-100 hover:bg-slate-200"
                          : "opacity-fade"
                      } smooth flex gap-4 rounded p-2 text-sm `}>
                      <Icon className="h-6 w-6" />
                      <h3>{name}</h3>
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Burger;
