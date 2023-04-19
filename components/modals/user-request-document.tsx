"use client";
import { useState } from "react";
import ConfirmedDocumentrequest from "./confirmed-request";
import SuccessfulModal from "../modals/sucessful";
import Button from "../elements/button/button";

interface Props {
  userId: string;
  documentId: string;
  price: number;
}

const UserRequestDocumentButton = ({ userId, documentId, price }: Props) => {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openSuccessfulModal, setOpenSuccessfulModal] = useState(false);

  const handleRequestDocument = async () => {
    try {
      const response = await fetch("/api/request-document", {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          documentId: documentId,
        }),
      });
      if (response.status === 201) setOpenSuccessfulModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpenConfirmationModal(true)}
        className="btn-primary btn border-none bg-brand hover:btn-ghost">
        Request
      </button>

      {openConfirmationModal && (
        <ConfirmedDocumentrequest
          price={price}
          onClose={() => setOpenConfirmationModal(!openConfirmationModal)}
          handler={() => {
            handleRequestDocument();
            setOpenConfirmationModal(false);
          }}
        />
      )}

      {openSuccessfulModal ? (
        <SuccessfulModal
          onClose={() => setOpenSuccessfulModal(false)}
          handler={() => setOpenSuccessfulModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully requested a document!
          </span>
          <span className="text-gray">
            You can see its status on your Document Status.
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

export default UserRequestDocumentButton;
