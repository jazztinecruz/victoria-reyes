"use client";
import { useState } from "react";
import Modal from ".";
import Button from "../elements/button/button";
import Field from "../elements/field";
import SuccessfulModal from "./sucessful";

const AddSignatory = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [fields, setFields] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const [openSuccessfulModal, setOpenSuccessfulModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddSignatory = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      if (!fields.firstName || !fields.middleName || !fields.lastName) {
        setOpenErrorModal(true);
        setErrorMessage(
          "Please fill up the required fields with exclamation mark."
        );
        return;
      }
      const response = await fetch("/api/add-signatory", {
        method: "POST",
        body: JSON.stringify({
          firstName: fields.firstName,
          middleName: fields.middleName,
          lastName: fields.lastName,
        }),
      });
      if (response.status === 201) {
        setOpenAddModal(false);
        setOpenSuccessfulModal(true);
      }
      if (response.status !== 201) {
        const errorMessage = await response.json();
        setOpenErrorModal(true);
        setErrorMessage(errorMessage.message);
      }
    } catch (error) {
      console.log(error);
    }
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
            <span className="text-lg font-semibold">Add a new signatory</span>
            <span className="text-sm font-light opacity-50">
              Provide necessary details to add new Barangay &apos;s Signatory.
            </span>
          </div>

          <form className="grid gap-6">
            <Field.Textbox
              type="text"
              label="First Name"
              name="firstName"
              required
              onChange={setFields}
            />

            <Field.Textbox
              type="text"
              label="Middle Name"
              name="middleName"
              required
              onChange={setFields}
            />

            <Field.Textbox
              type="text"
              label="Last Name"
              name="lastName"
              required
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

      {openSuccessfulModal ? (
        <SuccessfulModal
          onClose={() => setOpenSuccessfulModal(false)}
          handler={() => setOpenSuccessfulModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully added a signatory!
          </span>

          <div className="z-50">
            <Button
              name="Go Back"
              fill
              handler={() => setOpenSuccessfulModal(false)}
            />
          </div>
        </SuccessfulModal>
      ) : null}

      {openErrorModal ? (
        <Modal
          open={openErrorModal === true ? true : false}
          onClose={() => setOpenErrorModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            {errorMessage}
          </span>

          <div className="z-50">
            <Button
              name="Go Back"
              fill
              handler={() => setOpenErrorModal(false)}
            />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default AddSignatory;
