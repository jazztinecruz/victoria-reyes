"use client";
import React, { MouseEventHandler, useState } from "react";
import { Gender, Purok, User } from "@prisma/client";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Modal from "../modals";
import Field from "../elements/field";
import moment from "moment";
import { Listbox } from "@headlessui/react";

type Props = {
  user: User;
  handler: any;
};

const EditProfile = ({ user, handler }: Props) => {
  const [fields, setFields] = useState({
    givenName: user.givenName,
    middleName: user.middleName,
    familyName: user.familyName,
    fullAddress: user.fullAddress,
    purok: user.purok,
    gender: user.gender,
    birthdate: user.birthdate,
    birthplace: user.birthplace,
    phone: user.phone,
    email: user.email,
    voter: user.voter,
    homeowner: user.homeowner,
    occupation: user.occupation,
  });

  const puroks = [
    Purok.PUROK_1,
    Purok.PUROK_2,
    Purok.PUROK_3,
    Purok.PUROK_4,
    Purok.PUROK_5,
  ];

  const handleUpdateUser = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const response = await fetch("/api/edit-profile", {
      method: "PUT",
      body: JSON.stringify({
        id: user.id,
        givenName: fields.givenName,
        middleName: fields.middleName,
        familyName: fields.familyName,
        fullAddress: fields.fullAddress,
        purok: fields.purok,
        gender: fields.gender,
        birthdate: new Date(fields.birthdate),
        birthplace: fields.birthplace,
        phone: fields.phone,
        email: fields.email,
        voter: fields.voter,
        homeowner: fields.homeowner,
        occupation: fields.occupation,
      }),
    });
  };

  return (
    <Modal size="large" as="div" open onClose={handler}>
      <div className="mx-auto flex w-full max-w-5xl items-center p-8 laptop:px-12">
        <div className="w-full">
          <h1 className="text-xl font-semibold capitalize tracking-wider text-gray-800 dark:text-white laptop:text-2xl">
            Edit My Profile Account
          </h1>
          <form className="mt-10 grid w-full grid-flow-row gap-6  border-black tablet:grid-cols-2 laptop:w-[900px]">
            <Field.Textbox
              label="First Name"
              name="givenName"
              required
              onChange={setFields}
              defaultValue={fields.givenName}
            />
            <Field.Textbox
              label="Middle Name"
              name="middleName"
              required
              onChange={setFields}
              defaultValue={`${fields.middleName ? fields.middleName : null}`}
            />
            <Field.Textbox
              label="Last Name"
              name="familyName"
              required
              onChange={setFields}
              defaultValue={fields.familyName}
            />
            <Field.Textbox
              label="Full Address"
              name="fullAddress"
              required
              onChange={setFields}
              defaultValue={fields.fullAddress}
            />

            <div className="flex flex-col">
              <label className="block text-sm text-gray-600 dark:text-gray-200">
                Select Purok
              </label>
              <Listbox>
                <Listbox.Button className="mt-2 flex w-full items-center justify-between rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-brand/75 focus:outline-none focus:ring focus:ring-brand/75 focus:ring-opacity-40  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600">
                  {fields.purok}
                  <ChevronDownIcon className="h-6 w-6" />
                </Listbox.Button>
                <Listbox.Options className="mt-2 flex flex-col rounded border bg-white">
                  {puroks.map((purok) => (
                    <Listbox.Option
                      as="button"
                      key={purok}
                      value={purok}
                      onClick={() => setFields({ ...fields, purok: purok })}
                      className="w-full cursor-pointer py-2 px-4 text-left text-sm hover:bg-slate-200">
                      {purok}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
            <Field.Textbox
              type="date"
              label="Birthdate"
              name="birthdate"
              onChange={setFields}
              defaultValue={`${fields.birthdate ? fields.birthdate : null}`}
            />
            <Field.Textbox
              label="Birthplace"
              name="birthplace"
              required
              onChange={setFields}
              defaultValue={`${fields.birthplace ? fields.birthplace : null}`}
            />
            <Field.Textbox
              label="Phone Number"
              name="phone"
              required
              onChange={setFields}
              defaultValue={fields.phone}
            />
            <Field.Textbox
              label="Email Address"
              name="email"
              required
              onChange={setFields}
              defaultValue={fields.email}
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
                    defaultChecked={fields.gender === "MALE"}
                    onChange={() => setFields({ ...fields, gender: "MALE" })}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span>Female</span>
                  <input
                    type="radio"
                    name="gender"
                    className="radio-success radio"
                    defaultChecked={fields.gender === "FEMALE"}
                    onChange={() => setFields({ ...fields, gender: "FEMALE" })}
                  />
                </div>
              </div>
            </div>
            <Field.Textbox
              label="Occupation"
              name="occupation"
              required
              onChange={setFields}
              defaultValue={fields.occupation}
            />
            {/* <Field.File /> */}
            <div className="flex items-center gap-10">
              <Field.Checkbox
                label="Are you a voter?"
                name="voter"
                onChange={setFields}
                defaultChecked={fields.voter}
              />

              <Field.Checkbox
                label="Are you a homeowner?"
                name="homeowner"
                onChange={setFields}
                defaultChecked={fields.homeowner}
              />
            </div>
            <button
              onClick={(event) => {
                handleUpdateUser(event);
                handler();
              }}
              className="mt-2 flex w-full transform items-center justify-between rounded-md bg-brand px-6 py-5 text-sm capitalize tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50 hover:bg-brand hover:opacity-fade">
              <span className="text-md">Update my Account</span>

              <ChevronRightIcon className="h-5 w-5 text-white" />
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfile;
