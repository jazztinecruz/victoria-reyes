"use client";
import { useState } from "react";
import Modal from ".";
import Button from "../button/button";
import Field from "../field";

interface Props {
  onClose: any;
  setSignatories: React.Dispatch<
    React.SetStateAction<
      {
        givenName: string;
        middleName: string;
        familyName: string;
      }[]
    >
  >;
  signatories: {
    givenName: string;
    middleName: string;
    familyName: string;
  }[];
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddSignatory = ({
  onClose,
  signatories,
  setSignatories,
  setOpenModal
}: Props) => {
  const [newSignatory, setNewSignatory] = useState({
    givenName: "",
    middleName: "",
    familyName: "",
  });

  return (
    <Modal size="medium" as="div" open onClose={onClose}>
      <div className="z-50 grid gap-6">
        <div className="flex flex-col">
          <span className="text-lg font-semibold">
            Add the newest elected Kapitan/Kapitana
          </span>
          <span className="text-sm font-light opacity-50">
            Provide necessary details to add new Barangay's Kapitan
          </span>
        </div>

        <form className="grid gap-6">
          <Field.Textbox
            type="text"
            label="Given Name"
            name="givenName"
            onChange={setNewSignatory}
          />

          <Field.Textbox
            type="text"
            label="Middle Name"
            name="middleName"
            onChange={setNewSignatory}
          />

          <Field.Textbox
            type="text"
            label="Family Name"
            name="familyName"
            onChange={setNewSignatory}
          />

          <Button
            name="Update Kapitan"
            fill
            handler={(event:any) => {
              event.preventDefault()
              setSignatories([...signatories, newSignatory]);
              setOpenModal(false)
            }}
          />
        </form>
      </div>
    </Modal>
  );
};

export default AddSignatory;
