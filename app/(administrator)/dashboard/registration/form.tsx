"use client";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Gender } from "@prisma/client";
import { useState } from "react";
import Button from "../../../../components/elements/button/button";
import Field from "../../../../components/elements/field";
import SuccessfulModal from "../../../../components/elements/modal/sucessful";
import { SignupFields } from "../../../../library/api";

const Form = () => {
  const [sucessfulModal, setSuccessfulModal] = useState(false);
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
          onClick={() => setSuccessfulModal(!sucessfulModal)}
          className="mt-10 flex w-full transform items-center justify-between rounded-md bg-brand px-6 py-5 text-sm capitalize tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50 hover:bg-brand hover:opacity-fade">
          <span className="text-md">Create Account</span>

          <ChevronRightIcon className="h-5 w-5 text-white" />
        </button>
      </form>

      {sucessfulModal && (
        <SuccessfulModal
          onClose={() => setSuccessfulModal(!sucessfulModal)}
          handler={() => {
            setSuccessfulModal(false);
          }}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You've succesfully created an account!
          </span>
          <span className="text-gray mb-4">
            You can now provide their account credentials
          </span>
          <div className="z-50 cursor-pointer">
            <Button
              name="Go Back"
              handler={() => setSuccessfulModal(!sucessfulModal)}
            />
          </div>
        </SuccessfulModal>
      )}
    </>
  );
};

export default Form;
