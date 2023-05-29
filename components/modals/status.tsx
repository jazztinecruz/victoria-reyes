"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Button from "../elements/button/button";
import SuccessfulModal from "./sucessful";

interface Props {
  requestId: string;
}

const Status = ({ requestId }: Props) => {
  const userId = useParams();
  const adminId = userId;

  const [successfullModal, setSuccessfullModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);

  const handleApproveRequest = async () => {
    try {
      const response = await fetch("/api/approve-request", {
        method: "PUT",
        body: JSON.stringify({
          id: requestId,
          adminId: adminId?.userId,
        }),
      });
      if (response.status === 201) setSuccessfullModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeclineRequest = async () => {
    try {
      const response = await fetch("/api/decline-request", {
        method: "PUT",
        body: JSON.stringify({
          id: requestId,
          adminId: adminId?.userId,
        }),
      });
      if (response.status === 201) setDeclineModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center gap-6">
        <Button fill name="Approve" handler={handleApproveRequest} />
        <button
          onClick={handleDeclineRequest}
          className="font-semibold text-red-500">
          Decline
        </button>
      </div>

      {successfullModal ? (
        <SuccessfulModal
          onClose={() => setSuccessfullModal(false)}
          handler={() => setSuccessfullModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully approved a document!
          </span>
          <span className="text-gray">
            You can see the transaction from the transaction page.
          </span>
          <div className="z-50">
            <Button
              name="Go Back"
              fill
              handler={() => setSuccessfullModal(false)}
            />
          </div>
        </SuccessfulModal>
      ) : null}

      {declineModal ? (
        <SuccessfulModal
          onClose={() => setDeclineModal(false)}
          handler={() => setDeclineModal(false)}>
          <span className="mt-5 text-xl font-semibold text-brand">
            You&apos;ve succesfully decline a document!
          </span>
          <div className="z-50">
            <Button
              name="Go Back"
              fill
              handler={() => setDeclineModal(false)}
            />
          </div>
        </SuccessfulModal>
      ) : null}
    </>
  );
};

export default Status;
