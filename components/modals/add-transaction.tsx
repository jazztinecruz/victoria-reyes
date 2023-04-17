"use client"
import { useState } from "react";
import Modal from ".";
import Button from "../elements/button/button";
import Field from "../elements/field";

const AddTransaction = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [fields, setFields] = useState({
    documentId: "",
    userId: "",
  });

  const handleAddTransaction = async () => {
    const response = await fetch("/api/add-transaction", {
      method: "POST",
      body: JSON.stringify({
        documentId: fields.documentId,
        userId: fields.userId,
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
              handler={handleAddTransaction}
            />
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddTransaction;
