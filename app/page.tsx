import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/app/navbar/navbar";
import Documents from "./homepage-sections/documents/documents";
import Feautures from "./homepage-sections/features/features";

const HomePage = () => {
  return (
    <div className="grid h-screen grid-rows-[1fr,auto]">
      {/* hero section */}
      <section className="grid h-full grid-rows-[auto,1fr]">
        {/* navbar */}
        <nav className="bg-white laptop:px-10">
          <Navbar />
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

      {/* about */}
      <div className="laptop:h-90 z-50 flex w-full flex-col gap-10 rounded-md px-6 py-20 text-center text-lg leading-relaxed tablet:mt-20 laptop:absolute laptop:-bottom-52 laptop:left-0 laptop:right-0 laptop:mt-0 laptop:w-[945px] laptop:translate-x-2/4 laptop:transform laptop:bg-white laptop:py-16 laptop:shadow-md">
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

      {/* barangay documents */}
      <Documents />

      {/* features */}
      <Feautures />

      {/* footer */}
      {/* <footer>
        <div className="mx-auto max-w-5xl border-2">footer</div>
      </footer> */}
    </div>
  );
};

export default HomePage;
