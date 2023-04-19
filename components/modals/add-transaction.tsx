"use client";
import { useState } from "react";
import Modal from ".";
import Button from "../elements/button/button";
import Field from "../elements/field";
import SuccessfulModal from "./sucessful";

const AddTransaction = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [fields, setFields] = useState({
    documentId: "",
    userId: "",
  });

  const [openSuccessfulModal, setOpenSuccessfulModal] = useState(false);

  const handleAddTransaction = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/add-transaction", {
        method: "POST",
        body: JSON.stringify({
          documentId: fields.documentId,
          userId: fields.userId,
        }),
      });
      if (response.status === 201) {
        setOpenAddModal(false);
        setOpenSuccessfulModal(true);
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
            <span className="text-lg font-semibold">
              Add a new transaction manually
            </span>
            <span className="text-sm font-light opacity-50">
              Provide necessary details to add new transaction
            </span>
          </div>

          <form className="grid gap-6">
            <Field.Textbox
              type="text"
              label="Document ID"
              name="documentId"
              onChange={setFields}
            />

            <Field.Textbox
              type="text"
              label="User ID"
              name="userId"
              onChange={setFields}
            />

            <Button
              name="Create New Transaction"
              fill
              handler={(event:any) => handleAddTransaction(event)}
            />
          </form>
        </div>
      </Modal>

      {openSuccessfulModal ? (
        <SuccessfulModal
          onClose={() => setOpenSuccessfulModal(false)}
          handler={() => setOpenSuccessfulModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully added a transaction manually!
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
    </>
  );
};

export default AddTransaction;
