import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/app/navbar/navbar";

const HomePage = () => {
  return (
    <div className="grid h-screen grid-rows-[1fr,auto]">
      {/* hero section */}
      <section className="grid h-full grid-rows-[auto,1fr]">
        {/* navbar */}
        <nav className="bg-white">
          <div className="mx-auto max-w-5xl">
            <Navbar />
          </div>
        </nav>

        {/* hero content */}
        <div className="relative grid h-full items-center justify-center bg-hero-bg bg-cover bg-no-repeat">
          {/* hero black container */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/75"></div>

          {/* hero content */}
          <div className="z-50 flex flex-col items-center justify-center gap-2 text-center">
            <h1 className="text-3xl font-semibold tracking-wider text-white laptop:text-6xl">
              BARANGAY VICTORIA REYES
            </h1>
            <h3 className="text-lg laptop:text-3xl font-light tracking-wider text-white">
              CITY OF DASMARINAS
            </h3>

            {/* sign up */}
            <div className="mt-8 grid w-full grid-flow-row items-center laptop:grid-cols-[1fr,auto]">
              <div className="rounded-tl-md rounded-tr-md bg-white py-4 laptop:py-6 px-12 laptop:rounded-bl-md laptop:rounded-tr-none">
                <span className="cursor-pointer text-center text-[#838383]">
                  Dont have an account yet?
                </span>
              </div>

              <button className="flex h-full items-center justify-center gap-5 rounded-br-md rounded-bl-md bg-green  py-4 px-14 text-center text-white laptop:justify-start laptop:rounded-tr-md laptop:rounded-bl-none laptop:py-0 laptop:text-left">
                <span className="text-lg text-white">GET STARTED</span>
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <div className="mx-auto max-w-5xl border-2">footer</div>
      </footer>
    </div>
  );
};

export default HomePage;
