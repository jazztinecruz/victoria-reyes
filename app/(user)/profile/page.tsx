"use client";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Gender } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";
import Button from "../../../components/elements/button/button";
import Field from "../../../components/elements/field";
import Modal from "../../../components/elements/modal";
import { SignupFields } from "../../../library/api";

const Profile = () => {
  const [openEditModal, setopenEditModal] = useState(false);

  // should be initial values
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
    <div className="flex w-full flex-col gap-10">
      <div className="card rounded-box flex h-full w-full flex-col">
        {/* profile info */}
        <div className="flex items-center gap-6 py-4 px-10 laptop:ml-[470px]">
          <div className="h-32 w-32 rounded-full bg-slate-400"></div>
          <div className="flex flex-col items-start gap-6 text-left tablet:flex-row">
            <div className="flex flex-col gap-2">
              <span className="text-lg tracking-wide">Jazztine Cruz</span>
              {/* resident id */}
              <span className="text-sm">203148755-9374</span>
            </div>
              <Button name="Edit Profile" handler={() => setopenEditModal(!openEditModal)}/>
          </div>
        </div>
      </div>

      <div className="card rounded-box grid h-full flex-grow place-items-center">
        <form className="mt-10 grid grid-flow-row gap-6 tablet:grid-cols-2">
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
        </form>
      </div>

      {openEditModal && (
        <Modal
          size="large"
          as="div"
          open
          onClose={() => setopenEditModal(!openEditModal)}>
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

                <button
                  onClick={() => setopenEditModal(!openEditModal)}
                  className="mt-10 flex w-full transform items-center justify-between rounded-md bg-brand px-6 py-5 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-brand hover:opacity-fade focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50">
                  <span className="text-md">Update my Account</span>

                  <ChevronRightIcon className="h-5 w-5 text-white" />
                </button>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Profile;
