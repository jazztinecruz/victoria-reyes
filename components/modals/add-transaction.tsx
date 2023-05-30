"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Modal from ".";
import Button from "../elements/button/button";
import Field from "../elements/field";
import SuccessfulModal from "./sucessful";

const AddTransaction = () => {
  const userId = useParams();
  const adminId = userId;

  const [openAddModal, setOpenAddModal] = useState(false);
  const [fields, setFields] = useState({
    documentId: "",
    userId: "",
  });

  const [openSuccessfulModal, setOpenSuccessfulModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
          adminId: adminId?.userId,
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
          name="Add Transaction"
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
              label="Resident ID"
              name="userId"
              onChange={setFields}
            />

            <div className="flex flex-col gap-1">
              <div className="block text-sm text-gray-600 dark:text-gray-200">
                Admin ID
              </div>
              <input
                className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-brand/75 focus:outline-none focus:ring focus:ring-brand/75 focus:ring-opacity-40  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600"
                value={adminId?.userId}
                readOnly
              />
            </div>
            <Button
              name="Create New Transaction"
              fill
              handler={(event: any) => handleAddTransaction(event)}
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

export default AddTransaction;
