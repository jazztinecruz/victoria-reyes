"use client";

import { Listbox } from "@headlessui/react";
import { Gender, Household, Relationship } from "@prisma/client";
import { useState } from "react";
import SuccessfulModal from "../../modals/sucessful";
import Button from "../button/button";
import Field from "../field";
import UniqueHousehold from "./household";

interface Props {
  userId: string;
  households: [];
}
const Households = ({ userId, households }: Props) => {
  const initialHouseholdValues = {
    givenName: "",
    middleName: "",
    familyName: "",
    gender: Gender.FEMALE,
    birthdate: new Date(),
    birthplace: "",
    phone: "",
    occupation: "",
    relationship: Relationship.SON,
    id: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "",
  };

  const relationshipOptions = [
    "FATHER",
    "MOTHER",
    "SON",
    "DAUGHTER",
    "HUSBAND",
    "WIFE",
    "BROTHER",
    "SISTER",
    "GRANDFATHER",
    "GRANDMOTHER",
    "GRANDSON",
    "GRANDDAUGHTER",
    "UNCLE",
    "AUNT",
    "NEWPHEW",
    "NIECE",
    "COUSIN",
    "BOYFRIEND",
    "GIRLFRIEND",
    "OTHERS",
  ];

  const [fields, setFields] = useState(initialHouseholdValues);
  const [openModal, setOpenModal] = useState(false);

  const handleAddHousehold = async () => {
    try {
      const response = await fetch("/api/add-household", {
        method: "POST",
        body: JSON.stringify({
          givenName: fields.givenName,
          middleName: fields.middleName,
          familyName: fields.familyName,
          gender: fields.gender,
          birthdate: new Date(fields.birthdate),
          birthplace: fields.birthplace,
          phone: fields.phone,
          occupation: fields.occupation,
          relationship: fields.relationship,
          userId: userId,
        }),
      });
      if (response.status === 200) {
        setOpenModal(true);
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <div className="mt-4">
      <span className="font-semibold">Add your Households</span>
      <div className="grid">
        <div className="mt-10 grid grid-cols-1 gap-6 rounded-md border-2 p-4 tablet:grid-cols-2">
          <Field.Textbox
            label="First Name"
            name="givenName"
            onChange={setFields}
          />

          <Field.Textbox
            label="Middle Name"
            name="middleName"
            onChange={setFields}
          />

          <Field.Textbox
            label="Last Name"
            name="familyName"
            onChange={setFields}
          />

          <Field.Textbox
            label="Birthplace"
            name="birthplace"
            onChange={setFields}
          />

          <Field.Textbox
            type="date"
            label="Birthdate"
            name="birthdate"
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
                  //@ts-ignore
                  onChange={() => setFields({ ...fields, gender: Gender.MALE })}
                />
              </div>
              <div className="flex items-center gap-4">
                <span>Female</span>
                <input
                  type="radio"
                  name="gender"
                  className="radio-success radio"
                  onChange={() =>
                    setFields({ ...fields, gender: Gender.FEMALE })
                  }
                />
              </div>
            </div>
          </div>

          <Field.Textbox
            label="Phone Number"
            name="phone"
            onChange={setFields}
          />

          <Field.Textbox
            label="Occupation"
            name="occupation"
            onChange={setFields}
          />

          <Listbox>
            <div className="relative">
              <Listbox.Button className="focus:shadow-outline-blue sm:text-sm relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none">
                <span className="block truncate">{fields.relationship}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor">
                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                  </svg>
                </span>
              </Listbox.Button>
              <Listbox.Options className="sm:text-sm absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {relationshipOptions.map((option) => (
                  <Listbox.Option key={option} value={option}>
                    <div
                      className="cursor-pointer p-2 hover:bg-slate-100"
                      onClick={() =>
                        setFields({
                          ...fields,
                          //@ts-ignore
                          relationship: option,
                        })
                      }>
                      {option}
                    </div>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        <div className="ml-auto">
          <button
            onClick={handleAddHousehold}
            className="mt-10 flex w-full transform items-center justify-between gap-4 rounded-md bg-brand px-6 py-5 text-sm capitalize tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50 hover:bg-brand hover:opacity-fade">
            Add Household
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span>
          All Households
          <span className="text-lg font-semibold"> ({households.length})</span>
          <br />
          <span className="text-sm text-black/50 ">
            (Please check (✓) the head of the family)
          </span>
          <div className="mt-3 flex flex-col gap-3">
            {households.map((household: Household) => (
              <UniqueHousehold
                key={household.id}
                household={household}
                userId={userId}
              />
            ))}
          </div>
        </span>
      </div>

      {openModal ? (
        <SuccessfulModal
          onClose={() => setOpenModal(false)}
          handler={() => setOpenModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully added your household!
          </span>
          <span className="text-gray">
            You can add more above and select who is the head.
          </span>
          <div className="z-50">
            <Button name="Go Back" fill handler={() => setOpenModal(false)} />
          </div>
        </SuccessfulModal>
      ) : null}
    </div>
  );
};

export default Households;
