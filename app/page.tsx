"use client";
import { Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDoubleUpIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  HomeIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useRef } from "react";
import Button from "../components/elements/button/button";
import Document from "./document";
import Feature from "./feature";

const documents: { title: string; description: string }[] = [
  {
    title: "Barangay Clearance",
    description:
      "A Barangay Clearance one of the easiest documents you can get as a valid proof of your identity. It is a document that contains a person's name, address, thumb mark, and signature. It also contains the date it was issued and for what specific purpose.",
  },
  {
    title: "Barangay Indigency",
    description:
      "A document that are sometimes required by the Philippine government or a private institution as proof of an individual's financial situation.",
  },
  {
    title: "Barangay ID",
    description:
      "A Barangay Clearance one of the easiest documents you can get as a valid proof of your identity. It is a document that contains a person's name, address, thumb mark, and signature. It also contains the date it was issued and for what specific purpose.",
  },
  {
    title: "Cedula",
    description:
      "one of the basic requirements for most government transactions. It can also serve as valid identification for individuals and corporations residing or located in the same municipality from where it's acquired",
  },
];

const features: {
  title: string;
  description: string;
  image: string;
  order: "left" | "right";
}[] = [
  {
    title: "Get your account verified.",
    description:
      "Sign up and fill up all necessary information to make an account, and wait for your account to be verified.",
    image: "/images/features/feat1.png",
    order: "right",
  },
  {
    title: "You can request any barangay documents.",
    description:
      "You can now request any barangay documents anytime, anywhere effortlessly.",
    image: "/images/features/feat2.png",
    order: "left",
  },
  {
    title: "See when you can claim your requested document.",
    description: "See your requested documents when it would be available.",
    image: "/images/features/feat3.png",
    order: "right",
  },
  {
    title: "See how much will cost your requested document.",
    description:
      "See how much you will pay to your requested documents when it is ready to claim in barangay victoria reyes.",
    image: "/images/features/feat4.png",
    order: "left",
  },
  {
    title: "You can check your request status.",
    description:
      "You can always check your request status if its ready to claim onsite..",
    image: "/images/features/feat5.png",
    order: "right",
  },
];

const links = [
  {
    name: "Home",
    href: "/",
    Icon: HomeIcon,
  },
  {
    name: "About Us",
    href: "#about",
    Icon: UserGroupIcon,
  },
  {
    name: "Barangay Documents",
    href: "#documents",
    Icon: DocumentTextIcon,
  },
  {
    name: "Features",
    href: "#features",
    Icon: QuestionMarkCircleIcon,
  },
  {
    name: "Contact Us",
    href: "#contact",
    Icon: PhoneIcon,
  },
  {
    name: "Login your Account",
    href: "/signin",
    Icon: UserIcon,
  },
];

const HomePage = () => {
  const backToTopSection = useRef<any>(null);
  const handleBackToTop = () => {
    if (backToTopSection.current !== null) {
      window.scrollTo({
        top: backToTopSection.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="grid h-screen grid-rows-[1fr,auto] gap-20">
      {/* hero section */}

      <section
        ref={backToTopSection}
        className="grid h-full grid-rows-[auto,1fr]">

        {/* navbar */}
        <nav className="bg-white tablet:px-10 laptop:hidden">
          <div className="grid grid-cols-[1fr,auto] items-center gap-8 py-3 px-4">
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
            {/* mobile */}
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
                    <div className="smooth fixed inset-0 z-20 bg-black/25 backdrop-blur-sm laptop:hidden" />
                  </Transition>
                  <Menu.Button className="relative z-30 h-6 w-6 laptop:hidden">
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
                    <Menu.Items className="absolute top-[200%] right-0 z-30 mx-auto ml-10 w-[calc(100vw-2rem)] space-y-2 rounded border bg-white p-2 shadow-lg laptop:hidden">
                      {links.map(({ name, href, Icon }) => (
                        <Menu.Item key={name}>
                          {({ active }) => (
                            <a
                              href={href}
                              className={`${
                                active
                                  ? "bg-slate-200 opacity-100 hover:bg-slate-200"
                                  : "opacity-fade"
                              } smooth flex gap-4 rounded p-2 text-sm `}>
                              <Icon className="h-6 w-6" />
                              <h3>{name}</h3>
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </nav>

        {/* laptop */}
        <nav className="hidden bg-white laptop:block laptop:px-10">
          <div className="grid items-center gap-8 py-3 px-4 notebook:grid-cols-[1fr,auto] laptop:grid-cols-[auto,1fr,auto] laptop:px-0">
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
            {/* sidebar for mobile*/}
            <div className="notebook:block laptop:hidden">
              <Bars3Icon className="h-6 w-6" />
            </div>
            {/* navlinks for laptop */}
            <div className="notebook:hidden laptop:block ">
              <div className="flex items-center gap-10">
                {/* navlinks */}
                <a href="/" className="hover:text-brand">
                  Home
                </a>
                <a href="#about" className="hover:text-brand">
                  About Us
                </a>
                <a href="#documents" className="hover:text-brand">
                  Barangay Documents
                </a>
                <a href="#features" className="hover:text-brand">
                  Features
                </a>
                <a href="#contact" className="hover:text-brand">
                  Contact Us
                </a>
              </div>
            </div>
            {/* sign in button */}
            <Link href="/signin">
              <div className="hidden laptop:block">
                <Button name="LOGIN YOUR ACCOUNT" fill/>
              </div>
            </Link>
          </div>
        </nav>

        {/* hero content */}
        <div className="relative grid h-screen items-center justify-center bg-hero-bg bg-cover bg-no-repeat">
          {/* hero black container */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/75"></div>

          {/* hero content */}
          <div className="z-50 flex flex-col items-center justify-center gap-2 px-4 text-center">
            <h1 className="text-3xl font-semibold tracking-wider text-white tablet:text-5xl laptop:text-6xl">
              BARANGAY VICTORIA REYES
            </h1>
            <h3 className="text-lg font-light tracking-wider text-white tablet:text-2xl laptop:text-3xl">
              CITY OF DASMARINAS
            </h3>

            {/* sign up */}
            <div className="mt-8 grid w-full grid-flow-row justify-center tablet:grid-cols-[1fr,auto]">
              <div className="w-96 rounded-tl-md rounded-tr-md bg-white py-5 pl-6 text-center tablet:w-full tablet:rounded-bl-md tablet:rounded-tr-none laptop:text-left">
                <span className="cursor-pointer text-[#838383]">
                  Dont have an account yet?
                </span>
              </div>

              <Link href="/signup">
                <button className="grid h-full w-full grid-flow-col items-center justify-center gap-10  rounded-br-md rounded-bl-md bg-brand py-5 px-6 text-center text-white tablet:rounded-tr-md  tablet:rounded-bl-none laptop:w-60 laptop:grid-cols-[1fr,auto] laptop:justify-start laptop:gap-0 laptop:py-0 laptop:text-left">
                  <span className="text-lg text-white ">GET STARTED</span>
                  <ChevronRightIcon className="h-6 w-6 text-white" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <div
        id="about"
        className="z-50 mx-auto grid max-w-5xl items-center justify-center gap-10 rounded-md px-6 py-20 text-center laptop:-mt-32 laptop:bg-white laptop:shadow-md">
        <span className="text-xl font-semibold laptop:hidden">About Us</span>
        <p>
          Barangay Victoria Management System is a website that entails to
          provide a user-friendly and convenient interface in terms of
          requesting and processing registration within its community. This
          serves as an automated service so that the user may have an option to
          process and request for the services without the need to walk-in on
          barangay centers.
        </p>
      </div>

      {/* documents section */}
      <div
        id="documents"
        className=" relative h-full laptop:mt-14 laptop:h-screen">
        <div className="mx-auto grid h-full max-w-5xl grid-flow-row items-start justify-center gap-16 p-4 tablet:grid-cols-2 tablet:py-10 laptop:gap-0">
          {documents.map((document, index) => (
            <Document
              key={index}
              name={document.title}
              description={document.description}
            />
          ))}
        </div>
      </div>

      {/* features */}
      <div id="features" className="mt-14 h-full w-full laptop:mt-0">
        <div className="mx-auto grid h-full max-w-5xl items-center justify-center gap-14 tablet:gap-0 laptop:gap-32">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              order={feature.order}
            />
          ))}
        </div>
      </div>

      {/* footer */}
      <footer id="contact" className="relative bg-brand py-10 px-6 text-white">
        <div className="mx-auto grid max-w-5xl items-center justify-center gap-3 text-center">
          <Image
            alt="Victoria Reyes Logo"
            src="/images/victoria-reyes-logo.svg"
            blurDataURL="/images/victoria-reyes-logo.svg"
            placeholder="blur"
            priority
            width={48}
            height={48}
            className="mx-auto object-cover"
          />
          <span className="cursor-pointer text-sm font-semibold">
            Barangay Victoria Reyes Dasmariñas{" "}
          </span>
          <span className="text-sm">
            Visit Us: 8X9F+8P2, Fatima Rd, Victoria Reves, Dasmariñas, 4114
            Cavite{" "}
          </span>
        </div>
        {/* back to top button */}
        <button
          className="group absolute bottom-10 right-4 grid grid-flow-col place-items-center gap-4 rounded-full bg-white p-4 transition-all duration-300 laptop:bottom-4"
          onClick={handleBackToTop}>
          <ChevronDoubleUpIcon className="h-5 w-5 animate-bounce text-brand " />
        </button>
      </footer>
    </div>
  );
};

export default HomePage;
