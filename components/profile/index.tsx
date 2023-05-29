"use client";

import { Household, User } from "@prisma/client";
import { use, useState } from "react";
import EditProfile from "./edit";
import Button from "../elements/button/button";
import Field from "../elements/field";
import moment from "moment";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import CreateCodeModal from "../modals/create-code";
import JoinCodeModal from "../modals/join-code";
import CopyCodeModal from "../modals/copy-code";
import database from "../../library/database";
import Image from "next/image";

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
          {user.head ? (
            <span className="text-sm font-semibold">FAMILY HEAD</span>
          ) : null}
          {user.code && !user.head ? (
            <span className="text-sm font-semibold">FAMILY MEMBER</span>
          ) : null}
        </div>
        <div className="flex items-center gap-3">
          <Button
            name="Edit Profile"
            handler={() => setopenEditModal(!openEditModal)}
            fill
          />
          {!user?.head && !user.code ? (
            <CreateCodeModal userId={user.id} />
          ) : null}
          {!user?.head && !user.code ? (
            <JoinCodeModal userId={user.id} />
          ) : null}
          {user.code ? <CopyCodeModal code={user.code} /> : null}
        </div>

        {/* if the user is verified */}
        {user?.verified ? (
          <div className="flex items-center gap-2">
            <CheckBadgeIcon className="h-6 w-6 text-brand" />
            <span className="text-sm font-bold text-brand">
              Account Verified
            </span>
          </div>
        ) : null}

        {user?.declined ? (
          <span className="text-sm font-bold text-red-500">Declined</span>
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
          label="Purok"
          name="purok"
          onChange={() => {}}
          defaultValue={user.purok}
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

        <div />

        {user.proof ? (
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-200">
              Proof of Residency
            </label>
            <Image
              src={user.proof}
              alt="proof of residence"
              width={500}
              height={500}
            />
          </div>
        ) : null}
      </form>

      {/* <Households userId={user.id} households={user.households} /> */}

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
