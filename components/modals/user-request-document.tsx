"use client";
import React, { useState } from "react";
import ConfirmedDocumentrequest from "./confirmed-request";
import RequestDocument from "./request-document";

interface Props {
  userId: string;
  documentId: string;
}

const UserRequestDocument = ({ userId, documentId }: Props) => {
  const [openRequestModal, setOpenRequestModal] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handleRequestDocument = async () => {
    const response = await fetch("/api/request-document", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        documentId: documentId,
      }),
    });
    if(response.status === 200) setOpenConfirmationModal(true)
  };

  return (
    <>
      <button
        onClick={() => setOpenRequestModal(!openRequestModal)}
        className="btn-primary btn border-none bg-brand hover:btn-ghost">
        Request
      </button>

      {openRequestModal && (
        <RequestDocument
          onClose={() => setOpenRequestModal(!openRequestModal)}
          backHandler={() => setOpenRequestModal(!openRequestModal)}
          continueHandler={handleRequestDocument}
        />
      )}

      {openConfirmationModal && (
        <ConfirmedDocumentrequest
          onClose={() => setOpenConfirmationModal(!openConfirmationModal)}
          handler={() => {
            setOpenConfirmationModal(!openConfirmationModal);
            setOpenRequestModal(false);
          }}
        />
      )}
    </>
  );
};

export default UserRequestDocument;
