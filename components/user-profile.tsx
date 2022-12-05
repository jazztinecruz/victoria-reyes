"use client";

import { Gender, User } from "@prisma/client";
import { useState } from "react";
import { SignupFields } from "../library/api";
import EditProfile from "./edit-profile";
import Button from "./elements/button/button";
import Field from "./elements/field";

type Props = {
  user: User;
};

const Profile = ({ user }: Props) => {
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
    <div className="flex w-full flex-col">
      <div className="card rounded-box flex h-full w-full flex-col">
        {/* profile info */}
        <div className="flex items-center gap-6 px-10 laptop:ml-[470px]">
          <div className="h-32 w-32 rounded-full bg-slate-400"></div>
          <div className="flex flex-col items-start gap-6 text-left tablet:flex-row">
            <div className="flex flex-col gap-2">
              <span className="text-lg tracking-wide">
                {user.givenName} {user.familyName}
              </span>
              {/* resident id */}
              <span className="text-sm">{user.email}</span>
            </div>
            <Button
              name="Edit Profile"
              handler={() => setopenEditModal(!openEditModal)}
            />
          </div>
        </div>
      </div>

      <div className="card rounded-box grid  h-full flex-grow place-items-center">
        <form className="mt-10 grid grid-flow-row w-full laptop:w-[900px]  gap-6 tablet:grid-cols-2 border-black">
          <Field.Textbox
            label="First Name"
            name="givenName"
            required={true}
            onChange={setFields}
            defaultValue={user.givenName}
            readOnly
          />

          <Field.Textbox
            label="Middle Name"
            name="middleName"
            required={true}
            onChange={setFields}
            defaultValue={`${user.middleName ? user.middleName : null}`}
            readOnly
          />

          <Field.Textbox
            label="Last Name"
            name="middleName"
            required={true}
            onChange={setFields}
            defaultValue={user.givenName}
            readOnly
          />

          <Field.Textbox
            label="Full Address"
            name="adress"
            required={true}
            onChange={setFields}
            defaultValue="Sample Full Address"
            readOnly
          />

          <Field.Textbox
            type="date"
            label="Birthdate"
            name="birthdate"
            required={true}
            onChange={setFields}
            defaultValue={`${user.birthdate ? user.birthdate : null}`}
            readOnly
          />

          <Field.Textbox
            label="Birthplace"
            name="birthplace"
            required={true}
            onChange={setFields}
            defaultValue={`${user.birthplace ? user.birthplace : null}`}
            readOnly
          />

          <Field.Textbox
            label="Phone Number"
            name="phone"
            required={true}
            onChange={setFields}
            defaultValue={user.phone}
            readOnly
          />

          <Field.Textbox
            label="Email Address"
            name="email"
            required={true}
            onChange={setFields}
            defaultValue={user.email}
            readOnly
          />

          <Field.Textbox
            label="Occupation"
            name="occupation"
            required={true}
            onChange={setFields}
            defaultValue={user.occupation}
            readOnly
          />

          <Field.Textbox
            label="Gender"
            name="gender"
            required={true}
            onChange={setFields}
            defaultValue={user.gender}
            readOnly
          />

          <div className="flex items-center gap-10">
            <Field.Checkbox
              label="Voter"
              name="voter"
              required={true}
              onChange={setFields}
              defaultChecked={user.voter}
              disabled
            />

            <Field.Checkbox
              label="Homeowner"
              name="homeowner"
              required={true}
              onChange={setFields}
              defaultChecked={user.homeowner}
              disabled
            />
          </div>
        </form>
      </div>

      {openEditModal && (
        <EditProfile user={user} handler={() => setopenEditModal(!openEditModal)} />
      )}
    </div>
  );
};

export default Profile;
