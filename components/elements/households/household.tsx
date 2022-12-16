import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Household } from "@prisma/client";
import moment from "moment";
import { Dispatch, SetStateAction, useState } from "react";
import Field from "../field";

interface Props {
  household: Household;
  setHouseholds: Dispatch<SetStateAction<Household[]>>;
}

const UniqueHousehold = ({ household, setHouseholds }: Props) => {
  const [openHousehold, setOpenHousehold] = useState(false);

  return (
    <div className="relative flex items-center gap-6">
      <input type="checkbox" className="focus:ring-blue-500 focus:ring-2"/>
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
        } absolute top-20 left-0 z-50 w-full rounded-md border-2 border-brand bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button">
        <div className="grid grid-cols-1 gap-6 rounded-md tablet:grid-cols-2">
          <Field.Textbox
            label="First Name"
            name="givenName"
            required={true}
            onChange={setHouseholds}
            defaultValue={household.givenName}
          />
          <Field.Textbox
            label="Middle Name"
            name="middleName"
            required={true}
            onChange={setHouseholds}
            defaultValue={household.middleName!}
          />

          <Field.Textbox
            label="Last Name"
            name="familyName"
            required={true}
            onChange={setHouseholds}
            defaultValue={household.familyName}
          />

          <Field.Textbox
            label="Birthplace"
            name="birthplace"
            required={true}
            onChange={setHouseholds}
            defaultValue={household.birthplace}
          />

          <Field.Textbox
            type="date"
            label="Birthdate"
            name="birthdate"
            required={true}
            onChange={setHouseholds}
            defaultValue={moment(household.birthdate).format("LL")}
          />

          <Field.Textbox
            label="Gender"
            name="gender"
            required={true}
            onChange={setHouseholds}
            defaultValue={household.gender}
            readOnly
          />

          <Field.Textbox
            label="Phone Number"
            name="phone"
            required={true}
            onChange={setHouseholds}
            defaultValue={household.phone}
          />

          <Field.Textbox
            label="Occupation"
            name="occupation"
            required={true}
            onChange={setHouseholds}
            defaultValue={household.occupation}
          />

          <Field.Textbox
            label="Relationship"
            name="relationship"
            required={true}
            onChange={setHouseholds}
            defaultValue={household.relationship}
          />
        </div>
      </div>
    </div>
  );
};

export default UniqueHousehold;
