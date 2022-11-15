"use client";

import { Gender } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";
import Button from "../../../components/elements/button/button";
import Field from "../../../components/elements/field";
import { SignupFields } from "../../../library/api";

const Profile = () => {
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
            <Link href="/profile/edit">
              <Button name="Edit Profile" />
            </Link>
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
    </div>
  );
};

export default Profile;
