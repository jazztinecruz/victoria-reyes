"use client";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Gender } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";
import Button from "../../../../components/elements/button/button";
import Field from "../../../../components/elements/field";
import ErrorModal from "../../../../components/modals/error";
import SuccessfulModal from "../../../../components/modals/sucessful";
import api, { SignupFields } from "../../../../library/api";

const Form = () => {
  const [fields, setFields] = useState<SignupFields>({
    givenName: "",
    middleName: "",
    familyName: "",
    fullAddress: "",
    gender: Gender.MALE,
    birthdate: "January 14, 1964",
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
  const [errorMessage, setErrorMessage] = useState("");
  const [errorModal, setErrorModal] = useState(false);

  const handleSubmit = async () => {
    const phoneNumberRegex = /^\d{11}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const requiredFields = [
      "givenName",
      "middleName",
      "familyName",
      "fullAddress",
      "birthplace",
      "phone",
      "email",
      "password",
      "occupation",
    ];

    //@ts-ignore
    const missingFields = requiredFields.filter((field) => !fields[field]);

    if (missingFields.length > 0) {
      setErrorMessage(
        `Please fill out the following required fields with exlamation mark.`
      );
      setErrorModal(!errorModal);
    } else if (fields.password.length < 5) {
      setErrorMessage("Password must contain more than 5 characters.");
      setErrorModal(true);
    } else if (!phoneNumberRegex.test(fields.phone)) {
      setErrorMessage("Phone Number must contain 11 numbers.");
      setErrorModal(true);
    } else if (!emailRegex.test(fields.email)) {
      setErrorMessage("Email Address must contain a valid email.");
      setErrorModal(true);
    } else {
      const response = await api.signup(fields);
      if (response.status !== 200) {
        setErrorMessage(response.data.message);
        setErrorModal(!errorModal);
      }
      if (response.status === 200) setSuccessfulModal(!sucessfulModal);
    }
  };
  return (
    <>
      <form className="mt-10 flex flex-col gap-6 tablet:grid tablet:grid-cols-2">
        <Field.Textbox
          label="First Name"
          name="givenName"
          required
          onChange={setFields}
        />

        <Field.Textbox
          label="Middle Name"
          name="middleName"
          required
          onChange={setFields}
        />

        <Field.Textbox
          label="Last Name"
          name="familyName"
          required
          onChange={setFields}
        />

        <Field.Textbox
          label="Birthplace"
          name="birthplace"
          required
          onChange={setFields}
        />

        <Field.Textbox
          type="date"
          label="Birthdate"
          name="birthdate"
          onChange={setFields}
        />

        <Field.Textbox
          type="text"
          label="Full Adress"
          name="fullAddress"
          required
          onChange={setFields}
        />

        <Field.Textbox
          label="Phone Number"
          name="phone"
          required
          onChange={setFields}
        />

        <Field.Textbox
          label="Email Address"
          name="email"
          required
          onChange={setFields}
        />

        <Field.Textbox
          label="Password"
          name="password"
          required
          onChange={setFields}
        />

        <Field.Textbox
          label="Occupation"
          name="occupation"
          required
          onChange={setFields}
        />

        <Field.File />
        <div className="flex items-center gap-10">
          <Field.Checkbox
            label="Are you a voter?"
            name="voter"
            onChange={setFields}
          />

          <Field.Checkbox
            label="Are you a homeowner?"
            name="homeowner"
            onChange={setFields}
          />
        </div>

        <button
          onClick={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
          className="mt-10 flex w-full transform items-center justify-between rounded-md bg-brand px-6 py-5 text-sm capitalize tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50 hover:bg-brand hover:opacity-fade">
          <span className="text-md">Create my Account</span>

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
          <div className="z-50 flex cursor-pointer items-center gap-4">
            <Button
              name="Go Back"
              handler={() => setSuccessfulModal(!sucessfulModal)}
            />
            <Link href="/signin">
              <Button name="Login my Account" fill />
            </Link>
          </div>
        </SuccessfulModal>
      )}

      {errorModal && (
        <ErrorModal
          onClose={() => setErrorModal(!errorModal)}
          handler={() => setErrorModal(!errorModal)}
          errorMessage={errorMessage}
        />
      )}
    </>
  );
};

export default Form;
