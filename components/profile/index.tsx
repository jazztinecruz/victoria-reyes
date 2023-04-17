"use client";

import { Gender, User } from "@prisma/client";
import { useState } from "react";
import EditProfile from "./edit";
import Button from "../elements/button/button";
import Field from "../elements/field";
import Households from "../elements/households";
import moment from "moment";

type Props = {
  user: User;
};

const Profile = ({ user }: Props) => {
  const [openEditModal, setopenEditModal] = useState(false);
  return (
    <div className="grid gap-10">
      {/* profile quick info */}
      <div className="flex flex-col items-start gap-6 text-left tablet:flex-row">
        <div className="flex flex-col">
          <span className="text-lg tracking-wide">
            {user.givenName} {user.familyName}
          </span>
          {/* resident id */}
          <span className="text-sm">{user.email}</span>
        </div>
        <Button
          name="Edit Profile"
          handler={() => setopenEditModal(!openEditModal)}
          fill
        />
      </div>

      <span className="font-semibold">Personal Information</span>
      <form className="grid w-full grid-flow-row  gap-6 border-black tablet:grid-cols-2">
        <Field.Textbox
          label="First Name"
          name="givenName"
          required={true}
          onChange={() => {}}
          defaultValue={user.givenName}
          readOnly
        />

        <Field.Textbox
          label="Middle Name"
          name="middleName"
          required={true}
          onChange={() => {}}
          defaultValue={`${user.middleName ? user.middleName : null}`}
          readOnly
        />

        <Field.Textbox
          label="Last Name"
          name="familyName"
          required={true}
          onChange={() => {}}
          defaultValue={user.familyName}
          readOnly
        />

        <Field.Textbox
          label="Full Address"
          name="fullAddress"
          required={true}
          onChange={() => {}}
          defaultValue={user.fullAddress}
          readOnly
        />

        <Field.Textbox
          label="Birthdate"
          name="birthdate"
          required={true}
          onChange={() => {}}
          defaultValue={`${
            moment(user.birthdate).format("LL")
              ? moment(user.birthdate).format("LL")
              : null
          }`}
          readOnly
        />

        <Field.Textbox
          label="Birthplace"
          name="birthplace"
          required={true}
          onChange={() => {}}
          defaultValue={`${user.birthplace ? user.birthplace : null}`}
          readOnly
        />

        <Field.Textbox
          label="Phone Number"
          name="phone"
          required={true}
          onChange={() => {}}
          defaultValue={user.phone}
          readOnly
        />

        <Field.Textbox
          label="Email Address"
          name="email"
          required={true}
          onChange={() => {}}
          defaultValue={user.email}
          readOnly
        />

        <Field.Textbox
          label="Occupation"
          name="occupation"
          required={true}
          onChange={() => {}}
          defaultValue={user.occupation}
          readOnly
        />

        <Field.Textbox
          label="Gender"
          name="gender"
          required={true}
          onChange={() => {}}
          defaultValue={user.gender}
          readOnly
        />

        <div className="flex items-center gap-10">
          <Field.Checkbox
            label="Voter"
            name="voter"
            onChange={() => {}}
            defaultChecked={user.voter}
            disabled
          />

          <Field.Checkbox
            label="Homeowner"
            name="homeowner"
            onChange={() => {}}
            defaultChecked={user.homeowner}
            disabled
          />
        </div>
      </form>

      <Households />
      {openEditModal && (
        <EditProfile
          user={user}
          handler={() => setopenEditModal(!openEditModal)}
        />
      )}
    </div>
  );
};

export default Profile;
