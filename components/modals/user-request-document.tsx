"use client";
import React, { useState } from "react";
import ConfirmedDocumentrequest from "./confirmed-request";

interface Props {
  userId: string;
  documentId: string;
  price: number;
}

const UserRequestDocument = ({ userId, documentId, price }: Props) => {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handleRequestDocument = async () => {
    const response = await fetch("/api/request-document", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        documentId: documentId,
      }),
    });
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
    </>
  );
};

export default UserRequestDocument;
