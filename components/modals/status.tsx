"use client";
import { useState } from "react";
import Button from "../elements/button/button";
import SuccessfulModal from "./sucessful";

interface Props {
  requestId: string;
}

const Status = ({ requestId }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const handleApproveRequest = async () => {
    try {
      const response = await fetch("/api/approve-request", {
        method: "PUT",
        body: JSON.stringify({
          id: requestId,
        }),
      });
      if (response.status === 201) setOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button fill name="Approve" handler={handleApproveRequest} />
      {openModal ? (
        <SuccessfulModal
          onClose={() => setOpenModal(false)}
          handler={() => setOpenModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully approved a document!
          </span>
          <span className="text-gray">
            You can see the transaction from the transaction page.
          </span>
          <div className="z-50">
            <Button name="Go Back" fill handler={() => setOpenModal(false)} />
          </div>
        </SuccessfulModal>
      ) : null}
    </>
  );
};

export default Status;
