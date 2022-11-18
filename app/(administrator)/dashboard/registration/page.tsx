"use client";

import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Gender } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../../../../components/elements/button/button";
import Field from "../../../../components/elements/field";
import Modal from "../../../../components/elements/modal";
import { SignupFields } from "../../../../library/api";

const RegistrationPage = () => {
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
    <section className="relative flex gap-10 dark:bg-gray-900">
      <form className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
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
          label="Full Address"
          name="adress"
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

        <Field.File/>

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
          className="mt-10 flex w-full transform items-center justify-between rounded-md bg-brand px-6 py-5 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-brand hover:opacity-fade focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50">
          <span className="text-md">Create Account</span>

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
              <Button name="Login my account" />
            </Link>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default RegistrationPage;
