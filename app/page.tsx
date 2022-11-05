import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/app/navbar/navbar";

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
        <div className="relative grid h-full items-center justify-center bg-hero-bg bg-cover bg-no-repeat">
          {/* hero black container */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/75"></div>

          {/* hero content */}
          <div className="z-50 flex flex-col items-center justify-center gap-2 text-center px-4">
            <h1 className="text-3xl font-semibold tracking-wider text-white laptop:text-6xl">
              BARANGAY VICTORIA REYES
            </h1>
            <h3 className="text-lg font-light tracking-wider text-white laptop:text-3xl">
              CITY OF DASMARINAS
            </h3>

            {/* sign up */}
            <div className="mt-8 grid grid-flow-row justify-center w-full laptop:grid-cols-[1fr,auto]">
              <div className="w-96 laptop:w-full py-5 pl-6 text-center laptop:text-left rounded-tl-md rounded-tr-md bg-white laptop:rounded-bl-md laptop:rounded-tr-none">
                <span className="cursor-pointertext-[#838383]">
                  Dont have an account yet?
                </span>
              </div>

              <button className="w-full laptop:w-60 grid grid-flow-col laptop:grid-cols-[1fr,auto] py-5  px-6 items-center justify-center gap-10 laptop:gap-0 rounded-br-md rounded-bl-md bg-green  text-center text-white laptop:justify-start laptop:rounded-tr-md laptop:rounded-bl-none laptop:py-0 laptop:text-left">
                <span className="text-lg text-white ">GET STARTED</span>
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
