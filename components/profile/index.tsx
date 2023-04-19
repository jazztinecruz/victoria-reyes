"use client";

import { Household, User } from "@prisma/client";
import { useState } from "react";
import EditProfile from "./edit";
import Button from "../elements/button/button";
import Field from "../elements/field";
import Households from "./households";
import moment from "moment";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

type Props = {
  user: User & { households: Household[] };
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
          {/* resident email*/}
          <span className="text-sm">{user.email}</span>
        </div>
        <Button
          name="Edit Profile"
          handler={() => setopenEditModal(!openEditModal)}
          fill
        />
        {/* if the user is verified */}
        {user?.verified ? (
          <div className="flex items-center gap-2">
            <CheckBadgeIcon className="h-6 w-6 text-brand" />
            <span className="text-sm font-bold text-brand">
              Account Verified
            </span>
          </div>
        ) : null}
      </div>

      <span className="font-semibold">Personal Information</span>
      <form className="grid w-full grid-flow-row  gap-6 border-black tablet:grid-cols-2">
        <Field.Textbox
          label="First Name"
          name="givenName"
          onChange={() => {}}
          defaultValue={user.givenName}
          readOnly
        />

        <Field.Textbox
          label="Middle Name"
          name="middleName"
          onChange={() => {}}
          defaultValue={`${user.middleName ? user.middleName : null}`}
          readOnly
        />

        <Field.Textbox
          label="Last Name"
          name="familyName"
          onChange={() => {}}
          defaultValue={user.familyName}
          readOnly
        />

        <Field.Textbox
          label="Full Address"
          name="fullAddress"
          onChange={() => {}}
          defaultValue={user.fullAddress}
          readOnly
        />

        <Field.Textbox
          label="Birthdate"
          name="birthdate"
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
          onChange={() => {}}
          defaultValue={`${user.birthplace ? user.birthplace : null}`}
          readOnly
        />

        <Field.Textbox
          label="Phone Number"
          name="phone"
          onChange={() => {}}
          defaultValue={user.phone}
          readOnly
        />

        <Field.Textbox
          label="Email Address"
          name="email"
          onChange={() => {}}
          defaultValue={user.email}
          readOnly
        />

        <Field.Textbox
          label="Occupation"
          name="occupation"
          onChange={() => {}}
          defaultValue={user.occupation}
          readOnly
        />

        <Field.Textbox
          label="Gender"
          name="gender"
          onChange={() => {}}
          defaultValue={user.gender}
          readOnly
        />

        <div className="flex items-center gap-10">
          <Field.Checkbox
            label="Voter"
            name="voter"
            onChange={() => {}}
            checked={user.voter}
          />

          <Field.Checkbox
            label="Homeowner"
            name="homeowner"
            onChange={() => {}}
            checked={user.homeowner}
          />
        </div>
      </form>

      <Households userId={user.id} households={user.households} />

      {/* modal for edit enabled */}
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
