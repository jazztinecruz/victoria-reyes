"use client";

import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Gender } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../../components/elements/button/button";
import Field from "../../components/elements/field";
import Modal from "../../components/elements/modal";
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

  const [sucessfulModal, setSuccessfulModal] = useState(false);

  return (
    <section className="relative bg-white dark:bg-gray-900">
      {/* close button */}
      <Link href="/">
        <XMarkIcon className="absolute right-10 top-4 h-6 w-6 cursor-pointer hover:animate-spin" />
      </Link>

      <div className="flex min-h-screen justify-center gap-10">
        <div className="m-auto hidden laptop:block laptop:w-2/5">
          <div className="relative mx-auto h-[500px] w-full laptop:w-[530px]">
            <Image
              alt="login secure illustration"
              src="/images/features/feat1.png"
              fill={true}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-5xl items-center p-8 laptop:px-12">
          <div className="w-full">
            <h1 className="text-2xl font-semibold capitalize tracking-wider text-gray-800 dark:text-white laptop:text-3xl">
              Get your free account now.
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your account and begin
              requesting your barangay documents.
            </p>

            <form className="mt-10 grid grid-cols-1 gap-6 tablet:grid-cols-2">
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
                label="Birthplace"
                name="birthplace"
                required={true}
                onChange={setFields}
              />

              <Field.Textbox
                label="Phone Number"
                name="phone"
                required={true}
                onChange={setFields}
              />

              <Field.Textbox
                label="Email Address"
                name="email"
                required={true}
                onChange={setFields}
              />

              <Field.Textbox
                label="Occupation"
                name="occupation"
                required={true}
                onChange={setFields}
              />

              {/* gender */}
              <div className="flex flex-col gap-4">
                <span className="block text-sm text-gray-600 dark:text-gray-200">
                  Choose your Gender
                </span>
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-4">
                    <span>Male</span>
                    <input
                      type="radio"
                      name="gender"
                      className="radio-success radio"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <span>Female</span>
                    <input
                      type="radio"
                      name="gender"
                      className="radio-success radio"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <Field.Checkbox
                  label="Are you a voter?"
                  name="voter"
                  required={true}
                  onChange={setFields}
                />

                <Field.Checkbox
                  label="Are you a homeowner?"
                  name="homeowner"
                  required={true}
                  onChange={setFields}
                />
              </div>

              <button
                onClick={() => setSuccessfulModal(!sucessfulModal)}
                className="rounded-tablet mt-10 flex w-full transform items-center justify-between bg-brand px-6 py-3 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-brand hover:opacity-fade focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50">
                <span>Sign Up </span>

                <ChevronRightIcon className="h-5 w-5 text-white" />
              </button>

              {sucessfulModal && (
                <Modal
                  size="medium"
                  as="div"
                  open
                  onClose={() => setSuccessfulModal(!sucessfulModal)}>
                  <div className="flex flex-col items-center justify-center gap-5 text-center">
                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full z-50">
                      <Image
                        alt="login secure illustration"
                        src="/images/confetti.webp"
                        fill={true}
                        className="h-auto w-full object-cover -z-50"
                      />
                    </div>
                    <span className="mt-5 text-xl font-semibold text-brand">
                      You've succesfully created your account!
                    </span>
                    <span className="text-gray mb-4">
                      Ready to login your account for the first time?
                    </span>

                    <Button name="Login my account" />
                  </div>
                </Modal>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
