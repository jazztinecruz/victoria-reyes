import React, { useState } from "react";
import { SignupFields } from "../library/api";
import { Gender } from "@prisma/client";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Modal from "./elements/modal";
import Field from "./elements/field";
import Image from "next/image";
import Link from "next/link";
import Button from "./elements/button/button";

type Props = {
  handler: any
}

const EditProfile = ({handler}:Props) => {
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
    <Modal
      size="large"
      as="div"
      open
      onClose={handler}>
      <div className="mx-auto flex w-full max-w-5xl items-center p-8 laptop:px-12">
        <div className="w-full">
          <h1 className="text-xl font-semibold capitalize tracking-wider text-gray-800 dark:text-white laptop:text-2xl">
            Edit My Profile Account
          </h1>

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

            <div></div>
            <div></div>

            <button
              onClick={() => setSuccessfulModal(!sucessfulModal)}
              className="mt-10  flex w-full transform items-center justify-between rounded-md bg-brand px-6 py-5 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-brand hover:opacity-fade focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50">
              <span className="text-md">Update my Account</span>

              <ChevronRightIcon className="h-5 w-5 text-white" />
            </button>
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
                    You have succesfully updated your account!
                  </span>
                  <Button name="Go Back" handler={handler}/>
                </div>
              </Modal>
            )}
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfile;
