"use client";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Gender } from "@prisma/client";
import { useState } from "react";
import Field from "../../components/elements/field";
import { SignupFields } from "../../library/api";

const SignUp = () => {
  const [fields, setFields] = useState<SignupFields>({
    givenName: "",
    middleName: "",
    familyName: "",
    address: {
      street: "",
    },
    gender: Gender.MALE,
    birthdate: "",
    birthplace: "",
    phone: "",
    email: "",
    password: "",
    voter: false,
    homeowner: false,
    occupation: "",
    households: [],
  });

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex min-h-screen justify-center">
          <div className="lg:block lg:w-2/5 hidden bg-cover"></div>

          <div className="lg:px-12 lg:w-3/5 mx-auto flex w-full max-w-3xl items-center p-8">
            <div className="w-full">
              <h1 className="text-2xl font-semibold capitalize tracking-wider text-gray-800 dark:text-white">
                Get your free account now.
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Lets get you all set up so you can verify your personal account
                and begin requesting a barangay document.
              </p>

              {/* fields */}
              <Field.Textbox
                label="First Name"
                name="givenName"
                required={true}
                onChange={setFields}
              />

              <Field.Textbox
                label="Middle Name"
                name="middleName"
                required={true}
                onChange={setFields}
              />

              <Field.Textbox
                label="Last Name"
                name="middleName"
                required={true}
                onChange={setFields}
              />

              <Field.Textbox
                type="date"
                label="Birthdate"
                name="birthdate"
                required={true}
                onChange={setFields}
              />

              <Field.Textbox
                label="birthplace"
                name="birthplace"
                required={true}
                onChange={setFields}
              />

              <Field.Textbox
                label="phone"
                name="phone"
                required={true}
                onChange={setFields}
              />

              <Field.Textbox
                label="email"
                name="email"
                required={true}
                onChange={setFields}
              />

              <Field.Textbox
                label="occupation"
                name="occupation"
                required={true}
                onChange={setFields}
              />

              <Field.Checkbox
                label="voter"
                name="voter"
                required={true}
                onChange={setFields}
              />

              <Field.Checkbox
                label="homeowner"
                name="homeowner"
                required={true}
                onChange={setFields}
              />

              <button className="focus:ring-green-300 hover:bg-green-400 flex w-full transform items-center justify-between rounded-md bg-green px-6 py-3 text-sm capitalize tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-opacity-50 hover:opacity-fade">
                <span>Sign Up </span>

                <ChevronRightIcon className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
