"use client";
import { Listbox } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Gender, Household } from "@prisma/client";
import moment from "moment";
import { useState } from "react";
import SuccessfulModal from "../../modals/sucessful";
import Button from "../../elements/button/button";
import Field from "../../elements/field";

interface Props {
  household: Household;
  userId: string;
}

const UniqueHousehold = ({ household, userId }: Props) => {
  const initialHouseholdValues = {
    givenName: household.givenName,
    middleName: household.middleName,
    familyName: household.familyName,
    gender: household.gender,
    birthdate: new Date(household.birthdate),
    birthplace: household.birthplace,
    phone: household.phone,
    occupation: household.occupation,
    relationship: household.relationship,
  };

  const [fields, setFields] = useState(initialHouseholdValues);
  const [openHousehold, setOpenHousehold] = useState(false);
  const [openModal, setOpenModal] = useState({
    update: false,
    delete: false,
  });

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

  const handleEditHousehold = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/edit-household", {
        method: "PUT",
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
          householdId: household.id,
        }),
      });
      if (response.status === 200) {
        setOpenHousehold(false);
        setOpenModal({ ...openModal, update: true });
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  const handleDeleteHousehold = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/delete-household", {
        method: "DELETE",
        body: JSON.stringify({
          id: household.id,
          userId: userId,
        }),
      });
      if (response.status === 200) {
        setOpenHousehold(false);
        setOpenModal({ ...openModal, delete: true });
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <div className="relative flex items-center gap-6">
      <input type="radio" className="focus:ring-2 focus:ring-blue-500" />
      <button
        type="button"
        className="mr-auto flex justify-center rounded-md border border-gray-300 bg-brand px-6 py-5 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-100"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setOpenHousehold(!openHousehold)}>
        {household.familyName}, {household.givenName} {household.middleName}
        <ChevronRightIcon
          className={`ml-10 h-5 w-5 text-white ${
            openHousehold ? "rotate-90" : "rotate-0"
          } transition-all duration-300`}
        />
      </button>

      <div
        className={`${
          openHousehold ? "block" : "hidden"
        } absolute top-[70px] left-0 z-50 w-full rounded-md border-2 border-brand bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button">
        <form className="grid grid-cols-1 gap-6 rounded-md tablet:grid-cols-2">
          <Field.Textbox
            label="First Name"
            name="givenName"
            onChange={setFields}
            defaultValue={household.givenName}
          />
          <Field.Textbox
            label="Middle Name"
            name="middleName"
            onChange={setFields}
            defaultValue={household.middleName!}
          />

          <Field.Textbox
            label="Last Name"
            name="familyName"
            onChange={setFields}
            defaultValue={household.familyName}
          />

          <Field.Textbox
            label="Birthplace"
            name="birthplace"
            onChange={setFields}
            defaultValue={household.birthplace}
          />

          <Field.Textbox
            type="date"
            label="Birthdate"
            name="birthdate"
            onChange={setFields}
            defaultValue={moment(household.birthdate).format("LL")}
          />

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
                  defaultChecked={household.gender === "MALE" ? true : false}
                  onChange={() => setFields({ ...fields, gender: Gender.MALE })}
                />
              </div>
              <div className="flex items-center gap-4">
                <span>Female</span>
                <input
                  type="radio"
                  name="gender"
                  className="radio-success radio"
                  defaultChecked={household.gender === "FEMALE" ? true : false}
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
            defaultValue={household.phone}
          />

          <Field.Textbox
            label="Occupation"
            name="occupation"
            onChange={setFields}
            defaultValue={household.occupation}
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

          <div className="ml-auto flex items-center gap-3">
            <Button fill name="Update" handler={handleEditHousehold} />
            <Button name="Delete" handler={handleDeleteHousehold} />
          </div>
        </form>
      </div>

      {openModal.update ? (
        <SuccessfulModal
          onClose={() => setOpenModal({ ...openModal, update: false })}
          handler={() => setOpenModal({ ...openModal, update: false })}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully edited your household!
          </span>
          <span className="text-gray">
            You can edit more and select who is the head.
          </span>
          <div className="z-50">
            <Button
              name="Go Back"
              fill
              handler={() => setOpenModal({ ...openModal, update: false })}
            />
          </div>
        </SuccessfulModal>
      ) : null}

      {openModal.delete ? (
        <SuccessfulModal
          onClose={() => setOpenModal({ ...openModal, delete: false })}
          handler={() => setOpenModal({ ...openModal, delete: false })}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully deleted your household!
          </span>
          <span className="text-gray">
            You can edit more and select who is the head.
          </span>
          <div className="z-50">
            <Button
              name="Go Back"
              fill
              handler={() => setOpenModal({ ...openModal, delete: false })}
            />
          </div>
        </SuccessfulModal>
      ) : null}
    </div>
  );
};

export default UniqueHousehold;
