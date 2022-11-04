"use client";

import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment } from "react";
import Button from "../../elements/button/button";
import Logo from "../../elements/logo/logo";
import NavLinks from "./nav-links/nav-links";

const Navbar = () => {
  return (
    <div className="grid notebook:grid-cols-[1fr,auto] laptop:grid-cols-[auto,1fr,auto] items-center gap-8 py-3 px-4 laptop:px-0">
      {/* logo */}
      <Logo />

      {/* sidebar for mobile*/}
      <div className="notebook:block laptop:hidden">
        <Bars3Icon className="w-6 h-6"/>
      </div>

      {/* navlinks for laptop */}
      <NavLinks />

      {/* sign in button */}
      <div className="hidden laptop:block">
      <Button name="LOGIN YOUR ACCOUNT"/></div>
    </div>
  );
};

export default Navbar;
