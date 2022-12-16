"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Gender, Household, Relationship } from "@prisma/client";
import { useState } from "react";
import Field from "../field";
import UniqueHousehold from "./household";

const Households = () => {
  const initialHouseholdValues = {
    givenName: "",
    middleName: "",
    familyName: "",
    gender: Gender.MALE,
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

  const [household, setHousehold] = useState<Household>(initialHouseholdValues);
  const [households, setHouseholds] = useState<Household[]>([]);

  return (
    <div className="mt-4">
      <span className="font-semibold">Add your Households</span>
      <div className="grid">
        <div className="mt-10 grid grid-cols-1 gap-6 rounded-md border-2 p-4 tablet:grid-cols-2">
          <Field.Textbox
            label="First Name"
            name="givenName"
            required={true}
            onChange={setHousehold}
            value={household.givenName}
          />

          <Field.Textbox
            label="Middle Name"
            name="middleName"
            required={true}
            onChange={setHousehold}
            value={household.middleName}
          />

          <Field.Textbox
            label="Last Name"
            name="familyName"
            required={true}
            onChange={setHousehold}
            value={household.familyName}
          />

          <Field.Textbox
            label="Birthplace"
            name="birthplace"
            required={true}
            onChange={setHousehold}
            value={household.birthplace}
          />

          <Field.Textbox
            type="date"
            label="Birthdate"
            name="birthdate"
            required={true}
            onChange={setHousehold}
            value={household.birthdate}
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
                  value={Gender.MALE}
                  onClick={() =>
                    setHousehold({ ...household, gender: Gender.MALE })
                  }
                />
              </div>
              <div className="flex items-center gap-4">
                <span>Female</span>
                <input
                  type="radio"
                  name="gender"
                  className="radio-success radio"
                  value={Gender.MALE}
                  onClick={() =>
                    setHousehold({ ...household, gender: Gender.FEMALE })
                  }
                />
              </div>
            </div>
          </div>

          <Field.Textbox
            label="Phone Number"
            name="phone"
            required={true}
            onChange={setHousehold}
            value={household.phone}
          />

          <Field.Textbox
            label="Occupation"
            name="occupation"
            required={true}
            onChange={setHousehold}
            value={household.occupation}
          />

          <Field.Textbox
            label="Relationship"
            name="relationship"
            required={true}
            onChange={setHousehold}
            value={household.relationship}
          />
        </div>

        <div className="ml-auto">
          <button
            onClick={(event: any) => {
              event.preventDefault();
              console.log(households);
              setHouseholds([...households, household]);
              // setHousehold(initialHouseholdValues);
            }}
            className="mt-10 flex w-full transform items-center justify-between gap-4 rounded-md bg-brand px-6 py-5 text-sm capitalize tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-brand focus:ring-opacity-50 hover:bg-brand hover:opacity-fade">
            Add Household
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span>
          All Households{" "}
          <span className="font-semibold">({households.length}) </span>
          <br/>
          <span className="text-black/50 text-sm">(Please check (✓) the head of the family)</span>
        </span>
        {households.map((household) => (
          <UniqueHousehold
            key={household.id}
            household={household}
            setHouseholds={setHouseholds}
          />
        ))}
      </div>
    </div>
  );
};

export default Households;
