"use client";
import { useState } from "react";
import SuccessfulModal from "../modals/sucessful";
import Button from "../elements/button/button";
import Modal from ".";

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
        <Modal
          size="medium"
          as="div"
          open
          onClose={() => setOpenConfirmationModal(false)}>
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <span className="mt-5 text-xl font-semibold text-brand">
              Are you sure you want to request this document?
            </span>
            <span className="text-gray mb-4 text-sm">
              <span>
                Please prepare <span className="font-semibold">{price}.00</span>{" "}
                upon claiming.
              </span>
              <br></br>
              <br></br>
              <span className="font-semibold">Note:</span> You can only request
              a document from <span className="font-semibold">8:00 am</span> to
              <span className="font-semibold"> 11:00 am</span>. All documents
              that are requested after the desginated time will be process
              tomorrow.
            </span>
            <Button
              handler={() => {
                handleRequestDocument();
                setOpenConfirmationModal(false);
              }}
              name="Request"
              fill
            />
          </div>
        </Modal>
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
