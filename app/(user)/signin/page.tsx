"use client";

import {
  ArrowLeftOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
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

      <div className="flex h-screen items-center justify-center">
        <div className="mx-auto grid h-full w-full place-items-center tablet:mx-0 tablet:w-full laptop:w-2/5 laptop:pr-20">
          <div className="flex w-full flex-col rounded-xl bg-white p-10 shadow-xl">
            <h2 className="mb-5 text-2xl font-bold text-gray-800 text-center">
              Login to your Account
            </h2>
            <form className="mt-5 flex flex-col gap-6">
              <Field.Textbox
                label="Email Address"
                name="email"
                required={true}
                onChange={setFields}
              />

              <Field.Textbox
                label="Password"
                name="password"
                type="password"
                required={true}
                onChange={setFields}
              />
              <div id="button" className="my-5 flex w-full flex-col">
                <button
                  type="button"
                  className="rounded-md w-full bg-brand py-4 text-green-100 transition-colors duration-300 hover:bg-brand hover:opacity-fade focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50">
                  <div className="flex flex-row items-center justify-center gap-3">
                    <ArrowLeftOnRectangleIcon className="h-6 w-6 text-white" />
                    <div className="font-bold">Sign In</div>
                  </div>
                </button>

                <Link href="/signup">
                  <div className="relative mt-10 h-px bg-gray-300">
                    <div className="absolute left-0 top-0 -mt-2 flex w-full justify-center">
                      <span className="bg-white px-4 text-xs uppercase text-gray-400">
                        Don't have an account yet?
                      </span>
                    </div>
                  </div>
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
