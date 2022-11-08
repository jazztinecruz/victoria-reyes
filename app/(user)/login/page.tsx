"use client";

import { ArrowLeftOnRectangleIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Gender } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Field from "../../../components/elements/field";
import { SigninFields } from "../../../library/api";

const UserLogin = () => {
  const [fields, setFields] = useState<SigninFields>({
    email: "",
    password: "",
  });

  const [sucessfulModal, setSuccessfulModal] = useState(false);

  return (
    <section className="relative bg-white dark:bg-gray-900">
      {/* close button */}
      <Link href="/">
        <XMarkIcon className="absolute right-10 top-4 h-6 w-6 cursor-pointer hover:animate-spin" />
      </Link>

      <div className="flex h-screen justify-center">
        <div className="m-auto hidden laptop:block laptop:w-2/5">
          <div className="relative mx-auto h-[500px] w-full laptop:w-[530px] ">
            <Image
              alt="login secure illustration"
              src="/images/features/feat1.png"
              fill={true}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="tablet:w-full laptop:w-2/5 tablet:mx-0 mx-auto w-full h-full grid place-items-center laptop:pr-20">
          <div className="flex w-full flex-col rounded-xl bg-white p-10 shadow-xl">
            <h2 className="mb-5 text-left text-2xl font-bold text-gray-800">
              Login your Account.
            </h2>
            <form className="mt-10 flex flex-col gap-6">
              <Field.Textbox
                label="Email Address"
                name="email"
                required={true}
                onChange={setFields}
              />

              <Field.Textbox
                label="Password"
                name="middleName"
                required={true}
                onChange={setFields}
              />
              <div id="button" className="my-5 flex w-full flex-col">
                <button
                  type="button"
                  className="w-full rounded-laptop bg-brand py-4 text-green-100 transition-colors duration-300 hover:bg-brand hover:opacity-fade focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50">
                  <div className="flex flex-row items-center justify-center gap-3">
                    <ArrowLeftOnRectangleIcon className="w-6 h-6 text-white"/>
                    <div className="font-bold">Sign In</div>
                  </div>
                </button>

                <Link href="/signin">
                  <span className="w-full text-center font-medium text-gray-500">
                    {" "}
                    Don't have an account yet?
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserLogin;
