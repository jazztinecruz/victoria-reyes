import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
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

const HomePage = () => {
  return (
    <div className="grid h-screen grid-rows-[1fr,auto] gap-20">
      {/* hero section */}
      <section className="grid h-full grid-rows-[auto,1fr]">
        {/* navbar */}
        <nav className="bg-white laptop:px-10">
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
                <a href="/">Home</a>
                <a href="#about">About Us</a>
                <a href="#documents">Barangay Documents</a>
                <a href="#features">Features</a>
                <a href="#contact">Contact Us</a>
              </div>
            </div>
            {/* sign in button */}
            <div className="hidden laptop:block">
              <Button name="LOGIN YOUR ACCOUNT" />
            </div>
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

              <button className="grid w-full grid-flow-col items-center justify-center gap-10  rounded-br-md rounded-bl-md bg-green py-5 px-6 text-center text-white tablet:rounded-tr-md  tablet:rounded-bl-none laptop:w-60 laptop:grid-cols-[1fr,auto] laptop:justify-start laptop:gap-0 laptop:py-0 laptop:text-left">
                <span className="text-lg text-white ">GET STARTED</span>
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <div
        id="about"
        className="z-50 mx-auto grid max-w-5xl items-center justify-center gap-10 rounded-md px-6 py-20 text-center laptop:-mt-28 laptop:bg-white laptop:shadow-md">
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
      <footer id="contact" className="bg-green py-10 px-6 text-white">
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
      </footer>
    </div>
  );
};

export default HomePage;
