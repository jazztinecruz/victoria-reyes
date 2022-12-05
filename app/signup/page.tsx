"use client";

import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Gender } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../../components/elements/button/button";
import Field from "../../components/elements/field";
import Modal from "../../components/elements/modal";
import api, { SignupFields } from "../../library/api";

const SignUp = () => {
  const [fields, setFields] = useState<SignupFields>({
    givenName: "",
    middleName: "",
    familyName: "",
    address: {
      street: "Sample Street",
    },
    gender: Gender.MALE,
    birthdate: "September 22, 1999",
    birthplace: "",
    phone: "+639951935710",
    email: "",
    password: "",
    voter: false,
    homeowner: false,
    occupation: "",
    households: [
      {
        givenName: "Jazztine",
        middleName: "Hernandez",
        familyName: "Cruz",
        gender: "FEMALE",
        birthdate: "September 16, 2021",
        birthplace: "Makati City",
        phone: "+639951935710",
        occupation: "PROGRAMMER",
        relationship: "GIRLFRIEND",
      },
      {
        givenName: "George",
        middleName: "",
        familyName: "Abucejo",
        gender: "FEMALE",
        birthdate: "September 16, 2021",
        birthplace: "Makati City",
        phone: "+639951935710",
        occupation: "PROGRAMMER",
        relationship: "SON",
      },
    ],
  });

  const [sucessfulModal, setSuccessfulModal] = useState(false);

  const handleSubmit = async () => {
    const response = await api.signup(fields);
    console.log(response);
  };

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
                name="familyName"
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
                label="Password"
                name="password"
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

              <Field.File />

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
                onClick={(event) => {
                  event.preventDefault();
                  setSuccessfulModal(!sucessfulModal);
                  handleSubmit();
                }}
                className="mt-10 flex w-full transform items-center justify-between rounded-md bg-brand px-6 py-5 text-sm capitalize tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50 hover:bg-brand hover:opacity-fade">
                <span className="text-md">Create my Account</span>

                <ChevronRightIcon className="h-5 w-5 text-white" />
              </button>
            </form>

            {sucessfulModal && (
              <Modal
                size="medium"
                as="div"
                open
                onClose={() => setSuccessfulModal(!sucessfulModal)}>
                <div className="flex flex-col items-center justify-center gap-5 text-center">
                  <div className="absolute top-0 bottom-0 left-0 right-0 z-50 h-full w-full">
                    <Image
                      alt="login secure illustration"
                      src="/images/confetti.webp"
                      fill={true}
                      className="-z-50 h-auto w-full object-cover"
                    />
                  </div>
                  <span className="mt-5 text-xl font-semibold text-brand">
                    You've succesfully created your account!
                  </span>
                  <span className="text-gray mb-4">
                    Ready to login your account for the first time?
                  </span>

                  <Link href="/signin">
                    Login my account
                    {/* <Button name="Login my account" /> */}
                  </Link>
                </div>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
