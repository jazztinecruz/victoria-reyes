"use client";
import { useState } from "react";
import Modal from ".";
import Button from "../elements/button/button";
import Field from "../elements/field";

const AddSignatory = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [fields, setFields] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const handleAddSignatory = async () => {
    const response = await fetch("/api/add-signatory", {
      method: "POST",
      body: JSON.stringify({
        firstName: fields.firstName,
        middleName: fields.middleName,
        lastName: fields.lastName,
      }),
    });
  };

  return (
    <>
      <div className="mr-auto">
        <Button
          name="Add Signatory"
          fill
          handler={() => setOpenAddModal(true)}
        />
      </div>

      <Modal
        size="medium"
        as="div"
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}>
        <div className="z-50 grid gap-6">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">
              Add a new signatory
            </span>
            <span className="text-sm font-light opacity-50">
              Provide necessary details to add new Barangay &apos;s Kapitan
            </span>
          </div>

          <form className="grid gap-6">
            <Field.Textbox
              type="text"
              label="First Name"
              name="firstName"
              onChange={setFields}
            />

            <Field.Textbox
              type="text"
              label="Middle Name"
              name="middleName"
              onChange={setFields}
            />

            <Field.Textbox
              type="text"
              label="Last Name"
              name="lastName"
              onChange={setFields}
            />

            <Button
              name="Create New Signatory"
              fill
              handler={handleAddSignatory}
            />
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddSignatory;
